import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
import {PositionSeqInfo} from "/@/api/org/model/positionSeqModel";

export type PositionInfoParams = {
  keyword?: string;
};

export type PositionInfoPageParams = BasicPageParams & PositionInfoParams;

export type PositionInfo = {
  positionSeqCode?: string;
  name?: string;
  orderNo?: number;
  status?: number;
  superiorCode?: string;
  startDate?: any;
  creator?: string;
  createTime?: any;
  updator?: string;
  updateTime?: any;

};
export type BatchPositionInfoVo = {
  positionSeq: PositionSeqInfo;
  positionInfos: PositionInfo[];
};

/**
 * @description: Request list return value
 */
export type PositionInfoPageListGetResultModel = BasicFetchResult<PositionInfo>;
