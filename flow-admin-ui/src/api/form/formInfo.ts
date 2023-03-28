import {defHttp} from '/@/utils/http/axios';

enum Api {
  GetFormInfoById = '/flow/form/formInfo/getFormInfoById',
  GetFormInfoByModelKey = '/flow/form/formInfo/getFormInfoByModelKey',
  SaveOrUpdate = '/flow/form/formInfo/saveOrUpdate',
}

export const getFormInfoById = (id) => {
  return defHttp.get({url: Api.GetFormInfoById + '?id=' + id});
};
export const getFormInfoByModelKey = (modelKey) => {
  return defHttp.get({url: Api.GetFormInfoByModelKey + '?modelKey=' + modelKey});
};

export const saveFormInfo = (params) =>
  defHttp.post({url: Api.SaveOrUpdate, params}, {isReturnNativeResponse: true});

