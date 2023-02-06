<template>
  <div class="bg-white overflow-hidden dictionary">
    <BasicTable @register="registerTable" @row-click="clickDictionary"
                @selection-change="changeDictionary">
      <template #toolbar>
        <a-button v-if="dictTypeId!==''" type="primary" @click="handleCreate">新增</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                tooltip: '修改',
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                tooltip: '删除',
                icon: 'ant-design:delete-outlined',
                color: 'error',
                onClick: handleDeleteStop.bind(null, record),
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
    <DictionaryModal @register="registerModal" @success="handleSuccess"/>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { dictionaryPageList, deleteByIds } from '/@/api/base/dictionary';
  import { PageWrapper } from '/@/components/Page';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';

import {columns, searchFormSchema} from './dictionary.data';

const {createMessage} = useMessage();
import DictionaryModal from './DictionaryModal.vue';

  export default defineComponent({
    name: 'DictionaryTable',
    components: { BasicTable, DictionaryModal, PageWrapper, TableAction },
    setup(_, {emit}) {
      const [registerModal, { openModal, setModalProps }] = useModal();
      const dictTypeId = ref<string>('');
      const [registerTable, { reload, setProps, setTableData, setSelectedRowKeys }] = useTable({
        title: '数据字典列表',
        api: dictionaryPageList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        immediate: false,
        clickToRowSelect: true,
        rowSelection: { type: 'radio', columnWidth: 40 },
        useSearchForm: true,
        showIndexColumn: false,
        showTableSetting: false,
        bordered: true,
        pagination: true,
        rowKey: 'id',
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
        },
      });
      function handleCreate() {
        if(dictTypeId.value === ''){
          createMessage.warning("请选择数据类型！", 2)
          return;
        }
        setModalProps({title: '新增字典'});
        openModal(true, {
          record: {dicTypeId: dictTypeId.value},
          isUpdate: false,
        });
      }

      function filterByDictType(typeId) {
        dictTypeId.value = typeId;
        setProps({searchInfo:{dicTypeId: typeId}})
        reload({page:1});
      }

      function cleanTableData() {
        setTableData([]);
        dictTypeId.value = '';
      }

      function handleEdit(record: Recordable, e) {
        e.stopPropagation();
        setModalProps({title: '修改字典'});
        openModal(true, {
          record,
          isUpdate: true,
        });
      }
      function handleDeleteStop(record: Recordable, e) {
        e.stopPropagation();
      }

      function handleDelete(record: Recordable) {
        deleteByIds(record.id).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        setTimeout(()=>{
          reload();
        }, 200);
      }
      function clickDictionary(e) {
        setSelectedRowKeys([e.id]);
        emit('handleSelect', e.id);
      }

    function changeDictionary({keys, rows}) {
      if (rows && rows.length > 0) {
        emit('handleSelect', rows[0].id);
      }
    }

      return {
        registerTable,
        registerModal,
        dictTypeId,
        handleDeleteStop,
        clickDictionary,
        changeDictionary,
        filterByDictType,
        cleanTableData,
        handleCreate,
        handleEdit,
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
