import {BasicColumn, FormSchema} from '/@/components/Table';
import Icon from "/@/components/Icon/Icon.vue";
import {Tag, Checkbox} from "ant-design-vue";
import {h} from "vue";

export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: '标识',
    dataIndex: 'sn',
    width: 180,
    align: 'left',
  },
  {
    title: '用户',
    dataIndex: 'users',
    align: 'left',
    customRender: ({ record }) => {
      const users = record.users;
      const color = 'green';
      const result = users&&users.map(item=>{
        return h(Tag, { color: color, style: {marginRight:'5px'} }, () => item.realName);
      })||[];
      return result;
    },
  },
  {
    title: '备注',
    dataIndex: 'note',
    align: 'left',
  },
];

// 权限设置
export const aclColumns: BasicColumn[] = [
  {
    title: '菜单名称',
    dataIndex: 'name',
    align: 'left',
    width: 150,
    customRender: ({ record }) => {
      return h('span', {title: record.name + '['+record.sn+']'}, [
        h(Icon, {icon: record.image}),
        h('span', record.name)
      ])
    },
  },
  {
    dataIndex: 'pvs',
    align: 'left',
    slots: { customRender: 'pvs', title:'customTitle' },
    /*customRender: ({ record }) => {
      const pvs = record.pvs;
      const color = 'green';
      const result = pvs.map(item=>{
        return h(Checkbox, { color: color, style: {marginRight:'5px'} }, () => item.name);
      });
      result.length>0&&result.unshift(h(Checkbox, { color: color, style: {marginRight:'5px'} }, () => "全选"));
      return result;
    },*/
  }
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
        max: 64,
        message: '字符长度不能大于64！',
      },
    ],
    colProps: { span: 24 },
  },
  {
    field: 'sn',
    label: '标识',
    required: true,
    component: 'Input',
    colProps: { span: 24 },
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

export const setAccountFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    label: '选择用户',
    field: 'users',
    slot: 'users',
    component: 'Input',
    labelWidth: 65,
  },
]

export const setAclFormSchema: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'Input',
    show: false,
  },
  {
    field: 'sn',
    label: 'ID',
    required: true,
    component: 'Input',
    show: false,
  },
  {
    label: '',
    labelWidth: "0",
    field: 'acls',
    slot: 'acls',
    component: 'Input',
    colProps: { span: 24 },
  },
]
