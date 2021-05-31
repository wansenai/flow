/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * @description: Get user information
 */
export interface GetUserInfoByUserIdParams {
  userId: string | number;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

export interface UserInfo {
  id: string;
  realName: string;
  userNo: string;
  username: string;
  password: string;
  tel: string;
  mobile: string;
  phone: string;
  email: string;
  image: string;
  companyId: string;
  departmentId: string;
  sex: Number;
  address: string;
  fax: string;
  failMonth: string;
  failureTime: string;
  pwdFtime: string;
  pwdInit: string;
  aclTimestamp: string;
  appIds: string;
  deptName: string;
  failureTimeStr: string;
  pwdFtimeStr: string;
  failFlag: string;
  keyword: string;
  companyName: string;
}
export interface ModuleInfo {
  id: string;
  name: string;
  url: string;
  sn: string;
  status: string;
  image: string;
  orderNo: string;
  pid: string;
  appId: string;
  state: Number;
  component: string;
  pvs: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number;
  token: string;
  role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoByUserIdModel {
  roles: RoleInfo[];
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  realName: string;
  // 头像
  avatar: string;
  // 介绍
  desc?: string;
}
/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[];
  user: UserInfo;
  modules: ModuleInfo[];
}
