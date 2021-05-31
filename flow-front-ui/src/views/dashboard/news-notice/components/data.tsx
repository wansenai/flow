import {BasicColumn} from "/@/components/Table";
import {Badge} from "ant-design-vue";

interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
}

interface NavItem {
  title: string;
  sn?: string;
  icon: string;
  color: string;
  url?: string;
  badgeCount?: number;
}

interface DynamicInfoItem {
  id: string;
  title: string;
  hasRead: boolean;
  date: string;
  url: string;
}
export const bannerList:[] = [
  {
    id: '1',
    title: '奋力打造践行习近平新时代中国特色社会主义思想重要阵地',
    imgSrc: '/resource/temp/imgs/banners/banner-1.jpg',
    url: '',
  },
  {
    id: '2',
    title: '抢抓机遇巩固优势推动公司高质量发展',
    imgSrc: '/resource/temp/imgs/banners/banner-2.jpg',
    url: '',
  },
  {
    id: '3',
    title: '中国石化位居2020年中央企业品牌建设能力排行榜第一',
    imgSrc: '/resource/temp/imgs/banners/banner-3.jpg',
    url: '',
  },
];


export const noticeInfoItems: DynamicInfoItem[] = [
  {
    id: 'dynamic-avatar-1|svg',
    title: `上海石化1000吨/年碳纤维装置进入开车准备阶段`,
    date: '2021-05-20',
    hasRead: true,
    url: `#`,
  },
  {
    id: 'dynamic-avatar-1|svg11',
    title: `中国石化2020年半年度报告`,
    date: '2021-05-20',
    hasRead: true,
    url: `#`,
  },
  {
    id: 'dynamic-avatar-1|svg1221',
    title: `2019年集团公司年报`,
    date: '2021-05-20',
    hasRead: true,
    url: `#`,
  },
  {
    id: 'dynamic-avatar-2|svg',
    title: `集团公司2019年社会责任报告`,
    date: '2021-05-20',
    hasRead: true,
    url: '#',
  },
];

export const todoTableSchema: BasicColumn[] = [
  {
    title: '状态',
    width: 80,
    dataIndex: 't3',
    customRender: ({ record }) => {
      return <Badge status="success" text={record.processStatusName} />;
    },
  },
  {
    title: '流程标题',
    dataIndex: 'formName',
    align: 'left',
    slots: {
      customRender: 'nameRender'
    },
  },
  {
    title: '提交人	',
    width: 100,
    dataIndex: 'startPersonName',
    align: 'left',
  },
  {
    title: '提交时间',
    width: 150,
    dataIndex: 'startTime',
  },
];
export const trainTableSchema: BasicColumn[] = [
  {
    title: '课程名称',
    align: 'left',
    dataIndex: 'name',
  },
  {
    title: '讲师',
    dataIndex: 'teacher',
    width: 80,
    align: 'left',
  },
  {
    title: '课程类型',
    width: 100,
    dataIndex: 'courseType',
    align: 'left',
  },
  {
    title: '授课时间',
    width: 150,
    dataIndex: 'startTime',
  },
];
export const recruitTableSchema: BasicColumn[] = [
  {
    title: '岗位',
    align: 'left',
    dataIndex: 'grade',
  },
  {
    title: '人员',
    dataIndex: 'person',
    width: 80,
    align: 'left',
  },
  {
    title: '部门',
    width: 100,
    dataIndex: 'dept',
    align: 'left',
  },
  {
    title: '入职时间',
    width: 100,
    dataIndex: 'enterTime',
  },
];

export const haveDownTableSchema: BasicColumn[] = [
  {
    title: '状态',
    width: 80,
    dataIndex: 'processStatusName',
    customRender: ({ record }) => {
      return <Badge status="success" text={record.processStatusName} />;
    },
  },
  {
    title: '流程标题',
    dataIndex: 'formName',
    align: 'left',
    slots: {
      customRender: 'nameRender'
    },
  },
  {
    title: '提交人',
    width: 100,
    dataIndex: 'startPersonName',
    align: 'left',
  },
  {
    title: '审批时间',
    width: 150,
    dataIndex: 'startTime',
  }
];

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca',
  },
  {
    title: '仪表盘',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
  },
  {
    title: '组件',
    icon: 'ion:layers-outline',
    color: '#e18525',
  },
  {
    title: '系统管理',
    icon: 'ion:settings-outline',
    color: '#3fb27f',
  },
  {
    title: '权限管理',
    icon: 'ion:key-outline',
    color: '#4daf1bc9',
  },
  {
    title: '图表',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
  },
];


export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    id: 'dynamic-avatar-1|svg',
    title: `构建多元化选人用人监督机制 着力推动形成良好政治生态`,
    date: '2021-05-28',
    hasRead: true,
    url: `#`,
  },
  {
    id: 'dynamic-avatar-4|svg',
    title: `奋力打造践行习近平新时代中国特色社会主义思想重要阵地`,
    date: '2021-05-26',
    hasRead: true,
    url: '#',
  },
  {
    id: 'dynamic-avatar-2|svg',
    title: `集团公司首次举办碳达峰碳中和专题培训`,
    date: '2021-05-24',
    hasRead: true,
    url: '#',
  },
  {
    id: 'dynamic-avatar-3|svg',
    title: `镇海炼化开源节流增效益目标任务完成过半`,
    date: '2021-05-23',
    hasRead: true,
    url: '#',
  },
  {
    id: 'dynamic-avatar-5|svg',
    title: `中国石化天津南港高端新材料项目集群开工`,
    date: '2021-05-23',
    hasRead: true,
    url: '#',
  },
];

export const groupItems: GroupItem[] = [
  {
    title: 'Github',
    icon: 'carbon:logo-github',
    color: '',
    desc: '不要等待机会，而要创造机会。',
    group: '开源组',
    date: '2021-06-01',
  },
  {
    title: 'Vue',
    icon: 'ion:logo-vue',
    color: '#3fb27f',
    desc: '现在的你决定将来的你。',
    group: '算法组',
    date: '2021-05-01',
  },
  {
    title: 'Html5',
    icon: 'ion:logo-html5',
    color: '#e18525',
    desc: '没有什么才能比努力更重要。',
    group: '上班摸鱼',
    date: '2021-05-28',
  },
  {
    title: 'Angular',
    icon: 'ion:logo-angular',
    color: '#bf0c2c',
    desc: '热情和欲望可以突破一切难关。',
    group: 'UI',
    date: '2021-05-22',
  },
  {
    title: 'React',
    icon: 'bx:bxl-react',
    color: '#00d8ff',
    desc: '健康的身体是实目标的基石。',
    group: '技术牛',
    date: '2021-05-21',
  },
  {
    title: 'Node-Js',
    icon: 'ion:logo-javascript',
    color: '#4daf1bc9',
    desc: '路是走出来的，而不是空想出来的。',
    group: '架构组',
    date: '2021-05-30',
  },
];
