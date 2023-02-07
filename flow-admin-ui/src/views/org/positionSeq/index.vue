<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                tooltip: '添加子序列',
                icon: 'ant-design:plus-outlined',
                onClick: handleCreateChild.bind(null, record),
              },
              {
                tooltip: '修改',
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                tooltip: '删除',
                icon: 'ant-design:delete-outlined',
                color: 'error',
                onClick: (e)=>{e.stopPropagation();},
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
    <PositionSeqModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import { columns, searchFormSchema } from './positionSeq.data';
  import PositionSeqModal from './PositionSeqModal.vue';
  import { getPositionSeqs, deleteByIds } from '/@/api/org/positionSeq';
  import { useMessage } from '/@/hooks/web/useMessage';
  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'PositionSeq',
    components: { BasicTable, TableAction, PositionSeqModal },
    setup() {
      const [registerModal, { openModal, setModalProps }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '列表',
        api: getPositionSeqs,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        isTreeTable: true,
        expandRowByClick: true,
        canColDrag: true,
        pagination:false,
        useSearchForm: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          fixed: false,
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
        setModalProps({
          title: '新增岗位序列'
        });
      }

      function handleEdit(record: Recordable, e) {
        e.stopPropagation();
        openModal(true, {
          record,
          isUpdate: true,
        });
        setModalProps({
          title: '修改岗位序列'
        });
      }

      function handleCreateChild(record: Recordable, e) {
        e.stopPropagation();
        setModalProps({
          title: '新增【'+record.name+'】的子序列'
        });
        record = {pid: record.id, status: 1};
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        if(record.children&&record.children.length>0){
          createMessage.warning("有子节点，不能删除！")
          return;
        }
        deleteByIds([record.id]).then((res) => {
          reload();
        });
      }

      function doSearch() {
        reload();
      }

      function handleSuccess() {
        setTimeout(()=>{
          reload();
        }, 200);
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleCreateChild,
        handleDelete,
        handleSuccess,
        doSearch,
      };
    },
  });
</script>
