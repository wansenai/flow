import { defHttp } from '/@/utils/http/axios';
import {
  LeaveInfo,
  LeaveParams
} from './model/leaveModel';

enum Api {
  GetLeaveById = '/front/hr/attendance/getLeaveById',
  AddLeave = '/front/hr/attendance/addLeave',
}

// 通过ID查询
export function getLeaveById(params: string) {
  return defHttp.get<LeaveInfo>({ url: Api.GetLeaveById + '/' + params, params: {} });
}

// 添加请假申请
export function addLeave(params: LeaveInfo) {
  // delete params.startTime;
  // delete params.endTime;
  // params.startTime = new Date(params.startTime);
  // params.endTime = new Date(params.endTime);
  return defHttp.post<any>({ url: Api.AddLeave, params: params });
}
