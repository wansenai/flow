import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import {AppRouteRecordRaw} from "/@/router/types";

const PROCESS_ROUTER: AppRouteRecordRaw = {
  path: '/process',
  name: "process",
  component: LAYOUT,
  redirect: '/process/list',
  meta: {
    title: '系统主页',
    hideBreadcrumb: true,
  },
  children: [
    {
      path: 'list',
      name: "processList",
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        affix: true,
        title: "主页",
        hideBreadcrumb: true,
      },
    },
  ],
};

export default PROCESS_ROUTER;
