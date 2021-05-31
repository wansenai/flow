export default (formData)=>{

  return `import {defHttp} from '/@/utils/http/axios';
import {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";
import {${formData.className}Info, ${formData.className}Params, ${formData.className}PageListGetResultModel, ${formData.className}PageParams} from "./model/${formData.lowerClassName}Model";

enum Api {
  ${formData.className}PageList = '/flow/${formData.module}/${formData.lowerClassName}/getPagerModel',
  SaveOrUpdate = '/flow/${formData.module}/${formData.lowerClassName}/saveOrUpdate',
  Delete = '/flow/${formData.module}/${formData.lowerClassName}/delete',
  CheckEntityExist = '/flow/${formData.module}/${formData.lowerClassName}/checkEntityExist',
}

export const get${formData.className}ListByPage = (params?: ${formData.className}Params) => {
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<${formData.className}PageParams>;
  return defHttp.post<${formData.className}PageListGetResultModel>({ url: Api.${formData.className}PageList, params: queryParam });

};

export const saveOrUpdate = (params?: ${formData.className}Info) =>
  defHttp.post<${formData.className}Info>({url: Api.SaveOrUpdate, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<${formData.className}Info>({url: Api.Delete, params});
`;
}
