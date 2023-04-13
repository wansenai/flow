import { defHttp } from '/@/utils/http/axios';
import {
  ProcessInstanceResultModel,
  ProcessParams,
  AppInfo, BaseProcessVo,
} from './model/processModel';

import {BasicPageSearchParams} from "/@/api/model/baseModel";
import {forEach, listToTree} from "/@/utils/helper/treeHelper";

enum Api {
  FindMyProcessinstancesPagerModel = '/front/flow/findMyProcessinstancesPagerModel',
  GetApplyedTasksPagerModel = '/front/flow/getApplyedTasksPagerModel',
  GetAppingTasksPagerModel = '/front/flow/getAppingTasksPagerModel',
  GetApps = '/front/flow/getApps',
  Complete = '/front/flow/complete',
  StopProcess = '/front/flow/stopProcess',
  // /getOneActivityVoByProcessInstanceIdAndActivityId/{processInstanceId}/{activityId}
  GetOneActivityVoByProcessInstanceIdAndActivityId = '/front/flow/getOneActivityVoByProcessInstanceIdAndActivityId',
  // /getCommentInfosByProcessInstanceId/{processInstanceId}
  GetCommentInfosByProcessInstanceId = '/front/flow/getCommentInfosByProcessInstanceId',
  GetHighLightedNodeVoByProcessInstanceId = '/front/flow/getHighLightedNodeVoByProcessInstanceId',
  // /loadBpmnXmlByModelKey/{modelKey}
  LoadBpmnXmlByModelKey = '/front/flow/loadBpmnXmlByModelKey',
  GetFormInfoByModelKey = '/front/flow/getFormInfoByModelKey',
  GetModelInfoByModelKey = '/front/flow/getModelInfoByModelKey',
  GetAppingTaskCont = '/front/flow/getAppingTaskCont',
  GetCategories = '/front/flow/getCategories',
  GetModelInfoVoByPagerModel = '/front/flow/getModelInfoVoByPagerModel',
  StartFormFlow = '/front/flow/startFormFlow',
  GetFormDataInfoByProcessInstanceId = '/front/flow/getFormDataInfoByProcessInstanceId',
  GetStartorBaseInfoVoByProcessInstanceId = '/front/flow/getStartorBaseInfoVoByProcessInstanceId',

}

// 审批
export function complete(params: BaseProcessVo) {
  return defHttp.post({ url: Api.Complete, params });
}

// 获取待办数量
export function getAppingTaskCont(params: BaseProcessVo) {
  return defHttp.post({ url: Api.GetAppingTaskCont, params });
}

// 终止
export function stopProcess(params: BaseProcessVo) {
  return defHttp.post({ url: Api.StopProcess, params });
}

// 启动流程
export function startFormFlow(params: BaseProcessVo) {
  return defHttp.post({ url: Api.StartFormFlow, params }, {isReturnNativeResponse: true});
}

// 加载XML
export function loadBpmnXmlByModelKey(params: any) {
  return defHttp.get({ url: Api.LoadBpmnXmlByModelKey + '/' + params.modelKey, params:{} });
}

// 加载表单结构
export function getFormInfoByModelKey(params: any) {
  return defHttp.get({ url: Api.GetFormInfoByModelKey + '/' + params.modelKey, params:{} });
}

// 通过流程实例ID获取表单数据
export function getFormDataInfoByProcessInstanceId(params: any) {
  return defHttp.get({ url: Api.GetFormDataInfoByProcessInstanceId + '/' + params.procInstId });
}

// 通过流程实例ID获取发起者基本信息-用于显示表单头部基本信息
export function getStartorBaseInfoVoByProcessInstanceId(params: any) {
  return defHttp.get({ url: Api.GetStartorBaseInfoVoByProcessInstanceId + '/' + params.procInstId });
}

// 加载流程基本信息
export function getModelInfoByModelKey(params: any) {
  return defHttp.get({ url: Api.GetModelInfoByModelKey + '/' + params.modelKey, params:{} });
}

// 获取审批记录
export function getCommentInfosByProcessInstanceId(params: any) {
  return defHttp.get({ url: Api.GetCommentInfosByProcessInstanceId + '/' + params.procInstId, params:{} });
}

// 获取高亮
export function getHighLightedNodeVoByProcessInstanceId(params: any) {
  return defHttp.get({ url: Api.GetHighLightedNodeVoByProcessInstanceId + '/' + params.procInstId, params:{} });
}

// 获取高亮
export function getOneActivityVoByProcessInstanceIdAndActivityId(params: any) {
  return defHttp.get({ url: Api.GetOneActivityVoByProcessInstanceIdAndActivityId + '/' + params.procInstId + '/' + params.elementId, params:{} });
}

// 获取所有系统
export const getApps = (params?: any) => {
  return defHttp.get<AppInfo>({ url: Api.GetApps, params }).then((res: any)=>{
    res.forEach(item=>{
      item.label = item.name;
      item.value = item.sn;
    });
    return Promise.resolve(res);
  })
};

// 我发起的
export function findMyProcessinstancesPagerModel(params: ProcessParams) {
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity.dateRange){
    entity['startTime'] = params.dateRange[0];
    entity['endTime'] = params.dateRange[1];
  }
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
    delete entity['dateRange'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<ProcessParams>;
  return defHttp.post<ProcessInstanceResultModel>({ url: Api.FindMyProcessinstancesPagerModel, params: queryParam });
}

// 我的待办
export function getAppingTasksPagerModel(params: ProcessParams) {
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity.dateRange){
    entity['startTime'] = params.dateRange[0];
    entity['endTime'] = params.dateRange[1];
  }
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
    delete entity['dateRange'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<ProcessParams>;
  return defHttp.post<ProcessInstanceResultModel>({ url: Api.GetAppingTasksPagerModel, params: queryParam });
}

// 已办
export function getApplyedTasksPagerModel(params: ProcessParams) {
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity.dateRange){
    entity['startTime'] = params.dateRange[0];
    entity['endTime'] = params.dateRange[1];
  }
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
    delete entity['dateRange'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<ProcessParams>;
  return defHttp.post<ProcessInstanceResultModel>({ url: Api.GetApplyedTasksPagerModel, params: queryParam });
}

export const getModelInfoVoByPagerModel = (params) =>{
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
  }
  const queryParam = {query, entity};
  return defHttp.post({ url: Api.GetModelInfoVoByPagerModel,  params: queryParam });
}

export const getCategories = () => {
  const result = defHttp.get({url: Api.GetCategories});
  return Promise.resolve(result).then(res => {
    res.forEach(item=>{
      item.key = item.code;
      item.value = item.code;
      item.title = item.name;
      item.label = item.name;
    });
    const treeData = listToTree(res, {id: 'id', children: 'children', pid: 'pid'});
    forEach(treeData, (node) => {
      if (node.children.length === 0) {
        delete node.children;
      }
    }, {id: 'id', children: 'children', pid: 'pid'});
    return treeData;
  });
};
