<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <OrgTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
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
            :dropDownActions="[
              {
                label: '分配角色',
                title: '分配角色',
                icon: 'ant-design:usergroup-add',
                onClick: handleSettingRoles.bind(null, record),
              },
              {
                title: '设置领导',
                label: '设置领导',
                icon: 'ant-design:setting-outlined',
                onClick: handleSettingLeader.bind(null, record),
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'name'">
          <Badge>
            <template #count>
              <WomanOutlined v-if="record.sex===2" style="color: #f5222d; font-size: 12px;" />
              <ManOutlined v-else style="color: #1890ff; font-size: 12px;" />
            </template>
            <Avatar :src="record.headImg" @click="previewImageHandle(record.headImg)">
              <template #icon>
                <UserOutlined />
              </template>
            </Avatar>
          </Badge>
          {{record.name}}
        </template>

        <template v-if="column.key === 'roles'">
          <div class="personal-roles">
            <Spin :spinning="deleteRoleLoading&&deleteRoleLoading[record.id]?deleteRoleLoading[record.id]:false">
              <Space>
                <Tag class="role-item" v-for="role in record.roles">
                  {{role.name}}
                  <Popconfirm
                    title="确定要删除吗?"
                    ok-text="确定"
                    cancel-text="取消"
                    @confirm="confirmDeleteRole(record.id, role.id)"
                    @cancel="cancelDeleteRole"
                  >
                    <DeleteOutlined color="error" style="color:#d9595b"/>
                  </Popconfirm>
                </Tag>
              </Space>
            </Spin>
          </div>
        </template>
      </template>
    </BasicTable>
    <Image
      :width="0"
      :height="0"
      :src="previewImage"
      :preview="{visible: previewImageVisible, onVisibleChange: previewImageVisibleChange}"
    />
    <PersonalModal @register="registerModal" @success="handleSuccess" />
    <RoleSelector @register="registerRoleModal" @success="handleSettingRoleSuccess" />
    <PersonalSelector @register="registerPersonalModal" @success="handleSettingLeaderSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import {
    getPersonalPageList,
    allocationRoles,
    deleteByIds,
    deletePersonalRole,
    setLeaderCode
  } from '/@/api/org/personal';
  import { PageWrapper } from '/@/components/Page';
  import OrgTree from '/@/views/components/leftTree/OrgTree.vue';
  import { ManOutlined, WomanOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons-vue';

  import { useModal } from '/@/components/Modal';
  import PersonalModal from './PersonalModal.vue';
  import RoleSelector from '/@/views/components/selector/roleSelector/index.vue';
  import PersonalSelector from '/@/views/components/selector/personalSelector/index.vue';
  import {Tag, Popconfirm, Avatar, Badge, Spin, Space, Image} from "ant-design-vue";

  import { columns, searchFormSchema } from './personal.data';

  export default defineComponent({
    name: 'PersonalManagement',
    components: { BasicTable, Spin, Space, PageWrapper, OrgTree, PersonalModal,
      RoleSelector, PersonalSelector, TableAction, Avatar, Badge, Popconfirm, Tag, Image,
      DeleteOutlined, ManOutlined, WomanOutlined, UserOutlined
    },
    setup() {
      const [registerModal, { openModal, setModalProps }] = useModal();
      const [registerRoleModal, { openModal: openRoleSelector, setModalProps: setRoleModalProps }] = useModal();
      const [registerPersonalModal, { openModal: openPersonalSelector, setModalProps: setPersonalModalProps }] = useModal();
      const currentPersonal = ref<Recordable>({});
      const deleteRoleLoading = ref<object>({});
      const previewImage = ref<string>("");
      const previewImageVisible = ref<boolean>(false);
      const currentNode = ref<Recordable>({});

      const [registerTable, { reload, setLoading }] = useTable({
        title: '列表',
        api: getPersonalPageList,
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        searchInfo: {
          showRoles: true,
        },
        size: 'small',
        useSearchForm: true,
        showIndexColumn: false,
        bordered: true,
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
        },
        beforeFetch:(params)=>{
          let searchInfo = {};
          if(currentNode.value?.sourceType === '1'){
            searchInfo = {companyId: unref(currentNode).id};
          }else if(currentNode.value?.sourceType === '2'){
            searchInfo = {deptId: unref(currentNode).id};
          }
          return {...params, ...searchInfo}
        },
      });

      function handleCreate() {
        let record = {};
        if(unref(currentNode)){
          if(unref(currentNode).sourceType === '1'){
            record = {companyId: unref(currentNode).id};
          }else if(unref(currentNode).sourceType === '2'){
            record = {companyId: unref(currentNode).companyId, deptId: unref(currentNode).id}
          }
        }
        openModal(true, {
          isUpdate: false,
          record
        });
        setModalProps({title: `新增人员`, bodyStyle:{padding:'0px', margin:'0px'},
          width: 800, height: 400,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
        setModalProps({title: `修改人员`, bodyStyle:{padding:'0px', margin:'0px'},
          width: 800, height: 420,
        });
      }
      function handleSettingRoles(record: Recordable) {
        currentPersonal.value = record;
        openRoleSelector(true, {
          personalId: currentPersonal.value.id
        });
        setRoleModalProps({title: `给【${record.name}(${record.code})】添加角色`, bodyStyle:{padding:'0px', margin:'0px'},
          width: 850, height: 450,
          showOkBtn: true, showCancelBtn: false
        });
      }

      function handleSettingLeader(record: Recordable) {
        currentPersonal.value = record;
        let selectedList = [];
        if(record.leaderCode && record.leaderName){
          selectedList.push({id: record.id, code: record.leaderCode, name: record.leaderName});
        }
        openPersonalSelector(true, {
          selectorProps:{
            multiSelect: false,
            selectedList
          }
        });
        setPersonalModalProps({title: `给【${record.name}(${record.code})】设置领导`, bodyStyle:{padding:'0px', margin:'0px'},
          width: 850, height: 450,
          showOkBtn: true, showCancelBtn: false
        });
      }

      async function handleSettingRoleSuccess(selectedRoles: any) {
        const roles = selectedRoles.map(item=>{
          return {id: item.id};
        });
        await allocationRoles({personalId: unref(currentPersonal).id, roles: roles});
        reloadTable();
      }

      async function handleSettingLeaderSuccess(selectedPersonals: any) {
        if(selectedPersonals&& selectedPersonals.length>0){
          setLeaderCode({leaderCode: selectedPersonals[0].code, id: unref(currentPersonal).id}).then(()=>{
            reloadTable();
          }).finally(()=>{

          })
        }
      }

      function handleDelete(record: Recordable) {
        deleteByIds([record.id]).then((res) => {
          console.log(res);
          reload();
        });
      }

      function doSearch() {
        reload();
      }

      function handleSuccess() {
        setTimeout(()=>{
          reload();
        }, 200);
      }
      function cancelDeleteRole() {
        // reload();
      }
      function previewImageHandle(headImg) {
        if(headImg){
          previewImage.value = headImg;
          previewImageVisible.value = true;
        }
      }
      function previewImageVisibleChange(visible, prevVisible) {
        previewImageVisible.value = visible;
      }

      function confirmDeleteRole(personalId:string, roleId:string) {
        deleteRoleLoading.value[personalId] = true;
        deletePersonalRole({personalId, roleId}).then(()=>{
          reloadTable();
        }).finally(()=>{
          deleteRoleLoading.value[personalId] = false;
        });
      }

      function reloadTable(){
        let searchInfo = {};
        if(currentNode.value?.sourceType === '1'){
          searchInfo = {companyId: unref(currentNode).id};
        }else if(currentNode.value?.sourceType === '2'){
          searchInfo = {deptId: unref(currentNode).id};
        }
        reload({ searchInfo });
      }

      function handleSelect(node:any) {
        currentNode.value = node;
        reloadTable();
      }

      return {
        registerTable,
        registerRoleModal,
        registerPersonalModal,
        registerModal,
        deleteRoleLoading,
        previewImage,
        previewImageVisible,
        previewImageHandle,
        previewImageVisibleChange,
        handleCreate,
        handleEdit,
        confirmDeleteRole,
        cancelDeleteRole,
        handleSettingRoles,
        handleSettingLeader,
        handleDelete,
        handleSuccess,
        handleSettingRoleSuccess,
        handleSettingLeaderSuccess,
        handleSelect,
        doSearch,
      };
    },
  });
</script>

<style lang="less">
  .personal-roles{
    .ant-space-align-center{
      flex-flow: wrap;
      .role-item{
        margin: 2px 0;
      }
    }
  }
</style>
