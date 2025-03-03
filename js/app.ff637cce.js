(function(){"use strict";var t={4932:function(t,e,n){var i=n(5471),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},o=[],a={name:"App"},l=a,s=n(1656),u=(0,s.A)(l,r,o,!1,null,null,null),d=u.exports,c=n(173),p=function(){var t=this,e=t._self._c;return e("div",[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),e("el-table-column",{attrs:{prop:"name",label:"Name",width:"180"}}),e("el-table-column",{attrs:{prop:"age",label:"Age",width:"180"}}),e("el-table-column",{attrs:{label:"Actions"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",{staticClass:"grab-single",attrs:{type:"primary"},on:{click:function(e){return t.openDialog(n.row)}}},[t._v("แข่งขันรับงาน")])]}}])})],1),e("el-dialog",{attrs:{title:"ยืนยันตัวตน",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e},open:t.initTurnstile,close:t.destroyTurnstile}},[e("p",[t._v("ID: "+t._s(t.selectedRow.id))]),e("p",[t._v("Name: "+t._s(t.selectedRow.name))]),e("p",[t._v("Age: "+t._s(t.selectedRow.age))]),e("div",{attrs:{id:"turnstile-container"}}),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.goToDetails}},[t._v("Go to Details")])],1)])],1)},f=[],h=(n(4114),{data(){return{tableData:[{id:1,name:"EA1-LAK",age:25},{id:2,name:"EA1-AYUU",age:30},{id:3,name:"AYUU-NO3",age:22}],dialogVisible:!1,selectedRow:{}}},methods:{openDialog(t){this.selectedRow=t,this.dialogVisible=!0},initTurnstile(){const t=document.createElement("script");t.src="https://challenges.cloudflare.com/turnstile/v0/api.js",t.async=!0,t.defer=!0,document.head.appendChild(t),t.onload=()=>{window.turnstile&&(this.turnstileWidgetId=window.turnstile.render("#turnstile-container",{sitekey:"0x4AAAAAAA7SN9BgICU6k8R5"}))}},destroyTurnstile(){this.turnstileWidgetId&&window.turnstile&&(window.turnstile.remove(this.turnstileWidgetId),this.turnstileWidgetId=null)},goToDetails(){this.dialogVisible=!1,this.$router.push({name:"Details",params:{id:this.selectedRow.id}})}}}),m=h,v=(0,s.A)(m,p,f,!1,null,"e92ce3a6",null),g=v.exports,b=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Details")]),e("p",[t._v("ID: "+t._s(t.row.id))]),e("p",[t._v("Name: "+t._s(t.row.name))]),e("p",[t._v("Age: "+t._s(t.row.age))]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.$router.push("/")}}},[t._v("Back to Home")])],1)},w=[],_=(n(8111),n(116),{props:["id"],data(){return{tableData:[{id:1,name:"John Doe",age:25},{id:2,name:"Jane Smith",age:30},{id:3,name:"Samuel Green",age:22}],row:{}}},created(){this.row=this.tableData.find((t=>t.id===parseInt(this.id)))}}),y=_,A=(0,s.A)(y,b,w,!1,null,null,null),D=A.exports;i["default"].use(c.Ay);var O=new c.Ay({routes:[{path:"/",name:"Home",component:g},{path:"/details/:id",name:"Details",component:D,props:!0}]}),k=n(1052),T=n.n(k);i["default"].config.productionTip=!1,i["default"].use(T()),new i["default"]({router:O,render:t=>t(d)}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,i,r,o){if(!i){var a=1/0;for(d=0;d<t.length;d++){i=t[d][0],r=t[d][1],o=t[d][2];for(var l=!0,s=0;s<i.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(l=!1,o<a&&(a=o));if(l){t.splice(d--,1);var u=r();void 0!==u&&(e=u)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[i,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,o,a=i[0],l=i[1],s=i[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var d=s(n)}for(e&&e(i);u<a.length;u++)o=a[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(d)},i=self["webpackChunktbroute_clone"]=self["webpackChunktbroute_clone"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(4932)}));i=n.O(i)})();
//# sourceMappingURL=app.ff637cce.js.map