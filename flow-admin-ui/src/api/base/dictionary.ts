import {defHttp} from '/@/utils/http/axios';
import {DictionaryInfo, DictionaryPageListGetResultModel, DictionaryPageParams} from "./model/dictionaryModel";
import {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";

enum Api {
  DictionaryPageList = '/flow/base/dictionary/getPagerModel',
  DictionaryItemPageList = '/flow/base/dicItem/getPagerModel',
  SaveOrUpdate = '/flow/base/dictionary/saveOrUpdate',
  SaveOrUpdateItem = '/flow/base/dicItem/saveOrUpdate',
  Delete = '/flow/base/dictionary/delete',
  DeleteItem = '/flow/base/dicItem/delete',
  CheckEntityExist = '/flow/base/dictionary/checkEntityExist',
  CheckDictItemEntityExist = '/flow/base/dicItem/checkEntityExist',
}

export const dictionaryPageList = (params: DictionaryPageParams) =>{
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<DictionaryPageParams>;
  return defHttp.post<DictionaryPageListGetResultModel>({ url: Api.DictionaryPageList,  params: queryParam });
}
export const dictionaryItemPageList = (params: DictionaryPageParams) =>{
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<DictionaryPageParams>;
  return defHttp.post<DictionaryPageListGetResultModel>({ url: Api.DictionaryItemPageList,  params: queryParam });
}

export const saveOrUpdate = (params?: DictionaryInfo) =>
  defHttp.post<DictionaryInfo>({url: Api.SaveOrUpdate, params});

export const saveOrUpdateItem = (params?: DictionaryInfo) =>
  defHttp.post<DictionaryInfo>({url: Api.SaveOrUpdateItem, params});

export const deleteByIds = (params: string) =>
  defHttp.post<DictionaryInfo>({url: Api.Delete + '/', params});

export const deleteItemByIds = (params: string) =>
  defHttp.post<DictionaryInfo>({url: Api.DeleteItem + "/", params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });

export const checkDictItemEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckDictItemEntityExist, params });

