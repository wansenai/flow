<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" class="personalForm" >
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
  import { BasicForm, Rule, useForm } from '/@/components/Form/index';
  import { personalFormSchema } from './personal.data';
  import { getDepts } from '/@/api/org/dept';
  import { getCompanies } from '/@/api/org/company';
  import { saveOrUpdate, checkEntityExist } from '/@/api/org/personal';
  import { Upload } from 'ant-design-vue';
  import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import {CheckExistParams} from "/@/api/model/baseModel";
  import {getJobGradeTree} from "/@/api/org/jobGrade";
  import {getPositionInfoTree} from "/@/api/org/positionInfo";
  import {FormValidPatternEnum} from "/@/enums/constantEnum";

  export default defineComponent({
    name: 'PersonalModal',
    components: { BasicModal, BasicForm, PlusOutlined, LoadingOutlined, Upload },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const imageUrl = ref<string>('');
      const { createMessage } = useMessage();

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: personalFormSchema,
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

      const [registerModal, { setModalProps, closeModal, changeLoading }] = useModalInner(async (data) => {
        changeLoading(true);
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        const companyTreeData = await getCompanies();
        const jobGradeTreeData = await getJobGradeTree();
        const jobPositionInfoTreeData = await getPositionInfoTree();
        let formData = data.record;

        await updateSchema(
          {
            field: 'companyId',
            componentProps: {
              onChange: (e: string)=>{
                updateSchema([
                  {field: 'deptId', componentProps: {treeData: []}}
                ]);
                setFieldsValue({
                  deptId:''
                });
                if(e){
                  getDepts({ companyId: e }).then( res => {
                    updateSchema([
                      {
                        field: 'deptId',
                        componentProps: { treeData: res },
                      },
                    ]);

                  });
                }
              },
            }
          }
        );

        await updateSchema([
          {
            field: 'jobGradeCode',
            componentProps: {
              treeData: jobGradeTreeData
            },
          },
          {
            field: 'positionCode',
            componentProps: {
              treeData: jobPositionInfoTreeData
            },
          },
          {
            field: 'code',
            dynamicRules: () => {
              return [
                {
                  required: true,
                  whitespace: true,
                  message: '工号不能为空！',
                },
                {
                  pattern: new RegExp(FormValidPatternEnum.SN),
                  type: 'string',
                  message: '请输入英文或数字！',
                },
                {
                  max: 32,
                  message: '字符长度不能大于32！',
                },
                ...getBaseDynamicRules({id: unref(isUpdate)&&formData&&formData.id||"", field: 'code', fieldValue: "", fieldName:'工号'}),
              ];
            },
          }
        ]);

        if (unref(isUpdate)) {
          // 根据公司加载部门树
          const deptTreeData = await getDepts({companyId: data.record.companyId});
          updateSchema([
            {
              field: 'deptId',
              componentProps: { treeData: deptTreeData },
            },
          ]);
          setFieldsValue({
            ...data.record,
          });
          imageUrl.value = data.record.headImg;
        }else{
          // 如果是添加并且用户选择了公司
          if(formData.companyId){
            // 根据公司加载部门树
            const deptTreeData = await getDepts({companyId: formData.companyId});
            updateSchema([
              {
                field: 'deptId',
                componentProps: { treeData: deptTreeData },
              },
            ]);
            setFieldsValue({
              ...formData,
            });
          }
          imageUrl.value = "";
        }
        changeLoading(false);
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '编辑'));

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
          setModalProps({confirmLoading: true});
          const values = await validate();
          values.headImg = imageUrl.value;
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
        beforeUpload,
      };
    },
  });
</script>

<style lang="less" scoped>
  .personalForm{
    position: relative;
  }
</style>
