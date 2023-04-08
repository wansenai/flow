<template>
  <PageWrapper v-loading="loadingRef" dense contentFullHeight fixedHeight contentClass="flex">
    <FlowCategoryTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="createActions(record, column)" />
        </template>
      </template>
    </BasicTable>

    <ModelInfoModal @register="registerModal" @success="handleSuccess" @visible-change="handleModelInfoVisibleChange" />
    <BpmnPreviewModal @register="registerBpmnPreviewModal" @success="handleSuccess" />

  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, nextTick } from 'vue';

  import { BasicTable, useTable, TableAction,
    BasicColumn,
    ActionItem,
  } from '/@/components/Table';

  import { getModelInfoPageList, deleteByIds, publishBpmn, stopBpmn } from '/@/api/flowable/bpmn/modelInfo';
  import { PageWrapper } from '/@/components/Page';
  import FlowCategoryTree from '/@/views/components/leftTree/FlowCategoryTree.vue';
  import { DeleteOutlined } from '@ant-design/icons-vue';

  import { useModal } from '/@/components/Modal';
  import ModelInfoModal from './ModelInfoModal.vue';
  import BpmnPreviewModal from '/@/views/components/preview/bpmnPreview/index.vue';
  import {Tag, Popconfirm, Avatar, Badge} from "ant-design-vue";
  import { getAll } from '/@/api/base/app';
  import { columns, searchFormSchema } from './modelInfo.data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useGo } from '/@/hooks/web/usePage';
  import {Authority} from "/@/components/Authority";

  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'Bpmn',
    components: { BasicTable, PageWrapper, FlowCategoryTree, ModelInfoModal,
      TableAction, Avatar, Badge, Popconfirm, Tag, DeleteOutlined,
      Authority, BpmnPreviewModal
    },
    setup() {
      const go = useGo();
      const [registerModal, { openModal, setModalProps: setFlowFormModalProps }] = useModal();
      // const [registerRoleModal, { openModal: openRoleSelector, setModalProps }] = useModal();
      const [registerBpmnPreviewModal, { openModal: openBpmnPreviewModal, setModalProps: setBpmnPreviewProps }] = useModal();

      const currentModelInfo = ref<Recordable>({});
      const currentCategory = ref<Recordable>({});
      const currentCategoryCode = ref<Recordable>(null);
      const loadingRef = ref(false);

      const [registerTable, { getForm, reload }] = useTable({
        title: '列表',
        api: getModelInfoPageList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        searchInfo: {modelType: 0},
        useSearchForm: true,
        showIndexColumn: false,
        bordered: true,
        actionColumn: {
          width: 210,
          align: 'left',
          title: '操作',
          dataIndex: 'action',
        },
      });

      nextTick(()=>{
        const { updateSchema } = getForm();
        getAll().then(res=>{
          updateSchema([
            {
              field: 'appSn',
              componentProps: { options: res , labelField:'id'},
            },
          ]);
        });
      })

      function handleCreate() {
        if(!unref(currentCategory).code){
          createMessage.warning("请选择分类！", 2)
          return;
        }
        openModal(true, {
          record:{categoryCode: unref(currentCategory).code},
          isUpdate: false,
          
        });
        setFlowFormModalProps({
          maskClosable: false,
          footer: null,
          width: '100%',
          canFullscreen: false,
          destroyOnClose: true,
          defaultFullscreen: true,
          useWrapper: true,
        });

      }

      function createActions(record: Recordable, column: BasicColumn): ActionItem[] {
        const { status } = record;
        let actions: ActionItem[] = [
          {
            icon: 'ant-design:eye',
            tooltip: '流程图预览',
            label: '',
            onClick: handlePreview.bind(null, record),
          },
          {
            icon: 'ant-design:play-circle-filled',
            tooltip: '发布',
            label: '',
            popConfirm: {
              title: '确认发布吗?',
              confirm: handlePublish.bind(null, record),
              placement: 'left'
            },
            ifShow: status === 2,
          },
          {
            icon: 'ant-design:stop-twotone',
            tooltip: '停用',
            label: '',
            popConfirm: {
              title: '确认停用吗?',
              confirm: handleStop.bind(null, record),
              placement: 'left'
            },
            ifShow: status === 3 || status === 2,
          },
          {
            icon: 'clarity:note-edit-line',
            tooltip: '修改',
            label: '',
            onClick: handleEdit.bind(null, record),
          },
          {
            icon: 'ant-design:delete-outlined',
            color: 'error',
            tooltip: '删除',
            label: '',
            popConfirm: {
              title: '是否确认删除',
              confirm: handleDelete.bind(null, record),
              placement: 'left'
            },
          },
        ];
        return actions;
      }

      function handlePreview(record: Recordable) {
        openBpmnPreviewModal(true, {
          modelKey: record.modelKey,
          isUpdate: true,
        });
        setBpmnPreviewProps({
          title: `预览-${record.name}`,
          bodyStyle: {padding: '0px', margin: '0px'},
          width: 900, height: 400,
          showOkBtn: false, showCancelBtn: true,
          cancelText: '关闭'
        });
      }

      function handleEdit(record: Recordable) {
        //currentCategoryCode.value = record.categoryCode;
        openModal(true, {
          record,
          isUpdate: true,
        });
        setFlowFormModalProps({
          maskClosable: false,
          footer: null,
          width: '100%',
          destroyOnClose: true,
          canFullscreen: false,
          defaultFullscreen: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteByIds([record.id]).then((res) => {
          reload();
        });
      }

      function handlePublish(record: Recordable) {
        loadingRef.value = true;
        publishBpmn(record.modelId).then((res) => {
          reload();
          createMessage.success("发布成功！",2);
        }).finally(()=>{
          loadingRef.value = false;
        });
      }

      function handleStop(record: Recordable) {
        loadingRef.value = true;
        stopBpmn(record.modelId).then((res) => {
          reload();
        }).finally(()=>{
          loadingRef.value = false;
        });
      }

      function handleSuccess() {
        reload();
      }
      function cancelDeleteRole() {
        // reload();
      }

      function handleSelect(node:any) {
        currentCategory.value = node;
        currentCategoryCode.value = node.code;
        let searchInfo = {categoryCode: node?node.code:''};
        reload({ searchInfo });
      }

      function handleModelInfoVisibleChange(visible) {
        if(!visible){
          try {
            let searchInfo = {categoryCode: currentCategoryCode.value||''};
            setTimeout(()=>{
              reload({ searchInfo });
            }, 200);
          }catch (e){

          }
        }
      }

      return {
        loadingRef,
        registerTable,
        registerBpmnPreviewModal,
        registerModal,
        handlePublish,
        handleStop,
        createActions,
        handleCreate,
        handleEdit,
        cancelDeleteRole,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleModelInfoVisibleChange,
      };
    },
  });
</script>


<style lang="less" scoped>
  .modelInfo-roles{
    >span{
      margin-right: 4px;
    }
  }

</style>
