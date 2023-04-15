<template>
  <BasicModal wrapClassName="bpmn-viewer-container" v-bind="$attrs" @register="registerModal" :title="getTitle" >

    <div style="position: absolute; left: 10px; top: 10px; z-index: 999;">
      <RadioButtonGroup value="center">
        <Button value="small" title="缩小视图" style="width: 40px;" size="small" @click="processZoomOut()">
          <template #icon>
            <MinusCircleOutlined />
          </template>
        </Button>
        <Button value="default" size="small" style="width: 50px;">{{ Math.floor(defaultZoom * 10 * 10) + "%" }}</Button>
        <Button value="large" title="放大视图" style="width: 40px;" size="small" @click="processZoomIn()">
          <template #icon>
            <PlusCircleOutlined />
          </template>
        </Button>

        <Button value="center" title="重置视图并居中" style="width: 40px;" size="small" @click="processReZoom()">
          <OneToOneOutlined />
        </Button>
      </RadioButtonGroup>
    </div>

    <div class="containers" ref="container">
      <div :id="bpmnCanvasId"
           class="bpmnCanvas canvas"
           ref="bpmnCanvas"
           v-bind:style="{width: 100 * scale + '%',height: 100 * scale + '%'}"
      ></div>
    </div>

    <Popover overlayClassName="flowMsgPopover" ref="flowMsgPopover" :visible="true" >
      <template #title>
        <h1 class="popover-title">{{detailInfo.name}}</h1>
      </template>
      <template #content>
        <p>
          审批人员：<Tag v-if="detailInfo.approver" color="processing" style="margin-right: 4px;margin-bottom: 4px;" v-for="item in detailInfo.approver.split(';')" :key="item">{{item}}</Tag>
        </p>
        <p>节点类型：{{detailInfo.nodeType||""}}</p>
        <p>节点状态：{{detailInfo.status||""}}</p>
        <p>开始时间：{{detailInfo.startDate||""}}</p>
        <p>结束时间：{{detailInfo.endDate||""}}</p>
        <p>审批耗时：{{detailInfo.duration||""}}</p>
      </template>
    </Popover>


  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, computed, ref, unref, watch, onMounted, nextTick } from 'vue';
  import { BasicModal, useModal, useModalInner } from '/@/components/Modal';
  import { PageWrapper } from '/@/components/Page';
  import {Spin , Tag, Popover, Button, Space, Affix} from "ant-design-vue";
  import FramePage from '/@/views/components/iframe/index.vue';
  import { PlusCircleOutlined, MinusCircleOutlined, OneToOneOutlined } from '@ant-design/icons-vue';

  import BpmnViewer from 'bpmn-js/lib/Viewer'
  import MoveCanvasModule from 'diagram-js/lib/navigation/movecanvas'
  import {
    // getHighLightedNodeVoByProcessInstanceId,
    // getOneActivityVoByProcessInstanceIdAndActivityId,
    // loadBpmnXmlByModelKey,
    getBpmnByModelKey,
  } from "/@/api/flowable/bpmn/modelInfo";

  let bpmnViewer = null;

  export default defineComponent({
    props: {
      title: {
        type: String,
        default: '流程预览'
      },
    },
    name: 'BpmnPreview',
    components: {BasicModal,PageWrapper,
      Tag, Spin, Popover, Button,
      RadioButtonGroup: Button.RadioButtonGroup,
      FramePage, Space, Affix,
      PlusCircleOutlined, MinusCircleOutlined, OneToOneOutlined
    },
    setup(_, {emit}) {
      const triggerEl  = ref<ElRef>();
      const flowMsgPopover  = ref<ElRef>();
      const previewUrl = ref<string>('');
      const popoverVisible = ref<boolean>(false);
      const modelName = ref('');
      const defaultZoom = ref<number>(1);
      const bpmnCanvasId = ref<string>('bpmnCanvas'+new Date().getTime());

      let highlightNode = [];
      let highlightLine = [];
      let nodeDetail = {};
      const detailInfo = ref({});
      let processInstanceId = '';

      const [registerModal, { setModalProps, closeModal, changeLoading }] = useModalInner(async (data) => {
        const { modelKey, procInstId } = data;
        processInstanceId = procInstId;
        const isDev = import.meta.env.DEV;
        changeLoading(true);
        try{
          await init(modelKey, procInstId);
        }catch (e) {

        }finally {
          changeLoading(false);
        }
      });

      const getTitle = computed(() => ("流程图-"+modelName.value));

      async function init(modelKey, procInstId){
        bpmnViewer && bpmnViewer.destroy();
        bpmnViewer = new BpmnViewer({
          container: document.getElementById(unref(bpmnCanvasId)),
          width: '100%',
          additionalModules: [
            MoveCanvasModule // 移动整个画布
          ]
        });
        if(procInstId){
          /*getHighLightedNodeVoByProcessInstanceId({procInstId}).then(res=>{
            modelName.value = res.mldelName||'';
            highlightLine = res.highLightedFlows;
            highlightNode = res.activeActivityIds;
            if(bpmnViewer) {
              importXml(res.modelXml);
            }else{
              console.error('bpmnViewer is null or undefined!');
            }
            changeLoading(false);
          });*/
        }else{
          getBpmnByModelKey({modelKey}).then(res=>{
            if(bpmnViewer){
              importXml(res.modelXml);
            } else {
              console.error('bpmnViewer is null or undefined!');
            }
          }).catch((e)=>{
            console.error(e);
          }).finally(()=>{

          });
        }
      }

      function getHtmlAttr(source, element, attr) {
        let result = [];
        let reg = "<" + element + "[^<>]*?\\s" + attr + "=['\"]?(.*?)['\"]?\\s.*?>";
        let matched = source.match(new RegExp(reg, "gi"));

        matched&&matched.forEach(item=>{
          item&&result.push(item);
        });
        return result;
      }

      function importXml(modelXml){
        // 处理排他网关， 注：流程图预览时，排他网关需要在对应的<bpmndi:BPMNShape>节点上添加属性isMarkerVisible="true"
        const gatewayIds = getHtmlAttr(modelXml, 'exclusiveGateway', 'id');
        let modelXmlTemp = modelXml;
        if(gatewayIds && gatewayIds.length > 0){
          gatewayIds.forEach(item=>{
            const result = new RegExp('id="(.+?)"').exec(item)
            if(result && result[1]){
              modelXmlTemp = modelXmlTemp.replace('bpmnElement="'+result[1]+'"', 'bpmnElement="'+result[1]+'" isMarkerVisible="true"');
            }
          })
        }

        bpmnViewer.importXML(modelXmlTemp, function (err) {
          if(err){
            console.error(err);
          }else{
            importXmlSuccess();
          }
        });
      }

      function importXmlSuccess () {
        // 使流程图自适应屏幕
        const canvas = bpmnViewer.get('canvas');
        canvas.zoom("fit-viewport", "auto");

        setViewerStyle(canvas);
        bindEvents();
      }

      function setViewerStyle(canvas){
        if(highlightNode && highlightNode.length > 0){
          highlightNode.forEach(item=>{
            canvas.addMarker(item, 'highlight');
            const ele = document.querySelector('.highlight').querySelector('.djs-visual rect');
            if(ele){
              ele.setAttribute('stroke-dasharray', '4,4');
            }
          });
        }
        if(highlightLine && highlightLine.length > 0){
          highlightLine.forEach(item=>{
            canvas.addMarker(item, 'highlight-line');
          });
        }
      }

      function genNodeDetailBox(detail, e, overlays) {
        const tempDiv = document.createElement("div");
        detailInfo.value = detail;
        const popoverEl = document.querySelector('.flowMsgPopover');
        tempDiv.innerHTML= popoverEl.innerHTML;
        tempDiv.className = 'tipBox';
        tempDiv.style.width = '260px';
        tempDiv.style.background = 'rgba(255, 255, 255, .6)'
        /*const $overlayHtml = jquery(` <div class="tipBox">
              你好，我是悬浮框里的内容
              </div>`);*/
        overlays.add(detail.id, {
          position: {top: e.element.height, left: 0},
          html: tempDiv
        });
      }

      // 以下代码为：为节点注册鼠标悬浮事件
      function bindEvents(){
        const eventBus = bpmnViewer.get('eventBus');
        const overlays = bpmnViewer.get('overlays');
        eventBus.on('element.hover', (e) => {
          if(e.element.type === "bpmn:UserTask" ){
            if(processInstanceId){
              if(nodeDetail[e.element.id]){
                genNodeDetailBox(nodeDetail[e.element.id], e, overlays);
              }else{
                /*getOneActivityVoByProcessInstanceIdAndActivityId({procInstId:processInstanceId, elementId: e.element.id}).then(res=>{
                  nodeDetail[e.element.id] = res;
                  genNodeDetailBox(res, e, overlays);
                });*/
              }
            }
          }
        });
        eventBus.on('element.out', (e) => {
          if(e.element.type === "bpmn:UserTask" ){
            // popoverVisible.value = false;
          }
          overlays.clear();
        });
      }


      function processZoomIn(zoomStep = 0.1) {
        let newZoom = Math.floor(defaultZoom.value * 100 + zoomStep * 100) / 100;
        if (newZoom > 4) {
          throw new Error("[Process Designer Warn ]: The zoom ratio cannot be greater than 4");
        }
        defaultZoom.value = newZoom;
        bpmnViewer.get("canvas").zoom(defaultZoom.value);
      }
      function processZoomOut(zoomStep = 0.1) {
        let newZoom = Math.floor(defaultZoom.value * 100 - zoomStep * 100) / 100;
        if (newZoom < 0.2) {
          throw new Error("[Process Designer Warn ]: The zoom ratio cannot be less than 0.2");
        }
        defaultZoom.value = newZoom;
        bpmnViewer.get("canvas").zoom(defaultZoom.value);
      }
      function processReZoom() {
        defaultZoom.value = 1;
        bpmnViewer.get("canvas").zoom("fit-viewport", "auto");
      }

      return {
        defaultZoom,
        registerModal,
        flowMsgPopover,
        popoverVisible,
        triggerEl,
        bpmnCanvasId,
        getTitle,
        detailInfo,
        previewUrl,
        processZoomIn,
        processZoomOut,
        processReZoom,
      };
    },
  });
