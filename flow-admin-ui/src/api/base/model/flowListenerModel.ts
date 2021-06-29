import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type AppParams = {
  keyword?: string;
};

export type AppPageParams = BasicPageParams & AppParams;

export type AppInfo = {
  id: string;
  name: string;
  sn: string;
  url: string;
  indexUrl: string;
  image: string;
  note: string;
  orderNo: number;
};

export interface AppListItem extends AppInfo {
  id: string;
}

/**
 * @description: Request list return value
 */

export type AppPageListGetResultModel = BasicFetchResult<AppListItem>;
