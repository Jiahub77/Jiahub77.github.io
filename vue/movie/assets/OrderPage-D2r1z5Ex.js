import{d as b,M as C,a as o,b as n,e as s,f as m,F as v,i as p,t,g as S,p as O,l as P,m as g,_ as F}from"./index-B3WSfOB5.js";const I={class:"order"},N=["onClick"],$={class:"vote"},x={class:"vote-info"},B={class:"nm"},D={class:"time"},T={class:"cinema"},V={class:"sit"},w={class:"count"},L={class:"isPay"},M=b({__name:"OrderPage",setup(j){var _;const l=P(),h=C(),{PayForTheOrder:r}=h,d=localStorage.getItem("token2");console.log(d);const i=((_=JSON.parse(localStorage.getItem(`${d}`)))==null?void 0:_.reverse())||[];i.value=i.value,console.log(i);const f=a=>{a.isPay?(r(a),l.push({path:"/completedorder",query:{Tip:"订单详情"}})):(r(a),l.push("/unpaidorders"))};return(a,c)=>{const k=g("van-icon"),y=g("van-image");return o(),n("div",I,[s("header",null,[m(k,{name:"arrow-left",color:"#000",size:"24",onClick:c[0]||(c[0]=e=>a.$router.back())}),c[1]||(c[1]=s("div",{class:"title"},"我的订单",-1))]),(o(!0),n(v,null,p(O(i),e=>(o(),n("div",{class:"public",key:e.CinemaId,onClick:u=>f(e)},[s("div",$,[s("div",null,[m(y,{width:"70rem",height:"100rem",fit:"cover",radius:"8rem",src:e.img},null,8,["src"])]),s("div",x,[s("div",B,t(e.name),1),s("div",D,t(e.dateinf),1),s("div",T,t(e.CMname),1),s("div",V,[S(t(e.lobbySeats)+" ",1),(o(!0),n(v,null,p(e.Seat,u=>(o(),n("span",null,t(u)+" ",1))),256))]),s("div",w,t(e.Seat.length)+"张 原价￥"+t(e.price),1)]),s("div",L,t(e.isPay?"查看订单":"付款"),1)])],8,N))),128))])}}}),z=F(M,[["__scopeId","data-v-775b9c34"]]);export{z as default};
