"use strict";(self["webpackChunkmyvuex"]=self["webpackChunkmyvuex"]||[]).push([[794],{8794:function(t,e,c){c.r(e),c.d(e,{default:function(){return l}});c(4114);var i=function(){var t=this,e=t._self._c;return e("div",[e("header",[t._v("购物车")]),t._l(t.list,(function(c,i){return e("div",{key:i,staticClass:"car"},[e("div",{staticClass:"check"},[e("van-checkbox",{attrs:{"checked-color":"#ee0a24"},on:{change:function(e){return t.setChecked(c[0].name)}},model:{value:c.ischecked,callback:function(e){t.$set(c,"ischecked",e)},expression:"item.ischecked"}})],1),e("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[e("van-button",{staticClass:"delete-button",attrs:{square:"",text:"删除",type:"danger"},on:{click:function(e){return t.remove(c)}}})]},proxy:!0}],null,!0)},[e("van-card",{staticClass:"goods-card",attrs:{price:c[0].price,title:c[0].name,thumb:c[0].img_url},on:{click:function(e){return t.$router.push({path:"/productdetails",query:{product_id:c[0].product_id}})}}}),e("div",{staticClass:"btn"},[e("van-stepper",{attrs:{theme:"round","button-size":"22","disable-input":""},on:{plus:function(e){return t.setAddCount(c[0].product_id)},minus:function(e){return t.setRedCount(c[0].product_id)}},model:{value:c.count,callback:function(e){t.$set(c,"count",e)},expression:"item.count"}})],1)],1)],1)})),e("van-submit-bar",{attrs:{price:t.price,"button-text":"提交订单"},on:{submit:t.onSubmit}},[e("van-checkbox",{attrs:{"checked-color":"#ee0a24"},on:{click:t.allChecked},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("全选")])],1)],2)},r=[],s=(c(8992),c(3215),c(4520),c(1454),c(8872),c(3518)),n={data(){return{checked:!1}},computed:{...(0,s.aH)(["carList","token","orderList"]),list(){return this.carList.filter((t=>this.token===t.token))},price(){let t=0;return t=this.list.reduce(((t,e)=>{if(e.ischecked){if(e[0]&&e[0].price&&1===e.count)return t+Number(e[0].price);if(e[0]&&e[0].price&&e.count>1)return t+Number(e[0].price)*e.count}return t}),0),100*t}},methods:{...(0,s.PY)(["updateCar","updateOrder"]),remove(t){let e=this.carList.filter((e=>JSON.stringify(e)!==JSON.stringify(t)));localStorage.setItem("carList",JSON.stringify(e)),this.updateCar()},setChecked(t){let e=this.carList.map((e=>e[0].name===t?{...e,ischecked:e.ischecked}:e));localStorage.setItem("carList",JSON.stringify(e));const c=JSON.stringify(e);localStorage.getItem("carList")!==c&&(console.log("setCar",e),localStorage.setItem("carList",c),this.updateCar()),this.checked=this.list.every((t=>t.ischecked))},setAddCount(t){let e=this.carList.map((e=>e[0].product_id===t?{...e,count:e.count+1}:e));localStorage.setItem("carList",JSON.stringify(e)),this.updateCar()},setRedCount(t){let e=this.carList.map((e=>e[0].product_id===t?{...e,count:e.count-1}:e));localStorage.setItem("carList",JSON.stringify(e)),this.updateCar()},allChecked(){console.log(this.checked);let t=this.carList.map((t=>t.token===this.token?{...t,ischecked:this.checked}:t));localStorage.setItem("carList",JSON.stringify(t)),this.updateCar()},onSubmit(){let t=Date.now(),e=this.list.filter((t=>t.ischecked)).map((t=>({price:t[0].price,name:t[0].name,img_url:t[0].img_url,count:t.count,product_id:t[0].product_id})));console.log("order",e);let c=[...this.orderList,{...e,token:this.token,state:"未支付",id:t}];console.log(c),localStorage.setItem("orderList",JSON.stringify(c)),this.$router.push({path:"/buypage",query:{order_id:t}}),this.updateOrder()}},activated(){0===this.list.length?this.checked=!1:this.checked=this.list.every((t=>t.ischecked))}},a=n,o=c(1656),u=(0,o.A)(a,i,r,!1,null,"aa75d568",null),l=u.exports}}]);
//# sourceMappingURL=794.422c0132.js.map