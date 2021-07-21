<template>
  <div>
    <BasicTable @register="registerTable" dense contentFullHeight fixedHeight >
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'ant-design:plus-outlined',
              title: '添加参数',
              onClick: handleAddProperties.bind(null, record)
            },
            {
              title: '修改',
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
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
                  icon: 'clarity:note-edit-line',
                  title: '编辑',
                  onClick: handleEditProperties.bind(null, record)
                },
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
  import { defineComponent, ref, unref, onMounted } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    getAll,
    deleteById,
    getExpressionTypes,
    getListenerTypes,
    getListenerParamList, deleteParamById
  } from '/@/api/base/flowListener';

  import { columns, searchFormSchema, propertiesColumns } from './listener.data';
  import ListenerModal from './ListenerModal.vue';
  import ListenerPropertiesModal from './ListenerPropertiesModal.vue';

  import { useModal } from '/@/components/Modal';

  export default defineComponent({
    name: 'FlowListener',
    components: { BasicTable, TableAction, ListenerModal, ListenerPropertiesModal },
    setup() {
      const [registerModal, { openModal, setModalProps: setListenerModalProps }] = useModal();
      const listenerPropertiesData = ref<object>({});

      const expressionTypeObj = ref({});
      const listenerTypeObj = ref({});
      const propertiesTableLoading = ref(false);
      const expandedRowKeys = ref([]);
      const currentListener = ref<Recordable>({});

      const [registerPropertiesModal, { openModal: openPropertiesModal, setModalProps: setPropertiesModalProps }] = useModal();

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
        useSearchForm: true,
        bordered: true,
        showIndexColumn: true,
        showTableSetting: false,
        pagination: false,
        rowKey: 'id',
        canResize: true,
        onExpand: (expanded, record)=>{
          if(expanded){
            expandedRowKeys.value = [record.id];
            currentListener.value = record;
            reloadListenerProperties(record.id);
          }else{
            expandedRowKeys.value = [];
          }
        },
        resizeHeightOffset:-50,
      });

      function reloadListenerProperties(listenerId){
        propertiesTableLoading.value = true;
        getListenerParamList({listenerId}).then(res=>{
          if(res && res.length > 0){
            listenerPropertiesData.value[listenerId] = res;
          }else{
            listenerPropertiesData.value[listenerId] = [];
          }
        }).finally(()=>{
          propertiesTableLoading.value = false;
        });
      }

      async function handleCreate() {
        // 获取搜索框上的监听类型传入到新增页面
        const {validate} = getForm();
        const values = await validate();

        openModal(true, {
          isUpdate: false,
          record: {
            listenerType: values.listenerType||'taskListener'
          }
        });
        setListenerModalProps({
          title: `新增${unref(listenerTypeObj)[values.listenerType]}`
        });
      }

      onMounted(()=>{
        getExpressionTypes().then(res=>{
          res.forEach(item=>{
            unref(expressionTypeObj)[item.value] = item.label;
          });
        });

        const {updateSchema} = getForm();
        getListenerTypes().then(res=>{
          res.forEach(item=>{
            unref(listenerTypeObj)[item.value] = item.label;
          })
          updateSchema([
            {
              field: 'listenerType',
              defaultValue: res[0].value,
              componentProps: {
                options: res,
                onChange: async ({target})=>{
                  // 切换类型时先清空搜索条件
                  const {setFieldsValue} = getForm();
                  await setFieldsValue({name: ''});
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

      function handleAddProperties(record: Recordable, e) {
        e.stopPropagation();
        currentListener.value = record;
        openPropertiesModal(true, {
          isUpdate: false,
          record: {listenerId: record.id}
        });
        setPropertiesModalProps({
          title: `添加【${record.name}】的属性`,
        });
      }

      function handleEditProperties(record: Recordable) {
        openPropertiesModal(true, {
          isUpdate: true,
          record: record
        });
        setPropertiesModalProps({
          title: `修改【${record.name}】的属性`,
        });
      }

      function handleEdit(record: Recordable, e) {
        e.stopPropagation();
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable, e) {
        e.stopPropagation();
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
        deleteParamById(record.id).then(()=>{
          reloadListenerProperties(unref(currentListener).id);
        }).finally(()=>{

        });
      }
      function handleUpdateSecretKeySuccess() {
        reloadListenerProperties(unref(currentListener).id);
        expandedRowKeys.value = [unref(currentListener).id];
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
        handleAddProperties,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleUpdateSecretKeySuccess,
      };
    },
  });
</script>
