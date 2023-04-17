<template>
  <CollapseContainer :canExpan="true">
    <template #title>
      <div class="font-bold">审批记录</div>
    </template>
    <div >

      <List
        :loading="approvalHistoryLoading"
        item-layout="horizontal"
        :dataSource="historyList"
      >
        <template #renderItem="{ item }">
          <ListItem>
            <ListItemMeta>
              <template #description>
                {{item.message||'无'}}<br/>
              </template>
              <template #title>
                <Row>
                  <Col span="14">
                    <Space>
                      <Tag>{{item.personalName}}</Tag>
                      <span class="font-bold">{{item.activityName}}</span>
                    </Space>
                  </Col>
                  <Col span="10" class="text-right">
                    {{item.time}}
                  </Col>
                </Row>
              </template>
              <template #avatar>
                <Avatar >
                  {{item.typeName}}
                </Avatar>
              </template>
            </ListItemMeta>
          </ListItem>
        </template>
      </List>
    </div>
  </CollapseContainer>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, onMounted } from 'vue';
  import { ApartmentOutlined, ClockCircleOutlined } from '@ant-design/icons-vue';
  import { Button, Timeline, List, Avatar, Space, Tag, Row, Col } from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  import { CollapseContainer } from '/@/components/Container/index';

  import FlowDiagramModal from './FlowDiagramModal.vue';
  import BpmnPreviewModal from '/@/views/components/preview/bpmnPreview/index.vue';
  import {getCommentInfosByProcessInstanceId} from "/@/api/process/process";

  export default defineComponent({
    name: 'ApprovalHistory',
    components: {
      Button, Tag, Row, Col, Space,
      ApartmentOutlined,
      FlowDiagramModal,
      BpmnPreviewModal,
      Timeline, TimelineItem: Timeline.Item,
      List, ListItem: List.Item, ListItemMeta: List.Item.Meta,
      ClockCircleOutlined,
      CollapseContainer,
      Avatar
    },
    setup(_, {emit}) {
      const { currentRoute } = useRouter();
      const historyList = ref([]);
      const approvalHistoryLoading = ref(false);

      const { params: {modelKey}, query : {taskId, procInstId} } = unref(currentRoute);


      onMounted(()=>{
        approvalHistoryLoading.value = true;
        getCommentInfosByProcessInstanceId({procInstId}).then(res=>{
          historyList.value = res;
        }).finally(()=>{
          approvalHistoryLoading.value = false;
        })
      })


      return {
        historyList,
        approvalHistoryLoading
      };
    },
  });
</script>
