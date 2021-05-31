<template>
  <Button title="查看流程图" type="link" @click="showFlowDiagram">
    <template #icon>
      <ApartmentOutlined />
    </template>
  </Button>
<!--  <FlowDiagramModal @register="registerFlowDiagramModal" />-->
  <BpmnPreviewModal @register="registerBpmnPreviewModal" />

</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { ApartmentOutlined } from '@ant-design/icons-vue';
  import { Button } from 'ant-design-vue';
  import { useRouter } from 'vue-router';

  // import FlowDiagramModal from './FlowDiagramModal.vue';
  import { useModal } from '/@/components/Modal';
  import BpmnPreviewModal from '/@/views/components/preview/bpmnPreview/index.vue';

  export default defineComponent({
    name: 'BaseActionButtons',
    components: {
      Button,
      ApartmentOutlined,
      // FlowDiagramModal,
      BpmnPreviewModal,
    },
    setup(_, {emit}) {
      const { currentRoute } = useRouter();

      const { params: {modelKey}, query : {taskId, procInstId} } = unref(currentRoute);

      // const [registerFlowDiagramModal, { openModal, setModalProps }] = useModal();
      const [registerBpmnPreviewModal, { openModal: openBpmnPreviewModal, setModalProps: setBpmnPreviewProps }] = useModal();

      function showFlowDiagram(){
        openBpmnPreviewModal(true, {
          modelKey: modelKey,
          procInstId: procInstId||'',
          isUpdate: true,
        });
        setBpmnPreviewProps({
          //title: `预览-`,
          bodyStyle: {padding: '0px', margin: '0px'},
          width: 900, height: 400,
          showOkBtn: false, showCancelBtn: true,
          cancelText: '关闭'
        });
      }

      function handleCloseFunc() {
        return Promise.resolve(true);
      }

      return {
        // registerFlowDiagramModal,
        registerBpmnPreviewModal,
        handleCloseFunc,
        showFlowDiagram,
      };
    },
  });
</script>
