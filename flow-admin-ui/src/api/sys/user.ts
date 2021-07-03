import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoByUserIdParams,
  GetUserInfoByUserIdModel,
  GetUserInfoModel, UserInfo,
} from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfoById = '/getUserInfoById',
  GetUserInfoByToken = '/flow/main/getLoginUser',
  GetPermissions = '/flow/main/getPermissions',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: user login api
 */
export function logout() {
  return defHttp.post<any>({url: Api.Logout,});
}

/**
 * @description: getUserInfoById
 */
export function getUserInfoById(params: GetUserInfoByUserIdParams) {
  return defHttp.get<GetUserInfoByUserIdModel>({
    url: Api.GetUserInfoById,
    params,
  });
}
/**
 * @description: getLoginInfo
 */
export function getLoginInfo() {
  return defHttp.get<UserInfo>({
    url: Api.GetUserInfoByToken,
    headers: {contentType:"application/json"}
  });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermissions });
}
