"use strict";(self["webpackChunkmyvuex"]=self["webpackChunkmyvuex"]||[]).push([[752],{7752:function(t,s,e){e.r(s),e.d(s,{default:function(){return j}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"productMi"},[s("van-sticky",[s("div",{staticClass:"topTab"},[s("van-icon",{attrs:{name:"arrow-left",color:"#fff",size:"20"},on:{click:function(s){return t.$router.back()}}}),s("div",{staticClass:"title"},[t._v("米圈")]),s("van-icon",{attrs:{name:"ellipsis",color:"#fff",size:"20"}})],1)]),s("div",{staticClass:"top"},[s("img",{attrs:{src:t.communicate?.img_url,alt:""}}),s("div",[s("div",{staticClass:"name"},[t._v(t._s(t.communicate?.product_name))]),s("div",{staticClass:"heat"},[t._v(" "+t._s(t.communicate?.heat)+"热度 | "+t._s(t.communicate?.join_num)+"人参与评论 ")])]),s("div",{staticClass:"like"},[t._v("+ 关注")])]),s("div",{staticClass:"content"},[s("van-tabs",{attrs:{animated:""},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},t._l(t.tab,(function(t,e){return s("van-tab",{key:e,attrs:{title:t}})})),1),0===t.active?s("div",[s("BuyerRecList")],1):t._e(),1===t.active?s("div",[s("CallFamily")],1):t._e(),2===t.active?s("div",[s("ContentList")],1):t._e(),3===t.active?s("div",[s("BuyerShowList")],1):t._e()],1)],1)},a=[],n=(e(4114),function(){var t=this,s=t._self._c;return s("div",t._l(t.contentList,(function(e,i){return s("div",{key:i,staticClass:"ListItem",on:{click:function(s){return t.$router.push({path:"/videodetails",query:{id:e.id}})}}},[s("div",{staticClass:"userInfo"},[s("img",{attrs:{src:e?.icon,alt:""}}),s("div",{staticClass:"username"},[t._v(t._s(e?.nickname))])]),s("div",{staticClass:"content"},[t._v(t._s(e?.content))]),s("div",{staticClass:"showImg"},[t._l(e?.pic_list,(function(t,e){return s("img",{key:e,attrs:{src:t.img,alt:""}})})),t._l(e?.video_list,(function(t,e){return s("video",{key:e,attrs:{poster:"video.cover",controls:"",muted:""},domProps:{muted:!0}},[s("source",{attrs:{src:t.video_url,type:"video/mp4"}})])}))],2),s("div",{staticClass:"hot"},[s("span",[t._v(t._s(e.hot_comment.name)+": ")]),t._v(" "+t._s(e.hot_comment.comment)+" ")]),s("div",{staticClass:"btnIcon"},[s("div",[s("van-icon",{attrs:{name:"share-o",size:"20"}})],1),s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("van-icon",{attrs:{name:"chat-o",size:"20"}}),s("span",[t._v(t._s(e.comment_num))])],1),s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("van-icon",{attrs:{name:"good-job-o",size:"20"}}),s("span",[t._v(t._s(e.praise_num))])],1)])])})),0)}),c=[],o={data(){return{contentList:null}},methods:{getContentList(){this.axios.get("communicate/mizone_content_list",{params:{product_id:this.$route.query.product_id,size:10,tag_id:58527,tag_type:2,page:1}}).then((t=>{console.log("getRecList",t.data.data),this.contentList=t.data.data.content_list}))}},created(){this.getContentList()}},r=o,u=e(1656),l=(0,u.A)(r,n,c,!1,null,"381baff8",null),d=l.exports,m=function(){var t=this,s=t._self._c;return s("div",t._l(t.RecList,(function(e,i){return s("div",{key:i,staticClass:"ListItem",on:{click:function(s){return t.$router.push({path:"/recommendeddetails",query:{comment_id:e.comment_id}})}}},[s("div",{staticClass:"userInfo"},[s("img",{attrs:{src:e?.icon,alt:""}}),s("div",{staticClass:"username"},[t._v(t._s(e?.nickname))])]),s("div",{staticClass:"content"},[t._v(t._s(e?.content))]),s("div",{staticClass:"showImg"},t._l(e?.pic_list,(function(t,e){return s("img",{key:e,attrs:{src:t.img,alt:""}})})),0),s("div",{staticClass:"btnIcon"},[s("div",[s("van-icon",{attrs:{name:"share-o",size:"20"}})],1),s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("van-icon",{attrs:{name:"chat-o",size:"20"}}),s("span",[t._v(t._s(e?.comment_num))])],1),s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("van-icon",{attrs:{name:"good-job-o",size:"20"}}),s("span",[t._v(t._s(e?.praise_num))])],1)])])})),0)},_=[],v=(e(1454),{data(){return{RecList:null}},methods:{getRecList(){this.axios.get("communicate/mizone_rec",{params:{product_id:this.$route.query.product_id,after:"",size:10}}).then((t=>{this.RecList=t.data.data.rec_list.map((t=>t.content))}))}},created(){this.getRecList()}}),p=v,h=(0,u.A)(p,m,_,!1,null,"27d5d1e8",null),f=h.exports,g=function(){var t=this,s=t._self._c;return s("div",t._l(t.contentList,(function(e,i){return s("div",{key:i,staticClass:"ListItem",on:{click:function(s){return t.$router.push({path:"/shopdetails",query:{comment_id:e.comment_id}})}}},[s("div",{staticClass:"userInfo"},[s("img",{attrs:{src:e.user_avatar,alt:""}}),s("div",{staticClass:"username"},[t._v(t._s(e.user_name))])]),s("div",{staticClass:"content"},[t._v(t._s(e.comment_content))]),s("div",{staticClass:"showImg"},t._l(e.comment_images,(function(t,e){return s("img",{key:e,attrs:{src:t,alt:""}})})),0),s("div",{staticClass:"btnIcon"},[s("div",[s("van-icon",{attrs:{name:"share-o",size:"20"}})],1),s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("van-icon",{attrs:{name:"chat-o",size:"20"}}),s("span",[t._v(t._s(e.comment_num))])],1),s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("van-icon",{attrs:{name:"good-job-o",size:"20"}}),s("span",[t._v(t._s(e.praise_num))])],1)])])})),0)},y=[],C={data(){return{contentList:null}},methods:{getContentList(){this.axios.get("communicate/mizone_buyer_show_list",{params:{product_id:this.$route.query.product_id,size:10,tag_id:58527,tag_type:2,page:1}}).then((t=>{this.contentList=t.data.data.comments}))}},created(){this.getContentList()}},L=C,k=(0,u.A)(L,g,y,!1,null,"63ed01df",null),q=k.exports,w=function(){var t=this,s=t._self._c;return s("div",[s("van-search",{attrs:{placeholder:"试试搜索你的问题"},on:{input:t.getAnswer},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}}),""===t.value?t._l(t.questionList,(function(e,i){return s("div",{key:i,staticClass:"ListItem",on:{click:function(s){return t.$router.push({path:"/problemdetail",query:{product_id:t.$route.query.product_id,q_id:e.q_id}})}}},[s("div",{staticClass:"question"},[s("p",[t._v(t._s(e.question))])]),s("div",{staticClass:"userInfo"},[s("img",{attrs:{src:e?.icon,alt:""}}),s("div",{staticClass:"username"},[t._v(" "+t._s(e?.nickname)+" "+t._s(e.create_time)+" "+t._s(e.belong_place)+" ")])]),t._l(e.answer_list_v2,(function(e,i){return s("div",{key:i,staticClass:"answer"},[s("img",{attrs:{src:e?.icon,alt:""}}),t._v(" "),s("span",[t._v(t._s(e?.answer))])])})),s("p",{staticClass:"answerNum"},[t._v("全部"+t._s(e.answer_num)+"条评论")])],2)})):t._e(),t.value?[s("p",[t._v("已找到“"+t._s(t.value)+"”相关的问题"+t._s(t.answerList?.length)+"条")]),t._l(t.answerList,(function(e,i){return s("div",{key:i,staticClass:"ListItem"},[s("div",{staticClass:"question",domProps:{innerHTML:t._s(e.h_question)}}),s("p",{staticClass:"answerNum"},[t._v(t._s(e.answer_num)+"个回答 "+t._s(e.follow_num)+"个关注")])])}))]:t._e()],2)},x=[],b={data(){return{value:"",questionList:null,answerList:null}},methods:{getQuestionList(){this.axios.get("communicate/question_list",{params:{product_id:this.$route.query.product_id,after:"",size:10}}).then((t=>{this.questionList=t.data.data?.question_list,console.log("questionList",this.questionList)}))},getAnswer(){this.axios.get("https://apis.netstart.cn/xmsc/communicate/question_search?product_id="+this.$route.query.product_id+"&query="+this.value).then((t=>{console.log(t.data.data?.question_list),this.answerList=t.data.data?.question_list}))}},created(){this.getQuestionList()}},z=b,I=(0,u.A)(z,w,x,!1,null,"676025d4",null),$=I.exports,R={components:{BuyerShowList:q,BuyerRecList:f,CallFamily:$,ContentList:d},data(){return{active:0,communicate:null,contentList:null,tab:["推荐","问大家","评测","买家秀"]}},watch:{active(t){console.log(t)}},methods:{getCommunicate(){this.axios.get("communicate/mizone_home?product_id="+this.$route.query.product_id).then((t=>{this.communicate=t.data.data}))}},activated(){this.getCommunicate()}},S=R,A=(0,u.A)(S,i,a,!1,null,"66e0af73",null),j=A.exports}}]);
//# sourceMappingURL=752.8bfb8ee3.js.map