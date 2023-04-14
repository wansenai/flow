<template>
  <PageWrapper class="!mt-4 process-container" contentClass="flex" >
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
  import { Space, Tag } from 'ant-design-vue';

  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getModelInfoByModelKey, startFormFlow} from "/@/api/process/process";
  import { Loading, useLoading } from '/@/components/Loading';

  export default defineComponent({
    components: {
      ProcessHeader,
      PageWrapper,
      FormContainer,
      ActionButtons,
      BaseActionButtons,
      ProcessBackButton,
      Space, Tag, Loading
    },
    setup() {
      const formContainerRef = ref();
      const modelBaseInfo = ref({});
      const { createMessage } = useMessage();
      const go = useGo();
      const { currentRoute } = useRouter();
      const { params: { modelKey } } = unref(currentRoute);
      const [openFullLoading, closeFullLoading] = useLoading({
        tip: '提交中...',
      });

      getModelInfoByModelKey({modelKey}).then(res=>{
        modelBaseInfo.value = res;
      });

      async function doLaunch() {
        openFullLoading();
        try {
          const formData = await unref(formContainerRef).getFormData(true);
          const startResult = await startFormFlow({
            formData: JSON.stringify(formData),
            processDefinitionKey: modelKey,
          });
          const {data} = startResult;
          if (data.success) {
            createMessage.success(data.msg);
            setTimeout(() => {
              closeFullLoading();
              go("/process/launched");
            }, 500);
          } else {
            closeFullLoading();
            createMessage.error(data.msg);
          }
        } catch (e) {
          closeFullLoading();
        }
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
