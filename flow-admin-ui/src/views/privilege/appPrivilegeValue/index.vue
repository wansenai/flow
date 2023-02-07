<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <Authority :value="this.$options.name+':'+PerEnum.ADD">
          <a-button type="primary" @click="handleCreate"> 新增 </a-button>
        </Authority>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                auth: this.$options.name+':'+PerEnum.UPDATE,
                tooltip: '修改',
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                auth: this.$options.name+':'+PerEnum.DELETE,
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

    <AppModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getAppPrivilegeValues } from '/@/api/privilege/appPrivilegeValue';
  import { PerEnum } from '/@/enums/perEnum';

  import { columns } from './appPrivilegeValue.data';
  import AppModal from './AppPrivilegeValueModal.vue';

  import { useModal } from '/@/components/Modal';
  import { deleteByIds } from '/@/api/privilege/appPrivilegeValue';
  import {Authority} from "/@/components/Authority";


  export default defineComponent({
    name: 'AppPrivilegeValue',
    components: { BasicTable, TableAction, AppModal, Authority },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: '列表',
        api: getAppPrivilegeValues,
        columns,
        canColDrag: true,
        useSearchForm: false,
        pagination:false,
        bordered: true,
        showIndexColumn: true,
        actionColumn: {
          width: 100,
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

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        debugger;
        deleteByIds([record.id]).then((res) => {
          console.log(res);
          reload();
        });
        console.log(record);
      }

      function handleSuccess() {
        setTimeout(()=>{
          reload();
        }, 200);
      }

      return {
        PerEnum,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
