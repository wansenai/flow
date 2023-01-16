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
                tooltip: '查看密钥',
                icon: 'ant-design:key-outlined',
                onClick: handleEditSecretKey.bind(null, record),
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
    <AppModal @register="registerModal" @success="handleSuccess"/>
    <SecretKeyModal @register="registerSecretKeyModal" @success="handleUpdateSecretKeySuccess"
                    :closeFunc="handleCloseFunc"/>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getAppListByPage } from '/@/api/base/app';
  import { columns, searchFormSchema } from './app.data';
  import AppModal from './AppModal.vue';
  import SecretKeyModal from './SecretKeyModal.vue';
  import { useModal } from '/@/components/Modal';
  import { deleteByIds } from '/@/api/base/app';

  export default defineComponent({
    name: 'App',
    components: { BasicTable, TableAction, AppModal, SecretKeyModal },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerSecretKeyModal, { openModal: openSecretKeyModal, setModalProps }] = useModal();

      const [registerTable, { reload }] = useTable({
        title: '列表',
        api: getAppListByPage,
        columns,
        formConfig: {
          labelWidth: 100,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        canColDrag: true,
        useSearchForm: true,
        bordered: true,
        showIndexColumn: true,
        actionColumn: {
          width: 140,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEditSecretKey(record: Recordable) {
        openSecretKeyModal(true, {
          record,
          isUpdate: true,
        });
        setModalProps({
          title: `修改【${record.name}】的密钥`,
          showOkBtn: false,
          cancelText: '关闭',
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

      function handleSuccess() {
        reload();
      }
      function handleCloseFunc() {
        reload();
        return Promise.resolve(true);
      }

      function handleUpdateSecretKeySuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        registerSecretKeyModal,
        handleCloseFunc,
        handleCreate,
        handleEditSecretKey,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleUpdateSecretKeySuccess,
      };
    },
  });
</script>
