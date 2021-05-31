
export type AclInfo = {
  id?: string;
  releaseId: string;
  moduleId?: string;
  moduleSn?: string;
  aclState?: string;
  userNo?: string;
};

enum CheckedEnum {
  No = 0,
  Yes = 1,
}


export type AclSaveByModuleParam = {
  aclInfo: AclInfo;
  position?: number;
  checked: CheckedEnum;
};


export type AclSaveByGroupModuleParam = {
  groupId: string;
  moduleId: string;
  aclList: Array<number>;
};
