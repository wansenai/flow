export type GetDicParams = {
  keyword?: string;
};

export type GetDicInfo = {
  id: string;
  pid: string;
  name: string;
  code: string;
  sort: Number;
};

export interface GetDicListItem extends GetDicInfo {
  id: string;
}
