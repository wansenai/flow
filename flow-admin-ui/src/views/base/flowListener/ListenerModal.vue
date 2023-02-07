<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, Rule, useForm } from '/@/components/Form';
  import { formSchema } from './listener.data';
  import {saveOrUpdate, checkEntityExist, getExpressionTypes, getListenerTypes} from '/@/api/base/flowListener';
  import {CheckExistParams} from "/@/api/model/baseModel";

  export default defineComponent({
    name: 'ListenerModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);

      const [registerForm, { resetFields, updateSchema, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
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
        let formData = data.record;

        const expressionTypes = await getExpressionTypes();
        const listenerTypes = await getListenerTypes();
        const expressionTypeMap = {};
        expressionTypes.forEach(item=>{
          expressionTypeMap[item.value] = item.label;
        });
        updateSchema({
          field: 'value',
          label: expressionTypeMap[formData.type||'class']
        });
        await updateSchema([
          {
            field: 'name',
            dynamicRules: () => {
              return [
                {
                  required: true,
                  whitespace: true,
                  message: '名称不能为空！',
                },
                {
                  max: 80,
                  message: '字符长度不能大于80！',
                },
                ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: 'name', fieldValue: "", fieldName:'名称'}),
              ];
            },
          },
          {
            field: 'type',
            componentProps: {
              options: expressionTypes,
              onChange: (e)=>{
                updateSchema({
                  field: 'value',
                  label: expressionTypeMap[e.target.value]
                });
              }
            }
          },
          {
            field: 'listenerType',
            componentProps: {
              options: listenerTypes
            }
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
          await saveOrUpdate(values);
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
