<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <Authority :value="this.$options.name+':'+PerEnum.DELETE" >
          <a-button type="danger" @click="handleDeleteAll"> 删除 </a-button>
        </Authority>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                tooltip: '详情',
                icon: 'ant-design:file-search-outlined',
                onClick: handleDetail.bind(null, record),
              },
              {
                tooltip: '删除',
                auth: this.$options.name+':'+PerEnum.DELETE,
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  confirm: handleDelete.bind(null, record),
                  placement: 'left'
                }
              }
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <LoginLogModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import { columns, searchFormSchema } from './sysOperRecord.data';
  import LoginLogModal from './SysOperRecordModal.vue';
  import { getListByPage, deleteByIds } from '/@/api/privilege/sysOperRecord';
  import {useMessage} from "/@/hooks/web/useMessage";
  import {PerEnum} from "/@/enums/perEnum";
  import {Authority} from "/@/components/Authority";

  export default defineComponent({
    name: 'SysOperRecord',
    components: { BasicTable, TableAction, LoginLogModal, Authority },
    setup() {
      const { createMessage, createConfirm } = useMessage();
      const [registerModal, { openModal, setModalProps }] = useModal();
      const [registerTable, { reload, getSelectRows }] = useTable({
        title: '列表',
        api: getListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        rowSelection:{
          type: 'checkbox',
          columnWidth: 30,
        },
        canColDrag: true,
        useSearchForm: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 60,
          title: '操作',
          dataIndex: 'action',
          fixed: false,
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleDetail(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
        setModalProps({
          title: '查看详情',
          width: 850
        });
      }

      function handleDelete(record: Recordable) {
        deleteByIds([record.id]).then(() => {
          reload();
        });
      }

      function handleDeleteAll() {
        const selectedRows = getSelectRows();
        if(selectedRows&&selectedRows.length<=0){
          createMessage.warn("请选择行！")
          return;
        }
        createConfirm({iconType: 'warning',
          title: "提示",
          content: "确定要删除所选行吗？",
          onOk: async () => {
            const ids = selectedRows.map(item=>item.id);
            deleteByIds(ids).then(() => {
              reload();
            });
          }
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        PerEnum,
        registerTable,
        registerModal,
        handleCreate,
        handleDetail,
        handleDelete,
        handleDeleteAll,
        handleSuccess,
      };
    },
  });
</script>
