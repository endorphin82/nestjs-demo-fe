(this["webpackJsonpnestjs-demo-fe"]=this["webpackJsonpnestjs-demo-fe"]||[]).push([[0],{129:function(e,a,t){"use strict";t.r(a),a.default={BASE_URL:"https://endorphin.fun"}},130:function(e,a,t){"use strict";t.r(a),a.default={BASE_URL:"https://endorphin.fun"}},165:function(e,a,t){e.exports=t(317)},193:function(e,a,t){var r={"./development":129,"./development.ts":129,"./production":130,"./production.ts":130};function n(e){var a=o(e);return t(a)}function o(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=193},217:function(e,a,t){},224:function(e,a,t){},301:function(e,a,t){},302:function(e,a,t){},303:function(e,a,t){},312:function(e,a,t){},313:function(e,a,t){},314:function(e,a,t){},315:function(e,a,t){},316:function(e,a,t){},317:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(16),c=t.n(o),l=t(36);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s,i=t(55),u=t(53),m=t(163),d=t(20),p=t(75),f=t(321),E=t(327);!function(e){e.SET_USER="SET_USER"}(s||(s={}));var h,g={Type:s,setUser:Object(E.a)(s.SET_USER)};!function(e){e.SIGN_IN="SIGN_IN",e.SET_AUTH="SET_AUTH",e.SIGN_UP="SIGN_UP"}(h||(h={}));var b,O={Type:h,setAuthInfo:Object(E.a)(h.SET_AUTH),signIn:Object(E.a)(h.SIGN_IN),signUp:Object(E.a)(h.SIGN_UP)};!function(e){e.NEW_PASS="NEW_PASS"}(b||(b={}));var w,y={Type:b,newpass:Object(E.a)(b.NEW_PASS)};!function(e){e.FORGOT="FORGOT"}(w||(w={}));var v,S={Type:w,forgot:Object(E.a)(w.FORGOT)},P=Object(f.a)(Object(p.a)({},g.Type.SET_USER,(function(e,a){return a.payload})),null),N=Object(f.a)(Object(p.a)({},O.Type.SET_AUTH,(function(e,a){return a.payload})),null),T=Object(f.a)(Object(p.a)({},y.Type.NEW_PASS,(function(e,a){return a.payload})),null),j=Object(i.c)({router:u.routerReducer,user:P,auth:N,newpass:T}),I=t(38),x=t.n(I),_=t(39),F=t(324),k=t(89),U=t.n(k),A=t(85),R=A.extend({environment:"production"},t(193)("./".concat("production")).default),L="".concat(R.BASE_URL,"/auth/signIn"),C="".concat(R.BASE_URL,"/auth/signUp"),G="".concat(R.BASE_URL,"/auth/changemypass"),q="".concat(R.BASE_URL,"/auth/forgotPassword");function W(e){return U()({url:L,method:"POST",headers:{"Content-Type":v.APPLICATION_JSON},data:e})}function B(e){return U()({url:C,method:"POST",headers:{"Content-Type":v.APPLICATION_JSON},data:e})}function M(e){return U()({url:G,method:"POST",headers:{"Content-Type":v.APPLICATION_JSON},data:e})}function V(e){return console.log("forgot"),U()({url:q,method:"POST",headers:{accept:"*/*","Content-Type":v.APPLICATION_JSON},data:e})}!function(e){e.APPLICATION_JSON="application/json",e.MULTIPART_FORM_DATA="multipart/form-data"}(v||(v={}));var J=x.a.mark(Y),D=x.a.mark($),H=x.a.mark(K),z=x.a.mark(Q),X=x.a.mark(Z);function Y(e){var a,t;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(_.b)(W,e.payload);case 3:return a=r.sent,t=a.data,r.next=7,Object(_.c)(O.setAuthInfo(A.pick(t,["accessToken"])));case 7:return r.next=9,Object(_.c)(g.setUser(A.omit(t,"accessToken")));case 9:r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),F.b.error("Failed to login!"),console.error(r.t0);case 15:case"end":return r.stop()}}),J,null,[[0,11]])}function $(e){var a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_.b)(B,e.payload);case 3:return a=t.sent,a.data,t.next=7,Object(_.c)(Object(u.push)("/signup/success"));case 7:t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),F.b.error("Failed to sign up!"),console.error(t.t0);case 13:case"end":return t.stop()}}),D,null,[[0,9]])}function K(e){return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_.b)(M,e.payload);case 3:a.next=9;break;case 5:a.prev=5,a.t0=a.catch(0),F.b.error("Failed to NewPassWorker!"),console.error(a.t0);case 9:case"end":return a.stop()}}),H,null,[[0,5]])}function Q(e){return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_.b)(V,e.payload);case 3:a.next=9;break;case 5:a.prev=5,a.t0=a.catch(0),F.b.error("Failed to ForgotWorker!"),console.error(a.t0);case 9:case"end":return a.stop()}}),z,null,[[0,5]])}function Z(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(O.Type.SIGN_IN,Y);case 2:return e.next=4,Object(_.d)(O.Type.SIGN_UP,$);case 4:return e.next=6,Object(_.d)(y.Type.NEW_PASS,K);case 6:return e.next=8,Object(_.d)(S.Type.FORGOT,Q);case 8:case"end":return e.stop()}}),X)}var ee=x.a.mark(ae);function ae(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)([Z()]);case 2:case"end":return e.stop()}}),ee)}var te=Object(d.f)(),re=Object(m.a)(),ne=(window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d)(Object(i.a)(re,Object(u.routerMiddleware)(te))),oe=Object(i.e)(j,ne);re.run(ae);var ce=oe,le=t(319);t(217);function se(){return n.a.createElement("div",{className:"router-lazy-spin"},n.a.createElement(le.a,{tip:"Loading..."}))}t(223);var ie=t(65),ue=t(320),me=t(323),de=t(325),pe=t(117),fe=t(328),Ee=t(329),he=(t(224),t(50));function ge(e){var a=ue.a.useForm(),t=Object(ie.a)(a,1)[0];return n.a.createElement(ue.a,{onFinish:function(a){t.validateFields().then((function(){e.handleSubmit(a),t.resetFields()})).catch((function(a){return console.log("Validate Failed:",a),e.handleError(a)}))},className:"login-form"},n.a.createElement("h3",{className:"main-label"},"LOG IN"),n.a.createElement(ue.a.Item,{name:"email",rules:[{required:!0,message:"Please add your email!"}]},n.a.createElement(me.a,{type:"email",name:"email",prefix:n.a.createElement(fe.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"})),n.a.createElement(ue.a.Item,{name:"password",rules:[{required:!0,message:"Please add your Password!"}]},n.a.createElement(me.a.Password,{prefix:n.a.createElement(Ee.a,{style:{color:"rgba(0,0,0,.25)"}}),name:"password",placeholder:"Password"})),n.a.createElement(ue.a.Item,{name:"remember",initialValue:!0,valuePropName:"checked"},n.a.createElement(de.a,{name:"remember"},"Remember me")),n.a.createElement(ue.a.Item,null,n.a.createElement(he.a,{to:"/forgot",className:"login-form-forgot"},"Forgot password"),n.a.createElement(pe.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",n.a.createElement(he.a,{to:"/signup"},"register now!"),"Or ",n.a.createElement("div",null)))}console.log("login form");t(301);console.log("login container");var be=Object(l.b)((function(e){return{}}),(function(e){return{signIn:function(a){return e(O.signIn(a))}}}))((function(e){return n.a.createElement("div",{className:"background_cont"},n.a.createElement("div",{className:"login-form-container"},n.a.createElement(ge,{handleSubmit:e.signIn,handleError:console.error})))}));function Oe(){return n.a.createElement(be,null)}t(302);var we=t(322),ye=t(330),ve=t(331),Se=t(332),Pe=t(333),Ne=(t(303),we.a.Option);function Te(e){var a=ue.a.useForm(),t=Object(ie.a)(a,1)[0];return n.a.createElement(ue.a,{onFinish:function(a){t.validateFields().then((function(){console.log("finish values",a),e.handleSubmit(a),t.resetFields()})).catch((function(a){return console.log("Validate Failed:",a),e.handleError(a)}))},className:"signup-form",layout:"horizontal"},n.a.createElement("h3",{className:"main-label"},"SIGN UP"),n.a.createElement(ue.a.Item,{name:"firstName",rules:[{required:!0,message:"Please add your First Name!"}]},n.a.createElement(me.a,{type:"text",name:"firstName",prefix:n.a.createElement(ye.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"First Name"})),n.a.createElement(ue.a.Item,{name:"lastName",rules:[{required:!0,message:"Please add your Last Name!"}]},n.a.createElement(me.a,{type:"text",name:"lastName",prefix:n.a.createElement(ve.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Last Name"})),n.a.createElement(ue.a.Item,{name:"gender",rules:[{required:!0,message:"Please select your gender!"}]},n.a.createElement(we.a,{placeholder:"Select gender"},n.a.createElement(Ne,{value:"male",key:"gender",name:"gender"},n.a.createElement(Se.a,{style:{color:"rgba(0,0,0,.25)"}})," Male"),n.a.createElement(Ne,{value:"female",name:"gender"},n.a.createElement(Pe.a,{style:{color:"rgba(0,0,0,.25)"}})," Female"))),n.a.createElement(ue.a.Item,{name:"email",rules:[{required:!0,message:"Please add your email!"}]},n.a.createElement(me.a,{type:"email",name:"email",prefix:n.a.createElement(fe.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"})),n.a.createElement(ue.a.Item,{name:"password",hasFeedback:!0,rules:[{required:!0,message:"Please add your Password!"}]},n.a.createElement(me.a.Password,{name:"password",prefix:n.a.createElement(Ee.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Password"})),n.a.createElement(ue.a.Item,{name:"confirmPassword",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},n.a.createElement(me.a.Password,{name:"confirmPassword",prefix:n.a.createElement(Ee.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Confirm Password"})),n.a.createElement(ue.a.Item,null,n.a.createElement(pe.a,{type:"primary",htmlType:"submit",className:"signup-form-button"},"Sign Up"),"Or ",n.a.createElement(he.a,{to:"/"},"Log In")))}console.log("SignUpContainer in");var je=Object(l.b)(null,(function(e){return{signUp:function(a){return e(O.signUp(a))}}}))((function(e){return n.a.createElement("div",{className:"signup-form-container"},n.a.createElement(Te,{handleSubmit:e.signUp,handleError:console.error}))}));function Ie(){return n.a.createElement(je,null)}console.log("SignUpContainer");var xe=t(326);var _e=Object(l.b)(null,(function(e){return{forwardTo:function(){return e(Object(u.push)("/"))}}}))((function(e){return n.a.createElement(xe.a,{status:"success",title:"Successfully signed up!",subTitle:"Congratulations! You've just created new account!",extra:[n.a.createElement(pe.a,{type:"primary",key:"console",onClick:e.forwardTo},"Go to SignIn")]})}));t(312),t(313);function Fe(e){var a=ue.a.useForm(),t=Object(ie.a)(a,1)[0],r=Object(d.f)(),o=new URLSearchParams(Object(d.g)().search).get("token");return n.a.createElement(ue.a,{onFinish:function(a){console.log(a);var n={token:o,password:a.confirmPassword};t.validateFields().then((function(){e.handleSubmit(n),console.log(n),t.resetFields(),r.push("/")})).catch((function(a){return console.log("Validate Failed:",a),e.handleError(a)}))},className:"login-form"},n.a.createElement("h3",{className:"main-label"},"CHANGE PASSWORD"),n.a.createElement(ue.a.Item,{name:"password",hasFeedback:!0,rules:[{required:!0,message:"Please add your Password!"}]},n.a.createElement(me.a.Password,{name:"password",prefix:n.a.createElement(Ee.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Password"})),n.a.createElement(ue.a.Item,{name:"confirmPassword",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},n.a.createElement(me.a.Password,{name:"confirmPassword",prefix:n.a.createElement(Ee.a,{theme:"filled",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Confirm Password"})),n.a.createElement(ue.a.Item,null,n.a.createElement(pe.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Change Password"),"Or ",n.a.createElement(he.a,{to:"/signup"},"register now!")))}var ke=Object(l.b)((function(e){return{}}),(function(e){return{newpass:function(a){return e(y.newpass(a))}}}))((function(e){return n.a.createElement("div",{className:"login-form-container"},n.a.createElement(Fe,{handleSubmit:e.newpass,handleError:console.error}))}));function Ue(){return n.a.createElement(ke,null)}t(314),t(315);function Ae(e){var a=ue.a.useForm(),t=Object(ie.a)(a,1)[0],r=Object(d.f)();return n.a.createElement(ue.a,{onFinish:function(a){t.validateFields().then((function(){e.handleSubmit(a),t.resetFields(),r.push("/forgot/success")})).catch((function(a){return console.log("Validate Failed:",a),e.handleError(a)}))},className:"login-form"},n.a.createElement("h3",{className:"main-label"},"ENTER EMAIL"),n.a.createElement(ue.a.Item,{name:"email",rules:[{required:!0,message:"Please add your email!"}]},n.a.createElement(me.a,{type:"email",name:"email",prefix:n.a.createElement(fe.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"})),n.a.createElement(ue.a.Item,null,n.a.createElement(pe.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Send link for reset password"),"Or ",n.a.createElement(he.a,{to:"/signup"},"register now!")))}var Re=Object(l.b)((function(e){return{}}),(function(e){return{forgot:function(a){return e(S.forgot(a))}}}))((function(e){return n.a.createElement("div",{className:"login-form-container"},n.a.createElement(Ae,{handleSubmit:e.forgot,handleError:console.error}))}));function Le(){return n.a.createElement(Re,null)}var Ce=Object(l.b)(null,(function(e){return{forwardTo:function(){return e(Object(u.push)("/"))}}}))((function(e){return n.a.createElement(xe.a,{status:"success",title:"link for reset password send in email!",subTitle:"Check email for reset password",extra:[n.a.createElement(pe.a,{type:"primary",key:"console",onClick:e.forwardTo},"Go to SignIn")]})}));console.log("MainRouter");var Ge=Object(l.b)((function(e){return{auth:e.auth}}))((function(e){return n.a.createElement(d.b,{history:te},n.a.createElement(r.Suspense,{fallback:n.a.createElement(se,null)},n.a.createElement(d.c,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{exact:!0,path:"/",component:Oe}),n.a.createElement(d.a,{exact:!0,path:"/signup",component:Ie}),n.a.createElement(d.a,{exact:!0,path:"/signup/success",component:_e}),n.a.createElement(d.a,{exact:!0,path:"/forgot/success",component:Ce}),n.a.createElement(d.a,{exact:!0,path:"/auth/forgotPassword",component:Ue}),n.a.createElement(d.a,{exact:!0,path:"/forgot",component:Le})))))}));t(316);console.log("index");var qe=n.a.createElement(l.a,{store:ce},n.a.createElement(Ge,null));c.a.render(qe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[165,1,2]]]);
//# sourceMappingURL=main.294208dd.chunk.js.map