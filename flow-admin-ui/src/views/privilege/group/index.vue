<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <Authority :value="this.$options.name+':'+PerEnum.ADD" >
          <a-button type="primary" @click="handleCreate"> 新增</a-button>
        </Authority>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                auth: this.$options.name+':'+PerEnum.AUTH,
                tooltip: '分配权限',
                icon: 'ant-design:safety',
                onClick: handleAcl.bind(null, record),
              },
              {
                auth: this.$options.name+':'+PerEnum.AUTH,
                tooltip: '分配用户',
                icon: 'ant-design:user-add',
                onClick: handleAddUser.bind(null, record),
              },
              {
                // auth: this.$options.name+':'+PerEnum.UPDATE,
                tooltip: '修改',
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                // auth: this.$options.name+':'+PerEnum.DELETE,
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

    <GroupModal @register="registerModal" @success="handleSuccess"/>
    <SetAccountModal @register="registerSetAccountModal" @success="handleSetAccountSuccess"/>
    <SetAclModal @register="registerSetAclModal" @success="handleSetAclSuccess"/>
  </div>
</template>
<script lang="ts">
  import {defineComponent} from 'vue';
  import {BasicTable, useTable, TableAction} from '/@/components/Table';
  import {getGroupListByPage, deleteByIds} from '/@/api/privilege/group';

  import {columns, searchFormSchema} from './group.data';
  import GroupModal from './GroupModal.vue';
  import SetAccountModal from './SetAccountModal.vue';
  import SetAclModal from './SetAclModal.vue';

  import {useModal} from '/@/components/Modal';
  import {Authority} from "/@/components/Authority";
  import { PerEnum } from '/@/enums/perEnum';

  export default defineComponent({
    name: 'Group',
    components: {BasicTable, TableAction, GroupModal, SetAccountModal, SetAclModal, Authority},
    setup() {
      const [registerModal, {openModal}] = useModal();
      const [registerSetAccountModal, {openModal: openSetAccountModal}] = useModal();
      const [registerSetAclModal, {openModal: openSetAclModal, setModalProps}] = useModal();
      const [registerTable, {reload}] = useTable({
        title: '列表',
        api: getGroupListByPage,
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
          width: 160,
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

      function handleAcl(record: Recordable) {
        openSetAclModal(true, {
          record,
          isUpdate: true,
        });
        setModalProps({bodyStyle:{padding:'0px', margin:'0px'}, width: 800, height: 400, showOkBtn: false, cancelText:'关闭'});
      }

      function handleAddUser(record: Recordable) {
        openSetAccountModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteByIds([record.id]).then((res) => {
          reload();
        });
      }

      function handleSuccess() {
        setTimeout(()=>{
          reload();
        }, 200);
      }
      function handleSetAccountSuccess() {
        setTimeout(()=>{
          reload();
        }, 200);
      }
      function handleSetAclSuccess() {
        reload();
      }

      return {
        PerEnum,
        registerTable,
        registerModal,
        registerSetAccountModal,
        registerSetAclModal,
        handleCreate,
        handleEdit,
        handleAcl,
        handleAddUser,
        handleDelete,
        handleSuccess,
        handleSetAccountSuccess,
        handleSetAclSuccess,
      };
    },
  });
</script>
