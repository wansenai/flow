const genRule = (item)=>{
  let rules = ``;
  debugger;
  if(item.ruleType === 'name'){
    rules = `rules: [{
        required: ${item.required?'true':'false'},
        whitespace: true,
        message: '${item.comment}不能为空！',
      },
      {
        max: ${item.fieldLength},
        message: '字符长度不能大于${item.fieldLength}！',
      }],`;
  }else if(item.ruleType === 'remark'){
    rules = `rules: [{
        max: ${item.fieldLength},
        message: '字符长度不能大于${item.fieldLength}！',
      }],`;
  }
  return rules;
}


export default (formData)=>{
  const fields = formData.fields;

  const columns = fields.filter(item=>item.showInTable).map(item=>{
    return `
  {
    title: '${item.comment}',
    dataIndex: '${item.fieldName}',
    width: 100,
    align: 'left',
  }`;
  });

  const formItems = fields.filter(item=>item.showInForm).map(item=>{
    return `
  {
    field: '${item.fieldName}',
    label: '${item.comment}',
    required: ${item.required?'true':'false'},
    component: '${item.formType}',
    show: ${item.isPrimary?'false':'true'},
    ${genRule(item)}
  }`;
  });

  return `import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
export const columns: BasicColumn[] = [
  ${columns.join(',')}
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
];

export const formSchema: FormSchema[] = [
  ${formItems.join(',')}
];`;
}
