<template>
  <Card title="联系我们" v-bind="$attrs" body-style="padding-top:16px" >
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>
    <div>
      <p>
        桌面运维：<br/>
        张三，0000-88888888<br/>
        李四，0000-55555555<br/>
      </p>
      <p>
        流程运维：<br/>
        王五，0000-99999999<br/>
        赵六，0000-66666666<br/>
      </p>
      <p>
        流程运维：<br/>
        田七，0000-99999999<br/>
        刘八，0000-66666666<br/>
      </p>

      <a-button type="primary" block>问题反馈</a-button>
      <a-button block class="mt-2">我的问题</a-button>
    </div>
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
