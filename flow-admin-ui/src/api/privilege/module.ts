import { ModuleParams, ModuleInfo } from './model/moduleModel';

import { defHttp } from '/@/utils/http/axios';
import {listToTree, forEach} from "/@/utils/helper/treeHelper";
import {CheckExistParams} from "/@/api/model/baseModel";

enum Api {
  ModuleList = '/flow/privilege/module/getModules',
  SaveOrUpdate = '/flow/privilege/module/saveOrUpdate',
  Delete = '/flow/privilege/module/delete',
  SavePValue = '/flow/privilege/module/addPriVal',
  CheckEntityExist = '/flow/privilege/module/checkEntityExist',
}

export const getModules = (params?: ModuleParams) =>
{
  const result = defHttp.post<ModuleInfo>({ url: Api.ModuleList, params });
  return Promise.resolve(result).then((res: any)=>{
    const treeData = listToTree(res, {id:'id', children:'children', pid:'pid'});
    forEach(treeData, (node) => {
      if(node.children.length===0){
        delete node.children;
      }
    }, {id:'id', children:'children', pid:'pid'});
    return treeData;
  });
};

export const saveOrUpdate = (params?: ModuleInfo) =>
  defHttp.post<ModuleInfo>({ url: Api.SaveOrUpdate, params });

export const savePValue = (params?: ModuleInfo) =>
  defHttp.post<ModuleInfo>({ url: Api.SavePValue, params });

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<ModuleInfo>({ url: Api.Delete, params });

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });

