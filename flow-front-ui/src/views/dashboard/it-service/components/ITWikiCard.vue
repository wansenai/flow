<template>
  <Card title="IT知识库" v-bind="$attrs" body-style="padding-top:16px" >
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>
    <InputSearch
      v-model:value="wikiInput"
      placeholder="请输入关键字"
      style="width: 100%"
      @search="onSearch"
    />
    <List :split="false" item-layout="horizontal" :data-source="items">
      <template #renderItem="{ item }">
        <ListItem class="custom-list-item">
          <div class="content">
            <a href="/" :title="item.title">
              {{ item.title }}
            </a>
          </div>
        </ListItem>
      </template>
    </List>
  </Card>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { Card, List, Input } from 'ant-design-vue';
  import Icon from '/@/components/Icon/Icon.vue';

  const items = [
    {
      id:'1',
      title: '邮件服务器宕机',
      url: '#',
    },
    {
      id:'2',
      title: '登陆错误——登陆一直显示登录中状态',
      url: '#',
    },
    {
      id:'3',
      title: '视频会议-服务连接失败-检查软件设置是否正确、外网连接是否正常',
      url: '#',
    }
  ];

  export default defineComponent({
    components: { Card, List, ListItem: List.Item, ListItemMeta: List.Item.Meta, Icon, Input, InputSearch: Input.Search },
    setup(props) {
      const wikiInput = ref('');
      function onSearch(){

      }

      return { items, wikiInput, onSearch };
    },
  });
</script>
<style lang="less">
  .custom-list-item{
    .content{
      overflow: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .ant-list-item-action{
      margin-left:4px;
    }
    .ant-list-item-meta-title{
      a{
        overflow:hidden; /*溢出的部分隐藏*/
        white-space: nowrap; /*文本不换行*/
        text-overflow:ellipsis;
        width: 100%;
      }
    }
  }
</style>
