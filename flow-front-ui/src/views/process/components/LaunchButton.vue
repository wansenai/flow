<template>
  <a-button type="primary" @click="toLaunch"> 发起流程 </a-button>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'LaunchButton',
    components: { },
    setup() {
      const go = useGo();
      function toLaunch() {
        go("/process/launch");
      }
      return {
        toLaunch
      };
    },
  });
</script>
