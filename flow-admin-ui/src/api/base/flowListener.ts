import {AppInfo, AppPageListGetResultModel, AppPageParams} from './model/flowListenerModel';
import {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";

import {defHttp} from '/@/utils/http/axios';

enum Api {
  GetAll = '/flow/flowable/flowListener/getList',
  PageList = '/flow/flowable/flowListener/getPagerModel',
  SaveOrUpdate = '/flow/flowable/flowListener/saveOrUpdate',
  Delete = '/flow/flowable/flowListener/deleteById',
  CheckEntityExist = '/flow/flowable/flowListener/checkEntityExist',
}

export const getAll = (params?: AppPageParams) => {
  return defHttp.post<AppInfo>({ url: Api.GetAll, params }).then((res: any)=>{
    // res.forEach(item=>{
    //   item.label = item.name;
    //   item.value = item.value;
    // });
    return Promise.resolve(res);
  })
};

export const getExpressionTypes = () => {
  const expressionTypes = [
    {value: 'class', label: 'java类'},
    {value: 'expression', label: '表达式'},
    {value: 'delegateExpression', label: '代理表达式'}
  ];
  return Promise.resolve(expressionTypes);
};

export const getListenerTypes = () => {
  const listenerTypes = [
    {value: 'taskListener', label: '任务监听'},
    {value: 'executionListener', label: '执行监听'}
  ];
  return Promise.resolve(listenerTypes);
};

export const getAppListByPage = (params?: AppPageParams) => {
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<AppPageParams>;
  return defHttp.post<AppPageListGetResultModel>({ url: Api.PageList, params: queryParam });
};

export const saveOrUpdate = (params?: AppInfo) =>
  defHttp.post<AppInfo>({ url: Api.SaveOrUpdate, params });

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });

export const deleteById = (id: string) =>
  defHttp.post<AppInfo>({ url: Api.Delete + '/' + id });
