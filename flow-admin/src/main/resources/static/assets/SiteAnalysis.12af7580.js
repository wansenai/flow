import{y as a,b6 as t,r as s,Z as i,B as e,F as n,a2 as r,v as b,a8 as o,a0 as y}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              */import c from"./VisitAnalysis.3130e022.js";import p from"./VisitAnalysisBar.37764270.js";import"./useECharts.21ebb82b.js";import"./index.8bbed969.js";import"./props.f48aca0b.js";var d=a({components:{Card:t,VisitAnalysis:c,VisitAnalysisBar:p},setup(){const a=s("tab1");return{tabListTitle:[{key:"tab1",tab:"流量趋势"},{key:"tab2",tab:"访问量"}],activeKey:a,onTabChange:function(t){a.value=t}}}});const l={key:0},m={key:1};d.render=function(a,t,s,c,p,d){const f=i("VisitAnalysis"),v=i("VisitAnalysisBar"),j=i("Card");return e(),n(j,y({"tab-list":a.tabListTitle},a.$attrs,{"active-tab-key":a.activeKey,onTabChange:a.onTabChange}),{default:r((()=>["tab1"===a.activeKey?(e(),n("p",l,[b(f)])):o("",!0),"tab2"===a.activeKey?(e(),n("p",m,[b(v)])):o("",!0)])),_:1},16,["tab-list","active-tab-key","onTabChange"])};export default d;