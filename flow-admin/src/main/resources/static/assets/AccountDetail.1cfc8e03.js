import{y as e,bl as a,b9 as t,r,Z as s,B as n,F as o,a2 as i,v as d,a7 as c,ao as u,J as p,a8 as l,a9 as y}from"./vendor.880b4c6c.js";import{P as b}from"./index.cf1d4223.js";import{r as m,a6 as f}from"./index.a33a5e4d.js";/* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.d4b428eb.js";const v=e({name:"AccountDetail",components:{PageWrapper:b,ATabs:a,ATabPane:a.TabPane},setup(){var e;const a=t(),s=m(),n=r(null==(e=a.params)?void 0:e.id),o=r("detail"),{setTitle:i}=f();return i("详情：用户"+n.value),{userId:n,currentKey:o,goBack:function(){s("/system/account")}}}}),k=y(" 禁用账号 "),g=y(" 修改密码 "),j={class:"pt-4 m-4 desc-wrap"};v.render=function(e,a,t,r,y,b){const m=s("a-button"),f=s("a-tab-pane"),v=s("a-tabs"),K=s("PageWrapper");return n(),o(K,{title:"用户"+e.userId+"的资料",content:"这是用户资料详情页面。本页面仅用于演示相同路由在tab中打开多个页面并且显示不同的数据",contentBackground:"",onBack:e.goBack},{extra:i((()=>[d(m,{type:"primary",danger:""},{default:i((()=>[k])),_:1}),d(m,{type:"primary"},{default:i((()=>[g])),_:1})])),footer:i((()=>[d(v,{"default-active-key":"detail",activeKey:e.currentKey,"onUpdate:activeKey":a[1]||(a[1]=a=>e.currentKey=a)},{default:i((()=>[d(f,{key:"detail",tab:"用户资料"}),d(f,{key:"logs",tab:"操作日志"})])),_:1},8,["activeKey"])])),default:i((()=>[d("div",j,["detail"==e.currentKey?(n(),o(c,{key:0},u(10,(a=>d("div",{key:a},"这是用户"+p(e.userId)+"资料Tab",1))),64)):l("",!0),"logs"==e.currentKey?(n(),o(c,{key:1},u(10,(a=>d("div",{key:a},"这是用户"+p(e.userId)+"操作日志Tab",1))),64)):l("",!0)])])),_:1},8,["title","onBack"])};export default v;
