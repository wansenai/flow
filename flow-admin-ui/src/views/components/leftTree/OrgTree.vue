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
      ref="basicTreeRef"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref, unref, nextTick } from 'vue';
  import {Spin} from "ant-design-vue";
  import { BasicTree, TreeActionType, TreeItem } from '/@/components/Tree';
  import { getOrgTree } from '/@/api/org/dept';
  import {findNode} from "/@/utils/helper/treeHelper";

  export default defineComponent({
    name: 'OrgTree',
    components: { BasicTree, Spin },

    emits: ['select'],
    setup(_, { emit }) {
      const treeData = ref<TreeItem[]>([]);
      const treeLoading = ref<boolean>(false);
      const basicTreeRef = ref<Nullable<TreeActionType>>(null);

      async function fetch() {
        treeLoading.value = true;
        getOrgTree().then(res => {
          treeData.value = (res as unknown) as TreeItem[];
          nextTick(() => {
            // 加载后展开节层级
            if(unref(treeData).length < 10){
              unref(basicTreeRef)?.filterByLevel(1);
            }
          });
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
      return { treeData, treeLoading, basicTreeRef, handleSelect };
    },
  });
</script>
