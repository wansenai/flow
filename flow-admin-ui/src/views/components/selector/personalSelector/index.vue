<template>
  <BasicModal wrapClassName="selector-body" v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <div class="selected-items">
      <Tag v-for="item in selectedList" color="processing" closable @close="removeSelectedItem(item.code)">{{item.name}}</Tag>
    </div>
    <PageWrapper dense contentClass="flex" >
      <OrgTree class="w-1/4 xl:w-3/10" @select="handleSelect" />
      <BasicTable @register="registerTable" @selection-change="selectionChanged" @row-click="rowClick" class="w-3/4 xl:w-7/10">
      </BasicTable>
    </PageWrapper>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, computed, ref, onMounted, nextTick } from 'vue';
  import { BasicModal, useModal, useModalInner } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getPersonalPageList } from '/@/api/org/personal';
  import { PageWrapper } from '/@/components/Page';
  import OrgTree from '/@/views/components/leftTree/OrgTree.vue';
  import { Button, Tag } from 'ant-design-vue';
  import { columns, searchFormSchema } from './personal.data';

  export default defineComponent({
    props: {
      title: {
        type: String,
        default: '人员选择'
      },
    },
    name: 'PersonalSelector',
    components: {BasicModal, BasicTable, PageWrapper, OrgTree, TableAction, Tag },
    setup(_, {emit}) {
      const selectedList = ref([]);
      const multiSelect = ref<boolean>(false);
      // const [registerModal] = useModal();
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        const {selectorProps} = data;

        // 加载已选中项
        console.log(selectorProps.selectedList);
        selectedList.value = selectorProps.selectedList;
        multiSelect.value = selectorProps.multiSelect;
        setSelectedRowKeys(selectedList.value.map(item=>item.code));
        setProps({
          rowSelection:{
            type: selectorProps.multiSelect?'checkbox':'radio',
            columnWidth: 30,
          }
        });
        setModalProps({
          wrapClassName: 'selector-content'
        });
        reload();
      });

      // 给表单元素添加回车事件
      searchFormSchema.forEach((item: object)=>{
        if(item){
          item['componentProps']['onkeypress'] = (e)=>{
            if(e.keyCode === 13){
              reload();
            }
          }
        }
      });

      const [registerTable, { reload, setProps, getSelectRows, setSelectedRowKeys }] = useTable({
        title: '',
        api: getPersonalPageList,
        columns,
        immediate: false,
        rowSelection: {
          type: 'checkbox',
          columnWidth: 30,
        },
        formConfig: {
          labelWidth: 60,
          schemas: searchFormSchema,
          showResetButton: false,
          showAdvancedButton: false,
          autoSubmitOnEnter: true,
        },
        clickToRowSelect: true,
        rowKey: 'code',
        size: 'small',
        canResize: false,
        useSearchForm: true,
        showTableSetting: false,
        showIndexColumn: false,
        bordered: true,
        scroll: { y: 280}
      });

      const getTitle = computed(() => ("选择人员"));

      function handleSuccess() {
        reload();
      }

      function removeSelectedItem(code) {
        selectedList.value.splice(selectedList.value.findIndex((item: any)=>item.code===code), 1)
        setSelectedRowKeys(selectedList.value.map((item: any)=>item.code));
      }

      // checkbox/radio选择
      function selectionChanged({rows}) {
        selectedList.value = rows.map(item=>{return {id: item.id, code: item.code, name: item.name}});
      }

      // 行点击
      function rowClick() {
        selectionChanged({rows: getSelectRows()});
      }

      function handleSubmit() {
        const selectedRows = getSelectRows();
        emit('success', selectedRows);
        closeModal();
      }

      // 选择树
      function handleSelect(node:any) {
        let searchInfo = {};
        if(node&&node.sourceType === '1'){
          searchInfo = {companyId: node.id};
        }else if(node&&node.sourceType === '2'){
          searchInfo = {deptId: node.id};
        }
        reload({ searchInfo });
      }

      return {
        registerTable,
        registerModal,
        getTitle,
        selectedList,
        removeSelectedItem,
        rowClick,
        selectionChanged,
        handleSubmit,
        handleSuccess,
        handleSelect,
      };
    },
  });
</script>

<style lang="less">
  .selector-body {
    .scroll-container {
      .scrollbar__wrap{
        margin-bottom: 0!important;
        padding: 10px 0px;
      }
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
      .org-tree{
        .scrollbar__wrap{
          height: 365px;
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
      overflow-y: auto;
      margin: 0 10px 0;
      border: 1px dashed #ccc;
      padding: 4px 4px 0;
      min-height: 34px;
      max-height: 60px;
      .ant-tag{
        margin-bottom: 4px;
      }
    }
    .vben-basic-table {
      .ant-table-wrapper{
        padding-top:0;
      }
    }
  }

</style>
