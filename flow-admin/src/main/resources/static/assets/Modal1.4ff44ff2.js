import{B as a,a as e}from"./index.116df12f.js";import{y as s,r as o,Q as n,z as t,A as i,Z as d,B as l,F as r,v as u,a8 as c,a7 as f,ao as g,J as m,a0 as p,K as h,a9 as v}from"./vendor.880b4c6c.js";import"./index.10e3b51a.js";import"./useWindowSizeFn.564cf32e.js";var M=s({components:{BasicModal:a},setup(){const a=o(!0),s=o(10),[t,{setModalProps:i,redoModalHeight:d}]=e();return n((()=>s.value),(()=>{d()})),{register:t,loading:a,handleShow:function(e){e&&(a.value=!0,i({loading:!0,confirmLoading:!0}),setTimeout((()=>{s.value=Math.round(30*Math.random()+5),a.value=!1,i({loading:!1,confirmLoading:!1})}),3e3))},lines:s,setLines:function(){s.value=Math.round(20*Math.random()+10)}}}});const y=h();t("data-v-3f4ef98f");const b=v("点我更新内容"),k={key:0,class:"empty-tips"},C={key:1};i();const j=y(((a,e,s,o,n,t)=>{const i=d("a-button"),h=d("BasicModal");return l(),r(h,p(a.$attrs,{destroyOnClose:"",onRegister:a.register,title:"Modal Title",helpMessage:["提示1","提示2"],onVisibleChange:a.handleShow}),{insertFooter:y((()=>[u(i,{type:"primary",danger:"",onClick:a.setLines,disabled:a.loading},{default:y((()=>[b])),_:1},8,["onClick","disabled"])])),default:y((()=>[a.loading?(l(),r("div",k," 加载中，稍等3秒…… ")):c("",!0),a.loading?c("",!0):(l(),r("ul",C,[(l(!0),r(f,null,g(a.lines,(a=>(l(),r("li",{key:a},"加载完成"+m(a)+"！",1)))),128))]))])),_:1},16,["onRegister","onVisibleChange"])}));M.render=j,M.__scopeId="data-v-3f4ef98f";export default M;
