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
                tooltip: '分配组',
                icon: 'ant-design:usergroup-add',
                onClick: handleSetGroup.bind(null, record),
              },
              {
                tooltip: '设置密码',
                icon: 'ant-design:setting-outlined',
                onClick: handleSetPassword.bind(null, record),
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
                  placement: 'left'
                },
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'image'" >
          <Avatar :src="record.image" @click="previewImageHandle(record.image)">
            <template #icon>
              <UserOutlined />
            </template>
          </Avatar>
        </template>
      </template>
    </BasicTable>
    <div style="width: 0;height: 0;overflow:hidden;">
      <Image
        :width="0"
        :height="0"
        :src="previewImage"
        :preview="{visible: previewImageVisible, onVisibleChange: previewImageVisibleChange}"
      />
    </div>

    <AccountModal @register="registerModal" @success="handleSuccess" />
    <PasswordModal @register="registerPasswordModal" @success="handlePasswordSuccess" />
    <SetGroupModal @register="registerSetGroupModal" @success="handleSetGroupSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getAccountPageList, deleteByIds } from '/@/api/privilege/account';
  import { PageWrapper } from '/@/components/Page';
  import { UserOutlined } from '@ant-design/icons-vue';

  import { useModal } from '/@/components/Modal';
  import AccountModal from './AccountModal.vue';
  import PasswordModal from './PasswordModal.vue';
  import SetGroupModal from './SetGroupModal.vue';

  import { columns, searchFormSchema } from './account.data';
  import { Avatar, Image} from "ant-design-vue";

  export default defineComponent({
    name: 'Account',
    components: { BasicTable, PageWrapper, AccountModal, PasswordModal, SetGroupModal, TableAction, Avatar, Image, UserOutlined },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerPasswordModal, { openModal: openPasswordModal }] = useModal();
      const [registerSetGroupModal, { openModal: openSetGroupModal }] = useModal();

      const previewImage = ref<string>("");
      const previewImageVisible = ref<boolean>(false);

      const [registerTable, { reload }] = useTable({
        title: '列表',
        api: getAccountPageList,
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

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }
      function handleSetPassword(record: Recordable) {
        openPasswordModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleSetGroup(record: Recordable) {
        openSetGroupModal(true, {
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
      function handlePasswordSuccess() {
        reload();
      }

      function handleSetGroupSuccess() {
        reload();
      }
      function previewImageHandle(headImg) {
        if(headImg){
          previewImage.value = headImg;
          previewImageVisible.value = true;
        }
      }
      function previewImageVisibleChange(visible, prevVisible) {
        previewImageVisible.value = visible;
      }

      return {
        registerTable,
        registerModal,
        registerPasswordModal,
        registerSetGroupModal,
        previewImage,
        previewImageVisible,
        previewImageHandle,
        previewImageVisibleChange,
        handleCreate,
        handleEdit,
        handleSetPassword,
        handleSetGroup,
        handleDelete,
        handleSuccess,
        handlePasswordSuccess,
        handleSetGroupSuccess,
      };
    },
  });
</script>
