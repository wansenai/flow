import {AccountInfo, AccountListGetResultModel, AccountPageParams} from './model/accountModel';
import {defHttp} from '/@/utils/http/axios';
import {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";
import {AppInfo} from "/@/api/base/model/appModel";

enum Api {
  AccountPageList = '/flow/privilege/user/getPagerModel',
  GetAllList = '/flow/privilege/user/getAll',
  SaveOrUpdate = '/flow/privilege/user/saveOrUpdate',
  AllocationRoles = '/flow/privilege/user/allocationRoles',
  Delete = '/flow/privilege/user/delete',
  SetPassword = '/flow/privilege/user/setPassword',
  CheckEntityExist = '/flow/privilege/user/checkEntityExist',
}

export const getAccountPageList = (params: AccountPageParams) =>{
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<AccountPageParams>;
  return defHttp.post<AccountListGetResultModel>({ url: Api.AccountPageList,  params: queryParam });
}

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });

export const getAllList = (params?: AccountInfo) => {
  return defHttp.post<AccountInfo>({url: Api.GetAllList, params});
};


export const saveOrUpdate = (params?: AccountInfo) =>
  defHttp.post<AccountInfo>({ url: Api.SaveOrUpdate, params });

export const allocationRoles = (params: AccountInfo) =>{
  const userId = params.userId;
  delete params['userId'];
  return defHttp.post<AccountInfo>({ url: (Api.AllocationRoles+"/"+userId), params: params.groups });
}

export const setPassword = (params?: AccountInfo) =>
  defHttp.post<AccountInfo>({ url: Api.SetPassword, params });

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<AppInfo>({ url: Api.Delete, params });
