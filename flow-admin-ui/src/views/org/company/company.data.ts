import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
export const columns: BasicColumn[] = [
  {
    title: '全称',
    dataIndex: 'cname',
    align: 'left',
  },
  {
    title: '编码',
    dataIndex: 'code',
    align: 'left',
    width: 100,
  },

  {
    title: '简称',
    dataIndex: 'shortName',
    align: 'left',
    width: 180,
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
    align: 'left',
    width: 80,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '描述',
    dataIndex: 'descr',
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
  },
  {
    field: 'cname',
    label: '全称',
    required: true,
    component: 'Input',
    rules: [
      {
        required: true,
        whitespace: true,
        message: '全称不能为空！',
      },
      {
        max: 64,
        message: '字符长度不能大于64！',
      },
    ],
    colProps: { span: 24 },
  },
  {
    field: 'shortName',
    label: '简称',
    required: false,
    component: 'Input',
    rules: [
      {
        required: true,
        whitespace: true,
        message: '简称不能为空！',
      },
      {
        max: 64,
        message: '字符长度不能大于64！',
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
    field: 'orderNo',
    label: '排序号',
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
    field: 'descr',
    label: '描述',
    required: false,
    component: 'InputTextArea',
    rules: [
      {
        max: 200,
        message: '字符长度不能大于64！',
      },
    ],
    colProps: { span: 24 },
  },
];
