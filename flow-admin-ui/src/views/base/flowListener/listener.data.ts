import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import {Icon} from "/@/components/Icon";
/*id
type
name
listenerType
value
remark*/
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
    //edit: true,
    //editable: true,
    editComponent: 'Input',
    editComponentProps:{

    }
  },
  {
    title: '类型',
    dataIndex: 'type',
    align: 'left',
    //edit: true,
    //editable: true,
    editComponent: 'Input',
    editComponentProps:{

    }
  },

];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'listenerType',
    label: '监听类型',
    required: true,
    component: 'RadioGroup',
    defaultValue: 'class',
    labelWidth: 80,
    colProps: {span: 4, lg:{span: 4, offset:0}, sm:{span: 6, offset: 0}, xs:{span: 8, offset: 0}},
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
        max: 32,
        message: '字符长度不能大于32！',
      },
    ],
  },
  {
    field: 'value',
    label: '值',
    required: true,
    component: 'Input',
  },

  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
    rules: [
      {
        max: 500,
        message: '字符长度不能大于500！',
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
  },
  {
    field: 'value',
    label: '值',
    required: true,
    component: 'Input',
  },
];

export const secretKeyFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'sn',
    label: '标识',
    component: 'Input',
    slot: 'snSlot',
  },
  {
    label: '密钥',
    field: 'secretKey',
    component: 'InputTextArea',
    slot: 'secretKeySlot',
  },

];
