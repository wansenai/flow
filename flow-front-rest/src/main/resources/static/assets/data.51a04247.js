import{q as t,bg as e}from"./vendor.d660e98f.js";/* empty css              */import{aD as a,d as r}from"./index.21f8a12f.js";const{t:d}=r();function n(){return[{dataIndex:"type",title:d("sys.errorLog.tableColumnType"),width:80,customRender:({text:r})=>{const d=r===a.VUE?"green":r===a.RESOURCE?"cyan":r===a.PROMISE?"blue":a.AJAX?"red":"purple";return t(e,{color:d},{default:()=>r})}},{dataIndex:"url",title:"URL",width:200},{dataIndex:"time",title:d("sys.errorLog.tableColumnDate"),width:160},{dataIndex:"file",title:d("sys.errorLog.tableColumnFile"),width:200},{dataIndex:"name",title:"Name",width:200},{dataIndex:"message",title:d("sys.errorLog.tableColumnMsg"),width:300},{dataIndex:"stack",title:d("sys.errorLog.tableColumnStackMsg")}]}function o(){return n().map((t=>({field:t.dataIndex,label:t.title})))}export{n as getColumns,o as getDescSchema};
