import {defHttp} from '/@/utils/http/axios';
import {CheckExistParams} from "/@/api/model/baseModel";
import {PositionSeqInfo, PositionSeqParams} from "./model/positionSeqModel";
import {CategoryInfo} from "/@/api/base/model/categoryModel";
import {forEach, listToTree} from "/@/utils/helper/treeHelper";

enum Api {
  GetPositionSeqs = '/flow/org/positionSeq/getPositionSeqs',
  SaveOrUpdate = '/flow/org/positionSeq/saveOrUpdate',
  Delete = '/flow/org/positionSeq/deleteById',
  CheckEntityExist = '/flow/org/positionSeq/checkEntityExist',
}

export const getPositionSeqs = (params: PositionSeqParams) => {
  const result = defHttp.post<CategoryInfo>({url: Api.GetPositionSeqs, params});
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

export const saveOrUpdate = (params?: PositionSeqInfo) =>
  defHttp.post<PositionSeqInfo>({url: Api.SaveOrUpdate, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });

export const deleteByIds = (params?: Array<string>) =>
  defHttp.post<PositionSeqInfo>({url: Api.Delete, params});
