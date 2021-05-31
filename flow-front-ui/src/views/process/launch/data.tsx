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
    colProps: {span: 8, lg:{span: 8, offset:0}, sm:{span: 10, offset: 0}, xs:{span: 16, offset: 0}},
  }
];

export const cardList = (() => {
  const result: any[] = [];
  result.push({
    id: '100044',
    title: '请假申请',
    description: '请假申请',
    datetime: '2021-05-20 17:39',
    modelKey: 'leave',
  });
  result.push({
    id: '100022',
    title: '离职申请',
    description: '离职申请',
    datetime: '2021-05-20 17:39',
    modelKey: 'dimission',
  });
  for (let i = 0; i < 6; i++) {
    result.push({
      id: i,
      title: '入转调离------' + i,
      description: '入转调离流程申请 ',
      datetime: '2021-05-22 17:39',
    });
  }
  return result;
})();


export const refundTimeTableSchema: BasicColumn[] = [
  {
    title: '时间',
    width: 150,
    dataIndex: 't1',
  },
  {
    title: '当前进度',
    width: 150,
    dataIndex: 't2',
  },
  {
    title: '状态',
    width: 150,
    dataIndex: 't3',
    customRender: ({ record }) => {
      return <Badge status="success" text={record.t3} />;
    },
  },
  {
    title: '操作员ID	',
    width: 150,
    dataIndex: 't4',
  },
  {
    title: '耗时',
    width: 150,
    dataIndex: 't5',
  },
];

export const refundTimeTableData: any[] = [
  {
    t1: '2017-10-01 14:10',
    t2: '联系客户',
    t3: '进行中',
    t4: '取货员 ID1234',
    t5: '5mins',
  },
  {
    t1: '2017-10-01 14:10',
    t2: '取货员出发',
    t3: '成功',
    t4: '取货员 ID1234',
    t5: '5mins',
  },
  {
    t1: '2017-10-01 14:10',
    t2: '取货员接单',
    t3: '成功',
    t4: '系统',
    t5: '5mins',
  },
  {
    t1: '2017-10-01 14:10',
    t2: '申请审批通过',
    t3: '成功',
    t4: '用户',
    t5: '1h',
  },
];
