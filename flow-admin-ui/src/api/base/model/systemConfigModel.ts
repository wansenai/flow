import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type SystemConfigParams = {
  keyword?: string;
};

export type SystemConfigPageParams = BasicPageParams & SystemConfigParams;

export type SystemConfigInfo = {
  id: string;
  configName: string;
  configSn: string;
  configKey: string;
  configValue: string;
  configOrder: number;
  remark: string;
  image: string;
};

/**
 * @description: Request list return value
 */
export type SystemConfigPageListGetResultModel = BasicFetchResult<SystemConfigInfo>;
