<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <PositionSeqTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                tooltip: '修改',
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                tooltip: '删除',
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  confirm: handleDelete.bind(null, record),
                  placement: 'left'
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <PositionInfoModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getPagerModel, deleteById } from '/@/api/org/positionInfo';
  import { PageWrapper } from '/@/components/Page';
  import PositionSeqTree from '/@/views/components/leftTree/PositionSeqTree.vue';
  import { useModal } from '/@/components/Modal';
  import PositionInfoModal from './PositionInfoModal.vue';
  import { Popconfirm } from "ant-design-vue";

  import { columns, searchFormSchema } from './positionInfo.data';
  import { useMessage } from '/@/hooks/web/useMessage';

  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'PositionInfo',
    components: { BasicTable, PageWrapper, PositionSeqTree, PositionInfoModal, TableAction, Popconfirm,
    },
    setup() {
      const [registerModal, { openModal, setModalProps }] = useModal();
      const currentTreeNode = ref<Recordable>({});

      const [registerTable, { reload, setProps }] = useTable({
        title: '列表',
        api: getPagerModel,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        canColDrag: true,
        useSearchForm: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 100,
          title: '操作',
          dataIndex: 'action',
          fixed: false,
        },
      });

      function handleCreate() {
        if(!unref(currentTreeNode).id){
          createMessage.warning("请选择岗位序列！", 2)
          return;
        }
        setModalProps({title: '新增岗位'});
        openModal(true, {
          record:{positionSeqId: unref(currentTreeNode).id, positionSeqCode: unref(currentTreeNode).code},
          isUpdate: true,
        });
      }

      function handleEdit(record: Recordable) {
        setModalProps({title: '修改岗位'});
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteById([record.id]).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        setTimeout(()=>{
          handleSelect(currentTreeNode.value);
        }, 200);
      }

      function handleSelect(node:any) {
        currentTreeNode.value = node;
        let searchInfo = {positionSeqId: node?node.id:''};
        setProps({searchInfo: searchInfo});
        reload({ searchInfo });
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
      };
    },
  });
</script>
