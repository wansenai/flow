import{b4 as o,q as e,aH as n}from"./vendor.56d2c57f.js";import{r}from"./index.24f6b3f0.js";function a(a,s={}){const{size:t="small",delay:i=100,timeout:m=3e4,loading:d=!1,retry:l=!0}=s;return o({loader:a,loadingComponent:d?e(n,{spinning:!0,size:t},null):void 0,timeout:m,delay:i,onError:l?(o,e,n,r)=>{o.message.match(/fetch/)&&r<=3?e():n()}:r})}export{a as c};