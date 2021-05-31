import {defHttp} from '/@/utils/http/axios';
import {BasicPageSearchParams} from "/@/api/model/baseModel";
import {LoginLogInfo, LoginLogParams, LoginLogPageListGetResultModel, LoginLogPageParams} from "./model/loginLogModel";

enum Api {
  LoginLogPageList = '/flow/privilege/loginLog/getPagerModel',
  SaveOrUpdate = '/flow/privilege/loginLog/saveOrUpdate',
  Delete = '/flow/privilege/loginLog/delete',
}

export const getLoginLogListByPage = (params: LoginLogPageParams) => {
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(params.dateRange && params.dateRange.length > 0){
    entity.startTimeStr = params.dateRange[0];
    entity.endTimeStr = params.dateRange[1];
  }
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
    delete entity['dateRange'];
  }


  const queryParam = {query, entity} as BasicPageSearchParams<LoginLogPageParams>;
  return defHttp.post<LoginLogPageListGetResultModel>({ url: Api.LoginLogPageList, params: queryParam });

};

export const saveOrUpdate = (params?: LoginLogInfo) =>
  defHttp.post<LoginLogInfo>({url: Api.SaveOrUpdate, params});

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<LoginLogInfo>({url: Api.Delete, params});
