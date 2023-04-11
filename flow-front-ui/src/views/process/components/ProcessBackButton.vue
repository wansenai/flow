<template>
  <Tooltip >
    <template #title>返回</template>
    <a @click="doBack" href="javascript: void(0);">
      <LeftOutlined/>
    </a>
  </Tooltip>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Tooltip } from 'ant-design-vue';
  import { LeftOutlined } from '@ant-design/icons-vue';

  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'ActionButtons',
    components: {
      Tooltip,
      LeftOutlined
    },
    setup(_, {emit}) {
      const go = useGo();

      function doBack() {
        if(history.state.back){
          history.back();
        }else{
          go('/process/launch');
        }
      }

      return {
        doBack,
      };
    },
  });
</script>
