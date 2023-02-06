import {defHttp} from '/@/utils/http/axios';
import {listToTree, forEach} from "/@/utils/helper/treeHelper";
import {DeptInfo, DeptSearchParams} from "./model/deptModel";
import {CheckExistParams} from "/@/api/model/baseModel";

enum Api {
  DeptList = '/flow/org/department/getAll',
  GetOrgTree = '/flow/org/department/getOrgTree',
  SaveOrUpdate = '/flow/org/department/saveOrUpdate',
  Delete = '/flow/org/department/delete',
  CheckEntityExist = '/flow/org/department/checkEntityExist',
}

export const getDepts = (params?: DeptSearchParams) => {
  const result = defHttp.post<DeptInfo>({url: Api.DeptList, params});
  return Promise.resolve(result).then((res:any) => {
    res.forEach(item=>{
      item.key = item.id;
      item.value = item.id;
      item.title = item.name;
      item.label = item.name;
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

export const getOrgTree = () => {
  const result = defHttp.get<DeptInfo>({url: Api.GetOrgTree});
  return Promise.resolve(result).then((res:any) => {
    res.forEach(item=>{
      item.key = item.id;
      item.value = item.id;
      item.title = item.shortName;
      if (item.sourceType == 1) {
        item.icon = 'bx:building-house';
      } else if (item.sourceType == 2) {
        item.icon = 'ant-design:cluster-outlined';
      }
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

export const saveOrUpdate = (params?: DeptInfo) =>
  defHttp.post({url: Api.SaveOrUpdate, params});

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post({url: Api.Delete, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });
