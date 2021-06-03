<template>
  <BasicModal v-bind="$attrs" @register="registerModal" @ok="handleSubmit">
    <BasicForm @register="registerForm" >
      <template #acls="{ model, field }">
        <BasicTable v-model:value="model[field]" @register="registerTable">
          <template #customTitle>
            <span>
              <Checkbox v-model:checked="checkAllBox" :indeterminate="indeterminate" @click="checkAll" >全选</Checkbox>
            </span>
          </template>
          <template #pvs="{ record }" >
            <AclCheckboxGroup
              @changeCheckAllStatus="handelChangeCheckAllStatus"
              :checkboxList="record.pvs.map(item=>{return {label: item.name, value: item.position, checked: item.flag}})"
              :groupId="model.id"
              :moduleSn="record.sn"
              :moduleId="record.id"
            />
          </template>
        </BasicTable>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import {BasicTable, useTable} from '/@/components/Table';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import {aclColumns, setAclFormSchema } from './group.data';
  import { allocationRoles } from '/@/api/privilege/account';
  import AclCheckboxGroup from './AclCheckboxGroup.vue';

  import { Select, Checkbox} from 'ant-design-vue';
  import {getModuleAclsByGroupId, setAllAcl} from "/@/api/privilege/acl";
  import { forEach } from "/@/utils/helper/treeHelper";

  const CheckboxGroup = Checkbox.Group;

  export default defineComponent({
    name: 'SetAclModal',
    components: { BasicModal, BasicTable, BasicForm, Select, Checkbox, CheckboxGroup, AclCheckboxGroup },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const groupId = ref<string>("");
      const dataSource = ref<any[]>([]);
      const aclsTableLoading = ref<boolean>(true);
      const indeterminate = ref<boolean>(false);
      const checkAllBox = ref<boolean>(false);

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: setAclFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 0,
        },
      });

      const [registerTable, {getDataSource, setTableData, reload, expandAll}] = useTable({
        title: '',
        size: 'small',
        dataSource: dataSource,
        loading: aclsTableLoading,
        immediate: false,
        searchInfo: {},
        columns: aclColumns,
        formConfig: {
          labelWidth: 120,
        },
        canResize: true,
        maxHeight: 400,
        isTreeTable: true,
        useSearchForm: false,
        showTableSetting: false,
        bordered: false,
        showIndexColumn: false,
        pagination: false,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false, title: '给组【'+data.record.name+'('+data.record.sn+')】设置权限' });
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          let groups = data.record.groups||[];
          groups = groups.map(item=>{
            return item.id;
          });
          setFieldsValue({
            ...data.record,
            groups
          });
          groupId.value = data.record.id;
        }
        aclsTableLoading.value = true;
        getModuleAclsByGroupId({groupId: data.record.id}).then(res=>{
          ctrlCheckAllBox(res)
          dataSource.value = res;
          aclsTableLoading.value = false;
          setTimeout(()=>{
            expandAll();
          });
        })
      });

      function ctrlCheckAllBox(treeData){
        let allSize = 0;
        let trueSize = 0;
        let falseSize = 0;
        forEach(treeData, node=>{
          if(node.pvs){
            node.pvs.forEach(item=>{
              allSize ++;
              if(item.flag){
                trueSize++;
              }else{
                falseSize++;
              }
            });
          }
        });
        if(trueSize === allSize){
          checkAllBox.value = true;
          indeterminate.value = false;
        }else if(falseSize === allSize){
          checkAllBox.value = false;
          indeterminate.value = false;
        }else{
          indeterminate.value = true;
        }
      }

      async function handleSubmit() {
        try {
          setModalProps({ confirmLoading: true });
          const values = await validate();
          values.groups = values.groups.map(item=>{
            return {id: item};
          });
          values.userId = values.id;
          delete values.id;

          await allocationRoles(values);
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      function handelChangeCheckAllStatus(){
        getModuleAclsByGroupId({groupId: groupId.value}).then(res=>{
          ctrlCheckAllBox(res)
        });
      }

      // 选择所有权限值
      const checkAll = (e)=>{
        aclsTableLoading.value = true;
        indeterminate.value = false;
        setAllAcl({checked: e.target.checked?1:0, aclInfo: {releaseId: unref(groupId)}}).then(res=>{
          forEach(dataSource.value, node=>{
            node.pvs&&node.pvs.forEach(item=>{
              item.flag = e.target.checked;
            });
          });
          setTableData(dataSource.value);
          aclsTableLoading.value = false;
          setTimeout(()=>{
            expandAll();
          });
        }).catch(()=>{
          aclsTableLoading.value = false;
        });
      }

      return {
        registerTable,
        registerModal,
        indeterminate,
        registerForm,
        checkAllBox,
        handelChangeCheckAllStatus,
        checkAll,
        handleSubmit,
      };
    },
  });
</script>
