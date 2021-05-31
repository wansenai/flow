import { BasicFetchResult } from '/@/api/model/baseModel';

export type CompanyParams = {
  keyword?: string;
};

export type CompanyInfo = {
  id: string;
  pid: string;
  cname: string;
  shortName: string;
  status: Number;
  ename: string;
  orderNo: Number;
  code: string;
  descr: string;
};

export interface CompanyListItem extends CompanyInfo {
  id: string;
}

/**
 * @description: Get menu interface
 */
export interface DeleteByIdsParams {
  appIds: [];
}

/**
 * @description: Request list return value
 */

export type CompanyListGetResultModel = BasicFetchResult<CompanyListItem>;
