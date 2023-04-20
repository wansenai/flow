<template>
  <div class="desc-wrap process">
    <BasicTable @register="registerLaunchedTable" >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'formName'">
          <router-link :to="`/process/view/${record.processDefinitionKey}?taskId=${record.taskId||''}&procInstId=${record.processInstanceId}&businessKey=${record.businessKey}`"> {{record.formName}} </router-link>
        </template>

        <template v-if="column.key === 'currentAssignees'">
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

      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { Tabs, Tag, Popover } from 'ant-design-vue';

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
.process-list-container{
  .vben-basic-table-form-container{
    padding: 0!important;
  }
}
  .process{
    .vben-basic-table-form-container{
      .ant-form{
        margin-bottom:0;
      }
    }
  }
</style>
