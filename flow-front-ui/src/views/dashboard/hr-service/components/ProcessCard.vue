<template>
  <Card v-bind="$attrs" :tabList="tabList" :activeTabKey="activeKey"
        @tabChange="key => onTabChange(key, 'todo')" bodyStyle="padding-top:0;">
    <template #tabBarExtraContent>
      <a-button type="link" size="small">更多</a-button>
    </template>

    <p v-if="activeKey === 'todo'">
      <BasicTable @register="registerTodoTable" class="mt-0" >
        <template #nameRender="{ record }">
          <router-link :to="`/process/approve/${record.processDefinitionKey}?taskId=${record.taskId}&procInstId=${record.processInstanceId}&businessKey=${record.businessKey}`"> {{record.formName}} </router-link>
        </template>
      </BasicTable>
    </p>
    <p v-else>
      <BasicTable @register="registerHaveDownTable" >
        <template #nameRender="{ record }">
          <router-link :to="`/process/view/${record.processDefinitionKey}?taskId=${record.taskId}&procInstId=${record.processInstanceId}&businessKey=${record.businessKey}`"> {{record.formName}} </router-link>
        </template>
      </BasicTable>
    </p>

  </Card>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { Card, List } from 'ant-design-vue';
  import { dynamicInfoItems, todoTableSchema, haveDownTableSchema } from './data';
  import headerImg from '/@/assets/images/header.jpg';
  import Icon from '/@/components/Icon/Icon.vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getAppingTasksPagerModel, getApplyedTasksPagerModel } from "/@/api/process/process";


  const tabList = [
    {
      key: 'todo',
      tab: '待办',
      // slots: { tab: 'customRender' },
    },
    {
      key: 'haveDown',
      tab: '已办',
    },
  ];
  export default defineComponent({
    components: {
      Card,
      List,
      ListItem: List.Item,
      ListItemMeta: List.Item.Meta,
      Icon,
      BasicTable
    },
    setup(props) {
      const activeKey = ref('todo');

      const [registerTodoTable ] = useTable({
        api: getAppingTasksPagerModel,
        title: '',
        columns: todoTableSchema,
        useSearchForm: false,
        pagination: true,
        showIndexColumn: true,
        canResize: false,
      });

      const [registerHaveDownTable ] = useTable({
        api: getApplyedTasksPagerModel,
        title: '',
        columns: haveDownTableSchema,
        useSearchForm: false,
        pagination: true,
        showIndexColumn: true,
        canResize: false,
      });

      const onTabChange = (value: string, type: string) => {
        activeKey.value = value;
      };

      return {
        items: dynamicInfoItems,
        onTabChange,
        headerImg,
        activeKey,
        registerTodoTable,
        registerHaveDownTable,
        tabList
      };
    },
  });
</script>
