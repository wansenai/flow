<template>
  <div class="w-full h-full" >
    <Tabs class="form-designer" type="card" :tabBarStyle="{marginBottom: 0}" v-model:activeKey="activeKey" style="height: 100%;" >
      <TabPane key="formDesigner" tab="表单设计" >
        <FramePage ref="formDesignerFrameRef" :frameSrc="formUrl" />
<!--        <FormDesigner :model-key="modelKey" :category-code="categoryCode" @onSave="onSave" />-->
      </TabPane>
      <TabPane key="processDesigner" tab="流程设计" :disabled="processInfoDisabled">
        <FramePage :frameSrc="url" />
      </TabPane>
    </Tabs>
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, unref, computed, nextTick } from 'vue';
  import FramePage from '/@/views/components/iframe/index.vue';
  import {useFrameKeepAlive} from "/@/layouts/iframe/useFrameKeepAlive";
  import { useRouter } from 'vue-router';
  import { useMultipleTabStore } from '/@/store/modules/multipleTab';
  import { getByModelId } from '/@/api/flowable/bpmn/modelInfo';
  import {Tabs, Dropdown, Menu} from "ant-design-vue";
  // import ModelInfoSetting from '../../components/ModelInfoSetting.vue';
  import { PicLeftOutlined } from '@ant-design/icons-vue';
  import {getEnv} from "/@/utils/env";

  export default defineComponent({
    name: 'FormDesigner',
    components: {
      FramePage,
      Tabs, TabPane: Tabs.TabPane,
      PicLeftOutlined, Dropdown, Menu, MenuItem: Menu.Item
    },
    setup() {
      const { currentRoute } = useRouter();
      const { query: { modelId, modelKey, categoryCode } } = unref(currentRoute);
      const processInfoDisabled = ref<boolean>(true);
      const formUrl = ref<string>('');
      const url = ref<string>('');
      const formDesignerFrameRef = ref();
      const processModelId = ref<string>('');
      const activeKey = ref<string>('formDesigner');
      const frame = ref<object>({});
      const tabStore = useMultipleTabStore();
      const router = useRouter();
      const isDev = getEnv()==='development';

      const currentTab = tabStore.getTabList.find(
        // 以下函数只比对了path，你应该适当修改一下，加上路由参数比对
        (item) => {
          return item.fullPath === router.currentRoute.value.fullPath
        }
      )!;

      // 修复警告不使用eval函数，因为它存在安全风险 2023-12-25
      function changeUrlArg(url, arg, val){
        let pattern = new RegExp(arg+'=([^&]*)');
        let replaceText = arg+'='+val;
        if (pattern.test(url)) {
          return url.replace(pattern, replaceText);
        } else {
          return (url.includes('?') ? url+'&'+replaceText : url+'?'+replaceText);
        }
      }

      function updateTabInfo(obj){
        if(obj && obj.modelId){
          // 修改可用状态
          processInfoDisabled.value = false;
          // let newUrl = '';//changeUrlArg(window.location.href,'modelId',obj.data.modelId)
          let newUrl = window.location.href;
          newUrl = changeUrlArg(newUrl, 'modelId', obj.modelId);
          newUrl = changeUrlArg(newUrl, 'modelKey', obj.modelKey);
          currentTab.meta.title = '自定义流程-' + obj.modelName;
          processModelId.value = obj.modelId;
          history.pushState('', '', newUrl); // 不刷新页面

          url.value = isDev ? ('http://localhost:8100/flow-bpmn/index.html#/bpmn/designer?modelId=' + obj.modelId + '&formType=0')
            : ('/flow-bpmn/index.html#/bpmn/designer?modelId=' + obj.modelId + '&formType=0');
        }
      }

      // 保存成功回调
      function onSave(res){
        updateTabInfo(res)
      }

      onMounted(()=>{
        // 在外部vue的window上添加postMessage的监听，并且绑定处理函数handleMessage
        window.removeEventListener('message', event=>{});
        window.addEventListener('message', event => {
          // 根据上面制定的结构来解析iframe内部发回来的数据
          const data = event.data
          switch (data.cmd) {
            case 'returnFormJson':
              // 业务逻辑
              break;
            case 'updateTabInfo':
              updateTabInfo(data.params.data)
              // 业务逻辑
              break
          }
        });

        // 性能优化-如果有拼接名称则不再查询
        if(currentTab.meta.title.indexOf('设计流程-')===0){
          return;
        }

        processModelId.value = modelId;

        modelId&&getByModelId(modelId).then((res)=>{
          if(currentTab.meta.title&&currentTab.meta.title.indexOf('-'+res.name) === -1){
            currentTab.meta.title = currentTab.meta.title + '-' +res.name;
          }
        }).catch(()=>{
          console.error('通过ModelId查询modelInfo失败！');
        })
      });

      // history路由
      // url.value = isDev ? ('http://localhost:8100/flow-bpmn/bpmn/designer?modelId=' + modelId)
      // : ('/flow-bpmn/bpmn/designer?modelId=' + modelId);

      // hash路由
      // url.value = '/flow-bpmn/index.html/#/bpmn/designer?modelId=' + modelId;

      if(modelId){
        // 修改可用状态
        processInfoDisabled.value = false;
      }
      nextTick(()=>{
        url.value = isDev ? ('http://localhost:8100/flow-bpmn/index.html#/bpmn/designer?modelId=' + modelId + '&formType=0')
          : ('/flow-bpmn/index.html#/bpmn/designer?modelId=' + modelId + '&formType=0');

        formUrl.value = isDev ? ('http://localhost:8080/#/?modelKey=' + modelKey + '&formType=custom&categoryCode='+categoryCode)
          : ('/form-designer/index.html#/?modelKey=' + modelKey + '&formType=custom&categoryCode='+categoryCode);
      });
      const { getFramePages, hasRenderFrame, showIframe } = useFrameKeepAlive();
      const showFrame = computed(() => unref(getFramePages).length > 0);

      return {
        processInfoDisabled,
        formDesignerFrameRef,
        processModelId,
        getFramePages,
        hasRenderFrame,
        showIframe,
        showFrame,
        url,
        formUrl,
        frame,
        activeKey,
        modelKey,
        categoryCode,
        onSave
      };
    },
  });
</script>
<style lang="less">
.form-designer{
  .ant-tabs-content{
    height: 100%;
  }
}
</style>
