export type AreaParams = {
  keyword?: string;
};

export type AreaInfo = {
  id: string;
  pid: string;
  name: string;
  code: string;
  frontShow: string;
  shortName: string;
  note: string;
  orderNo: Number;
  companyId: string;
};
export type GetByPcodeParam = {
  pcode: string;
};

export interface AreaListItem extends AreaInfo {
  id: string;
}
