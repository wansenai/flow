<template>
  <BasicModal wrapClassName="form-flow-designer" v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit" @cancel="handleCloseModal">
    <template #title>
      <div class="flow-form-title">
        <div class="title">
          {{isUpdate?'编辑流程':'创建流程'}}-
          {{flowBaseInfo.name}}
        </div>
        <div class="ctrl">
          <RadioGroup v-model:value="activityKey" buttonStyle="solid">
            <RadioButton value="formDesigner"> 表单设计 </RadioButton>
            <RadioButton :disabled="!flowBaseInfo.id" value="flowDesigner"> 流程设计 </RadioButton>
            <RadioButton :disabled="!flowBaseInfo.id" value="baseSetting"> 扩展设置 </RadioButton>
          </RadioGroup>
        </div>
        <div class="close">

        </div>
      </div>
    </template>
    <div v-show="activityKey === 'formDesigner'" class="designer-container form">
      <FramePage ref="formDesignerRef" :frameSrc="formDesignerUrl" />
    </div>
    <div v-show="activityKey === 'flowDesigner'" class="designer-container flow">
      <FramePage ref="flowDesignerRef" :frameSrc="flowDesignerUrl" />
    </div>
    <div v-show="activityKey === 'baseSetting'" class="designer-container setting">
      <div style="width: 800px; margin: auto;">
        <BasicForm @register="registerForm" />
        <div class="mt-4 text-center">
          <Button @click="handleSubmit" type="primary">保存</Button>
        </div>
      </div>

    </div>
  </BasicModal>
