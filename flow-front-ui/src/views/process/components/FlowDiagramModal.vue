<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <div class="containers" ref="container">

    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted, computed, unref, nextTick } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { useRouter } from 'vue-router';
  // import BpmnViewer from 'bpmn-js'
  import BpmnViewer from 'bpmn-js/lib/Viewer'
  import {loadBpmnXmlByModelKey} from "/@/api/process/process";

  export default defineComponent({
    name: 'FlowDiagramModal',
    components: { BasicModal },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const { currentRoute } = useRouter();
      const { params: { modelKey } } = unref(currentRoute);
      const bpmnCanvas = ref<ElRef>();
      const container  = ref<ElRef>();
      const bpmnViewer  = ref();

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        debugger;
        if(modelKey){
          nextTick(()=>{
            loadBpmnXmlByModelKey({modelKey}).then(res=>{
              bpmnViewer.value = new BpmnViewer({
                container: bpmnCanvas.value,
              });

              bpmnViewer.value.importXML(res.modelXml, function (err) {
                debugger;
                console.error(err);
              });

              // const canvasTemp = bpmnViewer.value.get("canvas");
              //
              // canvasTemp.zoom("fit-viewport", "auto");

              debugger;

            });
          });


        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '修改'));


      return {
        container,
        bpmnCanvas,
        registerModal,
        getTitle
      };
    },
  });
</script>
