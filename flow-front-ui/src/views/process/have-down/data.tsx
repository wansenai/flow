import { BasicColumn } from '/@/components/Table/src/types/table';
import { FormSchema } from '/@/components/Table';

import { Badge } from 'ant-design-vue';
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
  {
    field: 'appSn',
    label: '系统',
    component: 'Select',
    labelWidth: 60,
    colProps: {span: 6, lg:{span: 6, offset:0}, sm:{span: 10, offset: 0}, xs:{span: 16, offset: 0}},
  }
];
export const haveDownTableSchema: BasicColumn[] = [
  {
    title: '状态',
    width: 80,
    dataIndex: 'processStatusName',
    customRender: ({ record }) => {
      return <Badge status="success" text={record.processStatusName} />;
    },
  },
  {
    title: '流程标题',
    dataIndex: 'formName',
    align: 'left',
  },
  {
    title: '提交人',
    width: 70,
    dataIndex: 'startPersonName',
    align: 'left',
  },
  {
    title: '审批时间',
    width: 150,
    dataIndex: 'startTime',
  },
  {
    title: '总耗时',
    width: 150,
    dataIndex: 'totalTime',
    align: 'left',
  },
  {
    title: '所属系统',
    width: 150,
    dataIndex: 'appName',
    align: 'left',
  },
];
