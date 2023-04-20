<template>
  <div class="desc-wrap process flex w-full">
    <BasicTree
      title="流程分类"
      :treeData="treeData"
      treeWrapperClassName="h-[calc(100%-35px)] overflow-auto"
      @select="handleSelect"
      class="w-1/4 xl:w-1/5"
      ref="categoryTreeRef"
    />

    <div class="w-3/4 xl:w-4/5" style="margin-top:0; padding-top: 10px;" :class="`${prefixCls}__content`">
      <BasicForm
        :class="`${prefixCls}__header-form`"
        :labelWidth="100"
        :schemas="searchFormSchema"
        :showActionButtonGroup="false"
      />

      <a-list :pagination="pagination" :loading="modelListLoading">
        <template v-for="item in modelInfoList" :key="item.id">
          <a-list-item class="list">
            <a-list-item-meta>
              <template #title>
                <router-link :to="`/process/launch/${item.modelKey}`">
                  <span>{{ item.name }}</span>
                  <div class="extra" v-if="item.categoryName">
                    {{ item.categoryName }}
                  </div>
                </router-link>
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </div>

  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, onMounted, nextTick } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { BasicForm } from '/@/components/Form/index';

  import { BasicTree, TreeItem } from '/@/components/Tree';

  import { PageWrapper } from '/@/components/Page';
  import { List, Row, Col, Progress } from 'ant-design-vue';

  import { searchFormSchema, cardList } from './data';
  import ProcessHeader from '/@/views/process/components/ProcessHeader.vue';
  import {getCategories, getModelInfoVoByPagerModel} from "/@/api/process/process";

  export default defineComponent({
    components: {
      Progress,
      PageWrapper,
      BasicForm,
      [List.name]: List,
      [List.Item.name]: List.Item,
      AListItemMeta: List.Item.Meta,
      [Row.name]: Row,
      [Col.name]: Col,
      BasicTree,
      BasicTable,
      ProcessHeader,
    },
    setup() {
      const treeData = ref([]);
      const modelInfoList = ref([]);
      const categoryTreeRef = ref(null);
      const modelListLoading = ref(false);

      onMounted(()=>{
        fetch();
      })

      async function fetch() {
        getCategories().then(res => {
          treeData.value = (res as unknown) as TreeItem[];
          nextTick(()=>{
            unref(categoryTreeRef)?.filterByLevel(1);
          })
        });
      }

      function handleSelect(nodes) {
        modelListLoading.value = true;
        modelInfoList.value = [];
        const code = nodes[0];
        getModelInfoVoByPagerModel({categoryCode: code}).then(res=>{
          modelInfoList.value = res.rows;
          modelListLoading.value = false;
        });
      }

      return {
        treeData,
        searchFormSchema,
        prefixCls: 'list-basic',
        modelListLoading,
        list: cardList,
        modelInfoList,
        categoryTreeRef,
        handleSelect,
        pagination: {
          change: (page, pageSize)=>{
            console.log(page, pageSize);
          },
          show: true,
          pageSize: 15,
        },
      };
    },
  });
</script>
<style lang="less">
.process-list-container{
  .vben-basic-table-form-container{
    padding: 0!important;
  }
}
</style>

<style lang="less" scoped>
  .list-basic {
    &__top {
      padding: 24px;
      text-align: center;
      background-color: @component-background;

      &-col {
        &:not(:last-child) {
          border-right: 1px dashed @border-color-base;
        }

        div {
          margin-bottom: 12px;
          font-size: 14px;
          line-height: 22px;
          color: @text-color;
        }

        p {
          margin: 0;
          font-size: 24px;
          line-height: 32px;
          color: @text-color;
        }
      }
    }

    &__content {
      padding: 0 0 0 24px;
      margin-top: 12px;
      background-color: @component-background;

      .list {
        position: relative;
      }

      .icon {
        font-size: 40px !important;
      }

      .extra {
        position: absolute;
        top: 20px;
        right: 15px;
        font-weight: normal;
        color: @primary-color;
        cursor: pointer;
      }

      .description {
        display: inline-block;
        width: 40%;
      }

      .info {
        display: inline-block;
        width: 30%;
        text-align: center;

        div {
          display: inline-block;
          padding: 0 20px;

          span {
            display: block;
          }
        }
      }

      .progress {
        display: inline-block;
        width: 15%;
        vertical-align: top;
      }
    }
  }
</style>
