var L=(b,m,t)=>new Promise((e,p)=>{var u=r=>{try{a(t.next(r))}catch(s){p(s)}},f=r=>{try{a(t.throw(r))}catch(s){p(s)}},a=r=>r.done?e(r.value):Promise.resolve(r.value).then(u,f);a((t=t.apply(b,m)).next())});import{a as C,v,q as T,d6 as k,K as D,ar as R,G as A,aF as B,o as g,f as _,F as I,aI as S,x as V,y as F,m as i,h as o,z as n,B as y,t as h}from"./index.54e75e3e.js";import M from"./DetailModal.b5bb24b2.js";import{B as j}from"./TableImg.dfdbdfe5.js";import{T as N}from"./useForm.4ad9ba51.js";import{u as $}from"./useTable.d768b499.js";import{u as q}from"./index.d4677f89.js";import{getColumns as z}from"./data.eed78acb.js";import"./index.1c29744d.js";import"./index.d3149b54.js";import"./get.e264171e.js";import"./index.ff0801ff.js";import"./index.065426b6.js";import"./index.5c6125f6.js";import"./index.c5343d42.js";import"./useSize.5174038b.js";import"./eagerComputed.e474cd0d.js";import"./useWindowSizeFn.42b5da8d.js";import"./useContentViewHeight.027863b0.js";import"./ArrowLeftOutlined.e237c43c.js";import"./index.24ba8bad.js";import"./transButton.f88255e1.js";import"./index.be77b62f.js";import"./index.b8df24b3.js";import"./index.0ff17afb.js";import"./index.f7634222.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.1624e934.js";import"./FullscreenOutlined.88a2731c.js";import"./scrollTo.d3985c8e.js";import"./index.5a03476b.js";import"./index.76e75e35.js";import"./index.4c5a4512.js";import"./useFlexGapSupport.f9214675.js";import"./_baseIteratee.e704fbfd.js";import"./index.34264968.js";import"./index.39b3ae58.js";import"./useRefs.ab942c9d.js";import"./download.3e769148.js";import"./index.6193b74a.js";import"./ClockCircleOutlined.c0cc8f82.js";import"./index.4d74564a.js";import"./uniqBy.75a3f23b.js";const G={class:"p-4"},K=["src"],Vr=C({__name:"index",setup(b){const m=v(),t=v([]),{t:e}=T(),p=k(),[u,{setTableData:f}]=$({title:e("sys.errorLog.tableTitle"),columns:z(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[a,{openModal:r}]=q();D(()=>p.getErrorLogInfoList,l=>{R(()=>{f(A(l))})},{immediate:!0});function s(l){m.value=l,r(!0)}function x(){throw new Error("fire vue error!")}function E(){t.value.push(`${new Date().getTime()}.png`)}function w(){return L(this,null,function*(){})}return(l,H)=>{const d=B("a-button");return g(),_("div",G,[(g(!0),_(I,null,S(t.value,c=>V((g(),_("img",{key:c,src:c},null,8,K)),[[F,!1]])),128)),i(M,{info:m.value,onRegister:o(a)},null,8,["info","onRegister"]),i(o(j),{onRegister:o(u),class:"error-handle-table"},{toolbar:n(()=>[i(d,{onClick:x,type:"primary"},{default:n(()=>[y(h(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),i(d,{onClick:E,type:"primary"},{default:n(()=>[y(h(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),i(d,{onClick:w,type:"primary"},{default:n(()=>[y(h(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),action:n(({record:c})=>[i(o(N),{actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:s.bind(null,c)}]},null,8,["actions"])]),_:1},8,["onRegister"])])}}});export{Vr as default};