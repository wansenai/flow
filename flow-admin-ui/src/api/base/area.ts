import {defHttp} from '/@/utils/http/axios';
import {listToTree, forEach} from "/@/utils/helper/treeHelper";
import {AreaInfo, AreaParams, GetByPcodeParam} from "./model/areaModel";
import {CheckExistParams} from "/@/api/model/baseModel";

enum Api {
  GetAreas = '/flow/base/area/getAreas',
  SaveOrUpdate = '/flow/base/area/saveOrUpdate',
  Delete = '/flow/base/area/delete',
  GetAreasByPcode = '/flow/base/area/getAreasByPcode',
  CheckEntityExist = '/flow/base/area/checkEntityExist',
}

export const getAreas = (params?: AreaParams) => {
  const result = defHttp.post<AreaInfo>({url: Api.GetAreas, params});
  return Promise.resolve(result).then(res => {
    const treeData = listToTree(res, {id: 'code', children: 'children', pid: 'pcode'});
    forEach(treeData, (node) => {
      if (node.children.length === 0) {
        delete node.children;
      }
    }, {id: 'code', children: 'children', pid: 'pcode'});
    return treeData;
  });
};

export const getAreasByPcode = (params?: GetByPcodeParam) => {
  return defHttp.get<AreaInfo>({url: Api.GetAreasByPcode, params});
};

export const saveOrUpdate = (params?: AreaInfo) =>
  defHttp.post<AreaInfo>({url: Api.SaveOrUpdate, params});

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<AreaInfo>({url: Api.Delete + '/', params: params});


export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });
