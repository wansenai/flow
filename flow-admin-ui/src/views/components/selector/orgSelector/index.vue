<template>
  <BasicModal wrapClassName="selector-body org" v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <div class="selected-items">
      <Tag v-for="item in selectedList" color="processing" closable @close="(e)=>{e.preventDefault();removeSelectedItem(item.id)}">{{item.shortName}}</Tag>
      <CloseCircleOutlined v-if="selectedList.length > 0" class="close-all" title="清空" @click="removeAllSelected" />
    </div>
    <PageWrapper dense contentClass="flex" >
      <!--<OrgTree class="w-4/4" @select="handleSelect" />-->
      <BasicTree
        ref="treeRef"
        v-loading="treeLoading"
        class="w-4/4 org-tree"
        title="组织"
        search
        :clickRowToExpand="false"
        :treeData="treeData"
        :replaceFields="{ key: 'id', title: 'shortName' }"
        @check="handleCheck"
        @select="handleSelect"
        :checkable="multiSelect?true:false"
        :selectable="multiSelect?false:true"
        :checkStrictly="true"
        autoExpandParent
      />
    </PageWrapper>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, computed, ref, unref, watch, onMounted, nextTick } from 'vue';
  import { BasicModal, useModal, useModalInner } from '/@/components/Modal';
  import { PageWrapper } from '/@/components/Page';
  import { Tag } from 'ant-design-vue';
  import { getOrgTree } from '/@/api/org/dept';
  import {findNode} from "/@/utils/helper/treeHelper";
  import { BasicTree, TreeItem, TreeActionType } from '/@/components/Tree';
  import {Spin} from "ant-design-vue";
  import { CloseCircleOutlined } from '@ant-design/icons-vue';

  export default defineComponent({
    props: {
      title: {
        type: String,
        default: '人员选择'
      },
    },
    name: 'OrgSelector',
    components: {BasicModal,PageWrapper, Tag,  BasicTree, Spin, CloseCircleOutlined },
    setup(_, {emit}) {
      const selectedList = ref([]);
      const multiSelect = ref<boolean>(false);
      const treeData = ref<TreeItem[]>([]);
      const treeLoading = ref<boolean>(false);
      const selectedKeys = ref([]);
      const checkedKeys = ref([]);

      const treeRef = ref<Nullable<TreeActionType>>(null);

      function getTree() {
        const tree = unref(treeRef);
        if (!tree) {
          throw new Error('tree is null!');
        }
        return tree;
      }

      watch(checkedKeys, (nv, ov)=>{
        if(multiSelect.value){
          const selected = nv.map(key=>{
            let node = findNode(treeData.value, (item)=>item.id===key, {id: 'id', pid:'pid', children:'children'});
            node = {...node};
            delete node.children;
            return node
          });

          nextTick(()=>{
            selectedList.value = JSON.parse(JSON.stringify(selected));
            getTree().setCheckedKeys(nv);
          })
        }else{
          const selected = nv.map(key=>{
            let node = findNode(treeData.value, (item)=>item.id===key, {id: 'id', pid:'pid', children:'children'});
            node = {...node};
            delete node.children;
            return node
          });
          nextTick(()=>{
            selectedList.value = JSON.parse(JSON.stringify(selected));
            getTree().setSelectedKeys(nv);
          })
        }
      }, {
        immediate: true,
        deep: true,
      });

      watch(selectedKeys, (nv, ov)=>{
        if(!multiSelect.value){
          const selected = nv.map(key=>{
            let node = findNode(treeData.value, (item)=>item.id===key, {id: 'id', pid:'pid', children:'children'});
            node = {...node};
            delete node.children;
            return node
          });
          nextTick(()=>{
            selectedList.value = JSON.parse(JSON.stringify(selected));
            getTree().setSelectedKeys(nv);
          })
        }
      }, {
        immediate: true,
        deep: true,
      });

      // const [registerModal] = useModal();
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        const {selectorProps} = data;
        treeLoading.value = true;
        multiSelect.value = selectorProps.multiSelect;

        getOrgTree().then(res => {
          treeData.value = (res as unknown) as TreeItem[];
          // 加载已选中项
          console.log(selectorProps.selectedList);
          // selectedList.value = selectorProps.selectedList.map(item=>{return {...item, shortName: item.name}});
          let selecteds = selectorProps.selectedList.map(item=>item.id);
          if(multiSelect.value){
            checkedKeys.value= selecteds;
            setTimeout(()=>{
              getTree().setCheckedKeys(checkedKeys.value);
              getTree().setExpandedKeys(checkedKeys.value);
            }, 200)
          }else{
            selectedKeys.value= selecteds;
            setTimeout(()=>{
              getTree().setSelectedKeys(selectedKeys.value);
              getTree().setExpandedKeys(selectedKeys.value);
            }, 200)
          }
        }).finally(()=>{
          treeLoading.value = false;
        });

        setModalProps({
          wrapClassName: 'selector-content'
        });
      });

      function handleCheck(e) {
        if(!multiSelect.value){
          checkedKeys.value = JSON.parse(JSON.stringify(e.checked.length>0?[e.checked[0]]:[]));
        }else{
          checkedKeys.value = JSON.parse(JSON.stringify(e.checked));
        }
      }

      function handleSelect(e) {
        if(!multiSelect.value){
          selectedKeys.value = e;
        }else{
          debugger;
          //selectedKeys.value = JSON.parse(JSON.stringify(e.checked));
        }
      }

      const getTitle = computed(() => ("选择人员"));

      function removeAllSelected() {
        if(multiSelect.value){
          checkedKeys.value = [];
        }else{
          selectedKeys.value = [];
        }
      }

      function removeSelectedItem(id) {
        if(multiSelect.value){
          checkedKeys.value.splice(checkedKeys.value.findIndex((item)=>item===id), 1)
        }else{
          selectedKeys.value.splice(selectedKeys.value.findIndex((item)=>item===id), 1)
        }
      }

      function handleSubmit() {
        emit('success', selectedList);
        closeModal();
      }

      return {
        treeRef,
        multiSelect,
        treeData,
        treeLoading,
        registerModal,
        getTitle,
        selectedList,
        removeAllSelected,
        removeSelectedItem,
        handleSubmit,
        handleCheck,
        handleSelect,
      };
    },
  });
