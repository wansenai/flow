import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: "工作台",
    path: '/dashboard',

    children: [
      {
        path: 'workbench',
        name: t('routes.dashboard.workbench'),
      },
    ],
  },
};
export default menu;
