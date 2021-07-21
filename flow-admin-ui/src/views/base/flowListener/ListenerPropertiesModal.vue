<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, Rule, useForm } from '/@/components/Form';
  import { propertiesFormSchema } from './listener.data';
  import {checkParamEntityExist, saveOrUpdateProperties} from '/@/api/base/flowListener';
  import {CheckExistParams} from "/@/api/model/baseModel";

  export default defineComponent({
    name: 'ListenerPropertiesModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      let expressionTypes = [
        {label: '字符串', value: 'string'},
        {label: '表达式', value: 'expression'},
      ];
      let expressionTypeMap = {};
      expressionTypes.forEach(item=>{
        expressionTypeMap[item.value] = item.label;
      })

      const [registerForm, { resetFields, updateSchema, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: propertiesFormSchema,
        showActionButtonGroup: false,
      });

      const getBaseDynamicRules = (params: CheckExistParams)=>{
        return [
          {
            trigger: 'blur',
            validator: (_, value)=>{
              if(value){
                return checkParamEntityExist({id: params.id, field: params.field, fieldValue: value, fieldName:params.fieldName}).then(res=>{
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
        let formData = data.record;
        updateSchema({
          field: 'value',
          label: expressionTypeMap[formData.type]
        });
        await updateSchema([
          {
            field: 'type',
            componentProps: {
              options: [
                {label: '字符串', value: 'string'},
                {label: '表达式', value: 'expression'},
              ],
              onChange: (e)=>{
                updateSchema({
                  field: 'value',
                  label: expressionTypeMap[e.target.value]
                });
              }
            }
          },
          {
            field: 'name',
            dynamicRules: () => {
              return [
                {
                  required: true,
                  whitespace: true,
                  message: '标识不能为空！',
                },
                {
                  pattern: new RegExp('^[0-9a-zA-Z_]{1,}$'),
                  type: 'string',
                  message: '请输入英文或数字！',
                },
                {
                  max: 80,
                  message: '字符长度不能大于80！',
                },
                ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: 'name', fieldValue: "", fieldName:'名称'}),
              ];
            },
          }
        ]);
        setFieldsValue({
          ...data.record,
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '修改'));

      async function handleSubmit() {
        try {
          setModalProps({ confirmLoading: true });
          const values = await validate();
          await saveOrUpdateProperties(values);
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
