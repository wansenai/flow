import{dP as l,fE as r,f7 as d,bV as n,b9 as i}from"./index.ef013507.js";import{T as a}from"./index.0b0495b0.js";const m=e=>{const o=l.post({url:"/flow/privilege/module/getModules",params:e});return Promise.resolve(o).then(u=>{const s=r(u,{id:"id",children:"children",pid:"pid"});return d(s,t=>{t.children.length===0&&delete t.children},{id:"id",children:"children",pid:"pid"}),s})},F=e=>l.post({url:"/flow/privilege/module/saveOrUpdate",params:e}),f=e=>l.post({url:"/flow/privilege/module/addPriVal",params:e}),h=e=>l.post({url:"/flow/privilege/module/delete",params:e}),E=e=>l.post({url:"/flow/privilege/module/checkEntityExist",params:e}),g=[{title:"\u83DC\u5355\u540D\u79F0",dataIndex:"name",align:"left",width:200,customRender:({record:e})=>n("span",{},[n(i,{icon:e.image}),n("span",e.name)])},{title:"URL",dataIndex:"url",align:"left",width:180},{title:"\u6807\u8BC6",dataIndex:"sn",align:"left",width:120},{title:"\u7EC4\u4EF6",dataIndex:"component",align:"left"},{title:"\u72B6\u6001",dataIndex:"status",width:60,customRender:({record:e})=>{const u=~~e.status===1,s=u?"green":"red",t=u?"\u542F\u7528":"\u505C\u7528";return n(a,{color:s},()=>t)}},{title:"\u83DC\u5355\u7C7B\u578B",dataIndex:"showStatus",width:100,customRender:({record:e})=>{const u=~~e.showStatus===1,s=u?"green":"gray",t=u?"\u663E\u793A":"\u9690\u85CF";return n(a,{color:s},()=>t)}},{title:"\u6743\u9650\u503C",dataIndex:"pvs",align:"left",customRender:({record:e})=>{const o=e.pvs,u="processing";return o.map(t=>n(a,{color:u,style:{marginRight:"5px"}},()=>t.name))}},{title:"\u6392\u5E8F",dataIndex:"orderNo",width:60}],w=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u6807\u8BC6"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],b=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"pid",label:"pid",required:!1,component:"Input",show:!1},{field:"image",label:"\u56FE\u6807",component:"IconPicker",componentProps:{},colProps:{span:24}},{field:"name",label:"\u540D\u79F0",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:32,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E32\uFF01"}],colProps:{span:24}},{field:"sn",label:"\u6807\u8BC6",required:!0,component:"Input",colProps:{span:24}},{field:"url",label:"URL",component:"Input",rules:[{required:!0,whitespace:!0,message:"URL\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^\\/?(\\w+\\/?)+(\\.?\\w+)?$"),type:"string",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684URL\u5730\u5740\uFF01"},{max:128,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E128\uFF01"}],colProps:{span:24}},{field:"component",label:"\u7EC4\u4EF6\u5730\u5740",component:"Input",rules:[{required:!0,whitespace:!0,message:"\u7EC4\u4EF6\u76EE\u5F55\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^\\/?(\\w+\\/?)+(\\.?\\w+)?$"),type:"string",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u76EE\u5F55\u5730\u5740\uFF01"},{max:128,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E128\uFF01"}],colProps:{span:24}},{field:"orderNo",label:"\u6392\u5E8F\u53F7",component:"InputNumber"},{field:"status",label:"\u72B6\u6001",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u7981\u7528"},colProps:{span:24}},{field:"showStatus",label:"\u662F\u5426\u663E\u793A",required:!1,component:"Switch",defaultValue:!0,componentProps:{checkedChildren:"\u663E\u793A",unCheckedChildren:"\u9690\u85CF"},colProps:{span:24}}],I=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"pvs",label:" ",required:!1,component:"CheckboxGroup",labelWidth:10,componentProps:{}}];export{E as a,F as b,g as c,h as d,f as e,b as f,m as g,I as p,w as s};
