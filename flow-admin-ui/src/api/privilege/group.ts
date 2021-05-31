import {GroupInfo, GroupPageListGetResultModel, GroupPageParams, GroupListItem, GroupUsers} from './model/groupModel';
import {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";

import {defHttp} from '/@/utils/http/axios';

enum Api {
  PageList = '/flow/privilege/group/getPagerModel',
  GetAllList = '/flow/privilege/group/getAll',
  SaveOrUpdate = '/flow/privilege/group/saveOrUpdate',
  AddUserGroups = '/flow/privilege/group/addUserGroups',
  Delete = '/flow/privilege/group/delete',
  CheckEntityExist = '/flow/privilege/group/checkEntityExist',
}

export const getGroupListByPage = (params?: GroupPageParams) => {
  const query = params && {pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params || {};
  if (entity) {
    delete entity['pageNum'];
    delete entity['pageSize'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<GroupPageParams>;
  return defHttp.post<GroupPageListGetResultModel>({url: Api.PageList, params: queryParam});
};

export const getAllList = (params?: GroupInfo) => {
  return defHttp.post<GroupListItem>({url: Api.GetAllList, params});
};

export const saveOrUpdate = (params?: GroupInfo) =>
  defHttp.post<GroupInfo>({url: Api.SaveOrUpdate, params});

export const addUserGroups = (params: GroupUsers) =>{
  return defHttp.post<GroupInfo>({url: Api.AddUserGroups+'/'+params.groupId, params:params.users});;
}

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<GroupInfo>({url: Api.Delete, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });

