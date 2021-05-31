<template>
  <Button @click="doBack" type="link" title="返回">
    <template #icon>
      <LeftOutlined />
    </template>
  </Button>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Button } from 'ant-design-vue';
  import { LeftOutlined } from '@ant-design/icons-vue';

  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'ActionButtons',
    components: {
      Button,
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
