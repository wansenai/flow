<template>
  <PageWrapper v-loading="loadingRef" dense contentFullHeight fixedHeight contentClass="flex">
    <FlowCategoryTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增 </a-button>
        <!--<Authority value="ModelInfo:4">
          <a-button type="primary" @click="openTab">测试打开设计器</a-button>
        </Authority>-->
      </template>
      <template #action="{ record, column }">
        <TableAction :actions="createActions(record, column)" />
      </template>
    </BasicTable>

    <ModelInfoModal @register="registerModal" @success="handleSuccess" />
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
      const [registerModal, { openModal }] = useModal();
      // const [registerRoleModal, { openModal: openRoleSelector, setModalProps }] = useModal();
      const [registerBpmnPreviewModal, { openModal: openBpmnPreviewModal, setModalProps: ssetBpmnPreviewProps }] = useModal();

      const currentModelInfo = ref<Recordable>({});
      const currentCategory = ref<Recordable>({});
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
          slots: { customRender: 'action' },
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
          isUpdate: true,
        });
      }

      function createActions(record: Recordable, column: BasicColumn): ActionItem[] {
        const { status } = record;
        let actions: ActionItem[] = [
          {
            icon: 'ant-design:eye',
            title: '预览',
            label: '',
            onClick: handlePreview.bind(null, record),
          },
          {
            icon: 'ant-design:play-circle-filled',
            title: '发布',
            label: '',
            popConfirm: {
              title: '确认发布吗?',
              confirm: handlePublish.bind(null, record),
            },
            ifShow: status === 2,
          },
          {
            icon: 'ant-design:stop-twotone',
            title: '停用',
            label: '',
            popConfirm: {
              title: '确认停用吗?',
              confirm: handleStop.bind(null, record),
            },
            ifShow: status === 3 || status === 2,
          },
          {
            icon: 'clarity:note-edit-line',
            title: '修改',
            label: '',
            onClick: handleEdit.bind(null, record),
          },
          {
            icon: 'ant-design:delete-outlined',
            color: 'error',
            title: '删除',
            label: '',
            popConfirm: {
              title: '是否确认删除',
              confirm: handleDelete.bind(null, record),
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
        ssetBpmnPreviewProps({
          title: `预览-${record.name}`,
          bodyStyle: {padding: '0px', margin: '0px'},
          width: 900, height: 400,
          showOkBtn: false, showCancelBtn: true,
          cancelText: '关闭'
        });
      }
      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }
      function openTab() {
        go("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX");
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
        let searchInfo = {categoryCode: node?node.code:''};
        reload({ searchInfo });
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
        openTab,
        handleSelect,
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
