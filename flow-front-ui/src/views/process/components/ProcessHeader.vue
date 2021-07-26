<template>

  <a-tabs :default-active-key="current" @change="changeRouter">

    <a-tab-pane key="todo" >
      <template #tab>
        <Badge :count="todoCount" :offset="[15, -2]" size="default">
          <span style="font-size: 16px;">待办</span>
        </Badge>
      </template>
    </a-tab-pane>

    <a-tab-pane key="have-down" tab="已办" />
    <a-tab-pane key="launched" tab="已发" />
    <a-tab-pane key="launch" tab="发起" />
  </a-tabs>

</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Tabs } from 'ant-design-vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { Badge } from 'ant-design-vue';
  import {getAppingTaskCont} from "/@/api/process/process";

  export default defineComponent({
    props: {
      current: {
        type: String,
        default: "todo"
      }
    },
    name: 'ProcessHeader',
    components: {
      [Tabs.name]: Tabs,
      [Tabs.TabPane.name]: Tabs.TabPane,
      Badge,
    },
    setup(props) {
      const go = useGo();
      const todoCount = ref(0);
      function changeRouter(e) {
        go("/process/" + e);
      }

      getAppingTaskCont({}).then(res=>{
        todoCount.value = res;
      });

      return {
        todoCount,
        changeRouter
      };
    },
  });
</script>
