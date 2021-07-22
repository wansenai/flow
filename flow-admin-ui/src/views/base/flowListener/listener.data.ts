import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import {Icon} from "/@/components/Icon";

export const columns: BasicColumn[] = [
  {
    title: '监听类型',
    dataIndex: 'listenerType',
    width: 180,
    align: 'left',
    slots: {
      customRender: 'listenerTypeRender'
    },
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: 180,
    align: 'left',
    slots: {
      customRender: 'typeRender'
    },
  },
  {
    title: '名称',
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: '值',
    dataIndex: 'value',
    align: 'left',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    align: 'left',
  },
  {
    title: '操作',
    dataIndex: 'option',
    align: 'left',
    slots: { customRender: 'action' },
  },
];

export const propertiesColumns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    ifShow: false,
  },
  {
    title: 'listenerId',
    dataIndex: 'listenerId',
    ifShow: false,
  },
  {
    title: '操作',
    dataIndex: 'option',
    align: 'center',
    width: 100,
    slots: { customRender: 'action' },
  },
  {
    title: '名称',
    dataIndex: 'name',
    align: 'left',
    //edit: true,
    //editable: true,
    editComponent: 'Input',
    editComponentProps:{
      size: 'small'
    },
  },
  {
    title: '值',
    dataIndex: 'value',
    align: 'left',
  },
  {
    title: '类型',
    dataIndex: 'type',
    align: 'left',
    customRender: ({ record }) => {
      let text = '未知';
      let color = 'default';
      if(record.type === 'string'){
        text = '字符串';
        color = 'default';
      }else if(record.type === 'expression'){
        text = '表达式';
        color = 'processing';
      }
      return h(Tag, { color: color }, () => text);
    },
  },

];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'listenerType',
    label: '监听类型',
    component: 'RadioGroup',
    defaultValue: 'class',
    labelWidth: 80,
    colProps: {span: 6, lg:{span: 6, offset:0}, sm:{span: 6, offset: 0}, xs:{span: 8, offset: 0}},
  },
  {
    field: 'name',
    label: '关键字',
    component: 'Input',
    componentProps: {
      placeholder: '请输入名称/标识',
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
    field: 'listenerType',
    label: '监听类型',
    component: 'RadioGroup',
    defaultValue: 'taskListener',
  },
  {
    field: 'type',
    label: '类型',
    required: true,
    component: 'RadioGroup',
    defaultValue: 'class',
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
        max: 80,
        message: '字符长度不能大于802！',
      },
    ],
  },
  {
    field: 'value',
    label: '值',
    required: true,
    component: 'Input',
    rules: [
      {
        required: true,
        whitespace: true,
        message: '名称不能为空！',
      },
      {
        max: 300,
        message: '字符长度不能大于300！',
      },
    ],
  },

  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
    rules: [
      {
        max: 255,
        message: '字符长度不能大于255！',
      },
    ],
  },

];

export const propertiesFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'listenerId',
    label: 'listenerId',
    component: 'Input',
    show: false,
  },
  {
    field: 'type',
    label: '类型',
    required: true,
    component: 'RadioGroup',
    defaultValue: 'string',
  },
  {
    field: 'name',
    label: '名称',
    helpMessage: '监听器的属性名',
    required: true,
    component: 'Input',
  },
  {
    field: 'value',
    label: '值',
    helpMessage: '监听器的属性值',
    required: true,
    component: 'Input',
    rules: [
      {
        required: true,
        whitespace: true,
        message: '值不能为空！',
      },
      {
        max: 255,
        message: '字符长度不能大于255！',
      },
    ],
  },
];
