import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type AppInfo = {
  id: string;
  name: string;
  sn: string;
  url: string;
  indexUrl: string;
  image: string;
  note: string;
  orderNo: number;
};

export interface BaseProcessVo{
  formTitle?: string;
  /**
   * 任务id 必填
   */
  taskId?: string;
  /**
   * 节点id
   */
  activityId?: string;
  activityName?: string;
  /**
   * 流程实例状态 必填
   */
  processStatusEnum?: string;
  /**********************审批意见的参数**********************/
  /**
   * 操作人code 必填
   */
  userCode?: string;
  /**
   * 审批意见 必填
   */
  message?: string;
  /**
   * 审批意见类型 必填
   */
  commentTypeEnum?: string;

  /**
   * 流程实例的id
   */
  processInstanceId?: string;
}

/**
 * @description: Get process information
 */
export interface ProcessParams extends BasicPageParams{
  /**
   * 用户的工号
   */
  userCode?: string;
  /**
   * 应用标识
   */
  appSn?: string;
  /**
   * 表单名称
   */
  formName?: string;
  /**
   * 开始时间
   */
  startTime?: string;
  /**
   * 结束时间
   */
  endTime?: string;
  /**
   * 业务系统的id
   */
  businessKey?: string;
  /**
   * 排序字段 1 升序  0 降序
   */
  orderFlag ?: string;
  /**
   * 流程实例ID
   */
  processInstanceId?: string;

  /**
   * 发起人工号集合
   */
  startedUserIds?: string;
  /**
   * 流程定义KEY
   */
  processDefinitionKey?: string;
  /**
   * 流程状态
   */
  processType?: string;

  /**
   * 发起人所在部门ID
   * @return
   */
  deptId?: string;
  /**
   * 发起人所在公司ID
   * @return
   */
  companyId?: string;
}

export interface ProcessInstanceResultModel{
  /**
   * 流程实例id
   */
  processInstanceId?: string;
  /**
   * 流程定义id
   */
  processDefinitionId?: string;
  /**
   * 流程定义的名称
   */
  processDefinitionName?: string;
  /**
   * 流程定义的key
   */
  processDefinitionKey?: string;
  /**
   * 流程定义类型
   */
  processDefinitionType?: string;
  /**
   * 流程定义的版本号
   */
  processDefinitionVersion?: string;
  /**
   * 分类编号
   */
  categoryCode?: string;
  /**
   * 部署id
   */
  deploymentId?: string;
  /**
   * 业务表单的id
   */
  businessKey?: string;
  /**
   * 办理人
   */
  assignees?: string;
  /**
   * 应用id
   */
  appId?: string;
  /**
   * 应用标识
   */
  appSn?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 挂起状态   1激活 2挂起   @see ProcessInstanceStatusEnum
   */
  pState?: string;
  /**
   * 删除标记
   */
  reason?: string;
  /**
   * 创建人的id
   */
  startedUserId?: string;
  /**
   * 创建人的名称
   */
  startedUserName?: string;
  /**
   * 创建人ids
   */
  startedUserIds?: any;
  /**
   * 创建人部门
   */
  startedUserDept?: string;
  /**
   * 创建人部门名称
   */
  startedUserDeptName?: string;
  /**
   * 创建人单位
   */
  startedUserCom?: string;
  /**
   * 创建人单位名称
   */
  startedUserComName?: string;
  /**
   * 默认所有的
   */
  finishFlag?: string;
  /**
   *
   * 流程实例状态 @see {@link ProcessStatusEnum}
   */
  processStatus?: string;
  /**
   * 翻译后的流程实例状态名称
   */
  processStatusName?: string;
  /**
   * 表单的名称
   */
  formName?: string;
  /**
   * 流程创建人姓名
   */
  startPersonName?: string;
  /**
   * 流程的创建时间
   */
  startTime?: string;
  /**
   * 结束时间
   */
  endTime?: string;
  startTimeStr?: string;
  endTimeStr?: string;
  /**
   * 系统名称
   */
  systemName?: string;
  /**
   * 业务系统的url
   */
  businessUrl?: string;
  /**
   * 总耗时
   */
  totalTime?: string;
  /**
   * 当前办理人
   */
  currentAssignees?: string;
  /**
   * 当前办理人工号
   */
  currentAssigneeNos?: string;
  /**
   * 查询类型 1单位2部门3人员  复用： 1已发2已办3待办
   */
  queryType?: string;
  newVersion?: string;
  proInstanceIdList?: any;
  tableName?: string;
}
