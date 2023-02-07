<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <Authority value="Module:0">
          <a-button type="primary" @click="handleCreate"> 新增 </a-button>
        </Authority>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                auth: 'Module:0',
                tooltip: '添加子菜单',
                icon: 'ant-design:plus-outlined',
                onClick: handleCreateChild.bind(null, record),
              },
              {
                auth: 'Module:6',
                tooltip: '设置权限值',
                icon: 'ant-design:setting-outlined',
                onClick: handleEditPValue.bind(null, record),
              },
              {
                auth: 'Module:2',
                tooltip: '修改',
                icon: 'clarity:note-edit-line',
                onClick: handleEdit.bind(null, record),
              },
              {
                auth: 'Module:3',
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

    <ModuleModal @register="registerModal" @success="handleSuccess" />
    <PValueSettingModal @register="registerPValueModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, nextTick } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getModules, deleteByIds } from '/@/api/privilege/module';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { columns, searchFormSchema } from './module.data';
  import ModuleModal from './ModuleModal.vue';
  import PValueSettingModal from './PValueSettingModal.vue';

  import { useModal } from '/@/components/Modal';
  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'Module',
    components: { BasicTable, TableAction, ModuleModal, PValueSettingModal },
    setup() {
      const [registerModal, { openModal, setModalProps }] = useModal();
      const [registerPValueModal, { openModal:openPvalueModal }] = useModal();
      const [registerTable, { reload, expandAll }] = useTable({
        title: '列表',
        api: getModules,
        columns,
        isTreeTable:true,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        expandRowByClick: true,
        canColDrag: true,
        useSearchForm: true,
        pagination: false,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 170,
          title: '操作',
          dataIndex: 'action',
        },
      });
      nextTick(()=>{
        setTimeout(()=>{
          expandAll();
        }, 1000)
      });

      function handleCreate(record: Recordable) {
        setModalProps({title: '新增菜单'});
        openModal(true, {
          record,
          isUpdate: false,
        });
      }
      function handleCreateChild(record: Recordable, e) {
        e.stopPropagation();
        setModalProps({title: '新增【'+record.name+'】的子菜单'});
        record = {pid: record.id};
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleEditPValue(record: Recordable, e) {
        e.stopPropagation();
        openPvalueModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleEdit(record: Recordable, e) {
        e.stopPropagation();
        setModalProps({title: '修改菜单'});
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

      async function handleSuccess() {
        setTimeout(()=>{
          reload();
        }, 200);
        setTimeout(()=>{
          expandAll();
        }, 100)
      }

      return {
        registerTable,
        registerModal,
        registerPValueModal,
        handleCreate,
        handleEdit,
        handleEditPValue,
        handleCreateChild,
        handleDelete,
        handleSuccess,
      };
    },
  });
</script>
