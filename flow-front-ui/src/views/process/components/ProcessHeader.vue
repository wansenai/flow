<template>

  <Tabs :default-active-key="current" @change="changeRouter">

    <TabPane key="todo" >
      <template #tab>
        <Badge :count="todoCount" :offset="[15, -2]" size="default">
          <span style="font-size: 16px;">待办</span>
        </Badge>
      </template>
    </TabPane>

    <TabPane key="have-down" tab="已办" />
    <TabPane key="launched" tab="已发" />
    <TabPane key="launch" tab="发起" />
  </Tabs>

</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Tabs } from 'ant-design-vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { Badge } from 'ant-design-vue';
  import {getAppingTaskCont} from "/@/api/process/process";

  const TabPane = Tabs.TabPane;

  export default defineComponent({
    props: {
      current: {
        type: String,
        default: "todo"
      }
    },
    name: 'ProcessHeader',
    components: {
      Tabs,
      TabPane,
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
