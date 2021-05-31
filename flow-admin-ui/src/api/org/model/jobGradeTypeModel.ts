import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type JobGradeTypeParams = {
  keyword?: string;
  companyId?: string;
};

export type JobGradeTypePageParams = BasicPageParams & JobGradeTypeParams;

export type JobGradeTypeInfo = {
  name: string;
  companyId: string;
  status: number;
  note: string;
  creator?: string;
  createTime?: any;
  updator?: string;
  updateTime?: any;

};

/**
 * @description: Request list return value
 */
export type JobGradeTypePageListGetResultModel = BasicFetchResult<JobGradeTypeInfo>;
