const getFieldType = (dataType)=>{
  if(dataType === 'varchar'){
    return 'string';
  }else if(dataType === 'int'){
    return 'number';
  }
  return 'any';
}

const genFieldItem = (item)=>{
  return `${item.fieldName}?: ${getFieldType(item.dataType)};
  `;
}

export default (formData)=>{
  const fields = formData.fields;
  const fieldItems = fields.filter(item=>item.showInTable).map(item=>{
    return genFieldItem(item);
  });
  return `import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type ${formData.className}Params = {
  keyword?: string;
};

export type ${formData.className}PageParams = BasicPageParams & ${formData.className}Params;

export type ${formData.className}Info = {
  ${fieldItems.join('')}
};

/**
 * @description: Request list return value
 */
export type ${formData.className}PageListGetResultModel = BasicFetchResult<${formData.className}Info>;
`;
}
