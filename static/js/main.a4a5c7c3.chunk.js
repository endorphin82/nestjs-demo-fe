(this["webpackJsonpnestjs-demo-fe"]=this["webpackJsonpnestjs-demo-fe"]||[]).push([[3],{109:function(e,t,n){e.exports=n(169)},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var r,a=n(171);!function(e){e.SET_USER="SET_USER"}(r||(r={}));var c,o={Type:r,setUser:Object(a.a)(r.SET_USER)};!function(e){e.SIGN_IN="SIGN_IN",e.SET_AUTH="SET_AUTH",e.SIGN_UP="SIGN_UP"}(c||(c={}));var u,s={Type:c,setAuthInfo:Object(a.a)(c.SET_AUTH),signIn:Object(a.a)(c.SIGN_IN),signUp:Object(a.a)(c.SIGN_UP)};!function(e){e.NEW_PASS="NEW_PASS"}(u||(u={}));var i={Type:u,newpass:Object(a.a)(u.NEW_PASS)};n(50)},137:function(e,t,n){var r={"./development":84,"./development.ts":84,"./production":85,"./production.ts":85};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=137},160:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),o=n.n(c),u=n(47);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s,i=n(14),l=n(25),p=n(97),d=n(17),f=n(26),O=n(175),b=n(12),h=Object(O.a)(Object(f.a)({},b.c.Type.SET_USER,(function(e,t){return t.payload})),null),m=Object(O.a)(Object(f.a)({},b.a.Type.SET_AUTH,(function(e,t){return t.payload})),null),S=Object(O.a)(Object(f.a)({},b.b.Type.NEW_PASS,(function(e,t){return t.payload})),null),T=Object(i.c)({router:l.routerReducer,user:h,auth:m,newpass:S}),E=n(9),v=n.n(E),_=n(10),j=n(176),y=n(36),P=n.n(y),N=n(20);function w(e){return P()({url:N.e,method:"POST",headers:{"Content-Type":s.APPLICATION_JSON},data:e})}function x(e){return P()({url:N.g,method:"POST",headers:{"Content-Type":s.APPLICATION_JSON},data:e})}function A(e){return P()({url:N.b,method:"POST",headers:{"Content-Type":s.APPLICATION_JSON},data:e})}function I(e){return console.log("forgot"),P()({url:N.a,method:"POST",headers:{accept:"*/*","Content-Type":s.APPLICATION_JSON},data:e})}!function(e){e.APPLICATION_JSON="application/json",e.MULTIPART_FORM_DATA="multipart/form-data"}(s||(s={}));var g=n(34),U=n(50),k=v.a.mark(C),R=v.a.mark(W),L=v.a.mark(z),F=v.a.mark(B),G=v.a.mark(J);function C(e){var t,n;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(_.b)(w,e.payload);case 3:return t=r.sent,n=t.data,r.next=7,Object(_.c)(b.a.setAuthInfo(g.pick(n,["accessToken"])));case 7:return r.next=9,Object(_.c)(b.c.setUser(g.omit(n,"accessToken")));case 9:r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),j.b.error("Failed to login!"),console.error(r.t0);case 15:case"end":return r.stop()}}),k,null,[[0,11]])}function W(e){var t;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(_.b)(x,e.payload);case 3:return t=n.sent,t.data,n.next=7,Object(_.c)(Object(l.push)(N.f));case 7:n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),j.b.error("Failed to sign up!"),console.error(n.t0);case 13:case"end":return n.stop()}}),R,null,[[0,9]])}function z(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_.b)(A,e.payload);case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),j.b.error("Failed to NewPassWorker!"),console.error(t.t0);case 9:case"end":return t.stop()}}),L,null,[[0,5]])}function B(e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_.b)(I,e.payload);case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),j.b.error("Failed to ForgotWorker!"),console.error(t.t0);case 9:case"end":return t.stop()}}),F,null,[[0,5]])}function J(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(b.a.Type.SIGN_IN,C);case 2:return e.next=4,Object(_.d)(b.a.Type.SIGN_UP,W);case 4:return e.next=6,Object(_.d)(b.b.Type.NEW_PASS,z);case 6:return e.next=8,Object(_.d)(U.a.Type.FORGOT,B);case 8:case"end":return e.stop()}}),G)}var D=v.a.mark(M);function M(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)([J()]);case 2:case"end":return e.stop()}}),D)}var H=Object(d.a)(),X=Object(p.a)(),V=(window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d)(Object(i.a)(X,Object(l.routerMiddleware)(H))),$=Object(i.e)(T,V);X.run(M);var q=$,K=n(172),Q=n(174);n(160);function Y(){return a.a.createElement("div",{className:"router-lazy-spin"},a.a.createElement(Q.a,{tip:"Loading..."}))}n(166);var Z=a.a.lazy((function(){return n.e(12).then(n.bind(null,329))})),ee=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(11),n.e(9)]).then(n.bind(null,337))})),te=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(10)]).then(n.bind(null,338))})),ne=a.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(14)]).then(n.bind(null,330))})),re=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,339))})),ae=a.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,340))})),ce=a.a.lazy((function(){return Promise.all([n.e(0),n.e(2),n.e(13)]).then(n.bind(null,331))}));var oe=Object(u.b)((function(e){return{auth:e.auth}}))((function(e){return a.a.createElement(K.b,{history:H},a.a.createElement(r.Suspense,{fallback:a.a.createElement(Y,null)},a.a.createElement(K.c,null,e.auth?a.a.createElement(K.a,{exact:!0,path:"/",component:Z}):a.a.createElement(a.a.Fragment,null,a.a.createElement(K.a,{exact:!0,path:"/",component:ee}),a.a.createElement(K.a,{exact:!0,path:"/signup",component:te}),a.a.createElement(K.a,{exact:!0,path:"/signup/success",component:ne}),a.a.createElement(K.a,{exact:!0,path:"/forgot/success",component:ce}),a.a.createElement(K.a,{exact:!0,path:"/auth/forgotPassword",component:re}),a.a.createElement(K.a,{exact:!0,path:"/forgot",component:ae})))))})),ue=(n(168),a.a.createElement(u.a,{store:q},a.a.createElement(oe,null)));o.a.render(ue,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},20:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l}));var r=n(34).extend({environment:"production"},n(137)("./".concat("production")).default),a="".concat(r.BASE_URL,"/auth/signIn"),c="".concat(r.BASE_URL,"/auth/signUp"),o="".concat(r.BASE_URL,"/auth/changemypass"),u="".concat(r.BASE_URL,"/auth/forgotPassword"),s="/signup/success",i="/forgot/success",l="/"},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r,a=n(171);!function(e){e.FORGOT="FORGOT"}(r||(r={}));var c={Type:r,forgot:Object(a.a)(r.FORGOT)}},84:function(e,t,n){"use strict";n.r(t),t.default={BASE_URL:"https://endorphin.fun"}},85:function(e,t,n){"use strict";n.r(t),t.default={BASE_URL:"https://endorphin.fun"}}},[[109,4,5]]]);
//# sourceMappingURL=main.a4a5c7c3.chunk.js.map