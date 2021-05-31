<template>
  <PageWrapper >
<!--    <template #headerContent> <WorkbenchHeader /> </template>-->
    <div class="lg:flex">
      <div class="lg:w-2/10 w-full !mr-4 mt-4 enter-y">
        <ITWikiCard :loading="loading" class="enter-y" />
      </div>
      <div class="lg:w-4/10 w-full !mr-4 enter-y">
        <BannerInfo :dataSource="bannerInfoItems" height="270" class="!my-4 enter-y" :loading="loading"></BannerInfo>
      </div>
      <div class="lg:w-4/10 w-full enter-y">
        <NoticeInfo :dataSource="noticeInfoItems" :loading="loading" class="!my-4 enter-y" />
      </div>
    </div>

    <div class="lg:flex">
      <div class="lg:w-2/10 w-full !mr-4 enter-y">
        <ITContactCard :loading="loading" class="enter-y" />
      </div>
      <div class="lg:w-8/10 w-full enter-y">
        <DynamicInfo :dataSource="dynamicInfoItems" :loading="loading" class="enter-y" />
        <CommonDownCard :loading="loading" class="enter-y !mt-4" />
      </div>
    </div>
    <div class="lg:flex mt-4">
      <div class="lg:w-10/10 w-full enter-y">

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
