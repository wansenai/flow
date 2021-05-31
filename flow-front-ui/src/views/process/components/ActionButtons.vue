<template>
  <a-button type="primary" @click="doLaunch"> 提交 </a-button>
  <!--<a-button @click="doSave"> 保存 </a-button>-->
  <!--<a-button @click="doBack"> 返回 </a-button>-->
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'ActionButtons',
    components: { },
    setup(_, {emit}) {
      const go = useGo();

      function doLaunch() {
        emit('doLaunch');
      }

      function doSave() {

      }

      function doBack() {
        if(history.state.back){
          history.back();
        }else{
          go('/process/launch');
        }
      }

      return {
        doLaunch,
        doSave,
        doBack,
      };
    },
  });
</script>
