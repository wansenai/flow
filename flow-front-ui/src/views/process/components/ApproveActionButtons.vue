<template>
  <Affix :offset-bottom="bottom">
    <div class="approve-options">
      <TextArea
        v-model:value="approveMsg"
        placeholder="请输入审批意见！"
        :auto-size="{ minRows: 2, maxRows: 3 }"
      />
      <Space class="mt-2" >
        <Button title="审批" type="primary" @click="doApprove" :loading="approveBtnLoading" >
          同意
        </Button>

        <Button title="拒绝" type="danger" @click="doStop" :loading="approveBtnLoading">
          拒绝
        </Button>
      </Space>
    </div>
  </Affix>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { ApartmentOutlined } from '@ant-design/icons-vue';
  import { Space, Input, Affix, Button } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import { complete, stopProcess } from "/@/api/process/process";
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useGo } from '/@/hooks/web/usePage';
  import { useRouter } from 'vue-router';
  const { TextArea } = Input;

  export default defineComponent({
    name: 'BaseActionButtons',
    components: {
      Button,
      ApartmentOutlined,
      Space,
      Affix,
      TextArea
    },
    setup(_, {emit}) {
      const [registerFlowDiagramModal, { openModal, setModalProps }] = useModal();
      const bottom = ref<number>(0);
      const { createMessage } = useMessage();
      const approveMsg = ref<string>("");
      const approveBtnLoading = ref<boolean>(false);
      const go = useGo();
      const { currentRoute } = useRouter();
      const { query : {taskId, procInstId} } = unref(currentRoute);

      function doApprove(){
        approveBtnLoading.value = true;
        complete({ taskId: taskId, processInstanceId: procInstId, message: approveMsg.value}).then(res=>{
          createMessage.success("审批成功！")

          go("/process/todo");
        }).catch(()=>{

        }).finally(()=>{
          approveBtnLoading.value = false;
        });
      }
      function doStop(){
        approveBtnLoading.value = true;
        stopProcess({ taskId: taskId, processInstanceId: procInstId, message: approveMsg.value}).then(res=>{
          createMessage.success("操作成功！")

          go("/process/todo");
        }).catch(()=>{

        }).finally(()=>{
          approveBtnLoading.value = false;
        });
      }

      return {
        bottom,
        approveMsg,
        registerFlowDiagramModal,
        approveBtnLoading,
        doApprove,
        doStop,
      };
    },
  });
</script>
<style lang="less">
  .approve-options{
    background: #fff;
    border-top: 4px solid @primary-color;
    padding: 10px;
  }
</style>
