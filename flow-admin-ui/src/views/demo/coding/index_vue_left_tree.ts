export default (formData)=>{
  let treeNodeId = '';
  if(formData.leftTree === 'CompanyTree'){
    treeNodeId = 'companyId';
  }else if(formData.leftTree === 'OrgTree'){
    treeNodeId = 'deptId';
  }else if(formData.leftTree === 'FlowCategoryTree'){
    treeNodeId = 'categoryId';
  }

  return `<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <${formData.leftTree} class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
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
    </BasicTable>
    <${formData.className}Modal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { get${formData.className}ListByPage, deleteByIds } from '/@/api/${formData.module}/${formData.lowerClassName}';
  import { PageWrapper } from '/@/components/Page';
  import ${formData.leftTree} from '/@/views/compaonents/leftTree/${formData.leftTree}.vue';
  import { useModal } from '/@/components/Modal';
  import ${formData.className}Modal from './${formData.className}Modal.vue';
  import { Popconfirm } from "ant-design-vue";

  import { columns, searchFormSchema } from './${formData.lowerClassName}.data';
  import { useMessage } from '/@/hooks/web/useMessage';

  const { createMessage } = useMessage();

  export default defineComponent({
    name: '${formData.className}',
    components: { BasicTable, PageWrapper, ${formData.leftTree}, ${formData.className}Modal, TableAction, Popconfirm,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const currentTreeNode = ref<Recordable>({});

      const [registerTable, { reload }] = useTable({
        title: '列表',
        api: get${formData.className}ListByPage,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
        },
        canColDrag: true,
        useSearchForm: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 100,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: false,
        },
      });

      function handleCreate() {
        if(!unref(currentTreeNode).code){
          createMessage.warning("请选择分类！", 2)
          return;
        }
        openModal(true, {
          record:{categoryCode: unref(currentTreeNode).code},
          isUpdate: true,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteByIds([record.id]).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        reload();
      }

      function handleSelect(node:any) {
        currentTreeNode.value = node;
        let searchInfo = {${treeNodeId}: node?node.code:''};
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
<\/script>`;
}
