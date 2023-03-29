import {defHttp} from '/@/utils/http/axios';
import {ModelInfo, ModelInfoListGetResultModel, ModelInfoPageParams} from "./model/modelInfoModel";
import {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";

enum Api {
  ModelInfoPageList = '/flow/flowable/modelInfo/getPagerModel',
  GetById = '/flow/flowable/modelInfo/get',
  GetByModelId = '/flow/flowable/modelInfo/getByModelId',
  PublishBpmn = '/flow/flowable/bpmn/publishBpmn',
  StopBpmn = '/flow/flowable/bpmn/stopBpmn',
  SaveOrUpdate = '/flow/flowable/modelInfo/saveOrUpdateModelInfo',
  Delete = '/flow/flowable/modelInfo/deleteByIds',
  CheckEntityExist = '/flow/flowable/modelInfo/checkEntityExist',
  GetBpmnByModelKey = '/flow/flowable/bpmn/getBpmnByModelKey',
}

export const getModelInfoPageList = (params: ModelInfoPageParams) =>{
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<ModelInfoPageParams>;
  return defHttp.post<ModelInfoListGetResultModel>({ url: Api.ModelInfoPageList,  params: queryParam });
}
// 加载XML
export function getBpmnByModelKey(params: any) {
  return defHttp.get({ url: Api.GetBpmnByModelKey + '/' + params.modelKey, params:{} });
}

export const saveFlowInfo = (params) =>
  defHttp.post({url: Api.SaveOrUpdate, params}, {isReturnNativeResponse: true});

export const publishBpmn = (params: any) =>
  defHttp.post({url: Api.PublishBpmn + "/" + params});

export const stopBpmn = (params: any) =>
  defHttp.post({url: Api.StopBpmn + "/" + params});

export const getById = (params: any) =>
  defHttp.get({url: Api.GetById + "/" + params});

export const getByModelId = (params: any) =>
  defHttp.get({url: Api.GetByModelId + "/" + params});

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post({url: Api.Delete, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });
