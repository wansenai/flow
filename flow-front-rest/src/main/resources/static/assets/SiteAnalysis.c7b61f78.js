import{k as a,bm as t,r as s,K as e,o as i,n,P as r,q as o,W as b,N as p}from"./vendor.d660e98f.js";/* empty css              *//* empty css              *//* empty css              */import y from"./VisitAnalysis.100d683a.js";import d from"./VisitAnalysisBar.7722ef40.js";import"./useECharts.f4f7e126.js";import"./index.ee676e78.js";import"./props.f48aca0b.js";var c=a({components:{Card:t,VisitAnalysis:y,VisitAnalysisBar:d},setup(){const a=s("tab1");return{tabListTitle:[{key:"tab1",tab:"流量趋势"},{key:"tab2",tab:"访问量"}],activeKey:a,onTabChange:function(t){a.value=t}}}});const f={key:0},m={key:1};c.render=function(a,t,s,y,d,c){const l=e("VisitAnalysis"),j=e("VisitAnalysisBar"),u=e("Card");return i(),n(u,p({"tab-list":a.tabListTitle},a.$attrs,{"active-tab-key":a.activeKey,onTabChange:a.onTabChange}),{default:r((()=>["tab1"===a.activeKey?(i(),n("p",f,[o(l)])):b("",!0),"tab2"===a.activeKey?(i(),n("p",m,[o(j)])):b("",!0)])),_:1},16,["tab-list","active-tab-key","onTabChange"])};export default c;
