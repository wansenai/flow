<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              title: '修改',
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              title: '添加参数',
              icon: 'ant-design:setting-outlined',
              onClick: handleEditProperties.bind(null, record),
            },
            {
              title: '删除',
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
      <template #typeRender="{ record }">
        {{ expressionTypeObj[record.type] }}
      </template>
      <template #listenerTypeRender="{ record }">
        {{ listenerTypeObj[record.listenerType] }}
      </template>
    </BasicTable>
    <ListenerModal @register="registerModal" @success="handleSuccess" />
    <ListenerPropertiesModal @register="registerPropertiesModal" @success="handleUpdateSecretKeySuccess" :closeFunc="handleCloseFunc"/>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {getAll, deleteById, getExpressionTypes, getListenerTypes} from '/@/api/base/flowListener';

  import { columns, searchFormSchema } from './listener.data';
  import ListenerModal from './ListenerModal.vue';
  import ListenerPropertiesModal from './ListenerPropertiesModal.vue';

  import { useModal } from '/@/components/Modal';

  export default defineComponent({
    name: 'FlowListener',
    components: { BasicTable, TableAction, ListenerModal, ListenerPropertiesModal },
    setup() {

      const [registerModal, { openModal }] = useModal();

      const expressionTypeObj = ref({});
      const listenerTypeObj = ref({});

      const [registerPropertiesModal, { openModal: openPropertiesModal, setModalProps }] = useModal();

      const [registerTable, { reload, getForm, setProps }] = useTable({
        title: '列表',
        api: getAll,
        columns,
        formConfig: {
          labelWidth: 80,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        canColDrag: true,
        useSearchForm: true,
        bordered: true,
        showIndexColumn: true,
        pagination: false,
        actionColumn: {
          width: 140,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
          record: {
            listenerType: 'taskListener'
          }
        });
      }

      onMounted(()=>{
        getExpressionTypes().then(res=>{
          res.forEach(item=>{
            expressionTypeObj.value[item.value] = item.label;
          });
        });

        const {updateSchema} = getForm();
        getListenerTypes().then(res=>{
          res.forEach(item=>{
            listenerTypeObj.value[item.value] = item.label;
          })
          updateSchema([
            {
              field: 'listenerType',
              defaultValue: res[0].value,
              componentProps: {
                options: res,
                onChange: ({target})=>{
                  setProps({
                    searchInfo: {listenerType: target.value}
                  });
                  reload();
                }
              }
            }
          ]);
        })
      });

      function handleEditProperties(record: Recordable) {
        openPropertiesModal(true, {
          record,
          isUpdate: true,
        });
        setModalProps({
          title: `修改【${record.name}】的属性`,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteById(record.id).then(() => {
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
        registerPropertiesModal,
        expressionTypeObj,
        listenerTypeObj,
        handleCloseFunc,
        handleCreate,
        handleEditProperties,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleUpdateSecretKeySuccess,
      };
    },
  });
</script>
