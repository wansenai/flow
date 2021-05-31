import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoByUserIdParams,
  GetUserInfoByUserIdModel,
} from './model/userModel';

import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  Login = '/login',
  GetUserInfoById = '/front/user/getLoginUser',
  GetPermCodeByUserId = '/front/getPermCodeByUserId',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params: {username: params.username, pwd: params.password},
    },
    {
      errorMessageMode: mode,
    }
  );
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

export function getPermCodeByUserId(params: GetUserInfoByUserIdParams) {
  return Promise.resolve({});
  /*return defHttp.get<string[]>({
    url: Api.GetPermCodeByUserId,
    params,
  });*/
}
