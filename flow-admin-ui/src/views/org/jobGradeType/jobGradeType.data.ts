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
    title: '排序编号',
    dataIndex: 'orderNo',
    width: 100,
    align: 'left',
  },
  {
    title: '备注',
    dataIndex: 'note',
    align: 'left',
  },
  /*{
    title: '创建人',
    dataIndex: 'creator',
    width: 100,
    align: 'left',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 100,
    align: 'left',
  },
  {
    title: '修改人',
    dataIndex: 'updator',
    width: 100,
    align: 'left',
  },
  {
    title: '修改时间',
    dataIndex: 'updateTime',
    width: 100,
    align: 'left',
  }*/
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
    label: '',
    required: false,
    component: 'Input',
    show: false,

  },
  {
    field: 'code',
    label: '编码',
    required: true,
    component: 'Input',
    show: true,
    colProps: { span: 24 },
  },
  {
    field: 'name',
    label: '名称',
    required: true,
    component: 'Input',
    show: true,
    rules: [{
        required: true,
        whitespace: true,
        message: '名称不能为空！',
      },
      {
        max: 80,
        message: '字符长度不能大于80！',
      }],
    colProps: { span: 24 },
  },
  {
    field: 'status',
    label: '状态',
    required: false,
    component: 'Switch',
    defaultValue: true,
    componentProps:{
      checkedChildren: '启用',
      unCheckedChildren: '停用'
    },
    colProps: { span: 24 },
  },
  {
    field: 'orderNo',
    label: '排序编号',
    required: false,
    component: 'InputNumber',
    show: true,

  },
  {
    field: 'note',
    label: '备注',
    required: false,
    component: 'InputTextArea',
    show: true,
    rules: [{
        max: 255,
        message: '字符长度不能大于255！',
      }],
    colProps: { span: 24 },
  }
];
