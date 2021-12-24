<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" class="accountForm">
      <template #headImg="{ model, field }">
        <Upload style="margin: auto;"
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          :before-upload="beforeUpload"
          :multiple="false"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <plus-outlined ></plus-outlined>
            <div class="ant-upload-text">上传头像</div>
          </div>
        </Upload>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import {BasicForm, Rule, useForm} from '/@/components/Form/index';
  import { Upload } from 'ant-design-vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';

  import { accountFormSchema } from './account.data';
  import { saveOrUpdate, checkEntityExist } from '/@/api/privilege/account';
  import {CheckExistParams} from "/@/api/model/baseModel";
  import {FormValidPatternEnum} from "/@/enums/constantEnum";

  export default defineComponent({
    name: 'AccountModal',
    components: { BasicModal, BasicForm, PlusOutlined, LoadingOutlined, Upload },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const imageUrl = ref<string>('');
      const { createMessage } = useMessage();

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: accountFormSchema,
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

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        await resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        let formData = data.record;

        await updateSchema([
          {
            field: 'username',
            dynamicRules: () => {
              return [
                {
                  required: true,
                  whitespace: true,
                  message: '用户名不能为空！',
                },
                {
                  pattern: new RegExp(FormValidPatternEnum.SN),
                  type: 'string',
                  message: '请输入英文或数字！',
                },
                {
                  max: 30,
                  message: '字符长度不能大于30！',
                },
                ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: 'username', fieldValue: "", fieldName:'用户名'}),
              ];
            },
          },
          {
            field: 'userNo',
            dynamicRules: () => {
              return [
                {
                  required: true,
                  whitespace: true,
                  message: '工号不能为空！',
                },
                {
                  pattern: new RegExp('^[0-9a-zA-Z_]{1,}$'),
                  type: 'string',
                  message: '请输入英文或数字！',
                },
                {
                  max: 32,
                  message: '字符长度不能大于32！',
                },
                ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: 'userNo', fieldValue: "", fieldName:'工号'}),
              ];
            },
          },
          {
            field: 'mobile',
            dynamicRules: () => {
              return [
                {
                  required: true,
                  whitespace: true,
                  message: '手机不能为空！',
                },
                {
                  pattern: new RegExp('^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$'),
                  type: 'string',
                  message: '请输入正确的手机号！',
                },
                {
                  max: 32,
                  message: '字符长度不能大于32！',
                },
                ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: 'mobile', fieldValue: "", fieldName:'手机号'}),
              ];
            },
          },
          {
            field: 'email',
            dynamicRules: () => {
              return [
                {
                  pattern: new RegExp('^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$'),
                  type: 'string',
                  message: '请输入正确的邮箱地址！',
                },
                {
                  max: 256,
                  message: '字符长度不能大于256！',
                },
                ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: 'email', fieldValue: "", fieldName:'邮箱'}),
              ];
            },
          }
        ]);
        imageUrl.value = data.record.image;
        setFieldsValue({
          ...data.record,
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '修改'));

      // 解析为base64位
      const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        // 读取文件
        reader.readAsDataURL(img);
      }

      const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          createMessage.error("只允许上传JPG图片！");
          return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          createMessage.error("图片不能大于2MB！");
          return false;
        }
        getBase64(file, imgUrl => {
            imageUrl.value = imgUrl;
          }
        );
        return false;
      };

      async function handleSubmit() {
        try {
          setModalProps({ confirmLoading: true });
          const values = await validate();
          values.image = imageUrl.value;
          await saveOrUpdate(values);
          closeModal();
          emit('success');
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        registerModal,
        registerForm,
        getTitle,
        imageUrl,
        handleSubmit,
        beforeUpload
      };
    },
  });
</script>
<style lang="less" scoped>
  .accountForm{
    position: relative;
  }
</style>
