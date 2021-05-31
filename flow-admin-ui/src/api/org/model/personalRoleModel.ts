import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
import {PersonalInfo} from "/@/api/org/model/personalModel";


export type PersonalRoleParams = {
  roleId: string;
  id: string;
  personalId: string;
  personalCode: string;
  personalList: [];
};
