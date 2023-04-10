<template>
  <div class="">
    <div v-if="showBaseFormInfo" class="bg-white" style="padding: 0px 25px 0px;margin-top: 0;">
      <Descriptions title="" size="small">
        <DescriptionsItem label="提交人">
<!--          <EmpInfo :no="baseFormInfo.personalNo" :name="baseFormInfo.personalName" >-->
            {{baseFormInfo.personalName||'-'}}
<!--          </EmpInfo>-->
        </DescriptionsItem>
        <DescriptionsItem label="移动电话">{{baseFormInfo.phoneNumber||'-'}}</DescriptionsItem>
        <DescriptionsItem label="职务">{{baseFormInfo.positionName||'-'}}</DescriptionsItem>
        <DescriptionsItem label="提交单位">{{baseFormInfo.companyName||'-'}}</DescriptionsItem>
        <DescriptionsItem label="提交部门">{{baseFormInfo.deptName||'-'}}</DescriptionsItem>
        <DescriptionsItem label="提交时间">{{baseFormInfo.launchTime||'-'}}</DescriptionsItem>
      </Descriptions>
    </div>

    <CollapseContainer :canExpan="true" class="mt-2" >
      <template #title>
        <div class="font-bold">表单内容</div>
      </template>
      <div style="min-height: 300px;" class="p-4">
        <FramePage ref="formRenderFrameRef" :frameSrc="formUrl" />
      </div>
    </CollapseContainer>
  </div>
</template>
<script lang="ts">
  import {defineComponent, ref, onMounted, nextTick, watch, unref} from 'vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { Descriptions, DescriptionsItem, Tag, Row, Col, Typography, Divider, Skeleton } from 'ant-design-vue';
  import { useRouter } from 'vue-router';
  import FramePage from "/@/views/components/iframe/index.vue";

  import { useMessage } from '/@/hooks/web/useMessage';
  import {CollapseContainer} from "/@/components/Container";

  export default defineComponent({
    name: 'FormContainer',
    components: {
      Descriptions,
      DescriptionsItem,
      Tag, Row, Col,
      CollapseContainer,
      FramePage, Divider,
      TypographyTitle: Typography.Title,
      Skeleton
    },
    props: {
      formType: {
        type: Number,
        default: -1
      }
    },
    setup(props) {
      const go = useGo();
      function toLaunch() {
        go("/process/launch");
      }
      const baseFormInfo = ref({});
      const showBaseFormInfo = ref(false);
      const framePageRef = ref<HTMLElement | null>(null);

      const formUrl = ref<string>("");
      const { currentRoute } = useRouter();
      const { createMessage } = useMessage();
      const jsonData = ref(null);
      const generateFormRef = ref();
      const { path, params } = unref(currentRoute);

      const modelKey = getUrlValue(params.modelKey);
      const bizId = getUrlValue(params.bizId);
      const procInstId = getUrlValue(params.procInstId);
      const editFormFields = ref([]);
      const formIsEdit = ref(false);
      if(path.indexOf('/process/launch') !== -1 || path.indexOf('/process/approve') !== -1){
        formIsEdit.value = true;
      }

      function getUrlValue(val){
        return val == '0' ? '' : val;
      }

      watch(
        () => props.formType,
        (newValue, oldValue) => {
          if(newValue !== -1){
            fetch();
          } else {
            createMessage.error("未定义的表单类型！");
          }
        })
      onMounted(()=>{
        // 加载数据
        // fetch();
      });

      function fetch(){

      }

      function saveFormData(){
        if(editFormFields.value.length === 0){
          return Promise.resolve({success: true, msg: '没有可编辑的项，不需要保存数据！', code: '100'});
        }
        // 判断表单类型
        if (props.formType === 0) {
          return getFormData(true).then(res=>{
            const formData = {defaultFormDataVo: {code: bizId}, makFormDataVo: res};
            const data = {dataJson: {}, procInstId: '', modelKey: ''};
            // 只保存可编辑的字段
            let tempFormData = {};
            editFormFields.value.forEach(item=>{
              tempFormData[item] = res[item];
            })
            formData.makFormDataVo = tempFormData;
            data.dataJson = JSON.stringify(formData);
            data.procInstId = procInstId;
            data.modelKey = modelKey;

          }).catch(e=>{
            return Promise.reject('表单验证失败' + e);
          });
        } else {
          // 如果是业务表单，则调用业务表单里面的方法-这里需指定方法名
          return getFormData(true).then(res=>{
            const formData = {defaultFormDataVo: {bizId: bizId}, makFormDataVo: {}};
            const data = {dataJson: {}, procInstId: '', modelKey: ''};
            // 只保存可编辑的字段
            let tempFormData = {};
            editFormFields.value.forEach(item=>{
              tempFormData[item] = res[item];
            })
            formData.makFormDataVo = tempFormData;
            data.dataJson = formData;
            data.procInstId = procInstId;
            data.modelKey = modelKey;

            // 判断是否有doSaveForm事件
            const eventExists = validEventExists('doSaveForm');
            if(!eventExists){
              createMessage.error('未找到动作【doSaveForm】');
              return Promise.reject('未找到动作【doSaveForm】。\n提示：\n1、请在表单中添加【doSaveForm】动作；\n2、该动作需要返回【Promise.resolve({success: true, msg: \'保存成功\', code: \'100\'})】对象。')
            }
            const doSaveResult = unref(generateFormRef).triggerEvent('doSaveForm', data);
            if (doSaveResult instanceof Promise){
              return doSaveResult;
            } else {
              return Promise.reject('调用自定义表单中的动作，需要返回【Promise.resolve({success: true, msg: \'提交成功\', code: \'\'})】')
            }
          }).catch(e => {
            return Promise.reject(e);
          });
        }
      }

      function validEventExists(eventName){
        return unref(jsonData).config.eventScript.some(item=>item.name === eventName);
      }

      function getFormData(validate){
        // 1草稿；2已发起流程
        // const validStatus = status == '2';
        return unref(generateFormRef).getData(validate).then(res=> {
          return Promise.resolve(res);
        }).catch(e=>{
          if(typeof e === 'string'){
            formValidateMsg(e);
          }
          return Promise.reject(e);
        });
      }

      // 表单验证错误提示
      function formValidateMsg(msg){
        createMessage.warn(msg);
        const isError = document.querySelector('.fm-form .is-error');
        if(isError){
          isError.scrollIntoView({behavior: "smooth", block: "center",});
        }
      }

      // 'doSubmitForm'
      function triggerEvent(event, data){
        return unref(generateFormRef).triggerEvent(event, data);
      }

      // 保存草稿/提交
      function submitFlowForm(status){

      }

      return {
        toLaunch,
        formUrl,
        framePageRef,
        baseFormInfo,
        showBaseFormInfo,
        submitFlowForm,
        getFormData,
        saveFormData,
        triggerEvent,
        generateFormRef,
        jsonData,
        formIsEdit
      };
    },
  });
</script>
