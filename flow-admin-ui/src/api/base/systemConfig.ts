import {defHttp} from '/@/utils/http/axios';
import {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";
import {SystemConfigInfo, SystemConfigParams, SystemConfigPageListGetResultModel, SystemConfigPageParams} from "./model/systemConfigModel";

enum Api {
  SystemConfigPageList = '/flow/base/systemConfig/getPagerModel',
  SaveOrUpdate = '/flow/base/systemConfig/saveOrUpdate',
  Delete = '/flow/base/systemConfig/delete',
  CheckEntityExist = '/flow/base/systemConfig/checkEntityExist',
}

export const getSystemConfigListByPage = (params?: SystemConfigParams) => {
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<SystemConfigPageParams>;
  return defHttp.post<SystemConfigPageListGetResultModel>({ url: Api.SystemConfigPageList, params: queryParam });

};

export const saveOrUpdate = (params?: SystemConfigInfo) =>
  defHttp.post<SystemConfigInfo>({url: Api.SaveOrUpdate, params});

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<SystemConfigInfo>({url: Api.Delete, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });
