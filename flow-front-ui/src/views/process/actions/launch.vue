<template>
  <PageWrapper contentBackground class="!mt-4">
    <template #title>
      <ProcessBackButton/>
      发起流程
      <BaseActionButtons />
    </template>
    <template #extra>
      <action-buttons @doLaunch="doLaunch"/>
    </template>

    <template #footer>

    </template>

    <div class="m-1 desc-wrap">
<!--      <component :is="currentView" ref="processFormRef"></component>-->
      <FramePage ref="formRenderFrameRef" :frameSrc="formUrl" />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, nextTick } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Divider, Card, Empty, Descriptions} from 'ant-design-vue';
  import { useRouter } from 'vue-router';

  import ProcessForm from '../../process-form';

  import ActionButtons from '/@/views/process/components/ActionButtons.vue';
  import BaseActionButtons from '/@/views/process/components/BaseActionButtons.vue';
  import ProcessBackButton from '/@/views/process/components/ProcessBackButton.vue';
  import FramePage from '/@/views/components/iframe/index.vue';

  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { useMessage } from '/@/hooks/web/useMessage';
  import {getEnv} from "../../../../../flow-admin-ui/src/utils/env";
  import {getFormInfoByModelKey, startFormFlow} from "/@/api/process/process";

  export default defineComponent({
    components: {
      ProcessHeader,
      PageWrapper,
      [Divider.name]: Divider,
      [Card.name]: Card,
      AEmpty: Empty, FramePage,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
      ActionButtons,
      BaseActionButtons,
      ProcessBackButton,
      ...ProcessForm
    },
    setup() {
      const currentView = ref<string>("");
      const processFormRef = ref<HTMLElement | null>(null);
      const formRenderFrameRef = ref();
      const formBaseInfo = ref({});

      const { createMessage } = useMessage();
      const go = useGo();
      const formUrl = ref<string>('');
      const isDev = getEnv()==='development';
      const { currentRoute } = useRouter();
      const { params: { modelKey } } = unref(currentRoute);
      currentView.value = modelKey;

      nextTick(()=>{
        formUrl.value = ('/form-making/custom.html#/?modelKey=' + modelKey + '&formType=custom');
        loadFormInfo();
      });

      function loadFormInfo(){
        getFormInfoByModelKey({modelKey}).then(res=>{
          setTimeout(()=>{
            const iframe = unref(unref(formRenderFrameRef).frameRef)
            if(iframe){
              if(iframe.contentWindow?.vueObj){
                iframe.contentWindow.CustomForm.loadFormInfo({formJson: res.formJson, editData: null});
              }
              iframe.onload = function(){
                iframe.contentWindow.CustomForm.loadFormInfo({formJson: res.formJson, editData: null});
              }
            }
          }, 0);
        });
      }

      async function doLaunch() {
        // 获取表单数据
        const iframe = unref(unref(formRenderFrameRef).frameRef)
        if(iframe){
          if(iframe.contentWindow?.vueObj){
            try{
              const formData = await iframe.contentWindow.CustomForm.geFormData(true);

              debugger;
              const startResult = await startFormFlow({
                formData: JSON.stringify(formData),
                processDefinitionKey: modelKey,
              });
              debugger;

              createMessage.success("提交成功！");
              go("/process/launched");
              debugger;
            }catch (e){

            }
          }
        }
      }

      return {
        formUrl,
        currentView,
        processFormRef,
        formRenderFrameRef,
        doLaunch
      };
    },
  });
</script>
