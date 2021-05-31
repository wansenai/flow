import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
import {JobGradeTypeInfo} from "/@/api/org/model/jobGradeTypeModel";

export type JobGradeParams = {
  keyword?: string;
  typeCode?: string;
};

export type JobGradePageParams = BasicPageParams & JobGradeParams;

export type JobGradeInfo = {
  code?: string;
  name?: string;
  orderNo?: number;
  creator?: string;
  createTime?: any;
  updator?: string;
  updateTime?: any;

};
export type BatchJobGradeVo = {
  jobGradeType: JobGradeTypeInfo;
  jobGrades: JobGradeInfo[];
};

/**
 * @description: Request list return value
 */
export type JobGradePageListGetResultModel = BasicFetchResult<JobGradeInfo>;
