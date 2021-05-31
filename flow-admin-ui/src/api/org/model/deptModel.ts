import { BasicFetchResult } from '/@/api/model/baseModel';

export type DeptSearchParams = {
  keyword?: string;
  companyIds?: string;
  companyId?: string;
};

export type DeptInfo = {
  id: string;
  companyId: string;
  name: string;
  code: string;
  note: string;
  pid: string;
  orderNo: number;
  leaderCode: string;
};

export interface DeptListItem extends DeptInfo {
  companyIds: string;
}

/**
 * @description: Request list return value
 */

export type ListGetResultModel = BasicFetchResult<DeptListItem>;
