<template>
  <Card v-bind="$attrs" :tabList="tabList" :activeTabKey="activeKey"
        @tabChange="key => onTabChange(key, 'todo')" bodyStyle="padding-top:0;">
    <template #tabBarExtraContent>
      <a-button type="link" size="small">更多</a-button>
    </template>

    <p v-if="activeKey === 'recruit'">
      <BasicTable @register="registerRecruitTable" class="mt-0" >
        <template #nameRender="{ record }">
          <router-link :to="`/process/approve/${record.processDefinitionKey}?taskId=${record.taskId}&procInstId=${record.processInstanceId}&businessKey=${record.businessKey}`"> {{record.formName}} </router-link>
        </template>
      </BasicTable>
    </p>
    <p v-else>
      <BasicTable @register="registerTrainTable" >
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
  import { dynamicInfoItems, recruitTableSchema, trainTableSchema } from './data';
  import headerImg from '/@/assets/images/header.jpg';
  import Icon from '/@/components/Icon/Icon.vue';
  import { BasicTable, useTable } from '/@/components/Table';

  const tabList = [
    {
      key: 'recruit',
      tab: '招聘',
      // slots: { tab: 'customRender' },
    },
    {
      key: 'train',
      tab: '培训',
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
      const activeKey = ref('recruit');

      const [registerRecruitTable ] = useTable({
        title: '',
        columns: recruitTableSchema,
        useSearchForm: false,
        pagination: true,
        showIndexColumn: true,
        canResize: false,
      });

      const [registerTrainTable ] = useTable({
        title: '',
        columns: trainTableSchema,
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
        registerRecruitTable,
        registerTrainTable,
        tabList
      };
    },
  });
</script>
