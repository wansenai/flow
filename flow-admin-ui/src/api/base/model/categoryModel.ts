export type CategoryParams = {
  keyword?: string;
};

export type CategoryInfo = {
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

export interface CategoryListItem extends CategoryInfo {
  id: string;
}
