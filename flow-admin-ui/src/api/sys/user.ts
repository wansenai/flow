import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/login',
  Logout = '/logout',
  GetUserInfo = '/flow/main/getLoginUser',
  GetUserInfoById = '/getUserInfoById',
  GetPermissions = '/flow/main/getPermissions',
  GetSystemSettings = '/getSystemSettings',
}

/**
 * 获取配置信息
 */
export function getSystemSettings() {
  return defHttp.get<LoginResultModel>(
    {
      url: Api.GetSystemSettings,
    }
  );
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
    },
  ).then(res=>{
    return Promise.resolve({token: res});
  });
}

/**
 * @description: getUserInfo
 */
export function getUserInfoById(params: any) {
  return defHttp.get({
    url: Api.GetUserInfoById,
    params,
  });
}
/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermissions });
}

export function doLogout() {
  return defHttp.post({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
