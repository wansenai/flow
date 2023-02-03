<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <CompanyTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                tooltip: '添加子部门',
                icon: 'ant-design:plus-outlined',
                onClick: handleCreateChild.bind(null, record),
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
      </template>
    </BasicTable>
    <DeptModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getDepts, deleteByIds } from '/@/api/org/dept';
  import { PageWrapper } from '/@/components/Page';
  import CompanyTree from '/@/views/components/leftTree/CompanyTree.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';
  import DeptModal from './DeptModal.vue';

  import { columns, searchFormSchema } from './dept.data';
  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'DeptManagement',
    components: { BasicTable, PageWrapper, CompanyTree, DeptModal, TableAction },
    setup() {
      const [registerModal, { openModal, setModalProps }] = useModal();
      const currentNode = ref<Recordable>({});

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
        expandRowByClick: true,
        useSearchForm: true,
        showIndexColumn: false,
        bordered: true,
        pagination: false,
        actionColumn: {
          width: 150,
          title: '操作',
          dataIndex: 'action',
        },
      });

      function handleCreate() {
        setModalProps({title: '新增部门'});
        openModal(true, {
          record:{companyId: unref(currentNode)?.id},
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable, e) {
        e.stopPropagation();
        setModalProps({title: '修改部门'});
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleCreateChild(record: Recordable, e) {
        e.stopPropagation();
        setModalProps({title: '新增【'+record.name+'】的子部门'});
        record = {pid: record.id};
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
        deleteByIds([record.id]).then((res) => {
          reload();
        });
      }

      function doSearch() {
        reload();
      }

      function handleSuccess() {
        setTimeout(()=>{
          reloadData();
        }, 200);
      }

      function handleSelect(node: any) {
        currentNode.value = node;
        reload({ searchInfo: { companyId: node?node.id:'' } });
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleCreateChild,
        handleDelete,
        handleSuccess,
        handleSelect,
        doSearch,
      };
    },
  });
</script>
