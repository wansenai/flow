import { defHttp } from '/@/utils/http/axios';
import { getMenuListByIdParams, getMenuListByIdParamsResultModel, ModuleInfo } from './model/menuModel';

enum Api {
  GetLoginModules = '/flow/main/getLoginModules',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return defHttp.get<getMenuListByIdParamsResultModel>({ url: Api.GetLoginModules });
};

/**
 * @description: Get user menu based on id
 */

export const getLoginModules = (params: getMenuListByIdParams) => {
  return defHttp.get<ModuleInfo>({ url: Api.GetLoginModules, params });
};