</template>
<script lang="ts">
  import {defineComponent, ref, computed, unref, nextTick, watch} from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, Rule, useForm } from '/@/components/Form/index';
  import { modelInfoFormSchema } from './modelInfo.data';
  import {saveFlowInfo, checkEntityExist, getByModelId} from '/@/api/flowable/bpmn/modelInfo';
  import { getAll } from '/@/api/base/app';
  import {CheckExistParams} from "/@/api/model/baseModel";
  import {Radio, Button} from "ant-design-vue"
  import { CloseOutlined } from '@ant-design/icons-vue';
  import FramePage from '/@/views/sys/iframe/index.vue';
  import {getFormInfoByModelKey, saveFormInfo} from "/@/api/form/formInfo";
  import { useMessage } from '/@/hooks/web/useMessage';

  const { createMessage } = useMessage();

  export default defineComponent({
    name: 'ModelInfoModal',
    components: {
      FramePage, Button, CloseOutlined,
      BasicModal, BasicForm, Radio, RadioGroup: Radio.Group,
      RadioButton: Radio.Button
    },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(false);
      const formBaseInfo = ref({});
      const flowBaseInfo = ref({});
      const activityKey = ref<string>("formDesigner");
      const flowDesignerUrl = ref<string>('');
      const formDesignerUrl = ref<string>('');
      const formDesignerRef = ref<HTMLElement>();
      const flowDesignerRef = ref<HTMLElement>();
      const isDev = import.meta.env.DEV;
      const haveShowFlowDesigner = ref(false);

      const [registerForm, { setFieldsValue, updateSchema, resetFields, validate }] = useForm({
        labelWidth: 100,
        schemas: modelInfoFormSchema,
        showActionButtonGroup: false,
        showResetButton: false,
        submitButtonOptions: {
          text: '保存'
        },
        actionColOptions: {
          span: 14,
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

      window['submitFormInfo']=(data)=>{
        const {id: modelInfoId, categoryCode} = unref(flowBaseInfo);
        const saveData = {
          id: unref(formBaseInfo)?.id,
          code: data.modelKey,
          name: data.modelName,
          title: data.modelName,
          formJson: data.formJson,
          categoryCode: categoryCode
        };

        const flowInfo = {
          id: modelInfoId,
          modelKey: data.modelKey,
          name: data.modelName,
          categoryCode: categoryCode,
        };
        return saveFlowInfo(flowInfo).then(resFlow=>{
          const {data: {success: flowResSuccess, msg: flowResMsg, data: flowDataData}} = resFlow;
          if(flowResSuccess){
            saveFormInfo(saveData).then(resForm => {
              const {data: {success: formResSuccess, msg: formResMsg, data: formDataData} } = resForm;
              if(formResSuccess){
                createMessage.success({content: formResMsg, style: {marginTop: '10vh'}});
                flowBaseInfo.value = flowDataData;
                formBaseInfo.value = {id: formDataData.id, modelKey: formDataData.code, modelName: formDataData.name, formJson: formDataData.formJson}
                setFieldsValue({id: flowDataData.id});
                return Promise.resolve(formResMsg);
              }else{
                createMessage.error({content: formResMsg, style: {marginTop: '10vh'}});
                return Promise.reject(formResMsg);
              }
            })
          } else {
            createMessage.error({content: flowResMsg, style: {marginTop: '10vh'}});
            return Promise.reject(flowResMsg);
          }
        });
      };

      const [registerModal, { setModalProps, changeLoading, closeModal }] = useModalInner(async (data) => {
        resetFields();
        haveShowFlowDesigner.value = false;
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        changeLoading(true);
        let appList = null;
        activityKey.value = "formDesigner";
        const {modelKey, name, categoryCode, modelId} = data.record;
        flowBaseInfo.value = data.record;
        formDesignerUrl.value = '/form-making/index.html?isDev=true&modelKey=' + modelId;

        formBaseInfo.value = {
          modelKey, modelName: name,
          formJson: '',
          categoryCode: categoryCode
        };

        if(modelKey){
          const formInfo = await getFormInfoByModelKey(modelKey);
          if(formInfo){
            formBaseInfo.value = {id: formInfo.id, modelKey: formInfo.code, modelName: formInfo.name, formJson: formInfo.formJson};
          }
        }

        nextTick(()=>{
          setTimeout(()=>{
            const iframe = unref(unref(formDesignerRef).frameRef)
            if(iframe){
              if(iframe.contentWindow?.vueObj){
                iframe.contentWindow.CustomForm.loadFormInfo(unref(formBaseInfo));
              }
              iframe.onload = function(){
                iframe.contentWindow.CustomForm.loadFormInfo(unref(formBaseInfo));
              }
            }
          }, 0);
        })
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

        setFieldsValue({
          ...data.record,
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '编辑'));

      function handleCloseModal() {
        closeModal();
      }

      watch(activityKey, (newVal, oldVal)=>{
        const { modelId } = flowBaseInfo.value;
        if(newVal === 'flowDesigner'){
          if(!haveShowFlowDesigner.value){
            changeLoading(true);
            flowDesignerUrl.value = isDev ? ('/flow-bpmn-front/index.html/#/bpmn/designer?modelId=' + modelId) : ('/flow-bpmn/index.html/#/bpmn/designer?modelId=' + modelId);
            const iframe = unref(unref(flowDesignerRef).frameRef)
            setTimeout(()=>{
              iframe.contentWindow.location.reload(true);
              changeLoading(false);
            }, 100);
          }
          haveShowFlowDesigner.value = true;
        } else if(newVal === 'baseSetting'){
          getByModelId(modelId).then(res=>{
            if(res.version > 0){
              updateSchema({
                field: 'appSn',
                componentProps: {
                  disabled: true,
                },
                helpMessage: '已发布的流程不允许修改所属系统！'
              });
            }
          });
        }
      })
      async function handleSubmit() {
        try {
          setModalProps({ confirmLoading: true });
          const values = await validate();
          const result = await saveFlowInfo(values);

          const {data: {msg, success}} = result;
          if(success){
            createMessage.success({content: msg, style: {marginTop: '10vh'}});
            updateSchema({
              field: 'appSn',
              componentProps: {disabled: true}
            });
          } else {
            createMessage.error({content: msg, style: {marginTop: '10vh'}});
          }

        } finally {
          changeLoading(false);
          setModalProps({ confirmLoading: false });
        }
      }

      return {
        registerModal,
        registerForm,
        flowDesignerUrl,
        formDesignerUrl,
        flowDesignerRef,
        formDesignerRef,
        getTitle, activityKey,
        flowBaseInfo,
        isUpdate,
        handleCloseModal,
        handleSubmit
      };
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
        cursor: default!important;
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
    align-items: center;
    .title{
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .ctrl{
      flex-basis: 400px;
      text-align: center;
    }
    .close{
      flex: 1;
      text-align: right;
      .anticon-close{
        cursor: pointer;
      }
    }
  }


  /* 设计器样式 */
  .designer-container{
    width: 100%;
    height: 100%;
    overflow: auto;
  }

</style>
