import{_ as e}from"./TableImg.2c9119a6.js";import"./BasicForm.19c32012.js";import{u as a}from"./useTable.d6fddac6.js";import{P as t}from"./index.16a907f1.js";import{y as l,aZ as i,b6 as d,an as s,bp as n,ch as r,bl as o,Z as u,B as m,F as f,a2 as p,v as b,a9 as c}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{refundTimeTableSchema as _,refundTimeTableData as j}from"./data.c8eec34b.js";/* empty css              *//* empty css              */import"./useForm.e45ae65c.js";import"./index.e99064e4.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.bf73380f.js";import"./onMountedOrActivated.8f899bfb.js";import"./useSortable.56c740a0.js";/* empty css              *//* empty css              *//* empty css              */import"./index.45c1baba.js";/* empty css              *//* empty css              *//* empty css              */import"./download.1143de04.js";import"./base64Conver.bb012c73.js";import"./index.d495e6fa.js";/* empty css              *//* empty css              */import"./useContentViewHeight.c21e2e51.js";var x=l({components:{BasicTable:e,PageWrapper:t,[i.name]:i,[d.name]:d,Empty:s,[n.name]:n,[n.Item.name]:n.Item,[r.name]:r,[r.Step.name]:r.Step,[o.name]:o,[o.TabPane.name]:o.TabPane},setup(){const[e]=a({title:"退货进度",columns:_,pagination:!1,dataSource:j,showIndexColumn:!1,scroll:{y:300}});return{registerTimeTable:e}}});const g=c(" 操作一 "),T=c(" 操作二 "),y=c(" 主操作 "),v={class:"pt-4 m-4 desc-wrap"},h=c(" 曲丽丽 "),X=c(" XX 服务 "),k=c(" 2017-01-10 "),w=b("a",null,"12421",-1),B=c(" 2017-07-07 ~ 2017-08-08 "),C=c(" 请于两个工作日内确认 "),P=b("div",null,"Vben",-1),S=c(),F=b("p",null,"2016-12-12 12:32",-1),I=b("p",null,"Chad",-1),z=c(" 付小小 "),W=c(" XX 32943898021309809423 "),E=c(" 3321944288191034921 "),M=c(" 18112345678 "),R=c(" 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口 "),V=c(" 111 "),Y=c(" 2017-08-08 "),Z=c(" 725 "),A=c(" 2017-08-08 "),H=b("h4",null,"信息组",-1),N=c(" 林东东 "),O=c(" 1234567 "),q=c(" XX公司 - YY部 "),D=c(" 2017-08-08 "),G=c(" 这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长... "),J=c(" Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗.. "),K=c(" 付小小 "),L=c(" 1234568 ");x.render=function(e,a,t,l,i,d){const s=u("a-button"),n=u("a-tab-pane"),r=u("a-tabs"),o=u("a-descriptions-item"),c=u("a-descriptions"),_=u("a-step"),j=u("a-steps"),x=u("a-card"),Q=u("a-divider"),U=u("Empty"),$=u("BasicTable"),ee=u("PageWrapper");return m(),f(ee,{title:"单号：234231029431",contentBackground:""},{extra:p((()=>[b(s,null,{default:p((()=>[g])),_:1}),b(s,null,{default:p((()=>[T])),_:1}),b(s,{type:"primary"},{default:p((()=>[y])),_:1})])),footer:p((()=>[b(r,{"default-active-key":"1"},{default:p((()=>[b(n,{key:"1",tab:"详情"}),b(n,{key:"2",tab:"规则"})])),_:1})])),default:p((()=>[b("div",v,[b(c,{size:"small",column:2},{default:p((()=>[b(o,{label:"创建人"},{default:p((()=>[h])),_:1}),b(o,{label:"订购产品"},{default:p((()=>[X])),_:1}),b(o,{label:"创建时间"},{default:p((()=>[k])),_:1}),b(o,{label:"关联单据"},{default:p((()=>[w])),_:1}),b(o,{label:"生效日期"},{default:p((()=>[B])),_:1}),b(o,{label:"备注"},{default:p((()=>[C])),_:1})])),_:1}),b(x,{title:"流程进度",bordered:!1},{default:p((()=>[b(j,{current:1,"progress-dot":"",size:"small"},{default:p((()=>[b(_,{title:"创建项目"},{description:p((()=>[P,S,F])),_:1}),b(_,{title:"部门初审"},{description:p((()=>[I])),_:1}),b(_,{title:"财务复核"}),b(_,{title:"完成"})])),_:1})])),_:1}),b(x,{title:"用户信息",bordered:!1,class:"mt-5"},{default:p((()=>[b(c,{column:3},{default:p((()=>[b(o,{label:"用户姓名"},{default:p((()=>[z])),_:1}),b(o,{label:"会员卡号"},{default:p((()=>[W])),_:1}),b(o,{label:"身份证"},{default:p((()=>[E])),_:1}),b(o,{label:"联系方式"},{default:p((()=>[M])),_:1}),b(o,{label:"联系地址",span:2},{default:p((()=>[R])),_:1})])),_:1}),b(c,{title:"信息组",column:3},{default:p((()=>[b(o,{label:"某某数据"},{default:p((()=>[V])),_:1}),b(o,{label:"该数据更新时间"},{default:p((()=>[Y])),_:1}),b(o,{label:"某某数据"},{default:p((()=>[Z])),_:1}),b(o,{label:"该数据更新时间"},{default:p((()=>[A])),_:1})])),_:1}),H,b(x,{title:"多层级信息组"},{default:p((()=>[b(c,{title:"组名称",column:3},{default:p((()=>[b(o,{label:"负责人"},{default:p((()=>[N])),_:1}),b(o,{label:"角色码"},{default:p((()=>[O])),_:1}),b(o,{label:"所属部门"},{default:p((()=>[q])),_:1}),b(o,{label:"过期时间"},{default:p((()=>[D])),_:1}),b(o,{label:"描述",span:2},{default:p((()=>[G])),_:1})])),_:1}),b(Q),b(c,{title:"组名称",column:1},{default:p((()=>[b(o,{label:"学名"},{default:p((()=>[J])),_:1})])),_:1}),b(Q),b(c,{title:"组名称",column:1},{default:p((()=>[b(o,{label:"负责人"},{default:p((()=>[K])),_:1}),b(o,{label:"角色码"},{default:p((()=>[L])),_:1})])),_:1})])),_:1})])),_:1}),b(x,{title:"用户近半年来电记录",class:"my-5"},{default:p((()=>[b(U)])),_:1}),b($,{onRegister:e.registerTimeTable},null,8,["onRegister"])])])),_:1})};export default x;
