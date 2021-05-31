<template>
  <PageWrapper title="流程中心" contentBackground class="!mt-4">

    <template #extra>
      <launch-button />
    </template>

    <template #footer>
      <process-header current="have-down"/>
    </template>

    <div class="m-1 desc-wrap process">
      <BasicTable @register="registerHaveDownTable" >
        <template #nameRender="{ record }">
          <router-link :to="`/process/view/${record.processDefinitionKey}?taskId=${record.taskId}&procInstId=${record.processInstanceId}&businessKey=${record.businessKey}`"> {{record.formName}} </router-link>
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

  import { haveDownTableSchema, searchFormSchema } from './data';
  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';
  import LaunchButton from '/@/views/process/components/LaunchButton.vue';
  import {getApplyedTasksPagerModel, getApps} from "/@/api/process/process";

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
      const [registerHaveDownTable, { getForm }] = useTable({
        api: getApplyedTasksPagerModel,
        title: '',
        columns: haveDownTableSchema,
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
        registerHaveDownTable,
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