</script>

<style lang="less" >
  .selector-body.org {
    .org-tree{
      .scroll-container{
        max-height: 348px;
      }
      .basic-tree-header{

      }
    }
    .scroll-container {
      .scrollbar__wrap{
        margin-bottom: 0!important;
        padding: 10px 0px;
      }

      overflow-y: auto;
    }
    .ant-modal-content{
      .scrollbar{
        padding: 0;
        margin: 0;
      }
      .vben-page-wrapper-content{
        >div{
          padding: 0;
        }
      }
      .vben-basic-table-form-container {
        .ant-form{
          margin-bottom: 0;
        }
      }

    }
    .ant-modal {
      .scrollbar{
        margin: 0;
        padding: 0 6px;
      }
    }
    .org-tree{
      margin-top: 10px;
      margin-left: 10px;
    }

    .selected-items{
      position: relative;
      overflow-y: auto;
      margin: 0 10px 0;
      border: 1px dashed #ccc;
      padding: 4px 4px 0;
      min-height: 34px;
      max-height: 60px;
      .ant-tag{
        margin-bottom: 4px;
      }
      .close-all{
        position: absolute;
        right: 6px;
        top: 8px;
        display:none;
        color:rgba(0,0,0,.45);
        cursor: pointer;
      }
      &:hover{
        .close-all{
          display:block;
        }
      }
    }
    .vben-basic-table {
      .ant-table-wrapper{
        padding-top:0;
      }
    }
  }

</style>
