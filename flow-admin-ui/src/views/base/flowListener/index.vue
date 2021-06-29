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

      <template #expandedRowRender="{ record, index, indent, expanded }">
        <BasicTable
          title=""
          size="small"
          :columns="propertiesColumns"
          :useSearchForm="false"
          :immediate="false"
          :showIndexColumn="true"
          :showTableSetting="false"
          :bordered="true"
          :pagination="false"
          :emptyDataIsShowTable="false"
          :inset="true"
          actionColumn="{
            align: 'center'
          }"
          rowKey="id"
          :canResize="false"
          :loading="propertiesTableLoading"
          :dataSource="listenerPropertiesData[record.id]" >
          <template #action="{ record }">
            <TableAction
              :actions="[
                {
                  icon: 'ant-design:delete-outlined',
                  color: 'error',
                  title: '删除',
                  popConfirm: {
                    title: '是否确认删除',
                    confirm: handleDeleteProperty.bind(null, record),
                  },
                },
              ]"
            />
          </template>
        </BasicTable>

      </template>

    </BasicTable>
    <ListenerModal @register="registerModal" @success="handleSuccess" />
    <ListenerPropertiesModal @register="registerPropertiesModal" @success="handleUpdateSecretKeySuccess" :closeFunc="handleCloseFunc"/>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    getAll,
    deleteById,
    getExpressionTypes,
    getListenerTypes,
    getListenerParamList
  } from '/@/api/base/flowListener';

  import { columns, searchFormSchema, propertiesColumns } from './listener.data';
  import ListenerModal from './ListenerModal.vue';
  import ListenerPropertiesModal from './ListenerPropertiesModal.vue';

  import { useModal } from '/@/components/Modal';

  export default defineComponent({
    name: 'FlowListener',
    components: { BasicTable, TableAction, ListenerModal, ListenerPropertiesModal },
    setup() {

      const [registerModal, { openModal }] = useModal();
      const listenerPropertiesData = ref<object>({});

      const expressionTypeObj = ref({});
      const listenerTypeObj = ref({});
      const propertiesTableLoading = ref(false);
      const expandedRowKeys = ref([]);
      const currentListener = ref<Recordable>({});


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
        expandedRowKeys: expandedRowKeys,
        expandRowByClick: true,
        canColDrag: true,
        useSearchForm: true,
        bordered: true,
        showIndexColumn: true,
        pagination: false,
        rowKey: 'id',
        canResize: true,
        actionColumn: {
          width: 140,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
        onExpand: (expanded, record)=>{
          if(expanded){
            expandedRowKeys.value = [record.id];
            currentListener.value = record;
            reloadListenerProperties(record.id);
          }else{
            expandedRowKeys.value = [];
          }
        },
      });


      function reloadListenerProperties(listenerId){
        propertiesTableLoading.value = true;

        getListenerParamList({listenerId}).then(res=>{
          listenerPropertiesData.value[listenerId] = res;
        }).finally(()=>{
          propertiesTableLoading.value = false;
        });
      }

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

      function handleDeleteProperty(record: Recordable) {
        /*deleteById(record.id).then(()=>{
          reloadRolePersonal(unref(currentRole).id, '');
        }).finally(()=>{

        });*/
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
        propertiesColumns,
        listenerPropertiesData,
        propertiesTableLoading,
        handleDeleteProperty,
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
