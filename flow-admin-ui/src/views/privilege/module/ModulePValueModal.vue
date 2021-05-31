<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm"/>
  </BasicModal>
</template>
<script lang="ts">
  import {defineComponent, ref, computed, unref} from 'vue';
  import {BasicModal, useModalInner} from '/@/components/Modal';
  import {BasicForm, useForm} from '/@/components/Form/index';
  import {formSchema} from './module.data';
  import {saveOrUpdate} from '/@/api/privilege/module';

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

      const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) => {
        resetFields();
        setModalProps({confirmLoading: false});
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
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
        } else {
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
        // const treeData = await getDeptList();
        // updateSchema({
        //   field: 'parentDept',
        //   componentProps: { treeData },
        // });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '修改'));

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

      return {registerModal, registerForm, getTitle, handleSubmit};
    },
  });
</script>
