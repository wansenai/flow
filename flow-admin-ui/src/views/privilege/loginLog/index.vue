<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <Authority :value="this.$options.name+':'+PerEnum.DELETE">
          <a-button type="danger" @click="handleDeleteAll"> 删除</a-button>
        </Authority>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                tooltip: '删除',
                auth: this.$options.name+':'+PerEnum.DELETE,
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
      </template>
    </template>
    </BasicTable>
    <LoginLogModal @register="registerModal" @success="handleSuccess"/>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import {BasicTable, useTable, TableAction} from '/@/components/Table';
import {useModal} from '/@/components/Modal';
import {columns, searchFormSchema} from './loginLog.data';
import LoginLogModal from './LoginLogModal.vue';
import {getLoginLogListByPage, deleteByIds} from '/@/api/privilege/loginLog';
import {useMessage} from "/@/hooks/web/useMessage";
import {PerEnum} from "/@/enums/perEnum";
import {Authority} from "/@/components/Authority";

export default defineComponent({
  name: 'LoginLog',
  components: {BasicTable, TableAction, LoginLogModal, Authority},
  setup() {
    const {createMessage, createConfirm} = useMessage();
    const [registerModal, {openModal}] = useModal();
    const [registerTable, {reload, getSelectRows}] = useTable({
      title: '列表',
      api: getLoginLogListByPage,
      columns,
      formConfig: {
        labelWidth: 120,
        schemas: searchFormSchema,
        showAdvancedButton: false,
        showResetButton: false,
        autoSubmitOnEnter: true,
      },
      rowSelection: {
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
      },
    });

    function handleCreate() {
      openModal(true, {
        isUpdate: false,
      });
    }

    function handleEdit(record: Recordable) {
      openModal(true, {
        record,
        isUpdate: true,
      });
    }

    function handleDelete(record: Recordable) {
      deleteByIds([record.id]).then(() => {
        reload();
      });
    }

    function handleDeleteAll() {
      const selectedRows = getSelectRows();
      if (selectedRows && selectedRows.length <= 0) {
        createMessage.warn("请选择行！")
        return;
      }
      createConfirm({
        iconType: 'warning',
        title: "提示",
        content: "确定要删除所选行吗？",
        onOk: async () => {
          const ids = selectedRows.map(item => item.id);
          await deleteByIds(ids).then(() => {
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
      handleEdit,
      handleDelete,
      handleDeleteAll,
      handleSuccess,
    };
  },
});
</script>
