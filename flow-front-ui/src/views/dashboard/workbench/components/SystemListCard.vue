<template>

    <Card class="system-item"  title="常用系统" v-bind="$attrs">
      <template #extra>
        <a-button type="link" size="small">更多</a-button>
      </template>
      <Carousel arrows :dots="false">
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: -15px; zindex: 9">
            <LeftOutlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: -15px">
            <RightOutlined />
          </div>
        </template>
        <div >
          <Row :gutter="16" style="padding:0 20px;" >
            <Col :span="4" v-for="item in items" :key="item" class="align-center">
              <router-link to="">
                <Icon :icon="item.icon" :color="item.color" size="48" />
                <div >
                  <span style="font-size: 16px;">{{ item.title }}</span>
                </div>
                <div class=" text-secondary"> {{ item.desc }} </div>
              </router-link>
            </Col>
          </Row>
        </div>
        <div >
          <Row :gutter="16" style="padding:0 20px;" >
            <Col :span="4" v-for="item in items" :key="item" class="align-center">
              <router-link to="" :title="item.desc">
                <Icon :icon="item.icon" :color="item.color" size="48" />
                <div >
                  <span class="text-lg">{{ item.title }}</span>
                </div>
                <div class="text-secondary"> {{ item.desc }} </div>
              </router-link>
            </Col>
          </Row>
        </div>
      </Carousel>
    </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  import { Card, Carousel, Row, Col  } from 'ant-design-vue';
  import Icon from '/@/components/Icon/Icon.vue';
  import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';

  import { groupItems } from './data';

  export default defineComponent({
    components: { Card, CardGrid: Card.Grid, Icon, Carousel, Row, Col,
      LeftOutlined,
      RightOutlined
    },
    setup() {
      return { items: groupItems };
    },
  });
</script>
<style lang="less">
  .system-item{
    /* For demo */
    .ant-carousel {
      .slick-slide{
        text-align: center;
        height: 100px;
        overflow: hidden;
      }
      .slick-slide h3{
        color: #fff;
      }
      .slick-arrow.custom-slick-arrow{
        width: 25px;
        height: 25px;
        font-size: 25px;
        color: #e74c3c;
        background-color: rgba(31, 45, 61, 0.01);
        opacity: 0.8;
        &::before{
          content: '';
        }
      }
      .custom-slick-arrow:hover{
        opacity: 0.5;
      }
    }
    .align-center{
      text-align: center;
    }
  }
</style>
