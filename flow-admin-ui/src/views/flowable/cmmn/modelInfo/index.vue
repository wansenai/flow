<template>
  <PageWrapper dense contentFullHeight fixedHeight >
    <div style="font-size: 30px;padding: 100px; color: #aaa;text-align:center;">
      敬请期待！
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'Bpmn',
    components: {
      PageWrapper
    },
    setup() {
      const go = useGo();


      return {

      };
    },
  });
</script>

<style lang="less" scoped>
  .modelInfo-roles{
    >span{
      margin-right: 4px;
    }
  }
</style>
