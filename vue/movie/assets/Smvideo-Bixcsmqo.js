import{b as h}from"./zeng-BztLn8D5.js";import{_ as j,r as d,o as g,T as w,b as i,e as a,f as r,z as v,m as c,a as l,F as k,i as I,j as T,g as S,t as m,h as F,l as U}from"./index-B3WSfOB5.js";import{S as q}from"./zeng-axQpY2UF.js";const z={id:"main"},D={key:0,class:"list"},E=["onClick"],M={class:"info"},R={class:"dsc"},$={class:"user"},A={class:"name"},G={class:"icon"},H={__name:"Smvideo",setup(J){const n=d([]);h().then(o=>{console.log("getShort",o.data.data.feeds),n.value=o.data.data.feeds});const x=d(!1),s=d(!1);g(()=>{s.value=!1});const y=U(),f=q(),C=(o,e)=>{f.addItem(o,e),f.addItem(o,e),y.push({path:"/smdetail",query:{id:o.id}})},_=d(!1),u=d(1),b=()=>{s.value=!0,u.value++,console.log("shortnum",u.value),h(u.value).then(o=>{console.log("getShort222",o.data.data.feeds),n.value=[...n.value,...o.data.data.feeds],s.value=!1,u.value===28&&(_.value=!0)}),console.log("触底了",_,s)};return g(()=>{w(()=>{s.value=!1})}),(o,e)=>{const N=c("van-skeleton-image"),B=c("van-skeleton"),p=c("van-image"),L=c("van-icon"),V=c("van-list");return l(),i("div",z,[e[3]||(e[3]=a("header",null,[a("div",{class:"title"},"猫眼电影")],-1)),a("main",null,[r(V,{loading:s.value,"onUpdate:loading":e[0]||(e[0]=t=>s.value=t),offset:0,finished:_.value,"finished-text":"没有更多了",onLoad:b},{default:v(()=>[n.value?(l(),i("div",D,[(l(!0),i(k,null,I(n.value,t=>(l(),i("div",{class:"item",key:t,onClick:K=>C(t,n.value)},[x.value?(l(),T(B,{key:0},{template:v(()=>[r(N)]),_:1})):(l(),i(k,{key:1},[r(p,{src:t.video.imgUrl,width:"100%",height:"100%",fit:"cover"},{error:v(()=>e[1]||(e[1]=[S("加载失败")])),_:2},1032,["src"]),a("div",M,[a("div",R,m(t.title),1),a("div",$,[a("div",A,[r(p,{round:"",src:t.user.avatarurl,width:"25rem",height:"25rem",fit:"cover"},{error:v(()=>e[2]||(e[2]=[S("加载失败")])),_:2},1032,["src"]),a("span",null,m(t.user.nickName),1)]),a("div",G,[r(L,{name:"good-job-o"}),a("span",null,m(t.upCount),1)])])])],64))],8,E))),128))])):F("",!0)]),_:1},8,["loading","finished"])])])}}},W=j(H,[["__scopeId","data-v-0b662adb"]]);export{W as default};
