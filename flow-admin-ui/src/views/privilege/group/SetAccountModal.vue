<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" >
      <template #users="{ model, field }">
        <Select
          v-model:value="model[field]"
          mode="multiple"
          style="width: 100%"
          placeholder="请选择用户"
          option-label-prop="label"
          :options="accountOptions"
        >
        </Select>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { setAccountFormSchema } from './group.data';
  import { getAllList } from '/@/api/privilege/account';
  import { addUserGroups } from '/@/api/privilege/group';

  import { Select } from 'ant-design-vue';

  export default defineComponent({
    name: 'SetAccountModal',
    components: { BasicModal, BasicForm, Select },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const accountOptions = ref<any[]>([]);

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: setAccountFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();

        setModalProps({ confirmLoading: false, title: '给组【'+data.record.name+'('+data.record.sn+')】分配用户' });
        isUpdate.value = !!data?.isUpdate;

        const accountList = ((await getAllList()) as any);
        accountList.forEach(item=>{
          item.label = item.realName+'('+item.username+')';
          item.value = item.id;
        });
        accountOptions.value = accountList;
        if (unref(isUpdate)) {
          let users = data.record.users||[];
          users = users.map(item=>{
            return item.id;
          });
          setFieldsValue({
            ...data.record,
            users
          });
        }
      });

      let getTitle = computed(() => (!unref(isUpdate) ? '新增' : '修改'));

      async function handleSubmit() {
        try {
          setModalProps({ confirmLoading: true });
          const values = await validate();
          console.log(values);
          values.users = values.users.map(item=>{
            return {id: item};
          });
          values.groupId = values.id;
          delete values.id;

          await addUserGroups(values);
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, accountOptions, handleSubmit };
    },
  });
</script>
