(this["webpackJsonpvirtual-backend"]=this["webpackJsonpvirtual-backend"]||[]).push([[0],{227:function(e,t,a){e.exports=a(461)},290:function(e,t,a){},457:function(e,t,a){},458:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),i=(a(232),a(25)),u=a(16),m=(a(235),a(72)),o=a(465),d=a(66),s=a(63),E=(a(156),a(124)),f=(a(462),a(223)),p=(a(241),a(154)),h=(a(243),a(155)),b=(a(157),a(94)),v=(a(90),a(38)),_=(a(89),a(37)),k=(a(49),a(11)),y=a(224),g=(a(161),a(84)),j=a(150),x=a.n(j),O=a(62),I=a(195),w=(a(160),a(60)),S=(a(163),a(65)),C=a(463),F=a(464),U=a(21),N=a.n(U),R=function(e,t){return N.a.post("/manage/drink",Object(O.a)({},e,{status:t}))},q=a(196),z=function(e,t){var a=q.upload(e,t,"33mFN7fKO2h85Lf46XvJtkRAwu6HQ--KMWnbEqHn:8RPqNE7CHyJP9qD5QMvsF7mWFAY=:eyJzY29wZSI6InNjZWxleS1zdG9yZSIsImRlYWRsaW5lIjoxNjE1MzA3MTg0fQ==",{},{});return new Promise((function(e,t){a.subscribe({next:function(e){},error:function(e){t(e)},complete:function(t){e(t)}})}))},D=(a(290),S.a.Item),K=w.a.Option,Y={wrapperCol:{span:24}},H={drink_avatartUrl:"",drink_form:[],drink_name:"",drink_price:0},M=function(){var e,t=Object(n.useState)(!1),a=Object(u.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),m=Object(u.a)(i,2),o=m[0],d=m[1],s=Object(n.useState)(!1),j=Object(u.a)(s,2),U=j[0],q=j[1],M=Object(n.useState)(1),A=Object(u.a)(M,2),B=A[0],L=A[1],V=Object(n.useState)([]),W=Object(u.a)(V,2),J=W[0],P=W[1],Q=Object(n.useState)([]),T=Object(u.a)(Q,2),Z=T[0],G=T[1],X=Object(n.useState)(H),$=Object(u.a)(X,2),ee=$[0],te=$[1],ae=S.a.useForm(),ne=Object(u.a)(ae,1)[0],re={name:"",value:0},le=function(){var e=Object(I.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.file,d(!0),n=Date.now().toString(),e.next=5,z(a,n);case 5:d(!1),te(Object(O.a)({},ee,{drink_avatartUrl:"https://img.qinyongli.cn/".concat(n)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){te(Object(O.a)({},ee,{drink_form:[].concat(Object(y.a)(ee.drink_form),[re])})),q(!1)},ie=r.a.createElement("div",null,o?r.a.createElement(C.a,null):r.a.createElement(F.a,null),r.a.createElement("div",null,"\u4e0a\u4f20")),ue=(e={onDel:function(e){R(e,2).then((function(e){me(),g.a.success("\u5220\u9664\u6210\u529f")}))},onEdit:function(e){L(3),c(!0),te(e),ne.setFieldsValue({drink_name:e.drink_name,drink_price:e.drink_price,drink_avatartUrl:e.drink_avatartUrl})}},[{title:"\u5e8f\u53f7",dataIndex:"id",render:function(e,t,a){return a+1}},{title:"\u540d\u79f0",dataIndex:"drink_name"},{title:"\u539f\u6599",dataIndex:"drink_form",render:function(e){var t=e.map((function(e,t){return r.a.createElement("div",{key:t},"".concat(e.name,": ").concat(e.value,"g"))}));return r.a.createElement(r.a.Fragment,null,t)}},{title:"\u4ef7\u683c",dataIndex:"drink_price"},{title:"\u7f29\u7565\u56fe",width:150,dataIndex:"drink_avatartUrl",render:function(e){return r.a.createElement("img",{width:"100%",src:e,alt:""})}},{title:"\u64cd\u4f5c",dataIndex:"id",render:function(t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{onClick:function(){return e.onDel(a)},type:"primary",size:"small"},"\u5220\u9664"),r.a.createElement(k.a,{onClick:function(){return e.onEdit(a)},style:{marginLeft:10},type:"primary",size:"small"},"\u7f16\u8f91"))}}]),me=function(){N.a.get("/manage/drink").then((function(e){G(e)})),N.a.get("/manage/choice").then((function(e){P(e)}))};return Object(n.useEffect)((function(){me()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{title:"\u996e\u6599\u914d\u7f6e",extra:r.a.createElement(k.a,{type:"primary",onClick:function(){L(1),c(!0),te(H),ne.setFieldsValue({drink_name:ee.drink_name,drink_price:ee.drink_price,drink_avatartUrl:ee.drink_avatartUrl})}},"\u6dfb\u52a0")},r.a.createElement(_.a,{rowKey:"drink_name",bordered:!0,dataSource:Z,columns:ue})),r.a.createElement(E.a,{title:1===B?"\u6dfb\u52a0\u996e\u6599":"\u7f16\u8f91\u996e\u6599",visible:l,footer:null,onCancel:function(){return c(!1)}},r.a.createElement(S.a,Object.assign({layout:"vertical",form:ne,onFinish:function(e){R(Object(O.a)({},ee,{drink_name:e.drink_name,drink_price:e.drink_price}),B).then((function(e){g.a.success("\u63d0\u4ea4\u6210\u529f"),me(),c(!1)}))}},Y),r.a.createElement(D,{name:"drink_name",label:"\u540d\u79f0",required:!0},r.a.createElement(b.a,{disabled:3===B,width:"100%",placeholder:"\u996e\u6599\u540d\u79f0"})),r.a.createElement(D,{name:"drink_form",label:"\u539f\u6599",required:!0},r.a.createElement("div",{style:{display:"flex",alignItems:"flex-end",flexWrap:"wrap"}},ee.drink_form.map((function(e,t){return r.a.createElement(h.a,{closable:!0,onClose:function(){return function(e){ee.drink_form=ee.drink_form.filter((function(t){return e!==t}))}(e)},key:t},"".concat(e.name," ").concat(e.value,"g"))})),U?r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{style:{width:78},size:"small",onChange:function(e){re.name=e}},J.map((function(e){return r.a.createElement(K,{disabled:ee.drink_form.some((function(t){return t.name===e.choice_name})),value:e.choice_name},e.choice_name)}))),r.a.createElement(p.a,{style:{width:50},size:"small",min:1,defaultValue:1,onChange:function(e){e&&(re.value=e)},onPressEnter:ce}),r.a.createElement(k.a,{onClick:ce,type:"primary",size:"small"},"\u786e\u8ba4")):r.a.createElement(h.a,{className:"tag-plus",onClick:function(){return q(!0)}},r.a.createElement(F.a,null)))),r.a.createElement(D,{name:"drink_price",label:"\u4ef7\u683c",required:!0},r.a.createElement(p.a,{width:"100%",placeholder:"\u996e\u6599\u4ef7\u683c"})),r.a.createElement(D,{name:"drink_avatartUrl",label:"\u7f29\u7565\u56fe",required:!0},r.a.createElement(f.a,{listType:"picture-card",showUploadList:!1,customRequest:le},ee.drink_avatartUrl?r.a.createElement("img",{src:ee.drink_avatartUrl,alt:"thumbnailUrl",style:{width:"100%"}}):ie)),r.a.createElement(D,{style:{textAlign:"center"}},r.a.createElement(k.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4")))))},A=[{title:"\u5e8f\u53f7",dataIndex:"id",render:function(e,t,a){return a+1}},{title:"\u59d3\u540d",dataIndex:"user_name"},{title:"\u7528\u6237\u5934\u50cf",dataIndex:"user_avatartUrl",width:150,render:function(e){return r.a.createElement("img",{style:{width:"100%"},src:e,alt:""})}},{title:"\u624b\u673a\u53f7\u7801",dataIndex:"user_phone"},{title:"\u4f4f\u5740",dataIndex:"user_home",render:function(e,t){return r.a.createElement("div",null,t.user_home,t.user_menpai)}}],B=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=function(){N.a.get("/manage/user").then((function(e){l(e)}))};return Object(n.useEffect)((function(){c()}),[]),r.a.createElement("div",null,r.a.createElement(v.a,{title:"\u7528\u6237\u5217\u8868"},r.a.createElement(_.a,{bordered:!0,rowKey:"user_id",columns:A,dataSource:a})))},L=[{title:"\u5e8f\u53f7",dataIndex:"id",width:150,render:function(e,t,a){return a+1}},{title:"\u7528\u6237ID",dataIndex:"man_id",width:150},{title:"\u7528\u6237\u5934\u50cf",dataIndex:"man_avatartUrl",width:150,render:function(e){return r.a.createElement("img",{style:{width:"100%"},src:e,alt:""})}},{title:"\u624b\u673a\u53f7\u7801",dataIndex:"man_phone",width:150}],V=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=function(){N.a.get("/manage/gongjuren").then((function(e){l(e)}))};return Object(n.useEffect)((function(){c()}),[]),r.a.createElement("div",null,r.a.createElement(v.a,{title:"\u914d\u9001\u5458\u5217\u8868"},r.a.createElement(_.a,{rowKey:"man_id",bordered:!0,columns:L,dataSource:a})))},W=(a(159),a(42)),J=a(220),P=a.n(J),Q=(a(457),function(){var e=[],t=Object(n.useState)(-1),a=Object(u.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)([]),m=Object(u.a)(i,2),o=m[0],d=m[1];Object(n.useEffect)((function(){N.a.get("/manage/history").then((function(e){d(e)}))}),[]),e=-1===l?o:o.filter((function(e){return e.status===l}));var s=[{title:"\u5e8f\u53f7",dataIndex:"id",render:function(e,t,a){return a+1}},{title:"\u8ba2\u5355\u5185\u5bb9",dataIndex:"drink_form",render:function(e){return r.a.createElement(r.a.Fragment,null,e.map((function(e,t){return r.a.createElement("div",{key:t},1===e.class?r.a.createElement("div",null,e.form.name,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{style:{marginRight:5}},"\u6570\u91cf:"),e.form.value),r.a.createElement("li",null,r.a.createElement("span",{style:{marginRight:5}},"\u4ef7\u683c:"),e.price))):r.a.createElement("div",null,"\u81ea\u914d\u996e\u6599",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{style:{marginRight:5}},"\u6570\u91cf:"),e.number),r.a.createElement("li",null,r.a.createElement("span",{style:{marginRight:5}},"\u7ec4\u6210:"),e.form.reduce((function(e,t){return"".concat(e,"+").concat(t.name,"\xb7").concat(t.value)}),"").slice(1)),r.a.createElement("li",null,r.a.createElement("span",{style:{marginRight:5}},"\u4ef7\u683c:"),e.price))))})))}},{title:"\u91d1\u989d",dataIndex:"drink_form",render:function(e){var t=0;return e.forEach((function(e){1===e.class?t+=e.price*e.form.value:t+=e.price*e.number})),r.a.createElement("div",null,t)}},{title:"\u8ba2\u5355\u65f6\u95f4",dataIndex:"order_start_time",render:function(){return r.a.createElement("div",null,P()().format("YYYY-MM-DD HH:mm:ss"))}},{title:"\u6536\u8d27\u4eba",dataIndex:"user",width:220,render:function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"\u59d3\u540d: ",t.user_name),r.a.createElement("div",null,"\u624b\u673a\u53f7\u7801: ",t.user_phone),r.a.createElement("div",null,"\u5730\u5740: ",t.user_home+t.user_menpai))}},{title:"\u914d\u9001\u4eba",dataIndex:"deliver",render:function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"\u914d\u9001\u4ebaid: ",t.man_id),r.a.createElement("div",null,"\u624b\u673a\u53f7\u7801: ",t.man_phone))}},{title:"\u8ba2\u5355\u72b6\u6001",dataIndex:"status",render:function(e){return{1:"\u5236\u4f5c\u4e2d",2:"\u914d\u9001\u4e2d",3:"\u8ba2\u5355\u5b8c\u6210"}[e]}}];return r.a.createElement("div",null,r.a.createElement(v.a,{title:"\u8ba2\u5355\u5217\u8868",extra:r.a.createElement(W.a.Group,{value:l,onChange:function(e){c(e.target.value)}},r.a.createElement(W.a.Button,{value:-1},"\u5168\u90e8"),r.a.createElement(W.a.Button,{value:1},"\u5236\u4f5c\u4e2d"),r.a.createElement(W.a.Button,{value:2},"\u914d\u9001\u4e2d"),r.a.createElement(W.a.Button,{value:3},"\u5b8c\u6210\u8ba2\u5355"))},r.a.createElement(_.a,{rowKey:"order_id",bordered:!0,columns:s,dataSource:e})))}),T=function(e){return N.a.post("/manage/choice",Object(O.a)({choice_avatartUrl:""},e))},Z=S.a.Item,G={wrapperCol:{span:24}},X=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),i=Object(u.a)(c,2),m=i[0],o=i[1],d=Object(n.useState)([]),s=Object(u.a)(d,2),f=s[0],p=s[1],h=S.a.useForm(),y=Object(u.a)(h,1)[0],j=function(){N.a.get("/manage/choice").then((function(e){p(e)}))};Object(n.useEffect)((function(){j()}),[]);var x,O=(x={onDel:function(e,t){T({name:e,number:t.choice_num,status:2}).then((function(e){g.a.success("\u5220\u9664\u6210\u529f"),j()}))},onEdit:function(e,t){o(3),l(!0),y.setFieldsValue(t)}},[{title:"\u5e8f\u53f7",dataIndex:"id",render:function(e,t,a){return a+1}},{title:"\u540d\u79f0",dataIndex:"choice_name"},{title:"\u4f59\u91cf",dataIndex:"choice_num"},{title:"\u64cd\u4f5c",dataIndex:"choice_name",render:function(e,t){return r.a.createElement("div",null,r.a.createElement(k.a,{onClick:function(){return x.onDel(e,t)},size:"small",type:"primary"},"\u5220\u9664"),r.a.createElement(k.a,{onClick:function(){return x.onEdit(e,t)},size:"small",style:{marginLeft:10},type:"primary"},"\u7f16\u8f91"))}}]);return r.a.createElement("div",null,r.a.createElement(v.a,{title:"\u539f\u6599\u914d\u7f6e",extra:r.a.createElement(k.a,{onClick:function(){o(1),l(!0),y.setFieldsValue({choice_name:"",choice_num:""})},type:"primary"},"\u6dfb\u52a0")},r.a.createElement(_.a,{rowKey:"choice_name",dataSource:f,columns:O,bordered:!0})),r.a.createElement(E.a,{title:1===m?"\u6dfb\u52a0\u539f\u6599":"\u7f16\u8f91\u539f\u6599",visible:a,footer:null,onCancel:function(){return l(!1)}},r.a.createElement(S.a,Object.assign({},G,{form:y,onFinish:function(e){T({name:e.choice_name,number:e.choice_num,status:m}).then((function(e){l(!1),g.a.success("\u63d0\u4ea4\u6210\u529f"),j()}))},layout:"vertical"}),r.a.createElement(Z,{name:"choice_name",label:"\u540d\u79f0",required:!0},r.a.createElement(b.a,{disabled:3===m,width:"100%",placeholder:"\u539f\u6599\u540d\u79f0"})),r.a.createElement(Z,{name:"choice_num",label:"\u4f59\u91cf",required:!0},r.a.createElement(b.a,{width:"100%",placeholder:"\u539f\u6599\u4f59\u91cf"})),r.a.createElement(Z,{style:{textAlign:"center"}},r.a.createElement(k.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4")))))},$=(a(458),m.a.Header),ee=m.a.Content,te=m.a.Footer,ae=m.a.Sider;var ne=function(){var e=Object(n.useState)((function(){var e=window.location.pathname.slice(1);return e||"material"})),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement(d.a,null,r.a.createElement(m.a,{style:{height:"100vh"}},r.a.createElement(ae,null,r.a.createElement(d.b,{onClick:function(){l("material")},to:"/"},r.a.createElement("div",{className:"logo"},"\u865a\u62df\u8fd0\u8425\u540e\u53f0")),r.a.createElement(i.a,{theme:"dark",mode:"inline",onSelect:function(e){l(e.key)},selectedKeys:[a],defaultSelectedKeys:[a]},r.a.createElement(i.a.Item,{key:"material"},r.a.createElement(d.b,{to:"/"},r.a.createElement("span",{className:"nav-text"},"\u539f\u6599\u914d\u7f6e"))),r.a.createElement(i.a.Item,{key:"drink"},r.a.createElement(d.b,{to:"/drink"},r.a.createElement("span",{className:"nav-text"},"\u996e\u6599\u914d\u7f6e"))),r.a.createElement(i.a.Item,{key:"user"},r.a.createElement(d.b,{to:"/user"},r.a.createElement("span",{className:"nav-text"},"\u7528\u6237\u5217\u8868"))),r.a.createElement(i.a.Item,{key:"deliver"},r.a.createElement(d.b,{to:"/deliver"},r.a.createElement("span",{className:"nav-text"},"\u914d\u9001\u5458\u8868"))),r.a.createElement(i.a.Item,{key:"orders"},r.a.createElement(d.b,{to:"/orders"},r.a.createElement("span",{className:"nav-text"},"\u8ba2\u5355\u5217\u8868"))))),r.a.createElement(m.a,null,r.a.createElement($,{className:"header"},r.a.createElement(o.a,{style:{marginRight:5}}),"root"),r.a.createElement(ee,{style:{margin:"24px 16px 0"}},r.a.createElement("div",{className:"content",style:{padding:24,minHeight:360}},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:X}),r.a.createElement(s.a,{path:"/drink",exact:!0,component:M}),r.a.createElement(s.a,{path:"/user",component:B}),r.a.createElement(s.a,{path:"/deliver",component:V}),r.a.createElement(s.a,{path:"/orders",component:Q})))),r.a.createElement(te,{style:{textAlign:"center"}},"Virtual Manage Backend \xa92020 Created by QinYongLi")))))};a(460);N.a.defaults.baseURL="https://www.sxyuening.cn",N.a.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)})),c.a.render(r.a.createElement(ne,null),document.getElementById("root"))}},[[227,1,2]]]);
//# sourceMappingURL=main.b5cf499c.chunk.js.map