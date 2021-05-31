<template>
  <PageWrapper title="流程中心" contentBackground class="!mt-4">

    <template #extra>
      <launch-button />
    </template>

    <template #footer>
      <process-header current="launched"/>
    </template>

    <div class="m-1 desc-wrap process">
      <BasicTable @register="registerLaunchedTable" >
        <template #nameRender="{ record }">
          <router-link :to="`/process/view/${record.processDefinitionKey}?taskId=${record.taskId||''}&procInstId=${record.processInstanceId}&businessKey=${record.businessKey}`"> {{record.formName}} </router-link>
        </template>
        <template #currentAssigneesRender="{ record }">
          <Popover v-if="record.currentAssignees && record.currentAssignees.length > 0" v-for="item in record.currentAssignees"  :title="item.type==='user'?'人员信息':'角色信息'">
            <template v-if="item.type === 'user'" #content>
              <div>姓名：{{item.name}}</div>
              <div>工号：{{item.code}}</div>
              <div>手机：{{item.mobile}}</div>
            </template>
            <template v-else #content>
              <div>名称：{{item.name}}</div>
              <div>标识：{{item.code}}</div>
            </template>
            <Tag color="warning">{{item.name}}</Tag>
          </Popover>
        </template>
      </BasicTable>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { Divider, Card, Empty, Descriptions, Steps, Tabs, Tag, Popover } from 'ant-design-vue';

  import { launchedTableSchema, searchFormSchema } from './data';
  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';
  import LaunchButton from '/@/views/process/components/LaunchButton.vue';
  import {findMyProcessinstancesPagerModel, getApps} from "/@/api/process/process";

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
      Tag, Popover
    },
    setup() {
      const [registerLaunchedTable, { getForm }] = useTable({
        api: findMyProcessinstancesPagerModel,
        title: '',
        columns: launchedTableSchema,
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
        registerLaunchedTable,
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
