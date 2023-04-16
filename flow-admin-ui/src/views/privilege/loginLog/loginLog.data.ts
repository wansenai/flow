import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import {formatToDateTime} from "/@/utils/dateUtil";

export const columns: BasicColumn[] = [
  {
    title: '访问IP',
    dataIndex: 'ip',
    width: 100,
    align: 'left',
  },
  {
    title: '操作人ID',
    dataIndex: 'operationId',
    width: 100,
    align: 'left',
  },
  {
    title: '操作人的姓名',
    dataIndex: 'operationUsername',
    width: 100,
    align: 'left',
  },
  {
    title: '操作人姓名',
    dataIndex: 'operationPerson',
    width: 100,
    align: 'left',
  },
  {
    title: '操作内容',
    dataIndex: 'operationContent',
    width: 100,
    align: 'left',
  },
  {
    title: '操作时间',
    dataIndex: 'operationTime',
    width: 100,
    align: 'left',
    customRender:({text})=>{
      return formatToDateTime(text)
    }
  }
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
    field: 'dateRange',
    label: '时间范围',
    component: 'RangePicker',
    labelWidth: 80,
    colProps: {span: 6, lg:{span: 6, offset:0}, sm:{span: 10, offset: 0}, xs:{span: 16, offset: 0}},
  },

];

export const formSchema: FormSchema[] = [
  {
    field: 'ip',
    label: '访问ip',
    required: false,
    component: 'Input',
    show: true,
  },
  {
    field: 'operationId',
    label: '操作人id',
    required: false,
    component: 'Input',
    show: true,
  },
  {
    field: 'operationUsername',
    label: '操作人的姓名',
    required: false,
    component: 'Input',
    show: true,
    rules: [{
        required: false,
        whitespace: true,
        message: '操作人的姓名不能为空！',
      },
      {
        max: 32,
        message: '字符长度不能大于32！',
      }],
  },
  {
    field: 'operationPerson',
    label: '操作人姓名',
    required: false,
    component: 'Input',
    show: true,
  },
  {
    field: 'operationContent',
    label: '操作内容',
    required: false,
    component: 'Input',
    show: true,
  },
  {
    field: 'operationTime',
    label: '操作时间',
    required: true,
    component: 'DatePicker',
    show: true,
  }
];
