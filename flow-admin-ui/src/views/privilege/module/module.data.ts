import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import {h} from 'vue';
import {Tag} from 'ant-design-vue';
import Icon from "/@/components/Icon/Icon.vue";

export const columns: BasicColumn[] = [
  {
    title: '菜单名称',
    dataIndex: 'name',
    align: 'left',
    width: 200,
    customRender: ({ record }) => {
      return h('span', {}, [
        h(Icon, {icon: record.image}),
        h('span', record.name)
      ])
      // return h(Icon, { icon: record.image });
    },
  },
  {
    title: 'URL',
    dataIndex: 'url',
    align: 'left',
    width: 180,
  },
  {
    title: '标识',
    dataIndex: 'sn',
    align: 'left',
    width: 120,
  },
  {
    title: '组件',
    dataIndex: 'component',
    align: 'left',
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 60,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '菜单类型',
    dataIndex: 'showStatus',
    width: 100,
    customRender: ({ record }) => {
      const status = record.showStatus;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'gray';
      const text = enable ? '显示' : '隐藏';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '权限值',
    dataIndex: 'pvs',
    align: 'left',
    customRender: ({ record }) => {
      const pvs = record.pvs;
      const color = 'processing';
      const result = pvs.map(item=>{
        return h(Tag, { color: color, style: {marginRight:'5px'} }, () => item.name);
      });
      return result;
    },
  },

  {
    title: '排序',
    dataIndex: 'orderNo',
    width: 60,
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
    required: false,
    component: 'Input',
    show: false,
  },
  {
    field: 'pid',
    label: 'pid',
    required: false,
    component: 'Input',
    show: false,
  },
  {
    field: 'image',
    label: '图标',
    component: 'IconPicker',
    componentProps:{
      // mode: 'svg'
    },
    colProps: { span: 24 },
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
    label: 'URL',
    component: 'Input',
    rules: [
      {
        required: true,
        whitespace: true,
        message: 'URL不能为空！',
      },
      {
        pattern: new RegExp('^\\/?(\\w+\\/?)+(\\.?\\w+)?$'),
        type: 'string',
        message: '请输入正确的URL地址！',
      },
      {
        max: 128,
        message: '字符长度不能大于128！',
      },
    ],
    colProps: { span: 24 },
  },
  {
    field: 'component',
    label: '组件地址',
    component: 'Input',
    rules: [
      {
        required: true,
        whitespace: true,
        message: '组件目录地址不能为空！',
      },
      {
        pattern: new RegExp('^\\/?(\\w+\\/?)+(\\.?\\w+)?$'),
        type: 'string',
        message: '请输入正确的目录地址！',
      },
      {
        max: 128,
        message: '字符长度不能大于128！',
      },
    ],
    colProps: { span: 24 },
  },
  {
    field: 'orderNo',
    label: '排序号',
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
    field: 'showStatus',
    label: '是否显示',
    required: false,
    component: 'Switch',
    defaultValue: true,
    componentProps:{
      checkedChildren: '显示',
      unCheckedChildren: '隐藏'
    },
    colProps: { span: 24 },
  },
];

export const pValueFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    required: false,
    component: 'Input',
    show: false,
  },
  {
    field: 'pvs',
    label: ' ',
    required: false,
    component: 'CheckboxGroup',
    labelWidth: 10,
    componentProps:{
    }
  },
];
