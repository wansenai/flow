<template>
  <div class="bg-white mr-0 overflow-hidden">
    <BasicTree
      title="数据分类"
      toolbar
      search
      treeWrapperClassName="h-[calc(100%-35px)] overflow-auto"
      :clickRowToExpand="false"
      :treeData="treeData"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';

  import { BasicTree, TreeItem } from '/@/components/Tree';
  import { getDicTypes } from '/@/api/base/dicType';

  export default defineComponent({
    name: 'DictTypeTree',
    components: { BasicTree },

    emits: ['select'],
    setup(_, { emit }) {
      const treeData = ref<TreeItem[]>([]);

      async function fetch() {
        treeData.value = ((await getDicTypes()) as unknown) as TreeItem[];
      }

      function handleSelect(keys: string, e) {
        emit('select', keys[0]);
        // console.log(keys, e);
      }

      onMounted(() => {
        fetch();
      });
      return { treeData, handleSelect };
    },
  });
</script>
