import {BasicFetchResult} from '/@/api/model/baseModel';

export type AppPrivilegeValueParams = {
  name?: string;
  status?: string;
};

export type AppPrivilegeValueInfo = {
  id: string;
  name: string;
  position: string;
  orderNo: number;
  remark: string;
};

export interface AppPrivilegeValueListItem extends AppPrivilegeValueInfo {
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

export type AppPageListGetResultModel = BasicFetchResult<AppPrivilegeValueListItem>;
