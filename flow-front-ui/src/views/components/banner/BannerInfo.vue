<template>
  <Card class="banner-box" title="" :style="`height:${height}px;`" body-style="padding:0;" v-bind="$attrs">
    <!-- autoplay -->
    <Carousel arrows :dots="false" class="!h-full !w-full">
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 0; z-index: 8">
          <LeftOutlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 0;">
          <RightOutlined />
        </div>
      </template>

      <div class="!w-full carousel-item"
           v-for="item in items"
           :key="item.id"
           :title="item.title"
      >
        <div class="banner" :style="`height: ${height}px; background-image: url('${item.imgSrc}')`">
          <div class="banner-text">
            {{item.title}}
          </div>
        </div>
      </div>
    </Carousel>
  </Card>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';

  import { Card, Carousel  } from 'ant-design-vue';
  import Icon from '/@/components/Icon/Icon.vue';

  export default defineComponent({
    props:{
      dataSource: Array,
      height: {
        type: Number,
        default: 200
      }
    },
    components: { Card, CardGrid: Card.Grid, Icon, Carousel, LeftOutlined,
      RightOutlined },
    setup(props) {

      return {
        items: props.dataSource,
        height: props.height,
      };
    },
  });
</script>
<style lang="less">
  .banner-box{
    .banner {
      width: 100%;
      position: relative;
      background-position: center center;
      -webkit-background-size:cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      .banner-text{
        width: 100%;
        position: absolute;
        bottom: 0px;
        line-height: 30px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 8px;
        background: rgba(0, 0, 0, .2);
        color: white;
        text-align: left;
      }
    }
    .slick-list .slick-track .slick-slide div {
      vertical-align: middle;
    }
    .ant-carousel {
      .slick-slide{
        text-align: center;
        overflow: hidden;
      }
      .slick-slide h3{
        color: #fff;
      }
      .slick-arrow.custom-slick-arrow{
        width: 25px;
        height: 36px;
        font-size: 25px;
        line-height: 36px;
        color: #fff;
        background-color: rgba(31, 45, 61, 0.5);
        opacity: 0.6;
        &::before{
          content: '';
        }
      }
      .custom-slick-arrow:hover{
        opacity: 0.9;
      }
    }
  }
</style>
