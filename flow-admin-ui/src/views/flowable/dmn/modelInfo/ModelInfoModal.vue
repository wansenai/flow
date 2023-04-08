<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, Rule, useForm } from '/@/components/Form/index';
  import { modelInfoFormSchema } from './modelInfo.data';
  import { checkEntityExist } from '/@/api/flowable/bpmn/modelInfo';
  import { getAll } from '/@/api/base/app';
  import { useGo } from '/@/hooks/web/usePage';
  import {CheckExistParams} from "/@/api/model/baseModel";

  export default defineComponent({
    name: 'ModelInfoModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const go = useGo();

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: modelInfoFormSchema,
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

      const [registerModal, { setModalProps, changeLoading, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        changeLoading(true);
        let appList = null;

        try{
          appList = await getAll();
        }finally {
          changeLoading(false);
        }

        let formData = data.record;

        await updateSchema([
          {
            field: 'appSn',
            componentProps: { options: appList , labelField:'id'},
          },
          {
            field: 'modelKey',
            dynamicRules: () => {
              return [
                {
                  required: true,
                  whitespace: true,
                  message: '编码不能为空！',
                },
                {
                  pattern: new RegExp('^[0-9a-zA-Z_]{1,}$'),
                  type: 'string',
                  message: '请输入英文或数字！',
                },
                {
                  max: 150,
                  message: '字符长度不能大于150！',
                },
                ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: 'modelKey', fieldValue: "", fieldName:'编码'}),
              ];
            },
          }
        ]);

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '编辑'));

      async function handleSubmit() {
        try {
          setModalProps({ confirmLoading: true });
          const values = await validate();
          // const result = await saveOrUpdate(values);
          // go("/flowable/bpmn/designer?modelId=" + result.modelId);

          closeModal();
          emit('success');
        } finally {
          changeLoading(false);
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
