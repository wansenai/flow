<template>
  <PageWrapper class="!mt-4">
    <template #headerContent> <WorkbenchHeader /> </template>
    <div class="lg:flex">
      <div class="lg:w-7/10 w-full enter-y">
        <NoticeInfo :dataSource="noticeInfoItems" :loading="loading" class="!my-4 enter-y" />
        <SystemListCard :loading="loading" class="enter-y" />
      </div>
      <div class="lg:w-3/10 !pl-4">
        <BannerInfo :dataSource="bannerInfoItems" class="!my-4 enter-y" :loading="loading"></BannerInfo>
        <DynamicInfo :dataSource="dynamicInfoItems" :loading="loading" class="!my-4 enter-y" />
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { Card } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import WorkbenchHeader from './components/WorkbenchHeader.vue';
  import SystemListCard from './components/SystemListCard.vue';
  import QuickNav from './components/QuickNav.vue';
  import DynamicInfo from '/@/views/components/news/DynamicInfo.vue';
  import NoticeInfo from '/@/views/components/notice/NoticeInfo.vue';
  import BannerInfo from '/@/views/components/banner/BannerInfo.vue';
  import SaleRadar from './components/SaleRadar.vue';
  import { dynamicInfoItems, noticeInfoItems, bannerList } from './components/data';

  export default defineComponent({
    components: {
      PageWrapper,
      WorkbenchHeader,
      SystemListCard,
      NoticeInfo,
      BannerInfo,
      QuickNav,
      DynamicInfo,
      SaleRadar,
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
        noticeInfoItems,
        bannerInfoItems: bannerList
      };
    },
  });
</script>

<style lang="less">

</style>
