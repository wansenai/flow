<template>
  <PageWrapper title="流程中心" contentBackground class="!mt-4">

    <template #extra>
      <launch-button />
    </template>

    <div class="m-1 desc-wrap">
<!--      <component :is="currentView"></component>-->
      <router-view></router-view>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Divider, Card, Empty, Descriptions} from 'ant-design-vue';

  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';

  export default defineComponent({
    components: {
      ProcessHeader,
      PageWrapper,
      [Divider.name]: Divider,
      [Card.name]: Card,
      AEmpty: Empty,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
    },
    setup() {

      const currentView = ref("./approve.vue");


      return {
        currentView
      };
    },
  });
</script>
