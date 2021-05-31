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
      <component :is="currentView" ref="processFormRef"></component>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Divider, Card, Empty, Descriptions} from 'ant-design-vue';
  import { useRouter } from 'vue-router';

  import ProcessForm from '../../process-form';

  import ActionButtons from '/@/views/process/components/ActionButtons.vue';
  import BaseActionButtons from '/@/views/process/components/BaseActionButtons.vue';
  import ProcessBackButton from '/@/views/process/components/ProcessBackButton.vue';

  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    components: {
      ProcessHeader,
      PageWrapper,
      [Divider.name]: Divider,
      [Card.name]: Card,
      AEmpty: Empty,
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
      const { createMessage } = useMessage();
      const go = useGo();

      const { currentRoute } = useRouter();
      const { params: { modelKey } } = unref(currentRoute);
      currentView.value = modelKey;

      async function doLaunch() {
        await unref(processFormRef).doSubmit();
        createMessage.success("提交成功！");
        go("/process/launched");
      }

      return {
        currentView,
        processFormRef,
        doLaunch
      };
    },
  });
</script>
