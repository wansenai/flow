<template>
  <PageWrapper >
    <div class="flex mt-4">
      <div class="w-2/3 flex">
        <div class="w-1/3">
          <ITWikiCard :loading="loading" class="enter-y" />
        </div>
        <div class="w-2/3 pl-4">
          <BannerInfo :dataSource="bannerInfoItems" height="264" class="enter-y" :loading="loading"></BannerInfo>
        </div>
      </div>
      <div class="w-1/3 pl-4">
        <NoticeInfo :dataSource="noticeInfoItems" :loading="loading" class="enter-y" />
      </div>
    </div>

    <div class="flex mt-4">
      <div class="w-1/4 mr-4">
        <ITContactCard :loading="loading" class="enter-y" />
      </div>
      <div class="w-3/4">
        <DynamicInfo :dataSource="dynamicInfoItems" :loading="loading" class="enter-y" />
        <CommonDownCard :loading="loading" class="enter-y !mt-4" />
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
