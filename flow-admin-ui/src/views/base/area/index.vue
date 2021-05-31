<template>
  <div>
    <BasicTable @register="registerTable" >
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              title: '添加子节点',
              icon: 'ant-design:plus-outlined',
              onClick: handleCreateChild.bind(null, record),
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
              onClick: (e)=>{e.stopPropagation();},
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <AreaModal @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getAreas, deleteByIds, getAreasByPcode } from '/@/api/base/area';

  import { columns, searchFormSchema } from './area.data';
  import AreaModal from './AreaModal.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';
  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'Area',
    components: { BasicTable, TableAction, AreaModal },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload, }] = useTable({
        title: '列表',
        api: getAreas,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        expandRowByClick: true,
        isTreeTable: true,
        canColDrag: true,
        pagination: false,
        useSearchForm: true,
        showTableSetting: false,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: false,
        },
      });

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable, e) {
        e.stopPropagation();
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleCreateChild(record: Recordable, e) {
        e.stopPropagation();
        record = {pcode: record.code};
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable, e) {
        e.stopPropagation();
        if(record.children&&record.children.length>0){
          createMessage.warning("有子节点，不能删除！")
          return;
        }
        deleteByIds(record.code).then(() => {
          reload();
        });
      }

      function doSearch() {
        reload();
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleCreateChild,
        handleDelete,
        handleSuccess,
        doSearch,
      };
    },
  });
</script>
