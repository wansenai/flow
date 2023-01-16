import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import {Tag} from "ant-design-vue";

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: '编码',
    dataIndex: 'sn',
    width: 120,
    align: 'left',
  },
  {
    title: '所属公司',
    dataIndex: 'companyName',
    width: 120,
    align: 'left',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: 120,
  }
];
export const personalColumns: BasicColumn[] = [
  {
    title: '操作',
    dataIndex: 'action',
    width: 50,
    slots: { customRender: 'action' },
  },
  {
    dataIndex: 'name',
    align: 'left',
    width: 200,
    slots: { title: 'customName' },
    customRender: ({ record }) => {
      return record.name + " - ["+record.code+"]"
    },
  },
  {
    title: '所属公司',
    dataIndex: 'companyName',
    align: 'left',
    // width: 200,
  },
  {
    title: '所属部门',
    dataIndex: 'deptName',
    align: 'left',
    // width: 200,
  },
  /*{
    title: '配置管辖范围',
    dataIndex: 'setManagerRange',
    align: 'center',
    slots: { align:'right',customRender: 'setManagerRange' },
  },*/
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
    colProps: {span: 6, lg:{span: 8, offset:0}, sm:{span: 14, offset: 0}, xs:{span: 16, offset: 0}},  },
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
    field: 'name',
    label: '名称',
    component: 'Input',
    required: true,
    rules: [
      {
        required: true,
        whitespace: true,
        message: '编码不能为空！',
      },
      {
        max: 64,
        message: '字符长度不能大于64！',
      },
    ],
    colProps: { span: 24 },
  },
  {
    field: 'sn',
    label: '编码',
    component: 'Input',
    required: true,
    colProps: { span: 24 },
  },
  {
    field: 'companyId',
    label: '所属公司',
    component: 'TreeSelect',
    componentProps: {
      treeNodeFilterProp: 'cname',
      replaceFields: {
        title: 'cname',
        key: 'id',
        value: 'id',
      },
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
    label: '备注',
    field: 'note',
    component: 'InputTextArea',
    rules: [
      {
        max: 1024,
        message: '字符长度不能大于1024！',
      },
    ],
    colProps: { span: 24 },
  },
];
