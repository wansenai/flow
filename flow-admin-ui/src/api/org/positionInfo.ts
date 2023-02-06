import {defHttp} from '/@/utils/http/axios';
import {BasicPageSearchParams, CheckExistParams} from "/@/api/model/baseModel";
import {
  BatchPositionInfoVo,
  PositionInfo,
  PositionInfoPageListGetResultModel,
  PositionInfoParams
} from "./model/positionInfoModel";
import {CompanyInfo} from "/@/api/org/model/companyModel";
import {forEach, listToTree} from "/@/utils/helper/treeHelper";

enum Api {
  GetPositionInfos = '/flow/org/positionInfo/getPositionInfoTree',
  GetPositionInfoTree = '/flow/org/positionInfo/getPositionInfoTree',
  GetPagerModel = '/flow/org/positionInfo/getPagerModel',
  SaveOrUpdate = '/flow/org/positionInfo/saveOrUpdate',
  BatchSaveOrUpdatePositionSeqAndPosition = '/flow/org/positionInfo/batchSaveOrUpdatePositionSeqAndPosition',
  Delete = '/flow/org/positionInfo/delete',
  CheckEntityExist = '/flow/org/positionInfo/checkEntityExist',
}

export const getPositionInfoTree = (params?: PositionInfoParams) => {
  const result = defHttp.post<CompanyInfo[]>({url: Api.GetPositionInfoTree, params});
  return Promise.resolve(result).then(res => {
    res.forEach(item=>{
      item.key = item.id;
      item.value = item.id;
      item.title = item.name;
    });
    const treeData = listToTree(res, {id: 'id', children: 'children', pid: 'pid'});
    forEach(treeData, (node) => {
      node.showName = `${node.name} (${node.code})`;
      if(node.sourceType === '1'){
        node.selectable = false;
        node.disabled = true;
      }
      if (node.children.length === 0) {
        delete node.children;
      }
    }, {id: 'id', children: 'children', pid: 'pid'});
    return treeData;
  });
};

export const getPositionInfos = (params: PositionInfoParams) => {
  const result = defHttp.post<PositionInfo>({url: Api.GetPositionInfos, params});

  return Promise.resolve(result).then(res => {
    // const treeData = listToTree(res, {id: 'id', children: 'children', pid: 'pid'});
    // forEach(treeData, (node) => {
    //   node['key'] = node.id;
    //   if (node.children.length === 0) {
    //     delete node.children;
    //   }
    // }, {id: 'id', children: 'children', pid: 'pid'});
    return res;
  }).catch(res=>{
    return Promise.reject('获取数据异常')
  });
};


export const getPagerModel = (params: PositionInfoParams) =>{
  const query = params&&{pageNum: params.pageNum, pageSize: params.pageSize};
  let entity = params||{};
  if(entity){
    delete entity['pageNum'];
    delete entity['pageSize'];
  }
  const queryParam = {query, entity} as BasicPageSearchParams<PositionInfoParams>;
  return defHttp.post<PositionInfoPageListGetResultModel>({ url: Api.GetPagerModel,  params: queryParam });
}

export const saveOrUpdate = (params?: PositionInfo) =>
  defHttp.post<PositionInfo>({url: Api.SaveOrUpdate, params});

export const batchSaveOrUpdatePositionSeqAndPosition = (params?: BatchPositionInfoVo) =>
  defHttp.post<PositionInfo>({url: Api.BatchSaveOrUpdatePositionSeqAndPosition, params});

export const checkEntityExist = (params?: CheckExistParams) =>
  defHttp.post<boolean>({ url: Api.CheckEntityExist, params });

export const deleteById = (params?: Array<string>) =>
  defHttp.post<PositionInfo>({url: Api.Delete, params});
