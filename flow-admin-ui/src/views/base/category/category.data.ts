import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: '编码',
    dataIndex: 'code',
    width: 100,
    align: 'left',
  },
  {
    title: '简称',
    dataIndex: 'shortName',
    width: 100,
    align: 'left',
  },
  {
    title: '所属公司',
    dataIndex: 'cName',
    width: 100,
    align: 'left',
  },
  {
    title: '前台显示',
    dataIndex: 'frontShow',
    width: 80,
    customRender: ({ record }) => {
      const status = record.frontShow;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '显示' : '隐藏';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '排序',
    dataIndex: 'orderNo',
    width: 80,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '描述',
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
      placeholder: '请输入名称/编码',
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
    field: 'pid',
    label: 'pid',
    required: false,
    component: 'Input',
    show: false,
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
        max: 200,
        message: '字符长度不能大于200！',
      },
    ],
    colProps: { span: 24 },
  },
  {
    field: 'code',
    label: '编码',
    required: true,
    component: 'Input',
    colProps: { span: 24 },
  },
  {
    field: 'shortName',
    label: '简称',
    required: false,
    component: 'Input',
    rules: [
      {
        whitespace: true,
        message: '编码不能为空！',
      },
      {
        max: 200,
        message: '字符长度不能大于200！',
      },
    ],
    colProps: { span: 24 },
  },
  {
    field: 'companyId',
    label: '所属公司',
    component: 'TreeSelect',
    componentProps: {
      treeNodeFilterProp: 'cname',
      getPopupContainer: () => document.body,
    },
    required: true,
    colProps: { span: 24 },
  },
  {
    field: 'orderNo',
    label: '排序号',
    required: false,
    component: 'InputNumber',
  },
  {
    field: 'frontShow',
    label: '状态',
    required: false,
    component: 'Switch',
    defaultValue: true,
    componentProps:{
      checkedChildren: '显示',
      unCheckedChildren: '隐藏'
    },
    colProps: { span: 24 },
  },
  {
    field: 'note',
    label: '描述',
    required: false,
    component: 'InputTextArea',
    rules: [
      {
        max: 400,
        message: '字符长度不能大于400！',
      },
    ],
    colProps: { span: 24 },
  },
];
