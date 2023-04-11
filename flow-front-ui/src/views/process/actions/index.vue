<template>
  <PageWrapper title="流程中心" contentBackground class="!mt-4">

    <template #extra>
      <launch-button />
    </template>

    <div class="m-1 desc-wrap">
      <router-view></router-view>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';

  export default defineComponent({
    components: {
      ProcessHeader,
      PageWrapper,
    },
    setup() {
      const currentView = ref("./approve.vue");
      return {
        currentView
      };
    },
  });
</script>
