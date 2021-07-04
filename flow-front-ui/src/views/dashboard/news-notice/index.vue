<template>
  <PageWrapper >
    <div class="lg:flex">
      <div class="lg:w-10/10 w-full enter-y">
        <BannerInfo :dataSource="bannerInfoItems" height="400" class="!my-4 enter-y" :loading="loading"></BannerInfo>
      </div>
    </div>
    <div class="flex">
      <div class="w-1/3 mr-4 enter-y">
        <BannerInfo :dataSource="bannerInfoItems" height="270" class="enter-y" :loading="loading"></BannerInfo>
      </div>
      <div class="w-2/3 enter-y">
        <NoticeInfo :dataSource="noticeInfoItems" :loading="loading" class="enter-y" />
      </div>
    </div>

    <div class="lg:flex mt-4">
      <div class="w-1/4 w-full !mr-4 enter-y">
        <ITContactCard :loading="loading" class="enter-y" />
      </div>
      <div class="w-3/4 w-full enter-y">
        <DynamicInfo :dataSource="dynamicInfoItems" :loading="loading" class="enter-y" />
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { Card } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import DynamicInfo from '../../components/news/DynamicInfo.vue';
  import BannerInfo from '../../components/banner/BannerInfo.vue';
  import NoticeInfo from '../../components/notice/NoticeInfo.vue';
  import ITWikiCard from './components/ITWikiCard.vue';
  import ITContactCard from './components/ITContactCard.vue';
  import CommonDownCard from './components/CommonDownCard.vue';
  import {bannerList, noticeInfoItems, dynamicInfoItems } from './components/data';

  export default defineComponent({
    components: {
      PageWrapper,
      DynamicInfo,
      BannerInfo,
      NoticeInfo,
      ITWikiCard,
      ITContactCard,
      CommonDownCard,
      Card,
    },
    setup() {
      const loading = ref(true);

      setTimeout(() => {
        loading.value = false;
      }, 1500);

      return {
        loading,
        dynamicInfoItems,
        bannerInfoItems: bannerList,
        noticeInfoItems
      };
    },
  });
</script>
