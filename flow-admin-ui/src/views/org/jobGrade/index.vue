<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <JobGradeTypeList class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增</a-button>
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
    <JobGradeModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getJobGrades, deleteById } from '/@/api/org/jobGrade';
  import { PageWrapper } from '/@/components/Page';
  import JobGradeTypeList from '/@/views/components/leftTree/JobGradeTypeList.vue';
  import { useModal } from '/@/components/Modal';
  import JobGradeModal from './JobGradeModal.vue';
  import { Popconfirm } from "ant-design-vue";

  import { columns, searchFormSchema } from './jobGrade.data';
  import { useMessage } from '/@/hooks/web/useMessage';

  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'JobGrade',
    components: { BasicTable, PageWrapper, JobGradeTypeList, JobGradeModal, TableAction, Popconfirm,
    },
    setup() {
      const [registerModal, { openModal, setModalProps }] = useModal();
      const currentTreeNode = ref<Recordable>({});

      const [registerTable, { reload }] = useTable({
        title: '列表',
        api: getJobGrades,
        immediate: false,
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
        pagination: false,
        showIndexColumn: false,
        actionColumn: {
          width: 100,
          title: '操作',
          dataIndex: 'action',
          fixed: false,
        },
      });

      function handleCreate() {
        if(!unref(currentTreeNode).code){
          createMessage.warning("请选择分类！", 2)
          return;
        }
        setModalProps({title: '新增职级'});
        openModal(true, {
          record:{typeId: unref(currentTreeNode).id, typeCode: unref(currentTreeNode).code},
          isUpdate: true,
        });
      }

      function handleEdit(record: Recordable) {
        setModalProps({title: '修改职级'});
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteById([record.id]).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        setTimeout(()=>{
          handleSelect(currentTreeNode.value);
        }, 200);
      }

      function handleSelect(node:any) {
        currentTreeNode.value = node;
        let searchInfo = {typeId: node?node.id:''};
        reload({ searchInfo });
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
      };
    },
  });
</script>
