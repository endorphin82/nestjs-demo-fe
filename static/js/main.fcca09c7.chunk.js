(this["webpackJsonpnestjs-demo-fe"]=this["webpackJsonpnestjs-demo-fe"]||[]).push([[0],{128:function(e,a,t){"use strict";t.r(a),a.default={BASE_URL:"https://endorphin.fun"}},129:function(e,a,t){"use strict";t.r(a),a.default={BASE_URL:"https://endorphin.fun"}},164:function(e,a,t){e.exports=t(317)},192:function(e,a,t){var n={"./development":128,"./development.ts":128,"./production":129,"./production.ts":129};function r(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=192},215:function(e,a,t){},222:function(e,a,t){},223:function(e,a,t){},301:function(e,a,t){},302:function(e,a,t){},303:function(e,a,t){},312:function(e,a,t){},313:function(e,a,t){},314:function(e,a,t){},315:function(e,a,t){},316:function(e,a,t){},317:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(16),c=t.n(o),l=t(36);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s,i=t(56),u=t(53),m=t(162),d=t(38),p=t(75),f=t(321),E=t(327);!function(e){e.SET_USER="SET_USER"}(s||(s={}));var h,g={Type:s,setUser:Object(E.a)(s.SET_USER)};!function(e){e.SIGN_IN="SIGN_IN",e.SET_AUTH="SET_AUTH",e.SIGN_UP="SIGN_UP"}(h||(h={}));var b,O={Type:h,setAuthInfo:Object(E.a)(h.SET_AUTH),signIn:Object(E.a)(h.SIGN_IN),signUp:Object(E.a)(h.SIGN_UP)};!function(e){e.NEW_PASS="NEW_PASS"}(b||(b={}));var w,y={Type:b,newpass:Object(E.a)(b.NEW_PASS)};!function(e){e.FORGOT="FORGOT"}(w||(w={}));var v,S={Type:w,forgot:Object(E.a)(w.FORGOT)},P=Object(f.a)(Object(p.a)({},g.Type.SET_USER,(function(e,a){return a.payload})),null),N=Object(f.a)(Object(p.a)({},O.Type.SET_AUTH,(function(e,a){return a.payload})),null),T=Object(f.a)(Object(p.a)({},y.Type.NEW_PASS,(function(e,a){return a.payload})),null),j=Object(i.c)({router:u.routerReducer,user:P,auth:N,newpass:T}),I=t(39),x=t.n(I),_=t(40),F=t(324),k=t(89),U=t.n(k),A=t(85),R=A.extend({environment:"production"},t(192)("./".concat("production")).default),L="".concat(R.BASE_URL,"/auth/signIn"),C="".concat(R.BASE_URL,"/auth/signUp"),G="".concat(R.BASE_URL,"/auth/changemypass"),q="".concat(R.BASE_URL,"/auth/forgotPassword");function W(e){return U()({url:L,method:"POST",headers:{"Content-Type":v.APPLICATION_JSON},data:e})}function B(e){return U()({url:C,method:"POST",headers:{"Content-Type":v.APPLICATION_JSON},data:e})}function M(e){return U()({url:G,method:"POST",headers:{"Content-Type":v.APPLICATION_JSON},data:e})}function V(e){return console.log("forgot"),U()({url:q,method:"POST",headers:{accept:"*/*","Content-Type":v.APPLICATION_JSON},data:e})}!function(e){e.APPLICATION_JSON="application/json",e.MULTIPART_FORM_DATA="multipart/form-data"}(v||(v={}));var H=x.a.mark(Y),J=x.a.mark($),D=x.a.mark(K),z=x.a.mark(Q),X=x.a.mark(Z);function Y(e){var a,t;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(_.b)(W,e.payload);case 3:return a=n.sent,t=a.data,n.next=7,Object(_.c)(O.setAuthInfo(A.pick(t,["accessToken"])));case 7:return n.next=9,Object(_.c)(g.setUser(A.omit(t,"accessToken")));case 9:n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),F.b.error("Failed to login!"),console.error(n.t0);case 15:case"end":return n.stop()}}),H,null,[[0,11]])}function $(e){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_.b)(B,e.payload);case 3:return a=t.sent,a.data,t.next=7,Object(_.c)(Object(u.push)("/signup/success"));case 7:t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),F.b.error("Failed to sign up!"),console.error(t.t0);case 13:case"end":return t.stop()}}),J,null,[[0,9]])}function K(e){return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_.b)(M,e.payload);case 3:a.next=9;break;case 5:a.prev=5,a.t0=a.catch(0),F.b.error("Failed to NewPassWorker!"),console.error(a.t0);case 9:case"end":return a.stop()}}),D,null,[[0,5]])}function Q(e){return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_.b)(V,e.payload);case 3:a.next=9;break;case 5:a.prev=5,a.t0=a.catch(0),F.b.error("Failed to ForgotWorker!"),console.error(a.t0);case 9:case"end":return a.stop()}}),z,null,[[0,5]])}function Z(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(O.Type.SIGN_IN,Y);case 2:return e.next=4,Object(_.d)(O.Type.SIGN_UP,$);case 4:return e.next=6,Object(_.d)(y.Type.NEW_PASS,K);case 6:return e.next=8,Object(_.d)(S.Type.FORGOT,Q);case 8:case"end":return e.stop()}}),X)}var ee=x.a.mark(ae);function ae(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)([Z()]);case 2:case"end":return e.stop()}}),ee)}var te=Object(d.a)(),ne=Object(m.a)(),re=(window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d)(Object(i.a)(ne,Object(u.routerMiddleware)(te))),oe=Object(i.e)(j,re);ne.run(ae);var ce=oe,le=t(20),se=t(319);t(215);function ie(){return r.a.createElement("div",{className:"router-lazy-spin"},r.a.createElement(se.a,{tip:"Loading..."}))}t(221),t(222);function ue(){return r.a.createElement("div",{className:"some-class"},"Hello React!")}console.log("Home");var me=t(65),de=t(320),pe=t(323),fe=t(325),Ee=t(116),he=t(328),ge=t(329),be=(t(223),t(55));function Oe(e){var a=de.a.useForm(),t=Object(me.a)(a,1)[0];return r.a.createElement(de.a,{onFinish:function(a){t.validateFields().then((function(){e.handleSubmit(a),t.resetFields()})).catch((function(a){return console.log("Validate Failed:",a),e.handleError(a)}))},className:"login-form"},r.a.createElement("h3",{className:"main-label"},"LOG IN"),r.a.createElement(de.a.Item,{name:"email",rules:[{required:!0,message:"Please add your email!"}]},r.a.createElement(pe.a,{type:"email",name:"email",prefix:r.a.createElement(he.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"})),r.a.createElement(de.a.Item,{name:"password",rules:[{required:!0,message:"Please add your Password!"}]},r.a.createElement(pe.a.Password,{prefix:r.a.createElement(ge.a,{style:{color:"rgba(0,0,0,.25)"}}),name:"password",placeholder:"Password"})),r.a.createElement(de.a.Item,{name:"remember",initialValue:!0,valuePropName:"checked"},r.a.createElement(fe.a,{name:"remember"},"Remember me")),r.a.createElement(de.a.Item,null,r.a.createElement(be.a,{to:"/forgot",className:"login-form-forgot"},"Forgot password"),r.a.createElement(Ee.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",r.a.createElement(be.a,{to:"/signup"},"register now!"),"Or ",r.a.createElement("div",null)))}console.log("login form");t(301);console.log("login container");var we=Object(l.b)((function(e){return{}}),(function(e){return{signIn:function(a){return e(O.signIn(a))}}}))((function(e){return r.a.createElement("div",{className:"background_cont"},r.a.createElement("div",{className:"login-form-container"},r.a.createElement(Oe,{handleSubmit:e.signIn,handleError:console.error})))}));function ye(){return r.a.createElement(we,null)}t(302);var ve=t(322),Se=t(330),Pe=t(331),Ne=t(332),Te=t(333),je=(t(303),ve.a.Option);function Ie(e){var a=de.a.useForm(),t=Object(me.a)(a,1)[0];return r.a.createElement(de.a,{onFinish:function(a){t.validateFields().then((function(){console.log("finish values",a),e.handleSubmit(a),t.resetFields()})).catch((function(a){return console.log("Validate Failed:",a),e.handleError(a)}))},className:"signup-form",layout:"horizontal"},r.a.createElement("h3",{className:"main-label"},"SIGN UP"),r.a.createElement(de.a.Item,{name:"firstName",rules:[{required:!0,message:"Please add your First Name!"}]},r.a.createElement(pe.a,{type:"text",name:"firstName",prefix:r.a.createElement(Se.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"First Name"})),r.a.createElement(de.a.Item,{name:"lastName",rules:[{required:!0,message:"Please add your Last Name!"}]},r.a.createElement(pe.a,{type:"text",name:"lastName",prefix:r.a.createElement(Pe.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Last Name"})),r.a.createElement(de.a.Item,{name:"gender",rules:[{required:!0,message:"Please select your gender!"}]},r.a.createElement(ve.a,{placeholder:"Select gender"},r.a.createElement(je,{value:"male",key:"gender",name:"gender"},r.a.createElement(Ne.a,{style:{color:"rgba(0,0,0,.25)"}})," Male"),r.a.createElement(je,{value:"female",name:"gender"},r.a.createElement(Te.a,{style:{color:"rgba(0,0,0,.25)"}})," Female"))),r.a.createElement(de.a.Item,{name:"email",rules:[{required:!0,message:"Please add your email!"}]},r.a.createElement(pe.a,{type:"email",name:"email",prefix:r.a.createElement(he.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"})),r.a.createElement(de.a.Item,{name:"password",hasFeedback:!0,rules:[{required:!0,message:"Please add your Password!"}]},r.a.createElement(pe.a.Password,{name:"password",prefix:r.a.createElement(ge.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Password"})),r.a.createElement(de.a.Item,{name:"confirmPassword",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},r.a.createElement(pe.a.Password,{name:"confirmPassword",prefix:r.a.createElement(ge.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Confirm Password"})),r.a.createElement(de.a.Item,null,r.a.createElement(Ee.a,{type:"primary",htmlType:"submit",className:"signup-form-button"},"Sign Up"),"Or ",r.a.createElement(be.a,{to:"/"},"Log In")))}console.log("SignUpContainer in");var xe=Object(l.b)(null,(function(e){return{signUp:function(a){return e(O.signUp(a))}}}))((function(e){return r.a.createElement("div",{className:"signup-form-container"},r.a.createElement(Ie,{handleSubmit:e.signUp,handleError:console.error}))}));function _e(){return r.a.createElement(xe,null)}console.log("SignUpContainer");var Fe=t(326);var ke=Object(l.b)(null,(function(e){return{forwardTo:function(){return e(Object(u.push)("/"))}}}))((function(e){return r.a.createElement(Fe.a,{status:"success",title:"Successfully signed up!",subTitle:"Congratulations! You've just created new account!",extra:[r.a.createElement(Ee.a,{type:"primary",key:"console",onClick:e.forwardTo},"Go to SignIn")]})}));t(312),t(313);function Ue(e){var a=de.a.useForm(),t=Object(me.a)(a,1)[0],n=Object(le.f)(),o=new URLSearchParams(Object(le.g)().search).get("token");return r.a.createElement(de.a,{onFinish:function(a){console.log(a);var r={token:o,password:a.confirmPassword};t.validateFields().then((function(){e.handleSubmit(r),console.log(r),t.resetFields(),n.push("/")})).catch((function(a){return console.log("Validate Failed:",a),e.handleError(a)}))},className:"login-form"},r.a.createElement("h3",{className:"main-label"},"CHANGE PASSWORD"),r.a.createElement(de.a.Item,{name:"password",hasFeedback:!0,rules:[{required:!0,message:"Please add your Password!"}]},r.a.createElement(pe.a.Password,{name:"password",prefix:r.a.createElement(ge.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Password"})),r.a.createElement(de.a.Item,{name:"confirmPassword",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},r.a.createElement(pe.a.Password,{name:"confirmPassword",prefix:r.a.createElement(ge.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Confirm Password"})),r.a.createElement(de.a.Item,null,r.a.createElement(Ee.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Change Password"),"Or ",r.a.createElement(be.a,{to:"/signup"},"register now!")))}var Ae=Object(l.b)((function(e){return{}}),(function(e){return{newpass:function(a){return e(y.newpass(a))}}}))((function(e){return r.a.createElement("div",{className:"login-form-container"},r.a.createElement(Ue,{handleSubmit:e.newpass,handleError:console.error}))}));function Re(){return r.a.createElement(Ae,null)}t(314),t(315);function Le(e){var a=de.a.useForm(),t=Object(me.a)(a,1)[0],n=Object(le.f)();return r.a.createElement(de.a,{onFinish:function(a){t.validateFields().then((function(){e.handleSubmit(a),t.resetFields(),n.push("/forgot/success")})).catch((function(a){return console.log("Validate Failed:",a),e.handleError(a)}))},className:"login-form"},r.a.createElement("h3",{className:"main-label"},"ENTER EMAIL"),r.a.createElement(de.a.Item,{name:"email",rules:[{required:!0,message:"Please add your email!"}]},r.a.createElement(pe.a,{type:"email",name:"email",prefix:r.a.createElement(he.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"})),r.a.createElement(de.a.Item,null,r.a.createElement(Ee.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Send link for reset password"),"Or ",r.a.createElement(be.a,{to:"/signup"},"register now!")))}var Ce=Object(l.b)((function(e){return{}}),(function(e){return{forgot:function(a){return e(S.forgot(a))}}}))((function(e){return r.a.createElement("div",{className:"login-form-container"},r.a.createElement(Le,{handleSubmit:e.forgot,handleError:console.error}))}));function Ge(){return r.a.createElement(Ce,null)}var qe=Object(l.b)(null,(function(e){return{forwardTo:function(){return e(Object(u.push)("/"))}}}))((function(e){return r.a.createElement(Fe.a,{status:"success",title:"link for reset password send in email!",subTitle:"Check email for reset password",extra:[r.a.createElement(Ee.a,{type:"primary",key:"console",onClick:e.forwardTo},"Go to SignIn")]})}));console.log("MainRouter");var We=Object(l.b)((function(e){return{auth:e.auth}}))((function(e){return r.a.createElement(le.b,{history:te},r.a.createElement(n.Suspense,{fallback:r.a.createElement(ie,null)},r.a.createElement(le.c,null,e.auth?r.a.createElement(le.a,{exact:!0,path:"/",component:ue}):r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{exact:!0,path:"/",component:ye}),r.a.createElement(le.a,{exact:!0,path:"/signup",component:_e}),r.a.createElement(le.a,{exact:!0,path:"/signup/success",component:ke}),r.a.createElement(le.a,{exact:!0,path:"/forgot/success",component:qe}),r.a.createElement(le.a,{exact:!0,path:"/auth/forgotPassword",component:Re}),r.a.createElement(le.a,{exact:!0,path:"/forgot",component:Ge})))))}));t(316);console.log("index");var Be=r.a.createElement(l.a,{store:ce},r.a.createElement(We,null));c.a.render(Be,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[164,1,2]]]);
//# sourceMappingURL=main.fcca09c7.chunk.js.map