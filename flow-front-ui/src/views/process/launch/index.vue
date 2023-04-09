<template>
  <PageWrapper title="流程中心"  contentClass="flex p-4" contentBackground class="!mt-4">

    <template #footer>
      <process-header current="launch"/>
    </template>

    <BasicTree
      title="流程分类"
      :clickRowToExpand="true"
      :treeData="treeData"
      @select="handleSelect"
      class="w-1/4 xl:w-1/5 mt-2"
      ref="categoryTree"
    />

    <!--    <BasicTable class="w-3/4 xl:w-4/5" @register="registerTimeTable" />-->
    <div class="w-3/4 xl:w-4/5 !mt-4" :class="`${prefixCls}__content`">
      <BasicForm
        :class="`${prefixCls}__header-form`"
        :labelWidth="100"
        :schemas="searchFormSchema"
        :showActionButtonGroup="false"
      />

      <a-list :pagination="pagination">
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
<!--              <template #description>
                <div class="description">
                  {{ item.description }}
                </div>
              </template>-->
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </div>

  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted, nextTick } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { BasicForm } from '/@/components/Form/index';

  import { BasicTree, TreeItem } from '/@/components/Tree';

  import { PageWrapper } from '/@/components/Page';
  import { Divider, Card, Empty, Descriptions, Steps, Tabs, List, Row, Col, Progress } from 'ant-design-vue';

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
      [Divider.name]: Divider,
      [Card.name]: Card,
      AEmpty: Empty,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
      [Steps.name]: Steps,
      [Steps.Step.name]: Steps.Step,
      [Tabs.name]: Tabs,
      [Tabs.TabPane.name]: Tabs.TabPane,
    },
    setup() {
      const treeData = ref([]);
      const modelInfoList = ref([]);
      const categoryTree = ref();

      fetch();

      async function fetch() {
        // treeLoading.value = true;
        getCategories().then(res => {
          debugger;
          treeData.value = (res as unknown) as TreeItem[];
        }).finally(()=>{
          // treeLoading.value = false;
        });
      }

      function handleSelect(nodes) {
        const code = nodes[0];
        getModelInfoVoByPagerModel({categoryCode: code}).then(res=>{
          debugger;
          modelInfoList.value = res.rows;
        });
      }

      return {
        treeData,
        searchFormSchema,
        prefixCls: 'list-basic',
        list: cardList,
        modelInfoList,
        categoryTree,
        handleSelect,
        pagination: {
          show: true,
          pageSize: 3,
        },
      };
    },
  });
</script>


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
