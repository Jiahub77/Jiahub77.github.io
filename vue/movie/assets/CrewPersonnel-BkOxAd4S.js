import{b as P}from"./zhang-C7FG3tWy.js";import{d as x,r as p,c as N,a as r,b as l,e,f as d,p as V,h as _,F as y,i as B,g as f,t as C,u as M,l as $,m as g,_ as j}from"./index-B3WSfOB5.js";const q={key:0,class:"crew"},F={class:"a"},L={class:"b"},R=["onClick"],D=x({__name:"CrewPersonnel",setup(E){const b=M(),c=$(),o=p({creditsMap:{},credits:{}}),v=p(!1);P(b.query.movieId).then(s=>{o.value=s.data,v.value=!0});const h=(s,t)=>{c.push({path:"/actor",query:{movieId:s.movieId,castId:t}})},k=N(()=>{const{creditsMap:s,credits:t}=o.value;return!s||!t?{}:Object.keys(t).filter(a=>s[a]).reduce((a,n)=>(a[n]=s[n],a),{})}),u=p(!1),w=()=>{u.value=!u.value},I=()=>{c.push({path:"/"})};return(s,t)=>{const a=g("van-nav-bar"),n=g("van-icon");return v.value?(r(),l("div",q,[e("div",F,[d(a,{title:o.value.$title,"left-arrow":"",onClickLeft:t[0]||(t[0]=m=>V(c).back())},null,8,["title"]),d(n,{name:"wap-nav",onClick:w})]),u.value?(r(),l("div",{key:0,onClick:I,class:"popup"},t[1]||(t[1]=[e("p",null,"首页",-1)]))):_("",!0),e("div",L,[(r(!0),l(y,null,B(k.value,(m,i)=>(r(),l("div",{onClick:O=>h(o.value,i),class:"c",key:i},[e("p",null,[f(C(m),1),e("span",null,"("+C(o.value.credits[i])+")",1)]),d(n,{name:"arrow"})],8,R))),128))]),t[2]||(t[2]=e("footer",null,[e("div",{class:"d"},[e("p",null,[e("span",null,"猫眼用户服务协议"),f(" I 客服电话："),e("span",null,"1234-4321")]),e("p",null,"京ICP备123456号-1 京ICP备123456789123号-1"),e("p",null,"广东猫眼文化传媒有限公司")]),e("img",{src:"https://obj.pipi.cn/festatic/asgard/resources/images/movie/bottom-logo.png",alt:""})],-1))])):_("",!0)}}}),z=j(D,[["__scopeId","data-v-e2b6e64a"]]);export{z as default};