import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type ModelInfoParams = BasicPageParams & {
  keyword?: string;
};

export type ModelInfoPageParams = BasicPageParams & ModelInfoParams;

export interface ModelInfo {
  id: string,
  modelId: string,
  name: string,
  modelKey: string,
  modelType: string,
  appSn: string,
  categoryCode: string,
  status: number,
  extendStatus: string,
  ownDeptId: string,
  ownDeptName: string,
  flowOwnerNo: string,
  flowOwnerName: string,
  processDockingNo: string,
  processDockingName: string,
  applyCompanyId: string,
  showStatus: number,
  appliedRange: string,
  businessUrl: string,
  functionRange: string,
  orderNo: number,
  userIds: string,
  userNames: string,
  processDefinitionId: string,

}

export interface ModelInfoListItem extends ModelInfo{

}

/**
 * @description: Request list return value
 */
export type ModelInfoListGetResultModel = BasicFetchResult<ModelInfoListItem>;
