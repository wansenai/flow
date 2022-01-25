<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, Rule, useForm } from '/@/components/Form';
  import { formSchema } from './positionInfo.data';
  import { saveOrUpdate, checkEntityExist } from '/@/api/org/positionInfo';
  import {CheckExistParams} from "/@/api/model/baseModel";
  import {formatToDate} from "/@/utils/dateUtil";
  import {FormValidPatternEnum} from "/@/enums/constantEnum";

  export default defineComponent({
    name: 'PositionInfoModal',
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

        await updateSchema([
          {
            field: 'code',
            dynamicRules: () => {
              return [
                {
                  required: true,
                  whitespace: true,
                  message: '标识不能为空！',
                },
                {
                  pattern: new RegExp(FormValidPatternEnum.SN),
                  type: 'string',
                  message: '请输入英文或数字！',
                },
                {
                  max: 40,
                  message: '字符长度不能大于40！',
                },
                ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: 'code', fieldValue: "", fieldName:'标识'}),
              ];
            },
          }
        ]);
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
            status: (typeof formData.status === 'undefined' || formData.status===1)
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '修改'));

      async function handleSubmit() {
        try {
          setModalProps({ confirmLoading: true });
          const values = await validate();
          values.status = values.status?1:0;
          if(values.startDate){
            values.startDate = formatToDate(values.startDate)
          }
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
