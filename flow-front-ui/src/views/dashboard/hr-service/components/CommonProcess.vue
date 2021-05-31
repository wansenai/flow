<template>
  <Card>
    <div>
      <Row type="flex" justify="space-around" align="middle">
        <Col :span="3">
          <div style="font-size: 18px;">自助服务</div>
        </Col>
        <Col :span="3"><a-button type="primary" ghost>外出申请</a-button></Col>
        <Col :span="3"><a-button type="primary" ghost>补卡申请</a-button></Col>
        <Col :span="3"><a-button type="primary" ghost>外出申请</a-button></Col>
        <Col :span="3"><a-button type="primary" ghost>出差申请</a-button></Col>
        <Col :span="3"><a-button type="primary" ghost>转正申请</a-button></Col>
        <Col :span="3"><a-button type="primary" ghost>离职申请</a-button></Col>
        <Col :span="3"><a-button type="primary" ghost>调岗申请</a-button></Col>
      </Row>
    </div>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Avatar, Card, Space, Row, Col } from 'ant-design-vue';

  import headerImg from '/@/assets/images/header.jpg';
  export default defineComponent({
    components: { Avatar, Card, Space, Row, Col },
    setup() {
      return { headerImg };
    },
  });
</script>
