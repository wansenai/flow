import {defHttp} from '/@/utils/http/axios';
import {AclInfo, AclSaveByGroupModuleParam, AclSaveByModuleParam} from "/@/api/privilege/model/aclModel";
import {ModuleInfo, ModuleParams} from "/@/api/privilege/model/moduleModel";
import {forEach, listToTree} from "/@/utils/helper/treeHelper";

enum Api {
  SetAcl = '/flow/privilege/acl/setAcl',
  GetModuleAclsByGroupId = '/flow/privilege/acl/getModuleAclsByGroupId',
  SetAllAcl = '/flow/privilege/acl/setAllAcl',
  SetAclModuleList = '/flow/privilege/acl/setAclModuleList',
  SetAclByModule = '/flow/privilege/acl/setAclByModule',
}

export const getModuleAclsByGroupId = (params: any) =>
{
  const result = defHttp.get<ModuleInfo>({ url: Api.GetModuleAclsByGroupId+"/"+params.groupId});
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

export const setAcl = (params: AclSaveByModuleParam) =>
  defHttp.post<AclInfo>({url: Api.SetAcl+'/'+params.position+'/'+params.checked, params: params.aclInfo});

export const setAllAcl = (params: AclSaveByModuleParam) =>
  defHttp.post<AclInfo>({url: Api.SetAllAcl+`/${params.checked}`, params: params.aclInfo});

export const setAclByModule = (params: AclSaveByModuleParam) =>
  defHttp.post<AclInfo>({url: Api.SetAclByModule+'/'+params.checked, params: params.aclInfo});

export const setAclModuleList = (params: AclSaveByGroupModuleParam) =>
  defHttp.post<AclInfo>({url: Api.SetAclModuleList+`/${params.moduleId}/${params.groupId}`, params: params.aclList});
