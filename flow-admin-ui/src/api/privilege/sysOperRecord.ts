import {defHttp} from '/@/utils/http/axios';
import {LoginLogInfo, LoginLogPageParams} from "./model/loginLogModel";

enum Api {
  PageList = '/flow/log/sysOperRecord/getPagerModel',
  Delete = '/flow/log/sysOperRecord/delete',
}

export const getListByPage = (params: LoginLogPageParams) => {
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(params.dateRange && params.dateRange.length > 0){
    entity.startTime = params.dateRange[0];
    entity.endTime = params.dateRange[1];
  }
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
    delete entity['dateRange'];
  }

  return defHttp.post({ url: Api.PageList, params: {query, entity} });

};

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<LoginLogInfo>({url: Api.Delete, params});
