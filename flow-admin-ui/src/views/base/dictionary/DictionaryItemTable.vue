<template>
  <div class="bg-white overflow-hidden dictionary">
    <BasicTable @register="registerTable" >
      <template #toolbar>
        <a-button v-if="dictId!==''" type="primary" @click="handleCreate">新增</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                tooltip: '修改字典项',
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
      </template>
    </BasicTable>
    <DictionaryItemModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { dictionaryItemPageList, deleteItemByIds } from '/@/api/base/dictionary';
  import { PageWrapper } from '/@/components/Page';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';

  import { itemColumns, dictionaryItemSearchFormSchema } from './dictionary.data';
  const { createMessage } = useMessage();
  import DictionaryItemModal from './DictionaryItemModal.vue';

  export default defineComponent({
    name: 'DictionaryItemTable',
    components: { BasicTable, DictionaryItemModal, PageWrapper, TableAction },
    setup() {
      const [registerModal, { openModal, setModalProps }] = useModal();
      const dictId = ref<string>('');
      const [registerTable, { reload, setProps, setTableData }] = useTable({
        title: '字典项列表',
        api: dictionaryItemPageList,
        columns: itemColumns,
        formConfig: {
          labelWidth: 120,
          schemas: dictionaryItemSearchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        immediate: false,
        useSearchForm: true,
        showIndexColumn: false,
        showTableSetting: false,
        bordered: true,
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
        },
      });
      function handleCreate() {
        if(dictId.value === ''){
          createMessage.warning("请选择数据字典！", 2)
          return;
        }
        setModalProps({title: '新增字典项'});
        openModal(true, {
          record: {mainId: dictId.value},
          isUpdate: false,
        });
      }

      function filterByDict(param) {
        dictId.value = param;
        setProps({searchInfo:{mainId: dictId.value}})
        reload({page:1});
      }

      function cleanTableData() {
        setTableData([]);
        dictId.value = '';
      }

      function handleEdit(record: Recordable) {
        setModalProps({title: '修改字典项'});
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteItemByIds(record.id).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        setTimeout(()=>{
          reload();
        }, 200);
      }

      return {
        dictId,
        registerTable,
        registerModal,
        cleanTableData,
        handleCreate,
        handleEdit,
        filterByDict,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>

<style lang="less">
.dictionary {
  .vben-basic-table-form-container {
    padding: 0;

    .vben-basic-form {
      margin-bottom: 0;
    }
  }
}
</style>
