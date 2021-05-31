import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type GroupParams = {
  keyword?: string;
};

export type GroupPageParams = BasicPageParams & GroupParams;

export type GroupInfo = {
  id: string;
  name: string;
  sn: string;
  note: string;
};

export type GroupUsers = {
  groupId: string,
  users: Array<Object>
};

export interface GroupListItem extends GroupInfo {
  id: string;
}

/**
 * @description: Request list return value
 */

export type GroupPageListGetResultModel = BasicFetchResult<GroupListItem>;
