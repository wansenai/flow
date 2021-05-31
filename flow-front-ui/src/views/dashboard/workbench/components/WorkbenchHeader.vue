<template>
  <div class="lg:flex">
    <Avatar :src="headerImg" :size="72" class="!mx-auto !block" />
    <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
      <h1 class="md:text-lg text-md">{{loginUser.name}}</h1>
      <span class="text-secondary"> {{currentDate}}，晴，20℃ - 32℃！ </span>
    </div>
    <div class="flex-1 md:mt-0 mt-4">
      <QuickNav :loading="loading" class="enter-y" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useUserStore } from '/@/store/modules/user';
  import QuickNav from './QuickNav.vue';

  import { Avatar } from 'ant-design-vue';

  import headerImg from '/@/assets/images/header.jpg';
  import {formatToDate} from "/@/utils/dateUtil";
  export default defineComponent({
    components: { Avatar, QuickNav },
    setup() {
      const userStore = useUserStore();

      const loginUser = ref();
      const loading = ref(false);
      const currentDate = ref(new Date());


      loginUser.value = userStore.getUserInfo || {};

      return { headerImg, loading, loginUser, currentDate: formatToDate(new Date())};
    },
  });
</script>
