import {defHttp} from '/@/utils/http/axios';
import {listToTree, forEach} from "/@/utils/helper/treeHelper";
import {CategoryInfo, CategoryParams} from "./model/categoryModel";
import {CheckExistParams} from "/@/api/model/baseModel";

enum Api {
  GetCategories = '/flow/base/category/getCategories',
  SaveOrUpdate = '/flow/base/category/saveOrUpdate',
  Delete = '/flow/base/category/delete',
  CheckEntityExist = '/flow/base/category/checkEntityExist',
}

export const getCategories = (params?: CategoryParams) => {
  const result = defHttp.post<CategoryInfo>({url: Api.GetCategories, params});
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

export const saveOrUpdate = (params?: CategoryInfo) =>
  defHttp.post<CategoryInfo>({url: Api.SaveOrUpdate, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<CategoryInfo>({url: Api.Delete, params});
