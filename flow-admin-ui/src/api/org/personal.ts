import {defHttp} from '/@/utils/http/axios';
import {DeptInfo} from "./model/deptModel";
import {
  PersonalLeaderParam,
  PersonalListGetResultModel,
  PersonalPageParams,
  PersonalRoleDeleteParam
} from "./model/personalModel";
import {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";

enum Api {
  PersonalPageList = '/flow/org/personal/getPagerModel',
  PersonalPageListShowRows = '/flow/org/personal/getPagerModelShowRoles',
  AllocationRoles = '/flow/org/personalRole/allocationRoles',
  SaveOrUpdate = '/flow/org/personal/saveOrUpdate',
  Delete = '/flow/org/personal/delete',
  SetLeaderCode = '/flow/org/personal/setLeaderCode',
  CheckEntityExist = '/flow/org/personal/checkEntityExist',


  DeletePersonalRole = '/flow/org/personalRole/deletePersonalRole',
}

export const getPersonalPageList = (params: PersonalPageParams) =>{
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  const showRoles = params.showRoles;
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
    delete entity['showRoles'];
  }
  const url = showRoles?(Api.PersonalPageListShowRows+`?showRoles=${showRoles}`):Api.PersonalPageList;
  const queryParam = {query, entity} as BasicPageSearchParams<PersonalPageParams>;
  return defHttp.post<PersonalListGetResultModel>({ url,  params: queryParam });
}

export const saveOrUpdate = (params?: DeptInfo) =>
  defHttp.post({url: Api.SaveOrUpdate, params});

export const allocationRoles = (params: any) =>
  defHttp.post({url: Api.AllocationRoles + "/" + params.personalId, params: params.roles});

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post({url: Api.Delete, params});

export const deletePersonalRole = (params: PersonalRoleDeleteParam) =>
  defHttp.post({url: Api.DeletePersonalRole, params});

export const setLeaderCode = (params: PersonalLeaderParam) =>
  defHttp.post({url: Api.SetLeaderCode + `/${params.leaderCode}/${params.id}`});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });
