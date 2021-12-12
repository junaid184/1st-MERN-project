(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{202:function(e,t,a){},329:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(57),o=a.n(i),c=(a(202),a(386)),l=a(385),s=a(387),d=a(384),u=a(37),j=a.n(u),h=a(103),b=a(371),p=a(379),m=a(43),O=a(22),x=a(13),f=a(49),g=function(e,t){switch(t.type){case"USER_LOGIN":return t.payload.fullName&&t.payload.email&&t.payload._id?Object(f.a)(Object(f.a)({},e),{},{user:t.payload}):(console.log("invalid data in USER_LOGIN reducer "),e);case"USER_LOGOUT":return Object(f.a)(Object(f.a)({},e),{},{user:null});case"TOGGLE_THEME":return Object(f.a)(Object(f.a)({},e),{},{darkTheme:!e.darkTheme});default:return e}},v=a(2),w=Object(n.createContext)("Initial Value"),y={darkTheme:!0,user:void 0};function C(e){var t=e.children,a=Object(n.useReducer)(g,y),r=Object(x.a)(a,2),i=r[0],o=r[1];return Object(v.jsx)(w.Provider,{value:{state:i,dispatch:o},children:t})}var S="localhost"===window.location.hostname.split(":")[0]?"http://localhost:8000":"",N=m.a({email:m.b("Enter string").email("Enter email").required("this field is required"),password:m.b("enter string").required("password is required")});var E=function(){Object(O.f)();var e=Object(n.useContext)(w),t=(e.state,e.dispatch),a=Object(h.a)({validationSchema:N,initialValues:{email:"",password:""},onSubmit:function(e){console.log(e),j.a.post("".concat(S,"/api/v1/login"),{email:e.email,password:e.password},{withCredentials:!0}).then((function(e){console.log(e),e.data.email&&(t({type:"USER_LOGIN",payload:{fullName:e.data.fullName,email:e.data.email,address:e.data.address,_id:e.data._id}}),alert("login successfull"))})).catch((function(e){alert("login unsuccessfull error found"),console.log("error: ",e)}))}});return Object(v.jsxs)("div",{className:"login",children:[Object(v.jsx)("h1",{children:" Log In"}),Object(v.jsx)("form",{onSubmit:a.handleSubmit,children:Object(v.jsxs)(b.a,{spacing:3,children:[Object(v.jsx)(p.a,{color:"primary",id:"outlined-basic",label:"Email",variant:"outlined",type:"email",name:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(v.jsx)(p.a,{color:"primary",type:"password",id:"filled-basic",label:"Password",variant:"outlined",name:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(v.jsx)(d.a,{variant:"contained",color:"primary",type:"submit",children:"Log in"})]})})]})},T="localhost"===window.location.hostname.split(":")[0]?"http://localhost:8000":"",L=m.a({fullName:m.b("Enter String").required("this field is required"),email:m.b("Enter string").email("Enter email").required("this field is required"),address:m.b("Enter String").required("this field is required"),password:m.b("enter string").min(8,"Password should be of minimum 8 characters").required("password is required")});var k=function(){var e=Object(O.f)(),t=Object(h.a)({validationSchema:L,initialValues:{fullName:"",email:"",password:"",address:""},onSubmit:function(t){j.a.post("".concat(T,"/api/v1/signup"),{fullName:t.fullName,email:t.email,password:t.password,address:t.address}).then((function(t){alert("data Written"),e.push("/login")})).catch((function(e){alert("Some thing went wrong please try with different email")}))}});return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"  Sign Up "}),Object(v.jsx)("form",{onSubmit:t.handleSubmit,children:Object(v.jsxs)(b.a,{spacing:3,children:[Object(v.jsx)(p.a,{color:"primary",id:"outlined-basic",label:"Full Name",variant:"outlined",name:"fullName",value:t.values.fullName,onChange:t.handleChange,error:t.touched.fullName&&Boolean(t.errors.fullName),helperText:t.touched.fullName&&t.errors.fullName}),Object(v.jsx)(p.a,{color:"primary",id:"outlined-basic",label:"Email",variant:"outlined",type:"email",name:"email",value:t.values.email,onChange:t.handleChange,error:t.touched.email&&Boolean(t.errors.email),helperText:t.touched.email&&t.errors.email}),Object(v.jsx)(p.a,{color:"primary",type:"password",id:"filled-basic",label:"Password",variant:"outlined",name:"password",value:t.values.password,onChange:t.handleChange,error:t.touched.password&&Boolean(t.errors.password),helperText:t.touched.password&&t.errors.password}),Object(v.jsx)(p.a,{color:"primary",id:"filled-basic",label:"Address",variant:"outlined",type:"address",name:"address",value:t.values.address,onChange:t.handleChange,error:t.touched.address&&Boolean(t.errors.address),helperText:t.touched.address&&t.errors.address}),Object(v.jsx)(d.a,{variant:"contained",color:"primary",type:"submit",children:"Sign Up"})]})})]})},_=a(388),q=a(389),F=a(181),U=a(383),B=a(378),G=a(390);function P(){return Object(v.jsxs)(_.a,{varient:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",Object(v.jsx)(q.a,{color:"inherit",href:"https://mui.com",children:"Your Website"})," "," ",(new Date).getFullYear(),"."]})}var I=Object(F.a)();var W=function(){var e,t,a,r=n.useContext(w),i=r.state;return r.dispatch,Object(v.jsxs)(U.a,{theme:I,children:[Object(v.jsx)(B.a,{}),Object(v.jsx)("main",{children:Object(v.jsx)(l.a,{sx:{bgcolor:"background.paper",pt:8,pb:6},children:Object(v.jsxs)(G.a,{maxWidth:"sm",children:[Object(v.jsxs)(_.a,{component:"h5",variant:"h4",align:"center",color:"text.primary",gutterBottom:!0,children:["Full Name: ",null===i||void 0===i||null===(e=i.user)||void 0===e?void 0:e.fullName]}),Object(v.jsxs)(_.a,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:["Email: ",null===i||void 0===i||null===(t=i.user)||void 0===t?void 0:t.email]}),Object(v.jsxs)(_.a,{variant:"h5",align:"center",color:"text.secondary",paragraph:!0,children:["Address: ",null===i||void 0===i||null===(a=i.user)||void 0===a?void 0:a.address]}),Object(v.jsxs)(b.a,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center",children:[Object(v.jsx)(d.a,{variant:"contained",children:"Main call to action"}),Object(v.jsx)(d.a,{variant:"outlined",children:"Secondary action"})]})]})})}),Object(v.jsxs)(l.a,{sx:{bgcolor:"background.paper",p:6},component:"footer",children:[Object(v.jsx)(_.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(v.jsx)(_.a,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p",children:"Something here to give the footer a purpose!"}),Object(v.jsx)(P,{})]})]})},R=a(17),D=a(182),A=a(4),M=a(393),Y=a(394),J=a(396),V=a(397),H=a(382),z=a(392),K=a(63),Q=a(175),X=a.n(Q),Z=a(176),$=a.n(Z),ee=a(174),te=a.n(ee),ae=a(395),ne=["expand"];Object(A.a)((function(e){e.expand;var t=Object(D.a)(e,ne);return Object(v.jsx)(z.a,Object(f.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));function re(e){var t=e.text,a=e.email,r=e.name,i=(e.timestamp,e.img),o=n.useState(!1),c=Object(x.a)(o,2);c[0],c[1];return Object(v.jsxs)(M.a,{fullWidth:!0,children:[Object(v.jsx)(Y.a,{avatar:Object(v.jsx)(H.a,{sx:{bgcolor:K.a[500]},"aria-label":"recipe",children:r[0]}),action:Object(v.jsx)(z.a,{"aria-label":"settings",children:Object(v.jsx)(te.a,{})}),title:r,subheader:a}),Object(v.jsx)(ae.a,{component:"img",height:"194",image:i,alt:"Paella dish"}),Object(v.jsx)(J.a,{children:Object(v.jsx)(_.a,{variant:"body2",color:"text.secondary",children:t})}),Object(v.jsxs)(V.a,{disableSpacing:!0,children:[Object(v.jsx)(z.a,{"aria-label":"add to favorites",children:Object(v.jsx)(X.a,{})}),Object(v.jsx)(z.a,{"aria-label":"share",children:Object(v.jsx)($.a,{})})]})]})}var ie=a(180),oe="localhost"===window.location.hostname.split(":")[0]?"http://localhost:8000":"";function ce(){return Object(v.jsxs)(_.a,{varient:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",Object(v.jsx)(q.a,{color:"inherit",href:"https://mui.com",children:"Your Website"})," "," ",(new Date).getFullYear(),"."]})}var le=Object(F.a)();var se=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),a=t[0],r=t[1],i=Object(n.useContext)(w),o=i.state,c=(i.dispatch,Object(n.useState)("")),s=Object(x.a)(c,2),u=s[0],h=s[1],m=Object(n.useState)([]),O=Object(x.a)(m,2),f=O[0],g=O[1],y=Object(n.useState)(!1),C=Object(x.a)(y,2),S=C[0],N=C[1],E=Object(n.useState)(!0),T=Object(x.a)(E,2),L=T[0],k=T[1];return Object(n.useEffect)((function(){j.a.get("".concat(oe,"/api/v1/posts?page=0"),{withCredentials:!0}).then((function(e){console.log("res +++: ",e.data),g(e.data)}))}),[]),Object(n.useEffect)((function(){var e=Object(ie.a)(oe);return e.on("connect",(function(){console.log("connected to server")})),e.on("disconnect",(function(e){console.log("disconnected from server: ",e)})),e.on("POSTS",(function(e){console.log(e),g((function(t){return[e].concat(Object(R.a)(t))}))})),function(){e.close()}}),[]),Object(v.jsxs)(U.a,{theme:le,children:[Object(v.jsx)(B.a,{}),Object(v.jsx)("main",{children:Object(v.jsx)(l.a,{sx:{bgcolor:"background.paper",pt:8,pb:6},children:Object(v.jsxs)(G.a,{maxWidth:"sm",children:[Object(v.jsx)(_.a,{component:"h5",variant:"h4",align:"center",color:"text.primary",gutterBottom:!0,children:"Dashboard Page"}),Object(v.jsx)(p.a,{fullWidth:!0,id:"outlined-multiline-static",multiline:!0,rows:4,value:a,onChange:function(e){r(e.target.value)},placeholder:"What's in your mind"}),Object(v.jsx)(p.a,{fullWidth:!0,type:"file",onChange:function(e){return h(e.target.files[0])},accept:"image/*",name:"fileInput",id:"fileInput",required:!0}),Object(v.jsx)("br",{}),Object(v.jsx)(d.a,{fullWidth:!0,variant:"contained",onClick:function(){if(""!==a&&u){var e=new FormData;e.append("File",u),e.append("text",a),e.append("FullName",o.user.fullName),e.append("id",o.user._id),e.append("name","user"),e.append("details",JSON.stringify({subject:"user post",year:"2021"})),j()({method:"post",data:e,headers:{"Content-Type":"multipart/form-data"},url:"".concat(oe,"/api/v1/post"),withCredentials:!0}).then((function(e){console.log("res: ",e.data),N(!S)})).catch((function(e){console.log(e.message)}))}},children:"Post"}),Object(v.jsx)(b.a,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center"}),Object(v.jsx)("br",{}),f.map((function(e,t){return Object(v.jsx)(re,{name:e.fullName,email:e.email,text:e.postText,img:e.postUrl},t)})),Object(v.jsx)("br",{}),L?Object(v.jsx)(d.a,{onClick:function(){j.a.get("".concat(oe,"/api/v1/posts?page=").concat(f.length),{withCredentials:!0}).then((function(e){var t;if(console.log("res +++: ",e.data),null===(t=e.data)||void 0===t?void 0:t.length){var a=[].concat(Object(R.a)(f),Object(R.a)(e.data));g(a)}else k(!1)}))},children:"Load More ..."}):null]})})}),Object(v.jsxs)(l.a,{sx:{bgcolor:"background.paper",p:6},component:"footer",children:[Object(v.jsx)(_.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Footer"}),Object(v.jsx)(_.a,{variant:"subtitle1",align:"center",color:"text.secondary",component:"p",children:"Something here to give the footer a purpose!"}),Object(v.jsx)(ce,{})]})]})},de=a.p+"static/media/Loading.46059ba8.gif";var ue=function(){return Object(v.jsx)("img",{src:de,alt:"Loading"})},je="localhost"===window.location.hostname.split(":")[0]?"http://localhost:8000":"";var he=function(){var e,t,a=Object(O.f)(),r=Object(n.useContext)(w),i=r.state,o=r.dispatch;return Object(n.useEffect)((function(){return j.a.get("".concat(je,"/api/v1/profile"),{withCredential:!0}).then((function(e){o({type:"USER_LOGIN",payload:{fullName:e.data.fullName,email:e.data.email,_id:e.data._id}})})).catch((function(e){o({type:"USER_LOGOUT"})})),function(){console.log("cleanup")}}),[]),Object(v.jsxs)("div",{className:"App",children:[(null===i||void 0===i||null===(e=i.user)||void 0===e?void 0:e.email)?Object(v.jsx)(l.a,{sx:{flexGrow:1},children:Object(v.jsx)(c.a,{position:"static",children:Object(v.jsxs)(s.a,{children:[Object(v.jsx)(d.a,{variant:"h6",component:"div",onClick:function(){return a.push("/")},children:"Dashbaord"}),Object(v.jsx)(d.a,{color:"inherit",onClick:function(){a.push("/profile")},children:"Profile"}),Object(v.jsx)(d.a,{color:"inherit",varient:"Danger",onClick:function(){j.a.post("".concat(je,"/api/v1/logout"),{},{withCredential:!0}).then((function(e){o({type:"USER_LOGOUT"})}))},children:"Logout"})]})})}):Object(v.jsx)(l.a,{sx:{flexGrow:1},children:Object(v.jsx)(c.a,{position:"static",children:Object(v.jsxs)(s.a,{children:[Object(v.jsx)(d.a,{color:"inherit",onClick:function(){a.push("/signup")},children:"Signup"}),Object(v.jsx)(d.a,{color:"inherit",onClick:function(){a.push("/")},children:"Login"})]})})}),void 0===(null===i||void 0===i?void 0:i.user)?Object(v.jsx)(O.c,{children:Object(v.jsx)(O.a,{exact:!0,path:"/",children:Object(v.jsx)(ue,{})})}):null,null===(null===i||void 0===i?void 0:i.user)?Object(v.jsxs)(O.c,{children:[Object(v.jsx)(O.a,{exact:!0,path:"/",component:E}),Object(v.jsx)(O.a,{exact:!0,path:"/signup",component:k})]}):null,(null===i||void 0===i||null===(t=i.user)||void 0===t?void 0:t.email)?Object(v.jsxs)(O.c,{children:[Object(v.jsx)(O.a,{exact:!0,path:"/",children:Object(v.jsx)(se,{})}),Object(v.jsx)(O.a,{exact:!0,path:"/profile",children:Object(v.jsx)(W,{})})]}):null]})},be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,398)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)}))},pe=a(77);o.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(C,{children:Object(v.jsx)(pe.a,{children:Object(v.jsx)(he,{})})})}),document.getElementById("root")),be()}},[[329,1,2]]]);
//# sourceMappingURL=main.26b90abf.chunk.js.map