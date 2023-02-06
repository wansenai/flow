import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import {Tag} from "ant-design-vue";
import { h } from 'vue';

export const columns: BasicColumn[] = [
  {
    title: '头像',
    dataIndex: 'image',
    width: 80,
    align: 'center',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    width: 120,
    align: 'left',
  },
  {
    title: '姓名',
    dataIndex: 'realName',
    width: 120,
    align: 'left',
  },
  {
    title: '工号',
    dataIndex: 'userNo',
    width: 120,
    align: 'left',
  },
  {
    title: '手机',
    dataIndex: 'mobile',
    width: 120,
    align: 'left',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
    align: 'left',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    width: 50,
    customRender: ({ record }) => {
      const status = record.sex;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '男' : '女';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '所属组',
    dataIndex: 'groups',
    align: 'left',
    customRender: ({ record }) => {
      const groups = record.groups;
      const color = 'green';

      const tags = groups&&groups.map(item=>{
        return h(Tag, { color: color, style: {marginRight:'5px'} }, () => item.name);
      })||[];

      return tags;
    },
  }
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'keyword',
    label: '关键字',
    component: 'Input',
    componentProps: {
      placeholder: '请输入账号名/姓名/手机',
    },
    labelWidth: 60,
    colProps: {span: 6, lg:{span: 6, offset:0}, sm:{span: 10, offset: 0}, xs:{span: 16, offset: 0}},
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    required: true,
    colProps: { span: 18 },
  },
  {
    field: 'realName',
    label: '姓名',
    component: 'Input',
    required: true,
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
    colProps: { span: 18 },
  },
  {
    field: 'headImg',
    label: '',
    component: 'Input',
    slot: 'headImg',
    colProps: {
      style: 'margin: auto;position: absolute;right: 0;',
      span: 10,
    },
  },
  {
    field: 'sex',
    label: '性别',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '男', value: 1 },
        { label: '女', value: 0 },
      ],
    },
    colProps: { span: 18 },
  },
  {
    field: 'userNo',
    label: '工号',
    component: 'Input',
    required: true,
    colProps: { span: 24 },
  },
  {
    label: '手机',
    field: 'mobile',
    component: 'Input',
    required: true,
    colProps: { span: 24 },
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    required: false,
    colProps: { span: 24 },
  },
];

export const passwordFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'passwordNew',
    label: '密码',
    component: 'StrengthMeter',
    componentProps: {
      placeholder: '密码',
    },
    rules: [
      {
        required: true,
        whitespace: true,
        message: '请输入密码！',
      },
      {
        pattern: new RegExp('[^\\u4e00-\\u9fa5]+'),
        type: 'string',
        message: '密码不能输入汉字！',
      },
      {
        min: 6,
        max: 32,
        message: '长度必需在6-32之间！',
      },
    ],
    colProps: { span: 24 },
  },
  {
    field: 'confirmPassword',
    label: '确认密码',
    component: 'InputPassword',

    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!value) {
              return Promise.reject('确认密码不能为空');
            }
            if (value !== values.passwordNew) {
              return Promise.reject('两次输入的密码不一致!');
            }
            return Promise.resolve();
          },
        },
        {
          pattern: new RegExp('[^\\u4e00-\\u9fa5]+'),
          type: 'string',
          message: '密码不能输入汉字！',
        },
        {
          min: 6,
          max: 32,
          message: '长度必需在6-32之间！',
        },
      ];
    },
    colProps: { span: 24 },
  },
]

export const setGroupFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    label: '选择组',
    field: 'groups',
    slot: 'groups',
    component: 'Input',
    labelWidth: 50,
    colProps: { span: 24 },
  },
]
