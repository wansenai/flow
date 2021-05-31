<template>
  <div class="org-tree bg-white m-4 mr-0 overflow-hidden" v-loading="treeLoading">
    <BasicTree
      title="组织"
      toolbar
      search
      :clickRowToExpand="false"
      :treeData="treeData"
      :replaceFields="{ key: 'id', title: 'shortName' }"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import {Spin} from "ant-design-vue";
  import { BasicTree, TreeItem } from '/@/components/Tree';
  import { getOrgTree } from '/@/api/org/dept';
  import {findNode} from "/@/utils/helper/treeHelper";

  export default defineComponent({
    name: 'OrgTree',
    components: { BasicTree, Spin },

    emits: ['select'],
    setup(_, { emit }) {
      const treeData = ref<TreeItem[]>([]);
      const treeLoading = ref<boolean>(false);

      async function fetch() {
        treeLoading.value = true;
        getOrgTree().then(res => {
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
