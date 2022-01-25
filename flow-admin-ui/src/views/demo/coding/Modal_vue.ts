const genCodeRule = (formData) => {
  const fields = formData.fields;
  const ruleArr:string[] = [];
  let updateSchema = ``;

  fields.forEach((item)=>{
    if(item.type === 'code'){
      const rule = `
        {
          field: '${item.fieldName}',
          dynamicRules: () => {
            return [
              {
                required: true,
                whitespace: true,
                message: '${item.comment}不能为空！',
              },
              {
                pattern: new RegExp('^[0-9a-zA-Z\-_]{1,}$'),
                type: 'string',
                message: '请输入英文或数字！',
              },
              {
                max: ${item.fieldLength},
                message: '字符长度不能大于${item.fieldLength}！',
              }
              ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: '${item.fieldName}', fieldValue: "", fieldName:'${item.comment}'}),
            ];
          },
        },
        
      `;
      ruleArr.push(rule);
    }
  });
  if(ruleArr.length > 0){
    updateSchema = `
      await updateSchema([
        ${ruleArr.join('')}
      ]);
    `;
  }
  return updateSchema;
}

export default (formData)=>{
  return `<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, Rule, useForm } from '/@/components/Form';
  import { formSchema } from './${formData.lowerClassName}.data';
  import { saveOrUpdate, checkEntityExist } from '/@/api/${formData.module}/${formData.lowerClassName}';
  import { CheckExistParams } from "/@/api/model/baseModel";

  export default defineComponent({
    name: '${formData.className}Modal',
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

        ${genCodeRule(formData)}
        
        if (unref(isUpdate)) {
          setFieldsValue({
            ...formData,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '修改'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
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
<\/script>`;
}
