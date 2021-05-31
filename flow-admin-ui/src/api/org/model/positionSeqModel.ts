import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type PositionSeqParams = {
  keyword?: string;
};

export type PositionSeqPageParams = BasicPageParams & PositionSeqParams;

export type PositionSeqInfo = {
  name?: string;
  status?: number;
  orderNo?: number;
  note?: string;
  creator?: string;
  createTime?: any;
  updator?: string;
  updateTime?: any;

};

/**
 * @description: Request list return value
 */
export type PositionSeqPageListGetResultModel = BasicFetchResult<PositionSeqInfo>;
