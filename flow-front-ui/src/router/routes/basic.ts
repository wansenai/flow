import type { AppRouteRecordRaw } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

import {
  REDIRECT_NAME,
  LAYOUT,
  EXCEPTION_COMPONENT,
  PAGE_NOT_FOUND_NAME,
} from '/@/router/constant';

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: '/:path(.*)*',
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_COMPONENT,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true,
      },
    },
  ],
};

export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: '/redirect',
  component: LAYOUT,
  name: 'RedirectTo',
  meta: {
    title: REDIRECT_NAME,
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: REDIRECT_NAME,
      component: () => import('/@/views/sys/redirect/index.vue'),
      meta: {
        title: REDIRECT_NAME,
        hideBreadcrumb: true,
      },
    },
  ],
};

export const HOME_ROUTE: AppRouteRecordRaw = {
  path: '/',
  name: "HOME",
  component: LAYOUT,
  redirect: '/workbench',
  meta: {
    title: '系统主页',
    hideMenu: false,
    hideBreadcrumb: true,
  },
  children: [
    {
      path: '/workbench',
      name: "workbench",
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        affix: true,
        title: "主页",
        hideBreadcrumb: true,
      },
    },
    {
      path: '/hr-service',
      name: 'hrService',
      component: () => import('/@/views/dashboard/hr-service/index.vue'),
      meta: {
        title: '人资频道',
        affix: true,
        icon: 'bx:bx-home',
      },
    }
  ],
};


/*
* const dashboardRoute = {
  path: '/workbench',
  name: 'workbench',
  component: '/dashboard/workbench/index',
  meta: {
    title: '工作台',
    affix: true,
    icon: 'bx:bx-home',
  },
};
// single
const hrServiceRoute = {
  path: '/hr-service',
  name: 'hrService',
  component: '/dashboard/hr-service/index',
  meta: {
    title: '人资频道',
    affix: true,
    icon: 'bx:bx-home',
  },
};

// single
const itServiceRoute = {
  path: '/it-service',
  name: 'itService',
  component: '/dashboard/it-service/index',
  meta: {
    title: 'IT频道',
    affix: true,
    icon: 'bx:bx-home',
  },
};

// single
const fncServiceRoute = {
  path: '/fnc-service',
  name: 'fncService',
  component: '/dashboard/fnc-service/index',
  meta: {
    title: '财务频道',
    affix: true,
    icon: 'bx:bx-home',
  },
};

// single
const newsNoticeRoute = {
  path: '/news-notice',
  name: 'newsNotice',
  component: '/dashboard/news-notice/index',
  meta: {
    title: '新闻公告',
    affix: true,
    icon: 'bx:bx-home',
  },
};
* */

export const ERROR_LOG_ROUTE: AppRouteRecordRaw = {
  path: '/error-log',
  name: 'ErrorLog',
  component: LAYOUT,
  redirect: '/error-log/list',
  meta: {
    title: 'ErrorLog',
    hideBreadcrumb: true,
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'list',
      name: 'ErrorLogList',
      component: () => import('/@/views/sys/error-log/index.vue'),
      meta: {
        title: t('routes.basic.errorLogList'),
        hideBreadcrumb: true,
        currentActiveMenu: '/error-log',
      },
    },
  ],
};
