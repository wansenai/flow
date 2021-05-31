import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type PersonalParams = BasicPageParams & {
  keyword?: string;
  showRoles?: boolean;
};

export type PersonalPageParams = BasicPageParams & PersonalParams;

export interface PersonalInfo {
  id: string,
  username: string,
  realName: string,
  sex: number,
  password: string;
  tel: string;
  mobile: string;
  email: string;
  image: string;
  address: string;
}

export interface PersonalRoleDeleteParam {
  personalId: string;
  roleId: string;
}

export interface PersonalLeaderParam {
  id: string;
  leaderCode: string;
}

export interface PersonalListItem {
  id: string;
  account: string;
  email: string;
  nickname: string;
  role: number;
  createTime: string;
  remark: string;
  status: number;
}

/**
 * @description: Request list return value
 */
export type PersonalListGetResultModel = BasicFetchResult<PersonalListItem>;
