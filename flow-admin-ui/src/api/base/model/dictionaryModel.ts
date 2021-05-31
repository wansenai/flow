import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type RoleParams = {
  keyword?: string;
};

export type DictionaryPageParams = BasicPageParams & RoleParams;

export type DictionaryInfo = {
  id: string;
  dicTypeId: string;
  code: string;
  ename: string;
  cname: string;
  remark: string;
};

export interface DictionaryListItem extends DictionaryInfo {
  id: string;
}

/**
 * @description: Request list return value
 */

export type DictionaryPageListGetResultModel = BasicFetchResult<DictionaryInfo>;
