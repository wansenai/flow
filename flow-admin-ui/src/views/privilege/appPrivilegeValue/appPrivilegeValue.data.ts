import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 100,
    align: 'left',
  },
  {
    title: '位',
    dataIndex: 'position',
    width: 100,
  },
  {
    title: '排序号',
    dataIndex: 'orderNo',
    width: 100,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 400,
    align: 'left',
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
    field: 'position',
    label: '位',
    required: true,
    component: 'InputNumber',
    colProps: { span: 24 },
  },
  {
    field: 'orderNo',
    label: '排序',
    required: true,
    component: 'InputNumber',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
    rules: [
      {
        max: 200,
        message: '字符长度不能大于200！',
      },
    ],
    colProps: { span: 24 },
  },
];
