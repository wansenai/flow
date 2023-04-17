<template>
  <BasicModal wrapClassName="bpmn-viewer-container" v-bind="$attrs" @cancel="onCloseBpmnPreviewModal" @register="registerModal" :title="getTitle" >
    <div class="viewer-container" >
      <div class="svg-controller">
        <div class="scale-rate">
          {{ Math.floor(defaultZoom * 10 * 10) + "%" }}
        </div>
        <Space>
          <a-button title="缩小" shape="circle" size="small" @click="processZoomOut()" type="primary">
            <MinusOutlined/>
          </a-button>
          <a-button :title="isFitView?'按窗口大小显示':'实际大小'" shape="circle" size="small" @click="processFitDialog(isFitView)" type="primary">
            <CompressOutlined v-if="isFitView" />
            <ExpandOutlined v-else  />
          </a-button>
          <a-button title="放大" shape="circle" size="small" @click="processZoomIn()" type="primary">
            <PlusOutlined/>
          </a-button>
        </Space>
      </div>

      <div class="containers" ref="container" @mousewheel="changeScale">
        <div :id="bpmnCanvasId"
             class="bpmnCanvas canvas"
             ref="bpmnCanvas"
        ></div>
      </div>
    </div>

    <Popover overlayClassName="flowMsgPopover" ref="flowMsgPopover" :visible="true" >
      <template #title>
        <h1 class="popover-title">{{detailInfo.name||"-"}}</h1>
      </template>
      <template #content>
        <p>
          审批人员：<Tag v-if="detailInfo.approver" color="processing" style="margin-right: 4px;margin-bottom: 4px;" v-for="item in detailInfo.approver.split(';')" :key="item">{{item}}</Tag>
        </p>
        <p>节点类型：{{detailInfo.nodeType||"-"}}</p>
        <p>节点状态：{{detailInfo.status||"-"}}</p>
        <p>开始时间：{{detailInfo.startDate||"-"}}</p>
        <p>结束时间：{{detailInfo.endDate||"-"}}</p>
        <p>审批耗时：{{detailInfo.duration||"-"}}</p>
      </template>
    </Popover>
    <template #insertFooter>
      <a-button type="primary" @click="handleExportDiagram" :loading="exportLoading">导出流程图</a-button>
    </template>
  </BasicModal>
</template>
<script lang="ts">
import { defineComponent, computed, ref, unref, watch, onMounted, nextTick } from 'vue';
import { BasicModal, useModal, useModalInner } from '/@/components/Modal';
import { PageWrapper } from '/@/components/Page';
import {Spin , Tag, Popover, Button, Space, Affix} from "ant-design-vue";
import FramePage from '/@/views/components/iframe/index.vue';
import { PlusCircleOutlined, MinusCircleOutlined,
  OneToOneOutlined, PlusOutlined,
  MinusOutlined, RetweetOutlined,
  ExpandOutlined,
  CompressOutlined,
} from '@ant-design/icons-vue';

