<template>
  <Card v-bind="$attrs" :bordered="false" body-style="padding:10px;">
    <Row type="flex" justify="space-around" align="middle">
      <Col :span="4" v-for="item in items" :key="item" style="text-align: center">
        <Badge :count="badgeCounts[item.sn]||0" :offset="[-20, 0]">
          <router-link v-if="item.url" :to="item.url?item.url:''" >
            <div class="flex flex-col items-center action-item">
              <Icon :icon="item.icon" :color="item.color" size="30" />
              <span class="text-md mt-2">{{ item.title }}</span>
            </div>
          </router-link>
          <router-link v-else :disabled="true" to="">
            <div class="flex flex-col items-center action-item">
              <Icon :icon="item.icon" :color="item.color" size="30" />
              <span class="text-md mt-2">{{ item.title }}</span>
            </div>
          </router-link>
        </Badge>
      </Col>
    </Row>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted, nextTick } from 'vue';

  import { Card, Badge, Row, Col } from 'ant-design-vue';
  import { Icon } from '/@/components/Icon';
  import { navItems } from './data';
  import { router } from '/@/router';
  import {getAppingTaskCont} from "/@/api/process/process";

  export default defineComponent({
    components: {Badge, Card, CardGrid: Card.Grid, Icon, Row, Col },
    setup() {
      const badgeCounts = ref({});

      function toDetail(url: any) {
        const {href} = router.resolve({
          path: url,
          /*query: {
            code: '123',
          }*/
        })
        window.open(href, '_blank')
        // window.open(url);
      }

      getAppingTaskCont({}).then(res=>{
        badgeCounts.value = {todo: res};
      })

      return { items: navItems, toDetail, badgeCounts };
    },
  });
</script>
<style lang="less" scoped>
  .action-item{
    padding: 0 20px;
    cursor: pointer;
  }
</style>
