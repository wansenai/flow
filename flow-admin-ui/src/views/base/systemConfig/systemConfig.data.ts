import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'configName',
    align: 'left',
  },
  {
    title: '标识',
    dataIndex: 'configSn',
    width: 100,
    align: 'left',
  },
  {
    title: '配置Key',
    dataIndex: 'configKey',
    width: 100,
    align: 'left',
  },
  {
    title: '配置Value',
    dataIndex: 'configValue',
    align: 'left',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    align: 'left',
  },
  {
    title: '排序',
    dataIndex: 'configOrder',
    width: 80,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  }
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
    field: 'configName',
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
        max: 30,
        message: '字符长度不能大于30！',
      },
    ],
  },
  {
    field: 'configSn',
    label: '标识',
    required: true,
    component: 'Input',
  },
  {
    field: 'configKey',
    label: '配置Key',
    required: true,
    component: 'Input',
  },
  {
    field: 'configValue',
    label: '配置Value',
    component: 'Input',
    rules: [
      {
        max: 100,
        message: '字符长度不能大于100！',
      },
    ],
  },
  {
    field: 'configOrder',
    label: '排序号',
    required: false,
    component: 'InputNumber',
  },
  {
    field: 'remark',
    label: '描述',
    required: false,
    component: 'InputTextArea',
    rules: [
      {
        max: 80,
        message: '字符长度不能大于80！',
      },
    ],
  },
];
