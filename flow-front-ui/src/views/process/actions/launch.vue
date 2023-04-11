<template>
  <PageWrapper class="!mt-4 process-container" :loading="true" >
    <template #title>
      <ProcessBackButton/>
      {{ modelBaseInfo.name || '-' }}
      <BaseActionButtons />
    </template>
    <template #extra>
      <action-buttons @doLaunch="doLaunch"/>
    </template>

    <template #footer>
      <div class="pb-2">
        <Space>
          <span>
            流程BP：<Tag>张三</Tag>
          </span>
          <span>
          归属部门：<Tag>李四</Tag>
          </span>
        </Space>
      </div>
    </template>

    <div class="desc-wrap">
      <FormContainer ref="formContainerRef"/>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, nextTick } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useRouter } from 'vue-router';
  import ActionButtons from '/@/views/process/components/ActionButtons.vue';
  import FormContainer from '/@/views/process/components/FormContainer.vue';
  import BaseActionButtons from '/@/views/process/components/BaseActionButtons.vue';
  import ProcessBackButton from '/@/views/process/components/ProcessBackButton.vue';

  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getModelInfoByModelKey, startFormFlow} from "/@/api/process/process";

  export default defineComponent({
    components: {
      ProcessHeader,
      PageWrapper,
      FormContainer,
      ActionButtons,
      BaseActionButtons,
      ProcessBackButton,
    },
    setup() {
      const formContainerRef = ref();
      const modelBaseInfo = ref({});
      const { createMessage } = useMessage();
      const go = useGo();
      const { currentRoute } = useRouter();
      const { params: { modelKey } } = unref(currentRoute);

      getModelInfoByModelKey({modelKey}).then(res=>{
        modelBaseInfo.value = res;
      });

      async function doLaunch() {

        const formData = await unref(formContainerRef).getFormData(true);
        const startResult = await startFormFlow({
          formData: JSON.stringify(formData),
          processDefinitionKey: modelKey,
        });

        createMessage.success("提交成功！");
        go("/process/launched");
        debugger;
      }

      return {
        modelBaseInfo,
        formContainerRef,
        doLaunch
      };
    },
  });
</script>
<style lang="less">
  .process-container{
    .ant-page-header{
      .ant-page-header-footer{
        margin-top: 0!important;
      }
    }
  }
</style>
