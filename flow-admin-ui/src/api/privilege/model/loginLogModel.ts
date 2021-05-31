import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type LoginLogParams = {
  keyword?: string;
  startTimeStr?: string;
  endTimeStr?: string;
  dateRange?: Array<string>;
};

export type LoginLogPageParams = BasicPageParams & LoginLogParams;

export type LoginLogInfo = {
  ip: string;
  operationId: string;
  operationUsername: string;
  operationPerson: string;
  operationContent: string;
  operationTime: any;
  
};

/**
 * @description: Request list return value
 */
export type LoginLogPageListGetResultModel = BasicFetchResult<LoginLogInfo>;
