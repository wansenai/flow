import {defHttp} from '/@/utils/http/axios';
import {listToTree, forEach} from "/@/utils/helper/treeHelper";
import {GetDicInfo, GetDicParams} from "./model/dicTypeModel";
import {CheckExistParams} from "/@/api/model/baseModel";

enum Api {
  GetDicTypes = '/flow/base/dicType/getDicTypes',
  SaveOrUpdate = '/flow/base/dicType/saveOrUpdate',
  Delete = '/flow/base/dicType/delete',
  CheckEntityExist = '/flow/base/dicType/checkEntityExist',
}

export const getDicTypes = (params?: GetDicParams) => {
  const result = defHttp.post<GetDicInfo>({url: Api.GetDicTypes, params});
  return Promise.resolve(result).then(res => {
    res.forEach(item=>{
      item.key = item.id;
      item.value = item.id;
      item.title = item.name;
    });
    const treeData = listToTree(res, {id: 'id', children: 'children', pid: 'pid'});
    forEach(treeData, (node) => {
      if (node.children.length === 0) {
        delete node.children;
      }
    }, {id: 'id', children: 'children', pid: 'pid'});
    return treeData;
  });
};

export const saveOrUpdate = (params?: GetDicInfo) =>
  defHttp.post<GetDicInfo>({url: Api.SaveOrUpdate, params});

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<GetDicInfo>({url: Api.Delete, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });
