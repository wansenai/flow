<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" class="custom-listener-table">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:plus-outlined',
                tooltip: '添加参数',
                onClick: handleAddProperties.bind(null, record)
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
        <template v-if="column.key === 'listenerType'">
          <Tag v-if="record.listenerType === 'taskListener'" color="default">
            {{ listenerTypeObj[record.listenerType] }}
          </Tag>
          <Tag v-if="record.listenerType === 'executionListener'" color="processing">
            {{ listenerTypeObj[record.listenerType] }}
          </Tag>
        </template>
        <template v-if="column.key === 'type'">
          {{ expressionTypeObj[record.type] }}
        </template>
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
          rowKey="id"
          :canResize="false"
          :loading="propertiesTableLoading"
          :dataSource="listenerPropertiesData[record.id]">
          <template #bodyCell="{ column, record: rec }">
            <template v-if="column.key === 'option'">
              <TableAction
                :actions="[
                  {
                    icon: 'clarity:note-edit-line',
                    title: '编辑',
                    onClick: handleEditProperties.bind(null, rec)
                  },
                  {
                    icon: 'ant-design:delete-outlined',
                    color: 'error',
                    title: '删除',
                    popConfirm: {
                      title: '是否确认删除',
                      confirm: handleDeleteProperty.bind(null, rec),
                      placement: 'left'
                    },
                  },
                ]"
              />
            </template>
          </template>
        </BasicTable>
      </template>

    </BasicTable>
    <ListenerModal @register="registerModal" @success="handleSuccess"/>
    <ListenerPropertiesModal @register="registerPropertiesModal" @success="handleUpdateSecretKeySuccess"
                             :closeFunc="handleCloseFunc"/>
  </PageWrapper>
</template>
<script lang="ts">
import { defineComponent, ref, unref, onMounted } from 'vue';
import { BasicTable, useTable, TableAction } from '/@/components/Table';
import {
  getAll,
  deleteById,
  getListByPage,
  getExpressionTypes,
  getListenerTypes,
  getListenerParamList, deleteParamById
} from '/@/api/base/flowListener';
import {Tag} from "ant-design-vue";
import {columns, searchFormSchema, propertiesColumns} from './listener.data';
import {PageWrapper} from '/@/components/Page';
import ListenerModal from './ListenerModal.vue';
import ListenerPropertiesModal from './ListenerPropertiesModal.vue';

import {useModal} from '/@/components/Modal';

export default defineComponent({
  name: 'FlowListener',
  components: {PageWrapper, Tag, BasicTable, TableAction, ListenerModal, ListenerPropertiesModal },
  setup() {
    const [registerModal, {openModal, setModalProps: setListenerModalProps}] = useModal();
    const listenerPropertiesData = ref<object>({});

    const expressionTypeObj = ref({});
    const listenerTypeObj = ref({});
    const propertiesTableLoading = ref(false);
    const expandedRowKeys = ref([]);
    const currentListener = ref<Recordable>({});

    const [registerPropertiesModal, {
      openModal: openPropertiesModal,
      setModalProps: setPropertiesModalProps
    }] = useModal();

    const [registerTable, {reload, getForm, setProps}] = useTable({
      title: '列表',
      api: getListByPage,
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
      rowKey: 'id',
      canResize: true,
      onExpand: (expanded, record) => {
        if (expanded) {
          expandedRowKeys.value = [record.id];
          currentListener.value = record;
          reloadListenerProperties(record.id);
        } else {
          expandedRowKeys.value = [];
        }
      },
      actionColumn: {
        width: 150,
        title: '操作',
        dataIndex: 'action',
      },
    });

    function reloadListenerProperties(listenerId) {
      propertiesTableLoading.value = true;
      getListenerParamList({listenerId}).then(res => {
        if (res && res.length > 0) {
          listenerPropertiesData.value[listenerId] = res;
        } else {
          listenerPropertiesData.value[listenerId] = [];
        }
      }).finally(() => {
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
          listenerType: values.listenerType || 'taskListener'
        }
      });
      setListenerModalProps({
        title: `新增监听`
      });
    }

    onMounted(() => {
      getExpressionTypes().then(res => {
        res.forEach(item => {
          unref(expressionTypeObj)[item.value] = item.label;
        });
      });

      const {updateSchema} = getForm();
      getListenerTypes().then(res => {
        res.forEach(item => {
          unref(listenerTypeObj)[item.value] = item.label;
        })
        updateSchema([
          {
            field: 'listenerType',
            componentProps: {
              options: res,
              onChange: async ({target}) => {
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
        record: {listenerId: record.id, type: 'string'}
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
      setTimeout(()=>{
        reload();
      }, 200);
    }

    function handleCloseFunc() {
      setTimeout(()=>{
        reload();
      }, 200);
      return Promise.resolve(true);
    }

    function handleDeleteProperty(record: Recordable) {
      deleteParamById(record.id).then(() => {
        reloadListenerProperties(unref(currentListener).id);
      }).finally(() => {

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
<style lang="less">
.custom-listener-table {
  .ant-table-expanded-row {
    .ant-table-cell {
      .vben-basic-table {
        .ant-table {
          margin: 0 !important;
        }
      }
    }
  }
}
</style>
