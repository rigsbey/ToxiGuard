(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{7687:function(e,s,a){Promise.resolve().then(a.bind(a,378))},378:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return m}});var t=a(3827),r=a(4090),l=a(7065),n=a(1221),i=a(7907),c=a(8792),o=a(7960),d=a(1160),u=a(8722);function m(){let[e,s]=(0,r.useState)(""),[a,m]=(0,r.useState)(""),[x,h]=(0,r.useState)(""),[p,f]=(0,r.useState)(!1),g=(0,i.useRouter)(),b=async s=>{s.preventDefault(),f(!0),h("");try{let s=await (0,l.e5)(n.I,e,a);console.log("Successful login:",s.user),g.push("/profile")}catch(e){e instanceof Error?y(e):h("Unknown error")}finally{f(!1)}},y=e=>{let s=e.code||"auth/unknown-error";switch(console.error("Firebase Error:",s,e.message),s){case"auth/invalid-email":h("Invalid email address");break;case"auth/user-disabled":h("This account has been disabled");break;case"auth/user-not-found":h("No account found with this email");break;case"auth/wrong-password":h("Incorrect password");break;default:h("Login failed. Please try again.")}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.default,{}),(0,t.jsx)("main",{className:"pt-32 pb-32",children:(0,t.jsx)("div",{className:"max-w-md mx-auto px-4",children:(0,t.jsxs)("div",{className:"bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-8",children:[(0,t.jsxs)(o.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center mb-10",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold mb-2",children:"Sign In"}),(0,t.jsx)("p",{className:"text-gray-600",children:"Sign in to access your risk analysis dashboard"})]}),x&&(0,t.jsx)(o.E.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-center text-sm",children:x}),(0,t.jsxs)("form",{onSubmit:b,className:"space-y-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-gray-700 mb-2 text-sm font-medium",htmlFor:"email",children:"Email"}),(0,t.jsx)("input",{id:"email",type:"email",value:e,onChange:e=>s(e.target.value),className:"w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"you@example.com",required:!0})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-gray-700 mb-2 text-sm font-medium",htmlFor:"password",children:"Password"}),(0,t.jsx)("input",{id:"password",type:"password",value:a,onChange:e=>m(e.target.value),className:"w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",placeholder:"••••••••",required:!0})]}),(0,t.jsx)("button",{type:"submit",disabled:p,className:"w-full bg-blue-600 text-white py-3.5 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 font-medium text-base mt-4",children:p?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("svg",{className:"animate-spin h-5 w-5 mx-auto",viewBox:"0 0 24 24",children:[(0,t.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",fill:"none"}),(0,t.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}):"Sign In"})]}),(0,t.jsxs)("p",{className:"text-center mt-8 text-gray-600",children:["Don't have an account?"," ",(0,t.jsx)(c.default,{href:"/register",className:"text-blue-600 hover:underline font-medium",children:"Sign Up"})]})]})})}),(0,t.jsx)(u.default,{})]})}},8722:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return n}});var t=a(3827),r=a(8792),l=a(7888);function n(){let e=(0,l.z)("faq-section");return(0,t.jsx)("footer",{className:"bg-gray-100 text-gray-800 py-8",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold",children:"ToxiGuard"}),(0,t.jsx)("p",{className:"text-gray-600",children:"AI-powered protection against toxic clients and payment risks."}),(0,t.jsxs)("p",{className:"text-gray-500 text-xs",children:["\xa9 ",new Date().getFullYear()," ToxiGuard. All rights reserved."]})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("h3",{className:"font-semibold mb-2",children:"Products"}),(0,t.jsx)("nav",{className:"space-y-2",children:(0,t.jsx)("button",{onClick:e,className:"block hover:underline text-left",children:"FAQ"})})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("h3",{className:"font-semibold mb-2",children:"Support"}),(0,t.jsx)("nav",{className:"space-y-2",children:(0,t.jsx)("a",{href:"mailto:toxiguard.post@gmail.com",className:"block hover:underline",children:"toxiguard.post@gmail.com"})})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("h3",{className:"font-semibold mb-2",children:"Legal"}),(0,t.jsxs)("nav",{className:"space-y-2",children:[(0,t.jsx)(r.default,{href:"/terms",className:"block hover:underline",children:"Terms"}),(0,t.jsx)(r.default,{href:"/privacy",className:"block hover:underline",children:"Privacy"})]})]})]})})})}},1160:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return x}});var t=a(3827),r=a(8792),l=a(7888),n=a(4090),i=a(8621),c=a(5029),o=a(2116),d=a(7065),u=a(1221),m=a(7907);function x(){let e=(0,m.useRouter)(),s="/"===(0,m.usePathname)(),a=(0,l.z)("faq-section"),x=(0,l.z)("how-it-works-section"),h=(0,l.z)(o.S.RISK_SCANNER),p=(0,l.z)(o.S.RESOURCES),f=(0,l.z)("waitlist-section"),g=async()=>{try{await (0,d.w7)(u.I),e.push("/login")}catch(e){console.error("Error logging out:",e)}},b=[{label:"How it works",onClick:x},{label:"Demo",onClick:h},{label:"Resources",onClick:p},{label:"FAQ",onClick:a}],[y,j]=(0,n.useState)(!1),N=e=>{e(),j(!1)};return(0,t.jsxs)("nav",{className:"fixed w-full bg-white/80 backdrop-blur-lg shadow-sm z-50 top-0 left-0",children:[(0,t.jsx)("div",{className:"max-w-6xl mx-auto px-4",children:(0,t.jsxs)("div",{className:"flex h-16 items-center justify-between",children:[(0,t.jsxs)(r.default,{href:"/",className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-xl",children:"\uD83D\uDEE1️"}),(0,t.jsx)("span",{className:"text-xl font-medium",children:"ToxiGuard"})]}),s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"hidden md:flex bg-white/75 backdrop-blur-lg border border-gray-200 rounded-full px-2 py-0.5 items-center shadow-sm",children:b.map(e=>(0,t.jsx)("button",{onClick:e.onClick,className:"px-3 py-1.5 text-sm text-gray-600/60 hover:text-gray-900/80 transition-colors rounded-md",children:e.label},e.label))}),(0,t.jsx)("div",{className:"md:hidden",children:(0,t.jsx)("button",{onClick:()=>j(!y),className:"p-2 focus:outline-none",children:y?(0,t.jsx)(i.Z,{className:"w-6 h-6 text-gray-600"}):(0,t.jsx)(c.Z,{className:"w-6 h-6 text-gray-600"})})}),(0,t.jsx)("div",{className:"hidden md:flex items-center gap-4",children:(0,t.jsx)("button",{onClick:f,className:"bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors",children:"Try for free"})})]}):(0,t.jsx)("div",{className:"flex items-center gap-4",children:(0,t.jsx)("button",{onClick:g,className:"text-gray-600 hover:text-gray-900 transition-colors text-sm",children:"Sign Out"})})]})}),s&&y&&(0,t.jsx)("div",{className:"md:hidden bg-white shadow-lg",children:(0,t.jsx)("div",{className:"flex flex-col space-y-1 p-4",children:b.map(e=>(0,t.jsx)("button",{onClick:()=>N(e.onClick),className:"text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md",children:e.label},e.label))})})]})}},2116:function(e,s,a){"use strict";a.d(s,{S:function(){return t}});let t={HERO:"hero",PROBLEM:"problem",DEMO:"demo",FEATURES:"features",TESTIMONIALS:"testimonials",RESOURCES:"resources",WAITLIST:"waitlist",RISK_SCANNER:"risk-scanner"}},7888:function(e,s,a){"use strict";function t(e){return()=>{setTimeout(()=>{let s=document.querySelector("header"),a=(null==s?void 0:s.offsetHeight)||100,t=document.getElementById(e);if(t||(t=document.querySelector('[data-section="'.concat(e,'"]'))),t){let e=t.offsetTop-a-40;window.scrollTo({top:e,behavior:"smooth"})}else console.warn("Section not found: ".concat(e))},100)}}a.d(s,{z:function(){return t}}),a(2116)},1221:function(e,s,a){"use strict";a.d(s,{I:function(){return i}});var t=a(6142),r=a(7065),l=a(3493);let n=(0,t.ZF)({apiKey:"AIzaSyAFYs5D_PsQzTpgQ84UrE-vj3xkpfzWIyM",authDomain:"toxiguard-6056c.firebaseapp.com",projectId:"toxiguard-6056c",storageBucket:"toxiguard-6056c.firebasestorage.app",messagingSenderId:"1088983928672",appId:"1:1088983928672:web:2b917235354e94212c9805",measurementId:"G-XYZXMBVPLT"}),i=(0,r.v0)(n);(0,l.IH)(n)}},function(e){e.O(0,[896,250,142,548,971,69,744],function(){return e(e.s=7687)}),_N_E=e.O()}]);