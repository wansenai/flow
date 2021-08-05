<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm"/>
  </BasicModal>
</template>
<script lang="ts">
  import {defineComponent, ref, computed, unref} from 'vue';
  import {BasicModal, useModalInner} from '/@/components/Modal';
  import {BasicForm, Rule, useForm} from '/@/components/Form/index';
  import {formSchema} from './module.data';
  import {saveOrUpdate, checkEntityExist} from '/@/api/privilege/module';
  import {CheckExistParams} from "/@/api/model/baseModel";

  export default defineComponent({
    name: 'ModuleModal',
    components: {BasicModal, BasicForm},
    emits: ['success', 'register'],
    setup(_, {emit}) {
      const isUpdate = ref(true);

      const [registerForm, {resetFields, setFieldsValue, updateSchema, validate}] = useForm({
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

      const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) => {
        await resetFields();
        setModalProps({confirmLoading: false});
        isUpdate.value = !!data?.isUpdate;
        let formData = data.record;

        await updateSchema([
          {
            field: 'sn',
            dynamicRules: () => {
              return [
                {
                  required: true,
                  whitespace: true,
                  message: '标识不能为空！',
                },
                {
                  trigger: ['change', 'blur'],
                  pattern: new RegExp('^[0-9a-zA-Z_]{1,}$'),
                  type: 'string',
                  message: '请输入英文或数字！',
                },
                {
                  trigger: ['change', 'blur'],
                  max: 64,
                  message: '字符长度不能大于64！',
                },
                ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: 'sn', fieldValue: "", fieldName:'标识'}),
              ];
            },
          }
        ]);
        if (unref(isUpdate)) {
          setFieldsValue({
            ...formData,
            status: formData.status === 1,
            showStatus: formData.showStatus === 1,
          });

        }
        if(data.record.id){
          updateSchema([
            {
              field: 'component',
              show: false
            },
            {
              field: 'url',
              show: false
            }
          ]);
        }else{
          updateSchema([
            {
              field: 'component',
              show: true
            },
            {
              field: 'url',
              show: true
            }
          ]);
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '修改'));

      async function handleSubmit() {
        try {
          setModalProps({confirmLoading: true});
          const values = await validate();
          values.status = values.status ? 1 : 0;
          values.showStatus = values.showStatus ? 1 : 0;
          await saveOrUpdate(values);
          closeModal();
          emit('success');
        } finally {
          setModalProps({confirmLoading: false});
        }
      }

      return {registerModal, registerForm, getTitle, handleSubmit};
    },
  });
</script>
