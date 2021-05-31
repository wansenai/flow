import {defHttp} from '/@/utils/http/axios';
import {AppPrivilegeValueInfo} from "/@/api/privilege/model/appPrivilegeValueModel";
import {CheckExistParams} from "/@/api/model/baseModel";

enum Api {
  getAppPrivilegeValues = '/flow/privilege/pvalue/getAppPrivilegeValues',
  SaveOrUpdate = '/flow/privilege/pvalue/saveOrUpdate',
  Delete = '/flow/privilege/pvalue/delete',
  CheckEntityExist = '/flow/privilege/pvalue/checkEntityExist',
}

export const getAppPrivilegeValues = () => {
  const result = defHttp.post<AppPrivilegeValueInfo>({url: Api.getAppPrivilegeValues});
  return result;
};

export const saveOrUpdate = (params?: AppPrivilegeValueInfo) =>
  defHttp.post<AppPrivilegeValueInfo>({url: Api.SaveOrUpdate, params});

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<AppPrivilegeValueInfo>({url: Api.Delete, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });
