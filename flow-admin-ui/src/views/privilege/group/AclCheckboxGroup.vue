<template>
  <div >
    <Spin :spinning="spinning">
      <Checkbox
        v-if="checkboxList&&checkboxList.length>0"
        :indeterminate="indeterminate"
        :checked="checkAll"
        @change="onCheckAllChange">
        全选
      </Checkbox>
      <CheckboxGroup
        v-model:value="checkedList"
        :options="checkboxList"
        @change="onChange"
      />
    </Spin>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { propTypes } from '/@/utils/propTypes';
  import { Checkbox, Spin } from 'ant-design-vue';
  import {setAclByModule, setAclModuleList} from "/@/api/privilege/acl";

  export default defineComponent({
    name: 'AclCheckboxGroup',
    components: { Checkbox, CheckboxGroup: Checkbox.Group, Spin },
    props: {
      checkboxList: propTypes.arrayOf(propTypes.object).def([]),
      groupId: propTypes.string.def(''),
      moduleSn: propTypes.string.def(''),
      moduleId: propTypes.string.def(''),
    },
    setup(props, {emit}) {
      // 过滤所有选中项
      const defaultCheckeds = props.checkboxList.filter(item=>item.checked);
      const indeterminate = ref<boolean>(false);
      const checkAll = ref<boolean>(defaultCheckeds.length>0&&props.checkboxList.length===defaultCheckeds.length);

      if(defaultCheckeds.length !== 0&&props.checkboxList.length !== defaultCheckeds.length){
        indeterminate.value = true;
      }

      const spinning = ref<boolean>(false);

      const checkedList = ref<any[]>(defaultCheckeds.map(item=>item.value));

      async function onChange (checkedListKeys){
        spinning.value = true;
        indeterminate.value = !!checkedListKeys.length && checkedListKeys.length < props.checkboxList.length;
        checkAll.value = checkedListKeys.length === props.checkboxList.length;
        const params = {
          moduleId: props.moduleId,
          groupId: props.groupId,
          aclList: checkedListKeys
        };
        try{
          await setAclModuleList(params);
          emit('changeCheckAllStatus');
        }finally {
          spinning.value = false;
        }
      }

      async function onCheckAllChange(e){
        checkedList.value = e.target.checked ? props.checkboxList.map(item=>item.value) : [];
        indeterminate.value = false;
        checkAll.value = e.target.checked;

        spinning.value = true;

        // 批量保存数据
        await setAclByModule({
          checked: e.target.checked?1:0,
          aclInfo:{
            releaseId: props.groupId,
            moduleId: props.moduleId,
          }
        })
        emit('changeCheckAllStatus');
        spinning.value = false;
      }

      return {
        spinning,
        indeterminate,
        checkAll,
        checkedList,
        onChange,
        onCheckAllChange
      };
    },
  });
</script>
