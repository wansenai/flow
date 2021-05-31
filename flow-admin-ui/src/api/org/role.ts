import {
  RoleInfo,
  RolePageListGetResultModel,
  RolePageParams,
  PersonalByRoleParams
} from './model/roleModel';
import {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";

import {defHttp} from '/@/utils/http/axios';
import {PersonalInfo} from "/@/api/org/model/personalModel";
import {PersonalRoleParams} from "/@/api/org/model/personalRoleModel";

enum Api {
  PageList = '/flow/org/role/getPagerModel',
  PageListByPersonalId = '/flow/org/role/getPagerModelByPersonalId',
  GetPersonalsByRole = '/flow/org/role/getPersonalsByRole',
  SaveOrUpdate = '/flow/org/role/saveOrUpdate',
  AddPersonalRoles = '/flow/org/role//addPersonalRoles',
  Delete = '/flow/org/role/delete',
  DeleteRolePersonal = '/flow/org/role/deleteRolePersonal',
  CheckEntityExist = '/flow/org/role/checkEntityExist',


  AllocationPersonals = '/flow/org/personalRole/allocationPersonals',
}

export const getRoleListByPage = (params: RolePageParams) => {
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params;
  const personalId = params.personalId;
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
    delete entity['personalId'];
  }
  const url = personalId?Api.PageListByPersonalId+`?personalId=${personalId}`:Api.PageList;
  const queryParam = {query, entity} as BasicPageSearchParams<RolePageParams>;
  return defHttp.post<RolePageListGetResultModel>({ url, params: queryParam });
};

export const getPersonalsByRole = (params: PersonalByRoleParams) => {
  return defHttp.post<PersonalInfo>({ url: Api.GetPersonalsByRole+'/' + params.roleId, params: params.personal });
};

export const saveOrUpdate = (params?: RoleInfo) =>
  defHttp.post<RoleInfo>({ url: Api.SaveOrUpdate, params });

export const addPersonalRoles = (params?: RoleInfo) =>
  defHttp.post<RoleInfo>({ url: Api.AddPersonalRoles+'/'+params.roleId, params: params.personalList });

/**
 * 给角色分配人员
 * @param params
 */
export const allocationPersonals = (params: PersonalRoleParams) =>
  defHttp.post<RoleInfo>({ url: Api.AllocationPersonals+'/'+params.roleId, params: params.personalList });

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<RoleInfo>({ url: Api.Delete, params });

export const deleteRolePersonal = (params?: Array<string>) =>
  defHttp.post<RoleInfo>({ url: Api.DeleteRolePersonal, params });

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });
