<template>
  <PageWrapper title="流程中心" contentBackground class="!mt-4">

    <template #extra>
      <launch-button />
    </template>

    <template #footer>
      <process-header current="todo"/>
    </template>

    <div class="m-1 desc-wrap process">
      <BasicTable @register="registerTodoTable" >
        <template #nameRender="{ record }">
          <router-link :to="`/process/approve/${record.processDefinitionKey}?taskId=${record.taskId}&procInstId=${record.processInstanceId}&businessKey=${record.businessKey}`"> {{record.formName}} </router-link>
        </template>
      </BasicTable>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { Divider, Card, Empty, Descriptions, Steps, Tabs } from 'ant-design-vue';

  import { todoTableSchema, searchFormSchema } from './data';
  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';
  import LaunchButton from '/@/views/process/components/LaunchButton.vue';
  import { getAppingTasksPagerModel, getApps } from "/@/api/process/process";

  export default defineComponent({
    components: {
      BasicTable,
      ProcessHeader,
      LaunchButton,
      PageWrapper,
      [Divider.name]: Divider,
      [Card.name]: Card,
      AEmpty: Empty,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
      [Steps.name]: Steps,
      [Steps.Step.name]: Steps.Step,
      [Tabs.name]: Tabs,
      [Tabs.TabPane.name]: Tabs.TabPane,
    },
    setup() {

      const [registerTodoTable, { getForm }] = useTable({
        api: getAppingTasksPagerModel,
        title: '',
        columns: todoTableSchema,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          showAdvancedButton: false,
          showResetButton: false,
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        pagination: true,
        showIndexColumn: true,
        canResize: false,
      });

      getApps().then(res=>{
        const {updateSchema} = getForm();
        updateSchema({
          field: 'appSn',
          componentProps: { options: res },
        })
      })


      return {
        registerTodoTable,
      };
    },
  });
</script>
<style lang="less">
  .process{
    .vben-basic-table-form-container{
      .ant-form{
        margin-bottom:0;
      }
    }
  }
</style>
