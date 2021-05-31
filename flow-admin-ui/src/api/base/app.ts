import {AppInfo, AppPageListGetResultModel, AppPageParams} from '/@/api/base/model/appModel';
import {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";

import {defHttp} from '/@/utils/http/axios';

enum Api {
  GetAll = '/flow/base/app/getApps',
  PageList = '/flow/base/app/getPagerModel',
  SaveOrUpdate = '/flow/base/app/saveOrUpdate',
  Delete = '/flow/base/app/delete',
  CheckEntityExist = '/flow/base/app/checkEntityExist',
  RefreshSecretKey = '/flow/base/app/refreshSecretKey',
}

export const getAll = (params?: AppPageParams) => {
  return defHttp.post<AppInfo>({ url: Api.GetAll, params }).then((res: any)=>{
    res.forEach(item=>{
      item.label = item.name;
      item.value = item.sn;
    });
    return Promise.resolve(res);
  })
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

export const refreshSecretKey = (params: string) =>
  defHttp.post<string>({ url: Api.RefreshSecretKey+'/'+params, params: {} });

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<AppInfo>({ url: Api.Delete, params });
