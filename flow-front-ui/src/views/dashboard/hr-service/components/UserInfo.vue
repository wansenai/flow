<template>
  <Card title="" v-bind="$attrs">
    <div >
      <Avatar :src="headerImg" :size="72" class="!mx-auto !block" />
      <div class="md:ml-6 flex flex-col justify-center md:mt-0 !mt-4">
        <h1 class="md:text-lg text-md" style="text-align: center;">{{loginUser.name}}({{loginUser.code}})</h1>
        <span class="text-secondary">公司：中国石化-湖南石化</span>
        <span class="text-secondary">部门：市场营销部</span>
      </div>
      <div class="md:ml-6 flex justify-center md:mt-0 !mt-4">
        <a-button type="link">我的考勤</a-button>
        <Badge count="5" :offset="[-8, 0]">
          <a-button type="link">异常处理</a-button>
        </Badge>
      </div>
    </div>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { Avatar, Card, Badge } from 'ant-design-vue';
  import { useUserStore } from '/@/store/modules/user';
  import headerImg from '/@/assets/images/header.jpg';

  export default defineComponent({
    components: { Avatar, Card, Badge },
    setup() {

      const userStore = useUserStore();

      const loginUser = ref();
      const loading = ref(false);
      const currentDate = ref(new Date());
      loginUser.value = userStore.getUserInfo || {};


      return { headerImg, loginUser };
    },
  });
</script>
