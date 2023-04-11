<template>
  <PageWrapper class="!mt-4 process-container" >
    <template #title>
      <ProcessBackButton/>
      {{ startorBaseInfo.formName || modelBaseInfo.name || '-' }}
      <BaseActionButtons />
    </template>
    <template #extra>

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
      <FormContainer ref="formContainerRef" />
    </div>

    <div class="desc-wrap mt-2">
      <ApprovalHistory ref="approvalHistoryRef" ></ApprovalHistory>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useRouter } from 'vue-router';
  import { LeftOutlined } from '@ant-design/icons-vue';
  import { Space, Tag } from 'ant-design-vue';

  import FormContainer from '/@/views/process/components/FormContainer.vue';

  import ActionButtons from '/@/views/process/components/ActionButtons.vue';
  import BaseActionButtons from '/@/views/process/components/BaseActionButtons.vue';
  import ProcessBackButton from '/@/views/process/components/ProcessBackButton.vue';
  import ApproveActionButtons from '/@/views/process/components/ApproveActionButtons.vue';
  import ApprovalHistory from '/@/views/process/components/ApprovalHistory.vue';
  import {
    getModelInfoByModelKey,
    getStartorBaseInfoVoByProcessInstanceId
  } from "/@/api/process/process";

  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    components: {
      LeftOutlined,
      ProcessHeader,
      PageWrapper,
      FormContainer,
      ActionButtons,
      BaseActionButtons,
      ApproveActionButtons,
      ApprovalHistory,
      ProcessBackButton,
      Space, Tag,
    },
    setup() {
      const formContainerRef = ref();
      const modelBaseInfo = ref({});
      const startorBaseInfo = ref({});
      const currentView = ref<string>("");
      const go = useGo();

      const { currentRoute } = useRouter();
      const { params: { modelKey }, query: { procInstId } } = unref(currentRoute);

      getModelInfoByModelKey({modelKey}).then(res=>{
        modelBaseInfo.value = res;
      });

      if(procInstId){
        getStartorBaseInfoVoByProcessInstanceId({procInstId}).then(res=>{
          startorBaseInfo.value = res;
          unref(formContainerRef).setStartorBaseInfo(res);
        });
      }

      function doBack(){
        if(history.state.back){
          history.back();
        }else{
          go('/process/todo');
        }
      }

      return {
        currentView,
        modelBaseInfo,
        formContainerRef,
        startorBaseInfo,
        doBack,
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
