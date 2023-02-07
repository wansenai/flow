import {defHttp} from '/@/utils/http/axios';
import {listToTree, forEach} from "/@/utils/helper/treeHelper";
import {CompanyInfo, CompanyParams} from "/@/api/org/model/companyModel";
import {CheckExistParams} from "/@/api/model/baseModel";

enum Api {
  CompanyList = '/flow/org/company/getCompanies',
  SaveOrUpdate = '/flow/org/company/saveOrUpdate',
  Delete = '/flow/org/company/delete',
  CheckEntityExist = '/flow/org/company/checkEntityExist',
}

export const getCompanies = (params?: CompanyParams) => {
  const result = defHttp.post<CompanyInfo>({url: Api.CompanyList, params});
  return Promise.resolve(result).then(res => {
    res.forEach(item=>{
      item.key = item.id;
      item.value = item.id;
      item.title = item.shortName;
      item.icon = 'bx:building-house';
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

export const saveOrUpdate = (params?: CompanyInfo) =>
  defHttp.post<CompanyInfo>({url: Api.SaveOrUpdate, params});

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<CompanyInfo>({url: Api.Delete, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });
