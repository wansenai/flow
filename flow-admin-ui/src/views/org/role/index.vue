<template>

  <PageWrapper dense contentFullHeight contentClass="flex">
    <Affix offset-top="8" class="w-1/4 xl:w-1/5" >
      <CompanyTree contentFullHeight @select="handleSelect" />
    </Affix>

    <BasicTable @register="registerTable" class="personal w-3/4 xl:w-4/5">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                tooltip: '添加人员',
                icon: 'ant-design:user-add',
                onClick: handleAddPersonal.bind(null, record),
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

      <template #expandedRowRender="{ record, index, indent, expanded }">
        <BasicTable
          title=""
          size="small"
          :columns="personalColumns"
          :useSearchForm="false"
          :immediate="false"
          :showIndexColumn="true"
          :showTableSetting="false"
          :bordered="true"
          :pagination="false"
          actionColumn="{
              align: 'center'
            }"
          rowKey="id"
          :canResize="false"
          :searchInfo="{roleId: record.id}"
          :dataSource="rolePersonalData[record.id]"
          class="w-4/4 xl:w-5/5">
          <template #customName="{ rec }">
              <span>
                姓名
                <Search
                  v-model:value="searchPersonTxt[record.id]"
                  placeholder="姓名/工号/手机"
                  style="width: 150px"
                  size="small"
                  allowClear
                  @search="(v)=>{onSearchPerson(record.id, v)}"
                />
              </span>
          </template>
          <template #action="{ record }">
            <TableAction
              :actions="[
                  {
                    icon: 'ant-design:delete-outlined',
                    color: 'error',
                    popConfirm: {
                      title: '是否确认删除',
                      confirm: handleDeletePersonal.bind(null, record),
                      placement: 'left'
                    },
                  },
                ]"
            />
          </template>
          <template #setManagerRange="{ record }">
            <div class="manager-range" style="text-align: right;">
              <Space size="small">
                <Tag color="processing">中国石化</Tag>
                <Tag color="processing">中国石化</Tag>
              </Space>
              <SettingOutlined class="ant-btn-link"/>
            </div>
          </template>
        </BasicTable>
      </template>

    </BasicTable>

    <RoleModal @register="registerModal" @success="handleSuccess" />

    <PersonalSelector @register="registerPersonalModal" @success="handleSettingPersonalSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { Input, Tag, Space, Affix} from 'ant-design-vue';
  import { SettingOutlined } from '@ant-design/icons-vue';


  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    getRoleListByPage,
    deleteByIds,
    getPersonalsByRole,
    allocationPersonals
  } from '/@/api/org/role';
  import { PageWrapper } from '/@/components/Page';
  import CompanyTree from '/@/views/components/leftTree/CompanyTree.vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useModal } from '/@/components/Modal';
  import RoleModal from './RoleModal.vue';
  import PersonalSelector from '/@/views/components/selector/personalSelector/index.vue';

  import { columns, personalColumns, searchFormSchema } from './role.data';
  import {deletePersonalRole} from "/@/api/org/personal";
  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'RoleManagement',
    components: {
      BasicTable,
      PageWrapper,
      CompanyTree,
      RoleModal,
      PersonalSelector, TableAction,
      Input,
      Tag,
      Affix,
      Space,
      Search:Input.Search,
      SettingOutlined,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      // 人员选择弹窗
      const [registerPersonalModal, { openModal: openPersonalSelector, setModalProps: setPersonalModalProps }] = useModal();

      const currentRole = ref<Recordable>({});
      const expandedRowKeys = ref([]);
      const searchPersonTxt = ref<object>({});

      const rolePersonalData = ref<object>({});

      // 给表单元素添加回车事件
      searchFormSchema.forEach((item: object)=>{
        if(item){
          item['componentProps']['onkeypress'] = (e)=>{
            if(e.keyCode === 13){
              reload();
            }
          }
        }
      });

      const [registerTable, { reload }] = useTable({
        title: '列表',
        api: getRoleListByPage,
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
        showTableSetting: false,
        bordered: false,
        pagination: true,
        onExpand: (expanded, record)=>{
          if(expanded){
            currentRole.value = record;
            searchPersonTxt.value[record.id] = "";
            reloadRolePersonal(record.id, searchPersonTxt.value[record.id]);
          }else{
            expandedRowKeys.value = [];
          }
        },
        rowKey: 'id',
        canResize: false,
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

      function reloadRolePersonal(roleId, keyword){
        getPersonalsByRole({roleId: roleId, personal:{keyword: keyword||''}}).then(res=>{
          rolePersonalData.value[roleId] = res;
        });
      }

      // 人员选择弹窗
      function handleAddPersonal(record: Recordable, e) {
        e.stopPropagation();
        currentRole.value = record;

        // 加载已选择的数据
        getPersonalsByRole({roleId: record.id}).then((item: any)=>{
          openPersonalSelector(true, {
            selectorProps:{
              multiSelect: true,
              selectedList: item.map((itm:any)=>{return {code: itm.code, name: itm.name}}),
            }
          });

          setPersonalModalProps({
            title: `设置角色【${record.name}】下的人员`,
            bodyStyle: {padding: '0px', margin: '0px'},
            width: 850, height: 450,
            showOkBtn: true, showCancelBtn: false
          });
        }).finally(()=>{

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

      function handleDeletePersonal(record: Recordable) {
        deletePersonalRole({roleId: record.roleId, personalId: record.personalId}).then(()=>{
          reloadRolePersonal(record.roleId, '');
        });
      }

      function handleSuccess() {
        setTimeout(()=>{
          reload();
        }, 200);
      }

      function onSearchPerson(roleId, val) {
        reloadRolePersonal(roleId, val);
      }

      // 人员选择后回调
      function handleSettingPersonalSuccess(selectedPersonal) {
        console.log(JSON.stringify(selectedPersonal));
        const personals = selectedPersonal.map(item=>{
          return {id: item.id, code: item.code};
        });
        allocationPersonals({roleId: unref(currentRole).id, personalList: personals}).then(()=>{
          expandedRowKeys.value = [unref(currentRole).id];
          // reloadPersonal({roleId: unref(currentRole).id});
          reloadRolePersonal(unref(currentRole).id, searchPersonTxt.value[unref(currentRole).id]);
        });
      }

      function handleSelect(node: any) {
        reload({ searchInfo: { companyId: node?node.id:'' } });
      }

      return {
        personalColumns,
        currentRole,
        rolePersonalData,
        onSearchPerson,
        searchPersonTxt,
        registerTable,
        registerModal,
        registerPersonalModal,
        handleCreate,
        handleEdit,
        handleAddPersonal,
        handleDelete,
        handleDeletePersonal,
        handleSuccess,
        handleSettingPersonalSuccess,
        handleSelect,
      };
    },
  });
</script>

<style lang="less">
  //.personal{
  //  .ant-table-expanded-row{
  //    >td{
  //      padding: 0px!important;
  //    }
  //  }
  //}
</style>
