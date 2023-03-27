<template>
  <BasicModal wrapClassName="form-flow-designer" v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <template #title>
      <div class="flow-form-title">
        <div class="title">
          标题 - {{activityKey}}
        </div>
        <div class="ctrl">
          <RadioGroup v-model:value="activityKey" buttonStyle="solid">
            <RadioButton value="formDesigner"> 表单设计 </RadioButton>
            <RadioButton value="flowDesigner"> 流程设计 </RadioButton>
            <RadioButton value="baseSetting"> 扩展设置 </RadioButton>
          </RadioGroup>
        </div>
        <div class="close"></div>
      </div>
    </template>
    <div v-show="activityKey === 'formDesigner'" class="designer-container form">
      <FramePage :frameSrc="formDesignerUrl" />
    </div>
    <div v-show="activityKey === 'flowDesigner'" class="designer-container flow">
      <FramePage :frameSrc="flowDesignerUrl" />
    </div>
    <div v-show="activityKey === 'baseSetting'" class="designer-container setting">
      <BasicForm @register="registerForm" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, Rule, useForm } from '/@/components/Form/index';
  import { modelInfoFormSchema } from './modelInfo.data';
  import { saveOrUpdate, checkEntityExist } from '/@/api/flowable/bpmn/modelInfo';
  import { getAll } from '/@/api/base/app';
  import { useGo } from '/@/hooks/web/usePage';
  import {CheckExistParams} from "/@/api/model/baseModel";
  import {Radio} from "ant-design-vue"
  import FramePage from '/@/views/sys/iframe/index.vue';

  export default defineComponent({
    name: 'ModelInfoModal',
    components: { FramePage, BasicModal, BasicForm, Radio, RadioGroup: Radio.Group, RadioButton: Radio.Button },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const activityKey = ref<string>("formDesigner");
      const go = useGo();
      const flowDesignerUrl = ref<string>('');
      const formDesignerUrl = ref<string>('');

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
        activityKey.value = "formDesigner";
        const modelId = '';

        const isDev = import.meta.env.DEV;
        flowDesignerUrl.value = isDev ? ('/flow-bpmn-front/index.html/#/bpmn/designer?modelId=' + modelId) : ('/flow-bpmn/index.html/#/bpmn/designer?modelId=' + modelId);
        formDesignerUrl.value = isDev ? ('/form-making/custom.html?isDev=true&modelKey=' + modelId) : ('/flow-bpmn/index.html/#/bpmn/designer?modelId=' + modelId);


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
                  pattern: new RegExp('^[a-zA-Z_]{1,}[0-9a-zA-Z_]{1,}$'),
                  type: 'string',
                  message: '请输入英文或数字且以英文或下划线开头！',
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
          const result = await saveOrUpdate(values);
          go("/flowable/bpmn/designer?modelId=" + result.modelId);

          closeModal();
          emit('success');
        } finally {
          changeLoading(false);
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal,
        registerForm,
        flowDesignerUrl,
        formDesignerUrl,
        getTitle, activityKey, handleSubmit };
    },
  });
</script>

<style lang="less">
  .form-flow-designer{
    .scroll-container {
      .scrollbar__wrap{
        margin-bottom: 0!important;
      }
    }
    .ant-modal{
      max-width: unset;
      .ant-modal-header{
        padding-top: 10px;
        padding-bottom: 8px;
      }
      .ant-modal-body{
        .scrollbar__view{
          >div{
            height: auto!important;
          }
        }
      }
    }
  }
  /* 标题样式 */
  .flow-form-title{
    display: flex;
    flex-wrap: nowrap;
    .title{
      flex-grow: 1;
      flex: auto;
    }
    .ctrl{
      flex-basis: 400px;
      text-align: center;
    }
    .close{
      flex: auto;
    }
  }


  /* 设计器样式 */
  .designer-container{
    width: 100%;
    height: 100%;
    border: 1px solid red;
    overflow: auto;
  }

</style>
