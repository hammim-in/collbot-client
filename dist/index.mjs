import e,{useState as n,useRef as t,useEffect as r}from"react";function o(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,c)}s((r=r.apply(e,n||[])).next())}))}function a(e,n){var t,r,o,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=c(0),i.throw=c(1),i.return=c(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}}function i(e,n,t){if(t||2===arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}"function"==typeof SuppressedError&&SuppressedError;var c,s={exports:{}},l={};var u,p,f={};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function d(){return u||(u=1,"production"!==process.env.NODE_ENV&&function(){function n(e){if(null==e)return null;if("function"==typeof e)return e.$$typeof===F?null:e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case C:return"Fragment";case S:return"Portal";case _:return"Profiler";case R:return"StrictMode";case N:return"Suspense";case $:return"SuspenseList"}if("object"==typeof e)switch("number"==typeof e.tag&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case E:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case D:return null!==(t=e.displayName||null)?t:n(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return n(e(t))}catch(e){}}return null}function t(e){return""+e}function r(e){try{t(e);var n=!1}catch(e){n=!0}if(n){var r=(n=console).error,o="function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return r.call(n,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",o),t(e)}}function o(){}function a(e){if(void 0===U)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);U=n&&n[1]||"",W=-1<e.stack.indexOf("\n    at")?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+U+e+W}function i(e,n){if(!e||K)return"";var t=V.get(e);if(void 0!==t)return t;K=!0,t=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var r;r=B.H,B.H=null,function(){if(0===L){m=console.log,h=console.info,g=console.warn,b=console.error,v=console.group,x=console.groupCollapsed,w=console.groupEnd;var e={configurable:!0,enumerable:!0,value:o,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}L++}();try{var i={DetermineComponentFrameRoot:function(){try{if(n){var t=function(){throw Error()};if(Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}(t=e())&&"function"==typeof t.catch&&t.catch((function(){}))}}catch(e){if(e&&r&&"string"==typeof e.stack)return[e.stack,r.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),l=s[0],u=s[1];if(l&&u){var p=l.split("\n"),f=u.split("\n");for(s=c=0;c<p.length&&!p[c].includes("DetermineComponentFrameRoot");)c++;for(;s<f.length&&!f[s].includes("DetermineComponentFrameRoot");)s++;if(c===p.length||s===f.length)for(c=p.length-1,s=f.length-1;1<=c&&0<=s&&p[c]!==f[s];)s--;for(;1<=c&&0<=s;c--,s--)if(p[c]!==f[s]){if(1!==c||1!==s)do{if(c--,0>--s||p[c]!==f[s]){var d="\n"+p[c].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),"function"==typeof e&&V.set(e,d),d}}while(1<=c&&0<=s);break}}}finally{K=!1,B.H=r,function(){if(0==--L){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Y({},e,{value:m}),info:Y({},e,{value:h}),warn:Y({},e,{value:g}),error:Y({},e,{value:b}),group:Y({},e,{value:v}),groupCollapsed:Y({},e,{value:x}),groupEnd:Y({},e,{value:w})})}0>L&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=t}return p=(p=e?e.displayName||e.name:"")?a(p):"","function"==typeof e&&V.set(e,p),p}function c(e){if(null==e)return"";if("function"==typeof e){var n=e.prototype;return i(e,!(!n||!n.isReactComponent))}if("string"==typeof e)return a(e);switch(e){case N:return a("Suspense");case $:return a("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case T:return e=i(e.render,!1);case D:return c(e.type);case P:n=e._payload,e=e._init;try{return c(e(n))}catch(e){}}return""}function s(){var e=B.A;return null===e?null:e.getOwner()}function l(){var e=n(this.type);return q[e]||(q[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),void 0!==(e=this.props.ref)?e:null}function u(e,t,o,a,i,c){if("string"==typeof e||"function"==typeof e||e===C||e===_||e===R||e===N||e===$||e===A||"object"==typeof e&&null!==e&&(e.$$typeof===P||e.$$typeof===D||e.$$typeof===E||e.$$typeof===O||e.$$typeof===T||e.$$typeof===M||void 0!==e.getModuleId)){var u=t.children;if(void 0!==u)if(a)if(H(u)){for(a=0;a<u.length;a++)p(u[a],e);Object.freeze&&Object.freeze(u)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else p(u,e)}else u="",(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),null===e?a="null":H(e)?a="array":void 0!==e&&e.$$typeof===j?(a="<"+(n(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):a=typeof e,console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",a,u);if(z.call(t,"key")){u=n(e);var f=Object.keys(t).filter((function(e){return"key"!==e}));a=0<f.length?"{key: someKey, "+f.join(": ..., ")+": ...}":"{key: someKey}",G[u+a]||(f=0<f.length?"{"+f.join(": ..., ")+": ...}":"{}",console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',a,u,f,u),G[u+a]=!0)}if(u=null,void 0!==o&&(r(o),u=""+o),function(e){if(z.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return void 0!==e.key}(t)&&(r(t.key),u=""+t.key),"key"in t)for(var d in o={},t)"key"!==d&&(o[d]=t[d]);else o=t;return u&&function(e,n){function t(){J||(J=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",n))}t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}(o,"function"==typeof e?e.displayName||e.name||"Unknown":e),function(e,n,t,r,o,a){return t=a.ref,e={$$typeof:j,type:e,key:n,props:a,_owner:o},null!==(void 0!==t?t:null)?Object.defineProperty(e,"ref",{enumerable:!1,get:l}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}(e,u,c,0,s(),o)}function p(e,n){if("object"==typeof e&&e&&e.$$typeof!==X)if(H(e))for(var t=0;t<e.length;t++){var r=e[t];d(r)&&y(r,n)}else if(d(e))e._store&&(e._store.validated=1);else if(null===e||"object"!=typeof e?t=null:t="function"==typeof(t=I&&e[I]||e["@@iterator"])?t:null,"function"==typeof t&&t!==e.entries&&(t=t.call(e))!==e)for(;!(e=t.next()).done;)d(e.value)&&y(e.value,n)}function d(e){return"object"==typeof e&&null!==e&&e.$$typeof===j}function y(e,t){if(e._store&&!e._store.validated&&null==e.key&&(e._store.validated=1,t=function(e){var t="",r=s();return r&&(r=n(r.type))&&(t="\n\nCheck the render method of `"+r+"`."),t||(e=n(e))&&(t="\n\nCheck the top-level render call using <"+e+">."),t}(t),!Q[t])){Q[t]=!0;var r="";e&&null!=e._owner&&e._owner!==s()&&(r=null,"number"==typeof e._owner.tag?r=n(e._owner.type):"string"==typeof e._owner.name&&(r=e._owner.name),r=" It was passed a child from "+r+".");var o=B.getCurrentStack;B.getCurrentStack=function(){var n=c(e.type);return o&&(n+=o()||""),n},console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',t,r),B.getCurrentStack=o}}var m,h,g,b,v,x,w,k=e,j=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),E=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),I=Symbol.iterator,F=Symbol.for("react.client.reference"),B=k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=Object.prototype.hasOwnProperty,Y=Object.assign,M=Symbol.for("react.client.reference"),H=Array.isArray,L=0;o.__reactDisabledLog=!0;var U,W,J,K=!1,V=new("function"==typeof WeakMap?WeakMap:Map),X=Symbol.for("react.client.reference"),q={},G={},Q={};f.Fragment=C,f.jsx=function(e,n,t,r,o){return u(e,n,t,!1,0,o)},f.jsxs=function(e,n,t,r,o){return u(e,n,t,!0,0,o)}}()),f}var y=(p||(p=1,"production"===process.env.NODE_ENV?s.exports=function(){if(c)return l;c=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(n,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:e,type:n,key:o,ref:void 0!==t?t:null,props:r}}return l.Fragment=n,l.jsx=t,l.jsxs=t,l}():s.exports=d()),s.exports),m="/assets/8269facfbb04f0fc.png";!function(e,n){void 0===n&&(n={});var t=n.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(":root {\n    --background: #ffffff;\n    /* --foreground: #171717; */\n  }\n  \n  @media (prefers-color-scheme: dark) {\n    :root {\n      /* --background: #0a0a0a; */\n      --foreground: #ededed;\n    }\n  }\n  \n  html,\n  body {\n    max-width: 100vw;\n    overflow-x: hidden;\n  }\n  \n  body {\n    color: var(--foreground);\n    background: var(--background);\n    font-family: Arial, Helvetica, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n  \n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  \n  @media (prefers-color-scheme: dark) {\n    html {\n      color-scheme: dark;\n    }\n  }\n  .grecaptcha-badge { \n    display: none !important;\n  }\n  \n  .typing-container {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n  }\n  \n  .wave-loader {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n  }\n  \n  .dot {\n    width: 8px;\n    height: 8px;\n    background-color: #6200ea;\n    border-radius: 50%;\n    animation: wave 1.5s infinite ease-in-out;\n  }\n  \n  .dot:nth-child(1) {\n    animation-delay: 0s;\n  }\n  \n  .dot:nth-child(2) {\n    animation-delay: 0.3s;\n  }\n  \n  .dot:nth-child(3) {\n    animation-delay: 0.6s;\n  }\n  \n  @keyframes wave {\n    0%, 100% {\n        transform: translateY(0);\n        opacity: 0.3;\n    }\n    50% {\n        transform: translateY(-5px);\n        opacity: 1;\n    }\n  \n  }\n  \n  @keyframes bounce {\n    0%, 100% {\n      transform: translateY(0);\n    }\n    50% {\n      transform: translateY(-10px);\n    }\n  }\n  .bounce {\n    animation: bounce 1s infinite;\n  }\n  \n  \n  ");var h=function(e){var c=e.AICHART_RECAPTCHA_FRONTED_KEY;e.YOUR_SITE_KEY;var s=n([]),l=s[0],u=s[1],p=n(""),f=p[0],d=p[1],h=n(!1),b=h[0],v=h[1],x=t(null),w=n(!1),k=w[0],j=w[1],S=n(!c),C=S[0],R=S[1],_=function(){return j(!k)},O=function(){return o(void 0,void 0,void 0,(function(){var e,n;return a(this,(function(t){switch(t.label){case 0:if(!f.trim())return[2];u((function(e){return i(i([],e,!0),[{sender:!0,msg:f}],!1)})),d(""),v(!0),t.label=1;case 1:return t.trys.push([1,4,5,6]),[4,fetch("https://main.d1he10b71cpz1.amplifyapp.com/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({msg:f,domain:"app.com"})})];case 2:return[4,t.sent().json()];case 3:return e=t.sent(),console.log("json",e),u((function(n){return i(i([],n,!0),[{sender:!1,msg:e.answer}],!1)})),[3,6];case 4:return n=t.sent(),console.error("Error sending message:",n),[3,6];case 5:return v(!1),[7];case 6:return[2]}}))}))};return r((function(){x.current&&x.current.scrollIntoView({behavior:"smooth"})}),[l]),r((function(){if("undefined"!=typeof window){var e=document.createElement("script");e.src="https://www.google.com/recaptcha/api.js?render=".concat(c),e.async=!0,document.body.appendChild(e),e.onload=function(){setTimeout((function(){var e=document.querySelector(".grecaptcha-badge");e&&(e.style.display="none")}),500)}}}),[]),y.jsxs(y.Fragment,{children:[!k&&y.jsx("button",{onClick:_,style:g.chatButton,children:y.jsx("img",{src:m,alt:"",style:g.chatIcon})}),k&&y.jsxs("div",{style:g.chatContainer,children:[y.jsxs("div",{style:g.header,children:[y.jsxs("span",{children:[" ",y.jsx("img",{src:m,alt:"",style:g.chatIcon}),"AI Chat"]}),y.jsx("button",{onClick:_,style:g.closeButton,children:"✖"})]}),C?y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:g.messageContainer,children:[l.map((function(e,n){return y.jsx("div",{style:e.sender?g.userMessage:g.botMessage,children:e.msg},n)})),b&&y.jsxs("div",{className:"wave-loader",children:[y.jsx("img",{src:"reddit.png",alt:"",style:g.chatIcon}),y.jsx("div",{className:"dot"}),y.jsx("div",{className:"dot"}),y.jsx("div",{className:"dot"})]}),y.jsx("div",{ref:x})]}),y.jsxs("div",{style:g.inputContainer,children:[y.jsx("input",{value:f,onChange:function(e){return d(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&O()},type:"text",placeholder:"Type a message...",style:g.input}),y.jsx("button",{disabled:b,onClick:O,style:g.sendButton,children:"➤"})]})]}):y.jsxs("div",{style:g.captchaContainer,children:[y.jsx("div",{className:"bounce",style:{fontSize:"40px"},children:"🔒"}),y.jsx("h2",{children:"Verify You’re Human"}),y.jsx("button",{onClick:function(){(null===window||void 0===window?void 0:window.grecaptcha)&&window.grecaptcha.ready((function(){window.grecaptcha.execute(c,{action:"open_chat"}).then((function(e){return o(void 0,void 0,void 0,(function(){var n;return a(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch("/api/genkit",{method:"POST",body:JSON.stringify({token:e}),headers:{"Content-Type":"application/json"}})];case 1:return[4,t.sent().json()];case 2:return t.sent().success?(R(!0),j(!0)):alert("Captcha verification failed. Please try again."),[3,4];case 3:return n=t.sent(),console.error("Error verifying reCAPTCHA:",n),[3,4];case 4:return[2]}}))}))}))}))},style:g.verifyButton,children:"✅ Verify & Start Chat"})]})]})]})},g={chatButton:{position:"fixed",bottom:"20px",right:"20px",padding:"20px",fontSize:"24px",background:"white",color:"white",border:"none",borderRadius:"50%",cursor:"pointer"},chatContainer:{position:"fixed",bottom:"50px",right:"20px",width:"350px",height:"400px",background:"white",boxShadow:"0px 4px 6px rgba(0,0,0,0.1)",borderBottomLeftRadius:"10px",borderTopRightRadius:"10px",display:"flex",gap:"15px",flexDirection:"column"},header:{background:"#6200ea",color:"white",padding:"10px",display:"flex",justifyContent:"space-between",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",alignItems:"center"},closeButton:{background:"none",border:"none",color:"white",fontSize:"18px",cursor:"pointer"},captchaContainer:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,gap:"15px"},verifyButton:{background:"#6200ea",color:"white",padding:"10px 20px",border:"none",borderRadius:"5px",cursor:"pointer"},messageContainer:{flex:"1",display:"flex",flexDirection:"column",overflowY:"auto",padding:"10px"},userMessage:{alignSelf:"flex-end",background:"#6200ea",color:"white",padding:"10px",borderRadius:"10px",marginBottom:"5px",maxWidth:"60%"},botMessage:{alignSelf:"flex-start",background:"#ddd",padding:"10px",borderRadius:"10px",marginBottom:"5px",maxWidth:"100%"},inputContainer:{display:"flex",padding:"10px",borderTop:"1px solid #ccc"},input:{flex:1,padding:"5px",border:"1px solid #ccc",borderRadius:"5px"},sendButton:{padding:"5px 10px",color:"blue",border:"none",borderRadius:"5px",cursor:"pointer"},chatIcon:{width:"40px",height:"40px",marginRight:"10px",verticalAlign:"middle"}};export{h as default};
//# sourceMappingURL=index.mjs.map
