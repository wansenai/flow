<template>
  <PageWrapper dense contentFullHeight contentClass="flex" class="p-4">
    <DictTypeTree class="w-1/5 xl:w-1/5" @select="handleDictTypeSelect" />
    <DictionaryTable ref="dictionaryRef" @handleSelect="handleDictSelect" class="w-2/5 xl:w-2/5 ml-2 mr-2" />
    <DictionaryItemTable ref="dictionaryItemRef" class="w-2/5 xl:w-2/5" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getDepts, deleteByIds } from '/@/api/org/dept';
  import { PageWrapper } from '/@/components/Page';
  import DictTypeTree from './DictTypeTree.vue';
  import DictionaryTable from './DictionaryTable.vue';
  import DictionaryItemTable from './DictionaryItemTable.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';

  import { columns, searchFormSchema } from './dictionary.data';
  const { createMessage } = useMessage();

  export default defineComponent({
    components: { BasicTable, PageWrapper, DictTypeTree, DictionaryTable, DictionaryItemTable, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const dictionaryRef = ref();
      const dictionaryItemRef = ref();
      const [registerTable, { reload }] = useTable({
        title: '列表',
        api: getDepts,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        showIndexColumn: false,
        bordered: true,
        pagination: false,
        actionColumn: {
          width: 150,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        if(record.children&&record.children.length>0){
          createMessage.warning("有子节点，不能删除！")
          return;
        }
        deleteByIds([record.id]).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        reload();
      }

      function handleDictTypeSelect(dictTypeId = '') {
        if(dictTypeId){
          dictionaryRef.value.filterByDictType(dictTypeId);
          dictionaryItemRef.value.cleanTableData();
        }else{
          dictionaryRef.value.cleanTableData();
        }
      }
      function handleDictSelect(dictId) {
        if(dictId){
          dictionaryItemRef.value.filterByDict(dictId);
        }else{
          dictionaryItemRef.value.cleanTableData();
        }
      }

      return {
        dictionaryRef,
        dictionaryItemRef,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDictSelect,
        handleDelete,
        handleSuccess,
        handleDictTypeSelect,
      };
    },
  });
</script>