</script>

<style lang="less">
  .bpmn-viewer-container{
    overflow: visible;
    .ant-modal{
      .ant-modal-content{
        .ant-modal-body{
          .scroll-container{
            overflow: visible;
          }
          .scrollbar__wrap{
            overflow:visible;
          }
        }
      }
    }
    .bpmnCanvas{
      .bjs-container{
        overflow: visible;
        .djs-container{
          overflow: visible!important;
        }
      }
    }
  }
  .bjs-powered-by, .bjs-breadcrumbs {
    display: none;
  }
  .flowMsgPopover{
    display: none;
  }
  .highlight:not(.djs-connection) .djs-visual > :nth-child(1) {
    fill: rgba(251, 233, 209, 1) !important; /* color elements as green */
  }
  .highlight g.djs-visual >:nth-child(1) {
    stroke: rgba(214, 126, 125, 1) !important;
  }
  .highlight-line g.djs-visual >:nth-child(1) {
    stroke: rgba(0, 190, 0, 1) !important;
  }

  @-webkit-keyframes dynamicNode {
    to {
      stroke-dashoffset: 100%;
    }
  }
  .highlight{
    .djs-visual{
      -webkit-animation: dynamicNode 18S linear infinite;
      -webkit-animation-fill-mode: forwards;
    }
  }
  .tipBox {
    .ant-popover-arrow{
      display: none;
    }
  }
</style>
<style lang="less" scoped >
  .popover-title{
    font-weight: bold;
  }

  .containers{
    background-color: #ffffff;
    width: 100%;
    height: 50vh;
    .canvas{
      width: 100%;
      height: 100%;
    }
    .tipBox {
      width: 300px;
      background: #fff;
      border-radius: 4px;
      border: 1px solid #ebeef5;
      padding: 12px;
      .ant-popover-arrow{
        display: none;
      }
      p{
        line-height: 28px;
        margin:0;
        padding:0;
      }
    }
  }
</style>
