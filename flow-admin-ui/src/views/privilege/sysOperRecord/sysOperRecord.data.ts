import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import {DescItem} from "/@/components/Description";
import {formatToDateTime} from "/@/utils/dateUtil";
import { CodeEditor } from '/@/components/CodeEditor';

export const columns: BasicColumn[] = [
  {
    title: '访问IP',
    dataIndex: 'ip',
    width: 100,
    align: 'left',
  },
  {
    title: '操作人工号',
    dataIndex: 'userCode',
    width: 100,
    align: 'left',
  },
  {
    title: '操作人姓名',
    dataIndex: 'userName',
    width: 100,
    align: 'left',
  },
  {
    title: '来源',
    dataIndex: 'source',
    width: 100,
    align: 'left',
  },
  {
    title: '请求方式',
    dataIndex: 'operType',
    width: 100,
    align: 'left',
  },
  {
    title: '操作时间',
    dataIndex: 'dateTime',
    width: 100,
    align: 'left',
    customRender:({text})=>{
      return formatToDateTime(text)
    }
  }
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'userName',
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

export const descriptionSchema: DescItem[] = [
  {
    field: 'ip',
    label: '访问ip',
    labelMinWidth: 90
  },
  {
    field: 'source',
    label: '来源',
  },
  {
    field: 'userName',
    label: '操作人姓名',
    render: (curVal, data) => {
      return `${curVal} - [${data.userCode}]`;
    },
  },
  {
    field: 'dateTime',
    label: '操作时间',
  },
  {
    field: 'operType',
    label: '请求方式',
  },
  {
    field: 'operContent',
    label: '请求参数',
    span: 2,
    render: (val: string)=>{
      return h(CodeEditor, {
        style: 'max-height: 780px; max-height: 500px; overflow: auto;',
        value: val,
        readonly: true,
        mode: 'application/json',
        autoFormat: true,
      });
    }

  },
];
