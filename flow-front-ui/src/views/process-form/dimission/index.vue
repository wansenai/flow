<template>
  <CollapseContainer :canExpan="false" v-loading="formLoading">
    <template #title>
      <div class="font-bold">基本信息</div>
    </template>
    <!--<BasicForm @register="registerForm" />-->
    <div class="text-lg text-center p-20">
      开发中， 敬请期待！
    </div>
  </CollapseContainer>

</template>
<script lang="ts">
  import { defineComponent, ref, nextTick, onMounted } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Divider, Card, Empty, Descriptions} from 'ant-design-vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { CollapseContainer } from '/@/components/Container/index';

  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';


  export default defineComponent({
    components: {
      ProcessHeader,
      CollapseContainer,
      PageWrapper,
      [Divider.name]: Divider,
      [Card.name]: Card,
      AEmpty: Empty,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
    },
    setup() {
      const container  = ref<ElRef>();
      // const bpmnViewer  = ref();
      const { createMessage } = useMessage();

      onMounted(()=>{

      })

      async function doSubmit() {
        createMessage.info("开发中， 敬请期待！");
        return Promise.reject(false);
      }


      return {
        container,
        doSubmit
      };
    },
  });
</script>
