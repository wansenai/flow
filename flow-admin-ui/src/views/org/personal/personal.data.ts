import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import {Tag } from "ant-design-vue";
import {getJobGradeTree} from "/@/api/org/jobGrade";
import {getPositionInfoTree} from "/@/api/org/positionInfo";
import {h} from 'vue'
import {formatToDate, formatToDateTime} from "/@/utils/dateUtil";
import {getCompanies} from "/@/api/org/company";

export const columns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 120,
    align: 'left',
  },
  {
    title: '工号',
    dataIndex: 'code',
    width: 100,
    align: 'left'
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 60,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '在职' : '离职';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
    align: 'left'
  },
  {
    title: '手机',
    dataIndex: 'mobile',
    width: 120,
    align: 'left'
  },
  {
    title: '部门',
    dataIndex: 'deptName',
    width: 120,
    align: 'left'
  },
  {
    title: '公司',
    dataIndex: 'companyName',
    width: 120,
    align: 'left'
  },
  {
    title: '上级领导',
    dataIndex: 'leaderName',
    width: 140,
    align: 'left',
    customRender: ({ record }) => {
      return record.leaderCode?`${record.leaderName||''}[${record.leaderCode}]`:'未设置';
    },
  },
  {
    title: '角色',
    dataIndex: 'roles',
    width: 300,
    align: 'left',
  },
  {
    title: '离职日期',
    dataIndex: 'leaveDate',
    width: 100,
    customRender:({text})=>{
      return text?formatToDate(text):"";
    }
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 130,
    customRender:({text})=>{
      return text?formatToDateTime(text):'';
    }
  }
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'keyword',
    label: '关键字',
    component: 'Input',
    componentProps: {
      placeholder: '请输入姓名/工号/手机/邮箱',
    },
    labelWidth: 60,
    colProps: {span: 8, lg:{span: 8, offset:0}, sm:{span: 14, offset: 0}, xs:{span: 16, offset: 0}},
  }
];

export const personalFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    required: false,
    component: 'Input',
    show: false,
  },
  {
    field: 'name',
    label: '姓名',
    component: 'Input',
    required: true,
    colProps: {
      span: 9,
    },
    rules: [
      {
        required: true,
        whitespace: true,
        message: '姓名不能为空！',
      },
      {
        max: 20,
        message: '字符长度不能大于20！',
      },
    ],
  },
  {
    field: 'code',
    label: '工号',
    component: 'Input',
    required: true,
    colProps: {
      span: 9,
    },
  },
  {
    field: 'headImg',
    label: '',
    component: 'Input',
    slot: 'headImg',
    colProps: {
      style: 'margin: auto;position: absolute;right: 0;',
      span: 4,
    },
  },
  {
    label: '手机',
    field: 'mobile',
    component: 'Input',
    required: true,
    colProps: {
      span: 9,
    },
    rules: [
      {
        required: true,
        whitespace: true,
        message: '手机不能为空！',
      },
      {
        pattern: new RegExp('^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$'),
        type: 'string',
        message: '请输入正确的手机号！',
      },
      {
        max: 32,
        message: '字符长度不能大于32！',
      },
    ],
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    colProps: {
      span: 9,
    },
    rules: [
      {
        pattern: new RegExp('^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$'),
        type: 'string',
        message: '请输入正确的邮箱地址！',
      },
      {
        max: 256,
        message: '字符长度不能大于256！',
      },
    ],
  },
  {
    field: 'sex',
    label: '性别',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ],
    },
    colProps: { span: 9 },
  },
  {
    field: 'status',
    label: '在职状态',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '在职', value: 1 },
        { label: '离职', value: 0 },
      ],
    },
    colProps: { span: 9 },
  },
  {
    field: 'jobGradeCode',
    label: '职级',
    component: 'ApiTreeSelect',
    colProps: {
      span: 12,
    },
    componentProps: {
      api: getJobGradeTree,
      treeNodeFilterProp: 'showName',
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'positionCode',
    label: '岗位',
    component: 'ApiTreeSelect',
    colProps: {
      span: 12,
    },
    componentProps: {
      api: getPositionInfoTree,
      treeNodeFilterProp: 'showName',
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'companyId',
    label: '所属公司',
    component: 'ApiTreeSelect',
    colProps: {
      span: 12,
    },
    componentProps: {
      api: getCompanies,
      treeNodeFilterProp: 'cname',
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'deptId',
    label: '所属部门',
    component: 'TreeSelect',
    colProps: {
      span: 12,
    },
    componentProps: {
      treeNodeFilterProp: 'name',
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    label: '地址',
    field: 'address',
    component: 'InputTextArea',
    rules: [
      {
        max: 400,
        message: '字符长度不能大于400！',
      },
    ],
    colProps: { span: 24 },
  },
  // status
];
