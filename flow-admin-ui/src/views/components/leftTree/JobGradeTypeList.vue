<template>
  <div class="bg-white m-4 mr-0 overflow-hidden" v-loading="treeLoading">
    <BasicTree
      title="职级分类"
      toolbar
      search
      :clickRowToExpand="false"
      :treeData="treeData"
      :replaceFields="{ key: 'id', title: 'name' }"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import {Spin} from "ant-design-vue";
  import { BasicTree, TreeItem } from '/@/components/Tree';
  import {findNode} from "/@/utils/helper/treeHelper";
  import {getJobGradeTypesToTree} from "/@/api/org/jobGradeType";

  export default defineComponent({
    name: 'JobGradeTypeList',
    components: { BasicTree, Spin },

    emits: ['select'],
    setup(_, { emit }) {
      const treeData = ref<TreeItem[]>([]);
      const treeLoading = ref<boolean>(false);

      async function fetch() {
        treeLoading.value = true;
        getJobGradeTypesToTree().then(res => {
          treeData.value = (res as unknown) as TreeItem[];
        }).finally(()=>{
          treeLoading.value = false;
        });
      }

      function handleSelect(keys: string, e) {
        const node = findNode(treeData.value, (item)=>item.id===keys[0], {id: 'id', pid:'pid', children:'children'})
        emit('select', node);
      }

      onMounted(() => {
        fetch();
      });
      return { treeData, treeLoading, handleSelect };
    },
  });
</script>
