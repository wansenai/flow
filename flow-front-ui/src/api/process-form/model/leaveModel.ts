import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';


/**
 * @description: Get process information
 */
export interface LeaveParams extends BasicPageParams{

}

export interface LeaveInfoResultModel extends LeaveInfo{

}

export interface LeaveInfo{
  id: string;
  //流程实例id
  processInstanceId: string;
  //申请人
  applyerCode: string;
  //标题
  title: string;
  //类型
  type: string;
  //请教天数
  days: string;
  //开始时间
  startTime: string;
  //结束时间
  endTime: string;
  //公司id
  companyId: string;
  //公司名称
  companyName: string;
  //部门id
  deptId: string;
  //部门名称
  deptName: string;
  //说明
  note: string;

}
