"use strict";(self["webpackChunkmyvuex"]=self["webpackChunkmyvuex"]||[]).push([[823],{9823:function(t,e,a){a.r(e),a.d(e,{default:function(){return z}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"categorys"},[e("van-sidebar",{on:{change:t.getProductList},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.categorys,(function(t){return e("van-sidebar-item",{key:t.block_id,attrs:{title:t.category_name}})})),1),e("div",{staticClass:"mainContent"},[t._l(t.productList,(function(a,r){return["cells_auto_fill"===a.view_type?e("CellsAutoFill",{key:r,attrs:{item:a}}):t._e(),"category_group"===a.view_type?e("CategoryGroupOne",{key:a.category_id,attrs:{group:a}}):t._e(),"category_group"===a.view_type?e("CategoryGroup",{key:r,attrs:{item:a}}):t._e(),"category_title"===a.view_type?e("CategoryTitle",{key:r,attrs:{item:a}}):t._e()]}))],2)],1)},i=[],s=function(){var t=this,e=t._self._c;return e("ul",t._l(t.item.body.items,(function(a){return e("li",{key:a.block_id,on:{click:function(e){return t.xxx(a.action.type,a.action.path)}}},[e("img",{attrs:{src:a.img_url,alt:""}}),e("h4",{staticClass:"name text-ellipsis"},[t._v(t._s(a.product_name))])])})),0)},o=[],c=(a(4114),{props:["item"],methods:{xxx(t,e){"cate"===t?this.$router.push({path:"/categorylist",query:{id:e}}):"product"===t&&this.$router.push({path:"/productdetails",query:{product_id:e}})}}}),l=c,n=a(1656),u=(0,n.A)(l,s,o,!1,null,"d0609a3a",null),d=u.exports,_=function(){var t=this,e=t._self._c;return e("div",t._l(t.group.body.product_list,(function(a,r){return e("div",{key:r,staticClass:"product",on:{click:function(e){return t.$router.push({path:"/productdetails",query:{product_id:a.product_id}})}}},[e("img",{attrs:{src:a.puzzle_url,alt:""}}),e("div",{staticClass:"content"},[e("h5",{staticClass:"name"},[t._v(t._s(a.name))]),e("div",{staticClass:"priceTip"},[e("p",[t._v(" ￥"+t._s(a.price)+" "),e("span",[t._v("起")])]),t._l(a.labels,(function(a,r){return e("div",{key:r,staticClass:"label"},[t._v(" "+t._s(a)+" ")])}))],2)])])})),0)},p=[],y={props:["group"]},g=y,h=(0,n.A)(g,_,p,!1,null,"18d9cd48",null),v=h.exports,m=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:t.item.body.category_name}},[e("p",[t._v(t._s(t.item.body.category_name))])])},f=[],C={props:["item"]},k=C,x=(0,n.A)(k,m,f,!1,null,"582e818e",null),b=x.exports,A=function(){var t=this,e=t._self._c;return e("div",t._l(t.item.body.items,(function(t,a){return e("img",{key:a,attrs:{src:t.img_url,alt:""}})})),0)},L=[],w={props:["item"]},G=w,K=(0,n.A)(G,A,L,!1,null,"2348044a",null),$=K.exports,q={components:{CellsAutoFill:$,CategoryTitle:b,CategoryGroup:d,CategoryGroupOne:v},data(){return{activeKey:0,categorys:null,productList:null}},methods:{getCategory(){this.axios.get("home/category_v2").then((t=>{console.log("getCategory",t.data.data),this.categorys=t.data.data}))},getProductList(t){this.categorys?this.axios.get(`home/category_v2?cat_id=${this.categorys[t]?.category_id}`).then((t=>{console.log(t.data.data[0].category_list),this.productList=t.data.data[0].category_list})):this.axios.get("home/category_v2?cat_id=-1").then((t=>{console.log(t.data.data[0].category_list),this.productList=t.data.data[0].category_list}))}},created(){this.getCategory(),this.getProductList()}},P=q,T=(0,n.A)(P,r,i,!1,null,"46468e9e",null),z=T.exports}}]);
//# sourceMappingURL=823.17c4a74d.js.map