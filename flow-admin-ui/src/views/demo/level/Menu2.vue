<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <div class="p-4">
      <a-button type="primary" @click="handleSelectPersonal"> 人员选择 </a-button>
      <a-button type="primary" @click="handleSelectOrgMultiSelect"> 组织选择-多选 </a-button>
      <a-button type="primary" @click="handleSelectOrg"> 组织选择-单选 </a-button>

    </div>
  </PageWrapper>

  <PersonalSelector @register="registerPersonalModal" @success="handleSettingPersonalSuccess" />
  <OrgSelector @register="registerOrgModal" @success="handleSettingOrgSuccess" />
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';

  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';

  import { Input, Tag, Space, Affix} from 'ant-design-vue';
  import PersonalSelector from '/@/views/components/selector/personalSelector/index.vue';
  import OrgSelector from '/@/views/components/selector/orgSelector/index.vue';

  export default defineComponent({
    name: 'Menu2Demo',
    components: { Input, PageWrapper, PersonalSelector, OrgSelector },
    setup() {
      // 人员选择弹窗
      const [registerPersonalModal, { openModal: openPersonalSelector, setModalProps: setPersonalModalProps }] = useModal();

      const [registerOrgModal, { openModal: openOrgSelector, setModalProps: setOrgModalProps }] = useModal();

      const selectedPersonList = ref<[]>([]);

      function handleSelect() {

      }
      // 人员选择后回调
      function handleSettingPersonalSuccess(selectedPersonal) {
        console.log(JSON.stringify(selectedPersonal));

      }
      // 组织选择后回调
      function handleSettingOrgSuccess(selectedList) {
        console.log(JSON.stringify(selectedList));

      }
      // 组织选择弹窗
      function handleSelectOrgMultiSelect(record: Recordable) {
        // currentRole.value = record;

        // 加载已选择的数据
        openOrgSelector(true, {
          selectorProps:{
            multiSelect: true,
            selectedList: [{id:'12ae3090e3e15810a9d7ebc0d291ad7e', name: '研发部'}],
          }
        });

        setOrgModalProps({
          title: `选择组织`,
          bodyStyle: {padding: '0px', margin: '0px'},
          width: 850, height: 450,
          showOkBtn: true, showCancelBtn: false
        });
      }
      // 组织选择弹窗
      function handleSelectOrg(record: Recordable) {
        // currentRole.value = record;

        // 加载已选择的数据
        openOrgSelector(true, {
          selectorProps:{
            multiSelect: false,
            selectedList: [{id:'12ae3090e3e15810a9d7ebc0d291ad7e', name: '研发部'}],
          }
        });

        setOrgModalProps({
          title: `选择组织`,
          bodyStyle: {padding: '0px', margin: '0px'},
          width: 850, height: 450,
          showOkBtn: true, showCancelBtn: false
        });
      }
      // 人员选择弹窗
      function handleSelectPersonal(record: Recordable) {
        // 加载已选择的数据
        openPersonalSelector(true, {
          selectorProps:{
            multiSelect: true,
            selectedList: [],
          }
        });

        setPersonalModalProps({
          title: `设置角色【${record.name}】下的人员`,
          bodyStyle: {padding: '0px', margin: '0px'},
          width: 850, height: 450,
          showOkBtn: true, showCancelBtn: false
        });
      }

      return {
        registerPersonalModal,
        registerOrgModal,
        handleSelectPersonal,
        handleSelectOrgMultiSelect,
        handleSelectOrg,
        handleSettingPersonalSuccess,
        handleSettingOrgSuccess,
        handleSelect
      };
    }
  });
</script>
