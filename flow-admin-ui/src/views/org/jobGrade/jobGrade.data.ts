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
    title: '排序号',
    dataIndex: 'orderNo',
    width: 100,
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
    label: 'ID',
    required: false,
    component: 'Input',
    show: false,
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
    field: 'code',
    label: '编码',
    required: true,
    component: 'Input',
    show: true,
    colProps: { span: 24 },
  },
  {
    field: 'typeId',
    label: '类型ID',
    required: false,
    component: 'Input',
    show: false,
  },
  {
    field: 'typeCode',
    label: '类别编码',
    required: false,
    component: 'Input',
    show: false,
  },
  {
    field: 'orderNo',
    label: '排序号',
    required: false,
    component: 'InputNumber',
    show: true,
  }
];
