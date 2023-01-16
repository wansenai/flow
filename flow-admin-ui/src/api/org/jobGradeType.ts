import {defHttp} from '/@/utils/http/axios';
import {CheckExistParams} from "/@/api/model/baseModel";
import {JobGradeTypeInfo, JobGradeTypeParams} from "./model/jobGradeTypeModel";
import {CategoryInfo, CategoryParams} from "/@/api/base/model/categoryModel";
import {forEach, listToTree} from "/@/utils/helper/treeHelper";

enum Api {
  GetJobGradeTypes = '/flow/org/jobGradeType/getJobGradeTypes',
  SaveOrUpdate = '/flow/org/jobGradeType/saveOrUpdate',
  Delete = '/flow/org/jobGradeType/delete',
  CheckEntityExist = '/flow/org/jobGradeType/checkEntityExist',
}

export const getJobGradeTypes = (params: JobGradeTypeParams) => {
  const result = defHttp.post<JobGradeTypeInfo>({url: Api.GetJobGradeTypes, params});
  return result;
};

export const getJobGradeTypesToTree = (params?: CategoryParams) => {
  const result = defHttp.post<JobGradeTypeInfo>({url: Api.GetJobGradeTypes, params});
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

export const saveOrUpdate = (params?: JobGradeTypeInfo) =>
  defHttp.post<JobGradeTypeInfo>({url: Api.SaveOrUpdate, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });

export const deleteById = (params?: Array<string>) =>
  defHttp.post<JobGradeTypeInfo>({url: Api.Delete, params});
