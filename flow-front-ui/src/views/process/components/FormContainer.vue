<template>
  <div class="">

    <CollapseContainer :canExpan="true" class="mt-2" >
      <template #title>
        <div class="font-bold">基本信息</div>
      </template>
      <div style="padding: 0 16px">
        <Description @register="registerFlowBaseInfo" />
      </div>
    </CollapseContainer>

    <CollapseContainer :canExpan="true" class="mt-2" >
      <template #title>
        <div class="font-bold">表单内容</div>
      </template>
      <div style="min-height: 300px;" >
        <FramePage ref="formRenderFrameRef" :frameSrc="formUrl" @onLoad="handleOnLoad" />
      </div>
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import {defineComponent, ref, onMounted, nextTick, watch, unref} from 'vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { Descriptions, DescriptionsItem, Tag, Row, Col, Typography, Divider, Skeleton } from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  import FramePage from "/@/views/components/iframe/index.vue";
  import { Description, DescItem, useDescription } from '/@/components/Description/index';

  import { useMessage } from '/@/hooks/web/useMessage';
  import {CollapseContainer} from "/@/components/Container";
  import {
    getFormDataInfoByProcessInstanceId,
    getFormInfoByModelKey, getStartorBaseInfoVoByProcessInstanceId,
  } from "/@/api/process/process";

  const flowBaseInfoSchema = [
    /*{
      field: 'name',
      label: '提交人',
    },
    {
      field: 'companyName',
      label: '提交单位',
    },
    {
      field: 'deptName',
      label: '提交部门',
    },
    {
      field: 'mobile',
      label: '手机号',
    },*/
    {
      field: 'createTime',
      label: '提交时间',
    },
  ]
  export default defineComponent({
    name: 'FormContainer',
    components: {
      Descriptions,
      DescriptionsItem,
      Tag, Row, Col,
      CollapseContainer,
      FramePage, Divider,
      TypographyTitle: Typography.Title,
      Description,
      Skeleton
    },
    props: {
      startorBaseInfo: {
        type: Object,
        default: null
      },
      formType: {
        type: Number,
        default: -1
      }
    },
    setup(props) {
      const go = useGo();
      function toLaunch() {
        go("/process/launch");
      }
      const baseFormInfo = ref({});
      const showBaseFormInfo = ref(false);
      const framePageRef = ref<HTMLElement | null>(null);

      const formUrl = ref<string>("");
      const { currentRoute } = useRouter();
      const { createMessage } = useMessage();
      const jsonData = ref(null);
      const generateFormRef = ref();
      const formRenderFrameRef = ref();

      const [registerFlowBaseInfo, {setDescProps}] = useDescription({
        bordered: false,
        schema: flowBaseInfoSchema,
      });

      const {path,  params: { modelKey }, query: { procInstId } } = unref(currentRoute);

      nextTick(()=>{
        formUrl.value = ('/form-making/index.html#/?modelKey=' + modelKey + '&formType=custom');
        // loadFormInfo();
      });

      function setStartorBaseInfo(startorBaseInfo){
        setDescProps({
          data: startorBaseInfo
        });
      }

      function handleOnLoad(){
        loadFormInfo();
        unref(formRenderFrameRef).hideIframeLoading();
      }

      function loadFormInfo(){
        getFormInfoByModelKey({modelKey}).then(res=>{
          setTimeout(()=>{
            const iframe = unref(unref(formRenderFrameRef).frameRef);
            if(iframe){
              if(iframe.contentWindow?.vueObj){
                iframe.contentWindow.CustomForm.loadFormInfo({formJson: res.formJson, editData: null});
              }
              if(procInstId){
                getFormDataInfoByProcessInstanceId({procInstId}).then(result => {
                  iframe.contentWindow.CustomForm.setFormData(JSON.parse(result.formData), false);
                });
              }
            }
          }, 0);
        });
      }

      function getFormData(validate){
        const iframe = unref(unref(formRenderFrameRef).frameRef)
        if(iframe && iframe.contentWindow?.vueObj){
          return iframe.contentWindow.CustomForm.geFormData(validate);
        }else{
          return Promise.reject("表单加载异常!");
        }
      }

      function setFormData(formData){
        nextTick(()=>{
          const iframe = unref(unref(formRenderFrameRef).frameRef)
          debugger;
          if(iframe && iframe.contentWindow?.vueObj){
            return iframe.contentWindow.CustomForm.seFormData(formData);
          }else{
            return Promise.reject("表单加载异常!");
          }
        })
      }

      // 表单验证错误提示
      function formValidateMsg(msg){
        createMessage.warn(msg);
        const isError = document.querySelector('.fm-form .is-error');
        if(isError){
          isError.scrollIntoView({behavior: "smooth", block: "center",});
        }
      }

      // 'doSubmitForm'
      function triggerEvent(event, data){
        return unref(generateFormRef).triggerEvent(event, data);
      }

      return {
        toLaunch,
        formUrl,
        framePageRef,
        baseFormInfo,
        showBaseFormInfo,
        setStartorBaseInfo,
        getFormData,
        setFormData,
        triggerEvent,
        handleOnLoad,
        generateFormRef,
        formRenderFrameRef,
        jsonData,
        registerFlowBaseInfo,
      };
    },
  });
</script>
