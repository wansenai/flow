<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" >
      <template #snSlot="{ model, field }">
        {{model[field]}}
      </template>
      <template #secretKeySlot="{ model, field }">
        <div class="">
          <TextArea readonly :rows="4" v-model:value="model[field]" />
          <Space>
            <Popconfirm title="重新获取秘钥吗？" @confirm="refreshSecretKeyHandle(model)">
              <template #icon><QuestionCircleOutlined style="color: red" /></template>
              <a-button> 获取 </a-button>
            </Popconfirm>

            <a-button type="primary" @click="handleCopy"> 复制 </a-button>
          </Space>

        </div>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form';
  import { secretKeyFormSchema } from './app.data';
  import { refreshSecretKey } from '/@/api/base/app';
  import { QuestionCircleOutlined } from '@ant-design/icons-vue';
  import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Button, Input, Space, Popconfirm } from 'ant-design-vue';
  const {TextArea} = Input;

  export default defineComponent({
    name: 'SecretKeyModal',
    components: { BasicModal, BasicForm, Button, Input, TextArea, Space, Popconfirm, QuestionCircleOutlined },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const valueRef = ref('');

      const { createMessage } = useMessage();
      const { clipboardRef, copiedRef } = useCopyToClipboard();

      const [registerForm, { resetFields, updateSchema, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: secretKeyFormSchema,
        showActionButtonGroup: false,
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        let formData = data.record;
        valueRef.value = formData.secretKey;

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          });
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '修改'));

      async function refreshSecretKeyHandle(model) {
        try {
          setModalProps({ confirmLoading: true });
          const result = await refreshSecretKey(model.id);
          valueRef.value = result;
          setFieldsValue({
            secretKey: result
          });

        } finally {
          setModalProps({ confirmLoading: false });
        }
      }
      function handleCopy() {
        try {
          const value = unref(valueRef);
          if (!value) {
            createMessage.warning('请重新获取密钥！');
            return;
          }
          clipboardRef.value = value;
          if (unref(copiedRef)) {
            createMessage.success('拷贝成功！');
          }
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleCopy, refreshSecretKeyHandle };
    },
  });
</script>
