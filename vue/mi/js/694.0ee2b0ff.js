"use strict";(self["webpackChunkmyvuex"]=self["webpackChunkmyvuex"]||[]).push([[694],{3694:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});r(4114);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"buy"},[e("header",[e("van-icon",{attrs:{name:"arrow-left",size:"20"},on:{click:function(e){return t.$router.back()}}}),e("div",{staticClass:"title"},[t._v("我的订单")])],1),t._l(t.filterObj,(function(r,i){return e("div",{key:i,staticClass:"product"},[t._l(r,(function(r,i){return e("van-swipe-cell",{key:i},[e("van-card",{staticClass:"goods-card",attrs:{price:r.price,title:r.name,thumb:r.img_url,num:r.count||t.order[i].count},on:{click:function(e){return t.$router.push({path:"/productdetails",query:{product_id:r.product_id}})}}})],1)})),t._m(0,!0),e("div",{staticClass:"serve"},[e("div",[t._v("订单编号")]),e("div",[e("span",[t._v(t._s(t.order[i].id)+" |")]),t._v(" 复制 ")])])],2)}))],2)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"serve"},[e("div",[t._v("配送服务")]),e("div",[e("div",[t._v("快递 免邮")]),e("div",[t._v("预计24小时内发货")])])])}],n=(r(8992),r(4520),r(1454),r(3518)),u={computed:{...(0,n.aH)(["orderList","token"]),order(){return this.orderList.filter((t=>"已完成"===t.state&&this.token==t.token))},filterObj(){return Object.values(this.order).map((t=>Object.values(t).filter((t=>{if("object"===typeof t)return t}))))}}},a=u,c=r(1656),o=(0,c.A)(a,i,s,!1,null,"0dff2baa",null),d=o.exports}}]);
//# sourceMappingURL=694.0ee2b0ff.js.map