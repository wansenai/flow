import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import {Tag } from "ant-design-vue";

import {h} from 'vue'

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: 'KEY',
    dataIndex: 'modelKey',
    width: 100,
    align: 'left'
  },
  {
    title: '分类名称',
    dataIndex: 'categoryName',
    width: 100,
    align: 'left'
  },
  {
    title: '系统',
    dataIndex: 'appName',
    width: 100,
    align: 'left'
  },
  {
    title: '应用范围',
    dataIndex: 'appliedRangeName',
    width: 100,
    align: 'left'
  },
  {
    title: '状态',
    dataIndex: 'statusName',
    width: 70,
    align: 'center',
    customRender: ({ record }) => {
      const {status, statusName}= record;
      var color = '';
      if (~~status === 2) {
        color = 'warning';
      }else if(~~status === 3) {
        color = 'success';
      }else if(~~status === 4){
        color = 'error';
      }else {
        color = 'gray';
      }
      return h(Tag, { color: color }, () => statusName);
    },

  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
    width: 120,
    align: 'left'
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
  {
    field: 'appSn',
    label: '系统',
    component: 'Select',
    labelWidth: 60,
    colProps: {span: 6, lg:{span: 6, offset:0}, sm:{span: 10, offset: 0}, xs:{span: 16, offset: 0}},
  }
];

export const modelInfoFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    required: false,
    component: 'Input',
    show: false,
  },
/*  {
    field: 'categoryCode',
    label: 'ID',
    required: false,
    component: 'Input',
    show: false,
  },*/
  /*{
    field: 'name',
    label: '名称',
    component: 'Input',
    required: true,
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
    field: 'modelKey',
    label: '标识',
    component: 'Input',
    required: true,
    colProps: { span: 24 },
  },*/
  {
    field: 'appSn',
    label: '所属系统',
    component: 'Select',
    componentProps: {
      getPopupContainer: () => document.body,
    },
    required: true,
    colProps: { span: 24 },
  },
];
