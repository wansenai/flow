var o=(o,t,e)=>new Promise(((n,r)=>{var s=o=>{try{a(e.next(o))}catch(t){r(t)}},c=o=>{try{a(e.throw(o))}catch(t){r(t)}},a=o=>o.done?n(o.value):Promise.resolve(o.value).then(s,c);a((e=e.apply(o,t)).next())}));import{d as t}from"./vendor.bc3b2d68.js";import{a9 as e,aa as n,f as r}from"./index.33a0330f.js";const s=t({id:"app-lock",state:()=>({lockInfo:e.getLocal(n)}),getters:{getLockInfo(){return this.lockInfo}},actions:{setLockInfo(o){this.lockInfo=Object.assign({},this.lockInfo,o),e.setLocal(n,this.lockInfo)},resetLockInfo(){e.removeLocal(n),this.lockInfo=null},unLock(t){return o(this,null,(function*(){var e;const n=r();if((null==(e=this.lockInfo)?void 0:e.pwd)===t)return this.resetLockInfo(),!0;return yield(()=>o(this,null,(function*(){var o;try{const e=null==(o=n.getUserInfo)?void 0:o.username,r=yield n.login({username:e,password:t,goHome:!1,mode:"none"});return r&&this.resetLockInfo(),r}catch(e){return!1}})))()}))}}});export{s as u};
