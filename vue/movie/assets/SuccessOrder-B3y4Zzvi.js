import{d as f,a as n,b as a,e as s,f as d,F as c,i as _,t,g,h as k,p as C,l as S,m,_ as y}from"./index-B3WSfOB5.js";const b={class:"order"},N=["onClick"],O={class:"vote"},V={class:"vote-info"},x={class:"nm"},B={class:"time"},I={class:"cinema"},$={class:"sit"},w={class:"count"},D=f({__name:"SuccessOrder",setup(F){const l=S(),u=JSON.parse(localStorage.getItem("OrdersArray")),p=i=>{i?l.push("/completedorder"):l.push("/unpaidorders")};return(i,o)=>{const v=m("van-icon"),h=m("van-image");return n(),a("div",b,[s("header",null,[d(v,{name:"arrow-left",color:"#000",size:"24",onClick:o[0]||(o[0]=e=>i.$router.back())}),o[1]||(o[1]=s("div",{class:"title"}," 我的订单 ",-1))]),(n(!0),a(c,null,_(C(u),e=>(n(),a(c,{key:e.CinemaId},[e.isPay?(n(),a("div",{key:0,class:"public",onClick:r=>p(e.isPay)},[s("div",O,[s("div",null,[d(h,{width:"70rem",height:"100rem",fit:"cover",radius:"8rem",src:e.img},null,8,["src"])]),s("div",V,[s("div",x,t(e.name),1),s("div",B,t(e.dateinf),1),s("div",I,t(e.CMname),1),s("div",$,[g(t(e.lobbySeats)+" ",1),(n(!0),a(c,null,_(e.Seat,r=>(n(),a("span",null,t(r),1))),256))]),s("div",w,t(e.Seat.length)+"张 原价￥"+t(e.price),1)])])],8,N)):k("",!0)],64))),128))])}}}),P=y(D,[["__scopeId","data-v-49420697"]]);export{P as default};
