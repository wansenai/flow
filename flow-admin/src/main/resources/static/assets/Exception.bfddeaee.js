import{k as t,r as e,b5 as s,f as a,u as l,q as n,aJ as i,b6 as r}from"./vendor.bc3b2d68.js";/* empty css              */import{E as o,s as u,t as b,d as T,c,P as p}from"./index.33a0330f.js";var d=t({name:"ErrorPage",props:{status:{type:Number,default:o.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(t){const d=e(new Map),{query:x}=s(),f=u(),E=b(),{t:_}=T(),{prefixCls:m}=c("app-exception-page"),y=a((()=>{const{status:e}=x,{status:s}=t;return Number(e)||s})),O=a((()=>l(d).get(l(y)))),N=_("sys.exception.backLogin"),A=_("sys.exception.backHome");return l(d).set(o.PAGE_NOT_ACCESS,{title:"403",status:`${o.PAGE_NOT_ACCESS}`,subTitle:_("sys.exception.subTitle403"),btnText:t.full?N:A,handler:()=>t.full?f(p.BASE_LOGIN):f()}),l(d).set(o.PAGE_NOT_FOUND,{title:"404",status:`${o.PAGE_NOT_FOUND}`,subTitle:_("sys.exception.subTitle404"),btnText:t.full?N:A,handler:()=>t.full?f(p.BASE_LOGIN):f()}),l(d).set(o.ERROR,{title:"500",status:`${o.ERROR}`,subTitle:_("sys.exception.subTitle500"),btnText:A,handler:()=>f()}),l(d).set(o.PAGE_NOT_DATA,{title:_("sys.exception.noDataTitle"),subTitle:"",btnText:_("common.redo"),handler:()=>E(),icon:"/assets/no-data.f7e550cc.svg"}),l(d).set(o.NET_WORK_ERROR,{title:_("sys.exception.networkErrorTitle"),subTitle:_("sys.exception.networkErrorSubTitle"),btnText:_("common.redo"),handler:()=>E(),icon:"/assets/net-error.61b7e6df.svg"}),()=>{const{title:e,subTitle:s,btnText:a,icon:o,handler:u,status:b}=l(O)||{};return n(r,{class:m,status:b,title:t.title||e,"sub-title":t.subTitle||s},{extra:()=>a&&n(i,{type:"primary",onClick:u},{default:()=>a}),icon:()=>o?n("img",{src:o},null):null})}}});export default d;
