<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" >
      <template #settingLeader="{ model, field }">
        <Tag v-if="model[field]" closable @close="handleDeleteLeader">
          {{model['leaderName']}}[{{model[field]}}]
        </Tag>
        <Button style="width: 110px" type="link" @click="handleSettingLeader">设置领导</Button>
      </template>
    </BasicForm>
    <PersonalSelector @register="registerPersonalModal"
                      @success="handleSettingLeaderSuccess"/>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, Rule, useForm } from '/@/components/Form/index';
  import { deptFormSchema } from './dept.data';
  import { saveOrUpdate, checkEntityExist } from '/@/api/org/dept';
  import { getCompanies } from '/@/api/org/company';
  import { useModal } from '/@/components/Modal';
  import { Button, Tag } from 'ant-design-vue';
  import PersonalSelector from '/@/views/components/selector/personalSelector/index.vue';
  import {CheckExistParams} from "/@/api/model/baseModel";
  import {FormValidPatternEnum} from "/@/enums/constantEnum";

  export default defineComponent({
    name: 'DeptModal',
    components: { BasicModal, BasicForm, PersonalSelector, Button, Tag },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerPersonalModal, { openModal: openPersonalSelector, setModalProps: setPersonalModalProps }] = useModal();

      const selectedPersonList = ref([]);

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: deptFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const getBaseDynamicRules = (params: CheckExistParams)=>{
        return [
          {
            trigger: 'blur',
            validator: (_, value)=>{
              if(value){
                return checkEntityExist({id: params.id, field: params.field, fieldValue: value, fieldName:params.fieldName}).then(res=>{
                  if(res){
                    return Promise.resolve();
                  }else{
                    return Promise.reject(params.fieldName + "已存在，请修改！")
                  }
                }).catch((res)=>{
                  return Promise.reject(res)
                })
              }else{
                return Promise.resolve();
              }
            }
          }
        ] as Rule[];
      }

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        const treeData = await getCompanies();
        let formData = data.record;

        if(formData.id && formData.leaderCode){
          selectedPersonList.value = [{code:formData.leaderCode, name:formData.leaderName}];
        }else{
          selectedPersonList.value = [];
        }
        await updateSchema([
          {
            field: 'companyId',
            componentProps: { treeData },
          },
          {
            field: 'code',
            dynamicRules: () => {
              return [
                {
                  required: true,
                  whitespace: true,
                  message: '编码不能为空！',
                },
                {
                  pattern: new RegExp(FormValidPatternEnum.SN),
                  type: 'string',
                  message: '请输入英文或数字！',
                },
                {
                  max: 64,
                  message: '字符长度不能大于64！',
                },
                ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: 'code', fieldValue: "", fieldName:'编码'}),
              ];
            },
          }
        ]);

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
        } else {
          if(formData.companyId){
            setFieldsValue({
              companyId: formData.companyId
            });
          }
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增部门' : '修改部门'));

      // 弹出选择领导
      function handleSettingLeader() {
        openPersonalSelector(true, {
          selectorProps:{
            multiSelect: false,
            selectedList: selectedPersonList.value,
          }
        });

        setPersonalModalProps({
          title: `设置部门领导`,
          bodyStyle: {padding: '0px', margin: '0px'},
          width: 850, height: 450,
          showOkBtn: true, showCancelBtn: false
        });
      }

      // 设置领导成功回调
      async function handleSettingLeaderSuccess(selectedPersonals: any) {
        selectedPersonList.value = selectedPersonals.map(item=>{return {id: item.id, code: item.code, name: item.name}});
        if(selectedPersonals&& selectedPersonals.length>0){
          setFieldsValue({
            leaderCode: selectedPersonals[0].code,
            leaderName: selectedPersonals[0].name
          });
        }else{
          setFieldsValue({
            leaderCode: '',
            leaderName: ''
          });
        }
      }
      async function handleDeleteLeader() {
        setFieldsValue({
          leaderCode: '',
          leaderName: ''
        });
        selectedPersonList.value = [];
      }

      async function handleSubmit() {
        try {
          setModalProps({confirmLoading: true});
          const values = await validate();
          await saveOrUpdate(values);
          closeModal();
          emit('success');
        } finally {
          setModalProps({confirmLoading: false});
        }
      }

      return {
        registerModal,
        registerForm,
        getTitle,
        registerPersonalModal,
        selectedPersonList,
        handleDeleteLeader,
        handleSettingLeader,
        handleSubmit,
        handleSettingLeaderSuccess,
      };
    },
  });
</script>