import BpmnViewer from 'bpmn-js/lib/Viewer'
// import BpmnViewer from 'bpmn-js/lib/NavigatedViewer'
import MoveCanvasModule from 'diagram-js/lib/navigation/movecanvas'
import {
  getHighLightedNodeVoByProcessInstanceId,
  getOneActivityVoByProcessInstanceIdAndActivityId,
  loadBpmnXmlByModelKey,
} from "/@/api/process/process";

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
    ExpandOutlined, CompressOutlined,
    PlusCircleOutlined, MinusCircleOutlined, OneToOneOutlined,
    PlusOutlined, MinusOutlined, RetweetOutlined, PlusOutlined, MinusOutlined, RetweetOutlined,
  },
  setup(_, {emit}) {
    const triggerEl  = ref<ElRef>();
    const flowMsgPopover  = ref<ElRef>();
    const popoverVisible = ref<boolean>(false);
    const exportLoading = ref<boolean>(false);
    const isFitView = ref<boolean>(false);
    const fitViewScaleRate = ref(1);
    const modelName = ref('');
    const defaultZoom = ref<number>(1);
    const bpmnCanvasId = ref<string>('bpmnCanvas'+new Date().getTime());

    let highlightNode = [];
    let highlightLine = [];
    let nodeDetail = {};
    let nodeDetailLoading = {};
    const detailInfo = ref({});
    let processInstanceId = '';

    const [registerModal, { setModalProps, closeModal, changeLoading }] = useModalInner(async (data) => {
      const { modelKey, procInstId } = data;
      processInstanceId = procInstId;
      await init(modelKey, procInstId);
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

      changeLoading(true);
      if(procInstId&&procInstId != '0'){
        getHighLightedNodeVoByProcessInstanceId({procInstId}).then(res=>{
          modelName.value = res.modelName||'';
          highlightLine = res.highLightedFlows;
          highlightNode = res.activeActivityIds;
          if(bpmnViewer) {
            importXml(res.modelXml);
          }else{
            console.error('bpmnViewer is null or undefined!');
          }
          // changeLoading(false);
        }).finally(()=>{
          changeLoading(false);
        });
      }else{
        loadBpmnXmlByModelKey({modelKey}).then(res=>{
          modelName.value = res.modelName||'';
          if(bpmnViewer){
            importXml(res.modelXml);
          } else {
            console.error('bpmnViewer is null or undefined!');
          }
        }).catch((e)=>{
          console.error(e);
        }).finally(()=>{
          changeLoading(false);
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

    // 向画布中添加一个节点-箭头颜色的实现
    function genBpmnSvgMarker(){
      // 向画布中添加一个节点-箭头颜色的实现
      let bpmnCanvas = document.getElementById(unref(bpmnCanvasId));
      let bpmnSvg = bpmnCanvas.querySelector('.djs-container').querySelector('svg')
      let bpmnSvgDefs = bpmnSvg.querySelector('defs');
      let marker = document.createElementNS("http://www.w3.org/2000/svg","marker");
      if(marker){
        marker.setAttribute("id", "greenMarker")
        marker.setAttribute("viewBox", "0 0 20 20")
        marker.setAttribute("refX", "11")
        marker.setAttribute("refY", "10")
        marker.setAttribute("markerWidth", "10")
        marker.setAttribute("markerHeight", "10")
        marker.setAttribute("orient", "auto")
        let path = document.createElementNS("http://www.w3.org/2000/svg","path");
        path.setAttribute("d", "M 1 5 L 11 10 L 1 15 Z");
        path.setAttribute("style", "fill: #00be00; stroke-width: 1px; stroke-linecap: round; stroke-dasharray: 10000, 1; stroke: #00be00;");
        marker.appendChild(path);
        bpmnSvgDefs.appendChild(marker);
      }
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
          genBpmnSvgMarker();
        }
      });
    }

    function importXmlSuccess () {
      // 使流程图自适应屏幕
      const canvas = bpmnViewer.get('canvas');
      canvas.zoom("fit-viewport", "auto");
      defaultZoom.value = canvas.zoom();
      fitViewScaleRate.value = canvas.zoom();
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
      setTimeout(()=>{
        const popoverEl = document.querySelector('.flowMsgPopover');
        tempDiv.innerHTML= popoverEl.innerHTML;
        tempDiv.className = 'tipBox';
        tempDiv.style.width = '270px';
        tempDiv.style.background = 'rgba(255, 255, 255, .6)'
        /*const $overlayHtml = jquery(` <div class="tipBox">
              你好，我是悬浮框里的内容
              </div>`);*/
        overlays.add(detail.id, 'note', {
          position: {top: e.element.height, left: 0},
          html: tempDiv
        });
      });
    }

    function getNodePersonal(processInstanceId, e, overlays){
      const elementId = e.element.id;
      const cacheKey = getNodeDetailKey(processInstanceId, elementId);
      nodeDetailLoading[cacheKey] = true;
      getOneActivityVoByProcessInstanceIdAndActivityId({procInstId:processInstanceId, elementId: e.element.id}).then(res=>{
        nodeDetail[cacheKey] = res;
        nodeDetailLoading[cacheKey] = false;
        genNodeDetailBox(res, e, overlays);
      });
    }

    function getNodeDetailKey(processInstanceId, elementId){
      return processInstanceId + '_' + elementId;
    }

    // 以下代码为：为节点注册鼠标悬浮事件
    function bindEvents(){
      const eventBus = bpmnViewer.get('eventBus');
      const overlays = bpmnViewer.get('overlays');
      eventBus.on('element.hover', (e) => {
        if(e.element.type === "bpmn:UserTask" ){
          if(processInstanceId){
            const elementId = e.element.id;
            const cacheKey = getNodeDetailKey(processInstanceId, elementId);
            if(nodeDetail[cacheKey]){
              genNodeDetailBox(nodeDetail[cacheKey], e, overlays);
            }else{
              const currentNodeLoading = nodeDetailLoading[cacheKey];
              if(!currentNodeLoading || currentNodeLoading === false){
                getNodePersonal(processInstanceId, e, overlays);
              }
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

    function processFitDialog(isFit) {
      if(bpmnViewer.get("canvas")){
        const canvas = bpmnViewer.get('canvas');
        if(isFit){
          isFitView.value = false;
          bpmnViewer.get("canvas").zoom("fit-viewport", "auto");

          defaultZoom.value = canvas.zoom()
        }else{
          isFitView.value = true;
          defaultZoom.value = 1;
          bpmnViewer.get("canvas").zoom(defaultZoom.value);
        }
      }
    }

    function processZoomIn(zoomStep = 0.1) {
      let newZoom = Math.floor(defaultZoom.value * 100 + zoomStep * 100) / 100;
      if (newZoom > 4) {
        newZoom = 4;
        // throw new Error("[Process Designer Warn ]: The zoom ratio cannot be greater than 4");
      }
      defaultZoom.value = newZoom;
      bpmnViewer.get("canvas").zoom(defaultZoom.value);
    }
    function processZoomOut(zoomStep = 0.1) {
      let newZoom = Math.floor(defaultZoom.value * 100 - zoomStep * 100) / 100;
      if (newZoom < 0.2) {
        newZoom = 0.2
        // throw new Error("[Process Designer Warn ]: The zoom ratio cannot be less than 0.2");
      }
      defaultZoom.value = newZoom;
      bpmnViewer.get("canvas").zoom(defaultZoom.value);
    }

    function processReZoom() {
      if(bpmnViewer.get("canvas")){
        defaultZoom.value = 1;
        bpmnViewer.get("canvas").zoom("fit-viewport", "auto");
      }
    }

    // 根据所需类型进行转码并返回下载地址
    function setEncoded(type, filename = "diagram", data) {
      const encodedData = encodeURIComponent(data);
      return {
        filename: `${filename}.${type}`,
        href: `data:application/${type === "svg" ? "text/xml" : "bpmn20-xml"};charset=UTF-8,${encodedData}`,
        data: data
      };
    }
    // 下载流程图到本地
    async function downloadProcess(type, name) {
      try {
        // 按需要类型创建文件并下载
        if (type === "xml" || type === "bpmn") {
          const { err, xml } = await bpmnViewer.saveXML();
          // 读取异常时抛出异常
          if (err) {
            console.error(`[Process Designer Warn ]: ${err.message || err}`);
          }
          let { href, filename } = setEncoded(type.toUpperCase(), name, xml);
          downloadFunc(href, filename);
        } else {
          const { err, svg } = await bpmnViewer.saveSVG();
          // 读取异常时抛出异常
          if (err) {
            return console.error(err);
          }
          let { href, filename } = setEncoded("SVG", name, svg);
          downloadFunc(href, filename);
        }
      } catch (e) {
        console.error(`[Process Designer Warn ]: ${e.message || e}`);
      }
      // 文件下载方法
      function downloadFunc(href, filename) {
        if (href && filename) {
          let a = document.createElement("a");
          a.download = filename; //指定下载的文件名
          a.href = href; //  URL对象
          a.click(); // 模拟点击
          URL.revokeObjectURL(a.href); // 释放URL 对象
        }
      }
    }

    function handleExportDiagram() {
      // 导出流程图
      exportLoading.value = true;
      downloadProcess('svg', modelName.value).finally(()=>{
        exportLoading.value = false;
      });
    }

    // 预览流程图时 - 鼠标滚动缩放
    function changeScale(e){
      const scal = e.deltaY > 0 ? -0.1 : 0.1;
      if(unref(defaultZoom) < 0.2){
        defaultZoom.value = 0.2
      }
      if(unref(defaultZoom) > 4.0){
        defaultZoom.value = 4.0;
      }
      defaultZoom.value = unref(defaultZoom) + scal;
      bpmnViewer.get("canvas").zoom(unref(defaultZoom));

      if(defaultZoom.value < fitViewScaleRate.value){
        isFitView.value = false;
      }else{
        isFitView.value = true;
      }
    }

    // 解决生成多个箭头标签的BUG
    function onCloseBpmnPreviewModal(){
      let element = document.getElementById("greenMarker");
      element.parentNode.removeChild(element);
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
      isFitView,
      processFitDialog,
      processZoomIn,
      processZoomOut,
      processReZoom,
      handleExportDiagram,
      exportLoading,
      changeScale,
      onCloseBpmnPreviewModal,
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
      padding: 0;
      .djs-container{
        overflow: visible!important;
        .djs-overlay-container{
          z-index: 9;
        }
      }
    }
  }
  .viewer-container{
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    .svg-controller {
      text-align: center;
      position: absolute;
      bottom: -5px;
      opacity: 0;
      transition: 0.8s;
      margin: auto;
      width: 100%;
      .scale-rate{
        font-size: 14px;
        line-height: 20px;
      }
    }
    &:hover{
      .svg-controller {
        bottom: 5px;
        opacity: 1;
        z-index: 9;
      }
    }
    .svg-container {
      height: 100%;
      cursor: move;
    }
    .djs-overlay-container{
      font-size: initial;
      .popover-title{
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 0;
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
.highlight-line{
  path{
    marker-end: url('#greenMarker') !important;
  }
}
@keyframes dynamicNode {
  to {
    stroke-dashoffset: 100%;
  }
}
@-webkit-keyframes dynamicNode {
  to {
    stroke-dashoffset: 100%;
  }
}
.highlight{
  .djs-visual{
    animation: dynamicNode 18S linear infinite;
    -webkit-animation: dynamicNode 18S linear infinite;
    -webkit-animation-fill-mode: forwards;
  }
}
.tipBox {
  font-size: initial;
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
  height: inherit;
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
    .popover-title {
      font-size: 16px;
      line-height: 24px;
      margin: 0;
    }
    p{
      line-height: 28px;
      margin:0;
      padding:0;
    }
  }
}
</style>
