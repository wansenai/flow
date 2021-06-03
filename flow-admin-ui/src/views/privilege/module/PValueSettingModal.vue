<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm"/>
  </BasicModal>
</template>
<script lang="ts">
  import {defineComponent, ref, computed, unref} from 'vue';
  import {BasicModal, useModalInner} from '/@/components/Modal';
  import {BasicForm, useForm} from '/@/components/Form/index';
  import {pValueFormSchema} from './module.data';
  import {savePValue} from '/@/api/privilege/module';
  import {getAppPrivilegeValues} from "/@/api/privilege/appPrivilegeValue";

  export default defineComponent({
    name: 'PValueSettingModal',
    components: {BasicModal, BasicForm},
    emits: ['success', 'register'],
    setup(_, {emit}) {
      const isUpdate = ref(true);

      const [registerForm, {resetFields, setFieldsValue, updateSchema, validate}] = useForm({
        labelWidth: 100,
        schemas: pValueFormSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) => {
        resetFields();
        setModalProps({confirmLoading: false, title: '设置菜单【'+data.record.name+'】的权限值'});
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
          let options = await getAppPrivilegeValues()||[];
          // let checkedOptions = await getPValuesByModule()||[];

          options.forEach((item:any)=>{
            item['value'] = item.position;
            item['label'] = item.name;
          });
          const value = data.record.pvs.map((res:any)=>res.position);
          updateSchema({
            field: 'pvs',
            componentProps: {
              options
            },
          });
          setFieldsValue({
            pvs: value
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '设置权限值'));

      async function handleSubmit() {
        try {
          setModalProps({confirmLoading: true});
          const values = await validate();
          values.pvs = values.pvs.map((item:any)=>{
            return {position:item}
          });
          await savePValue(values);
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
