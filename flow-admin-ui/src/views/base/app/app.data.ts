import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import Icon from "/@/components/Icon/Icon.vue";
export const columns: BasicColumn[] = [
  {
    title: '图标',
    dataIndex: 'image',
    width: 60,
    customRender: ({ record }) => {
      return h(Icon, { icon: record.image });
    },
  },
  {
    title: '名称',
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: '标识',
    dataIndex: 'sn',
    width: 180,
    align: 'left',
  },
  {
    title: 'URL',
    dataIndex: 'url',
    align: 'left',
  },
  {
    title: '首页',
    dataIndex: 'indexUrl',
    width: 100,
    align: 'left',
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
    width: 80,
    align: 'right',
  },
  {
    title: '备注',
    dataIndex: 'note',
    align: 'left',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'keyword',
    label: '关键字',
    component: 'Input',
    componentProps: {
      placeholder: '请输入名称/标识',
    },
    labelWidth: 60,
    colProps: {span: 6, lg:{span: 6, offset:0}, sm:{span: 10, offset: 0}, xs:{span: 16, offset: 0}},
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'name',
    label: '名称',
    required: true,
    component: 'Input',
    rules: [
      {
        required: true,
        whitespace: true,
        message: '名称不能为空！',
      },
      {
        max: 32,
        message: '字符长度不能大于32！',
      },
    ],
    colProps: { span: 24 },
  },
  {
    field: 'sn',
    label: '标识',
    required: true,
    component: 'Input',
    colProps: { span: 24 },
  },
  {
    field: 'url',
    label: '系统URL',
    required: true,
    component: 'Input',
    rules: [
      {
        required: true,
        whitespace: true,
        message: '系统URL不能为空！',
      },
      {
        pattern: new RegExp('[a-zA-z]+://[^\\s]*'),
        type: 'string',
        message: '请输入正确的URL地址！',
      },
      {
        max: 40,
        message: '字符长度不能大于40！',
      },
    ],
    colProps: { span: 24 },
  },
  {
    field: 'indexUrl',
    label: '首页URL',
    required: true,
    component: 'Input',
    rules: [
      {
        required: true,
        whitespace: true,
        message: '首页URL不能为空！',
      },
      {
        pattern: new RegExp('^\\/(\\w+\\/?)+(\\.?\\w+)?$'),
        type: 'string',
        message: '请输入正确的URL地址！！',
      },
      {
        max: 128,
        message: '字符长度不能大于128！',
      },
    ],
    colProps: { span: 24 },
  },
  {
    field: 'image',
    label: '图标',
    required: false,
    component: 'IconPicker',
    colProps: { span: 24 },
  },
  {
    field: 'orderNo',
    label: '排序号',
    helpMessage:'数值越小越靠前！',
    required: false,
    component: 'InputNumber',
  },
  {
    field: 'status',
    label: '状态',
    required: false,
    component: 'Switch',
    defaultValue: true,
    componentProps:{
      checkedChildren: '启用',
      unCheckedChildren: '禁用'
    },
    colProps: { span: 24 },
  },
  {
    label: '备注',
    field: 'note',
    component: 'InputTextArea',
    rules: [
      {
        max: 500,
        message: '字符长度不能大于500！',
      },
    ],
    colProps: { span: 24 },
  },
];

export const secretKeyFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'sn',
    label: '标识',
    component: 'Input',
    slot: 'snSlot',
    colProps: { span: 24 },
  },
  {
    label: '密钥',
    field: 'secretKey',
    component: 'InputTextArea',
    slot: 'secretKeySlot',
    colProps: { span: 24 },
  },
];
