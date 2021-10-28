<template>
  <div>
    <FramePage :frameSrc="url" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, unref, computed } from 'vue';
  import FramePage from '/@/views/sys/iframe/index.vue';
  import {useFrameKeepAlive} from "/@/layouts/iframe/useFrameKeepAlive";
  import { useRouter } from 'vue-router';
  import { useMultipleTabStore } from '/@/store/modules/multipleTab';
  import { getById, getByModelId } from '/@/api/flowable/bpmn/modelInfo';

  export default defineComponent({
    name: 'BpmnDesigner',
    components: { FramePage },
    setup() {
      const { currentRoute } = useRouter();
      const { query: { modelId } } = unref(currentRoute);
      const url = ref<string>('');
      const frame = ref<object>({});
      const tabStore = useMultipleTabStore();
      const router = useRouter();
      const currentTab = tabStore.getTabList.find(
        // 以下函数只比对了path，你应该适当修改一下，加上路由参数比对
        (item) => {
          return item.fullPath === router.currentRoute.value.fullPath
        }
      )!;

      onMounted(()=>{
        // 性能优化-如果有拼接名称则不再查询
        if(currentTab.meta.title.indexOf('设计流程-')===0){
          return;
        }
        getByModelId(modelId).then((res)=>{
          if(currentTab.meta.title&&currentTab.meta.title.indexOf('-'+res.name) === -1){
            currentTab.meta.title = currentTab.meta.title + '-' +res.name;
          }
        }).catch(()=>{
          console.error('通过ModelId查询modelInfo失败！');
        })
      });
      const isDev = import.meta.env.DEV;
      url.value = isDev ? ('/flow-bpmn-front/index.html/#/bpmn/designer?modelId=' + modelId) : ('/flow-bpmn/index.html/#/bpmn/designer?modelId=' + modelId);

      const { getFramePages, hasRenderFrame, showIframe } = useFrameKeepAlive();
      const showFrame = computed(() => unref(getFramePages).length > 0);
      return { getFramePages, hasRenderFrame, showIframe, showFrame, url, frame };
    },
  });
</script>
