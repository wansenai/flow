import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type RoleParams = {
  keyword?: string;
  companyId?: string;
};

export type RolePageParams = BasicPageParams & RoleParams;

export type RoleInfo = {
  id: string;
  name: string;
  sn: string;
  companyId: string;
  note: string;
  orderNo: number;
};

export interface RoleListItem extends RoleInfo {
  id: string;
}

/**
 * @description: Request list return value
 */

export type RolePageListGetResultModel = BasicFetchResult<RoleListItem>;
