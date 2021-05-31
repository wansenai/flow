import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
export const schemas: FormSchema[] = [
  {
    field: 'dbName',
    component: 'Input',
    label: '数据库',
    labelWidth: 80,
    componentProps:{
      defaultValue:'flow-6.6'
    },
    colProps: {
      span: 6,
    },
  },
  {
    field: 'tableName',
    component: 'Input',
    label: '表名',
    labelWidth: 80,
    colProps: {
      span: 6,
    },
    required: true,
    componentProps: ({ formModel, formActionType }) => {
      return {
        placeholder: '值改变时执行查询,查看控制台',
        onChange: async (e) => {
          let tableName = e.target.value;
          tableName = tableName.replace('tbl_', '');
          let nameSplit = tableName.split('_');
          nameSplit = nameSplit.map(str=>str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()));
          const className = nameSplit.join('');
          const lowerClassName = nameSplit;
          lowerClassName[0]=lowerClassName[0].toLowerCase();
          formModel.className =  className;
          formModel.lowerClassName =  lowerClassName.join('');
        },
      };
    },
  },
  {
    field: 'module',
    component: 'Input',
    label: '模块',
    labelWidth: 80,
    colProps: {
      span: 6,
    },
    required: true,
  },
  {
    field: 'className',
    component: 'Input',
    label: '类名',
    labelWidth: 80,
    colProps: {
      span: 6,
    },
    required: true,
  },
  {
    field: 'lowerClassName',
    component: 'Input',
    label: '类名小写',
    labelWidth: 80,
    colProps: {
      span: 6,
    },
    required: true,
  },
  {
    field: 'showLeftTree',
    component: 'Switch',
    label: '显示左侧树',
    colProps: {
      span: 2,
    },
    labelWidth: 80,
    componentProps: ({ formActionType })=>{
      return {
        onChange: (e: any) => {
          formActionType.updateSchema([
            {
              field:'leftTree',
              show: e,
            }
          ]);
        },
      }
    },
  },
  {
    field: 'leftTree',
    component: 'Select',
    label: '左侧树',
    show: false,
    colProps: {
      span: 8,
    },
    componentProps: {
      options: [
        {
          label: '公司树',
          value: 'CompanyTree',
          key: 'CompanyTree',
        },
        {
          label: '组织树',
          value: 'OrgTree',
          key: 'OrgTree',
        },
        {
          label: '流程分类树',
          value: 'FlowCategoryTree',
          key: 'FlowCategoryTree',
        },
      ],
    },
  },
];
