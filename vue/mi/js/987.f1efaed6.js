"use strict";(self["webpackChunkmyvuex"]=self["webpackChunkmyvuex"]||[]).push([[987],{7987:function(t,s,i){i.r(s),i.d(s,{default:function(){return r}});var e=function(){var t=this,s=t._self._c;return s("div",{staticStyle:{width:"100vw",overflow:"hidden"}},[s("van-sticky",[s("div",{staticClass:"topTab"},[s("van-icon",{attrs:{name:"arrow-left",size:"20"},on:{click:function(s){return t.$router.back()}}}),s("div",{staticClass:"title"},[t._v("买家秀详情")])],1),t.shopDetails?.products[0]?s("div",{staticClass:"productInfo"},[s("img",{attrs:{src:t.shopDetails?.products[0]?.img,alt:""}}),s("div",[t._v(t._s(t.shopDetails?.products[0]?.name))])]):t._e()]),s("div",{staticClass:"user"},[s("div",{staticClass:"flex"},[s("img",{attrs:{src:t.shopDetails?.icon,alt:""}}),s("div",{staticClass:"nickname"},[t._v(" "+t._s(t.shopDetails?.nickname)+" "),s("div",{staticClass:"day"},[t._v(t._s(t.shopDetails?.create_time))])]),s("div",{staticClass:"btn"},[t._v("关注")])])]),s("div",{staticClass:"content"},[t._v(" "+t._s(t.shopDetails?.content)+" "),s("div",t._l(t.shopDetails?.pic_list,(function(t,i){return s("img",{key:i,attrs:{src:t.img,alt:""}})})),0)]),s("div",{staticClass:"comment"},[s("p",[t._v("共"+t._s(t.shopComment?.length)+"条评论")]),s("div",{staticClass:"say"},[s("img",{attrs:{src:t.shopDetails?.cur_user_info.avatar,alt:""}}),s("input",{attrs:{type:"text",placeholder:"来说点什么..."},on:{click:t.say}})]),t._l(t.shopComment,(function(i,e){return s("div",{key:e,staticClass:"user user-comment"},[s("div",{staticClass:"flex",staticStyle:{margin:"8px"}},[s("img",{attrs:{src:i?.img,alt:""}}),s("div",[s("div",{staticClass:"nickname"},[t._v(" "+t._s(i?.nickname)+" "),s("div",{staticClass:"day"},[t._v(t._s(i?.create_time))])]),s("div",[t._v(t._s(i.comment))])])])])}))],2)],1)},a=[],n=i(1981),c={data(){return{shopDetails:null,shopComment:null}},methods:{getDetail(){this.axios.get(`communicate/mizone_product_comment_detail?comment_id=${this.$route.query.id}`).then((t=>{this.shopDetails=t.data.data}))},getComment(){this.axios.get(`communicate/mizone_comment_list?comment_type=product_comment&product_comment_id=${this.$route.query.id}&page_size=10&page_index=1`).then((t=>{this.shopComment=t.data.data?.comment_list}))},say(){(0,n.A)("请前往app参与")}},created(){this.getComment(),this.getDetail()}},o=c,l=i(1656),m=(0,l.A)(o,e,a,!1,null,"6a963234",null),r=m.exports}}]);
//# sourceMappingURL=987.f1efaed6.js.map