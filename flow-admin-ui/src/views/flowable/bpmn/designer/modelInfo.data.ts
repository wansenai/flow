import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import {Tag } from "ant-design-vue";

import {h} from 'vue'

/*
* id
modelId
name
modelKey
modelType
appSn
categoryCode
status
extendStatus
ownDeptId
ownDeptName
flowOwnerNo
flowOwnerName
processDockingNo
processDockingName
applyCompanyId
showStatus
appliedRange
businessUrl
functionRange
orderNo
userIds
userNames
processDefinitionId
businessKey
* */
export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: 'Key',
    dataIndex: 'modelKey',
    width: 100,
    align: 'left'
  },
  {
    title: '系统',
    dataIndex: 'appSn',
    width: 100,
    align: 'left'
  },
  {
    title: '应用范围',
    dataIndex: 'appliedRange',
    width: 100,
    align: 'left'
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 60,
    customRender: ({ record }) => {
      const status = record.sex;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '在职' : '离职';
      return h(Tag, { color: color }, () => text);
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
    colProps: { span: 8 },
  },
  {
    field: 'appSn',
    label: '系统',
    component: 'Select',
    colProps: { span: 8 },
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
  {
    field: 'categoryCode',
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
        message: '名称不能为空！',
      },
      {
        max: 200,
        message: '字符长度不能大于200！',
      },
    ],
  },
  {
    field: 'modelKey',
    label: '标识',
    component: 'Input',
    required: true,
    rules: [
      {
        required: true,
        whitespace: true,
        message: '标识不能为空！',
      },
      {
        pattern: new RegExp('^[0-9a-zA-Z_]{1,}$'),
        type: 'string',
        message: '请输入英文或数字！',
      },
      {
        max: 150,
        message: '字符长度不能大于150！',
      },
    ],
  },
  {
    field: 'appSn',
    label: '所属系统',
    component: 'Select',
    componentProps: {
      getPopupContainer: () => document.body,
    },
    required: true,
  },
];
