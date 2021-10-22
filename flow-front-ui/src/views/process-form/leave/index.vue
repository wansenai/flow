<template>
  <CollapseContainer :canExpan="false" v-loading="formLoading">
    <template #title>
      <div class="font-bold">基本信息</div>
    </template>
    <BasicForm @register="registerForm" />

  </CollapseContainer>
</template>
<script lang="ts">
  import { defineComponent, unref, ref, reactive } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Divider, Card, Empty, Descriptions} from 'ant-design-vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import {formSchema} from "./leave.data";
  import { useUserStore } from '/@/store/modules/user';
  import { useRouter } from 'vue-router';

  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';
  import {addLeave, getLeaveById} from "/@/api/process-form/leave";

  export default defineComponent({
    components: {
      ProcessHeader,
      PageWrapper,
      [Divider.name]: Divider,
      [Card.name]: Card,
      AEmpty: Empty,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
      BasicForm, CollapseContainer
    },
    setup() {
      const check = ref(null);
      const formLoading = ref(false);
      const { createMessage } = useMessage();
      const { currentRoute } = useRouter();
      const {path, params: { modelKey } } = unref(currentRoute);

      const [registerForm, {setProps, resetFields, updateSchema, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        schemas: formSchema,
        showActionButtonGroup: false,
        actionColOptions: { span: 24 }
      });

      function initProcessForm(businessKey){
        if(businessKey){
          getLeaveById(businessKey).then(res=>{
            setFieldsValue(res);
          });
        }
        // 如果不是发起页面则设置表单为只读
        if(path.indexOf('/process/launch') === -1){
          setProps({
            disabled: true,
          });
        }
      }

      async function doSubmit() {
        const values = await validate();
        const userStore = useUserStore();
        const {getUserInfo} = userStore;
        values.applyerCode = getUserInfo.code;
        try{
          formLoading.value = true;
          await addLeave(values)
        }finally {
          formLoading.value = false;
        }
      }

      return {
        registerForm,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        check,
        doSubmit,
        initProcessForm,
      };
    },
  });
</script>
