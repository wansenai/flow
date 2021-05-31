import { FormSchema } from '/@/components/Table';

export const formSchema: FormSchema[] = [
  {
    field: 'applyerCode',
    component: 'Input',
    label: '申请人',
    colProps: {
      span: 8,
    },
    show: false,
  },

  {
    field: 'type',
    component: 'Select',
    label: '类型',
    required: true,
    colProps: {
      style: 'width: 300px',
      span: 20,
    },
    componentProps: {
      options: [
        {
          label: '调休',
          value: '1',
          key: '1',
        },
        {
          label: '事假',
          value: '2',
          key: '2',
        },
        {
          label: '年假',
          value: '3',
          key: '3',
        },
      ],
    },
  },
  {
    field: 'startTime',
    component: 'DatePicker',
    label: '开始时间',
    required: true,
    colProps: {
      span: 6,
    },
  },
  {
    field: 'endTime',
    component: 'DatePicker',
    label: '结束时间',
    required: true,
    colProps: {
      span: 6,
    },
  },
  {
    field: 'days',
    component: 'InputNumber',
    label: '请假天数',
    required: true,
    colProps: {
      span: 24,
    },
  },

  {
    field: 'note',
    component: 'InputTextArea',
    label: '说明',
    required: true,
    colProps: {
      span: 13,
    },
  },
];
