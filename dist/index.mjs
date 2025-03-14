import e,{useState as t,useRef as n,useEffect as r}from"react";var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function a(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(e){a(e)}}function c(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=c(0),i.throw=c(1),i.return=c(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}function c(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var l,s={exports:{}},u={};var p,f,d={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function y(){return p||(p=1,"production"!==process.env.NODE_ENV&&function(){function t(e){if(null==e)return null;if("function"==typeof e)return e.$$typeof===A?null:e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case C:return"Fragment";case S:return"Portal";case O:return"Profiler";case R:return"StrictMode";case T:return"Suspense";case $:return"SuspenseList"}if("object"==typeof e)switch("number"==typeof e.tag&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case E:return(e.displayName||"Context")+".Provider";case _:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return(e=e.displayName)||(e=""!==(e=n.displayName||n.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case P:return null!==(n=e.displayName||null)?n:t(e.type)||"Memo";case D:n=e._payload,e=e._init;try{return t(e(n))}catch(e){}}return null}function n(e){return""+e}function r(e){try{n(e);var t=!1}catch(e){t=!0}if(t){var r=(t=console).error,o="function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return r.call(t,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",o),n(e)}}function o(){}function a(e){if(void 0===H)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);H=t&&t[1]||"",J=-1<e.stack.indexOf("\n    at")?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+H+e+J}function i(e,t){if(!e||V)return"";var n=K.get(e);if(void 0!==n)return n;V=!0,n=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var r;r=B.H,B.H=null,function(){if(0===W){m=console.log,h=console.info,b=console.warn,g=console.error,v=console.group,x=console.groupCollapsed,w=console.groupEnd;var e={configurable:!0,enumerable:!0,value:o,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}();try{var i={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&"function"==typeof n.catch&&n.catch((function(){}))}}catch(e){if(e&&r&&"string"==typeof e.stack)return[e.stack,r.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),s=l[0],u=l[1];if(s&&u){var p=s.split("\n"),f=u.split("\n");for(l=c=0;c<p.length&&!p[c].includes("DetermineComponentFrameRoot");)c++;for(;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;if(c===p.length||l===f.length)for(c=p.length-1,l=f.length-1;1<=c&&0<=l&&p[c]!==f[l];)l--;for(;1<=c&&0<=l;c--,l--)if(p[c]!==f[l]){if(1!==c||1!==l)do{if(c--,0>--l||p[c]!==f[l]){var d="\n"+p[c].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),"function"==typeof e&&K.set(e,d),d}}while(1<=c&&0<=l);break}}}finally{V=!1,B.H=r,function(){if(0==--W){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:m}),info:M({},e,{value:h}),warn:M({},e,{value:b}),error:M({},e,{value:g}),group:M({},e,{value:v}),groupCollapsed:M({},e,{value:x}),groupEnd:M({},e,{value:w})})}0>W&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=n}return p=(p=e?e.displayName||e.name:"")?a(p):"","function"==typeof e&&K.set(e,p),p}function c(e){if(null==e)return"";if("function"==typeof e){var t=e.prototype;return i(e,!(!t||!t.isReactComponent))}if("string"==typeof e)return a(e);switch(e){case T:return a("Suspense");case $:return a("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case N:return e=i(e.render,!1);case P:return c(e.type);case D:t=e._payload,e=e._init;try{return c(e(t))}catch(e){}}return""}function l(){var e=B.A;return null===e?null:e.getOwner()}function s(){var e=t(this.type);return q[e]||(q[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),void 0!==(e=this.props.ref)?e:null}function u(e,n,o,a,i,c){if("string"==typeof e||"function"==typeof e||e===C||e===O||e===R||e===T||e===$||e===I||"object"==typeof e&&null!==e&&(e.$$typeof===D||e.$$typeof===P||e.$$typeof===E||e.$$typeof===_||e.$$typeof===N||e.$$typeof===Y||void 0!==e.getModuleId)){var u=n.children;if(void 0!==u)if(a)if(L(u)){for(a=0;a<u.length;a++)p(u[a],e);Object.freeze&&Object.freeze(u)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else p(u,e)}else u="",(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),null===e?a="null":L(e)?a="array":void 0!==e&&e.$$typeof===k?(a="<"+(t(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):a=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",a,u);if(z.call(n,"key")){u=t(e);var f=Object.keys(n).filter((function(e){return"key"!==e}));a=0<f.length?"{key: someKey, "+f.join(": ..., ")+": ...}":"{key: someKey}",G[u+a]||(f=0<f.length?"{"+f.join(": ..., ")+": ...}":"{}",console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',a,u,f,u),G[u+a]=!0)}if(u=null,void 0!==o&&(r(o),u=""+o),function(e){if(z.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}(n)&&(r(n.key),u=""+n.key),"key"in n)for(var d in o={},n)"key"!==d&&(o[d]=n[d]);else o=n;return u&&function(e,t){function n(){U||(U=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}(o,"function"==typeof e?e.displayName||e.name||"Unknown":e),function(e,t,n,r,o,a){return n=a.ref,e={$$typeof:k,type:e,key:t,props:a,_owner:o},null!==(void 0!==n?n:null)?Object.defineProperty(e,"ref",{enumerable:!1,get:s}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}(e,u,c,0,l(),o)}function p(e,t){if("object"==typeof e&&e&&e.$$typeof!==X)if(L(e))for(var n=0;n<e.length;n++){var r=e[n];f(r)&&y(r,t)}else if(f(e))e._store&&(e._store.validated=1);else if(null===e||"object"!=typeof e?n=null:n="function"==typeof(n=F&&e[F]||e["@@iterator"])?n:null,"function"==typeof n&&n!==e.entries&&(n=n.call(e))!==e)for(;!(e=n.next()).done;)f(e.value)&&y(e.value,t)}function f(e){return"object"==typeof e&&null!==e&&e.$$typeof===k}function y(e,n){if(e._store&&!e._store.validated&&null==e.key&&(e._store.validated=1,n=function(e){var n="",r=l();return r&&(r=t(r.type))&&(n="\n\nCheck the render method of `"+r+"`."),n||(e=t(e))&&(n="\n\nCheck the top-level render call using <"+e+">."),n}(n),!Q[n])){Q[n]=!0;var r="";e&&null!=e._owner&&e._owner!==l()&&(r=null,"number"==typeof e._owner.tag?r=t(e._owner.type):"string"==typeof e._owner.name&&(r=e._owner.name),r=" It was passed a child from "+r+".");var o=B.getCurrentStack;B.getCurrentStack=function(){var t=c(e.type);return o&&(t+=o()||""),t},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',n,r),B.getCurrentStack=o}}var m,h,b,g,v,x,w,j=e,k=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),E=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),I=Symbol.for("react.offscreen"),F=Symbol.iterator,A=Symbol.for("react.client.reference"),B=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=Object.prototype.hasOwnProperty,M=Object.assign,Y=Symbol.for("react.client.reference"),L=Array.isArray,W=0;o.__reactDisabledLog=!0;var H,J,U,V=!1,K=new("function"==typeof WeakMap?WeakMap:Map),X=Symbol.for("react.client.reference"),q={},G={},Q={};d.Fragment=C,d.jsx=function(e,t,n,r,o){return u(e,t,n,!1,0,o)},d.jsxs=function(e,t,n,r,o){return u(e,t,n,!0,0,o)}}()),d}var m=(f||(f=1,"production"===process.env.NODE_ENV?s.exports=function(){if(l)return u;l=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(t,n,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),"key"in n)for(var a in r={},n)"key"!==a&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:e,type:t,key:o,ref:void 0!==n?n:null,props:r}}return u.Fragment=t,u.jsx=n,u.jsxs=n,u}():s.exports=y()),s.exports);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');\n\n.collbot-grecaptcha-badge { \n    display: none !important;\n  }\n\n  .collbot-dot {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    animation: collbot-wave 1.5s infinite ease-in-out;\n  }\n  \n  .collbot-dot:nth-child(1) {\n    animation-delay: 0s;\n  }\n  \n  .collbot-dot:nth-child(2) {\n    animation-delay: 0.3s;\n  }\n  \n  .collbot-dot:nth-child(3) {\n    animation-delay: 0.6s;\n  }\n  \n  @keyframes collbot-wave {\n    0%, 100% {\n        transform: translateY(0);\n        opacity: 0.3;\n    }\n    50% {\n        transform: translateY(-5px);\n        opacity: 1;\n    }\n  \n  }\n  \n  @keyframes collbot-bounce {\n    0%, 100% {\n      transform: translateY(0);\n    }\n    50% {\n      transform: translateY(-10px);\n    }\n  }\n  .collbot-bounce {\n    animation: bounce 1s infinite;\n  }\n  \n  \n  ");var h="https://collbot.hammim.in/",b=function(e){var l=e.reCaptchaClientId,s=e.theme,u=t([]),p=u[0],f=u[1],d=t(""),y=d[0],b=d[1],v=t(!1),x=v[0],w=v[1],j=n(null),k=t(!1),S=k[0],C=k[1],R=t(!1),O=R[0],_=R[1],E=function(){return C(!S)},N=function(){return a(void 0,void 0,void 0,(function(){var e,t;return i(this,(function(n){switch(n.label){case 0:if(!y.trim())return[2];f((function(e){return c(c([],e,!0),[{sender:!0,msg:y}],!1)})),b(""),w(!0),n.label=1;case 1:return n.trys.push([1,4,5,6]),[4,fetch("".concat(h,"/api/chat"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({msg:y,domain:window.location.origin})})];case 2:return[4,n.sent().json()];case 3:return e=n.sent(),f((function(t){return c(c([],t,!0),[{sender:!1,msg:e.answer}],!1)})),[3,6];case 4:return t=n.sent(),console.error("Error sending message:",t),[3,6];case 5:return w(!1),[7];case 6:return[2]}}))}))};return r((function(){j.current&&j.current.scrollIntoView({behavior:"smooth"})}),[p]),r((function(){if("undefined"!=typeof window)if(l){var e=document.createElement("script");e.src="https://www.google.com/recaptcha/api.js?render=".concat(l),e.async=!0,document.body.appendChild(e),e.onload=function(){setTimeout((function(){var e=document.querySelector(".grecaptcha-badge");e&&(e.style.display="none")}),500)}}else _(!0)}),[]),m.jsxs("div",{style:{zIndex:1e4},children:[!S&&m.jsx("button",{onClick:E,style:g.chatButton,children:m.jsx("img",{src:s.icon,alt:"",style:g.chatIcon})}),S&&m.jsxs("div",{style:g.chatContainer,children:[m.jsxs("div",{style:o(o({},g.header),{background:s.primaryColor}),children:[m.jsx("img",{src:s.icon,alt:"",style:g.chatIcon}),m.jsx("button",{onClick:E,style:g.closeButton,children:"✖"})]}),O?m.jsxs(m.Fragment,{children:[m.jsxs("div",{style:g.messageContainer,children:[p.map((function(e,t){return m.jsx("div",{style:e.sender?g.userMessage:g.botMessage,children:e.msg},t)})),x&&m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[m.jsx("img",{src:s.icon,alt:"",style:g.chatIcon}),m.jsx("div",{className:"collbot-dot"}),m.jsx("div",{className:"collbot-dot"}),m.jsx("div",{className:"collbot-dot"})]}),m.jsx("div",{ref:j})]}),m.jsxs("div",{style:g.inputContainer,children:[m.jsx("input",{value:y,onChange:function(e){return b(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&N()},type:"text",placeholder:"Ask anything about this platform",style:g.input}),m.jsx("button",{disabled:x,onClick:N,style:g.sendButton,children:"➤"})]})]}):m.jsxs("div",{style:g.captchaContainer,children:[m.jsx("div",{className:"collbot-bounce",style:{fontSize:"40px"},children:"🔒"}),m.jsx("h2",{children:"Verify You’re Human"}),m.jsx("button",{onClick:function(){return a(void 0,void 0,void 0,(function(){return i(this,(function(e){return(null===window||void 0===window?void 0:window.grecaptcha)&&window.grecaptcha.ready((function(){return a(void 0,void 0,void 0,(function(){return i(this,(function(e){return window.grecaptcha.execute(l,{action:"open_chat"}).then((function(e){return a(void 0,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,fetch(h+"/api/recaptcha",{method:"POST",body:JSON.stringify({token:e}),headers:{"Content-Type":"application/json"}})];case 1:return[4,n.sent().json()];case 2:return n.sent().success?(_(!0),C(!0)):alert("Captcha verification failed. Please try again."),[3,4];case 3:return t=n.sent(),console.error("Error verifying reCAPTCHA:",t),[3,4];case 4:return[2]}}))}))})),[2]}))}))})),[2]}))}))},style:g.verifyButton,children:"✅ Verify & Start Chat"})]})]})]})},g={chatButton:{position:"fixed",bottom:"10px",right:"10px",padding:"20px",fontSize:"20px",border:"none",borderRadius:"50%",cursor:"pointer"},chatContainer:{fontFamily:"'Roboto', sans-serif",position:"fixed",bottom:"10px",right:"10px",width:"350px",height:"400px",background:"white",boxShadow:"0px 4px 6px rgba(0,0,0,0.1)",borderBottomLeftRadius:"10px",borderTopRightRadius:"10px",display:"flex",gap:"15px",flexDirection:"column"},header:{color:"white",padding:"10px",display:"flex",justifyContent:"space-between",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",alignItems:"center"},closeButton:{background:"none",border:"none",color:"white",fontSize:"18px",cursor:"pointer"},captchaContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,gap:"15px"},verifyButton:{background:"#6200ea",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer"},messageContainer:{flex:"1",display:"flex",flexDirection:"column",overflowY:"auto",padding:"10px"},userMessage:{alignSelf:"flex-end",background:"#6200ea",color:"white",padding:"10px",borderRadius:"10px",marginBottom:"5px",maxWidth:"60%"},botMessage:{alignSelf:"flex-start",background:"#ddd",padding:"10px",borderRadius:"10px",marginBottom:"5px",maxWidth:"100%"},inputContainer:{display:"flex",padding:"10px",borderTop:"1px solid #ccc"},input:{flex:1,padding:"5px",border:"1px solid #ccc",borderRadius:"5px"},sendButton:{padding:"5px 10px",color:"blue",border:"none",borderRadius:"5px",cursor:"pointer"},chatIcon:{width:"40px",height:"40px",verticalAlign:"middle"}};export{b as default};
//# sourceMappingURL=index.mjs.map
