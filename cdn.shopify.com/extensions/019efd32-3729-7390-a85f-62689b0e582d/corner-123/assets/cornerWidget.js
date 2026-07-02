(function(ct){typeof define=="function"&&define.amd?define(ct):ct()})(function(){"use strict";var ct,ge,Gn,Qn,lt,Yn,Jn,Zn,Xn,Or,Lr,Mr,Kn,Lt={},ei=[],la=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Mt=Array.isArray;function rt(t,e){for(var r in e)t[r]=e[r];return t}function Dr(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function dt(t,e,r){var n,i,o,s={};for(o in e)o=="key"?n=e[o]:o=="ref"?i=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?ct.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return ir(t,s,n,i,null)}function ir(t,e,r,n,i){var o={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Gn,__i:-1,__u:0};return i==null&&ge.vnode!=null&&ge.vnode(o),o}function $e(t){return t.children}function Qe(t,e){this.props=t,this.context=e}function bt(t,e){if(e==null)return t.__?bt(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?bt(t):null}function ti(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return ti(t)}}function Rr(t){(!t.__d&&(t.__d=!0)&&lt.push(t)&&!or.__r++||Yn!=ge.debounceRendering)&&((Yn=ge.debounceRendering)||Jn)(or)}function or(){for(var t,e,r,n,i,o,s,c=1;lt.length;)lt.length>c&&lt.sort(Zn),t=lt.shift(),c=lt.length,t.__d&&(r=void 0,i=(n=(e=t).__v).__e,o=[],s=[],e.__P&&((r=rt({},n)).__v=n.__v+1,ge.vnode&&ge.vnode(r),jr(e.__P,r,n,e.__n,e.__P.namespaceURI,32&n.__u?[i]:null,o,i??bt(n),!!(32&n.__u),s),r.__v=n.__v,r.__.__k[r.__i]=r,ai(o,r,s),r.__e!=i&&ti(r)));or.__r=0}function ri(t,e,r,n,i,o,s,c,d,l,p){var u,h,g,m,w,b,x,_=n&&n.__k||ei,C=e.length;for(d=(function(v,L,k,A,j){var $,P,J,B,N,Q=k.length,Z=Q,U=0;for(v.__k=new Array(j),$=0;$<j;$++)(P=L[$])!=null&&typeof P!="boolean"&&typeof P!="function"?(B=$+U,(P=v.__k[$]=typeof P=="string"||typeof P=="number"||typeof P=="bigint"||P.constructor==String?ir(null,P,null,null,null):Mt(P)?ir($e,{children:P},null,null,null):P.constructor==null&&P.__b>0?ir(P.type,P.props,P.key,P.ref?P.ref:null,P.__v):P).__=v,P.__b=v.__b+1,J=null,(N=P.__i=da(P,k,B,Z))!=-1&&(Z--,(J=k[N])&&(J.__u|=2)),J==null||J.__v==null?(N==-1&&(j>Q?U--:j<Q&&U++),typeof P.type!="function"&&(P.__u|=4)):N!=B&&(N==B-1?U--:N==B+1?U++:(N>B?U--:U++,P.__u|=4))):v.__k[$]=null;if(Z)for($=0;$<Q;$++)(J=k[$])!=null&&!(2&J.__u)&&(J.__e==A&&(A=bt(J)),ci(J,J));return A})(r,e,_,d,C),u=0;u<C;u++)(g=r.__k[u])!=null&&(h=g.__i==-1?Lt:_[g.__i]||Lt,g.__i=u,b=jr(t,g,h,i,o,s,c,d,l,p),m=g.__e,g.ref&&h.ref!=g.ref&&(h.ref&&qr(h.ref,null,g),p.push(g.ref,g.__c||m,g)),w==null&&m!=null&&(w=m),(x=!!(4&g.__u))||h.__k===g.__k?d=ni(g,d,t,x):typeof g.type=="function"&&b!==void 0?d=b:m&&(d=m.nextSibling),g.__u&=-7);return r.__e=w,d}function ni(t,e,r,n){var i,o;if(typeof t.type=="function"){for(i=t.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=t,e=ni(i[o],e,r,n));return e}t.__e!=e&&(n&&(e&&t.type&&!e.parentNode&&(e=bt(t)),r.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ar(t,e){return e=e||[],t==null||typeof t=="boolean"||(Mt(t)?t.some(function(r){ar(r,e)}):e.push(t)),e}function da(t,e,r,n){var i,o,s,c=t.key,d=t.type,l=e[r],p=l!=null&&!(2&l.__u);if(l===null&&t.key==null||p&&c==l.key&&d==l.type)return r;if(n>(p?1:0)){for(i=r-1,o=r+1;i>=0||o<e.length;)if((l=e[s=i>=0?i--:o++])!=null&&!(2&l.__u)&&c==l.key&&d==l.type)return s}return-1}function ii(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||la.test(e)?r:r+"px"}function sr(t,e,r,n,i){var o,s;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||ii(t.style,e,"");if(r)for(e in r)n&&r[e]==n[e]||ii(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")o=e!=(e=e.replace(Xn,"$1")),s=e.toLowerCase(),e=s in t||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=r,r?n?r.u=n.u:(r.u=Or,t.addEventListener(e,o?Mr:Lr,o)):t.removeEventListener(e,o?Mr:Lr,o);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function oi(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e.t==null)e.t=Or++;else if(e.t<r.u)return;return r(ge.event?ge.event(e):e)}}}function jr(t,e,r,n,i,o,s,c,d,l){var p,u,h,g,m,w,b,x,_,C,v,L,k,A,j,$,P,J=e.type;if(e.constructor!=null)return null;128&r.__u&&(d=!!(32&r.__u),o=[c=e.__e=r.__e]),(p=ge.__b)&&p(e);e:if(typeof J=="function")try{if(x=e.props,_="prototype"in J&&J.prototype.render,C=(p=J.contextType)&&n[p.__c],v=p?C?C.props.value:p.__:n,r.__c?b=(u=e.__c=r.__c).__=u.__E:(_?e.__c=u=new J(x,v):(e.__c=u=new Qe(x,v),u.constructor=J,u.render=ua),C&&C.sub(u),u.props=x,u.state||(u.state={}),u.context=v,u.__n=n,h=u.__d=!0,u.__h=[],u._sb=[]),_&&u.__s==null&&(u.__s=u.state),_&&J.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=rt({},u.__s)),rt(u.__s,J.getDerivedStateFromProps(x,u.__s))),g=u.props,m=u.state,u.__v=e,h)_&&J.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),_&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(_&&J.getDerivedStateFromProps==null&&x!==g&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(x,v),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(x,u.__s,v)===!1||e.__v==r.__v){for(e.__v!=r.__v&&(u.props=x,u.state=u.__s,u.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(B){B&&(B.__=e)}),L=0;L<u._sb.length;L++)u.__h.push(u._sb[L]);u._sb=[],u.__h.length&&s.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(x,u.__s,v),_&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(g,m,w)})}if(u.context=v,u.props=x,u.__P=t,u.__e=!1,k=ge.__r,A=0,_){for(u.state=u.__s,u.__d=!1,k&&k(e),p=u.render(u.props,u.state,u.context),j=0;j<u._sb.length;j++)u.__h.push(u._sb[j]);u._sb=[]}else do u.__d=!1,k&&k(e),p=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++A<25);u.state=u.__s,u.getChildContext!=null&&(n=rt(rt({},n),u.getChildContext())),_&&!h&&u.getSnapshotBeforeUpdate!=null&&(w=u.getSnapshotBeforeUpdate(g,m)),$=p,p!=null&&p.type===$e&&p.key==null&&($=si(p.props.children)),c=ri(t,Mt($)?$:[$],e,r,n,i,o,s,c,d,l),u.base=e.__e,e.__u&=-161,u.__h.length&&s.push(u),b&&(u.__E=u.__=null)}catch(B){if(e.__v=null,d||o!=null)if(B.then){for(e.__u|=d?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;o[o.indexOf(c)]=null,e.__e=c}else{for(P=o.length;P--;)Dr(o[P]);Br(e)}else e.__e=r.__e,e.__k=r.__k,B.then||Br(e);ge.__e(B,e,r)}else o==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):c=e.__e=(function(B,N,Q,Z,U,re,Y,q,M){var y,f,F,V,te,pe,me,ee=Q.props,he=N.props,ue=N.type;if(ue=="svg"?U="http://www.w3.org/2000/svg":ue=="math"?U="http://www.w3.org/1998/Math/MathML":U||(U="http://www.w3.org/1999/xhtml"),re!=null){for(y=0;y<re.length;y++)if((te=re[y])&&"setAttribute"in te==!!ue&&(ue?te.localName==ue:te.nodeType==3)){B=te,re[y]=null;break}}if(B==null){if(ue==null)return document.createTextNode(he);B=document.createElementNS(U,ue,he.is&&he),q&&(ge.__m&&ge.__m(N,re),q=!1),re=null}if(ue==null)ee===he||q&&B.data==he||(B.data=he);else{if(re=re&&ct.call(B.childNodes),ee=Q.props||Lt,!q&&re!=null)for(ee={},y=0;y<B.attributes.length;y++)ee[(te=B.attributes[y]).name]=te.value;for(y in ee)if(te=ee[y],y!="children"){if(y=="dangerouslySetInnerHTML")F=te;else if(!(y in he)){if(y=="value"&&"defaultValue"in he||y=="checked"&&"defaultChecked"in he)continue;sr(B,y,null,te,U)}}for(y in he)te=he[y],y=="children"?V=te:y=="dangerouslySetInnerHTML"?f=te:y=="value"?pe=te:y=="checked"?me=te:q&&typeof te!="function"||ee[y]===te||sr(B,y,te,ee[y],U);if(f)q||F&&(f.__html==F.__html||f.__html==B.innerHTML)||(B.innerHTML=f.__html),N.__k=[];else if(F&&(B.innerHTML=""),ri(N.type=="template"?B.content:B,Mt(V)?V:[V],N,Q,Z,ue=="foreignObject"?"http://www.w3.org/1999/xhtml":U,re,Y,re?re[0]:Q.__k&&bt(Q,0),q,M),re!=null)for(y=re.length;y--;)Dr(re[y]);q||(y="value",ue=="progress"&&pe==null?B.removeAttribute("value"):pe!=null&&(pe!==B[y]||ue=="progress"&&!pe||ue=="option"&&pe!=ee[y])&&sr(B,y,pe,ee[y],U),y="checked",me!=null&&me!=B[y]&&sr(B,y,me,ee[y],U))}return B})(r.__e,e,r,n,i,o,s,d,l);return(p=ge.diffed)&&p(e),128&e.__u?void 0:c}function Br(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(Br)}function ai(t,e,r){for(var n=0;n<r.length;n++)qr(r[n],r[++n],r[++n]);ge.__c&&ge.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(o){o.call(i)})}catch(o){ge.__e(o,i.__v)}})}function si(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:Mt(t)?t.map(si):rt({},t)}function qr(t,e,r){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(i){ge.__e(i,r)}}function ci(t,e,r){var n,i;if(ge.unmount&&ge.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||qr(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){ge.__e(o,e)}n.base=n.__P=null}if(n=t.__k)for(i=0;i<n.length;i++)n[i]&&ci(n[i],e,r||typeof t.type!="function");r||Dr(t.__e),t.__c=t.__=t.__e=void 0}function ua(t,e,r){return this.constructor(t,r)}function Fr(t,e,r){var n,i,o,s;e==document&&(e=document.documentElement),ge.__&&ge.__(t,e),i=(n=typeof r=="function")?null:r&&r.__k||e.__k,o=[],s=[],jr(e,t=(!n&&r||e).__k=dt($e,null,[t]),i||Lt,Lt,e.namespaceURI,!n&&r?[r]:i?null:e.firstChild?ct.call(e.childNodes):null,o,!n&&r?r:i?i.__e:e.firstChild,n,s),ai(o,t,s)}function Dt(t){function e(r){var n,i;return this.getChildContext||(n=new Set,(i={})[e.__c]=this,this.getChildContext=function(){return i},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(o){this.props.value!=o.value&&n.forEach(function(s){s.__e=!0,Rr(s)})},this.sub=function(o){n.add(o);var s=o.componentWillUnmount;o.componentWillUnmount=function(){n&&n.delete(o),s&&s.call(o)}}),r.children}return e.__c="__cC"+Kn++,e.__=t,e.Provider=e.__l=(e.Consumer=function(r,n){return r.children(n)}).contextType=e,e}ct=ei.slice,ge={__e:function(t,e,r,n){for(var i,o,s;e=e.__;)if((i=e.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(t)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,n||{}),s=i.__d),s)return i.__E=i}catch(c){t=c}throw t}},Gn=0,Qn=function(t){return t!=null&&t.constructor==null},Qe.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=rt({},this.state),typeof t=="function"&&(t=t(rt({},r),this.props)),t&&rt(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),Rr(this))},Qe.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Rr(this))},Qe.prototype.render=$e,lt=[],Jn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Zn=function(t,e){return t.__v.__b-e.__v.__b},or.__r=0,Xn=/(PointerCapture)$|Capture$/i,Or=0,Lr=oi(!1),Mr=oi(!0),Kn=0;var li=function(t){var e,r=t.selector,n=t.inline,i=t.clientSpecified,o=[],s=document.currentScript||(e=document.getElementsByTagName("script"))[e.length-1];if(n===!0){var c=s.parentNode;o.push(c)}return i!==!0||r||(r=(function(d){var l=d.attributes,p=null;return Object.keys(l).forEach(function(u){l.hasOwnProperty(u)&&l[u].name==="data-mount-in"&&(p=l[u].nodeValue)}),p})(s)),r&&[].forEach.call(document.querySelectorAll(r),function(d){o.push(d)}),o},pa=function(t,e,r,n,i){e.forEach(function(o){var s=o;if(!s._habitat){s._habitat=!0;var c=(function(d,l){l===void 0&&(l={});var p=d.attributes,u=Object.assign({},l);return Object.keys(p).forEach(function(h){if(p.hasOwnProperty(h)){var g=p[h].name;if(!g||typeof g!="string")return!1;var m=g.split(/(data-props?-)/).pop()||"";if(g!==(m=m.replace(/-([a-z])/gi,function(b,x){return x.toUpperCase()}))){var w=p[h].nodeValue;u[m]=w}}}),[].forEach.call(d.getElementsByTagName("script"),function(h){var g={};if(h.hasAttribute("type")){if(h.getAttribute("type")!=="text/props"&&h.getAttribute("type")!=="application/json")return;try{g=JSON.parse(h.innerHTML)}catch(m){throw new Error(m)}Object.assign(u,g)}}),u})(o,i)||i;return n&&(s.innerHTML=""),Fr(dt(t,c),s,r)}})},di=function(t){var e=t;return{render:function(r){r===void 0&&(r={});var n=r.selector;n===void 0&&(n=null);var i=r.inline;i===void 0&&(i=!1);var o=r.clean;o===void 0&&(o=!1);var s=r.clientSpecified;s===void 0&&(s=!1);var c=r.defaultProps;c===void 0&&(c={});var d=li({selector:n,inline:i,clientSpecified:s}),l=function(){if(d.length>0){var p=li({selector:n,inline:i,clientSpecified:s});return pa(e,p,null,o,c)}};l(),document.addEventListener("DOMContentLoaded",l),document.addEventListener("load",l)}}},ha=0;function a(t,e,r,n,i,o){e||(e={});var s,c,d=e;if("ref"in d)for(c in d={},e)c=="ref"?s=e[c]:d[c]=e[c];var l={type:t,props:d,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--ha,__i:-1,__u:0,__source:i,__self:o};if(typeof t=="function"&&(s=t.defaultProps))for(c in s)d[c]===void 0&&(d[c]=s[c]);return ge.vnode&&ge.vnode(l),l}var ut,Ie,Vr,ui,Rt=0,pi=[],Pe=ge,hi=Pe.__b,gi=Pe.__r,mi=Pe.diffed,fi=Pe.__c,wi=Pe.unmount,yi=Pe.__;function jt(t,e){Pe.__h&&Pe.__h(Ie,t,Rt||e),Rt=0;var r=Ie.__H||(Ie.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function H(t){return Rt=1,bi(_i,t)}function bi(t,e,r){var n=jt(ut++,2);if(n.t=t,!n.__c&&(n.__=[r?r(e):_i(void 0,e),function(c){var d=n.__N?n.__N[0]:n.__[0],l=n.t(d,c);d!==l&&(n.__N=[l,n.__[1]],n.__c.setState({}))}],n.__c=Ie,!Ie.__f)){var i=function(c,d,l){if(!n.__c.__H)return!0;var p=n.__c.__H.__.filter(function(h){return!!h.__c});if(p.every(function(h){return!h.__N}))return!o||o.call(this,c,d,l);var u=n.__c.props!==c;return p.forEach(function(h){if(h.__N){var g=h.__[0];h.__=h.__N,h.__N=void 0,g!==h.__[0]&&(u=!0)}}),o&&o.call(this,c,d,l)||u};Ie.__f=!0;var o=Ie.shouldComponentUpdate,s=Ie.componentWillUpdate;Ie.componentWillUpdate=function(c,d,l){if(this.__e){var p=o;o=void 0,i(c,d,l),o=p}s&&s.call(this,c,d,l)},Ie.shouldComponentUpdate=i}return n.__N||n.__}function W(t,e){var r=jt(ut++,3);!Pe.__s&&Hr(r.__H,e)&&(r.__=t,r.u=e,Ie.__H.__h.push(r))}function ye(t){return Rt=5,He(function(){return{current:t}},[])}function He(t,e){var r=jt(ut++,7);return Hr(r.__H,e)&&(r.__=t(),r.__H=e,r.__h=t),r.__}function qe(t,e){return Rt=8,He(function(){return t},e)}function cr(t){var e=Ie.context[t.__c],r=jt(ut++,9);return r.c=t,e?(r.__==null&&(r.__=!0,e.sub(Ie)),e.props.value):t.__}function ga(){for(var t;t=pi.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(lr),t.__H.__h.forEach(Ur),t.__H.__h=[]}catch(e){t.__H.__h=[],Pe.__e(e,t.__v)}}Pe.__b=function(t){Ie=null,hi&&hi(t)},Pe.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),yi&&yi(t,e)},Pe.__r=function(t){gi&&gi(t),ut=0;var e=(Ie=t.__c).__H;e&&(Vr===Ie?(e.__h=[],Ie.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.forEach(lr),e.__h.forEach(Ur),e.__h=[],ut=0)),Vr=Ie},Pe.diffed=function(t){mi&&mi(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(pi.push(e)!==1&&ui===Pe.requestAnimationFrame||((ui=Pe.requestAnimationFrame)||ma)(ga)),e.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),Vr=Ie=null},Pe.__c=function(t,e){e.some(function(r){try{r.__h.forEach(lr),r.__h=r.__h.filter(function(n){return!n.__||Ur(n)})}catch(n){e.some(function(i){i.__h&&(i.__h=[])}),e=[],Pe.__e(n,r.__v)}}),fi&&fi(t,e)},Pe.unmount=function(t){wi&&wi(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{lr(n)}catch(i){e=i}}),r.__H=void 0,e&&Pe.__e(e,r.__v))};var vi=typeof requestAnimationFrame=="function";function ma(t){var e,r=function(){clearTimeout(n),vi&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(r,35);vi&&(e=requestAnimationFrame(r))}function lr(t){var e=Ie,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),Ie=e}function Ur(t){var e=Ie;t.__c=t.__(),Ie=e}function Hr(t,e){return!t||t.length!==e.length||e.some(function(r,n){return r!==t[n]})}function _i(t,e){return typeof e=="function"?e(t):e}const xi=Dt(""),fa=({children:t,productHandle:e})=>{const[r,n]=H(),[i,o]=H("en"),s=r?r.general_config.defaultLanguage:"en",c={bar_atc_cta:"Add to Cart",bar_cta_success:"Success",bar_checkout_cta:"Buy Now",bar_cta_sold_out:"Sold Out"},d={config:r,customProductHandle:e,currentLanguage:r&&r.cornercart.langConfig.stickyAtcWidget&&((u,h=!0)=>u.hasOwnProperty(i)&&h?{...c,...u[i]}:{...c,...u[s]})(r.cornercart.langConfig.stickyAtcWidget,r.general_config.featureFlag.apps.cornercart.multi_language_support),mobileBreakPoint:768};W(()=>{window.isPreviewPage||(l(),o(window.Shopify.locale))},[]);const l=async()=>{const u=window.cornerRenderConfig;n(u.json_build_object)},p=qe(u=>{const{data:h}=u;if(h){const g=JSON.parse(h);n(g),window.cornerRenderConfig={...window.cornerRenderConfig,json_build_object:g}}},[]);return W(()=>{if(window.isPreviewPage===!0)return console.log("%c Warning:  Stickybar Preview Mode (v1.0) Loaded ","background: #ffc400; color: #1c1603; padding:4px; font-weight:bolder; border-radius:4px"),window.addEventListener("message",p),()=>{window.removeEventListener("message",p)}},[p]),a(xi.Provider,{value:d,children:d.config&&t})},zr=()=>cr(xi),wa=()=>{const{config:t,mobileBreakPoint:e}=zr(),{design:r,general:n}=t.cornercart.stickybarConfig,i=t.general_config.featureFlag.apps.cornercart.stickybar.stickybar_mobile_specific_customisations;let o=r.desktop,s=i?r.mobile:{...r.desktop,isActive:r.mobile.isActive,elements:{variants:r.desktop.elements.variants,productName:!1,compareAtPrice:!1,variantsLabel:!0,priceOnCta:!0,productImg:!1,quantity:!0,price:!1,compareAtPriceOnCta:!1}};return a("style",{children:[`
        :root {
          --corner-satc-card-bg: ${o.colors.cardBgColor};
          --corner-satc-card-bg-mobile: ${s.colors.cardBgColor};
          --corner-satc-card-fg: ${o.colors.cardFgColor};
          --corner-satc-card-fg-mobile: ${s.colors.cardFgColor};
          --corner-satc-cta-bg: ${o.colors.ctaBgColor};
          --corner-satc-cta-bg-mobile: ${s.colors.ctaBgColor};
          --corner-satc-cta-fg: ${o.colors.ctaFgColor};
          --corner-satc-cta-fg-mobile: ${s.colors.ctaFgColor};
          --corner-satc-z_index: ${o.zIndex};
          --corner-satc-z_index-mobile: ${s.zIndex};
          --corner-satc-image-outline: ${o.colors.imgOutlineColor};
          --corner-satc-image-outline-mobile: ${s.colors.imgOutlineColor};
        }
        `,`@media only screen and (max-width: ${e}px) {
          .corner-bar-control {
            display : ${s.isActive?"block":"none"}
          }
        }
      `,`@media only screen and (min-width: ${e}px) {
          .corner-bar-control {
            display : ${o.isActive?"block":"none"}
          }
        }
      `,`
        @media only screen and (max-width: ${e}px) {
            .bg-satc-card-bg {
              background:var(--corner-satc-card-bg-mobile);
            }
            .text-satc-card-fg {
              color: var(--corner-satc-card-fg-mobile) !important;
            }
            .bg-satc-cta_btn-bg {
              background-color: var(--corner-satc-cta-bg-mobile);
            }
            .text-satc-cta_btn-fg {
              color: var(--corner-satc-cta-fg-mobile);
            }
            .corner-bar-position {
                ${s.position}: 0;
            }
            .my-satc-card-margin {
                margin-top: ${s.padding}px !important;
                margin-bottom" ${s.padding}px !important;
            }
            
            .z-satc-z-index {
                z-index: var(--corner-satc-z_index-mobile);
            }
            .border-satc-img_outline {
                border-color:var(--corner-satc-image-outline-mobile) !important;
            }

            .corner-product-info-control {
                display: ${s.elements.productImg||s.elements.productName||s.elements.price||s.elements.compareAtPrice?"flex !important":"none !important;"}
            }
            .corner-product-image-control {
                display: ${s.elements.productImg?"block":"none"}
            }
            .corner-product-name-control {
                display: ${s.elements.productName?"block":"none"}
            }
            .corner-product-price-control {
                display: ${s.elements.price?"block":"none"}
            }
            .corner-product-compare_price-control {
                display: ${s.elements.compareAtPrice?"block":"none"}
            }
            .corner-quantity-control {
                display: ${s.elements.quantity?"flex":"none"}
            }
            .corner-variant-control {
                display: ${s.elements.variants?"flex":"none"}
            }
            .corner-variant-label-control {
              display: ${s.elements.variantsLabel?"block":"none"}
          }
            .corner-cta-btn-price-control {
              display: ${s.elements.priceOnCta?"inline":"none"}
          }
          .corner-cta-btn-compare-at-price-control {
            display: ${s.elements.compareAtPriceOnCta?"inline":"none"}
        }
          .corner-variant-label-padding {
              padding: ${s.elements.variantsLabel?"1.5em .5em .5em .5em":".95em"}
          }

            .corner-satc-shadow {
              box-shadow: 0 ${s.position==="bottom"?"-":""}2px 2px 2px rgb(0 0 0 / 0.05);
            }
            .nudge-widget {
              transform: ${s.position==="bottom"?"translateY(-70px)":"translateY(70px)"};
            }
        }
        `,`
        @media only screen and (min-width: ${e}px) {
            .bg-satc-card-bg {
                background: var(--corner-satc-card-bg);
            }
            .text-satc-card-fg {
              color: var(--corner-satc-card-fg) !important;
            }
            .bg-satc-cta_btn-bg {
                background-color: var(--corner-satc-cta-bg);
            }
            .text-satc-cta_btn-fg {
                color: var(--corner-satc-cta-fg);
            }
            .corner-bar-position {
                ${o.position}: 0;
            }
            .corner-bar-position-translate {
              transform: ${o.position==="top"?"translateY(-60px)":"translateY(60px)"} 
            }
            .my-satc-card-margin {
                margin-top: ${o.padding}px !important;
                margin-bottom: ${o.padding}px !important;
            }
            .z-satc-z-index {
                z-index: var(--corner-satc-z_index);
            }
            .border-satc-img_outline {
                border-color:var(--corner-satc-image-outline) !important;
            }
            .corner-product-info-control {
              display: ${o.elements.productImg||o.elements.productName||o.elements.price||o.elements.compareAtPrice?"flex !important":"none !important;"}
          }
            .corner-product-image-control {
                display: ${o.elements.productImg?"block":"none"}
            }
            .corner-product-name-control {
                display: ${o.elements.productName?"block":"none"}
            }
            .corner-product-price-control {
                display: ${o.elements.price?"block":"none"}
            }
            .corner-product-compare_price-control {
                display: ${o.elements.compareAtPrice?"block":"none"}
            }
            .corner-quantity-control {
                display: ${o.elements.quantity?"flex":"none"}
            }
            .corner-variant-control {
                display: ${o.elements.variants?"flex":"none"}
            }
            .corner-variant-label-control {
                display: ${o.elements.variantsLabel?"block":"none"}
            }
            .corner-cta-btn-price-control {
              display: ${o.elements.priceOnCta?"inline":"none"}
          }
            .corner-cta-btn-compare-at-price-control {
              display: ${o.elements.compareAtPriceOnCta?"inline":"none"}
          }
            .corner-variant-label-padding {
                padding: ${o.elements.variantsLabel?"1.5em .5em .5em .5em":".95em"}
            }

            .corner-satc-shadow {
              box-shadow: 0 ${o.position==="bottom"?"-":""}2px 2px 2px rgb(0 0 0 / 0.05);
            }
             .nudge-widget {
              transform: ${o.position==="bottom"?"translateY(-70px)":"translateY(70px)"};
            }
        }
      `,`input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          margin: 0;
        }`,`
      .corner-cta-animation-shake {
          -webkit-animation: shake-horizontal 4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 3s infinite both;
          animation: shake-horizontal 4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 3s infinite both;
        }

        @-webkit-keyframes shake-horizontal {
            0%,
            100% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
            }
            10%,
            30%,
            50%,
            70% {
              -webkit-transform: translateX(-10px);
              transform: translateX(-10px);
            }
            20%,
            40%,
            60% {
              -webkit-transform: translateX(10px);
              transform: translateX(10px);
            }
            80% {
              -webkit-transform: translateX(8px);
              transform: translateX(8px);
            }
            90% {
              -webkit-transform: translateX(-8px);
              transform: translateX(-8px);
            }
          }
          @keyframes shake-horizontal {
            0%,
            100% {
              -webkit-transform: translateX(0);
              transform: translateX(0);
            }
            10%,
            30%,
            50%,
            70% {
              -webkit-transform: translateX(-10px);
              transform: translateX(-10px);
            }
            20%,
            40%,
            60% {
              -webkit-transform: translateX(10px);
              transform: translateX(10px);
            }
            80% {
              -webkit-transform: translateX(8px);
              transform: translateX(8px);
            }
            90% {
              -webkit-transform: translateX(-8px);
              transform: translateX(-8px);
            }
        }
      `,`
       .corner-cta-animation-pulse {
            -webkit-animation: pulsate-fwd 2s ease-in-out infinite both;
            animation: pulsate-fwd 2s ease-in-out infinite both;
        }

        @-webkit-keyframes pulsate-fwd {
            0% {
              -webkit-transform: scale(1);
              transform: scale(1);
            }
            25% {
              -webkit-transform: scale(1.1);
              transform: scale(1.1);
            }
            50% {
              -webkit-transform: scale(1);
              transform: scale(1);
            }
            100% {
              -webkit-transform: scale(1);
              transform: scale(1);
            }
          }
          @keyframes pulsate-fwd {
            0% {
              -webkit-transform: scale(1);
              transform: scale(1);
            }
            12% {
              -webkit-transform: scale(1.1);
              transform: scale(1.1);
            }
            25% {
              -webkit-transform: scale(1);
              transform: scale(1);
            }
            100%{
              -webkit-transform: scale(1);
              transform: scale(1);
            }
        }
      `,`${t.general_config.featureFlag.apps.cornercart.stickybar.stickybar_custom_css&&n.customCss}`]})},vt=(window.Shopify.locale?window.Shopify.locale.toUpperCase():"EN").replace(/-/g,"_"),Wr=vt==="PT_BR"||vt==="PT_PT"||vt==="ZH_TW"||vt==="ZH_CN"?vt:vt.substring(0,2),Gr=window.Shopify.country?window.Shopify.country.toUpperCase():"US",Bt=()=>`
{
  id
  isGiftCard
  availableForSale
  requiresSellingPlan
  sellingPlanGroups(first: 50){
    nodes{
      name
    }
  }
  featuredImage {
    url
  }
  ${(()=>{if(window.cornerRenderConfig){const t=window.cornerRenderConfig.json_build_object.cornercart.cartConfig.general.alternateProductTitleMetafield,e=window.cornerRenderConfig.json_build_object.cornercart.cartConfig.general.alternateProductImageMetafield,r=window.cornerRenderConfig?.json_build_object?.cornercart?.cartConfig?.general?.showReviewRating,n={alternateProductTitle:{namespace:t&&t.namespace?t.namespace:"custom",key:t&&t.key?t.key:"corner_alternate_product_title"},alternateProductImage:{namespace:e&&e.namespace?e.namespace:"custom",key:e&&e.key?e.key:"corner_alternate_product_image"}};if(r&&(n.reviewsRating={namespace:"reviews",key:"rating"},n.reviewsRatingCount={namespace:"reviews",key:"rating_count"}),Object.keys(n).length>0)return Object.keys(n).map(i=>`${i}:metafield(namespace: "${n[i].namespace}", key: "${n[i].key}"){value}`).join(", ")}return""})()}
  compareAtPriceRange {
    maxVariantPrice {
      amount
      currencyCode
    }
  }
  priceRange {
    maxVariantPrice {
      amount
      currencyCode
    }
  }
  handle
  options {
    id
    name
    values
    optionValues{
			id
			name
			firstSelectableVariant{
				id
			}
		}
  }
  productType
  tags
  title
  onlineStoreUrl
  trackingParameters
  vendor
  collections(first: 50) {
    nodes {
      id
      handle
      title
    }
  }
  variants(first: 250) {
    nodes {
      id
      availableForSale
      quantityRule {
        increment
        maximum
        minimum
      }
      image {
        url
        width
        height
      }
      selectedOptions {
        name
        value
      }
      title
      requiresShipping
      weight
      price {
        amount
        currencyCode
      }
      compareAtPrice {
        amount
        currencyCode
      }
      ${(()=>{if(window.cornerRenderConfig){const t=window.cornerRenderConfig?.json_build_object?.cornercart?.cartConfig?.general,e=t?.showReviewRating,r={};if(e&&(r.reviewsRating={namespace:"reviews",key:"rating"},r.reviewsRatingCount={namespace:"reviews",key:"rating_count"}),Object.keys(r).length>0)return Object.keys(r).map(n=>`${n}:metafield(namespace: "${r[n].namespace}", key: "${r[n].key}"){value}`).join(", ")}return""})()}
      sellingPlanAllocations(first:50){
        nodes{
          sellingPlan{
            id
            name
            options{
              name
              value
            }
            recurringDeliveries
            priceAdjustments{
              adjustmentValue{
                ... on SellingPlanPercentagePriceAdjustment {
                    adjustmentPercentage
                  }
                ... on SellingPlanFixedAmountPriceAdjustment {
                  adjustmentAmount{
                    amount
                    }
                  }
                  ... on SellingPlanFixedPriceAdjustment{
                    price {
                      amount
                    }
                  }
            }
          }
          }
        }
      }
    }
  }
}
`;var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ci(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $i,ki={exports:{}},ya=($i||($i=1,(function(t){t.exports=(function(){function e(i){for(var o=[],s=0,c=i.length;s<c;s++)o.indexOf(i[s])===-1&&o.push(i[s]);return o}Array.isArray||(Array.isArray=function(i){return Object.prototype.toString.call(i)==="[object Array]"});var r={},n={"==":function(i,o){return i==o},"===":function(i,o){return i===o},"!=":function(i,o){return i!=o},"!==":function(i,o){return i!==o},">":function(i,o){return i>o},">=":function(i,o){return i>=o},"<":function(i,o,s){return s===void 0?i<o:i<o&&o<s},"<=":function(i,o,s){return s===void 0?i<=o:i<=o&&o<=s},"!!":function(i){return r.truthy(i)},"!":function(i){return!r.truthy(i)},"%":function(i,o){return i%o},log:function(i){return console.log(i),i},in:function(i,o){return!(!o||o.indexOf===void 0)&&o.indexOf(i)!==-1},cat:function(){return Array.prototype.join.call(arguments,"")},substr:function(i,o,s){if(s<0){var c=String(i).substr(o);return c.substr(0,c.length+s)}return String(i).substr(o,s)},"+":function(){return Array.prototype.reduce.call(arguments,function(i,o){return parseFloat(i,10)+parseFloat(o,10)},0)},"*":function(){return Array.prototype.reduce.call(arguments,function(i,o){return parseFloat(i,10)*parseFloat(o,10)})},"-":function(i,o){return o===void 0?-i:i-o},"/":function(i,o){return i/o},min:function(){return Math.min.apply(this,arguments)},max:function(){return Math.max.apply(this,arguments)},merge:function(){return Array.prototype.reduce.call(arguments,function(i,o){return i.concat(o)},[])},var:function(i,o){var s=o===void 0?null:o,c=this;if(i===void 0||i===""||i===null)return c;for(var d=String(i).split("."),l=0;l<d.length;l++)if(c==null||(c=c[d[l]])===void 0)return s;return c},missing:function(){for(var i=[],o=Array.isArray(arguments[0])?arguments[0]:arguments,s=0;s<o.length;s++){var c=o[s],d=r.apply({var:c},this);d!==null&&d!==""||i.push(c)}return i},missing_some:function(i,o){var s=r.apply({missing:o},this);return o.length-s.length>=i?[]:s}};return r.is_logic=function(i){return typeof i=="object"&&i!==null&&!Array.isArray(i)&&Object.keys(i).length===1},r.truthy=function(i){return!(Array.isArray(i)&&i.length===0||!i)},r.get_operator=function(i){return Object.keys(i)[0]},r.get_values=function(i){return i[r.get_operator(i)]},r.apply=function(i,o){if(Array.isArray(i))return i.map(function(w){return r.apply(w,o)});if(!r.is_logic(i))return i;var s,c,d,l,p,u=r.get_operator(i),h=i[u];if(Array.isArray(h)||(h=[h]),u==="if"||u=="?:"){for(s=0;s<h.length-1;s+=2)if(r.truthy(r.apply(h[s],o)))return r.apply(h[s+1],o);return h.length===s+1?r.apply(h[s],o):null}if(u==="and"){for(s=0;s<h.length;s+=1)if(c=r.apply(h[s],o),!r.truthy(c))return c;return c}if(u==="or"){for(s=0;s<h.length;s+=1)if(c=r.apply(h[s],o),r.truthy(c))return c;return c}if(u==="filter")return l=r.apply(h[0],o),d=h[1],Array.isArray(l)?l.filter(function(w){return r.truthy(r.apply(d,w))}):[];if(u==="map")return l=r.apply(h[0],o),d=h[1],Array.isArray(l)?l.map(function(w){return r.apply(d,w)}):[];if(u==="reduce")return l=r.apply(h[0],o),d=h[1],p=h[2]!==void 0?r.apply(h[2],o):null,Array.isArray(l)?l.reduce(function(w,b){return r.apply(d,{current:b,accumulator:w})},p):p;if(u==="all"){if(l=r.apply(h[0],o),d=h[1],!Array.isArray(l)||!l.length)return!1;for(s=0;s<l.length;s+=1)if(!r.truthy(r.apply(d,l[s])))return!1;return!0}if(u==="none"){if(l=r.apply(h[0],o),d=h[1],!Array.isArray(l)||!l.length)return!0;for(s=0;s<l.length;s+=1)if(r.truthy(r.apply(d,l[s])))return!1;return!0}if(u==="some"){if(l=r.apply(h[0],o),d=h[1],!Array.isArray(l)||!l.length)return!1;for(s=0;s<l.length;s+=1)if(r.truthy(r.apply(d,l[s])))return!0;return!1}if(h=h.map(function(w){return r.apply(w,o)}),n.hasOwnProperty(u)&&typeof n[u]=="function")return n[u].apply(o,h);if(u.indexOf(".")>0){var g=String(u).split("."),m=n;for(s=0;s<g.length;s++){if(!m.hasOwnProperty(g[s]))throw new Error("Unrecognized operation "+u+" (failed at "+g.slice(0,s+1).join(".")+")");m=m[g[s]]}return m.apply(o,h)}throw new Error("Unrecognized operation "+u)},r.uses_data=function(i){var o=[];if(r.is_logic(i)){var s=r.get_operator(i),c=i[s];Array.isArray(c)||(c=[c]),s==="var"?o.push(c[0]):c.forEach(function(d){o.push.apply(o,r.uses_data(d))})}return e(o)},r.add_operation=function(i,o){n[i]=o},r.rm_operation=function(i){delete n[i]},r.rule_like=function(i,o){if(o===i||o==="@")return!0;if(o==="number")return typeof i=="number";if(o==="string")return typeof i=="string";if(o==="array")return Array.isArray(i)&&!r.is_logic(i);if(r.is_logic(o)){if(r.is_logic(i)){var s=r.get_operator(o),c=r.get_operator(i);if(s==="@"||s===c)return r.rule_like(r.get_values(i,!1),r.get_values(o,!1))}return!1}if(Array.isArray(o)){if(Array.isArray(i)){if(o.length!==i.length)return!1;for(var d=0;d<o.length;d+=1)if(!r.rule_like(i[d],o[d]))return!1;return!0}return!1}return!1},r})()})(ki)),ki.exports);const Ne=Ci(ya);let qt=window.Shopify&&window.Shopify.currency&&window.Shopify.currency.rate?window.Shopify.currency.rate:1;const Qr=async(t,e,r,n)=>{if(window.useSampleData)return{items:{},status:"sample-mode"};try{return{status:"success",...await(await fetch(t+"?cocaId="+n,{method:e,headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r),cornerGenerated:!0})).json()}}catch(i){return console.error(`HTTP-Error: ${e} Error`,i),{status:"failed",...i}}},Ye=(t,e)=>{let r=t.substring(t.indexOf("(")+1,t.length-1).split(",");return`rgba(${r[0]},${r[1]},${r[2]},${e})`},Yr=t=>{let e={},r={},n={};return t.forEach(i=>{let o=e[i.productId]?e[i.productId].quantity:0,s=r[i.variantId]?r[i.variantId].quantity:0,c=e[i.productId]?e[i.productId].amount:0,d=r[i.variantId]?r[i.variantId].amount:0,l=o+i.quantity,p=s+i.quantity,u=c+i.cost.subtotalAmount,h=d+i.cost.subtotalAmount;i.collections.map(g=>{let m=n[g.id]?n[g.id].quantity:0,w=n[g.id]?n[g.id].amount:0,b=m+i.quantity,x=w+i.cost.subtotalAmount;n={...n,[g.id]:{quantity:b,amount:x}}}),e={...e,[i.productId]:{quantity:l,amount:u}},r={...r,[i.variantId]:{quantity:p,amount:h}}}),{productArray:Object.keys(e).map(i=>({productId:parseInt(i),quantity:e[i].quantity,amount:e[i].amount/qt})),variantArray:Object.keys(r).map(i=>({variantId:parseInt(i),quantity:r[i].quantity,amount:r[i].amount/qt})),collectionArray:Object.keys(n).map(i=>({collectionId:parseInt(i),quantity:n[i].quantity,amount:n[i].amount/qt}))}},ur=(t,e,r)=>{var n=r?t.toFixed(e).toString():Number(t.toFixed(e)).toString();return n.match(/^\.\d+/g)?"0"+n:n.match(/(?:\.\d+)/g)&&n.match(/(?:\.\d+)/g)[0].length===2?n+"0":n},_e=(t,e,r)=>{var n="",i=/\{\{\s*(\w+)\s*\}\}/;let o,s=!1;if(window.Shopify.currency){const{active:c}=window.Shopify.currency;e&&e[`${c}`]?(o=e[`${c}`].format,s=!!e[`${c}`].showDecimalsIfWholeNumber):o=`{{amount}} ${c} `}else e?Object.keys(e).forEach(function(c){e[c].isDefault===!0&&(o=e[c].format)}):o="{{amount}}";switch(o.match(i)[1]){case"amount":default:n=ur(t/100,2,s).replace(/(\d+)(\d{3}[\.,]?)/,"$1,$2").replace(/(\d+)(\d{3}[\.,]?)/,"$1,$2");break;case"amount_no_decimals":n=ur(t/100,0,s).replace(/(\d+)(\d{3}[\.,]?)/,"$1,$2").replace(/(\d+)(\d{3}[\.,]?)/,"$1,$2");break;case"amount_with_comma_separator":n=ur(t/100,2,s).replace(/\./,",").replace(/(\d+)(\d{3}[\.,]?)/,"$1.$2").replace(/(\d+)(\d{3}[\.,]?)/,"$1.$2");break;case"amount_no_decimals_with_comma_separator":n=ur(t/100,0,s).replace(/\./,",").replace(/(\d+)(\d{3}[\.,]?)/,"$1.$2").replace(/(\d+)(\d{3}[\.,]?)/,"$1.$2")}return r?o.replace(i,n):a("span",{dangerouslySetInnerHTML:{__html:o.replace(i,n)}})},Si=(t,e)=>{const r=document.getElementById(t),n=document.getElementById(e);if(n&&r){const i=r.getBoundingClientRect(),o=n.getBoundingClientRect();return!(i.top>o.bottom||i.right<o.left||i.bottom<o.top||i.left>o.right)}},_t=(t,e)=>t.length>e?`${t.substring(0,Math.min(t.length,e))}...`:t,Le=(t,e)=>{let r=t;const n=window.cornerRenderConfig.json_build_object.general_config.cornerCurrencyFormat,i=t.match(/{{(.*?)}}/g);return i&&i.length>0&&i.map(o=>{let s,c,d;if(o.includes("|")){s=o.split("|")[0].replace(/{{|}}|\s|<|>/g,""),c=o.split("|")[1].split(":")[0].replace(/\s|}}/g,"");const l=e.find(p=>p.placeholder===s);if(l){let p=l?l.value:"";const u=l?l.valueType:"string";switch(c){case"plus":d=parseFloat(o.split(":")[1].replace(/\s|}}/g,"")),u&&u==="currency"&&(d*=100),p=p?parseFloat(p)+d:"";break;case"minus":d=parseFloat(o.split(":")[1].replace(/\s|}}/g,"")),u&&u==="currency"&&(d*=100),p=p?parseFloat(p)-d:"";break;case"times":d=parseInt(o.split(":")[1].replace(/\s|}}/g,"")),p=p?parseFloat(p)*d:"";break;case"divided_by":d=parseFloat(o.split(":")[1].replace(/\s|}}/g,"")),p=p?parseFloat(p)/d:"";break;case"round":if(u&&u==="currency"){const h=parseFloat(p)/100;p=100*Math.round(h)}else p=p?Math.round(parseFloat(p)):"";break;case"append":d=o.split(":")[1].match(/(["'])(.*?[^\\])\1/g,"")[0].slice(1,-1),p=l?l.value+d:"";break;case"capitalize":p=l?l.value.charAt(0).toUpperCase()+l.value.slice(1):"";break;case"downcase":p=l?l.value.toLowerCase():"";break;case"pluralize":{let h=o.split(":")[1].match(/(["'])(.*?[^\\])\1/g,"")[0].slice(1,-1),g=o.split(":")[1].match(/(["'])(.*?[^\\])\1/g,"")[1].slice(1,-1);p=(u&&u==="currency"?parseFloat(l.value)/100:parseFloat(l.value))>1?g:h;break}}u&&u==="currency"&&c!=="pluralize"&&(p=_e(p,n,!0)),r=r.replace(o,p)}else r=t}else{s=o.replace(/{{|}}|\s|<|>/g,"");const l=e.find(p=>p.placeholder===s);if(l){let p=l.value||"";l.valueType&&l.valueType==="currency"&&(p=_e(p,n,!0)),r=r.replace(o,p)}else r=t}}),a("span",{dangerouslySetInnerHTML:{__html:r}})},Jr=(t,e)=>{const r=window.corner?.globalVariables?.quantityFormats;let n=t,i="{{quantity}}";if(r){const o=r.find(c=>c.productType===e),s=r.find(c=>c.productType==="allProducts");o?(i=o.format,n=t*o.conversionRate):s&&(i=s.format,n=t*s.conversionRate)}return Le(i,[{placeholder:"quantity",value:n,valueType:"number"}])},Ii=(t,e)=>t.reduce((r,n)=>(r.reward.unit==="percent"?r.reward.value/100*e:100*r.reward.value*qt)>(n.reward.unit==="percent"?n.reward.value/100*e:100*n.reward.value*qt)?r:n),Te=t=>{const e=t.split("/");return e[e.length-1]},xt=t=>t.includes("GIFT")?"cartGoal":"bxgyCampaign",Ft=async(t,e)=>await(await fetch("https://"+window.Shopify.shop+"/api/2024-10/graphql.json",{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Storefront-Access-Token":window.cornerStorefrontToken},body:JSON.stringify({query:t,variables:e})})).json(),pr=t=>{const e=(window.corner?.excludedSellingPlanIds||[]).map(String),r=n=>{let i=[];return n.map(o=>{o.firstSelectableVariant&&i.push(o.name)}),i};return{id:parseInt(Te(t.id)),image:t.featuredImage?t.featuredImage.url+"&width=200":"https://imagedelivery.net/QI2wC6Vls23vJd9vFFaomg/bd467579-ab1c-42c1-3bec-90d275096100/public",available:t.availableForSale,compareAtPrice:Number(Math.round(t.compareAtPriceRange.maxVariantPrice.amount+"e2")),handle:t.handle,isGiftCard:t.isGiftCard,options:t.options.map(n=>({name:n.name,values:r(n.optionValues),optionValues:n.optionValues,id:parseInt(Te(n.id))})),price:Number(Math.round(t.priceRange.maxVariantPrice.amount+"e2")),tags:t.tags,alternateProductTitle:t.alternateProductTitle&&t.alternateProductTitle.value&&t.alternateProductTitle.value,alternateProductImage:t.alternateProductImage&&t.alternateProductImage.value&&t.alternateProductImage.value,rating:t.reviewsRating?.value?JSON.parse(t.reviewsRating.value):null,ratingCount:t.reviewsRatingCount?.value?parseInt(t.reviewsRatingCount.value,10):null,title:t.title,url:t.onlineStoreUrl||`${window.Shopify.routes.root}products/${t.handle}`,vendor:t.vendor,requiresSellingPlan:t.requiresSellingPlan,sellingPlanGroups:t.sellingPlanGroups,variants:t.variants.nodes.map(n=>{let i=n.sellingPlanAllocations?.nodes||[];return i.length>0&&e.length>0&&(i=i.filter(o=>{const s=Te(o.sellingPlan.id).toString();return!e.includes(s)}),t.requiresSellingPlan&&i.length===0&&(i=n.sellingPlanAllocations.nodes)),{...n,sellingPlanAllocations:{...n.sellingPlanAllocations,nodes:i},available:n.availableForSale,compareAtPrice:n.compareAtPrice?Number(Math.round(n.compareAtPrice.amount+"e2")):0,price:Number(Math.round(n.price.amount+"e2")),id:parseInt(Te(n.id)),image:n.image?n.image.url+"&width=200":"https://imagedelivery.net/QI2wC6Vls23vJd9vFFaomg/bd467579-ab1c-42c1-3bec-90d275096100/public",rating:n.reviewsRating?.value?JSON.parse(n.reviewsRating.value):null,ratingCount:n.reviewsRatingCount?.value?parseInt(n.reviewsRatingCount.value,10):null}}),collections:t.collections.nodes.map(n=>({...n,id:parseInt(Te(n.id))})),productType:t.productType}},ba=async t=>{const e=window.Shopify.currency.active,r=[],n=[];if(t.map((i,o)=>{const s=sessionStorage.getItem(`corner-product-details-${i}-${window.Shopify.locale}-${window.Shopify.country}`);s&&JSON.parse(s).currency===e?n.push(JSON.parse(s).product):r.push(i)}),r.length>0){const i={};r.map((c,d)=>{i[`id${d}`]=`gid://shopify/Product/${c}`});let o=await Ft((c=>{const d=c.map((p,u)=>`$id${u}: ID!`).join(", "),l=c.map((p,u)=>`product${u}: product (id: $id${u})${Bt()}`).join(", ");return`query product(${d}) @inContext(country: ${Gr}, language: ${Wr}){${l}}`})(r),i),s=[];if(o&&o.data?Object.keys(o.data).map((c,d)=>{if(o.data[c]){const l=pr(o.data[c]);n.push(l);const p={currency:e,product:l};try{sessionStorage.setItem(`corner-product-details-${l.id}-${window.Shopify.locale}-${window.Shopify.country}`,JSON.stringify(p))}catch(u){console.warn(` Corner: Unable to store ${l.id} object to session storage`,u)}}else s.push(d)}):s=r.map((c,d)=>d),s.length>0&&window.corner.sessionData.customer&&window.corner.sessionData.customer.isB2b){const c=s.map(p=>r[p]),d={};c.map((p,u)=>{d[`id${u}`]=`gid://shopify/Product/${p}`});const l=await Ft((p=>`query product(${p.map((u,h)=>`$id${h}: ID!`).join(", ")}) {${p.map((u,h)=>`product${h}: product (id: $id${h})${Bt()}`).join(", ")}}`)(c),d);l&&l.data&&Object.keys(l.data).map((p,u)=>{if(l.data[p]){const h=pr(l.data[p]);n.push(h);const g={currency:e,product:h};try{sessionStorage.setItem(`corner-product-details-${h.id}-${window.Shopify.locale}-${window.Shopify.country}`,JSON.stringify(g))}catch(m){console.warn(` Corner: Unable to store ${h.id} object to session storage`,m)}}})}}return n},Me=async t=>{const e=window.Shopify.currency.active;if(window.useSampleData){let r;return window.previewValues&&window.previewValues.sampleProductDetailsArray&&(r=window.previewValues.sampleProductDetailsArray.find(n=>n.id===t)),r||window.previewValues.sampleCurrentProduct}{const r=sessionStorage.getItem(`corner-product-details-${t}-${window.Shopify.locale}-${window.Shopify.country}`);let n;if(r&&JSON.parse(r).currency===e)n=JSON.parse(r).product;else{let i=await Ft(`
  query product($id:ID!) @inContext(country: ${Gr}, language: ${Wr}) {
    product(id: $id) ${Bt()}
    }
    `,{id:`gid://shopify/Product/${t}`});if(i&&i.data&&i.data.product||!window.corner.sessionData.customer||!window.corner.sessionData.customer.isB2b||(i=await Ft(`
  query product($id:ID!) {
    product(id: $id) ${Bt()}
    }
    `,{id:`gid://shopify/Product/${t}`})),i&&i.data&&i.data.product){n=pr(i.data.product);const o={currency:e,product:n};try{sessionStorage.setItem(`corner-product-details-${t}-${window.Shopify.locale}-${window.Shopify.country}`,JSON.stringify(o))}catch(s){console.warn(` Corner: Unable to store ${t} object to session storage`,s)}}}return n}},Ti=(t,e,r)=>{let n=r||[],i=[];return e.forEach(o=>{const s=va(t,o),c=s[s.findIndex(d=>d.available===!0)];n.includes(c.id)===!1&&i.push({...o,preferredVariant:c,reccomendationParent:t})}),i},va=(t,e)=>{const r=new Map;if(t.selectedOptions&&t.selectedOptions.length>0){t.selectedOptions.map(i=>{r.set(i.name.toLowerCase(),i.value.toLowerCase())});const n=t.selectedOptions.map(i=>i.name.toLowerCase());return e.variants.sort((i,o)=>{let s=0,c=0;const d=new Map,l=new Map;return i.selectedOptions.forEach(p=>{d.set(p.name.toLowerCase(),p.value.toLowerCase())}),o.selectedOptions.forEach(p=>{l.set(p.name.toLowerCase(),p.value.toLowerCase())}),n.forEach((p,u)=>{r.get(p)===d.get(p)&&(s=s+u+2),r.get(p)===l.get(p)&&(c=c+u+2)}),c-s})}return[]},_a=async(t,e)=>{const r=await Qr(window.Shopify.routes.root+"cart/update.js","POST",t.payload,e);return t.payload.updates&&Ct(),r},xa=async(t,e)=>{const r=await Qr(window.Shopify.routes.root+"cart/change.js","POST",t.payload,e);return Ct(),r},Ca=async(t,e)=>{const r=await Qr(window.Shopify.routes.root+"cart/add.js","POST",t.payload,e);return r.items&&Ct(),r},Pi=async(t="non-grouped")=>{if(window.useSampleData)return window.previewValues.sampleCartDetails;{let e,r=await(await window.fetch(window.Shopify.routes.root+`cart.js?cocaId=${t}`,{cache:"no-store",headers:{isCorner:"true"}})).json();r.currency!==window.Shopify.currency.active&&(r=await(await window.fetch(window.Shopify.routes.root+`cart.js?currency=${window.Shopify.currency.active}&cocaId=true`,{cache:"no-store",headers:{isCorner:"true"}})).json()),r.items=r.items.filter(i=>i.product_id!==null);let n=await ba(r.items.map(i=>i.product_id));return n&&r&&(e=((i,o)=>{let s=[],c=[],d=[];return i.items.length>0&&i.items.map(l=>{const p=o.find(u=>u.id===l.product_id);if(p){const u=p.variants.find(x=>x.id===l.variant_id),{rating:h,ratingCount:g}=((x,_)=>{const C=x?.rating??null,v=x?.ratingCount??null;return{rating:C??_.rating??null,ratingCount:v??_.ratingCount??null}})(u,p),m=u?u.compareAtPrice:0;let w;w=l.quantity_rule?l.quantity_rule:u&&u.quantityRule?u.quantityRule:{increment:1,maximum:null,minimum:1};const b={id:l.key,hasComponents:l.has_components,cost:{subtotalAmount:l.original_line_price,totalAmount:l.line_price,amountPerQuantity:l.price},properties:l.properties,handle:l.handle,discounts:l.discounts,url:l.url,tags:p.tags,isGiftCard:p.isGiftCard,quantityRule:w,vendor:p.vendor,productType:l.product_type,compareAtPrice:m,variantId:l.variant_id,productId:l.product_id,productTitle:p.alternateProductTitle?p.alternateProductTitle:l.product_title,quantity:l.quantity,image:p.alternateProductImage?p.alternateProductImage:l.image?l.image+"&width=200":"https://imagedelivery.net/QI2wC6Vls23vJd9vFFaomg/bd467579-ab1c-42c1-3bec-90d275096100/public",sellingPlanAllocation:l.selling_plan_allocation,collections:p.collections,title:l.title,variantOptions:l.variant_options,selectedOptions:l.options_with_values,grams:l.grams,unitPriceMeasurement:l.unit_price_measurement,sku:l.sku,sellingPlans:u?.sellingPlanAllocations?.nodes||[],requiresSellingPlan:p.requiresSellingPlan,rating:h??null,ratingCount:g??null};s.push(b)}}),i.cart_level_discount_applications.length>0&&i.cart_level_discount_applications.map(l=>{let p,u=l.total_allocated_amount;p=l.type==="discount_code"?{amount:u,title:l.title,type:"code"}:{amount:u,title:l.title,type:"automatic"},c.push(p)}),i.discount_codes.length>0&&i.discount_codes.map(l=>{l.applicable&&d.push(l)}),{attributes:i.attributes,currency:i.currency,cartDiscounts:c,appliedDiscountCodes:d,itemCount:i.item_count,items:s,note:i.note,checkoutUrl:"/checkout",cost:{subtotalAmount:i.original_total_price,totalAmount:i.total_price},token:i.token,allDiscountCodes:i.discount_codes}})(r,n)),e}},$a=async(t,e)=>{if(window.useSampleData)return window.sampleRecomendedProducts;{let r=[];const n=window.Shopify.currency.active;let i=t.map(o=>o.variantId);return await Promise.all(t.map(async o=>{let s=o.productId;const c=sessionStorage.getItem(`corner-recommendation-${s}-${window.Shopify.locale}`);if(c&&JSON.parse(c).currency===n){const d=JSON.parse(c).recommendations;let l=Ti(o,d,i);i=[...i,...l.map(p=>p.preferredVariant.id)],r=[...r,...l]}else{const d=await Ft(`
query productRecommendations ($productId: ID!, $intent: ProductRecommendationIntent!) @inContext(country: ${Gr}, language: ${Wr}){
  productRecommendations (productId: $productId, intent: $intent) ${Bt()}
}
`,{productId:`gid://shopify/Product/${s}`,intent:`${e}`});let l=[];d&&d.data&&d.data.productRecommendations&&d.data.productRecommendations.length>0&&(l=d.data.productRecommendations.filter(g=>g.tags.includes("corner-hide-from-cart-upsell")===!1&&g.availableForSale===!0));const p=l.length>0?l.map(g=>pr(g)):[],u={currency:n,recommendations:p};try{sessionStorage.setItem(`corner-recommendation-${s}-${window.Shopify.locale}`,JSON.stringify(u))}catch(g){console.warn(` Corner: Unable to store ${s} recomended products to session storage`,g)}let h=Ti(o,p,i);i=[...i,...h.map(g=>g.preferredVariant.id)],r=[...r,...h]}})),r}},Ct=async()=>{if(window.headerElementsToRefreshOnCartUpdate){const t=await(await fetch(window.location.href)).text(),e=new DOMParser().parseFromString(t,"text/html");window.headerElementsToRefreshOnCartUpdate.map(r=>{window.document.querySelectorAll(r).length>0&&window.document.querySelectorAll(r).forEach((n,i)=>{e.querySelectorAll(r)[i]&&(n.innerHTML=e.querySelectorAll(r)[i].innerHTML)})})}},Ni=async()=>{let t=await(await window.fetch("/cart/clear.js",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({sections:"header"})})).json();return t.item_count===0?(Ct(t.sections),{status:"success"}):(console.log("HTTP-Error: Clear Cart Error",t),{status:"failed"})},Ai=async(t,e,r)=>{let n=[],i=Object.keys(t),o=t.lineItemsPropertiesToEditArray||[],s=[],c=[];if(t.quantitiesToEdit)for(const[g,m]of Object.entries(t.quantitiesToEdit))e.items.findIndex(w=>w.id===g),s.push({id:g,quantity:m});const d=[];t.changeSellingPlan&&t.changeSellingPlan.forEach(g=>{const m=e.items.findIndex(w=>w.id===g.id)+1;d.push({line:m,quantity:g.quantity,selling_plan:g.sellingPlanId})});const l=(g,m)=>{if(m.includes(g)){let w=m.findIndex(b=>b===g);w!==-1&&m.splice(w,1)}},p=(g,m)=>{let w=!0,b=g.items.some(_=>_.hasComponents===!0),x=m.items.some(_=>_.hasComponents===!0);if(b||x)if(!b&&x)w=!0;else if(b&&x){const _=new Map(g.items.filter(v=>v.hasComponents).map(v=>[v.productId,String(v&&v.properties&&v.properties._cornerBundleQty!=null?v.properties._cornerBundleQty:"")])),C=new Map(m.items.filter(v=>v.hasComponents).map(v=>[v.productId,String(v&&v.properties&&v.properties._cornerBundleQty!=null?v.properties._cornerBundleQty:"")]));if(_.size!==C.size)w=!0;else{let v=!1;for(const[L,k]of _)if(C.get(L)!==k){v=!0;break}w=v}}else w=!0;else w=!1;return w},u=(g,m,w,b,x,_,C=[])=>{if(g.length>0){if(g.includes("quantitiesToEdit"))if(Object.keys(_.quantitiesToEdit).length>1){const v={..._.quantitiesToEdit};l("quantitiesToEdit",g),x.payload.updates={...x.payload.updates,...v}}else{let v=w[0];C.push({job:"change",details:{payload:v,params:[]}}),l("quantitiesToEdit",g)}else if(g.includes("productsToDelete")){let v={},L=_.productsToDelete||[];L.length>0&&L.forEach(k=>{k.id&&(v={...v,[k.id]:0})}),l("productsToDelete",g),x.payload.updates={...x.payload.updates,...v}}else if(g.includes("makeCartOffersNull")||g.includes("makeShippingOffersNull")||g.includes("updatedExternalDiscount")||g.includes("newShippingOfferCode")||g.includes("newCartOfferCode")||g.includes("cartAttributes")){let v={};_.makeCartOffersNull&&(v={...v,_corner_offer_code:null},l("makeCartOffersNull",g)),_.makeShippingOffersNull&&(v={...v,_corner_shipping_offer_code:null},l("makeShippingOffersNull",g)),_.updatedExternalDiscount&&(v={...v,_corner_external_discounts:_.updatedExternalDiscount},l("updatedExternalDiscount",g)),_.newShippingOfferCode&&(v={...v,_corner_shipping_offer_code:_.newShippingOfferCode},l("newShippingOfferCode",g)),_.newCartOfferCode&&(v={...v,_corner_offer_code:_.newCartOfferCode},l("newCartOfferCode",g)),_.cartAttributes&&(v={...v,..._.cartAttributes},l("cartAttributes",g)),x.payload.attributes={...v}}else if(g.includes("productsToAdd")&&_.productsToAdd.length>0){let v=_.productsToAdd.map(L=>({id:L.variantId,quantity:L.quantity,properties:L.properties,selling_plan:L.selling_plan}));l("productsToAdd",g),C.push({job:"add",details:{payload:{items:v},params:[]}})}else if(g.includes("lineItemsPropertiesToEditArray")&&m.length>0){let v=m.shift();C.push({job:"change",details:{payload:{id:v.id,properties:v.properties},params:[]}}),m.length===0&&l("lineItemsPropertiesToEditArray",g)}else if(g.includes("cartNote")){let v=_.cartNote;l("cartNote",g),x.payload.note=v}else if(g.includes("discountCodeEdit")){const v=_.discountCodeEdit;l("discountCodeEdit",g);const[L,k]=v,A=k.sort().join(",");x.payload.discount=A,x.params=L}else if(g.includes("changeSellingPlan")&&b.length>0){const v=b.shift();C.push({job:"change",details:{payload:v,params:[]}}),b.length===0&&l("changeSellingPlan",g)}return u(g,m,w,b,x,_,C)}return Object.keys(x.payload).length>0&&C.push({job:"update",details:{payload:x.payload,params:x.params}}),C=window.corner.execute("cartEditOverride",{finalAjaxJobList:C})},h=async(g,m,w,b,x)=>{let _;const C={change:0,update:1,add:2},v=`job-queue-${m}-${(k=>{const A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let j="";for(let $=0;$<k;$++)j+=A.charAt(Math.floor(62*Math.random()));return j})(3)}`;g.sort((k,A)=>C[k.job]-C[A.job]);for(const k of g)switch(k.job){case"update":if(_=await _a(k.details,v),_.status!=="success")n.push("Some error Occured");else if(k.details.payload.discount){let A={status:"",results:[],errors:[],operations:k.details.params};k.details.params.forEach(j=>{const $=_.discount_codes&&_.discount_codes.find(P=>P.code===j.code);j.operation==="add"&&($?$.applicable?(A.results.push({status:"success",discountCode:j.code,operation:j.operation}),window.corner&&window.corner.execute&&window.corner.execute("onDiscountCodeAdd",{discountCodeAdded:j.code})):A.errors.push({status:"failed",discountCode:j.code,message:"discount_code_not_applicable",operation:j.operation}):A.errors.push({status:"failed",discountCode:j.code,message:"discount_code_not_found",operation:j.operation})),j.operation==="remove"&&($?A.errors.push({status:"failed",discountCode:j.code,message:"discount_code_not_removed",operation:j.operation}):(A.results.push({status:"success",discountCode:j.code,operation:j.operation}),window.corner&&window.corner.execute&&window.corner.execute("onDiscountCodeRemove",{discountCodeRemoved:j.code})))}),A.results.length>0&&A.errors.length===0?A.status="success":A.results.length===0&&A.errors.length>0?A.status="failed":A.status="partial_success",A.status!=="success"&&n.push(b.cart.non_applicable_discount_code_warning)}break;case"change":_=await xa(k.details,v),_.status!=="success"&&(_.status===422?n.push(_.message):n.push("Some error Occured"));break;case"add":_=await Ca(k.details,v),_.status!=="success"&&(_.status===422?n.push(_.message):n.push("Some error Occured"))}const L=await Pi(v);return g=((k,A,j)=>{let $=[];for(const P of k)switch(P.job){case"add":let J=[];p(A,j)||P.details.payload.items.map(N=>{if(N.properties&&N.properties._corner_promo_code)j.items.findIndex(Q=>{if(Q.variantId===N.id&&Q.properties._corner_promo_code&&Q.properties._corner_promo_code===N.properties._corner_promo_code)return!0})===-1&&J.push(N);else{let Q=0,Z=0;A&&(A.items.map(U=>{U.variantId===N.id&&(Q+=U.quantity)}),j.items.map(U=>{U.variantId===N.id&&(Z+=U.quantity)}),Q>=Z&&J.push(N))}}),J.length>0&&$.push({job:"add",details:{payload:{items:J}}});break;case"update":let B={};if(P.details.payload.attributes&&Object.entries(P.details.payload.attributes).forEach(([N,Q])=>{Q===null?j.attributes&&j.attributes[N]&&(B.attributes={...B.attributes,[N]:null}):(!j.attributes||j.attributes&&j.attributes[N]!==P.details.payload.attributes[N])&&(B.attributes={...B.attributes,[N]:P.details.payload.attributes[N]})}),P.details.payload.note&&(!j.note||j.note&&j.note!==P.details.payload.note)&&(B.note=P.details.payload.note),P.details.payload.discount){const N=j&&j.allDiscountCodes&&j.allDiscountCodes.map(Q=>Q.code).sort().join(",")||"";P.details.payload.discount!==N&&(B.discount=P.details.payload.discount)}if(P.details.payload.updates){let N=[],Q=k.find(Z=>Z.job==="add");Q&&(N=Q.details.payload.items),Object.entries(P.details.payload.updates).forEach(([Z,U])=>{if(U===0){let re=parseInt(Z.split(":")[0]),Y=j.items.findIndex(M=>{if(M.id===Z)return!0}),q=N.findIndex(M=>{if(M.id===re)return!0});Y!==-1&&q===-1&&(B.updates={...B.updates,[Z]:U})}})}Object.keys(B).length>0&&$.push({job:"update",details:{payload:B,params:P.details.params}})}return $})(g,w,L),g.length>0&&m<x?(m++,console.error(`CornerCart Retry : Retrying jobs (${m})`,g,n),n=[],h(g,m,w,b,x)):(g.length>0&&console.error("CornerCart Retry limit exceeded : Some jobs could not be completed",g,n),L)};return c=u(i,o,s,d,{payload:{},params:[]},t),{updatedCartDetails:await h(c,0,e,r,3),errors:n}},le=({color:t,type:e,className:r})=>{switch(e){case"smiley-rounded-cart":return a("svg",{className:r,style:`fill: ${t};`,viewBox:"0 0 255 255",fill:t,xmlns:"http://www.w3.org/2000/svg",children:a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 13.6395C0 6.10663 6.10501 0 13.6359 0H20.7503C43.4539 0 62.1832 17.02 64.8815 39H215.849C241.649 39 260.387 63.5385 253.6 88.4363L234.404 152.851C231.168 164.72 220.391 172.953 208.092 172.953H61.9448C48.1927 172.953 37.0444 161.802 37.0444 148.047V39H37.0532C34.7667 32.1872 28.3315 27.2791 20.7503 27.2791H13.6359C6.10501 27.2791 0 21.1724 0 13.6395ZM88.1056 255C103.588 255 116.139 242.688 116.139 227.5C116.139 212.312 103.588 200 88.1056 200C72.6231 200 60.072 212.312 60.072 227.5C60.072 242.688 72.6231 255 88.1056 255ZM214.257 227.5C214.257 242.688 201.93 255 186.724 255C171.518 255 159.191 242.688 159.191 227.5C159.191 212.312 171.518 200 186.724 200C201.93 200 214.257 212.312 214.257 227.5ZM87.9883 120.115C118.946 143.929 162.054 143.929 193.012 120.115L178.988 101.885C156.298 119.339 124.702 119.339 102.012 101.885L87.9883 120.115Z"})});case"non-smiley-rounded-cart":return a("svg",{className:r,style:`fill: ${t};`,viewBox:"0 0 255 255",fill:t,xmlns:"http://www.w3.org/2000/svg",children:a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.6359 0C6.10501 0 0 6.10663 0 13.6395C0 21.1724 6.10501 27.2791 13.6359 27.2791H20.7503C28.3315 27.2791 34.7667 32.1872 37.0532 39H37.0444V148.047C37.0444 161.802 48.1927 172.953 61.9448 172.953H208.092C220.391 172.953 231.168 164.72 234.404 152.851L253.6 88.4363C260.387 63.5385 241.649 39 215.849 39H64.8815C62.1832 17.02 43.4539 0 20.7503 0H13.6359ZM116.139 227.5C116.139 242.688 103.588 255 88.1056 255C72.6231 255 60.072 242.688 60.072 227.5C60.072 212.312 72.6231 200 88.1056 200C103.588 200 116.139 212.312 116.139 227.5ZM186.724 255C201.93 255 214.257 242.688 214.257 227.5C214.257 212.312 201.93 200 186.724 200C171.518 200 159.191 212.312 159.191 227.5C159.191 242.688 171.518 255 186.724 255Z"})});case"close-cross":return a("svg",{className:r,style:`fill: ${t};`,fill:t,viewBox:"0 0 348.333 348.334",children:a("g",{children:a("path",{d:`M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
		c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
		c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
		l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
		L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z`})})});case"caret":return a("svg",{className:r,style:`fill: ${t};`,viewBox:"0 0 24 24",fill:t,xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M15 17.898C15 18.972 13.7351 19.546 12.9268 18.8388L6.61617 13.3169C5.81935 12.6197 5.81935 11.3801 6.61617 10.6829L12.9268 5.16108C13.7351 4.45388 15 5.02785 15 6.1018L15 17.898Z"})});case"loader":return a("svg",{className:r,style:`fill: ${t};`,fill:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",children:a("path",{d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"})});case"note":return a("svg",{className:r,style:`fill: ${t};`,fill:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8l8-8V5a2 2 0 0 0-2-2zm-7 16v-7h7l-7 7z"})});case"check":return a("svg",{className:r,style:`fill: ${t};`,fill:t,viewBox:"0 0 236.988 236.988",xmlns:"http://www.w3.org/2000/svg",children:a("polygon",{points:"198.098,24.326 87.543,134.881 38.891,86.229 0,125.121 87.543,212.662 236.988,63.217 "})});case"info":return a("svg",{className:r,style:`fill: ${t};`,fill:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 122.88 122.88",children:a("path",{d:"M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM59.12,36a8,8,0,0,1,.61-3.16,7.82,7.82,0,0,1,1.8-2.63,8.33,8.33,0,0,1,2.62-1.79,8.08,8.08,0,0,1,6.11,0,8.06,8.06,0,0,1,2.58,1.79,7.83,7.83,0,0,1,1.77,2.63A8.38,8.38,0,0,1,75.2,36a8.15,8.15,0,0,1-.59,3.1,8.23,8.23,0,0,1-1.76,2.65,8.15,8.15,0,0,1-2.59,1.82,7.72,7.72,0,0,1-3.05.6,8,8,0,0,1-3.12-.6,7.84,7.84,0,0,1-2.61-1.8,8.07,8.07,0,0,1-1.77-2.64A8.3,8.3,0,0,1,59.12,36Zm3.09,47.8-.17.63-.12.49-.05.34,0,.27a2,2,0,0,0,.09.64v0a1.09,1.09,0,0,0,.23.41.86.86,0,0,0,.35.23,1.55,1.55,0,0,0,.55.09,2.74,2.74,0,0,0,1.46-.63,14.6,14.6,0,0,0,2.15-2.06,36,36,0,0,0,2.57-3.3c.89-1.26,1.82-2.71,2.79-4.33a.37.37,0,0,1,.5-.13l3.28,2.44a.36.36,0,0,1,.09.5,56.84,56.84,0,0,1-4.58,6.87,30.35,30.35,0,0,1-4.73,4.89l0,0a18.55,18.55,0,0,1-4.92,2.92,14.15,14.15,0,0,1-5.19,1,13.63,13.63,0,0,1-4.07-.55,7.92,7.92,0,0,1-3-1.66,7.1,7.1,0,0,1-1.86-2.72,9.92,9.92,0,0,1-.61-3.62c0-.45,0-.92.08-1.42s.14-1,.25-1.58v0c.1-.54.25-1.15.43-1.82s.41-1.43.67-2.26L54.1,61.61l.47-1.67c.12-.47.22-.88.3-1.24a8.43,8.43,0,0,0,.15-.9,5.75,5.75,0,0,0,.06-.77,2.9,2.9,0,0,0-.2-1.09v0a2.49,2.49,0,0,0-.57-.81,2.68,2.68,0,0,0-.94-.55,4.15,4.15,0,0,0-1.28-.19H47.45a.37.37,0,0,1-.37-.36l0-.13,1.22-4.43a.37.37,0,0,1,.36-.27l23.67-.75a.38.38,0,0,1,.38.36l0,.12L62.21,83.78ZM97,25.88a50.31,50.31,0,1,0,14.72,35.56A50.16,50.16,0,0,0,97,25.88Z"})});case"danger-minus":return a("svg",{className:r,style:`fill: ${t};`,fill:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 511.99",children:a("path",{"fill-rule":"nonzero",d:"M256 0c70.68 0 134.69 28.66 181.01 74.98C483.35 121.31 512 185.31 512 255.99c0 70.68-28.66 134.69-74.99 181.02-46.32 46.32-110.33 74.98-181.01 74.98-70.68 0-134.69-28.66-181.02-74.98C28.66 390.68 0 326.67 0 255.99S28.65 121.31 74.99 74.98C121.31 28.66 185.32 0 256 0zm116.73 236.15v39.69c0 9.39-7.72 17.12-17.11 17.12H156.38c-9.39 0-17.11-7.7-17.11-17.12v-39.69c0-9.41 7.69-17.11 17.11-17.11h199.24c9.42 0 17.11 7.76 17.11 17.11zm37.32-134.21c-39.41-39.41-93.89-63.8-154.05-63.8-60.16 0-114.64 24.39-154.05 63.8-39.42 39.42-63.81 93.89-63.81 154.05 0 60.16 24.39 114.64 63.8 154.06 39.42 39.41 93.9 63.8 154.06 63.8s114.64-24.39 154.05-63.8c39.42-39.42 63.81-93.9 63.81-154.06s-24.39-114.63-63.81-154.05z"})});case"gift":return a("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a("path",{fill:`${t}`,d:"M20 13v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16zM14.5 2a3.5 3.5 0 0 1 3.163 5.001L21 7a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1l3.337.001a3.5 3.5 0 0 1 5.664-3.95A3.48 3.48 0 0 1 14.5 2zm-5 2a1.5 1.5 0 0 0-.144 2.993L9.5 7H11V5.5a1.5 1.5 0 0 0-1.356-1.493L9.5 4zm5 0l-.144.007a1.5 1.5 0 0 0-1.35 1.349L13 5.5V7h1.5l.144-.007a1.5 1.5 0 0 0 0-2.986L14.5 4z"})});case"link":return a("svg",{className:r,version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",style:`fill: ${t};`,fill:t,children:a("g",{id:"web-app",stroke:"none","stroke-width":"1","fill-rule":"evenodd",children:a("g",{id:"link-external",children:a("path",{d:"M6,8 C9.33333333,8 11,8 11,8 C11,8 11,8.66666667 11,10 L6,10 L6,18 L14,18 L14,13 L16,13 L16,18 C16,19.1045695 15.1045695,20 14,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,10 C4,8.8954305 4.8954305,8 6,8 Z M16.613961,6 L12,6 L12,4 L20,4 L20,12 L18,12 L18,7.44238816 L12.6642136,12.7781746 L11.25,11.363961 L16.613961,6 Z",id:"Shape"})})})});case"tag":return a("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:a("path",{fill:`${t}`,d:"M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z"})});case"circle-plus":return a("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[a("path",{fill:"none",d:"M0 0h24v24H0z"}),a("path",{fill:`${t}`,d:"M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"})]});case"copy":return a("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M10 8V7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V12C19 12.9428 19 13.4142 18.7071 13.7071C18.4142 14 17.9428 14 17 14H16M7 19H12C12.9428 19 13.4142 19 13.7071 18.7071C14 18.4142 14 17.9428 14 17V12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10H7C6.05719 10 5.58579 10 5.29289 10.2929C5 10.5858 5 11.0572 5 12V17C5 17.9428 5 18.4142 5.29289 18.7071C5.58579 19 6.05719 19 7 19Z",stroke:`${t}`,"stroke-linecap":"round","stroke-linejoin":"round"})});case"plus":return a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:`${t}`,viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:`${r}`,children:a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"})});case"minus":return a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:`${t}`,viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:`${r}`,children:a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 12h14"})});case"freeShipping":return a("svg",{viewBox:"0 0 24 24",className:r,xmlns:"http://www.w3.org/2000/svg",children:a("path",{fill:`${t}`,d:"M21.89,11.55,20.17,8.1A2,2,0,0,0,18.38,7H17V6a2,2,0,0,0-2-2H4A2,2,0,0,0,2,6V16a2,2,0,0,0,2,2H5.18a3,3,0,0,0,5.64,0h2.36a3,3,0,0,0,5.64,0H20a2,2,0,0,0,2-2V12A1,1,0,0,0,21.89,11.55ZM8,18a1,1,0,1,1,1-1A1,1,0,0,1,8,18Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,16,18Zm4-2H18.83s0-.05,0-.08a3.78,3.78,0,0,0-.17-.35l-.11-.21a3.29,3.29,0,0,0-.33-.41.8.8,0,0,0-.13-.13,3.29,3.29,0,0,0-.41-.33l-.21-.11-.35-.17-.08,0V9h1.39L20,12.24Z"})});case"bundle":return a("svg",{className:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a("path",{d:"M17.5777 4.43152L15.5777 3.38197C13.8221 2.46066 12.9443 2 12 2C11.0557 2 10.1779 2.46066 8.42229 3.38197L8.10057 3.5508L17.0236 8.64967L21.0403 6.64132C20.3941 5.90949 19.3515 5.36234 17.5777 4.43152Z",fill:`${t}`}),a("path",{d:"M21.7484 7.96434L17.75 9.96353V13C17.75 13.4142 17.4142 13.75 17 13.75C16.5858 13.75 16.25 13.4142 16.25 13V10.7135L12.75 12.4635V21.904C13.4679 21.7252 14.2848 21.2965 15.5777 20.618L17.5777 19.5685C19.7294 18.4393 20.8052 17.8748 21.4026 16.8603C22 15.8458 22 14.5833 22 12.0585V11.9415C22 10.0489 22 8.86557 21.7484 7.96434Z",fill:`${t}`}),a("path",{d:"M11.25 21.904V12.4635L2.25164 7.96434C2 8.86557 2 10.0489 2 11.9415V12.0585C2 14.5833 2 15.8458 2.5974 16.8603C3.19479 17.8748 4.27062 18.4393 6.42228 19.5685L8.42229 20.618C9.71524 21.2965 10.5321 21.7252 11.25 21.904Z",fill:`${t}`}),a("path",{d:"M2.95969 6.64132L12 11.1615L15.4112 9.4559L6.52456 4.37785L6.42229 4.43152C4.64855 5.36234 3.6059 5.90949 2.95969 6.64132Z",fill:`${t}`})]})}},ka=({productImg:t,productName:e,productPrice:r,productComparePrice:n,variantId:i,productId:o})=>a("div",{id:"corner-sticky_atc-product_info_wrapper",className:"basis-96 grow items-center p-2 corner-product-info-control","data-corner-variant-id":i,"data-corner-product-id":o,children:[a("div",{id:"corner-sticky_atc-product_image_wrapper",className:"corner-product-image-control",children:a("img",{id:"corner-sticky_atc-product_image",src:t,className:"max-h-16 max-w-[4em] rounded-md border-2 border-solid border-satc-img_outline",alt:"product image"})}),a("div",{className:"mx-3",id:"corner-sticky_atc-product_details",children:[a("p",{id:"corner-sticky_atc-product_name",className:"text-satc-card-fg corner-product-name-control text-lg font-bold leading-0",children:_t(e,70)}),a("div",{className:"flex text-base leading-0",children:[n&&a("p",{id:"corner-sticky_atc-product_compare_price",className:"line-through mr-3 text-satc-card-fg corner-product-compare_price-control",children:n}),a("p",{className:" text-satc-card-fg corner-product-price-control",id:"corner-sticky_atc-product_price",children:r})]})]})]}),Sa=({value:t,onChange:e})=>a("div",{id:"corner-sticky_atc-counter_container",className:"text-lg flex-row bg-white md:mx-4 items-center md:rounded corner-quantity-control border border-solid border-gray-300 cursor-pointer",children:[a("button",{id:"corner-sticy_atc-quantity-decrement","aria-label":"quantity-decrement",className:"w-8 text-center rounded-r h-full bg-white text-black",onClick:()=>{t>1&&e(t-1)},children:"-"}),a("input",{className:"w-14 m-0 bg-white py-3 px-0 h-full text-center appearance-none border-x border-solid border-gray-300 focus:appearance-none focus-visible:outline-none focus:shadow-none cursor-pointer",type:"number",id:"corner-sticy_atc-quantity-value",name:"quantity",min:"0",value:t,onChange:r=>e(parseInt(r.target.value))}),a("button",{"aria-label":"quantity-increment",id:"corner-sticy_atc-quantity-increment",className:"w-8 rounded-l text-center h-full bg-white text-black",onClick:()=>{e(t+1)},children:"+"})]}),Ei=[`a[href='https://${window.location.host}cart']`,"a[href$='/cart']","a[data-toggle='mini-cart-info']",".cd-cart-trigger",".minicart-link",".tt-cart .tt-dropdown-toggle",".basket.cart-toggle","a[data-href='/cart']",`a[data-href='https://${window.location.host}/cart']`,".cart-link__bubble",".tt-desctop-parent-cart.tt-parent-box","a[href='/cart']","a[data-node-type='commerce-cart-open-link']","a[data-toggle='mini-cart-desktop-info']","[data-js-cart-drawer=cartDrawerOpen]"],Ia=["/cart/add","/cart/update","/cart/change","/cart/clear","/discount/"],Oi=["form[action='/cart/add'] button[name='add']","form[action$='/cart/add'] button[name='add']","form[action='/cart/add'] button[data-checkout='same']","form[action='/cart/add'] button[type ='submit']","form[action='/cart/add'] input[type ='submit']","form[action='/cart/add'] button[data-add-to-cart]","form[action='/cart/add'] label[role='submit']","form[data-zp-product-url='/cart'] button[type='submit']","form[action ='/cart/add'] a[role='submit']"];function Zr(t,e){for(var r in t)if(r!=="__source"&&!(r in e))return!0;for(var n in e)if(n!=="__source"&&t[n]!==e[n])return!0;return!1}function Li(t,e){this.props=t,this.context=e}function Mi(t,e){function r(i){var o=this.props.ref,s=o==i.ref;return!s&&o&&(o.call?o(null):o.current=null),e?!e(this.props,i)||!s:Zr(this.props,i)}function n(i){return this.shouldComponentUpdate=r,dt(t,i)}return n.displayName="Memo("+(t.displayName||t.name)+")",n.prototype.isReactComponent=!0,n.__f=!0,n.type=t,n}(Li.prototype=new Qe).isPureReactComponent=!0,Li.prototype.shouldComponentUpdate=function(t,e){return Zr(this.props,t)||Zr(this.state,e)};var Di=ge.__b;ge.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Di&&Di(t)};var Ta=ge.__e;ge.__e=function(t,e,r,n){if(t.then){for(var i,o=e;o=o.__;)if((i=o.__c)&&i.__c)return e.__e==null&&(e.__e=r.__e,e.__k=r.__k),i.__c(t,e)}Ta(t,e,r,n)};var Ri=ge.unmount;function ji(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),t.__c.__H=null),(t=(function(n,i){for(var o in i)n[o]=i[o];return n})({},t)).__c!=null&&(t.__c.__P===r&&(t.__c.__P=e),t.__c.__e=!0,t.__c=null),t.__k=t.__k&&t.__k.map(function(n){return ji(n,e,r)})),t}function Bi(t,e,r){return t&&r&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(n){return Bi(n,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=r)),t}function Xr(){this.__u=0,this.o=null,this.__b=null}function qi(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function hr(){this.i=null,this.l=null}ge.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),Ri&&Ri(t)},(Xr.prototype=new Qe).__c=function(t,e){var r=e.__c,n=this;n.o==null&&(n.o=[]),n.o.push(r);var i=qi(n.__v),o=!1,s=function(){o||(o=!0,r.__R=null,i?i(c):c())};r.__R=s;var c=function(){if(!--n.__u){if(n.state.__a){var d=n.state.__a;n.__v.__k[0]=Bi(d,d.__c.__P,d.__c.__O)}var l;for(n.setState({__a:n.__b=null});l=n.o.pop();)l.forceUpdate()}};n.__u++||32&e.__u||n.setState({__a:n.__b=n.__v.__k[0]}),t.then(s,s)},Xr.prototype.componentWillUnmount=function(){this.o=[]},Xr.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=ji(this.__b,r,n.__O=n.__P)}this.__b=null}var i=e.__a&&dt($e,null,t.fallback);return i&&(i.__u&=-33),[dt($e,null,e.__a?null:t.children),i]};var Fi=function(t,e,r){if(++r[1]===r[0]&&t.l.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.l.size))for(r=t.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;t.i=r=r[2]}};function Pa(t){return this.getChildContext=function(){return t.context},t.children}function Na(t){var e=this,r=t.h;if(e.componentWillUnmount=function(){Fr(null,e.v),e.v=null,e.h=null},e.h&&e.h!==r&&e.componentWillUnmount(),!e.v){for(var n=e.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;e.h=r,e.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:n.__m},contains:function(){return!0},insertBefore:function(i,o){this.childNodes.push(i),e.h.insertBefore(i,o)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),e.h.removeChild(i)}}}Fr(dt(Pa,{context:e.context},t.__v),e.v)}function Aa(t,e){var r=dt(Na,{__v:t,h:e});return r.containerInfo=e,r}(hr.prototype=new Qe).__a=function(t){var e=this,r=qi(e.__v),n=e.l.get(t);return n[0]++,function(i){var o=function(){e.props.revealOrder?(n.push(i),Fi(e,t,n)):i()};r?r(o):o()}},hr.prototype.render=function(t){this.i=null,this.l=new Map;var e=ar(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var r=e.length;r--;)this.l.set(e[r],this.i=[1,0,this.i]);return t.children},hr.prototype.componentDidUpdate=hr.prototype.componentDidMount=function(){var t=this;this.l.forEach(function(e,r){Fi(t,r,e)})};var Ea=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Oa=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,La=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ma=/[A-Z0-9]/g,Da=typeof document<"u",Ra=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};Qe.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Qe.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Vi=ge.event;function ja(){}function Ba(){return this.cancelBubble}function qa(){return this.defaultPrevented}ge.event=function(t){return Vi&&(t=Vi(t)),t.persist=ja,t.isPropagationStopped=Ba,t.isDefaultPrevented=qa,t.nativeEvent=t};var Fa={enumerable:!1,configurable:!0,get:function(){return this.class}},Ui=ge.vnode;ge.vnode=function(t){typeof t.type=="string"&&(function(e){var r=e.props,n=e.type,i={},o=n.indexOf("-")===-1;for(var s in r){var c=r[s];if(!(s==="value"&&"defaultValue"in r&&c==null||Da&&s==="children"&&n==="noscript"||s==="class"||s==="className")){var d=s.toLowerCase();s==="defaultValue"&&"value"in r&&r.value==null?s="value":s==="download"&&c===!0?c="":d==="translate"&&c==="no"?c=!1:d[0]==="o"&&d[1]==="n"?d==="ondoubleclick"?s="ondblclick":d!=="onchange"||n!=="input"&&n!=="textarea"||Ra(r.type)?d==="onfocus"?s="onfocusin":d==="onblur"?s="onfocusout":La.test(s)&&(s=d):d=s="oninput":o&&Oa.test(s)?s=s.replace(Ma,"-$&").toLowerCase():c===null&&(c=void 0),d==="oninput"&&i[s=d]&&(s="oninputCapture"),i[s]=c}}n=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=ar(r.children).forEach(function(l){l.props.selected=i.value.indexOf(l.props.value)!=-1})),n=="select"&&i.defaultValue!=null&&(i.value=ar(r.children).forEach(function(l){l.props.selected=i.multiple?i.defaultValue.indexOf(l.props.value)!=-1:i.defaultValue==l.props.value})),r.class&&!r.className?(i.class=r.class,Object.defineProperty(i,"className",Fa)):(r.className&&!r.class||r.class&&r.className)&&(i.class=i.className=r.className),e.props=i})(t),t.$$typeof=Ea,Ui&&Ui(t)};var Hi=ge.__r;ge.__r=function(t){Hi&&Hi(t),t.__c};var zi=ge.diffed;ge.diffed=function(t){zi&&zi(t);var e=t.props,r=t.__e;r!=null&&t.type==="textarea"&&"value"in e&&e.value!==r.value&&(r.value=e.value==null?"":e.value)};const Va=()=>{const{config:t,currentLanguage:e,mobileBreakPoint:r,customProductId:n}=zr(),{cornerCurrencyFormat:i}=t.general_config,{design:o,general:s}=t.cornercart.stickybarConfig,{desktop:c,mobile:d}=o,[l,p]=H(!1),[u,h]=H(""),[g,m]=H(!1),[w,b]=H(""),[x,_]=H(!!window.isPreviewPage),[C,v]=H(1),[L,k]=H(!1),[A,j]=H(!1),[$,P]=H("Sorry! Something happend... Unable to add items to cart"),[J,B]=H(!1),N=ye(null);W(()=>{const f=setTimeout(()=>j(!1),5e3);return()=>{clearTimeout(f)}},[A]),W(()=>{if(window.useSampleData)Q();else{const{productId:f}=(({customProductId:V,currentUrl:te,general:pe})=>{let me="";return V?me=V:window.location.pathname==="/"&&pe.homepageProductObj&&pe.homepageProductObj.id?me=pe.homepageProductObj.id:te.includes("products/")&&(me=corner.sessionData.product.id||window.ShopifyAnalytics.meta.product.id),{productId:me}})({customProductId:n,currentUrl:window.location.href,general:s}),F=window.innerWidth>700?c:d;f?(Z(f),(V=>V?.atcVisibility==="dynamic")(F)?(function(V){if(!V)return;N.current&&N.current.disconnect();const te=document.querySelectorAll(Oi),pe=Array.from(te).filter(ue=>ue.closest("form")?.querySelector('input[name="product-id"]')?.value===V);if(pe.length===0&&te.length>0)pe.push(te[0]),console.log(`ATC Button Mismatch (ID: ${V}). Using fallback. Contact cornercart support if sticky ATC fails.`);else if(pe.length===0&&te.length===0)return p(!0),_(!0),void console.log("No add to cart button found on the page. Showing sticky add to cart bar if behavior not expected contact cornercart support");const me={root:null,rootMargin:"0px",threshold:.5};function ee(ue){ue.forEach(X=>{_(!X.isIntersecting),p(!X.isIntersecting)})}const he=new window.IntersectionObserver(ee,me);pe.forEach(ue=>he.observe(ue)),N.current=he})(String(f)):p(!0)):p(!1)}return()=>{N.current?.disconnect()}},[t]);const Q=async()=>{const f=await Me("sample");h(f);const F=f.variants.filter(V=>V.id.toString()==="40010502668422");if(F.length>0)b(F[0]);else{const V=f.variants[0];b(V)}p(!0)},Z=async f=>{const F=await Me(f);h(F),(F.tags.includes("block-sticky-atc-bar")||document.querySelectorAll("[block-sticky-atc-bar]").length>0)&&(m(!0),console.log("%c Message From corner: Sticky ATC Bar is blocked in this page","border: 2px solid #ff4d73; padding:4px; font-weight:bolder; border-radius:4px : width:100%;"));const V=new URLSearchParams(window.location.search).get("variant");if(V){const te=F.variants.filter(pe=>pe.id.toString()===V);b(te[0])}else F.variants.find(te=>te.available)?b(F.variants.find(te=>te.available)):b(F.variants[0])};W(()=>(window.innerWidth>700?c.scrollDepth==0&&_(!0):d.scrollDepth==0&&_(!0),window.addEventListener("scroll",U,!0),()=>{window.removeEventListener("scroll",U,!0)}),[]);const U=()=>{if(window.isPreviewPage)x!==!0&&_(!0);else{const f=window.hasOwnProperty("pageYOffset")?window.pageYOffset:document.documentElement.scrollTop;window.innerWidth>700?c.scrollDepth==0||f>c.scrollDepth?(_(!0),window.corner&&window.corner.execute&&window.corner.execute("onSatcAppear")):(_(!1),window.corner&&window.corner.execute&&window.corner.execute("onSatcDisappear")):d.scrollDepth==0||f>d.scrollDepth?(_(!0),window.corner&&window.corner.execute&&window.corner.execute("onSatcAppear")):(_(!1),window.corner&&window.corner.execute&&window.corner.execute("onSatcDisappear"))}};W(()=>{const f=setTimeout(()=>{const F=document.getElementById("corner-cowi-cart-button-launcher-wrapper"),V=document.getElementById("corner-cowi-cart-sidetab-launcher-wrapper");F&&(Si("corner-cowi-cart-button-launcher-wrapper","corner-sticky-atc-outer-container")?F&&F.classList.add("nudge-widget"):F&&F.classList.remove("nudge-widget")),V&&(Si("corner-cowi-cart-sidetab-launcher-wrapper","corner-sticky-atc-outer-container")?V&&V.classList.add("nudge-widget"):V&&V.classList.remove("nudge-widget"))},400);return()=>{clearTimeout(f)}},[x]);const re=window.history.replaceState;window.history.replaceState=function(...f){let F,V;try{f[2]!==null&&u&&(V=typeof f[2]=="string"?f[2]:f[2].href?f[2].href:String(f[2]),V.match(/variant=\d*/g)&&(F="?"+V.match(/variant=\d*/g)[0]),Y(F))}catch(te){console.log("Error in url change listener from corner sticky ATC",te)}return re.apply(window.history,f)};const Y=f=>{const F=new URLSearchParams(f);let V;V=F.get("variant")?u.variants.find(te=>parseInt(te.id)===parseInt(F.get("variant"))):u.variants[0],b(V)},q=()=>{let f=[];u.options.map((V,te)=>{f[te]={name:V.name,value:document.getElementById(`corner-sticky-atc-select-${te}`).value}});const F=u.variants.find(V=>JSON.stringify(V.selectedOptions).replace(/ +(?= )/g,"")===JSON.stringify(f));if(F)b(F);else{let V={...u.variants[0],available:!1,availableForSale:!1,selectedOptions:f};b(V)}},M=()=>window.innerWidth<r&&t.general_config.featureFlag.apps.cornercart.stickybar.stickybar_mobile_specific_customisations?d.colors.ctaFgColor:c.colors.ctaFgColor;if(u&&w&&!g)return a("div",{id:"corner-sticky-atc-outer-container",className:"bg-satc-card-bg fixed w-full py-0 corner-bar-position my-satc-card-margin corner-bar-control z-satc-z-index overflow-hidden pointer-events-none transition-all duration-500 corner-bar-position-translate corner-satc-shadow "+(l&&x?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0"),children:a("div",J===!1?{className:"flex flex-wrap	items-center max-w-screen-xl justify-between mx-auto md:px-6 bg-satc-card-bg",id:"corner-sticky-atc-container",children:[a(ka,{productImg:w.image,productName:u.title,productPrice:_e(w.price,i),productComparePrice:w&&w.compareAtPrice&&w.compareAtPrice>0&&w.compareAtPrice>w.price?_e(w.compareAtPrice,i):null,variantId:w.id,productId:u.id}),u.variants.length>1&&a("div",{className:"  grow corner-variant-control justify-center p-2 md:mb-0",id:"corner-sticky-atc-variant_selection",children:(y=u.options,y.map((f,F)=>a("div",{className:" mx-1 grow min-w-[90px] flex flex-col items-stretch border border-solid border-gray-300 rounded relative",children:[a("label",{id:`corner-sticky-atc-select-label-${F}`,className:"absolute top-0 left-0 m-2 text-xs font-bold text-gray-400 corner-variant-label-control",htmlFor:`corner-sticky-atc-select-${F}`,children:f.name}),a("select",{name:f.name,id:`corner-sticky-atc-select-${F}`,onChange:q,className:"w-full text-base border appearance-none corner-variant-label-padding font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:outline-none cursor-pointer",children:[a("option",{value:!0,disabled:!0,children:f.name}),f.values.map(V=>a("option",{selected:V===w.selectedOptions[F].value,children:V}))]})]})))}),a("div",{id:"corner-sticky-atc-cta_section",className:"flex basis-96 grow	flex-row md:mb-0 p-2",children:[a(Sa,{value:C,onChange:f=>v(f)}),a("button",{"aria-label":"sticky-atc-cta",id:"corner-sticky-atc-cta-button",className:`w-full font-bold text-center text-lg flex cursor-pointer py-3 justify-center items-center md:rounded bg-satc-cta_btn-bg text-satc-cta_btn-fg
                  `+(w.available?`corner-cta-animation-${window.innerWidth>r?c.ctaButtonAnimation:d.ctaButtonAnimation}`:"pointer-events-none saturate-0"),onClick:()=>(async()=>{window.corner&&window.corner.execute&&window.corner.execute("onSatcCtaClick");const{ctaOnClick:f}=s;if(f==="CHECKOUT")window.Shopify.routes?window.location.href=`${window.Shopify.routes.root}cart/${w.id}:${C}`:window.location.href=`/cart/${w.id}:${C}`;else{k(!0);const F={productsToAdd:[{productId:u.id,variantId:w.id,quantity:C}]},V=await Ai(F,window.corner.cartInfo,e);window.corner.do("refreshCart"),V&&V.errors.length===0?(k(!1),j(!0),f==="CART_PAGE"&&(window.Shopify.routes?window.location.href=`${window.Shopify.routes.root}cart`:window.location.href="/cart/")):(P(V.errors.join("<br>")),k(!1),B(!0))}})(),children:[L&&a("span",{className:"w-6 h-6 animate-spin mr-2",id:"corner-sticky-atc-cta-button_loader",children:a(le,{color:M(),type:"loader"})}),a("span",A?{id:"corner-sticky-atc-cta_success_container",className:"flex items-center transition-all ease-out duration-1000",children:[a("span",{id:"corner-sticky-atc-cta_success_tick",className:"w-3 h-3 mr-2",children:a(le,{color:M(),type:"check"})}),a("span",{id:"corner-sticky-atc-cta_success_message",children:e.bar_cta_success})]}:{id:"corner-sticky-atc-cta-button-content",className:" ml-2 text-sm",children:[w.available?a("span",{id:"corner-sticky-atc-cta-button-content-main",children:s.ctaOnClick==="CHECKOUT"?e.bar_checkout_cta:e.bar_atc_cta}):a("span",{children:e.bar_cta_sold_out}),a("span",{id:"corner-sticky-atc-cta-button-content-price-info",className:"items-center font-normal justify-center text-sm ml-2 corner-cta-btn-price-control",children:["( ",w.compareAtPrice&&w.compareAtPrice>0&&w.compareAtPrice>w.price?a("span",{id:"corner-sticky-atc-cta-button-content-price-comparte-at-price",className:"corner-cta-btn-compare-at-price-control line-through mr-2",children:_e(w.compareAtPrice,i)}):"",a("span",{id:"corner-sticky-atc-cta-button-content-price-line-item-price",className:"",children:_e(w.price,i)})," )"]})]})]})]})]}:{className:"flex p-10 justify-between items-center text-red-600",children:a("div",{className:"flex justify-between items-center max-w-screen-xl mx-auto md:px-6 bg-satc-card-bg w-full",id:"corner-sticky-atc-container",children:a("div",{id:"corner-sticky-atc-cta_section",className:"flex basis-96 grow flex-row md:mb-0 p-2",children:a("button",{"aria-label":"sticky-atc-cta",id:"corner-sticky-atc-cta-button",className:"w-full font-bold text-center text-lg flex cursor-pointer py-3 justify-center items-center md:rounded bg-satc-cta_btn-bg text-satc-cta_btn-fg pointer-events-none saturate-0",children:a("span",{id:"corner-sticky-atc-cta-button-content",className:"ml-2 text-sm",children:a("span",{id:"corner-sticky-atc-cta-button-content-main",children:$})})})})})})});var y},Ua=()=>{const{config:t}=zr();return t&&t.cornercart.stickybarConfig&&a("div",{translate:"no",className:" widgets-by-corner sticky-bar notranslate",children:[t.cornercart.stickybarConfig.general.customJs&&a("script",{dangerouslySetInnerHTML:{__html:`try { ${t.cornercart.stickybarConfig.general.customJs} } catch(e) { console.error("Error in CornerCart's custom JavaScript. Please check your code under 'Add to cart bar > Advanced settings > Add custom JavaScript' in the CornerCart app",e); }`}}),a(wa,{}),a(Va,{})]})};var Kr={};(function t(e,r,n,i){var o=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),s=typeof Path2D=="function"&&typeof DOMMatrix=="function",c=(function(){if(!e.OffscreenCanvas)return!1;var y=new OffscreenCanvas(1,1),f=y.getContext("2d");f.fillRect(0,0,1,1);var F=y.transferToImageBitmap();try{f.createPattern(F,"no-repeat")}catch{return!1}return!0})();function d(){}function l(y){var f=r.exports.Promise,F=f!==void 0?f:e.Promise;return typeof F=="function"?new F(y):(y(d,d),null)}var p,u,h,g,m,w,b,x,_,C,v,L=(p=c,u=new Map,{transform:function(y){if(p)return y;if(u.has(y))return u.get(y);var f=new OffscreenCanvas(y.width,y.height);return f.getContext("2d").drawImage(y,0,0),u.set(y,f),f},clear:function(){u.clear()}}),k=(m=Math.floor(1e3/60),w={},b=0,typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(h=function(y){var f=Math.random();return w[f]=requestAnimationFrame(function F(V){b===V||b+m-1<V?(b=V,delete w[f],y()):w[f]=requestAnimationFrame(F)}),f},g=function(y){w[y]&&cancelAnimationFrame(w[y])}):(h=function(y){return setTimeout(y,m)},g=function(y){return clearTimeout(y)}),{frame:h,cancel:g}),A=(C={},function(){if(x)return x;if(!n&&o){var y=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{x=new Worker(URL.createObjectURL(new Blob([y])))}catch(f){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",f),null}(function(f){function F(V,te){f.postMessage({options:V||{},callback:te})}f.init=function(V){var te=V.transferControlToOffscreen();f.postMessage({canvas:te},[te])},f.fire=function(V,te,pe){if(_)return F(V,null),_;var me=Math.random().toString(36).slice(2);return _=l(function(ee){function he(ue){ue.data.callback===me&&(delete C[me],f.removeEventListener("message",he),_=null,L.clear(),pe(),ee())}f.addEventListener("message",he),F(V,me),C[me]=he.bind(null,{data:{callback:me}})})},f.reset=function(){for(var V in f.postMessage({reset:!0}),C)C[V](),delete C[V]}})(x)}return x}),j={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function $(y,f,F){return(function(V,te){return te?te(V):V})(y&&y[f]!=null?y[f]:j[f],F)}function P(y){return y<0?0:Math.floor(y)}function J(y,f){return Math.floor(Math.random()*(f-y))+y}function B(y){return parseInt(y,16)}function N(y){return y.map(Q)}function Q(y){var f=String(y).replace(/[^0-9a-f]/gi,"");return f.length<6&&(f=f[0]+f[0]+f[1]+f[1]+f[2]+f[2]),{r:B(f.substring(0,2)),g:B(f.substring(2,4)),b:B(f.substring(4,6))}}function Z(y){y.width=document.documentElement.clientWidth,y.height=document.documentElement.clientHeight}function U(y){var f=y.getBoundingClientRect();y.width=f.width,y.height=f.height}function re(y){var f=y.angle*(Math.PI/180),F=y.spread*(Math.PI/180);return{x:y.x,y:y.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*y.startVelocity+Math.random()*y.startVelocity,angle2D:-f+(.5*F-Math.random()*F),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:y.color,shape:y.shape,tick:0,totalTicks:y.ticks,decay:y.decay,drift:y.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*y.gravity,ovalScalar:.6,scalar:y.scalar,flat:y.flat}}function Y(y,f){f.x+=Math.cos(f.angle2D)*f.velocity+f.drift,f.y+=Math.sin(f.angle2D)*f.velocity+f.gravity,f.velocity*=f.decay,f.flat?(f.wobble=0,f.wobbleX=f.x+10*f.scalar,f.wobbleY=f.y+10*f.scalar,f.tiltSin=0,f.tiltCos=0,f.random=1):(f.wobble+=f.wobbleSpeed,f.wobbleX=f.x+10*f.scalar*Math.cos(f.wobble),f.wobbleY=f.y+10*f.scalar*Math.sin(f.wobble),f.tiltAngle+=.1,f.tiltSin=Math.sin(f.tiltAngle),f.tiltCos=Math.cos(f.tiltAngle),f.random=Math.random()+2);var F=f.tick++/f.totalTicks,V=f.x+f.random*f.tiltCos,te=f.y+f.random*f.tiltSin,pe=f.wobbleX+f.random*f.tiltCos,me=f.wobbleY+f.random*f.tiltSin;if(y.fillStyle="rgba("+f.color.r+", "+f.color.g+", "+f.color.b+", "+(1-F)+")",y.beginPath(),s&&f.shape.type==="path"&&typeof f.shape.path=="string"&&Array.isArray(f.shape.matrix))y.fill((function(S,R,O,z,G,K,ie){var ve=new Path2D(S),se=new Path2D;se.addPath(ve,new DOMMatrix(R));var oe=new Path2D;return oe.addPath(se,new DOMMatrix([Math.cos(ie)*G,Math.sin(ie)*G,-Math.sin(ie)*K,Math.cos(ie)*K,O,z])),oe})(f.shape.path,f.shape.matrix,f.x,f.y,.1*Math.abs(pe-V),.1*Math.abs(me-te),Math.PI/10*f.wobble));else if(f.shape.type==="bitmap"){var ee=Math.PI/10*f.wobble,he=.1*Math.abs(pe-V),ue=.1*Math.abs(me-te),X=f.shape.bitmap.width*f.scalar,ae=f.shape.bitmap.height*f.scalar,de=new DOMMatrix([Math.cos(ee)*he,Math.sin(ee)*he,-Math.sin(ee)*ue,Math.cos(ee)*ue,f.x,f.y]);de.multiplySelf(new DOMMatrix(f.shape.matrix));var ce=y.createPattern(L.transform(f.shape.bitmap),"no-repeat");ce.setTransform(de),y.globalAlpha=1-F,y.fillStyle=ce,y.fillRect(f.x-X/2,f.y-ae/2,X,ae),y.globalAlpha=1}else if(f.shape==="circle")y.ellipse?y.ellipse(f.x,f.y,Math.abs(pe-V)*f.ovalScalar,Math.abs(me-te)*f.ovalScalar,Math.PI/10*f.wobble,0,2*Math.PI):(function(S,R,O,z,G,K,ie,ve,se){S.save(),S.translate(R,O),S.rotate(K),S.scale(z,G),S.arc(0,0,1,ie,ve,se),S.restore()})(y,f.x,f.y,Math.abs(pe-V)*f.ovalScalar,Math.abs(me-te)*f.ovalScalar,Math.PI/10*f.wobble,0,2*Math.PI);else if(f.shape==="star")for(var fe=Math.PI/2*3,We=4*f.scalar,ne=8*f.scalar,E=f.x,I=f.y,D=5,T=Math.PI/D;D--;)E=f.x+Math.cos(fe)*ne,I=f.y+Math.sin(fe)*ne,y.lineTo(E,I),fe+=T,E=f.x+Math.cos(fe)*We,I=f.y+Math.sin(fe)*We,y.lineTo(E,I),fe+=T;else y.moveTo(Math.floor(f.x),Math.floor(f.y)),y.lineTo(Math.floor(f.wobbleX),Math.floor(te)),y.lineTo(Math.floor(pe),Math.floor(me)),y.lineTo(Math.floor(V),Math.floor(f.wobbleY));return y.closePath(),y.fill(),f.tick<f.totalTicks}function q(y,f){var F,V=!y,te=!!$(f||{},"resize"),pe=!1,me=$(f,"disableForReducedMotion",Boolean),ee=o&&$(f||{},"useWorker")?A():null,he=V?Z:U,ue=!(!y||!ee)&&!!y.__confetti_initialized,X=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches;function ae(ce,fe,We){for(var ne=$(ce,"particleCount",P),E=$(ce,"angle",Number),I=$(ce,"spread",Number),D=$(ce,"startVelocity",Number),T=$(ce,"decay",Number),S=$(ce,"gravity",Number),R=$(ce,"drift",Number),O=$(ce,"colors",N),z=$(ce,"ticks",Number),G=$(ce,"shapes"),K=$(ce,"scalar"),ie=!!$(ce,"flat"),ve=(function(Ue){var tt=$(Ue,"origin",Object);return tt.x=$(tt,"x",Number),tt.y=$(tt,"y",Number),tt})(ce),se=ne,oe=[],Se=y.width*ve.x,Ee=y.height*ve.y;se--;)oe.push(re({x:Se,y:Ee,angle:E,spread:I,startVelocity:D,color:O[se%O.length],shape:G[J(0,G.length)],ticks:z,decay:T,gravity:S,drift:R,scalar:K,flat:ie}));return F?F.addFettis(oe):(F=(function(Ue,tt,rr,Ge,Nl){var nr,Ar,Er=tt.slice(),zn=Ue.getContext("2d"),sa=l(function(Wn){function ca(){nr=Ar=null,zn.clearRect(0,0,Ge.width,Ge.height),L.clear(),Nl(),Wn()}nr=k.frame(function Al(){!n||Ge.width===i.width&&Ge.height===i.height||(Ge.width=Ue.width=i.width,Ge.height=Ue.height=i.height),Ge.width||Ge.height||(rr(Ue),Ge.width=Ue.width,Ge.height=Ue.height),zn.clearRect(0,0,Ge.width,Ge.height),(Er=Er.filter(function(El){return Y(zn,El)})).length?nr=k.frame(Al):ca()}),Ar=ca});return{addFettis:function(Wn){return Er=Er.concat(Wn),sa},canvas:Ue,promise:sa,reset:function(){nr&&k.cancel(nr),Ar&&Ar()}}})(y,oe,he,fe,We),F.promise)}function de(ce){var fe=me||$(ce,"disableForReducedMotion",Boolean),We=$(ce,"zIndex",Number);if(fe&&X)return l(function(D){D()});V&&F?y=F.canvas:V&&!y&&(y=(function(D){var T=document.createElement("canvas");return T.style.position="fixed",T.style.top="0px",T.style.left="0px",T.style.pointerEvents="none",T.style.zIndex=D,T})(We),document.body.appendChild(y)),te&&!ue&&he(y);var ne={width:y.width,height:y.height};function E(){if(ee){var D={getBoundingClientRect:function(){if(!V)return y.getBoundingClientRect()}};return he(D),void ee.postMessage({resize:{width:D.width,height:D.height}})}ne.width=ne.height=null}function I(){F=null,te&&(pe=!1,e.removeEventListener("resize",E)),V&&y&&(document.body.contains(y)&&document.body.removeChild(y),y=null,ue=!1)}return ee&&!ue&&ee.init(y),ue=!0,ee&&(y.__confetti_initialized=!0),te&&!pe&&(pe=!0,e.addEventListener("resize",E,!1)),ee?ee.fire(ce,ne,I):ae(ce,ne,I)}return de.reset=function(){ee&&ee.reset(),F&&F.reset()},de}function M(){return v||(v=q(null,{useWorker:!0,resize:!0})),v}r.exports=function(){return M().apply(this,arguments)},r.exports.reset=function(){M().reset()},r.exports.create=q,r.exports.shapeFromPath=function(y){if(!s)throw new Error("path confetti are not supported in this browser");var f,F;typeof y=="string"?f=y:(f=y.path,F=y.matrix);var V=new Path2D(f),te=document.createElement("canvas").getContext("2d");if(!F){for(var pe,me,ee=1e3,he=ee,ue=ee,X=0,ae=0,de=0;de<ee;de+=2)for(var ce=0;ce<ee;ce+=2)te.isPointInPath(V,de,ce,"nonzero")&&(he=Math.min(he,de),ue=Math.min(ue,ce),X=Math.max(X,de),ae=Math.max(ae,ce));pe=X-he,me=ae-ue;var fe=Math.min(10/pe,10/me);F=[fe,0,0,fe,-Math.round(pe/2+he)*fe,-Math.round(me/2+ue)*fe]}return{type:"path",path:f,matrix:F}},r.exports.shapeFromText=function(y){var f,F=1,V="#000000",te='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof y=="string"?f=y:(f=y.text,F="scalar"in y?y.scalar:F,te="fontFamily"in y?y.fontFamily:te,V="color"in y?y.color:V);var pe=10*F,me=pe+"px "+te,ee=new OffscreenCanvas(pe,pe),he=ee.getContext("2d");he.font=me;var ue=he.measureText(f),X=Math.ceil(ue.actualBoundingBoxRight+ue.actualBoundingBoxLeft),ae=Math.ceil(ue.actualBoundingBoxAscent+ue.actualBoundingBoxDescent),de=ue.actualBoundingBoxLeft+2,ce=ue.actualBoundingBoxAscent+2;X+=4,ae+=4,(he=(ee=new OffscreenCanvas(X,ae)).getContext("2d")).font=me,he.fillStyle=V,he.fillText(f,de,ce);var fe=1/F;return{type:"bitmap",bitmap:ee.transferToImageBitmap(),matrix:[fe,0,0,fe,-X*fe/2,-ae*fe/2]}}})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Kr,!1);const Ha=Kr.exports;Kr.exports.create;let en=window.Shopify&&window.Shopify.currency&&window.Shopify.currency.rate?window.Shopify.currency.rate:1,gr=[];const Wi=()=>{gr.forEach(({element:t,handler:e,options:r})=>{t.removeEventListener("click",e,r)}),gr=[]},za=(t,e,r,n)=>{Wi();const i=t.cornercart.cartConfig.general?.customThemeAtcButtonSelectors||[],o=document.querySelectorAll(Oi.join(",")),s=new Set,c=(d,l)=>{e(),d.preventDefault(),d.stopImmediatePropagation(),t.cornercart.cartConfig.general.cartOpenOnAddition&&window.corner.do("openCart"),(p=>{try{const u=new XMLHttpRequest;u.open("POST",window.Shopify.routes.root+"cart/add.js",!1),u.setRequestHeader("x-requested-with","XMLHttpRequest"),u.onload=()=>r(),u.onreadystatechange=({currentTarget:h})=>{if(h){if(h.status===200)Ct();else if(h.status===422){const g=JSON.parse(h.response);n(g)}}else Ct()},u.send(p)}catch(u){console.error("Caught error in sendCartRequest add.js call",u)}})(window.cornerSelectedBundleProducts?.length>0?(()=>{const p=new FormData;return window.cornerSelectedBundleProducts.forEach((u,h)=>{p.append(`items[${h}][id]`,u.id),p.append(`items[${h}][quantity]`,u.quantity)}),p})():l)};if(o.forEach(d=>{const l=p=>{const u=d.closest("form[action$='/cart/add']");if(u){const h=new FormData(u);h.set("sections","header"),h.has("id")&&(s.add(d),c(p,h))}};d.addEventListener("click",l),gr.push({element:d,handler:l,options:void 0})}),i.length>0){const d=document.querySelectorAll(i.join(","));Array.from(d).filter(l=>!s.has(l)).forEach(l=>{const p=u=>{window.cornerSelectedBundleProducts?.length>0&&c(u,null)};l.addEventListener("click",p,!0),gr.push({element:l,handler:p,options:!0})})}return Wi},je=t=>{let e=0,r=[],n=0,i=0,o=0;t.items.map(h=>{h.cost.subtotalAmount===0?e+=h.quantity:h.properties&&h.properties._corner_promo_code&&h.properties._corner_promo_code.slice(0,4)==="GIFT"?(e+=h.quantity,n+=h.cost.subtotalAmount,r.push(h.id)):h.properties&&h.properties._corner_promo_code&&h.properties._corner_promo_code.slice(0,4)==="BXGY"?(e+=h.quantity,r.push(h.id)):h.tags&&h.tags.includes("corner-cart-goal-exclude")&&(i+=h.cost.totalAmount,o+=h.quantity)}),n/=en;let s=0;t.items.map(h=>{s+=h.cost.subtotalAmount}),s/=en;const c=t.items.filter(h=>!r.includes(h.id)),d=Yr(c).productArray,l=Yr(c).variantArray,p=Yr(c).collectionArray,u=t.externalDiscounts||0;return{totalOrderValue:(s-n-i-u)/100,cartItemCount:t.itemCount-e-o,cartAttributes:t.attributes,productArray:d,variantArray:l,collectionArray:p}},Gi=(t,e,r)=>{let n=[],i={};Object.keys(e.attributes).forEach(c=>{t.attributes.hasOwnProperty(c)||(i[c]=e.attributes[c])}),Object.keys(i).length>0&&(Object.keys(i).length!==1||!i.hasOwnProperty("_corner_external_discounts"))&&n.push({eventType:"CART_ATTRIBUTES_EDIT"});let o={},s={};t.items.forEach(c=>{let{quantity:d,id:l,discounts:p,properties:u,sellingPlanAllocation:h,...g}=c;const m=c.variantId.toString();o[m]?o[m].quantity+=d:o[m]={quantity:d,itemDetails:g}}),e.items.forEach(c=>{let{quantity:d,id:l,discounts:p,properties:u,sellingPlanAllocation:h,...g}=c;const m=c.variantId.toString();s[m]?s[m].quantity+=d:s[m]={quantity:d,itemDetails:g}});for(const c in o){const d=o[c].quantity,l=s[c]?s[c].quantity:0,p=o[c].itemDetails;l>d?n.push({eventType:"QTY_INCREASED",eventDetails:{variantId:c,itemDetails:p,qtyAdded:l-d}}):l<d&&l!==0?n.push({eventType:"QTY_DECREASED",eventDetails:{variantId:c,itemDetails:p,qtyDecreased:d-l}}):l===0&&n.push({eventType:"ITEM_DELETED",eventDetails:{variantId:c,itemDetails:p,qtyDecreased:d}})}for(const c in s)o[c]||n.push({eventType:"ITEM_ADDED",eventDetails:{variantId:c,qtyAdded:s[c].quantity}});return r.length>0&&Wa(r).forEach(({rewardId:c,multiplier:d,prerequisites:l})=>{tn(r,c,d)&&(Ne.apply(l,je(e))||n.push({eventType:"REWARD_LOCKED",eventDetails:{rewardId:c,multiplier:d,prerequisites:l}}))}),n.length>0&&(n.length!==1||n[0].eventType!=="CORNER_LOADED")&&window.corner&&window.corner.execute&&window.corner.execute("onCartEdit",{cartEdits:n,cartDetails:e}),n.length>5&&console.warn("CORNERCART WARNING: The number of logs added is greater than 5. This may cause performance issues"),n},Wa=t=>{const e=new Map;return t.forEach(({eventType:r,eventDetails:n})=>{if(r==="REWARD_UNLOCKED"||r==="REWARD_LOCKED"){const i=`${n.rewardId}-${n.multiplier}`;e.has(i)||e.set(i,{rewardId:n.rewardId,multiplier:n.multiplier,prerequisites:n.prerequisites})}}),Array.from(e.values())},Qi=t=>{let e=0;return t.items.map(r=>{r.discounts&&r.discounts.length>0&&r.discounts.forEach(n=>{n.title[0]!==":"&&(e+=n.amount)})}),parseInt(e/en)},tn=(t,e,r)=>{let n;return t.forEach(i=>{i.eventType!=="REWARD_UNLOCKED"&&i.eventType!=="REWARD_LOCKED"||i.eventDetails.rewardId!==e||i.eventDetails.multiplier!==r||(n=i)}),!(!n||n.eventType!=="REWARD_UNLOCKED")},Yi=async t=>{let e=[],r=[];const n=await Promise.all(t.map(async i=>{if(i.type==="freeProduct"){const o=await Me(Te(i.target.id));return{reward:i,isRewardAvailable:!!o&&o.available}}if(i.type==="freeProductVariant"){const o=await Me(i.target.product_id);if(!o)return{reward:i,isRewardAvailable:!1};const s=o.variants.find(c=>c.id===parseInt(Te(i.target.id)));return{reward:i,isRewardAvailable:s&&s.available}}return{reward:i,isRewardAvailable:!0}}));return e=n.filter(i=>i.isRewardAvailable).map(i=>i.reward),r=n.filter(i=>!i.isRewardAvailable).map(i=>i.reward),r.length>0&&console.log("Corner Warning: The following rewards are out of stock or unavailable and have been removed from the reward stack",r),e};!(window.Shopify&&window.Shopify.currency&&window.Shopify.currency.rate)||window.Shopify.currency.rate;const Ji=(t,e)=>{let r=[];if(t&&t.length>0){let n=t.filter(i=>i.type===e);n.length>0&&(r=[...n.sort(({priority:o},{priority:s})=>o-s)])}return r},Zi=Dt(""),Ga=t=>{const[e,r]=H(),[n,i]=H(),[o,s]=H([]),[c,d]=H("en");Ne.add_operation("everyone",_=>_),Ne.add_operation("startsWith",(_,C)=>C.startsWith(_)),Ne.add_operation("endsWith",(_,C)=>C.endsWith(_)),Ne.add_operation("not-in",(_,C)=>{let v=_;return!(C||[]).includes(v)});const l=e?e.general_config.defaultLanguage:"en",p={cart_context_title:"Cart",widget_close_text:"Close",optional_note_btn_text:"Add Optional Note",optional_note_title:"Optional Note",optional_note_cta:"Add Note",optional_note_cancel:"Cancel",total_text:"Total",cart_list_cta:"Checkout",related_items_title:"You may also like...",related_items_cta:"Add",cart_empty_state:"No items in the cart",cart_list_continue_shopping:"Continue Shopping",shipping_text:"Shipping",free_text:"Free",sold_out:"Sold Out",add_item:"Add item",discount_text:"Discount",discount_box_place_holder:"Apply Discount Code",discount_box_cta:"Apply",reward_overlay_title:"Free gifts Unlocked",reward_overlay_sub_text:" Choose any {{gift_count}} free gifts",reward_overlay_cta_text:"Add Free Gifts",subtotal_text:"Subtotal",reward_overlay_cancel_text:"Cancel",offers_context_title:"Offers",view_product_in_store:"View in store",offer_card_cta_achieved:"Select Gifts",offer_card_cta_unachieved:"Show Gifts",offer_card_achieved_tag:"Unlocked",non_applicable_discount_code_warning:"This coupon is not applicable to any of the products in the cart",estimated_tax:"Estimated tax",rewards_checkout_reminder_title:"Don't forget your Free Gifts!",rewards_checkout_reminder_description:"You're eligible for one or more free gifts with this purchase. Please add them to your cart before checkout.",rewards_checkout_reminder_primary_cta_btn:"Claim Your Free Gift",rewards_checkout_reminder_secondary_cta_btn:"No Thanks",offer_card_cta_multiple_gift_expand:"Show unlocked gifts",offer_card_cta_multiple_gift_collapse:"Hide",offer_card_cta_multiple_gift_title:"Gift {{number}}",offer_card_achieved_and_selected_tag:"Added to cart",other_checkouts_cta:"Other Checkouts",bundle_edit_popup_primary_cta:"Edit Bundle",bundle_edit_popup_secondary_cta:"Cancel",bundle_view_content_btn:"View Bundle",one_time_purchase_plan_title:"One time purchase",subscription_upgrade_cta:"Upgrade to subscription",parcelis_upsell_cta:"Shipping Insurance",parcelis_description_text:"Insurance if your package is damaged, lost, or stolen by porch pirates. Get a refund or replacement in just a few clicks.",parcelis_modal_title:"Parcelis Benefits",parcelis_modal_column_header_1:"BENEFITS",parcelis_modal_column_header_2:"WITH COVERAGE",parcelis_modal_column_header_3:"WITHOUT COVERAGE",parcelis_modal_row_1_column_1:"Package Protection by  Parcelis",parcelis_modal_row_2_column_1:"Damage, loss, theft coverage",parcelis_modal_row_3_column_1:"24/7 Priority support",parcelis_modal_row_4_column_1:"Fast refund or replacement"},u={},h={},g=(_,C,v=!0)=>{let L;switch(C){case"cart":default:L=p;break;case"offers":L=u;break;case"support":L=h}return _.hasOwnProperty(c)&&v?{...L,..._[c]}:{...L,..._[l]}},m=async(_,C)=>{let v,L=null,k=[],A=[],j=[],$=[],P=[],J=[],B=[],N=window.enableCornerTestCampaigns;window.corner&&window.corner.sessionData?v=_.filter(Y=>{let q=!0;const M=Ne.apply(Y.audience,C);let y=Y.status==="active"||window.Shopify.theme.role==="unpublished"&&Y.status==="test"&&N;if(Y.schedule&&Object.keys(Y.schedule).includes("startsAt")&&Object.keys(Y.schedule).includes("endsAt")){const f=new Date().getTime(),F=Y.schedule.startsAt?new Date(Y.schedule.startsAt).getTime():null,V=Y.schedule.endsAt?new Date(Y.schedule.endsAt).getTime():null;F&&f<F&&(q=!1),V&&f>V&&(q=!1)}return M&&y&&q}):v=_.filter(Y=>Y.status==="active"||window.Shopify.theme.role==="unpublished"&&Y.status==="test"&&N),L=(Y=>{let q;if(Y&&Y.length>0){let M=Y.filter(y=>y.type==="goal_meter_in_cart");M.length>0&&(q=M.reduce((y,f)=>y.priority<f.priority?f:y))}return q})(v),k=(Y=>{let q=[];if(Y&&Y.length>0){let M=Y.filter(y=>y.type==="one_click_upsell");M.length>0&&(q=[...M.sort(({priority:f},{priority:F})=>f-F)])}return q})(v),P=Ji(v,"bxgy_free"),J=Ji(v,"volume_bundle");let Q=v&&v.filter(Y=>Y.type==="discount_code");Q&&Q.length>0&&(j=Q.sort(({priority:q},{priority:M})=>M-q).map(q=>{let M,y=q.content.findIndex(f=>f.lang===c);return M=y>-1?q.content[y]:q.content[0],{...q,content:M.value}}));let Z=v&&v.filter(Y=>Y.type==="cart_announcement");Z&&Z.length>0&&(A=Z.sort(({priority:q},{priority:M})=>M-q));const U=v&&v.filter(Y=>Y.type==="cart_timer");U&&U.length>0&&($=U.sort(({priority:q},{priority:M})=>M-q));let re=v&&v.filter(Y=>Y.type==="line_item_messages");return re&&re.length&&(B=re.sort(({priority:q},{priority:M})=>M-q)),L&&(L=await(async Y=>{let q=[];return await Promise.all(Y.milestones.map(async(M,y)=>{const f=await Yi(M.rewards.rewardStack);f.length>0&&(q[y]={...M,rewards:{...M.rewards,rewardStack:f}})})),q=q.filter(M=>M!==void 0),q.length===0?null:{...Y,milestones:q}})(L)),P.length>0&&(P=(await(async q=>{const M=[];return await Promise.all(q.map(async y=>{const f=await Yi(y.config.rewards.rewardStack);f.length>0&&M.push({...y,config:{...y.config,rewards:{...y.config.rewards,rewardStack:f}}})})),M})(P)).filter(q=>{const M=q?.config?.rewards?.rewardStack||[],y=q?.config?.rewards?.stackSelectCount||1,f=M.length>=y;return f||console.log(`Disabled BXGY campaign due to out of stock products: ${q?.settings?.title||"Unknown Campaign"} (id: ${q?.campaignid})`),f})),{cartGoalCampaign:L,oneClickCampaigns:k,cartAnnouncements:A,discountCodes:j,cartTimers:$,bxgyCampaigns:P,volumeBundleCampaigns:J,lineItemMessageCampaigns:B}},w={config:e,automations:o,campaigns:n,cartStyle:["/cart","/cart/",`${window.Shopify.routes.root}cart`,`${window.Shopify.routes.root}cart/`].includes(window.location.pathname)?"page":e&&e.cornercart&&e.cornercart.cartConfig.general.cartStyle?e.cornercart.cartConfig.general.cartStyle:"widget",currentLanguage:{cart:e&&e.cornercart&&g(e.cornercart.langConfig.cornerCartWidget,"cart",e.general_config.featureFlag.apps.cornercart.multi_language_support),reward:e&&e.rewardscorner&&g(e.rewardscorner.langConfig.cornerCartWidget,"reward"),support:e&&e.supportcorner&&g(e.supportcorner.langConfig.cornerCartWidget,"support")},currentLanguageCode:c},b=e&&e.cornercart&&e.cornercart.cartConfig.general.headerElementsToRefreshOnCartUpdate?e.cornercart.cartConfig.general.headerElementsToRefreshOnCartUpdate:[];window.headerElementsToRefreshOnCartUpdate=[...b,...Ei],W(()=>((async()=>{if(window.isPreviewPage){if(window.previewValues){const _=window.previewValues.sampleCampaigns.find(k=>k.type==="goal_meter_in_cart"),C=window.previewValues.sampleCampaigns.filter(k=>k.type==="cart_announcement"),v=window.previewValues.sampleCampaigns.filter(k=>k.type==="one_click_upsell"),L=window.previewValues.sampleCampaigns.filter(k=>k.type==="line_item_messaging")||[];i({cartGoalCampaign:_||null,oneClickCampaigns:v||[],cartAnnouncements:C||[],cartTimers:[],bxgyCampaigns:[],volumeBundleCampaigns:[],lineItemMessageCampaigns:L})}}else{const _=window.cornerRenderConfig,C=await(async()=>{let $={};if(localStorage.getItem("corner-device-details"))$=JSON.parse(localStorage.getItem("corner-device-details"));else{const Y=new AbortController,q=setTimeout(()=>Y.abort(),1e3);try{const M=await fetch("https://abt.usecorner.io/",{signal:Y.signal});clearTimeout(q),M.ok?($=await M.json(),localStorage.setItem("corner-device-details",JSON.stringify($))):console.warn("Cornercart abt.usecorner.io responded with error:",M.status)}catch(M){console.error("Cornercart Failed to fetch from abt.usecorner.io:",M)}}let P=null;if($.userAgent){let Y=$.userAgent;P=Y.includes("Macintosh")?"macOS":Y.includes("Android")?"Android":Y.includes("iPhone")?"iOS":Y.includes("Linux")?"Linux":"Unknown"}const J=(Y,q)=>{const M=(q.startsWith("?")?q.substring(1):q).split("&"),y=Y+"=",f=M.find(F=>F.startsWith(y));return f?f.substring(y.length):null},B=window.location.href;let N=sessionStorage.getItem("corner-utmCampaign")||null,Q=sessionStorage.getItem("corner-utmMedium")||null,Z=sessionStorage.getItem("corner-utmSource")||null;const U=window.location.search.toLowerCase();if(U){const Y=J("utm_campaign",U);Y&&(N=Y,sessionStorage.setItem("corner-utmCampaign",N));const q=J("utm_medium",U);q&&(Q=q,sessionStorage.setItem("corner-utmMedium",Q));const M=J("utm_source",U);M&&(Z=M,sessionStorage.setItem("corner-utmSource",Z))}let re=localStorage.getItem("corner-session-count");return re?sessionStorage.getItem("corner-is-session-active")||(localStorage.setItem("corner-session-count",parseInt(re)+1),sessionStorage.setItem("corner-is-session-active",!0),re=parseInt(re)+1):(localStorage.setItem("corner-session-count",1),sessionStorage.setItem("corner-is-session-active",!0),re=1),{country:$.country||null,os:P,currentUrl:B,utmCampaign:N,utmMedium:Q,utmSource:Z,sessionCount:parseInt(re)}})();let v=window.corner&&window.corner.sessionData&&window.corner.sessionData.customer,L={...C,isLoggedIn:!!v,firstName:v?v.firstName.toLowerCase():null,lastName:v?v.lastName.toLowerCase():null,orderCount:v?parseInt(v.orderCount):null,totalSpent:v?parseInt(v.totalSpent):null,tags:v?v.tags.map($=>$.toLowerCase()):null,customerId:v?v.id:null,lastOrder:v?v.lastOrder:null,locale:window.Shopify.locale.toLowerCase(),market:window.corner&&window.corner.sessionData?window.corner.sessionData.market:null};const k=_.json_build_object,A=_.campaigns,j=_.automations;if(d(window.Shopify.locale),r(k),j&&j.length>0){let $=((P,J)=>window.corner&&window.corner.sessionData?P.filter(B=>{const N=Ne.apply(B.audience,J),Q=B.status==="active"||window.Shopify.theme.role==="unpublished"&&B.status==="test";return!(!N||!Q||B.trigger!=="cartUpdate"||B.isDeleted)}):P.filter(B=>(B.status==="active"||window.Shopify.theme.role==="unpublished"&&B.status==="test")&&B.trigger==="cartUpdate"&&!B.isDeleted))(j,L);s($)}if(k&&k.general_config.featureFlag.apps.cornercart.campaigns&&A&&A.length>0&&C){let $=await m(A,L);i($)}else i({cartGoalCampaign:null,oneClickCampaigns:[],cartAnnouncements:[],cartTimers:[],bxgyCampaigns:[],volumeBundleCampaigns:[],lineItemMessageCampaigns:[]})}})(),()=>{}),[]);const x=qe(_=>{const{data:C}=_;if(C){const v=JSON.parse(C);r(v),window.cornerRenderConfig={...window.cornerRenderConfig,json_build_object:v}}},[]);return W(()=>{if(window.isPreviewPage===!0)return console.log("%c Warning:  CornerWidget Preview Mode (v1.0) Loaded ","background: #ffc400; color: #1c1603; padding:4px; font-weight:bolder; border-radius:4px"),window.addEventListener("message",x),()=>{window.removeEventListener("message",x)}},[x]),a(Zi.Provider,{value:w,children:w.config&&w.campaigns&&t.children})},we=()=>cr(Zi),Xi=Dt(""),Qa=(t,e)=>{switch(e.type){case"goTo":{let r=t;return r.push({page:e.payload.page,view:e.payload.view,params:e.payload.params}),r.length>5&&r.shift(),[...r]}case"goBack":{let r=t;return r.pop(),[...r]}}},Ya=({children:t})=>{const[e,r]=H(!1),{cartStyle:n}=we(),[i,o]=bi(Qa,[{page:"cart",view:"cart",params:""}]),[s,c]=H(null),[d,l]=H("right"),p=qe(()=>{Ha({particleCount:150,spread:45,origin:{x:d==="left"?0:1,y:1},angle:d==="left"?65:110,zIndex:2147483647,startVelocity:60})},[d]),u={isCowiOpened:{get:e,set:r},cowiAlignment:{get:d,set:l},viewStateHistory:{currentView:i[i.length-1],changeView:o},cowiOverlay:{get:s,set:c},throwConfetti:p};return window.corner&&(window.corner.throwConfetti=p),window.showCornerCartModal=h=>{u.cowiOverlay.set({type:"modal",params:h})},a(Xi.Provider,{value:u,children:t})},ke=()=>cr(Xi);var Ja=Symbol.for("preact-signals");function mr(){if(ot>1)ot--;else{for(var t,e=!1;Vt!==void 0;){var r=Vt;for(Vt=void 0,rn++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&to(r))try{r.c()}catch(i){e||(t=i,e=!0)}r=n}}if(rn=0,ot--,e)throw t}}var xe=void 0;function Ki(t){var e=xe;xe=void 0;try{return t()}finally{xe=e}}var Vt=void 0,ot=0,rn=0,fr=0;function eo(t){if(xe!==void 0){var e=t.n;if(e===void 0||e.t!==xe)return e={i:0,S:t,p:xe.s,n:void 0,t:xe,e:void 0,x:void 0,r:e},xe.s!==void 0&&(xe.s.n=e),xe.s=e,t.n=e,32&xe.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=xe.s,e.n=void 0,xe.s.n=e,xe.s=e),e}}function Re(t,e){this.v=t,this.i=0,this.n=void 0,this.t=void 0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}function nt(t,e){return new Re(t,e)}function to(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function ro(t){for(var e=t.s;e!==void 0;e=e.n){var r=e.S.n;if(r!==void 0&&(e.r=r),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function no(t){for(var e=t.s,r=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):r=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}t.s=r}function pt(t,e){Re.call(this,void 0),this.x=t,this.s=void 0,this.g=fr-1,this.f=4,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}function io(t,e){return new pt(t,e)}function oo(t){var e=t.u;if(t.u=void 0,typeof e=="function"){ot++;var r=xe;xe=void 0;try{e()}catch(n){throw t.f&=-2,t.f|=8,nn(t),n}finally{xe=r,mr()}}}function nn(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,oo(t)}function Za(t){if(xe!==this)throw new Error("Out-of-order effect");no(this),xe=t,this.f&=-2,8&this.f&&nn(this),mr()}function $t(t,e){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=e?.name}function Ut(t,e){var r=new $t(t,e);try{r.c()}catch(i){throw r.d(),i}var n=r.d.bind(r);return n[Symbol.dispose]=n,n}Re.prototype.brand=Ja,Re.prototype.h=function(){return!0},Re.prototype.S=function(t){var e=this,r=this.t;r!==t&&t.e===void 0&&(t.x=r,this.t=t,r!==void 0?r.e=t:Ki(function(){var n;(n=e.W)==null||n.call(e)}))},Re.prototype.U=function(t){var e=this;if(this.t!==void 0){var r=t.e,n=t.x;r!==void 0&&(r.x=n,t.e=void 0),n!==void 0&&(n.e=r,t.x=void 0),t===this.t&&(this.t=n,n===void 0&&Ki(function(){var i;(i=e.Z)==null||i.call(e)}))}},Re.prototype.subscribe=function(t){var e=this;return Ut(function(){var r=e.value,n=xe;xe=void 0;try{t(r)}finally{xe=n}},{name:"sub"})},Re.prototype.valueOf=function(){return this.value},Re.prototype.toString=function(){return this.value+""},Re.prototype.toJSON=function(){return this.value},Re.prototype.peek=function(){var t=xe;xe=void 0;try{return this.value}finally{xe=t}},Object.defineProperty(Re.prototype,"value",{get:function(){var t=eo(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(rn>100)throw new Error("Cycle detected");this.v=t,this.i++,fr++,ot++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{mr()}}}}),pt.prototype=new Re,pt.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===fr))return!0;if(this.g=fr,this.f|=1,this.i>0&&!to(this))return this.f&=-2,!0;var t=xe;try{ro(this),xe=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return xe=t,no(this),this.f&=-2,!0},pt.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}Re.prototype.S.call(this,t)},pt.prototype.U=function(t){if(this.t!==void 0&&(Re.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}},pt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}},Object.defineProperty(pt.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=eo(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),$t.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}},$t.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,oo(this),ro(this),ot++;var t=xe;return xe=this,Za.bind(this,t)},$t.prototype.N=function(){2&this.f||(this.f|=2,this.o=Vt,Vt=this)},$t.prototype.d=function(){this.f|=8,1&this.f||nn(this)},$t.prototype.dispose=function(){this.d()};var ao,on,so=[];function kt(t,e){ge[t]=e.bind(null,ge[t]||function(){})}function wr(t){on&&on(),on=t&&t.S()}function co(t){var e=this,r=t.data,n=(function(c,d){return H(function(){return nt(c,d)})[0]})(r);n.value=r;var i=He(function(){for(var c=e,d=e.__v;d=d.__;)if(d.__c){d.__c.__$f|=4;break}var l=io(function(){var g=n.value.value;return g===0?0:g===!0?"":g||""}),p=io(function(){return!Array.isArray(l.value)&&!Qn(l.value)}),u=Ut(function(){if(this.N=lo,p.value){var g=l.value;c.__v&&c.__v.__e&&c.__v.__e.nodeType===3&&(c.__v.__e.data=g)}}),h=e.__$u.d;return e.__$u.d=function(){u(),h.call(this)},[p,l]},[]),o=i[0],s=i[1];return o.value?s.peek():s.value}function Xa(t,e,r,n){var i=e in t&&t.ownerSVGElement===void 0,o=nt(r);return{o:function(s,c){o.value=s,n=c},d:Ut(function(){this.N=lo;var s=o.value.value;n[e]!==s&&(n[e]=s,i?t[e]=s:s?t.setAttribute(e,s):t.removeAttribute(e))})}}Ut(function(){ao=this.N})(),co.displayName="ReactiveTextNode",Object.defineProperties(Re.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:co},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),kt("__b",function(t,e){if(typeof e.type=="function"&&typeof window<"u"&&window.__PREACT_SIGNALS_DEVTOOLS__&&window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(),typeof e.type=="string"){var r,n=e.props;for(var i in n)if(i!=="children"){var o=n[i];o instanceof Re&&(r||(e.__np=r={}),r[i]=o,n[i]=o.peek())}}t(e)}),kt("__r",function(t,e){if(typeof e.type=="function"&&typeof window<"u"&&window.__PREACT_SIGNALS_DEVTOOLS__&&window.__PREACT_SIGNALS_DEVTOOLS__.enterComponent(e.type.displayName||e.type.name||"Unknown"),e.type!==$e){wr();var r,n=e.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=(function(){var i;return Ut(function(){i=this}),i.c=function(){n.__$f|=1,n.setState({})},i})())),wr(r)}t(e)}),kt("__e",function(t,e,r,n){typeof window<"u"&&window.__PREACT_SIGNALS_DEVTOOLS__&&window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(),wr(),t(e,r,n)}),kt("diffed",function(t,e){var r;if(typeof e.type=="function"&&typeof window<"u"&&window.__PREACT_SIGNALS_DEVTOOLS__&&window.__PREACT_SIGNALS_DEVTOOLS__.exitComponent(),wr(),typeof e.type=="string"&&(r=e.__e)){var n=e.__np,i=e.props;if(n){var o=r.U;if(o)for(var s in o){var c=o[s];c===void 0||s in n||(c.d(),o[s]=void 0)}else o={},r.U=o;for(var d in n){var l=o[d],p=n[d];l===void 0?(l=Xa(r,d,p,i),o[d]=l):l.o(p,i)}}}t(e)}),kt("unmount",function(t,e){if(typeof e.type=="string"){var r=e.__e;if(r){var n=r.U;if(n)for(var i in r.U=void 0,n){var o=n[i];o&&o.d()}}}else{var s=e.__c;if(s){var c=s.__$u;c&&(s.__$u=void 0,c.d())}}t(e)}),kt("__h",function(t,e,r,n){(n<3||n===9)&&(e.__$f|=2),t(e,r,n)}),Qe.prototype.shouldComponentUpdate=function(t,e){var r=this.__$u,n=r&&r.s!==void 0;for(var i in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){var o=2&this.__$f;if(!(n||o||4&this.__$f)||1&this.__$f)return!0}else if(!(n||4&this.__$f)||3&this.__$f)return!0;for(var s in t)if(s!=="__source"&&t[s]!==this.props[s])return!0;for(var c in this.props)if(!(c in t))return!0;return!1};var Ka=function(t){queueMicrotask(function(){queueMicrotask(t)})};function es(){(function(t){if(ot>0)return t();ot++;try{return t()}finally{mr()}})(function(){for(var t;t=so.shift();)ao.call(t)})}function lo(){so.push(this)===1&&(ge.requestAnimationFrame||Ka)(es)}function yr(t){return new Promise((e,r)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>r(t.error)})}function uo(t,e){let r;return(n,i)=>(()=>{if(r)return r;const o=indexedDB.open(t);return o.onupgradeneeded=()=>o.result.createObjectStore(e),r=yr(o),r.then(s=>{s.onclose=()=>r=void 0},()=>{}),r})().then(o=>i(o.transaction(e,n).objectStore(e)))}let an;function sn(){return an||(an=uo("keyval-store","keyval")),an}const cn=uo("cornercart-store","keyval"),at=(t,e)=>{(function(r,n,i=sn()){i("readwrite",o=>(o.put(n,r),yr(o.transaction)))})(t,e,cn)},it=t=>(function(e,r=sn()){return r("readonly",n=>yr(n.get(e)))})(t,cn),Fe=(t,e)=>(function(r,n,i=sn()){return i("readwrite",o=>new Promise((s,c)=>{o.get(r).onsuccess=function(){try{o.put(n(this.result),r),s(yr(o.transaction))}catch(d){c(d)}}}))})(t,e,cn);let po=window.Shopify&&window.Shopify.currency&&window.Shopify.currency.rate?window.Shopify.currency.rate:1;const ts=async(t,e,r,n)=>{let i=[];const o=r.goalType;let s,c;switch(o){case"totalOrderValue":s=e.totalOrderValue,c=_e(100*s,t.general_config.cornerCurrencyFormat,!0);break;case"cartItemCount":s=e.cartItemCount,c=s;break;case"cartWeight":s=e.cartWeight,c=`${s}g`}return r.milestones.map((d,l)=>{let p=[{placeholder:"goal",value:o==="totalOrderValue"?""+(d.goal-s)*po*100:`<span class="font-bold">${d.goal-s}</span>`,valueType:o==="totalOrderValue"?"currency":"number"},{placeholder:"current_status",value:c},{placeholder:"discount",value:d.rewards.rewardStack[0].unit==="percent"?`${d.rewards.rewardStack[0].value}%`:100*d.rewards.rewardStack[0].value*po,valueType:d.rewards.rewardStack[0].unit==="percent"?"string":"currency"}];if(!(r.stackable===!1&&l<n-1)){let u=d.content.preGoalOfferPageTitle||d.content.milestoneLabel,h=d.content.postGoalOfferPageTitle||d.content.milestoneLabel,g=d.content.preGoalOfferPageSubTitle||d.content.preGoalText,m=d.content.postGoalOfferPageSubTitle||d.content.postGoalText;const w=Ne.apply(d.rewards.prerequisites,e);i.push({priority:r.priority,type:r.type,rewards:d.rewards,isAchieved:w,content:{preGoalOfferPageTitle:Le(u,p),postGoalOfferPageTitle:Le(h,p),preGoalOfferPageSubTitle:Le(g,p),postGoalOfferPageSubTitle:Le(m,p)}})}}),i};var ln,ho,rs=(function(){if(ho)return ln;ho=1;var t=/^\s+|\s+$/g,e=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,n=/^0o[0-7]+$/i,i=parseInt,o=typeof dr=="object"&&dr&&dr.Object===Object&&dr,s=typeof self=="object"&&self&&self.Object===Object&&self,c=o||s||Function("return this")(),d=Object.prototype.toString,l=Math.max,p=Math.min,u=function(){return c.Date.now()};function h(m){var w=typeof m;return!!m&&(w=="object"||w=="function")}function g(m){if(typeof m=="number")return m;if((function(x){return typeof x=="symbol"||(function(_){return!!_&&typeof _=="object"})(x)&&d.call(x)=="[object Symbol]"})(m))return NaN;if(h(m)){var w=typeof m.valueOf=="function"?m.valueOf():m;m=h(w)?w+"":w}if(typeof m!="string")return m===0?m:+m;m=m.replace(t,"");var b=r.test(m);return b||n.test(m)?i(m.slice(2),b?2:8):e.test(m)?NaN:+m}return ln=function(m,w,b){var x,_,C,v,L,k,A=0,j=!1,$=!1,P=!0;if(typeof m!="function")throw new TypeError("Expected a function");function J(U){var re=x,Y=_;return x=_=void 0,A=U,v=m.apply(Y,re)}function B(U){var re=U-k;return k===void 0||re>=w||re<0||$&&U-A>=C}function N(){var U=u();if(B(U))return Q(U);L=setTimeout(N,(function(re){var Y=w-(re-k);return $?p(Y,C-(re-A)):Y})(U))}function Q(U){return L=void 0,P&&x?J(U):(x=_=void 0,v)}function Z(){var U=u(),re=B(U);if(x=arguments,_=this,k=U,re){if(L===void 0)return(function(Y){return A=Y,L=setTimeout(N,w),j?J(Y):v})(k);if($)return L=setTimeout(N,w),J(k)}return L===void 0&&(L=setTimeout(N,w)),v}return w=g(w)||0,h(b)&&(j=!!b.leading,C=($="maxWait"in b)?l(g(b.maxWait)||0,w):C,P="trailing"in b?!!b.trailing:P),Z.cancel=function(){L!==void 0&&clearTimeout(L),A=0,x=k=_=L=void 0},Z.flush=function(){return L===void 0?v:Q(u())},Z},ln})();const br=Ci(rs),go=Dt(""),Je=nt([]),Ze=nt([]),Be=nt(new Map),mo=nt([]),St=nt([]),Xe=nt([]),De=nt([]),ns=({children:t})=>{const{config:e,campaigns:r,automations:n,currentLanguage:i,currentLanguageCode:o}=we(),{cartGoalCampaign:s,oneClickCampaigns:c,cartAnnouncements:d,discountCodes:l,cartTimers:p,bxgyCampaigns:u,lineItemMessageCampaigns:h}=r,g=ke(),[m,w]=H({cartDetails:null}),[b,x]=H({isLoading:!1,isVisible:!0}),[_,C]=H(!1),[v,L]=H([]),[k,A]=H(0),[j,$]=H(0),[P,J]=H({eligibleInsuranceTierObject:null,insuranceItemInCart:null}),B=window.corner?.parcelisConfig?.pricing_tiers_json,N=e?.general_config?.featureFlag?.apps?.cornercart?.use_web_components||!1;let Q=ye(!1);const Z=ye(null);let U=ye("general"),re=ye(null),Y=ye(!1),q=ye([]),M=ye({addProducts:[],deleteProducts:[],editQuantity:{},lineItemsPropertiesToEdit:[],cartAttributes:{},cartOffers:[],makeCartOffersNull:!1,makeShippingOffersNull:!1,redirectUrl:[],shippingOffers:[],externalDiscounts:[],postCartEdit:[],discountCodeEdit:[],changeSellingPlan:[],isProcessing:!1,operationQueue:[],pendingOperations:new Map}),y=ye({}),f;f=window.Shopify&&window.Shopify.currency&&window.Shopify.currency.rate?typeof window.Shopify.currency.rate=="string"?parseFloat(window.Shopify.currency.rate):window.Shopify.currency.rate:1;const F=ne=>{let E=De.value;const I=ne.map(D=>({...D,timestamp:new Date().getTime()}));E=[...E,...I],E.length>0&&(De.value=E,Fe("corner-cart-log",()=>({token:m.cartDetails.token,cartDetailsBackup:m.cartDetails,eventLog:E})))},V=async(ne,E)=>{if(Q.current)return;const I=await it("corner-cart-log");let D,T;I&&I.token===ne.token?(D=I.cartDetailsBackup,T=I.eventLog):(D=null,T=[]);let S=(ve=>{let se=[];return ve.items.map(oe=>{if(oe.properties&&oe.properties.hasOwnProperty("shipping_interval_frequency")&&oe.properties.hasOwnProperty("shipping_interval_unit_type")){let Se=oe.handle.slice(0,-2),Ee={...oe,handle:Se,url:`/products/${Se}`};se=[...se,Ee]}else se=[...se,oe]}),{...ve,items:se}})(ne);const R=Qi(S);s&&!s.config.excludeExternalDiscounts&&(S={...S,externalDiscounts:R});const O=E.cartDetails;let z,G,K=[];if(O)z=O.itemCount,K=[...De.value,...Gi(O,S,De.value)];else{z=D?D.itemCount:0;const ve={eventType:"CORNER_LOADED",eventDetails:{cartDetailsAtStart:D}};if(T.length===0||T[T.length-1].eventType!=="CORNER_LOADED")K=[...T,ve];else{let oe=[...T];oe[oe.length-1]=ve,K=oe}const se=new CustomEvent("cornerCartReady");window.document.dispatchEvent(se),console.log("corner ready event emitted")}z<S.itemCount&&e.cornercart&&e.cornercart.cartConfig.general.cartOpenOnAddition&&e.cornercart.cartConfig.general.overideCartPage&&window.corner.do("openCart",{cartDetails:S}),G=O?Qi(O):S&&S.attributes&&S.attributes._corner_external_discounts?parseInt(S.attributes._corner_external_discounts):0,De.value=K,D?Fe("corner-cart-log",()=>({token:S.token,cartDetailsBackup:S,eventLog:K})):at("corner-cart-log",{token:S.token,cartDetailsBackup:S,eventLog:K});let ie={cartDetails:S,isTempState:!1};G!==R&&s&&!s.config.excludeExternalDiscounts&&ee("externalDiscounts",R,{cartDetailOverride:ie}),w(ie),window.corner.cartState=ie},te=(ne,E=!0,I=!0)=>{let D=[],T=[],S=[],R=[],O=[],z=[],G=Xe.value;ne.map(({rewardObject:K,rewardMultiplier:ie=1})=>{const ve=K.id||K.rewardStack[0].promoCode;if(Ne.apply(K.prerequisites,je(m.cartDetails))&&!tn(De.value,ve,ie))if(z=[...z,{eventType:"REWARD_UNLOCKED",eventDetails:{rewardId:ve,multiplier:ie,prerequisites:K.prerequisites}}],!e.cornercart.cartConfig.general.hideConfettiAnimation&&I&&g.throwConfetti(),K.rewardStack.length===1){const se=K.rewardStack[0];let oe={reward:{type:se.type,unit:se.unit,value:se.value,target:se.target},prerequisites:K.prerequisites,promoCode:se.promoCode||"OfferApplied"};switch(G=[...G,{type:se.type,promoCode:xt(oe.promoCode)==="cartGoal"?`${oe.promoCode}`:`${oe.promoCode}(${ie})`,prerequisite:K.prerequisites}],se.type){case"shippingDiscount":T=[...T,oe];break;case"freeProduct":{let Se=se.target.product_id;S=[...S,{quantity:1,productId:Se,properties:{_corner_promo_code:xt(oe.promoCode)==="cartGoal"?`${oe.promoCode}`:`${oe.promoCode}(${ie})`,_corner_key:`${Se}-${oe.promoCode}(${ie})-0`},rewardMultiplier:ie,rewardObject:oe,isRewardSelectionSkipable:!E}];break}case"freeProductVariant":{let Se=se.target.product_id,Ee=Te(se.target.id);R=[...R,{quantity:1,productId:Se,variantId:parseInt(Ee),properties:{_corner_promo_code:xt(oe.promoCode)==="cartGoal"?`${oe.promoCode}`:`${oe.promoCode}(${ie})`,_corner_key:`${Se}-${oe.promoCode}(${ie})-0`},rewardObject:oe}];break}case"productDiscount":if(m.cartDetails.items.length>0){let Se=m.cartDetails.items.find(Ee=>Ee.handle===se.target.handle);if(Se){let Ee=Se.properties&&Se.properties._corner_key?Se.properties._corner_key:null,Ue=Be&&Ee&&Be.value.has(Ee)&&Be.value.get(Ee)!==null?[...Be.value.get(Ee),oe]:[oe];O=[...O,{lineItem:Se,rewardObjectArray:Ue}]}}break;case"orderDiscount":D=[...D,oe]}}else K.rewardStack.map(se=>{G=[...G,{type:se.type,promoCode:xt(se.promoCode)==="cartGoal"?`${se.promoCode}`:`${se.promoCode}(${ie})`,prerequisite:K.prerequisites}]}),ue("rewardChooser",{stackSelectCount:K.stackModifier==="all"?K.rewardStack.length:K.stackSelectCount||1,prerequisites:K.prerequisites,isRewardSelectionSkipable:!E,rewardStack:K.rewardStack,rewardMultiplier:ie},K.prerequisites)}),z.length>0&&F(z),T.length>0&&ee("shippingOffers",T),D.length>0&&ee("cartOffers",D),S.length>0&&ee("addProducts",S),R.length>0&&ee("addVariants",R),O.length>0&&ee("lineItemsPropertiesToEdit",O),G.length>0&&(Xe.value=G,Fe("corner-qualified-rewards",()=>({token:m.cartDetails.token,rewards:G})))},pe=async()=>{let ne=await(async()=>{let D,T;return window.location.href.includes("/products/")?(D="product",(window.corner.sessionData.product||window.useSampleData)&&(T=await Me(window.corner.sessionData.product.id)||null)):D=window.location.href.includes("/collections/")?"collection":"general",{pageType:D,currentProduct:T}})();U.current=ne.pageType,re.current=ne.currentProduct;let E=e.cornercart.cartConfig.general.nativeAtcBeaviourPreventedPages||[],I=null;if(e.cornercart&&e.cornercart.cartConfig.general.overideCartPage&&e.cornercart.cartConfig.general.isActive){const D=()=>{x({isLoading:!0,isVisible:!0}),C(!0)},T=()=>{de("atc-button-click")},S=R=>{window.showCornerCartModal({description:R.description,secondaryCta:{text:"OK",action:()=>{g.cowiOverlay.set(null)}}})};!document.querySelector(".coca-vw-wrapper")&&E.includes(ne.pageType)||(I=za(e,D,T,S)),["/cart","/cart/",`${window.Shopify.routes.root}cart`,`${window.Shopify.routes.root}cart/`].includes(window.location.pathname)&&(window.corner.do("openCart"),document.querySelector(window.elementToReplaceInCartPage||"main").style.display="none"),(window.location.hash==="#cart"||window.location.search.includes("openCart"))&&window.corner.do("openCart")}return I},me=ne=>{if(s&&m.cartDetails){let{milestoneIndexAfterCartEdit:E,rewardsToApply:I,throwConfetti:D}=((T,S,R)=>{let O,z=T.goalType,G=je(R),K=!0,ie=[],ve=0;switch(R.items.map(oe=>{oe.final_price===0&&(ve+=oe.quantity)}),z){case"totalOrderValue":O=G.totalOrderValue;break;case"cartItemCount":O=G.cartItemCount}let se=T.milestones.findIndex(oe=>oe.goal>O);if(se=se===-1?T.milestones.length:se,S!==null)if(se>S)K=!0,T.milestones.map((oe,Se)=>{let Ee;oe.rewards.prerequisites||(Ee=Se===T.milestones.length-1||T.stackable||oe.rewards.rewardStack[0].type==="shippingDiscount"?{">=":[{var:T.goalType},oe.goal]}:{and:[{">=":[{var:T.goalType},oe.goal]},{"<":[{var:T.goalType},T.milestones[Se+1].goal]}]}),Se>=S&&Se<se&&ie.push({rewardObject:oe.rewards.prerequisites?oe.rewards:{...oe.rewards,prerequisites:Ee},rewardMultiplier:1})}),window.corner&&window.corner.execute&&window.corner.execute("onCartGoalMilestoneAchieve",{lostMilestoneIndex:se+1});else if(se<S&&se>0){if(K=!1,!T.stackable){const oe=T.milestones[se-1],Se=oe.rewards.prerequisites||{and:[{">=":[{var:T.goalType},oe.goal]},{"<":[{var:T.goalType},T.milestones[se].goal]}]};ie=[{rewardObject:oe.rewards.prerequisites?oe.rewards:{...oe.rewards,prerequisites:Se},rewardMultiplier:1}]}window.corner&&window.corner.execute&&window.corner.execute("onCartGoalMilestoneLost",{lostMilestoneIndex:se+1})}else se<S&&se===0&&window.corner&&window.corner.execute&&window.corner.execute("onCartGoalMilestoneLost",{lostMilestoneIndex:0});return{milestoneIndexAfterCartEdit:se,rewardsToApply:ie,throwConfetti:K}})(s,ne,m.cartDetails);I.length>0&&te(I,!!s.config.mandatoryRewardSelection,D),A(E)}},ee=async(ne,E,I)=>{const{cartDetailOverride:D,onFinish:T}=I||{};switch(he("cancel"),C(!0),ne){case"cartOffers":M.current.cartOffers=[...Je.value,...E];break;case"replaceCartOffers":M.current.cartOffers=E;break;case"shippingOffers":M.current.shippingOffers=[...Ze.value,...M.current.shippingOffers,...E];break;case"replaceShippingOffers":M.current.shippingOffers=E;break;case"cartAttributes":M.current.cartAttributes={...M.current.cartAttributes,...E};break;case"addVariants":{let S=[];await Promise.all(E.map(async R=>{if(R.productId){let O=await Me(R.productId);if(O){let z=O.variants.find(G=>G.id==R.variantId);S.push({title:O.title,handle:O.handle,image:z.image,type:"free_product",properties:R.properties,selling_plan:R.selling_plan})}}})),S.length>0&&(y.current.productsToAdd=S),M.current.addProducts=[...M.current.addProducts,...E];break}case"addProducts":{let S=[],R=[];await Promise.all(E.map(async O=>{if(O.productId){let z=await Me(O.productId);if(z&&z.variants.length<2){let G=z.variants[0];R=[...R,{...O,variantId:G.id}],S.push({title:z.title,handle:z.handle,image:G.image,type:"free_product",properties:O.properties})}else ue("rewardChooser",{stackSelectCount:1,prerequisites:O.rewardObject.prerequisites,isRewardSelectionSkipable:!!O.isRewardSelectionSkipable,rewardMultiplier:O.rewardMultiplier,rewardStack:[{type:O.rewardObject.reward.type,unit:O.rewardObject.reward.unit,value:O.rewardObject.reward.value,target:O.rewardObject.reward.target,promoCode:O.rewardObject.promoCode}]},O.rewardObject.prerequisites)}})),S.length>0&&(y.current.productsToAdd=S),M.current.addProducts=[...M.current.addProducts,...R];break}case"externalDiscounts":M.current.externalDiscounts=[...M.current.externalDiscounts,E];break;case"deleteProducts":y.current.productsToDelete=E.map(S=>S.id),M.current.deleteProducts=[...M.current.deleteProducts,...E];break;case"editQuantity":y.current.editQuantity=E,M.current.editQuantity={...M.current.editQuantity,...E};break;case"makeCartOffersNull":M.current.makeCartOffersNull=E;break;case"changeSellingPlan":M.current.changeSellingPlan=[...M.current.changeSellingPlan,E];break;case"makeShippingOffersNull":M.current.makeShippingOffersNull=E;break;case"redirectUrl":M.current.redirectUrl=[...M.current.redirectUrl,E];break;case"lineItemsPropertiesToEdit":M.current.lineItemsPropertiesToEdit=[...M.current.lineItemsPropertiesToEdit,...E];break;case"addNote":M.current.cartNote=E;break;case"addDiscountCode":M.current.discountCodeEdit=[...M.current.discountCodeEdit,{operation:"add",code:E.toUpperCase()}];break;case"removeDiscountCode":M.current.discountCodeEdit=[...M.current.discountCodeEdit,{operation:"remove",code:E.toUpperCase()}]}T&&(M.current.postCartEdit=[...M.current.postCartEdit,T]),he({cartEdits:{...M.current},tempCartEdits:{...y.current},currentCartState:D?{...D}:{...m}})},he=qe(br(ne=>{x({isLoading:!0,isVisible:ne==="cancel"||ne.cartEdits.externalDiscounts.length===0}),ne!=="cancel"&&(((E,I)=>{let D={productTitle:"temp-title",handle:"temp-handle",quantity:1,url:"#",image:"",isLoading:!0,cost:null,tags:[],properties:{},discounts:[],id:"temp"};const{productsToAdd:T,productsToDelete:S,editQuantity:R}=E;if(Object.keys(E).length>0&&I.cartDetails){let O=I.cartDetails.items;T&&T.length>0&&T.map(z=>{O=[{...D,productType:z.type||"",productTitle:z.title,handle:z.handle,image:z.image,properties:z.properties||{}},...O]}),S&&S.length>0&&S.map(z=>{O=O.filter(G=>G.id!==z)}),R&&Object.keys(R).length>0&&Object.keys(R).map(z=>{O=O.map(G=>G.id===z?{...G,quantity:R[z],isLoading:!0}:G)}),w(()=>({cartDetails:{...I.cartDetails,tempCartItems:O},isTempState:!0})),y.current={}}})(ne.tempCartEdits,ne.currentCartState),(async(E,I)=>{M.current.isProcessing=!0;let D={},T=[],S=Be.value,R=[...E.addProducts];if(E.makeCartOffersNull&&(M.current.makeCartOffersNull=!1,Fe("corner-cart-offers",()=>({token:I.cartDetails.token,offers:[]})),Je.value=[],D.makeCartOffersNull=!0,T=[...T,{makeCartOffersNull:!0}]),E.makeShippingOffersNull&&(M.current.makeShippingOffersNull=!1,Fe("corner-shipping-offers",()=>({token:I.cartDetails.token,offers:[]})),Ze.value=[],D.makeShippingOffersNull=!0,T=[...T,{makeShippingOffersNull:!0}]),E.deleteProducts.length>0&&(E.deleteProducts.length>0&&E.deleteProducts.forEach(O=>{O.properties&&O.properties._corner_key&&S.delete(O.properties._corner_key)}),D.productsToDelete=E.deleteProducts,T=[...T,{productsToDelete:E.deleteProducts}],M.current.deleteProducts=[]),Object.keys(E.editQuantity).length>0&&(D.quantitiesToEdit=E.editQuantity,T=[...T,{quantitiesToEdit:E.editQuantity}],M.current.editQuantity={}),E.changeSellingPlan&&E.changeSellingPlan.length>0&&(D.changeSellingPlan=E.changeSellingPlan,T=[...T,{changeSellingPlan:E.changeSellingPlan}],M.current.changeSellingPlan=[]),E.addProducts.length>0&&(D.productsToAdd=E.addProducts,T=[...T,{productsToAdd:E.addProducts}],M.current.addProducts=[]),E.shippingOffers.length>0){let O=[...E.shippingOffers];Ze.value=O,Fe("corner-shipping-offers",()=>({token:I.cartDetails.token,offers:O}));const z=O.reduce((G,K)=>G.reward.value>K.reward.value?G:K);D.newShippingOfferCode=z.promoCode,T=[...T,{newShippingOfferCode:z.promoCode}],M.current.shippingOffers=[]}if(E.cartOffers.length>0){let O=E.cartOffers;Je.value=O,Fe("corner-cart-offers",()=>({token:I.cartDetails.token,offers:O}));const z=O.reduce((G,K)=>(G.reward.unit==="percent"?G.reward.value/100*I.cartDetails.original_total_price:100*G.reward.value*f)>(K.reward.unit==="percent"?K.reward.value/100*I.cartDetails.original_total_price:100*K.reward.value*f)?G:K);D.newCartOfferCode=z.promoCode,M.current.cartOffers=[]}if(Object.keys(E.cartAttributes).length>0&&(D.cartAttributes=E.cartAttributes,T=[...T,{cartAttributes:E.cartAttributes}],M.current.cartAttributes={}),E.externalDiscounts.length>0&&(D.updatedExternalDiscount=`${E.externalDiscounts[E.externalDiscounts.length-1]}`,T=[...T,{updatedExternalDiscount:`${E.externalDiscounts[E.externalDiscounts.length-1]}`}],M.current.externalDiscounts=[]),E.lineItemsPropertiesToEdit.length>0){let O=E.lineItemsPropertiesToEdit.map(z=>{let G=z.lineItem.properties||{},K=z.lineItem.properties&&z.lineItem.properties._corner_key&&z.lineItem.properties._corner_key;if(K&&z.rewardObjectArray){S.set(K,z.rewardObjectArray);const ie=Ii(z.rewardObjectArray,z.lineItem.price).promoCode;G={...G,_corner_promo_code:ie}}return{id:z.lineItem.id,properties:G}});D.lineItemsPropertiesToEditArray=O,T=[...T,{lineItemsPropertiesToEditArray:O}],M.current.lineItemsPropertiesToEdit=[]}if(E.cartNote!==null&&E.cartNote!==void 0&&(D.cartNote=E.cartNote,T=[...T,{cartNote:E.cartNote}],M.current.cartNote=null),E.discountCodeEdit.length>0){const O=I.cartDetails.allDiscountCodes||[],z=new Set,G=new Map,K=[];if(O.forEach(ie=>{const ve=ie.code.toLowerCase();G.has(ve)||(G.set(ve,ie),z.add(ie.code))}),E.discountCodeEdit.forEach(ie=>{const ve=ie.code.toLowerCase();ie.operation==="add"?G.has(ve)?G.has(ve)&&G.get(ve).applicable?K.push({...ie,message:"discount_code_already_applied"}):K.push({...ie,message:"discount_code_already_applied_but_not_applicable"}):(G.set(ve,ie.code),z.add(ie.code)):ie.operation==="remove"&&z.delete(ie.code)}),K.length===E.discountCodeEdit.length)window.showCornerCartModal({description:i.cart.non_applicable_discount_code_warning,secondaryCta:{text:"Ok",action:()=>{g.cowiOverlay.set(null),E.postCartEdit&&E.postCartEdit.length>0&&E.postCartEdit.map(ie=>{ie&&ie()})}}});else{const ie=Array.from(z);D.discountCodeEdit=[E.discountCodeEdit,ie],T=[...T,{discountCodeEdit:[E.discountCodeEdit,ie]}]}M.current.discountCodeEdit=[]}if(Object.keys(D).length>0){Q.current=!0;const O=await Ai(D,I.cartDetails,i);if(Q.current=!1,O){O.errors.length>0&&window.showCornerCartModal({description:O.errors.join("<br>"),secondaryCta:{text:"Ok",action:()=>{g.cowiOverlay.set(null)}}});const z=O.updatedCartDetails;z.items.forEach(G=>{let K=R.findIndex(ie=>ie.variantId===G.variantId&&G.properties&&G.properties._corner_key&&ie.properties&&ie.properties._corner_key===G.properties._corner_key);K>-1&&(R[K].rewardObject&&S.set(G.properties._corner_key,[{reward:R[K].rewardObject.reward,prerequisites:R[K].rewardObject.prerequisites,promoCode:R[K].rewardObject.promoCode}]),R.splice(K,1))}),Be.value=new Map(S),Fe("corner-line-item-offers",()=>({token:I.cartDetails.token,offers:new Map(S)})),E.postCartEdit&&E.postCartEdit.length>0&&(E.postCartEdit.map(G=>{G&&G()}),M.current.postCartEdit=[]),V(z,I)}}if(x({isLoading:!1,isVisible:!0}),M.current.isProcessing=!1,E.redirectUrl.length>0){let O=E.redirectUrl.reduce((z,G)=>z.priority<G.priority?G:z);O.openInNewTab?window.open(O.url,"_blank"):window.location.href=O.url}})(ne.cartEdits,ne.currentCartState))},window.corner&&window.corner.cartEditDebounceDelay?window.corner.cartEditDebounceDelay:100),[]),ue=(ne,E,I={everyone:!0})=>{let D={type:ne,params:E,prerequisites:I};q.current=[...q.current,D],ae(m.cartDetails)},X=ne=>{let E=[...q.current].filter(I=>Ne.apply(I.prerequisites,je(ne)));if(E.length>0){let I=E[0];const D=()=>{let T=E.slice(1);q.current=T,g.cowiOverlay.set(null),X(ne)};switch(I.type){case"rewardChooser":g.cowiOverlay.set({type:"rewardChooser",params:{stackSelectCount:I.params.stackSelectCount,prerequisites:I.params.prerequisites,rewardStack:I.params.rewardStack,isRewardSelectionSkipable:I.params.isRewardSelectionSkipable||!1,rewardMultiplier:I.params.rewardMultiplier,onClose:()=>{D()}}});break;case"cartItemAdder":g.cowiOverlay.set({type:"cartItemAdder",params:{productId:I.params.productId,productInfo:I.params.productInfo,prerequisites:I.params.prerequisites,properties:I.params.properties,rewardObject:I.params.rewardObject,hideVariantOptionSelectors:I.params.hideVariantOptionSelectors,variantId:I.params.variantId,removingCheckOnCartItemAdderClose:I.params.removingCheckOnCartItemAdderClose,onClose:()=>{D()}}});break;case"expressCheckoutChooser":g.cowiOverlay.set({type:"expressCheckoutChooser",params:{content:I.params.content,termsCheckboxStatus:I.params.termsCheckboxStatus,onClose:()=>{D()}}})}}else q.current=[]},ae=qe(br(ne=>{X(ne)},window.corner&&window.corner.userActionRequestDebounceDelay?window.corner.userActionRequestDebounceDelay:100),[]),de=qe(br(async ne=>{const E=await Pi(ne);if(E){let I=window.corner&&window.corner.cartState?window.corner.cartState:m;V(E,I)}},window.corner&&window.corner.cartInfoRefreshDebounceDelay?window.corner.cartInfoRefreshDebounceDelay:100),[]),ce=async()=>{let ne=[],E=je(m.cartDetails),I=s?await ts(e,E,s,k):[];if(I&&I.length>0&&(ne=[...ne,...I]),l&&l.length>0&&(ne=[...ne,...l]),u&&u.length>0){let T=await((S,R,O,z)=>{let G=[];return O.map(K=>{let ie=0;const ve=K.content.findIndex(Ee=>Ee.lang===z);let se;se=ve===-1?K.content[0].value:K.content[ve].value;const oe=K.config.rewards.prerequisites;let Se=K.config.usesPerOrderEnabled?K.config.usesPerOrderLimit:100;for(let Ee=1;Ee<=Se;Ee++){const Ue=oe[">="][1]*Ee;let tt;if(oe[">="]&&oe[">="][0]){const rr=oe[">="][0];tt={">=":[...Array.isArray(rr)?rr:[rr],Ue]}}if(!Ne.apply(tt,R))break;ie+=1}G.push({priority:K.priority,type:K.type,rewards:K.config.rewards,content:se,rewardMultiplier:ie,isAchieved:ie!==0})}),G})(0,E,u,o);ne=[...ne,...T]}const D=ne.sort(({priority:T},{priority:S})=>T-S);L(D)},fe=async(ne,E)=>{if(!E?.length)return;const I=ne.items.filter(S=>S.properties?._corner_partner==="parcelis");if(I.length>1)return void ee("deleteProducts",I);const D=I[0]??null,T=((S,R)=>{const O=R.filter(G=>S>=G.min&&S<=G.max);return O.length===0?null:O.sort((G,K)=>G.max-K.max)[0]})(ne.cost.totalAmount-(D?.cost.totalAmount??0),E);if(T){const S=await Me(T.productId),R=S?.variants?.find(z=>z.id===T.variantId)?.price,O=D?.variantId??null;O?O!==T.variantId?(ee("deleteProducts",[D]),ee("addVariants",[{quantity:1,variantId:T.variantId,properties:{_insure_shipping_amount:R,_corner_partner:"parcelis"}}]),Z.current=!0,J({eligibleInsuranceTierObject:T,insuranceItemInCart:null})):(Z.current=!0,J({eligibleInsuranceTierObject:T,insuranceItemInCart:D})):(Z.current===!0&&ee("addVariants",[{quantity:1,variantId:T.variantId,properties:{_insure_shipping_amount:R,_corner_partner:"parcelis"}}]),J({eligibleInsuranceTierObject:T,insuranceItemInCart:null}))}else D?(ee("deleteProducts",[D]),J({eligibleInsuranceTierObject:null,insuranceItemInCart:null})):J({eligibleInsuranceTierObject:null,insuranceItemInCart:null});return T};W(()=>{let ne=null;return(async()=>(de("session-start"),ne=await pe(),(E=>{const I=D=>!(Ia.findIndex(T=>!!D&&D.includes(T))<0);typeof window.$=="function"&&window.$(document).ajaxSuccess&&window.$(document).ajaxSuccess(function(D,T,S){window.cornerDevMode&&console.log("Corner Identified ajaxSuccess",S),I(S.url)&&E()}),new PerformanceObserver(D=>{D.getEntries().forEach(T=>{if(T.initiatorType==="fetch"||T.initiatorType==="xmlhttprequest"){let S=new URL(T.name).searchParams.get("cocaId");I(T.name)&&!S&&(window.cornerDevMode&&console.log("Corner Identified fetch using performance Observer",T),E())}})}).observe({entryTypes:["resource"]})})(()=>{de("theme-atc")})))(),()=>{ne&&ne()}},[]),W(async()=>{if(!m.isTempState&&b.isLoading&&x({isLoading:!1,isVisible:!0}),m.cartDetails&&!m.isTempState){let E=await(async()=>{const I=await it("corner-cart-offers"),D=await it("corner-shipping-offers"),T=await it("corner-line-item-offers"),S=await it("corner-automations-log"),R=await it("corner-qualified-rewards"),O=await it("corner-event-log");return De.value.length===0&&(O&&O.events.length>0&&O.token===m.cartDetails.token?De.value=O.events:(De.value=[],at("corner-event-log",{token:m.cartDetails.token,events:[]}))),Je.value.length===0&&(I&&I.offers.length>0&&I.token===m.cartDetails.token?Je.value=I.offers:(Je.value=[],at("corner-cart-offers",{token:m.cartDetails.token,offers:[]}))),Ze.value.length===0&&(D&&D.offers.length>0&&D.token===m.cartDetails.token?Ze.value=D.offers:(Ze.value=[],at("corner-shipping-offers",{token:m.cartDetails.token,offers:[]}))),Be.value.size===0&&(T&&T.offers.size>0&&T.token===m.cartDetails.token?Be.value=T.offers:(Be.value=new Map,at("corner-line-item-offers",{token:m.cartDetails.token,offers:new Map}))),St.value.length===0&&(S&&S.automations.length>0&&S.token===m.cartDetails.token?St.value=S.automations:(St.value=[],at("corner-automations-log",{token:m.cartDetails.token,automations:[]}))),Xe.value.length===0&&(R&&R.rewards.length>0&&R.token===m.cartDetails.token?Xe.value=R.rewards:(Xe.value=[],at("corner-qualified-rewards",{token:m.cartDetails.token,rewards:[]}))),!0})();mo.value=await(async(I,D)=>{const T=I.items.filter(O=>O.cost.totalAmount&&O.cost.totalAmount!==0);let S="RELATED";D.cornercart&&D.cornercart.cartConfig&&D.cornercart.cartConfig.general&&D.cornercart.cartConfig.general.productRecommendationIntent&&(S=D.cornercart.cartConfig.general.productRecommendationIntent);const R=await $a(T,S);return window.useSampleData?window.previewValues.sampleRecomendedProducts:R})(m.cartDetails,e),(()=>{let I=[];c.length>0&&c.map(S=>{S.upsellConfig&&S.upsellConfig.isDisplayedinCart===!1&&I.push(S.campaignid)});let D=0;m.cartDetails.items.map(S=>{S.properties&&S.properties._oneClickRefId&&I.includes(S.properties._oneClickRefId)&&(D+=S.quantity)});const T=m.cartDetails.itemCount-D;m.cartDetails.itemCount!==0&&T===0&&Ni(),$(T)})(),(I=>{if(I.cornercart&&I.cornercart.cartConfig.general.overideCartPage&&I.cornercart.cartConfig.general.isActive){const D=I.cornercart.cartConfig.general.customCartButtonSelectors||[],T=[...Ei,...D];window.document.querySelectorAll(T.join(",")).forEach(S=>{S.addEventListener("click",R=>{S.getAttribute("data-cornercart-dont-open")||(R.stopPropagation(),R.stopImmediatePropagation(),R.preventDefault(),window.corner.do("openCart"))})})}})(e),(()=>{if(Je.value.length>0){let R=Je.value.filter(O=>Ne.apply(O.prerequisites,je(m.cartDetails)));R.length!==Je.value.length&&(R.length>0?ee("replaceCartOffers",R):ee("makeCartOffersNull",!0))}if(Ze.value.length>0){let R=Ze.value.filter(O=>Ne.apply(O.prerequisites,je(m.cartDetails)));R.length!==Ze.value.length&&(R.length>0?ee("replaceShippingOffers",R):ee("makeShippingOffersNull",!0))}let I=[],D=[],T=m.cartDetails.items.filter(R=>R.properties&&R.properties._corner_key!==null),S={};if(T.map(R=>{let O=!1,z=R.properties._corner_key;if(Be&&Be.value.size>0&&Be.value.has(z)&&Be.value.get(z)!==null){const G=Be.value.get(z);let K=G.filter(ie=>{let ve=Ne.apply(ie.prerequisites,je(m.cartDetails));return ve!==!1||ie.reward.type!=="freeProduct"&&ie.reward.type!=="freeProductVariant"||(I=[...I,R],O=!0),ve});JSON.stringify(G)===JSON.stringify(K)||O||(D=[...D,{lineItem:R,rewardObjectArray:K}])}}),m.cartDetails.items.map(R=>{R.product_type==="free_product"&&(R.properties&&(R.properties._corner_promo_code||R.properties._automationId)?R.properties&&R.properties._corner_promo_code&&R.quantity>1&&(S={...S,[R.id]:1}):I=[...I,R])}),Xe.value.length>0){let R=Xe.value.filter(O=>Ne.apply(O.prerequisite,je(m.cartDetails)));R.length!==Xe.value.length&&(Xe.value=R,Fe("corner-qualified-rewards",()=>({token:m.cartDetails.token,rewards:R})))}Object.keys(S).length>0&&ee("editQuantity",S),I.length>0&&ee("deleteProducts",I),D.length>0&&ee("lineItemsPropertiesToEdit",D)})();try{if(window.___INSURANCE_SETTINGS___?.shouldShow&&window.corner?.parcelisConfig?.corner_cart_integration&&window.corner?.cornerConfig?.cartConfig?.parcelisIntegration?.isActive&&N)fe(m.cartDetails,B);else if((!window.corner?.parcelisConfig?.corner_cart_integration||window.corner?.cornerConfig?.cartConfig?.parcelisIntegration?.isActive===!1||N===!1)&&De.value[De.value.length-1]?.eventType==="CORNER_LOADED"){const I=m.cartDetails.items.filter(D=>D.properties?._corner_partner==="parcelis");I.length>0&&ee("deleteProducts",I)}}catch(I){console.error("Error caught from manageParcelis:",I)}E&&(De.value[De.value.length-1].eventType==="CORNER_LOADED"?(async()=>{if(window.Shopify.theme.role==="unpublished")await ee("cartAttributes",{_cornercart:JSON.stringify({testMode:!0})},{onFinish:()=>{F([{eventType:"TEST_MODE_ACTIVE"}])}});else{const{attributes:T}=window.corner.cartInfo;window.Shopify.theme.role!=="unpublished"&&T&&T._cornercart&&T._cornercart==='{"testMode":true}'&&await ee("cartAttributes",{_cornercart:null},{onFinish:()=>{F([{eventType:"TEST_MODE_DEACTIVATED"}])}})}let I=0,D=De.value[De.value.length-1].eventDetails.cartDetailsAtStart;if(D!==null){const T=Gi(D,m.cartDetails,De.value);let S;if(T.length>0&&F(T),s){let R=s.goalType,O=je(D);switch(R){case"totalOrderValue":S=O.totalOrderValue;break;case"cartItemCount":S=O.cartItemCount;break;case"cartWeight":S=O.cartWeight}I=s.milestones.findIndex(z=>z.goal>S),I===-1&&(I=s.milestones.length)}}me(I)})():(me(k),(async()=>{let I=[],D=[],T={},S=St.value;await Promise.all(n.map(async O=>{Ne.apply(O.condition,je(m.cartDetails))&&!St.value.includes(O.id)&&(S.push(O.id),await Promise.all(O.actions.map(async z=>{switch(z.actionType){case"add_item":{let G=await Me(Te(z.actionConfig.target.id));if(G.variants.length<2||z.actionConfig.preferenceType==="merchantSelect"){let K=G.variants.length<2?G.variants[0].id:z.actionConfig.preferenceValue.id;I=[...I,{quantity:z.actionConfig.quantity,variantId:K,productId:G.id,properties:{_automationId:O.id}}]}else ue("cartItemAdder",{productId:G.id,productInfo:G,properties:{_automationId:O.id}});break}case"remove_item":break;case"add_cart_attribute":T={...T,[z.actionConfig.attributeName]:z.actionConfig.attributeValue};break;case"goto_url":ee("redirectUrl",{url:z.actionConfig.url,openInNewTab:z.actionConfig.openInNewTab,priority:z.actionConfig.priority});break;default:console.error(`${z.actionType} is an invalid Action type. Please report this error to Corner Team`)}})))}));const R=n.filter(O=>S.includes(O.id));await Promise.all(R.map(async O=>{if(Ne.apply(O.condition,je(m.cartDetails))===!1){let z=S.indexOf(O.id);S.splice(z,1),await Promise.all(O.actions.map(async G=>{switch(G.actionType){case"add_item":{let K=m.cartDetails.items.filter(ie=>ie.properties._automationId&&parseInt(ie.properties._automationId)===O.id);D=[...D,...K];break}case"remove_item":case"goto_url":break;case"add_cart_attribute":T={...T,[G.actionConfig.attributeName]:null};break;default:console.error(`${G.actionType} is an invalid Action type. Please report this error to Corner Team`)}}))}})),St.value=S,Fe("corner-automations-log",()=>({token:m.cartDetails.token,automations:S})),Object.keys(T).length>0&&ee("cartAttributes",T),I.length>0&&ee("addVariants",I),D.length>0&&ee("deleteProducts",D)})(),(()=>{if(m.cartDetails&&m.cartDetails.itemCount>0&&u.length>0){let I=[];const D=je(m.cartDetails);u.forEach(T=>{let S=T.config.usesPerOrderEnabled?T.config.usesPerOrderLimit:100;const R=T.config.rewards,O=R.prerequisites;for(let z=1;z<=S;z++){const G=O[">="][1]*z;let K;if(O[">="]&&O[">="][0]){const se=O[">="][0];K={">=":[...Array.isArray(se)?se:[se],G]}}const ie=Ne.apply(K,D),ve=R.id||R.rewardStack[0].promoCode;if(!ie)break;tn(De.value,ve,z)||I.push({rewardObject:{...R,prerequisites:K},rewardMultiplier:z})}}),I.length>0&&te(I,!0)}})())),ce(),(async()=>{let I=[];await Promise.all(m.cartDetails.items.map(async D=>{D.tags&&D.tags.includes("corner-override-free-shipping")&&I.push(D)})),I.length>0?Y.current=!0:Y.current=!1})(),setTimeout(()=>{(()=>{const I=M.current;return I.addProducts.length>0||I.deleteProducts.length>0||Object.keys(I.editQuantity).length>0||I.lineItemsPropertiesToEdit.length>0||Object.keys(I.cartAttributes).length>0||I.cartOffers.length>0||I.shippingOffers.length>0||I.externalDiscounts.length>0||I.discountCodeEdit.length>0||I.changeSellingPlan.length>0||I.redirectUrl.length>0||I.isProcessing===!0})()||C(!1)},100)}const ne=()=>{if(m.cartDetails)try{window.___INSURANCE_SETTINGS___?.shouldShow&&window.corner?.parcelisConfig?.corner_cart_integration&&window.corner?.cornerConfig?.cartConfig?.parcelisIntegration?.isActive&&N&&(console.log("CornerCart + Parcelis integration enabled"),fe(m.cartDetails,B))}catch(E){console.error("Error caught from manageParcelis:",E)}};return window.addEventListener("parcelis:insurance-settings-loaded",ne),()=>{window.removeEventListener("parcelis:insurance-settings-loaded",ne)}},[m]);const We={loadingFlag:{get:b,set:x},isCheckoutDisabled:_,cartDetails:m.cartDetails,cartOffers:Je,offerPageItems:v,shippingOffers:Ze,lineItemOffers:Be,pageType:U.current,currentProduct:re.current,isCartInTempState:!!m.isTempState,relatedProducts:mo.value,eventLog:De.value,currencyConversionMultiplier:f,cartGoal:{cartGoalCampaign:s,currentMilestoneIndex:k},cartBasedValues:m.cartDetails&&je(m.cartDetails),oneClickCampaigns:c,cartAnnouncements:d,cartTimers:p,bxgyCampaigns:u,lineItemMessageCampaigns:h,preventFreeShipping:Y.current,requestCartEdit:ee,requestUserAction:ue,addProductsWithRewards:(ne,E)=>{let I=[],D=[],T=m.cartDetails.items.filter(S=>S.properties&&Object.keys(S.properties).includes("_corner_promo_code"));ne.map(S=>{let R={reward:{type:S.rewardObject.type,unit:S.rewardObject.unit,value:S.rewardObject.value},prerequisites:S.prerequisites,promoCode:S.rewardObject.promoCode};I.push({quantity:S.quantity,variantId:S.variantId,productId:S.productId,rewardMultiplier:S.rewardMultiplier,properties:{_corner_promo_code:xt(S.rewardObject.promoCode)==="cartGoal"?`${S.rewardObject.promoCode}`:`${S.rewardObject.promoCode}(${S.rewardMultiplier})`,_corner_key:`${S.productId}-${S.rewardObject.promoCode}(${S.rewardMultiplier||1})-${S.rewardIndex||0}`},rewardObject:R})}),T.map(S=>{ne.find(R=>xt(R.rewardObject.promoCode)==="cartGoal"&&S.properties._corner_promo_code===`${R.rewardObject.promoCode}`||S.properties._corner_promo_code===`${R.rewardObject.promoCode}(${R.rewardMultiplier})`)&&D.push(S)}),I.length>0&&ee("addVariants",I),D.length>0&&ee("deleteProducts",D),E&&E()},handleCheckout:(ne,E="normal")=>{window.termsCheckboxStatus=ne;const I=()=>{E==="express"?ue("expressCheckoutChooser",{content:document.querySelector(" #dynamic-checkout-cart").outerHTML,termsCheckboxStatus:ne}):E==="normal"&&(window.corner.execute("checkoutOverRide",{termsCheckboxStatus:ne})||(window.location.href=m.cartDetails.checkoutUrl||`${window.Shopify.routes.root||"/"}checkout`))},D=m.cartDetails.items.filter(R=>R.properties&&R.properties._corner_promo_code).map(R=>R.properties._corner_promo_code),T=Xe.value.filter(R=>R.type==="freeProduct"||R.type==="freeProductVariant").map(R=>R.promoCode).filter(R=>!D.includes(R)),S=T.filter((R,O)=>T.indexOf(R)===O);S.length>0&&!m.cartDetails.attributes._corner_non_selected_free_gifts?ee("cartAttributes",{_corner_non_selected_free_gifts:S.join()},{onFinish:()=>{window.showCornerCartModal({title:i.cart.rewards_checkout_reminder_title,isClosable:!0,description:i.cart.rewards_checkout_reminder_description,primaryCta:{text:i.cart.rewards_checkout_reminder_primary_cta_btn,action:()=>{g.cowiOverlay.set(null),g.viewStateHistory.changeView({type:"goTo",payload:{page:"offers",view:"offer-list",params:{}}})}},secondaryCta:{text:i.cart.rewards_checkout_reminder_secondary_cta_btn,action:()=>{I()}}})}}):S.length===0&&m.cartDetails.attributes._corner_non_selected_free_gifts?ee("cartAttributes",{_corner_non_selected_free_gifts:null},{onFinish:()=>{I()}}):I()},debouncedCartInfoRefreshRequest:de,validCartItemCount:j,parcelisInfo:P,setParcelisUserOptIn:ne=>{Z.current=ne}};return a(go.Provider,{value:We,children:t})},be=()=>cr(go),is=Dt(""),dn=[],un=[],pn=[],hn=[],gn=[],mn=[],fn=[],wn=[],yn=[],bn=[],vn=[],_n=[];let xn,Cn;const fo=({children:t})=>{const e=ke(),r=we(),n=be(),i=ye();i.current=n;const o=ye();o.current=r;const s=(d,l={})=>{let p={cartDetails:i.current.cartDetails,...l};try{switch(d){case"onCartEdit":return dn.length>0&&(dn.forEach(u=>{u(p)}),!0);case"onCowiOpen":return un.length>0&&(un.forEach(u=>{u(p)}),!0);case"onCowiClose":return pn.length>0&&(pn.forEach(u=>{u(p)}),!0);case"onSatcAppear":return hn.length>0&&(hn.forEach(u=>{u(p)}),!0);case"onSatcDisappear":return gn.length>0&&(gn.forEach(u=>{u(p)}),!0);case"onCartCtaClick":return mn.length>0&&(mn.forEach(u=>{u(p)}),!0);case"onSatcCtaClick":return fn.length>0&&(fn.forEach(u=>{u(p)}),!0);case"onUpsellCtaClick":return wn.length>0&&(wn.forEach(u=>{u(p)}),!0);case"onDiscountCodeAdd":return yn.length>0&&(yn.forEach(u=>{u(p)}),!0);case"onDiscountCodeRemove":return bn.length>0&&(bn.forEach(u=>{u(p)}),!0);case"onCartGoalMilestoneAchieve":return vn.length>0&&(vn.forEach(u=>{u(p)}),!0);case"onCartGoalMilestoneLost":return _n.length>0&&(_n.forEach(u=>{u(p)}),!0);case"checkoutOverRide":if(xn){let u=sessionStorage.getItem("corner-discount-applied");return xn(p,u),!0}return!1;case"cartEditOverride":if(!Cn)return p.finalAjaxJobList;try{return Cn(p.cartDetails,p.finalAjaxJobList)||p.finalAjaxJobList}catch(u){return console.log("Error caught from cartEditOverrideFn:",u),p.finalAjaxJobList}}}catch(u){console.log("Error caught from functionExecutor",u)}};W(()=>((async()=>window.isPreviewPage||(console.log("%c Cart Widget Powered By Corner :- www.usecorner.io","background: #8545de; color: #1c1603; padding:4px; font-weight:bolder; border-radius:4px"),window.CornerPerformanceEndTime=performance.now(),window.corner&&!window.corner.sessionData&&(console.log("%c Cornercart is not setup properly","background: #cc294c; color: #ffe6eb; padding:4px; font-weight:bolder; border-radius:4px"),console.log(`%c Please visit Shopify Admin-> Themes -> Customize -> App embeds to turn Cornercart app embed block on.
 Learn more at https://help.cornercart.io/en/article/1ilzmmd/ or chat us and we can help you set it up`,"color: #cc294c;"))))(),()=>{}),[]);let c={...window.corner,on:(d,l)=>{switch(d){case"onCartEdit":dn.push(l);break;case"onCowiOpen":un.push(l);break;case"onCowiClose":pn.push(l);break;case"onSatcAppear":hn.push(l);break;case"onSatcDisappear":gn.push(l);break;case"onCartCtaClick":mn.push(l);break;case"onSatcCtaClick":fn.push(l);break;case"onUpsellCtaClick":wn.push(l);break;case"onDiscountCodeAdd":yn.push(l);break;case"onDiscountCodeRemove":bn.push(l);break;case"onCartGoalMilestoneAchieve":vn.push(l);break;case"onCartGoalMilestoneLost":_n.push(l)}},get:d=>{switch(d){case"cartInfo":return i.current.cartDetails;case"currentProduct":return i.current.currentProduct;case"pageType":return i.current.pageType}},debug:()=>{window.cornerDevMode=!0,((d,l)=>{if(console.clear(),console.log("%c ⚠️ Corner Debug Mode (undefined) ⚠️","font-size:18px; color: #ffc400; padding:4px; font-weight:bolder;"),console.log("%cClick to expand each sections below","font-size:12px",`
`,`
`),d.config.general_config&&(console.groupCollapsed("%c Basic Store Informations ","background: #9c1f34; color: #fad4db; padding:4px; font-weight:bolder; border-radius:4px; font-size:12px"),console.log(`Store URL  ------>  %c ${window.Shopify.shop} `,"background: #f5917d; color: #380b02; font-weight:bolder; border-radius:4px; padding:2px"),console.log(`Current Store language  ------>  %c ${window.Shopify.locale} `,"background: #f5917d; color: #380b02; font-weight:bolder; border-radius:4px; padding:2px"),console.log(`Default Language in corner ------> %c ${d.config.general_config.defaultLanguage} `,"background: #f5917d; color: #380b02; font-weight:bolder; border-radius:4px; padding:2px "),d.config.general_config.cornerCurrencyFormat&&(console.groupCollapsed("Click to view currencies enabled in this store"),Object.keys(d.config.general_config.cornerCurrencyFormat).forEach(p=>{console.log(`${p} ${d.config.general_config.cornerCurrencyFormat[p].isDefault&&"(Default)"}  ----> %c ${d.config.general_config.cornerCurrencyFormat[p].format} `,"font-weight:bolder;")}),console.groupEnd()),console.groupEnd()),d.config.general_config.featureFlag){if(console.groupCollapsed("%c Feature Flags ","background: #552cdb; color: #eae3ff; padding:4px; font-weight:bolder; border-radius:4px; font-size:12px"),d.config.general_config.featureFlag.apps.cornercart){const{cornerwidget:p,stickybar:u,...h}=d.config.general_config.featureFlag.apps.cornercart;console.groupCollapsed("%c Corner Cart ","background: #ab93fa; color: #100630; padding:2px; font-weight:bolder; border-radius:4px; font-size:10px"),console.table(`
`,"----- Basic Features -----"),console.dir(h),console.table(`
`,"----- CornerWidget related Features -----"),console.dir(p),console.table(`
`,"----- Stickybar related Features -----"),console.dir(u),console.groupEnd()}d.config.general_config.featureFlag.apps.offerscorner&&(console.groupCollapsed("%c Offers Corner ","background: #ab93fa; color: #100630; padding:2px; font-weight:bolder; border-radius:4px; font-size:10px"),console.dir(d.config.general_config.featureFlag.apps.offerscorner),console.groupEnd()),d.config.general_config.featureFlag.apps.supportcorner&&(console.groupCollapsed("%c Support Corner ","background: #ab93fa; color: #100630; padding:2px; font-weight:bolder; border-radius:4px; font-size:10px"),console.dir(d.config.general_config.featureFlag.apps.supportcorner),console.groupEnd()),console.groupEnd()}d.config.cornercart&&(console.groupCollapsed("%c Corner Cart App ","background: #029636; color: #e0ffeb; padding:4px; font-weight:bolder; border-radius:4px; font-size:12px"),d.config.cornercart&&(console.groupCollapsed("%c View all user defined Settings ","background: #93fab7; color: #034219; padding:2px; font-weight:bolder; border-radius:4px; font-size:10px"),console.dir(d.config.cornercart),console.groupEnd()),d.config.cornercart&&(console.groupCollapsed("%c View Cart events ","background: #93fab7; color: #034219; padding:2px; font-weight:bolder; border-radius:4px; font-size:10px"),console.dir(l),console.groupEnd()),d.config.cornercart.langConfig&&(console.groupCollapsed("%c Selected Language details ","background: #93fab7; color: #034219; padding:2px; font-weight:bolder; border-radius:4px; font-size:10px"),d.config.cornercart.langConfig.cornerCartWidget&&(console.groupCollapsed("%c Cart Widget ","background: #d1ffe1; color: #034219; padding:2px; font-weight:bolder; border-radius:4px; font-size:10px"),console.table(`
`,"Cart Widget Languages ----->",Object.keys(d.config.cornercart.langConfig.cornerCartWidget)),console.table(`
`,"Cart Widget Language version ----->",d.config.cornercart.langConfig.cornerCartWidget.version),console.groupEnd()),d.config.cornercart.langConfig.stickyAtcWidget&&(console.groupCollapsed("%c Sticky Bar  ","background: #d1ffe1; color: #034219; padding:2px; font-weight:bolder; border-radius:4px; font-size:10px"),console.table(`
`,"Cart Widget Languages ----->",Object.keys(d.config.cornercart.langConfig.stickyAtcWidget)),console.table(`
`,"Cart Widget Language version ----->",d.config.cornercart.langConfig.stickyAtcWidget.version),console.groupEnd()),console.groupEnd(),console.groupEnd()))})(o.current,i.current)},execute:s,do:(d,l)=>{switch(d){case"openCart":e.cowiAlignment.set(r.config.cornercart.cartLauncherConfig.horizontalPositioning),e.isCowiOpened.set(!0),s("onCowiOpen",l),e.viewStateHistory.changeView({type:"goTo",payload:{page:"cart",view:"cart-list",params:""}});break;case"cartAdder":e.cowiOverlay.set({type:"cartItemAdder",params:{productId:l}}),e.cowiAlignment.set(r.config.cornercart.cartLauncherConfig.horizontalPositioning),e.isCowiOpened.set(!e.isCowiOpened.get),s("onCowiOpen"),e.viewStateHistory.changeView({type:"goTo",payload:{page:"cart",view:"cart-list",params:""}});break;case"closeCart":e.isCowiOpened.set(!1),s("onCowiClose");break;case"refreshCart":i.current.debouncedCartInfoRefreshRequest("refresh-cart");break;case"clearCart":Ni();break;case"applyDiscountCode":i.current.requestCartEdit("addDiscountCode",l)}},overrideCheckout:d=>{d&&(xn=d)},overrideCartEdit:d=>{d&&(Cn=d)}};return window.corner=window.corner?{globalVariables:{},...window.corner,...c}:{globalVariables:{},...c},window.corner.cartInfo=n.cartDetails,window.corner.config=r.config,a(is.Provider,{value:s,children:t})},os=({dataProductHandle:t})=>a(fa,{productHandle:t,children:a(fo,{children:a(Ua,{})})}),wo=({page:t,launcherConfig:e,colors:r})=>{const n=s=>{switch(s){case"small":return"12px";case"medium":default:return"14px";case"large":return"17px"}},i=s=>{switch(s){case"small":return"20px";case"medium":default:return"24px";case"large":return"29px"}},o=s=>{switch(s){case"small":return"14px";case"medium":default:return"16px";case"large":return"18px"}};return a("style",{children:[`
        :root {
          --corner-cowi-${t}-accent-bg: ${r.accentBg};
          --corner-cowi-${t}-accent-fg: ${r.accentFg};
          --corner-cowi-${t}-widget-bg: ${r.widgetBg};
          --corner-cowi-${t}-card-bg: ${r.cardBg};
          --corner-cowi-${t}-primary-type: ${r.primaryType};
          --corner-cowi-${t}-secondary-type: ${r.secondaryType};
          --corner-cowi-${t}-outlines: ${r.outlines}; 
        }
        `,`
        .widgets-by-corner.corner-widget .bg-${t}-accent-bg {
          background:var(--corner-cowi-${t}-accent-bg);
        }
        .widgets-by-corner.corner-widget .bg-${t}-widget-bg {
          background:var(--corner-cowi-${t}-widget-bg);
        }
        .widgets-by-corner.corner-widget .bg-${t}-card-bg {
          background:var(--corner-cowi-${t}-card-bg);
        }
        .widgets-by-corner.corner-widget .text-${t}-accent-bg {
          color:var(--corner-cowi-${t}-accent-bg);
        }
        .widgets-by-corner.corner-widget .text-${t}-accent-fg {
          color:var(--corner-cowi-${t}-accent-fg);
        }
        .widgets-by-corner.corner-widget .text-${t}-primary-type {
          color:var(--corner-cowi-${t}-primary-type);
        }
        .widgets-by-corner.corner-widget .text-${t}-secondary-type {
          color:var(--corner-cowi-${t}-secondary-type);
        }

        .widgets-by-corner.corner-widget .border-${t}-outlines {
          border-color:var(--corner-cowi-${t}-outlines);
        }
        .widgets-by-corner.corner-widget .border-${t}-accent-fg {
          border-color:var(--corner-cowi-${t}-accent-fg);
        }

        .animate-hi {
          animation: animate-hi 1s ease ;
        }

        @keyframes animate-hi {
          30% { transform: scale(1.2); }
          40%, 60% { transform: translateY(-10px) scale(1.2); }
          50% { transform: translateY(10px) scale(1.2); }
          70% { transform: translateY(0px) scale(1.2); }
          100% { transform: scale(1); }
        }


        
        `,e.type==="cornerButton"&&`
        /* Common Styles */

        .widgets-by-corner.corner-widget #corner-cowi-${t}-button-launcher-wrapper {
          bottom:${e.verticalPositioning}%;
          z-index:${e.zIndex};
        }

        .widgets-by-corner.corner-widget #corner-cowi-${t}-button-launcher{
          border-radius:${(s=>{switch(s){case"circle":default:return"140px";case"square":return"0px";case"rounded-square":return"15px"}})(e.shape)}
        }


        /* Mobile Styles */

        @media only screen and (max-width: 600px) {
          .widgets-by-corner.corner-widget #corner-cowi-${t}-button-launcher {
           padding:${n(e.size.mobile)}
          }
          .widgets-by-corner.corner-widget #corner-cowi-${t}-button-launcher-icon {
           width:${i(e.size.mobile)};
           height:${i(e.size.mobile)};
          }
          .widgets-by-corner.corner-widget #corner-cowi-${t}-button-launcher-text {
            font-size:${o(e.size.mobile)}
           }
        }

        /* Desktop Styles */

        @media only screen and (min-width: 600px) {
          .widgets-by-corner.corner-widget #corner-cowi-${t}-button-launcher {
           padding:${n(e.size.desktop)}
          }
          .widgets-by-corner.corner-widget #corner-cowi-${t}-button-launcher-icon {
            width:${i(e.size.desktop)};
            height:${i(e.size.desktop)};
           }
          .widgets-by-corner.corner-widget #corner-cowi-${t}-button-launcher-text {
            font-size:${o(e.size.desktop)}
           }
        }
        `,e.type==="sideTab"&&`
        /* Common Styles */

        .widgets-by-corner.corner-widget #corner-cowi-${t}-sidetab-launcher-wrapper {
          bottom:${e.verticalPositioning}%;
          z-index:${e.zIndex};
        }
        .widgets-by-corner.corner-widget #corner-cowi-${t}-sidetab-launcher-text {
          writing-mode:vertical-lr;
        }

        /* Mobile Styles */

        @media only screen and (max-width: 600px) {
          
        }

        /* Desktop Styles */

        @media only screen and (min-width: 600px) {
         
        }
        `]})},as=({page:t})=>{const{pageType:e,eventLog:r,cartDetails:n,validCartItemCount:i}=be(),o=ke(),{config:s}=we(),[c,d]=H(),[l,p]=H(),[u,h]=H(!1);if(W(()=>(d(s.cornercart.cartLauncherConfig),p(s.cornercart.cartConfig.colors),()=>{}),[s.cornercart]),W(()=>{let g;if(s&&r&&r.length>0&&!s.cornercart.cartConfig.general.cartOpenOnAddition){const m=r[r.length-1];m.eventType!=="QTY_INCREASED"&&m.eventType!=="ITEM_ADDED"||(h(!0),g=setTimeout(()=>{h(!1)},1e3))}return()=>{g&&clearTimeout(g)}},[r]),l&&c)return a($e,{children:[a(wo,{page:t,colors:l,launcherConfig:c}),a("div",{id:`corner-cowi-${t}-button-launcher-wrapper`,className:`fixed  ${o.isCowiOpened.get?"opacity-0":"opacity-100"}  ${(()=>{const g=c.visibility;return(g.showOnCollectionPage||e!=="collection")&&(g.showOnProductPage||e!=="product")&&(g.mobile||g.desktop)?g.mobile&&!g.desktop?"block md:hidden ":!g.mobile&&g.desktop?"hidden md:block":void 0:"hidden"})()} focus:outline-none transition-all ${u&&"animate-hi"}  ${c.horizontalPositioning==="right"?"right-0":"left-0"}`,children:a("div",{onClick:()=>{(()=>{switch(c.onClick){case"OPEN_CART":s.cornercart.cartConfig.general.isActive?(o.cowiAlignment.set(c.horizontalPositioning),o.isCowiOpened.set(!o.isCowiOpened.get),window.corner&&window.corner.execute&&window.corner.execute("onCowiOpen"),o.viewStateHistory.changeView({type:"goTo",payload:{page:"cart",view:"cart-list",params:""}})):window.location.href=`${window.Shopify.routes.root}cart`;break;case"CUSTOM":console.log("add custom trigger here ");break;default:window.useSampleData||(window.location.href=c.onClick)}})()},id:`corner-cowi-${t}-button-launcher`,className:`flex relative items-center justify-center mx-10 bg-${t}-accent-bg shadow-lg cursor-pointer hover:scale-105 transition-all`,children:[n&&a("div",{id:`corner-cowi-${t}-button-launcher-number-badge`,className:`absolute border-2 border-cowi-accent-fg border-solid shadow-lg transition-all flex justify-center w-8 h-8 items-center text-center rounded-full  rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-none rotate-45 -mt-5 bg-${t}-accent-bg text-sm font-bold text-${t}-accent-fg ${n.itemCount>0?"opacity-100 -top-[5px]":"top-[25px] opacity-0"}`,children:a("span",{className:" -rotate-45",children:i})}),a("div",{id:`corner-cowi-${t}-button-launcher-icon`,children:a(le,{type:"smiley-rounded-cart",color:l.accentFg})}),c.text&&a("span",{id:`corner-cowi-${t}-button-launcher-text`,className:`ml-2 font-bold text-${t}-accent-fg`,children:c.text})]})})]})},ss=({page:t})=>{const{config:e}=we(),{pageType:r,eventLog:n,cartDetails:i,validCartItemCount:o}=be(),s=ke(),[c,d]=H(),[l,p]=H(),[u,h]=H(!1);if(W(()=>(d(e.cornercart.cartLauncherConfig),p(e.cornercart.cartConfig.colors),()=>{}),[e.cornercart]),W(()=>{let g;if(e&&n&&n.length>0&&!e.cornercart.cartConfig.general.cartOpenOnAddition){const m=n[n.length-1];m.eventType!=="QTY_INCREASED"&&m.eventType!=="ITEM_ADDED"||(h(!0),g=setTimeout(()=>{h(!1)},1e3))}return()=>{g&&clearTimeout(g)}},[n]),l&&c)return a($e,{children:[a(wo,{page:t,colors:l,launcherConfig:c}),a("div",{onClick:()=>{(()=>{switch(c.onClick){case"OPEN_CART":e.cornercart.cartConfig.general.isActive?(s.cowiAlignment.set(c.horizontalPositioning),s.isCowiOpened.set(!s.isCowiOpened.get),window.corner&&window.corner.execute&&window.corner.execute("onCowiOpen"),s.viewStateHistory.changeView({type:"goTo",payload:{page:"cart",view:"cart-list",params:""}})):window.location.href="/cart";break;case"CUSTOM":console.log("add custom trigger here ");break;default:window.useSampleData||(window.location.href=c.onClick)}})()},id:`corner-cowi-${t}-sidetab-launcher-wrapper`,className:`fixed transition-all ${u&&"animate-hi"} ${s.isCowiOpened.get?"opacity-0":"opacity-100"}   ${(()=>{const g=c.visibility;return(g.showOnCollectionPage||r!=="collection")&&(g.showOnProductPage||r!=="product")&&(g.mobile||g.desktop)?g.mobile&&!g.desktop?" block md:hidden":!g.mobile&&g.desktop?"hidden md:block":void 0:"hidden"})()} ${c.horizontalPositioning==="right"?"right-0":"left-0"}`,children:a("div",{id:`corner-cowi-${t}-sidetab-launcher`,className:`flex items-center justify-center py-3 px-2 flex-col relative bg-${t}-accent-bg shadow-lg cursor-pointer  transition-all ${c.horizontalPositioning==="right"?"rounded-l-lg hover:pr-3":"rounded-r-lg  hover:pl-3"}`,children:[i&&i.itemCount>0&&a("div",{id:`corner-cowi-${t}-sidetab-launcher-number-badge`,className:" flex justify-center w-7 h-7 items-center text-center shadow-md  rounded-full bg-red-500 text-xs font-bold text-white mb-2",children:a("span",{children:o})}),c.text&&a("span",{id:`corner-cowi-${t}-sidetab-launcher-text`,className:`font-bold text-lg text-${t}-accent-fg rotate-180 mb-2`,children:c.text}),a("div",{id:`corner-cowi-${t}-sidetab-launcher-icon`,className:"w-6 h-6",children:a(le,{type:"smiley-rounded-cart",color:l.accentFg})})]})})]})},yo=({message:t,textColor:e,bgColor:r,index:n,alignmentFlag:i})=>{const{cartDetails:o}=be();let s=[{placeholder:"items_subtotal_price",value:o.items_subtotal_price,valueType:"currency"},{placeholder:"itemCount",value:o.itemCount},{placeholder:"currency",value:o.currency},{placeholder:"total_discount",value:o.total_discount,valueType:"currency"},{placeholder:"original_total_price",value:o.original_total_price,valueType:"currency"}];return a("div",{className:"w-full h-full",children:[a("style",{children:`
        #corner-cowi-message-banner-item-${n} *{
          color:${e} !important;
        }
        `}),a("div",{id:`corner-cowi-message-banner-item-${n}`,className:"corner-cowi-message-banner-item text-center py-4 text-sm border-b border-solid border-cowi-outlines h-full",style:{background:`${r}`,padding:"1rem",fontSize:"1.5rem"},children:(()=>{let c,d=window.Shopify.locale;return c=t.map(l=>l.language).includes(d)?t.find(l=>l.language===d):t[0],Le(c.content,s)})()})]})},bo=({campaignId:t,message:e,index:r,timerType:n,endTimeData:i,updateStatusOfRunningTimers:o,startTimeFromIDB:s,attributes:c,postTimerAction:d,timerStatus:l})=>{const[p,u]=H({days:null,hours:null,minutes:null,seconds:null}),[h,g]=H(!1);let m;const w=x=>{let _=x-Date.now(),C=Math.floor(_/864e5),v=Math.floor(_/36e5%24),L=Math.floor(_/6e4%60),k=Math.floor(_/1e3%60);if(u({days:C<10?"0"+C:C,hours:v<10?"0"+v:v,minutes:L<10?"0"+L:L,seconds:k<10?"0"+k:k}),_<0)return g(!0),void clearInterval(m)};W(()=>{if(l==="exhausted")g(!0);else if(l==="running"){let x;n==="dateTimer"?x=i.datetimer:n==="sessionTimer"&&(x=1e3*(3600*i.sessiontimer.hours+60*i.sessiontimer.minutes+i.sessiontimer.seconds)+s.startTime),w(x),m=setInterval(()=>{w(x)},1e3)}return()=>{clearInterval(m)}},[]),h&&l==="running"&&(d==="hideMessage"||d==="showMessage")&&o(t,"exhausted",d);const b=x=>{const _=window.Shopify.locale,C=e.map(k=>k.language);let v,L=[{placeholder:"timeRemaining",value:""}];return p.days==0&&p.hours==0?(L[0].value=`${p.minutes}:${p.seconds}`,L=[...L,{placeholder:"minutesRemaining",value:p.minutes},{placeholder:"secondsRemaining",value:p.seconds}]):p.days==0?(L[0].value=`${p.hours}:${p.minutes}:${p.seconds}`,L=[...L,{placeholder:"hoursRemaining",value:p.hours},{placeholder:"minutesRemaining",value:p.minutes},{placeholder:"secondsRemaining",value:p.seconds}]):(L[0].value=`${p.days}:${p.hours}:${p.minutes}:${p.seconds}`,L=[...L,{placeholder:"daysRemaining",value:p.days},{placeholder:"hoursRemaining",value:p.hours},{placeholder:"minutesRemaining",value:p.minutes},{placeholder:"secondsRemaining",value:p.seconds}]),v=C.includes(_)?e.find(k=>k.language===_):e[0],x==="postCartTimerMessage"?a("span",{dangerouslySetInnerHTML:{__html:v.value.postCartTimerMessage}}):x==="preCartTimerMessage"?Le(v.value.preCartTimerMessage,L):void 0};return a("div",{className:"w-full h-full",children:[a("style",{children:`
        #corner-cowi-timer-message-banner-item-${r+t} *{
          color: ${h?c.postTextColor:c.preTextColor} !important;
        }
        `}),a("div",{id:`corner-cowi-timer-message-banner-item-${r+t}`,className:"corner-cowi-timer-message-banner-item text-center text-sm border-b border-solid border-cowi-outlines flex items-center justify-center h-full tabular-nums w-full",style:{background:`${h?c.postBgColor:c.preBgColor}`,padding:"1rem",fontSize:"1.5rem"},children:b(h?"postCartTimerMessage":"preCartTimerMessage")})]})};var cs=typeof document<"u"?function(t,e){var r=jt(ut++,4);!Pe.__s&&Hr(r.__H,e)&&(r.__=t,r.u=e,Ie.__h.push(r))}:W,$n=(t,e)=>{const r=vo(t);if(!e)return r;const n=vo(e);return{left:r.left-n.left,top:r.top-n.top,right:r.right-n.left,bottom:r.bottom-n.top,width:r.width,height:r.height}},vo=t=>{const e=t.getBoundingClientRect();let r=0,n=0,i=t.parentElement;for(;i;)r+=i.scrollLeft,n+=i.scrollTop,i=i.parentElement;const o=e.left+r,s=e.top+n;return{left:o,top:s,right:o+e.width,bottom:s+e.height,width:e.width,height:e.height}},kn=(t,e,r)=>{const n=((s,c)=>{const d=window.getComputedStyle(s).getPropertyValue(`scroll-padding-${c}`)||"0px";if(d==="auto")return 0;const l=`Unsupported scroll padding value, expected <length> or <percentage> value, received ${d}`;if(d.endsWith("px")){const p=parseInt(d);return It(!Number.isNaN(p),l),p}if(d.endsWith("%")){const p=parseInt(d);return It(!Number.isNaN(p),l),s.clientWidth/100*p}throw new _o(l)})(t,r),i=((s,c)=>{const d=window.getComputedStyle(s).getPropertyValue(`scroll-margin-${c}`)||"0px",l=`Unsupported scroll margin value, expected <length> value, received ${d}`;It(d.endsWith("px"),l);const p=parseInt(d);return It(!Number.isNaN(p),l),p})(e,r),o=$n(e,e.parentElement);return Math.min(n+i,o[r])};function It(t,e){if(!t)throw new _o(e)}var _o=class extends Error{constructor(t){super(`[react-snap-carousel]: ${t}`)}};const Tt=({item:t,data:e,id:r,enableAutoplay:n=!1,autoplayInterval:i=5e3,controllerType:o="swipeIndicators",buttonColor:s="rgb(25,35,55)",startingIndex:c=0})=>{const{scrollRef:d,next:l,prev:p,goTo:u,pages:h,activePageIndex:g,snapPointIndexes:m,refresh:w}=(({axis:_="x",initialPages:C=[]}={})=>{const v=_==="x"?"width":"height",L=_==="x"?"scrollWidth":"scrollHeight",k=_==="x"?"clientWidth":"clientHeight",A=_==="x"?"left":"top",j=_==="x"?"right":"bottom",$=_==="x"?"scrollLeft":"scrollTop",[P,J]=H(null),[{pages:B,activePageIndex:N},Q]=H({pages:C,activePageIndex:0}),Z=qe(q=>{if(!P)return;if(Math.floor(P[L]-P[$])<=P[k])return void Q({pages:q,activePageIndex:q.length-1});const M=Array.from(P.children),y=P.getBoundingClientRect(),f=q.map(te=>{const pe=te[0],me=M[pe];It(me instanceof HTMLElement,"Expected HTMLElement");const ee=kn(P,me,A),he=me.getBoundingClientRect()[A]-y[A]-ee;return Math.abs(he)}),F=Math.min(...f),V=f.indexOf(F);Q({pages:q,activePageIndex:V})},[P,k,A,L,$]),U=qe(()=>{if(!P)return;const q=Array.from(P.children),M=P.getBoundingClientRect();let y;const f=q.reduce((F,V,te)=>{It(V instanceof HTMLElement,"Expected HTMLElement");const pe=F[F.length-1],me=$n(V,V.parentElement);if(!pe||V.dataset.shouldSnap==="true"||me[j]-y>Math.ceil(M[v])){F.push([te]);const ee=kn(P,V,A);y=me[A]-ee}else pe.push(te);return F},[]);Z(f)},[Z,P,v,j,A]);cs(()=>{U()},[U]),W(()=>{const q=()=>{U()};return window.addEventListener("resize",q),window.addEventListener("orientationchange",q),()=>{window.removeEventListener("resize",q),window.removeEventListener("orientationchange",q)}},[U]),W(()=>{if(!P)return;const q=()=>{Z(B)};return P.addEventListener("scroll",q),()=>{P.removeEventListener("scroll",q)}},[Z,B,P]);const re=(q,M)=>{if(!P)return;const y=B[q];if(!y)return;const f=Array.from(P.children)[y[0]];if(!(f instanceof HTMLElement))return;const F=kn(P,f,A),V=M?.behavior||"smooth";P.scrollTo({behavior:V,[A]:$n(f,f.parentElement)[A]-F})},Y=He(()=>new Set(B.map(q=>q[0])),[B]);return{hasPrevPage:N>0,hasNextPage:N<B.length-1,prev:q=>{re(N-1,q)},next:q=>{re(N+1,q)},goTo:re,refresh:U,pages:B,activePageIndex:N,snapPointIndexes:Y,scrollRef:J}})(),b=e.length,x=({isSelected:_})=>a("div",{className:`h-1 mx-1 bg-cowi-secondary-bg rounded-full ${_?"w-3":"w-1"} transition-all`,children:" "});return W(()=>{let _;return n&&(_=setTimeout(()=>{g===h.length-1?u(0):u(g+1)},i)),()=>clearTimeout(_)},[g,h,n]),W(()=>{w(),u(c)},[e]),a("div",{id:`corner-cowi-carousel-${r}`,className:"relative w-full",children:a("div",{className:"w-full h-full",children:[a("div",{id:`corner-cowi-${r}-parent-wrapper`,className:"relative w-full h-full flex justify-between items-center",children:[a("div",{id:`corner-cowi-${r}-items-wrapper`,className:"grow order-2 overflow-hidden",children:a("div",{className:"corner-carousel flex overflow-x-auto",style:{scrollSnapType:"x mandatory"},ref:d,children:e.map((_,C)=>a("div",{className:"flex-shrink-0 w-full overflow-hidden",style:{scrollSnapAlign:m.has(C)?"start":""},children:t(_,C)},C))})}),(()=>{switch(o){case"none":return null;case"swipeIndicators":return a($e,{children:[b>1&&a("button",{id:`corner-cowi-${r}-slider-left-btn`,"aria-description":"move slider left",className:`${g===0&&"invisible"} absolute bg-transparent left-0 w-3 h-3 ml-4  cursor-pointer decoration-none`,onClick:_=>{p()},children:a(le,{type:"caret",color:s})}),b>1&&a("button",{id:`corner-cowi-${r}-slider-right-btn`,"aria-description":"move slider right",className:`${g===b-1&&"invisible"} absolute bg-transparent right-0 w-3 h-3 mr-4  cursor-pointer decoration-none`,onClick:_=>{l()},children:a(le,{type:"caret",className:"rotate-180",color:s})})]});case"bigButtons":return a($e,{children:[b>1&&a("button",{id:`corner-cowi-${r}-slider-left-btn`,"aria-label":`corner-cowi-${r}-slider-left-btn`,"aria-description":"move slider left",className:` ${g===0&&"invisible"} mx-1 order-1 p-1 bg-cowi-card-bg cursor-pointer rounded-lg flex shrink-0 items-center justify-center border border-cowi-outlines border-solid pointer-events-auto`,onClick:_=>{p()},children:a("span",{className:"w-3 h-3",children:a(le,{type:"caret",color:s})})}),b>1&&a("button",{id:`corner-cowi-${r}-slider-right-btn`,"aria-description":"move slider right",className:`  ${g===b-1&&"invisible"} mx-1  order-3 p-1 bg-cowi-card-bg cursor-pointer rounded-lg flex shrink-0 items-center justify-center border border-cowi-outlines border-solid pointer-events-auto`,onClick:_=>{l()},children:a("span",{className:"w-3 h-3 rotate-180 text-cowi-secondary-type",children:a(le,{type:"caret",color:s})})})]})}})()]}),b>1&&o==="bigButtons"&&a("div",{id:`corner-cowi-carousel-${r}-dots-wrapper`,className:"flex items-center justify-center",children:e.map((_,C)=>a(x,{isSelected:C===g},C))})]})})};function ls({onTimerExhausted:t,...e}){const r=ye(null);return W(()=>{const n=r.current;n&&Object.assign(n,e)},[JSON.stringify(e)]),W(()=>{const n=r.current;if(n)return n.addEventListener("corner-cart-timer-exhausted",i),()=>{n.removeEventListener("corner-cart-timer-exhausted",i)};function i(o){typeof t=="function"&&t(o.detail)}},[t]),a("corner-cart-timer-container",{ref:r})}function xo(t,e){const r=t?.config?.value?.type,n=t?.config?.value,i=t?.campaignid,o=e?.get?.(i);if(r==="dateTimer")return n?.datetimer||null;if(r==="sessionTimer"){const s=n?.sessiontimer||{},c=o?.startTime;return!c||isNaN(c)?null:1e3*(3600*s.hours+60*s.minutes+s.seconds)+c}return null}function Co(t,e){return Array.isArray(t)&&t.length!==0?t.find(r=>r.language===e)||t[0]:null}const ds=({activeCartTimers:t,updateStatusOfRunningTimers:e,startTimeFromIDB:r,timerStatus:n})=>{const[i,o]=H(t.length);return W(()=>{o(t.length)},[t]),a($e,{children:a(us,{activeCartTimers:t,updateStatusOfRunningTimers:e,startTimeFromIDB:r,timerStatus:n})},i)},us=({activeCartTimers:t,updateStatusOfRunningTimers:e,startTimeFromIDB:r,timerStatus:n})=>{const i=ke(),{config:o,currentLanguage:s}=we(),{cartDetails:c}=be(),d=o?.general_config?.featureFlag?.apps?.cornercart?.use_web_components||!1,l=He(()=>(function(u,h,g){if(!Array.isArray(u))return[];const m=window.Shopify?.locale||"en";return u.map(w=>{const b=w?.campaignid,x=w?.config?.attributes||{},_=Co(w.content,m);return{id:String(b),endTime:xo(w,h),status:g?.[b]||null,displaySurfaces:w?.config?.displaySurfaces||null,message:_?.value?.preCartTimerMessage||"",postMessage:_?.value?.postCartTimerMessage||"",textColor:x.preTextColor||"",bgColor:x.preBgColor||"",postTextColor:x.postTextColor||"",postBgColor:x.postBgColor||"",postTimerAction:w?.config?.postTimerAction||""}})})(t,r,n),[t,r,n]),p=qe(u=>{const{timerId:h,postTimerAction:g}=u||{};typeof e=="function"&&e(h,"exhausted",g)},[e]);return a($e,{children:[(!d||window.CornerWebComponentsAPI?.shouldShowBoth)&&a(Tt,{id:"corner-active-cart-timer-slider",slidesToShow:1,slidesToScroll:1,enableAutoplay:i.isCowiOpened.get,autoplayInterval:5e3,transitionTimingFunction:"linear",data:t,item:(u,h)=>{if(!u.config.displaySurfaces||u.config.displaySurfaces.includes("cart"))return a(bo,{index:h,campaignId:u.campaignid,message:u.content,timerType:u.config.value.type,endTimeData:u.config.value,updateStatusOfRunningTimers:e,startTimeFromIDB:r.get(u.campaignid),attributes:u.config.attributes,postTimerAction:u.config.postTimerAction,timerStatus:n[u.campaignid]},u.campaignid)}}),(d||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&a(ls,{timers:l,onTimerExhausted:p,autoScroll:i.isCowiOpened.get,itemsPerPage:1,autoScrollInterval:5e3,globalContext:{config:o,currentLanguage:s,cart:c}})]})},$o=()=>{const{cartTimers:t}=be(),{cartDetails:e}=be(),[r,n]=H(new Map),[i,o]=H([]),[s,c]=H({}),[d,l]=H(!1),p=m=>{let w=[],b={},x=new Map;t.map(_=>{const C=_.campaignid;if(m.has(C)){let v;_.config.value.type==="dateTimer"?(v=_.config.value.datetimer,m.set(C,{startTime:NaN})):_.config.value.type==="sessionTimer"&&(document.cookie.split(";").find(L=>L.trim().startsWith("cart="))&&isNaN(m.get(C).startTime)&&(b[C]="waiting"),v=m.get(C).startTime+1e3*(3600*_.config.value.sessiontimer.hours+60*_.config.value.sessiontimer.minutes+_.config.value.sessiontimer.seconds)),Date.now()<v?(w.push(_),b[C]="running"):_.config.postTimerAction=="showMessage"&&Date.now()>v&&(w.push(_),b[C]="exhausted"),x.set(C,{startTime:m.get(C).startTime})}else _.config.value.type==="dateTimer"?(x.set(C,{startTime:NaN}),b[C]="running",w.push(_)):_.config.value.type==="sessionTimer"&&(x.set(C,{startTime:NaN}),b[C]="waiting");n(x),c(b),Fe("corner-cart-timers",()=>({token:e.token,timers:x}))}),o([...i,...w])},u=(m,w)=>{let b=s;for(let x of m)b[x]=w;c(b)},h=(m,w,b)=>{let x=s;x[m]=w,w==="exhausted"&&b==="hideMessage"&&o(i.filter(_=>_.campaignid!==m)),c(x)},g=async(m,w)=>{let b=new Map(r);for(let x of m)b.set(x,{startTime:w});await n(b),await Fe("corner-cart-timers",()=>({token:e.token,timers:b}))};return W(()=>{(async()=>{const m=await it("corner-cart-timers");m&&m.timers.size>0&&m.token===e.token?p(m.timers):(()=>{let w=new Map,b={},x=[];t.map(_=>{w.set(_.campaignid,{startTime:NaN}),_.config.value.type==="dateTimer"?(b[_.campaignid]="running",x.push(_)):_.config.value.type==="sessionTimer"&&(b[_.campaignid]="waiting")}),o([...x]),c(b),n(w),at("corner-cart-timers",{token:e.token,timers:w})})(),l(!0)})()},[]),W(()=>{d&&e.itemCount>0&&(()=>{let m=[],w=[];t.map(b=>{b.config.value.type==="sessionTimer"&&r.size>0&&s[b.campaignid]==="waiting"&&(w.push(b.campaignid),m.push(b))}),w&&(g(w,Date.now()),u(w,"running"),o([...i,...m]))})()},[d,e.itemCount]),W(()=>{(async m=>{const w=await it("corner-cart-timers");w&&w.token&&Fe("corner-cart-timers",()=>({token:m,timers:w.timers}))})(e.token)},[e.token]),{activeCartTimers:i,updateStatusOfRunningTimers:h,startTimeFromIDB:r,timerStatus:s,ActiveCartTimerSliderComponent:a("div",{id:"corner-cowi-timer-message-banner-wrapper",className:"w-full",children:i.length>0&&a(ds,{activeCartTimers:i,updateStatusOfRunningTimers:h,startTimeFromIDB:r,timerStatus:s})})}};function ps({onTimerExhausted:t,...e}){const r=ye(null);return W(()=>{const n=r.current;n&&Object.assign(n,e)},[JSON.stringify(e)]),W(()=>{const n=r.current;if(!n||typeof t!="function")return;const i=o=>t(o.detail);return n.addEventListener("corner-cart-timer-exhausted",i),()=>n.removeEventListener("corner-cart-timer-exhausted",i)},[t]),a("corner-site-announcement-timer-container",{ref:r})}const hs=({cartAnnouncements:t})=>{const{cartDetails:e}=be(),{activeCartTimers:r,updateStatusOfRunningTimers:n,startTimeFromIDB:i,timerStatus:o}=$o(),[s,c]=H([]),[d,l]=H(s.length);return W(()=>{if(r.length>0){let p=((u,h)=>{let g=[...u],m=[...h];return g=g.concat(m),g=g.sort((w,b)=>b.priority-w.priority),g})(t,r);c(p.filter(u=>u.config.displaySurfaces&&u.config.displaySurfaces.includes("siteTop")))}else c(t.filter(p=>p.config.displaySurfaces&&p.config.displaySurfaces.includes("siteTop")))},[r,t]),W(()=>{l(s.length)},[s]),a($e,{children:a(gs,{tempCartAnnouncements:s,updateStatusOfRunningTimers:n,startTimeFromIDB:i,timerStatus:o,cartAnnouncements:t,cartDetails:e})},d)},gs=({tempCartAnnouncements:t,updateStatusOfRunningTimers:e,startTimeFromIDB:r,timerStatus:n,cartAnnouncements:i,cartDetails:o})=>{const{config:s,currentLanguage:c}=we(),d=i.length>0?i[0].attributes.textColor:"",l=s?.general_config?.featureFlag?.apps?.cornercart?.use_web_components||!1,p=He(()=>(function(h,g,m){if(!Array.isArray(h))return[];const w=window.Shopify?.locale||"en";return h.map(b=>{if(b.type==="cart_announcement")return{type:"cart_announcement",id:b.id,message:b.message,textColor:b.attributes?.textColor||"#000",bgColor:b.attributes?.bgColor||"#fff"};if(b.type==="cart_timer"){const x=b.campaignid,_=b.config?.attributes||{},C=Co(b.content,w);return{type:"cart_timer",id:String(x),endTime:xo(b,g),status:m?.[x]||null,message:C?.value?.preCartTimerMessage||"",postMessage:C?.value?.postCartTimerMessage||"",textColor:_.preTextColor||"",bgColor:_.preBgColor||"",postTextColor:_.postTextColor||"",postBgColor:_.postBgColor||"",postTimerAction:b.config?.postTimerAction||""}}return b})})(t,r,n),[t,r,n]),u=qe(h=>{const{timerId:g,postTimerAction:m}=h||{};typeof e=="function"&&e(g,"exhausted",m)},[e]);return a("div",{className:"widgets-by-corner corner-widget",children:t&&a($e,{children:[(!l||window.CornerWebComponentsAPI?.shouldShowBoth)&&a(Tt,{id:"corner-site-top-bar-slider",slidesToShow:1,slidesToScroll:1,enableAutoplay:!0,autoplayInterval:5e3,transitionTimingFunction:"linear",data:t,item:(h,g)=>h.type==="cart_announcement"?a(yo,{message:h.message,textColor:h.attributes.textColor,bgColor:h.attributes.bgColor,index:g,buttonColors:d,alignmentFlag:!1},h.id):h.type==="cart_timer"?a(bo,{index:g,campaignId:h.campaignid,message:h.content,timerType:h.config.value.type,endTimeData:h.config.value,updateStatusOfRunningTimers:e,startTimeFromIDB:r.get(h.campaignid),attributes:h.config.attributes,postTimerAction:h.config.postTimerAction,timerStatus:n[h.campaignid]},h.campaignid):void 0}),(l||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&a(ps,{items:p,cart:o,onTimerExhausted:u,autoScroll:!0,autoScrollInterval:5e3,globalContext:{config:s,currentLanguage:c,cart:o}})]})})},ze=({id:t,className:e,children:r,translucent:n})=>a("div",{id:t,className:` rounded-xl shadow ${n?"bg-cowi-translucent-card-bg":"bg-cowi-card-bg"} ${e}`,children:r}),vr=({title:t,onClose:e,astericks:r})=>{const{config:n}=we(),i=t.replace(/&#39;/g,"'")+(r?"*":"");return a("div",{className:"text-xs mr-1 bg-cowi-secondary-bg px-2 py-1 my-1 rounded-md flex items-center text-cowi-primary-type font-bold",children:[a("span",{className:"font-bold w-5 h-5 mr-1",children:a(le,{type:"tag",color:n.cornercart.cartConfig.colors.primaryType})}),a("span",{children:a("span",{dangerouslySetInnerHTML:{__html:i}})}),e&&a("button",{"aria-description":"close tag","aria-label":"close-tag",onClick:e,className:"font-bold w-2 h-2 ml-2 cursor-pointer",children:a(le,{type:"close-cross",color:n.cornercart.cartConfig.colors.secondaryType})})]})};function ko({message:t,config:e}){let r="";const{bgColor:n,textColor:i,id:o,classes:s,wrapperClasses:c}=e||{bgColor:null,textColor:null,id:Math.random(),classes:"",wrapperClasses:"px-4"},d=`${o}-corner-cowi-highlight-content`;return s&&(r+=` ${s} `),a("div",{id:o,style:{backgroundColor:n,color:i},className:`py-1.5 corner-cowi-highlight-tag-wrapper text-cowi-primary-type bg-cowi-secondary-bg rounded-md text-sm ${c||""}`,children:[a("style",{children:`#${d} * {
            color: ${i||"inherit"} !important;
            width: 100%;
            height: 100%;
          }
          #${d} span {
            line-height: 1.5;
          }`}),a("div",{id:d,className:`corner-cowi-highlight-tag-content flex w-full items-center ${r}`,children:t})]})}function Sn({itemIndex:t,lineItemMessages:e,itemWrapperClasses:r}){if(!Array.isArray(e)||e.length===0)return null;const n=`corner-cowi-line-item-messages-container-${t}`,i=c=>{if(!Array.isArray(c)||c.length===0)return null;let d,l=window.Shopify.locale;return d=c.map(p=>p.language).includes(l)?c.find(p=>p.language===l):c[0],a("div",{dangerouslySetInnerHTML:{__html:d.content}})},o=(c,d)=>c&&c.config&&c.config[d]?c.config[d]:null,s=(c,d,l)=>{const p=o(c,"style");return p?p[d]:l};return a("div",{className:`relative ${n}`,id:n,children:e.map((c,d)=>c&&c.type==="line_item_messages"?a("div",{className:r||"",children:a(ko,{message:i(c.message),config:{id:`corner-cowi-line-item-message-${t}-campaign-${c.campaign_id}`,bgColor:s(c,"bgColor","transparent"),textColor:s(c,"textColor","black"),wrapperClasses:o(c,"messagePosition")&&o(c,"messagePosition")==="inside"?"px-2 inline-block mt-1 mr-1":"w-full px-4"}},c.campaign_id||d)}):c.content&&c.wordMap&&a("div",{className:r||"",children:a(ko,{message:Le(c.content,c.wordMap),config:{id:`corner-cowi-line-item-message-${t}-campaign-${c.campaign_id}`,wrapperClasses:"w-full px-4"}},d)}))})}const ms=(t,e,r)=>((n,i)=>{if(!i)return!1;try{return Ne.apply(i,n)}catch(o){return console.error("Error in hasApplicableCampaign:",o),!1}})(t,r.target_product)&&((n,i)=>{if(!i)return!1;try{return Ne.apply(i,n)}catch(o){return console.error("Error in checkCamaignsCartRule:",o),!1}})(e,r.cart_rule),fs=(t,e,r)=>{let n=[];if(!e)return n;if(e.hasComponents&&e.properties&&e.properties._cornerBundleId&&r&&e.cost){const i=e.properties._cornerBundleId.match(/VQBD_(\d+)_/),o=e.properties._cornerBundleId.match(/VQBD_\d+_([A-Z]+)/);if(i&&i[1]&&o&&o[1]){const s=parseInt(i[1]),c=o[1],d=r.find(h=>h.campaignid===s),{content:l,wordMap:p,type:u}=((h,g,m,w)=>{let b=h,x=null;if(!m||!m.config||!m.config.tiers)return{content:x,wordMap:b};const _=m.config.tiers.sort((k,A)=>k.ordering-A.ordering),C=_.findIndex(k=>k.tierId===w),v=_[C+1];if(C===-1||!v||!v.content)return{content:x,wordMap:b};if(g.properties._cornerBundleQty&&v.requiredQuantity-parseInt(g.properties._cornerBundleQty)>0){const k=v.requiredQuantity-parseInt(g.properties._cornerBundleQty),A=v.discountType==="amount"?100*v.discountValue:`${v.discountValue}%`;b=[...b,{placeholder:"target",value:k},{placeholder:"discount",value:A,valueType:v.discountType==="amount"?"currency":"percentage"}]}const L=v.content[window.Shopify.locale]||v.content[Object.keys(v.content)[0]];return x=L&&L.bundleNudgeText?L.bundleNudgeText:null,{content:x,wordMap:b,type:m.type,campaign_id:m.campaign_id,config:{messagePosition:"below"}}})(t,e,d,c);l&&n.push({content:l,wordMap:p,type:u})}}return n};function ws({onCartAction:t,...e}){const r=ye(null);return W(()=>{const n=r.current;if(n)return Object.assign(n,e),n.addEventListener("cart-action",i),()=>{n.removeEventListener("cart-action",i)};function i(o){typeof t=="function"?t(o):console.warn("onCartAction is not a function:",t)}},[e,t]),a("corner-cart-line-item",{ref:r})}function ys({onCartAction:t,...e}){const r=ye(null);return W(()=>{const n=r.current;if(n)return Object.assign(n,e),n.addEventListener("cart-action",i),()=>{n.removeEventListener("cart-action",i)};function i(o){typeof t=="function"?t(o):console.warn("onCartAction is not a function:",t)}},[e,t]),a("corner-cart-line-free-item",{ref:r})}function bs({onCartAction:t,...e}){const r=ye(null);return W(()=>{const n=r.current;if(n)return Object.assign(n,e),n.addEventListener("cart-action",i),()=>{n.removeEventListener("cart-action",i)};function i(o){typeof t=="function"?t(o):console.warn("onCartAction is not a function:",t)}},[e,t]),a("corner-cart-line-bundle-item",{ref:r})}function So(t){const e=ye(null);return W(()=>{e.current&&(e.current.lineItemMessages=t.lineItemMessages,e.current.index=t.index,e.current.wrapperClasses=t.wrapperClasses,e.current.globalContext=t.globalContext)},[t.lineItemMessages,t.index,t.wrapperClasses,t.globalContext]),a("corner-cart-line-messages",{ref:e})}function vs({onCartAction:t,...e}){const r=ye(null);return W(()=>{r.current&&(r.current.discounts=e.discounts,r.current.index=e.index,r.current.displayClose=e.displayClose,r.current.globalContext=e.globalContext)},[e.discounts,e.index,e.displayClose,e.globalContext]),a("corner-cart-line-discounts",{ref:r})}function _s({onSellingPlanChange:t,...e}){const r=ye(null);return W(()=>{r.current&&(r.current.index=e.index,r.current.text=e.text,r.current.sellingPlanId=e.sellingPlanId,r.current.id=e.id,r.current.quantity=e.quantity,r.current.globalContext=e.globalContext)},[e.index,e.text,e.sellingPlanId,e.id,e.quantity,e.globalContext]),W(()=>{const n=r.current;if(n&&typeof t=="function")return n.addEventListener("corner-cart-subscription-upgrade-click",t),()=>{n.removeEventListener("corner-cart-subscription-upgrade-click",t)}},[t]),a("corner-cart-subscription-upgrade",{ref:r})}function xs({onSellingPlanChange:t,...e}){const r=ye(null);return W(()=>{r.current&&(r.current.index=e.index,r.current.sellingPlanOptions=e.sellingPlanOptions,r.current.selectedPlanId=e.selectedPlanId,r.current.hasOnetimePurchasePlan=e.hasOnetimePurchasePlan,r.current.onetimePurchaseLabel=e.onetimePurchaseLabel,r.current.id=e.id,r.current.quantity=e.quantity,r.current.globalContext=e.globalContext)},[e.index,e.sellingPlanOptions,e.selectedPlanId,e.hasOnetimePurchasePlan,e.onetimePurchaseLabel,e.id,e.quantity,e.globalContext]),W(()=>{const n=r.current;if(n&&typeof t=="function")return n.addEventListener("corner-cart-selling-plan-select-change",t),()=>{n.removeEventListener("corner-cart-selling-plan-select-change",t)}},[t]),a("corner-cart-selling-plan-select",{ref:r})}const Cs=({index:t,item:e})=>{const{config:r,currentLanguage:n,campaigns:i}=we(),{loadingFlag:o,cartDetails:s,requestCartEdit:c,lineItemMessageCampaigns:d,cartBasedValues:l,setParcelisUserOptIn:p}=be(),u=ke(),[h,g]=H(0),[m,w]=H(0),[b,x]=H(e.quantity),_=r.cornercart.cartConfig?.subscriptionUpgrade?.isActive,C=(e.sellingPlans||[]).map(X=>({id:X.sellingPlan.id,name:X.sellingPlan.name})),v=e.sellingPlans&&e.sellingPlans.length>0&&!e.requiresSellingPlan,L=C.find(X=>X.name===e.sellingPlanAllocation?.selling_plan?.name)?.id||"",k=e.properties,A=s.cartDiscounts.map(X=>X.title);let j=window.cornerDevMode?e.discounts:e.discounts.filter(X=>X.title[0]!==":"&&!A.includes(X.title));const $=e.hasComponents,P=e.hasComponents&&e.properties&&e.properties._cornerBundleId||e.hasComponents&&e.tags&&e.tags.includes("corner-bundle-editable"),J=e.hasComponents&&e.properties&&e.properties._cornerBundleId&&e.properties._cornerBundleId.includes("VQBD"),B=He(()=>!e.isLoading&&(e.productType==="free_product"||!e.cost||e.cost.totalAmount===0),[e]),N=e.tags.includes("corner-hide-qty")||e.discounts&&e.discounts.some(X=>X.title===":GIFT")||e.productType==="free_product",Q=["shipping_interval_unit_type","shipping_interval_frequency"],Z=$?e.title:e.productTitle,U=He(()=>e.discounts.length>0?e.discounts.reduce((X,ae)=>A.includes(ae.title)?X+ae.amount:X,0):0,[e,A]),re=()=>B?n.cart.free_text:e.isLoading&&e.discounts.length===0&&e.cost?_e(e.cost.amountPerQuantity*e.quantity,r.general_config.cornerCurrencyFormat):e.cost?_e(m,r.general_config.cornerCurrencyFormat):void 0,Y=He(()=>[{placeholder:"product_title",value:Z},{placeholder:"compare_at_price",value:_e(e.compareAtPrice*e.quantity,r.general_config.cornerCurrencyFormat,!0)},{placeholder:"final_price",value:re()}],[e]),q=He(()=>((X,ae,de)=>{const ce={above:[],below:[],inside:[]};return ae&&ae.length&&ae.forEach(fe=>{fe&&ms(X,de,fe)&&ce[fe.config.messagePosition||"below"].push(fe)}),ce})(e,d,l),[e,d,l]),M=He(()=>fs(Y,e,i.volumeBundleCampaigns),[e,Y]),y=He(()=>((X,ae)=>{const de=JSON.parse(JSON.stringify(X));return de&&ae&&ae.length&&(de.below||(de.below=[]),de.below=[...ae,...de.below]),de})(q,M),[q,M]),f=()=>{if(!o.get.isLoading){e.properties?._corner_partner==="parcelis"&&p(!1);let X=e.properties&&e.properties._corner_promo_code,ae=e;if(X){let de=s.items.filter(ce=>ce.variantId===e.variantId);if(de.length>0){let ce=de.filter(fe=>!(fe.properties&&fe.properties._corner_promo_code));ce.length>0&&(ae=ce[0])}}c("deleteProducts",[ae])}},F=(X,ae)=>{let de=window.cornerRechargeString||"Every",ce=ae.toLowerCase(),fe=parseInt(X);return isNaN(fe)||fe<=0?"Invalid delivery schedule":(ce=ce==="day"||ce==="days"?"Day":ce==="month"||ce==="months"?"Month":"Week",`${de} ${fe} ${ce}${fe===1?"":"s"}`)},V=qe(br(X=>{c("editQuantity",{[e.id]:X})},300),[s]),te=async X=>{let ae=1;e.quantityRule&&(ae=e.quantityRule.increment);let de=X==="decrease"?b-ae:b+ae;de===0?f():(x(de),V(de))};W(()=>{x(e.quantity)},[e]),W(()=>{const X=(()=>{let ae=h,de=m;const ce=e.discounts&&e.discounts.length>0;return $&&e.properties?._cornerOriginalBundlePrice?ae=e.properties._cornerOriginalBundlePrice:e.isLoading&&!ce?ae=e.compareAtPrice?e.compareAtPrice*b:0:!e.isLoading&&e.compareAtPrice?ae=e.compareAtPrice*e.quantity:!e.isLoading&&e.cost&&(ae=e.cost.subtotalAmount||0),e.isLoading&&!ce?de=(e.cost?.amountPerQuantity||0)*(b||1):e.cost&&(de=e.cost.totalAmount||0,!r.cornercart.cartConfig.general.subtractOrderDiscountFromLinePrice&&U>0&&(de+=U)),{prePrice:ae,finPrice:de}})();g(X.prePrice),w(X.finPrice)},[e,$,b,U]);const pe=r?.general_config?.featureFlag?.apps?.cornercart?.use_web_components||!1,me=X=>{const ae=X.target.value;if(ae==="one-time")c("changeSellingPlan",{id:e.id,quantity:e.quantity,sellingPlanId:""});else{const de=parseInt(ae.split("/").pop());c("changeSellingPlan",{id:e.id,quantity:e.quantity,sellingPlanId:de})}},ee=()=>{const X=C[0],ae=parseInt(X.id.split("/").pop());c("changeSellingPlan",{id:e.id,quantity:e.quantity,sellingPlanId:ae})},he=X=>{const{type:ae}=X.detail||{};switch(ae){case"increase":case"decrease":(async de=>{const{type:ce}=de.detail;if(ce==="increase"||ce==="decrease"){let fe=1;e.quantityRule&&(fe=e.quantityRule.increment);let We=ce==="decrease"?b-fe:b+fe;We===0?f():(x(We),V(We))}})(X);break;case"deleteItem":f();break;case"imageClick":$&&(async()=>u.cowiOverlay.set({type:"bundleEditor",params:{bundleItem:e,editable:P,onClose:()=>{u.cowiOverlay.get?.type==="bundleEditor"&&u.cowiOverlay.set(null)}}}))()}},ue=X=>{const{type:ae,params:de}=X.detail||{};ae==="changeSellingPlan"&&de&&c("changeSellingPlan",de)};return a($e,{children:[e&&(pe||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&a("div",{className:`border-b border-solid border-cowi-outlines ${y.below&&y.below.length?"py-4":"py-6"} ${e.tags.includes("corner-hide-all")&&"hidden"}`,children:[a("div",{className:`px-4 md:px-6
          `,children:[y.above&&y.above.length>0&&a(So,{index:t,lineItemMessages:y.above,wrapperClasses:B||$?"pb-4":"pb-1",globalContext:{config:r,currentLanguage:n,cart:s}}),B?a(ys,{index:t,item:e,isLoading:e.isLoading,isCartLoading:o.get.isLoading,strikedPrice:h,finalPrice:m,globalContext:{currentLanguage:n,campaigns:i,config:r,cart:s},lineItemMessages:y.inside,onCartAction:he,isQtyHidden:N}):$?a(bs,{index:t,item:e,quantity:b,isQtyHidden:N,isBundleItem:$,isCornerVolumeBundleItem:J,strikedPrice:h,finalPrice:m,isLoading:e.isLoading,isCartLoading:o.get.isLoading,globalContext:{currentLanguage:n,campaigns:i,config:r,cart:s},lineItemMessages:y.inside,onCartAction:he}):a(ws,{index:t,item:e,quantity:b,isQtyHidden:N,strikedPrice:h,finalPrice:m,isLoading:e.isLoading,isCartLoading:o.get.isLoading,globalContext:{currentLanguage:n,campaigns:i,config:r,cart:s},lineItemMessages:y.inside,onCartAction:he}),y.below&&y.below.length>0&&a(So,{lineItemMessages:y.below,index:t,wrapperClasses:B||$?"pt-3":"pt-1",globalContext:{config:r,currentLanguage:n,cart:s}})]}),_&&!e.sellingPlanAllocation&&C.length>0&&!B&&!e.tags.includes("corner-subscription-upgrade-exclude")&&a(_s,{index:t,text:n.cart.subscription_upgrade_cta,sellingPlanId:parseInt(C[0].id.split("/").pop()),id:e.id,quantity:e.quantity,onSellingPlanChange:ue,globalContext:{config:r,currentLanguage:n,cart:s}}),e.sellingPlanAllocation&&e.sellingPlanAllocation.selling_plan&&C.length>0&&!B&&a(xs,{index:t,sellingPlanOptions:C,selectedPlanId:L,hasOnetimePurchasePlan:v,onetimePurchaseLabel:n.cart.one_time_purchase_plan_title,id:e.id,quantity:e.quantity,onSellingPlanChange:ue,globalContext:{config:r,currentLanguage:n,cart:s}}),j.length>0&&a(vs,{discounts:j,index:t,globalContext:{config:r,currentLanguage:n,cart:s}})]}),(!pe||window.CornerWebComponentsAPI?.shouldShowBoth)&&a("div",{className:`${B?"corner-cowi-cart-free-item":"corner-cowi-cart-item"}  border-b border-solid border-cowi-outlines ${y.below&&y.below.length?"py-4":"py-6"} ${e.tags.includes("corner-hide-all")&&"hidden"} `,id:B?`corner-cowi-cart-free-item-${t}`:`corner-cowi-cart-item-${t}`,"data-corner-product-id":e.productId,"data-corner-variant-id":e.variantId,"data-product-type":e.productType,"data-vendor":e.vendor,"data-quantity":e.quantity,children:[y.above&&y.above.length>0&&a("div",{className:"corner-cowi-line-item-messages-wrapper px-4 md:px-6",children:a(Sn,{itemIndex:t,lineItemMessages:y.above,itemWrapperClasses:"pb-1"})}),a("div",{id:`corner-cowi-cart-item-primary-info-${t}`,className:`corner-cowi-cart-item-primary-info flex items-stretch px-4 md:px-6 ${(B||$)&&y.above.length?"pt-3":y.above.length?"pt-1":""} ${$&&y.below.length?"pb-3":y.below.length?"pb-1":""}`,children:[a("div",{id:`corner-cowi-cart-item-list-item-image-${t}`,onClick:()=>{$&&u.cowiOverlay.set({type:"bundleEditor",params:{bundleItem:e,editable:P,onClose:()=>{u.cowiOverlay.set(null)}}})},className:`w-16 relative md:w-20 flex flex-wrap items-start flex-grow-0 flex-shrink-0 rounded-lg ${$&&"corner-bundle-stack cursor-pointer"}  ${e.tags.includes("corner-hide-img")&&"invisible pointer-events-none"}`,children:[$&&e.properties&&e.properties._cornerBundleQty&&a("div",{className:"flex absolute -bottom-3 z-20 left-1/3 rounded-full items-center justify-center p-1 w-6 h-6 text-cowi-accent-bg border border-solid border-cowi-accent-bg bg-cowi-card-bg",children:e.properties._cornerBundleQty}),B&&a("div",{className:"flex absolute -top-3 z-20 left-1/3 rounded-full items-center justify-center p-1 w-6 h-6 border border-solid border-cowi-accent-bg bg-cowi-card-bg",children:a(le,{type:"gift",color:`${r.cornercart.cartConfig.colors.accentBg}`})}),e.image&&a("a",{href:!e.url||e.productType==="free_product"||e.tags.includes("corner-non-clickable-product-title")||$?"#":e.url,className:"block w-full h-full",children:a("img",{className:`w-full relative z-10 object-cover rounded-lg ${(B||$)&&"border border-solid border-cowi-accent-bg"}
      ${$&&"h-full"}`,src:e.image,alt:e.productTitle+"-image"})}),!e.image&&B&&a(le,{type:"gift",color:`${r.cornercart.cartConfig.colors.primaryType}`})]}),a("div",{id:`corner-cowi-cart-item-list-item-info-body-${t}`,className:"corner-cowi-cart-item-list-item-info-body flex flex-col justify-between flex-grow ml-4",children:[a("div",{id:`corner-cowi-cart-item-list-item-info-title-wrapper-${t}`,className:"corner-cowi-cart-item-list-item-info-title-wrapper flex items-start ",children:[a("div",{className:"grow",children:[a("a",{href:e.url&&e.productType!=="free_product"&&!e.tags.includes("corner-non-clickable-product-title")?e.url:"#",className:`text-base font-bold ${e.tags.includes("corner-hide-title")&&"invisible"} ${(e.tags.includes("corner-hide-title")||e.tags.includes("corner-non-clickable-product-title"))&&"pointer-events-none"}`,children:a("p",{className:"text-md leading-snug text-cowi-primary-type hover:text-[color:var(--corner-cowi-accent-bg)] transition-all",dangerouslySetInnerHTML:{__html:_t(Z,67)}})}),!$&&e.variantOptions&&a("div",{id:`corner-cowi-cart-item-variant-options-${t}`,className:`corner-cowi-cart-item-variant-options text-sm leading-0 text-cowi-secondary-type mt-2 ${e.tags.includes("corner-hide-options")&&"invisible pointer-events-none"}`,children:e.variantOptions.map((X,ae)=>{if(X!=="Default Title")return ae!==e.variantOptions.length-1?`${X} •`:` ${X}`})}),$&&a("button",{onClick:()=>{u.cowiOverlay.set({type:"bundleEditor",params:{bundleItem:e,editable:P,onClose:()=>{u.cowiOverlay.set(null)}}})},className:"corner-cowi-cart-item-bundle-expand-btn mt-2 flex cursor-pointer border border-cowi-outlines border-solid items-center text-sm rounded-full bg-cowi-card-bg px-3 py-1 transition-all hover:-translate-y-1 max-w-fit",children:n.cart.bundle_view_content_btn}),a("div",{id:`corner-cowi-cart-item-line-properties-${t}`,className:"corner-cowi-cart-item-line-properties text-xs flex flex-wrap leading-0 text-cowi-secondary-type",children:[k&&k.shipping_interval_unit_type&&k.shipping_interval_frequency&&a("div",{id:`corner-cowi-cart-item-recharge-plan-description-${t}`,className:"corner-cowi-cart-item-recharge-plan-description px-2 font-bold leading-0 text-cowi-secondary-type mr-1 mt-1 rounded-lg border border-solid border-cowi-outlines max-w-fit",children:a("span",{children:F(k.shipping_interval_frequency,k.shipping_interval_unit_type)})}),k&&Object.keys(k).length>0&&Object.keys(k).map((X,ae)=>{if((window.cornerDevMode||!X.startsWith("_"))&&!Q.includes(X)&&k[X])return a("div",{className:"shrink-0 border border-cowi-outlines border-solid px-1 mr-1 mt-1 rounded-lg max-w-full",children:(de=k[X],/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(de)?a("div",{className:"flex items-center break-all",children:[a("span",{className:"",children:`${X}:`}),a("a",{href:k[X],target:"_blank",className:"font-bold w-5 h-5 mx-1",children:a(le,{type:"link",color:r.cornercart.cartConfig.colors.secondaryType})})]}):a("div",{className:"break-all",children:[a("span",{className:"",children:`${X}:`}),a("span",{className:"font-bold",children:[`${k[X]}`," "]})]}))},X);var de})]})]}),a("div",{onClick:f,id:`corner-cowi-cart-item-list-item-info-remove-btn-${t}`,className:`corner-cowi-cart-item-list-item-info-remove-btn w-5 h-5 p-[4px] shrink-0 rounded-full  transition-all opacity-50 cursor-pointer hover:rotate-90 hover:opacity-100 mt-1 ${(e.tags.includes("corner-hide-close-btn")||e.isLoading)&&"pointer-events-none"} ${e.tags.includes("corner-hide-close-btn")&&"invisible "}`,children:a(le,{type:"close-cross",color:r.cornercart.cartConfig.colors.primaryType})})]}),y.inside&&y.inside.length>0&&a(Sn,{itemIndex:t,lineItemMessages:y.inside}),a("div",{id:`corner-cowi-cart-item-customiser-${t}`,className:`corner-cowi-cart-item-customise flex ${J||N?"justify-end":"justify-between"} mt-3 items-center `,children:[!N&&!J&&a("div",{id:`corner-cowi-cart-item-qty-${t}`,className:"corner-cowi-cart-item-qty flex items-center justify-center rounded-md ",children:[a("button",{id:`corner-cowi-cart-item-customiser-qty-decrease-${t}`,"aria-label":"decrease-quantity","aria-description":`decrease quantity of ${e.productTitle}`,onClick:async()=>{o.get.isLoading||te("decrease")},className:`corner-cowi-cart-item-customiser-qty-decrease ${o.get.isLoading&&"pointer-events-none"} ${e.quantityRule&&e.quantityRule.minimum>1&&e.quantityRule.minimum<=b&&"pointer-events-none opacity-50"} w-8 h-6 px-2 flex items-center justify-center border border-cowi-outlines border-solid leading-none text-cowi-secondary-type text-xl focus:outline-none bg-transparent transition-all duration-500 cursor-pointer rounded-md hover:bg-[color:var(--corner-cowi-accent-bg)]  hover:text-[color:var(--corner-cowi-accent-fg)]`,children:a(le,{type:"minus"})}),a("div",{className:"px-2 text-cowi-primary-type text-center focus:outline-none bg-transparent text-sm 2xl:text-base font-bold appearance-none",children:Jr(b,e.productType)}),a("button",{id:`corner-cowi-cart-item-customiser-qty-increase-${t}`,"aria-label":"increase-quantity","aria-description":`increase quantity of ${e.productTitle}`,onClick:async()=>{o.get.isLoading||te("increase")},className:`corner-cowi-cart-item-customiser-qty-increase ${o.get.isLoading&&"pointer-events-none"} ${e.quantityRule&&e.quantityRule.maximum&&e.quantityRule.maximum>=b&&"pointer-events-none opacity-50"} w-8 h-6 px-2 flex items-center justify-center border border-cowi-outlines border-solid leading-none text-cowi-secondary-type text-xl focus:outline-none bg-transparent transition-all duration-500 cursor-pointer rounded-md hover:bg-[color:var(--corner-cowi-accent-bg)] hover:text-[color:var(--corner-cowi-accent-fg)]  `,children:a(le,{type:"plus"})})]}),(J||N)&&b>1&&a("div",{id:`corner-cowi-cart-item-qty-${t}`,className:`corner-cowi-cart-item-qty grow  flex items-center rounded-md ${(e.tags.includes("corner-hide-qty")||!e.cost)&&"invisible pointer-events-none"}`,children:a("div",{className:"px-2 text-cowi-secondary-type text-center focus:outline-none bg-transparent text-sm 2xl:text-base font-bold appearance-none",children:["QTY: ",Jr(b,e.productType)]})}),e.cost?a("div",{id:`corner-cowi-cart-item-price-${t}`,className:`corner-cowi-cart-item-price flex items-center text-center ${e.tags.includes("corner-hide-price")&&"invisible pointer-events-none"}`,children:[h>m&&a("p",{className:"text-xs md:text-sm text-cowi-secondary-type  line-through mr-2",children:_e(h,r.general_config.cornerCurrencyFormat)}),a("p",{className:`text-sm md:text-base text-cowi-primary-type text-center font-bold ${B&&"px-3 bg-cowi-secondary-bg rounded-full"}`,children:re()})]}):a("div",{className:"mx-3 w-6 h-6 animate-spin",children:a(le,{type:"loader",color:r.cornercart.cartConfig.colors.primaryType})})]})]})]}),y.below&&y.below.length>0&&a("div",{className:"corner-cowi-line-item-messages-wrapper px-4 md:px-6",children:a(Sn,{itemIndex:t,lineItemMessages:y.below,itemWrapperClasses:"pb-1"})}),_&&!e.sellingPlanAllocation&&C.length>0&&!B&&!e.tags.includes("corner-subscription-upgrade-exclude")&&a("div",{className:"corner-cowi-subscription-upgrade-wrapper px-4 md:px-6 pt-2",children:a("button",{id:`corner-cowi-cart-item-subscription-upgrade-${t}`,className:"corner-cowi-cart-item-subscription-upgrade bg-cowi-accent-bg cursor-pointer px-3 py-2 rounded-md text-sm font-bold text-cowi-accent-fg w-full",onClick:ee,children:n.cart.subscription_upgrade_cta})}),e.sellingPlanAllocation&&e.sellingPlanAllocation.selling_plan&&C.length>0&&!B&&a("div",{className:"corner-cowi-selling-plan-select-wrapper px-4 md:px-6 pt-2",children:a("select",{id:`corner-cowi-cart-item-selling-plan-select-${t}`,className:"corner-cowi-cart-item-selling-plan-select border border-cowi-outlines border-solid rounded-md text-sm  bg-cowi-card-bg px-3 py-2 text-cowi-primary-type cursor-pointer w-full",value:L,onChange:me,children:[v&&a("option",{value:"one-time",children:n.cart.one_time_purchase_plan_title}),C.map(X=>a("option",{value:X.id,children:X.name},X.id))]})}),j.length>0&&a("div",{id:`corner-cowi-cart-item-discounts-${t}`,className:"corner-cowi-cart-item-discounts w-full flex flex-wrap mt-1 px-4 md:px-6",children:j.map((X,ae)=>a(vr,{title:X.title},X.title))})]},e.id)]})},$s=({item:t,index:e})=>{const{requestCartEdit:r,requestUserAction:n}=be(),{config:i,currentLanguage:o}=we(),s=t.preferredVariant||t.variants[0],c=s.image?s.image:t.image,d=s.sellingPlanAllocations&&s.sellingPlanAllocations.nodes,[l,p]=H(!1);return a("div",{id:`cowi-cart-recommended-item-carousel-wrapper-${e}`,className:"cowi-cart-recommended-item-carousel-wrapper flex items-center shrink-0 w-full","data-corner-variant-id":s.id,"data-corner-product-id":t.id,children:[a("div",{id:`cowi-cart-recommended-item-carousel-image-${e}`,style:{width:"15%"},className:"cowi-cart-recommended-item-carousel-image max-h-16 bg-gray-300 overflow-hidden rounded-lg",children:a("a",{href:t.url,children:a("img",{className:"w-full",src:c,alt:""})})}),a("div",{id:`cowi-cart-recommended-item-carousel-info-wrapper-${e}`,className:" cowi-cart-recommended-item-carousel-info-wrapper flex w-full justify-between items-center px-2 flex-grow",children:[a("div",{className:"cowi-cart-recommended-item-carousel-info flex-grow",id:`cowi-cart-recommended-item-carousel-info-${e}`,children:[a("a",{id:`cowi-cart-recommended-item-carousel-info-title-${e}`,href:t.url,className:"cowi-cart-recommended-item-carousel-info-title text-sm text-cowi-primary-type font-bold hover:text-[color:var(--corner-cowi-accent-bg)]",children:_t(t.alternateProductTitle||t.title,40)}),a("div",{id:`cowi-cart-recommended-item-carousel-info-price-${e}`,className:"cowi-cart-recommended-item-carousel-info-price flex items-center",children:[s.compareAtPrice&&s.compareAtPrice>s.price?a("p",{className:"line-through text-cowi-secondary-type mr-2 text-xs",children:_e(s.compareAtPrice,i.general_config.cornerCurrencyFormat)}):null,a("p",{className:"text-sm text-cowi-secondary-type font-bold",children:_e(s.price,i.general_config.cornerCurrencyFormat)})]})]}),l?a("div",{id:`cowi-cart-recommended-item-carousel-cta-loading-${e}`,className:"cowi-cart-recommended-item-carousel-cta-loading w-12 h-12 animate-spin",children:a(le,{type:"loader",color:i.cornercart.cartConfig.colors.primaryType})}):a("button",{id:`cowi-cart-recommended-item-carousel-cta-${e}`,"aria-label":"related-items-cta-button",onClick:async()=>{if(window.corner&&window.corner.execute&&window.corner.execute("onUpsellCtaClick",{productAdded:t}),i.cornercart.cartConfig.general.relatedProductCtaAction==="redirect")window.location.href=window.Shopify.routes.root+"products/"+t.handle;else if(t.variants.length<2){const u=[{quantity:1,variantId:s.id,productId:t.id}];d&&d.length>0?d.length===1&&s.requiresSellingPlan?(u[0].selling_plan=d[0].sellingPlan.id.split("/").pop(),p(!0),r("addVariants",u,{onFinish:()=>{p(!1)}})):n("cartItemAdder",{hideVariantOptionSelectors:!0,variantId:s.id,productId:t.id,productInfo:t}):(p(!0),r("addVariants",u,{onFinish:()=>{p(!1)}}))}else n("cartItemAdder",{productId:t.id,productInfo:t})},className:"cowi-cart-recommended-item-carousel-cta bg-cowi-accent-bg cursor-pointer px-3 py-2 rounded text-sm font-bold text-cowi-accent-fg",children:a("span",{children:o.cart.related_items_cta})})]})]})},Io=({productList:t})=>{const e=ke();return a("div",{id:"corner-cowi-cart-related-products-list",className:"w-full rounded-lg flex items-center  py-3",children:t&&a(Tt,{id:"corner-cowi-cart-related-product-slider",slidesToShow:1,slidesToScroll:1,enableAutoplay:e.isCowiOpened.get,autoplayInterval:5e3,transitionTimingFunction:"linear",controllerType:"bigButtons",data:t,item:(r,n)=>a($s,{item:r,index:n},r.id+n)})})},ks=({item:t,index:e})=>{const{config:r,currentLanguage:n}=we(),{requestCartEdit:i,requestUserAction:o}=be(),[s,c]=H(!1),d=t.preferredVariant||t.variants[0],l=d.image?d.image:t.image,p=d.sellingPlanAllocations&&d.sellingPlanAllocations.nodes;return a("div",{id:`cowi-cart-recommended-item-card-wrapper-${e}`,className:"cowi-cart-recommended-item-card-wrapper w-72 flex flex-col flex-shrink-0 p-2 border border-cowi-outlines border-solid mr-2 rounded-lg bg-cowi-card-bg",children:[a("div",{id:`cowi-cart-recommended-item-card-info-wrapper-${e}`,className:"cowi-cart-recommended-item-card-info-wrapper flex grow items-center","data-corner-variant-id":d.id,"data-corner-product-id":t.id,children:[a("div",{id:`cowi-cart-recommended-item-card-image-${e}`,className:"cowi-cart-recommended-item-card-image max-w-[3em] max-h-20 bg-gray-300 overflow-hidden rounded-lg",children:a("a",{href:t.url,children:a("img",{className:"w-full",src:l,alt:""})})}),a("div",{id:`cowi-cart-recommended-item-card-info-${e}`,className:"px-2 flex-grow leading-none",children:[a("a",{id:`cowi-cart-recommended-item-card-info-title-${e}`,href:t.url,className:"cowi-cart-recommended-item-card-info text-sm text-cowi-primary-type font-bold hover:text-[color:var(--corner-cowi-accent-bg)]",children:_t(t.alternateProductTitle||t.title,40)}),a("div",{id:`cowi-cart-recommended-item-card-info-price-${e}`,className:"cowi-cart-recommended-item-card-info-price",children:[d.compareAtPrice&&d.compareAtPrice>d.price?a("p",{className:"line-through mr-2 text-cowi-secondary-type text-xs",children:_e(d.compareAtPrice,r.general_config.cornerCurrencyFormat)}):null,a("p",{className:"text-sm text-cowi-secondary-type font-bold",children:_e(d.price,r.general_config.cornerCurrencyFormat)})]})]})]}),s?a("div",{className:"w-12 h-12 animate-spin",children:a(le,{type:"loader",color:r.cornercart.cartConfig.colors.primaryType})}):a("button",{id:`cowi-cart-recommended-item-cta-${e}`,"aria-label":"cowi-cart-recommended-item-cta related-items-cta-button",onClick:async()=>{if(window.corner&&window.corner.execute&&window.corner.execute("onUpsellCtaClick",{productAdded:t}),r.cornercart.cartConfig.general.relatedProductCtaAction==="redirect")window.location.href=window.Shopify.routes.root+"products/"+t.handle;else if(t.variants.length<2){const u=[{quantity:1,variantId:d.id,productId:t.id}];p&&p.length>0?p.length===1&&d.requiresSellingPlan?(u[0].selling_plan=p[0].sellingPlan.id.split("/").pop(),c(!0),i("addVariants",u,{onFinish:()=>{c(!1)}})):o("cartItemAdder",{hideVariantOptionSelectors:!0,variantId:d.id,productId:t.id,productInfo:t}):(c(!0),i("addVariants",u,{onFinish:()=>{c(!1)}}))}else o("cartItemAdder",{productId:t.id,productInfo:t})},className:"bg-cowi-accent-bg cursor-pointer mt-2 p-3 rounded text-sm font-bold text-cowi-accent-fg w-full",children:a("span",{children:n.cart.related_items_cta})})]})},Ss=({productList:t})=>a("div",{id:"corner-cowi-related-items-cards-wrapper",className:"relative",children:a("div",{id:"corner-cowi-related-items-card-items-wrapper",className:"overflow-x-auto w-full py-2",children:a("div",{className:"flex flex-no-wrap transition-all w-full",children:t.map((e,r)=>a(ks,{item:e,index:r},e.id))})})}),Is=({productList:t})=>{const{config:e,currentLanguage:r}=we(),{requestCartEdit:n,requestUserAction:i}=be();ke();const o=({item:s,index:c})=>{const[d,l]=H(!1),p=s.preferredVariant||s.variants[0],u=p.image?p.image:s.image,h=p.sellingPlanAllocations&&p.sellingPlanAllocations.nodes;return a("div",{id:`cowi-cart-recommended-item-list-wrapper-${c}`,className:"cowi-cart-recommended-item-list-wrapper flex items-center w-full p-2 border-b border-cowi-outlines border-solid","data-corner-variant-id":p.id,"data-corner-product-id":s.id,children:[a("div",{id:`cowi-cart-recommended-item-list-image-${c}`,className:"cowi-cart-recommended-item-list-image max-w-[3em] max-h-16 bg-gray-300 rounded-lg overflow-hidden",children:a("a",{href:s.url,children:a("img",{className:"w-full",src:u,alt:""})})}),a("div",{id:`cowi-cart-recommended-item-list-info-wrapper-${c}`,className:"cowi-cart-recommended-item-list-info-wrapper px-2 flex-grow",children:[a("a",{id:`cowi-cart-recommended-item-list-info-title-${c}`,href:s.url,className:"cowi-cart-recommended-item-list-info-title text-sm text-cowi-primary-type font-bold hover:text-[color:var(--corner-cowi-accent-bg)]",children:_t(s.alternateProductTitle||s.title,40)}),a("div",{id:`cowi-cart-recommended-item-list-info-price-${c}`,className:"cowi-cart-recommended-item-list-info-price flex items-center",children:[p.compareAtPrice&&p.compareAtPrice>p.price?a("p",{className:"line-through text-cowi-secondary-type mr-2 text-xs",children:_e(p.compareAtPrice,e.general_config.cornerCurrencyFormat)}):null,a("p",{className:"text-sm text-cowi-secondary-type font-bold",children:_e(p.price,e.general_config.cornerCurrencyFormat)})]})]}),d?a("div",{id:`cowi-cart-recommended-item-list-cta-loader-${c}`,className:"cowi-cart-recommended-item-list-cta-loader w-12 h-12 animate-spin",children:a(le,{type:"loader",color:e.cornercart.cartConfig.colors.primaryType})}):a("button",{id:`cowi-cart-recommended-item-list-cta-${c}`,"aria-label":"related-items-cta-button",onClick:async()=>{if(window.corner&&window.corner.execute&&window.corner.execute("onUpsellCtaClick",{productAdded:s}),e.cornercart.cartConfig.general.relatedProductCtaAction==="redirect")window.location.href=window.Shopify.routes.root+"products/"+s.handle;else if(s.variants.length<2){const g=[{quantity:1,variantId:p.id,productId:s.id}];h&&h.length>0?h.length===1&&p.requiresSellingPlan?(g[0].selling_plan=h[0].sellingPlan.id.split("/").pop(),l(!0),n("addVariants",g,{onFinish:()=>{l(!1)}})):i("cartItemAdder",{hideVariantOptionSelectors:!0,variantId:p.id,productId:s.id,productInfo:s}):(l(!0),n("addVariants",g,{onFinish:()=>{l(!1)}}))}else i("cartItemAdder",{productId:s.id,productInfo:s})},className:"cowi-cart-recommended-item-list-cta bg-cowi-accent-bg cursor-pointer px-3 py-2 rounded text-sm font-bold text-cowi-accent-fg shrink-0",children:a("span",{children:r.cart.related_items_cta})})]})};return a("div",{id:"corner-cowi-related-list-slider",className:"relative mt-3",children:a("div",{id:"corner-cowi-related-items-list-items-wrapper",className:"border border-cowi-outlines border-solid w-full rounded-lg",children:t.map((s,c)=>a(o,{item:s,index:c},s.id))})})};function Ts({onRelatedItemAction:t,...e}){const r=ye(null);return W(()=>{const n=r.current;if(!n)return;const i=e.globalContext?.config,o=e.globalContext?.currentLanguage,s={...e,type:e.type||i?.cornercart?.cartConfig?.general?.relatedProductStyle||"carousel",productList:e.productList||[],title:e.title??o?.cart?.related_items_title??""};Object.assign(n,s)},[JSON.stringify(e)]),W(()=>{const n=r.current;if(!n||typeof t!="function")return;const i=o=>{t(o.detail)};return n.addEventListener("corner-related-items-action",i),()=>{n.removeEventListener("corner-related-items-action",i)}},[t]),a("corner-related-items",{ref:r})}function Ps({padding:t,margin:e,className:r,children:n,...i}){const o=ye(null);return W(()=>{const s=o.current;s&&(t!==void 0&&(s.padding=t),e!==void 0&&(s.margin=e),r!==void 0&&(s.class=r),Object.keys(i).forEach(c=>{i[c]!==void 0&&(s[c]=i[c])}))},[t,e,r,i]),a("corner-container",{ref:o,children:n})}const Ns=()=>{const t=ke(),{config:e,currentLanguage:r}=we(),{relatedProducts:n,requestCartEdit:i,requestUserAction:o,loadingFlag:s,cartDetails:c}=be(),[d,l]=H([]),p=e?.general_config?.featureFlag?.apps?.cornercart?.use_web_components||!1,u=()=>{if(!e.cornercart.cartConfig.general.relatedProductStyle)return a(Io,{productList:d});switch(e.cornercart.cartConfig.general.relatedProductStyle){case"carousel":default:return a(Io,{productList:d});case"cards":return a(Ss,{productList:d});case"list":return a(Is,{productList:d})}};W(()=>{if(n){const g=e.cornercart.cartConfig.general.relatedProductCount||10;let m=n.slice(0,parseInt(g,10));l(m)}return()=>{}},[n]);const h=g=>{if(!g||!g.item||!g.featuredVariant)return;const{item:m,featuredVariant:w}=g,b=w.sellingPlanAllocations&&w.sellingPlanAllocations.nodes;if(window.corner&&window.corner.execute&&window.corner.execute("onUpsellCtaClick",{productAdded:m}),e.cornercart.cartConfig.general.relatedProductCtaAction!=="redirect")if(m.variants.length<2){const x=[{quantity:1,variantId:w.id,productId:m.id}];b&&b.length>0?b.length===1&&w.requiresSellingPlan?(x[0].selling_plan=b[0].sellingPlan.id.split("/").pop(),i("addVariants",x)):o("cartItemAdder",{hideVariantOptionSelectors:!0,variantId:w.id,productId:m.id,productInfo:m}):i("addVariants",x)}else o("cartItemAdder",{productId:m.id,productInfo:m});else window.location.href=window.Shopify.routes.root+"products/"+m.handle};if(d.length>0)return a($e,{children:[p&&!window.CornerWebComponentsAPI?.shouldShowBoth?null:a("div",{id:"corner-cowi-related-items",className:"mt-3 px-4",children:[a("div",{id:"corner-cowi-related-items-text",className:"text-cowi-secondary-type text-center text-sm font-bold text-cowi-secondary-type",children:r.cart.related_items_title}),u()]}),(p||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&a(Ts,{globalContext:{currentLanguage:r,config:e,cart:c},type:e.cornercart.cartConfig.general.relatedProductStyle,productList:d,title:r.cart.related_items_title,ctaText:r.cart.related_items_cta,isLoading:s?.get?.isLoading,enableAutoplay:t.isCowiOpened.get,onRelatedItemAction:h})]})},As=({milestone:t,index:e,currentMilestoneIndex:r,trackingMetric:n,goalType:i,isMilestoneSingleInCarousel:o,isLastMilestoneInCarousel:s,islastMilestone:c,isFirstMilestoneInCarousel:d})=>{const{config:l}=we(),{currencyConversionMultiplier:p}=be();let u;if(e>r)u=0;else if(e<r)u=100;else{let g=i==="totalOrderValue"?t.goal*p:t.goal,m=i==="totalOrderValue"?n*p:n;u=o?m/g*.875*100:m/g/2*100}const h=g=>g.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_advanced_color_customisation?g.cornercart.cartConfig.colors.primaryType:"rgb(25,35,55)";return a("div",{id:`corner-cowi-goal-milestones-${e+1}`,className:"corner-cowi-goal-milestones h-full",style:!o&&s?{flex:"25% 0 0"}:{flex:"auto 1 0"},children:a("div",{className:"relative flex justify-between items-center h-full rounded-full",children:[a("div",{id:`corner-cowi-goal-milestones-progress-${e+1}`,className:"corner-cowi-goal-milestones-progress block bg-cowi-accent-bg h-full transition-all",style:{width:`${(()=>{let g;return g=c&&!o&&u>50?50:c&&o&&u>87.5?87.5:u,g})()}%`,borderRadius:d&&s?"10px":d?"10px 0 0 10px":s?"0 10px 10px 0":"0"}}),a("div",{id:`corner-cowi-absolute-goal-milestone-icon-${e+1}-wrapper`,className:"absolute flex  items-center justify-center",style:o?{right:"0",width:"25%"}:{left:"0",width:"100%"},children:a("div",{id:`corner-cowi-goal-milestone-icon-${e+1}`,className:"corner-cowi-goal-milestone-icon  rounded-full  w-5 h-5 p-[.27em] "+(u===100?"bg-cowi-accent-bg":"bg-cowi-secondary-bg"),children:t&&t.rewards&&t.rewards.rewardStack[0]&&t.rewards.rewardStack[0].type==="shippingDiscount"?a(le,{type:u===100?"check":"freeShipping",color:`${u===100?l.cornercart.cartConfig.colors.accentFg:h(l)}`}):a(le,{type:u===100?"check":"gift",color:`${u===100?l.cornercart.cartConfig.colors.accentFg:h(l)}`})})})]})})};function Es({milestones:t,milestonesPerPage:e,currentMilestoneIndex:r,goalType:n,currencyConversionMultiplier:i,currentValue:o,rewardsWorth:s,globalContext:c,variant:d,...l}){const p=ye(null);return W(()=>{const u=p.current;u&&(t!==void 0&&(u.milestones=t),e!==void 0&&(u.milestonesPerPage=e),r!==void 0&&(u.currentMilestoneIndex=r),n!==void 0&&(u.goalType=n),i!==void 0&&(u.currencyConversionMultiplier=i),o!==void 0&&(u.currentValue=o),s!==void 0&&(u.rewardsWorth=s),c!==void 0&&(u.globalContext=c),d!==void 0&&(u.variant=d),Object.keys(l).forEach(h=>{l[h]!==void 0&&(u[h]=l[h])}))},[t,e,r,n,i,o,s,c,d,i,l]),a("corner-cart-progress",{ref:p})}const Os=()=>{const[t,e]=H({}),{config:r,currentLanguage:n}=we(),{currencyConversionMultiplier:i,cartBasedValues:o,cartGoal:s,cartDetails:c}=be(),{cartGoalCampaign:d,currentMilestoneIndex:l}=s,p=d.milestones,u=window.cornerRenderConfig.json_build_object.general_config.cornerCurrencyFormat,h=d.goalType,g=d.config.milestonesPerPage||4;let m;switch(W(async()=>{const L=await(async(k,A,j)=>{const $={};for(const P of k)if(P.rewards.rewardStack.length>0){let J=P.rewards.rewardStack,B="";if(J[0].type==="freeProduct"||J[0].type==="freeProductVariant"){const N=(await Promise.all(J.map(async Z=>{const U=await Me(Z.target.product_id);let re="";if(Z.type==="freeProductVariant"){re=parseInt(Te(Z.target.id));const Y=U.variants.find(q=>q.id===re);return Y?Y.price:U.price||0}return U.price||0}))).sort((Z,U)=>U-Z),Q=N.slice(0,P.rewards.stackSelectCount).reduce((Z,U)=>Z+U,0);B=_e(Q,A,!0)}else if(J[0].type==="shippingDiscount")B=_e(0,A,!0);else if(J[0].type==="orderDiscount"){const N=j.totalOrderValue===0?1:j.totalOrderValue;if(J[0].unit==="percent"){let Q=parseFloat(N*(J[0].value/100)),Z=Number(Math.round(Q+"e2"));B=_e(Z,A,!0)}else if(J[0].unit==="amount"){let Q=parseFloat(J[0].value),Z=Number(Math.round(Q+"e2"));B=_e(Z,A,!0)}}$[P.id]=B}return $})(p,u,o);e(L)},[o,p]),h){case"totalOrderValue":m=o.totalOrderValue;break;case"cartItemCount":m=o.cartItemCount;break;case"cartWeight":m=o.cartWeight}const w=(L,k)=>{let A=k.goal,j=[{placeholder:"goal",value:h==="totalOrderValue"?""+(A-m)*i*100:""+(A-m),valueType:h==="totalOrderValue"?"currency":"number"},{placeholder:"current_status",value:h==="totalOrderValue"?100*m:m,valueType:h==="totalOrderValue"?"currency":"number"},{placeholder:"discount",value:k.rewards.rewardStack[0].unit==="percent"?`${k.rewards.rewardStack[0].value}%`:100*k.rewards.rewardStack[0].value*i,valueType:k.rewards.rewardStack[0].unit!=="percent"?"currency":"number"},{placeholder:"rewardValue",value:t[k.id]||"",valueType:"number"}];return L==="aboveText"?l===p.length?Le(p[p.length-1].content.postGoalText,j):Le(k.content.preGoalText,j):Le(k.content.milestoneLabel,j)},b=L=>L.length>g?[L.slice(0,g),...b(L.slice(g))]:[L],x=b(p),_=(()=>{let L=Math.floor(l/g);const k=x.length;return l>p.length-1&&(L=k-1),L})();let C=l===p.length?p[p.length-1]:p[l];const v=r?.general_config?.featureFlag?.apps?.cornercart?.use_web_components||!1;return a("div",{className:"flex flex-col gap-4",children:[(!v||window.CornerWebComponentsAPI?.shouldShowBoth)&&a("div",{id:"corner-cowi-cart-goal-meter",className:"w-full py-3 text-center rounded-lg "+(p.length>4?"px-1":"px-5"),children:[a("div",{id:"corner-cowi-cart-goal-meter-text",className:"text-cowi-primary-type text-center text-sm",children:w("aboveText",C)}),a(Tt,{id:"cart-goal-meter",controllerType:"bigButtons",enableAutoplay:!1,buttonColor:r.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_advanced_color_customisation?r.cornercart.cartConfig.colors.primaryType:"rgb(25,35,55)",startingIndex:_,data:x,item:(L,k)=>a("div",{children:[a("div",{id:`corner-cowi-cart-goal-meter-progress-bar-${k}`,className:"corner-cowi-cart-goal-meter-progress-bar flex items-center w-full h-2 rounded-full mt-3  bg-cowi-secondary-bg",style:k===x.length-1?{background:`linear-gradient(90deg, var(--corner-cowi-secondary-bg) 87.5%, ${Ye(r.cornercart.cartConfig.colors.secondaryBg||r.cornercart.cartConfig.colors.outlines,0)} 87.5%)`}:{},children:L.map((A,j)=>a(As,{milestone:A,index:k*g+j,currentMilestoneIndex:l,trackingMetric:m,goalType:h,isLastMilestoneInCarousel:j===L.length-1,islastMilestone:k*g+j===p.length-1,isFirstMilestoneInCarousel:j===0,isMilestoneSingleInCarousel:k*g+j===p.length-1&&j===0||g===1},A.id))}),a("div",{id:`corner-cowi-cart-goal-meter-milestone-label-wrapper-${k}`,className:"corner-cowi-cart-goal-meter-milestone-label-wrapper flex justify-end",children:L.map((A,j)=>a("div",{id:`corner-cowi-goal-milestone-label-${j}`,style:L.length===1||j===L.length-1?{flex:"25% 0 0"}:{},className:"corner-cowi-goal-milestone-label text-cowi-primary-type w-full  text-center text-xs mt-1 mx-1",children:w("belowText",A)}))})]})})]}),(v||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&a(Ps,{className:"w-full",children:a(Es,{milestones:p,milestonesPerPage:g,currentMilestoneIndex:l,currentValue:m,goalType:h,globalContext:{config:r,currentLanguage:n,cart:c},rewardsWorth:t,currencyConversionMultiplier:parseFloat(window?.Shopify?.currency?.rate)||1})})]})},Ls=({item:t,index:e,title:r,subTitle:n})=>{const{config:i}=we(),[o,s]=H(t.product.images.length>0?t.product.images[0].originalSrc:null);return W(()=>((async()=>{let c=await Me(t.product.product_id);c&&c.image&&s(c.image)})(),()=>{}),[]),a("div",{id:`corner-cowi-cart-possible-free-product-${e}`,className:"corner-cowi-cart-possible-free-product flex items-center ",children:[a("a",{href:window.Shopify.routes.root+"products/"+t.product.handle,id:`corner-cowi-cart-possible-free-product-image-${e}`,style:{width:"20%"},className:"corner-cowi-cart-possible-free-product-image text-decoration-none mr-3 flex flex-wrap items-center flex-grow-0 flex-shrink-0 overflow-hidden  p-1",children:o?a("img",{className:"w-full rounded",src:o,alt:t.product.handle}):a(le,{type:"gift",color:`${i.cornercart.cartConfig.colors.primaryType}`})}),a("div",{children:[a("a",{href:window.Shopify.routes.root+"products/"+t.product.handle,className:" text-decoration-none text-base font-bold leading-snug text-cowi-primary-type",children:r}),a("p",{className:"text-sm mt-1 leading-snug text-cowi-secondary-type ",children:n})]})]})},Ms=({sliderArray:t})=>a(Tt,{id:"corner-cowi-cart-possible-free-product-slider",slidesToShow:1,slidesToScroll:1,enableAutoplay:!1,transitionTimingFunction:"linear",data:t,controllerType:"bigButtons",item:(e,r)=>a(Ls,{item:e,index:r,title:e.text.milestoneLabel,subTitle:e.text.preGoalText},Te(e.product.id)-r)}),Ds=()=>{const{config:t}=we(),{cartGoal:e,cartBasedValues:r,currencyConversionMultiplier:n,eventLog:i}=be(),{cartGoalCampaign:o}=e,[s,c]=H([]),d=o.milestones,l=o.goalType;let p;switch(l){case"totalOrderValue":p=r.totalOrderValue;break;case"cartItemCount":p=r.cartItemCount;break;case"cartWeight":p=r.cartWeight}return W(()=>{let u=[];d.map(g=>{let m=g.goal,w=[{placeholder:"goal",value:l==="totalOrderValue"?""+(m-p)*n*100:""+(m-p),valueType:l==="totalOrderValue"?"currency":"number"},{placeholder:"current_status",value:l==="totalOrderValue"?100*p:p,valueType:l==="totalOrderValue"?"currency":"number"},{placeholder:"discount",value:g.rewards.rewardStack[0].unit==="percent"?`${g.rewards.rewardStack[0].value}%`:g.rewards.rewardStack[0].value*n,valueType:g.rewards.rewardStack[0].unit!=="percent"?"currency":"string"}];g.rewards.rewardStack.map(b=>{b.type!=="freeProduct"&&b.type!=="freeProductVariant"||(u=[...u,{goal:m,text:{milestoneLabel:Le(g.content.milestoneLabel,w),preGoalText:Le(g.content.preGoalText,w)},product:b.target}])})});let h=u.filter(g=>p<g.goal);return c(h),()=>{}},[i]),a("div",{id:"corner-cowi-cart-possible-free-products-list",className:"w-full rounded-lg flex items-center  py-3",children:s.length>0&&a(Ms,{sliderArray:s})})},To=({isActive:t})=>a("div",{id:"corner-cowi-cart-indeterminate-loading-bar-wrapper",className:"w-full",children:a("div",{id:"corner-cowi-cart-indeterminate-loading-bar-bg",className:"h-1 bg-cowi-card-bg w-full overflow-hidden",children:a("div",{id:"corner-cowi-cart-indeterminate-loading-bar-runner",className:"w-full h-full rounded-full "+(t?"cowi-animated-progress-bar":" invisible"),children:" "})})}),Po=({index:t="",checked:e,onChange:r,disabled:n=!1})=>{const{config:i}=we(),o=i.cornercart.cartConfig.colors.accentFg;return a("div",{className:`w-full h-full ${n&&"pointer-events-none"}`,children:[a("style",{children:` .corner-cowi-checkbox-${t} {
          --corner-border-default: var(--corner-cowi-primary-type);
          display: block;
          width: 100%;
          height: 100%;
          cursor: pointer;
          position: relative;
          -webkit-tap-highlight-color: transparent;
        }
        .corner-cowi-checkbox-${t} svg {
          display: block;
          position: absolute;
        }
        .corner-cowi-checkbox-${t} input {
          display: block;
          outline: none;
          border: none;
          padding: 0;
          margin: 0;
          -webkit-appearance: none;
          width: 100%;
          height: 100%;
          border-radius: 36% / 36%;
          box-shadow: inset 0 0 0 1.5px var(--border, var(--corner-border-default));
          background: var(--background, transparent);
          transition: background 0.25s linear, box-shadow 0.25s linear;
        }
        .corner-cowi-checkbox-${t} input + svg {
          width: 116% !important;
          height: 100% !important;
          left: 0;
          top: 0;
          color: var(--corner-cowi-accent-bg);
        }
        .corner-cowi-checkbox-${t} input + svg .tick {
          stroke-dasharray: 20;
          stroke-dashoffset: var(--stroke-dashoffset, 20);
          transition: stroke-dashoffset 0.2s;
        }
        .corner-cowi-checkbox-${t} input + svg .tick.mask {
          stroke: white;
        }
        .corner-cowi-checkbox-${t} input + svg + svg {
          width: 61%;
          height: 61%;
          fill: none;
          stroke: var(--corner-cowi-accent-bg);
          stroke-width: 15%;
          stroke-linecap: round;
          top: -33.33%;
          right: -55.55%;
          stroke-dasharray: 40%;
          stroke-dashoffset: 122%;
          pointer-events: none;
          animation: var(--animation, none) 0.2s ease 0.175s;
        }
        .corner-cowi-checkbox-${t} input:checked {
          --background: var(--corner-cowi-accent-bg);
          --border: var(--corner-cowi-accent-bg);
        }
        .corner-cowi-checkbox-${t} input:checked + svg {
          --stroke-dashoffset: 0;
        }
        .corner-cowi-checkbox-${t} input:checked + svg + svg {
          --animation: check;
        }
        .corner-cowi-checkbox-${t}:hover input:not(:checked) {
          --border: var(--corner-cowi-accent-bg);
        }
        @keyframes check {
          100% {
            stroke-dashoffset: 40%;
        }
        }`}),a("label",{className:`corner-cowi-checkbox-${t}`,id:`corner-cowi-checkbox-${t}`,children:[a("input",{type:"checkbox",id:`corner-cowi-checkbox-input-${t}`,className:"checkbox-input",checked:e,onChange:s=>{r(s.target.checked)}}),a("svg",{viewBox:"0 0 21 18",children:[a("symbol",{id:`tick-path-${t}`,viewBox:"0 0 21 18",xmlns:"http://www.w3.org/2000/svg",children:a("path",{d:"M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69",fill:"none","stroke-width":"2.25","stroke-linecap":"round","stroke-linejoin":"round"})}),a("defs",{children:a("mask",{id:`tick-${t}`,children:a("use",{className:"tick mask",href:`#tick-path-${t}`})})}),a("use",{className:"tick",href:`#tick-path-${t}`,stroke:"currentColor"}),a("path",{fill:`${o}`,mask:`url(#tick-${t})`,d:"M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z"})]}),a("svg",{className:"lines",viewBox:"0 0 11 11",children:[a("path",{d:"M5.88086 5.89441L9.53504 4.26746"}),a("path",{d:"M5.5274 8.78838L9.45391 9.55161"}),a("path",{d:"M3.49371 4.22065L5.55387 0.79198"})]})]})]})},Rs=({onCheckboxChange:t,...e})=>{const r=ye(null);return W(()=>{const n=r.current;if(!n)return;const i={...e,campaign:e.campaign&&{...e.campaign},product:e.product&&{...e.product},type:e.type??e.campaign?.upsellConfig?.ctaType};Object.assign(n,i)},[JSON.stringify(e)]),W(()=>{const n=r.current;if(n&&t)return n.addEventListener("corner-cart-oneclick-upsell-change",t),()=>{n.removeEventListener("corner-cart-oneclick-upsell-change",t)}},[t]),a("div",{id:"corner-cart-one-click-item-wrapper",className:"flex flex-col",children:a("corner-cart-oneclick-upsell",{ref:r})})},js=({campaignDetails:t})=>{const[e,r]=H(!1),[n,i]=H(!1),{upsellConfig:o,upsellProduct:s,content:c}=t,{config:d,currentLanguage:l}=we(),{cartDetails:p,loadingFlag:u,requestCartEdit:h,requestUserAction:g}=be(),m=d?.general_config?.featureFlag?.apps?.cornercart?.use_web_components||!1,w=window.Shopify.locale,b=c.find(k=>k.language===w)||c[0],x=b?.value?.upsellPrimaryText;W(()=>{const k=p.items.find(A=>A.properties&&A.properties._oneClickRefId&&A.properties._oneClickRefId===t?.campaignid);return r(!!k),()=>{}},[p.items,t?.campaignid]),W(()=>{(async()=>{if(!s?.target?.id)return;const k=Te(s.target.id),A=await Me(k);i(A)})()},[s?.target?.id]);const _=k=>{let A=0;s.preferenceType==="merchantSelect"&&s.preferenceValue?A=n.variants.find($=>$.id==s.preferenceValue.id).price:A=n.price;let j=[{placeholder:"title",value:`${n.title}`},{placeholder:"amount",value:`${A}`,valueType:"currency"},{placeholder:"variant_title",value:`${s.preferenceValue.displayName}`}];return Le(k,j)},C=k=>{if(!n||!n.variants)return[];const{variants:A}=n;let j=[];return A?.length>1?A?.forEach($=>{$.id===k&&$.sellingPlanAllocations&&$.sellingPlanAllocations.nodes.length>0&&(j=$.sellingPlanAllocations.nodes)}):A[0].sellingPlanAllocations&&A[0].sellingPlanAllocations.nodes.length>0&&(j=A[0].sellingPlanAllocations.nodes),j},v=async k=>{r(k);const{variants:A,id:j}=n;if(k===!0)if(A.length>1)if(t.upsellProduct.preferenceValue&&t.upsellProduct.preferenceValue.id&&t.upsellProduct.preferenceType==="merchantSelect"){const $=C(t.upsellProduct.preferenceValue.id);if($&&$.length>0)if($.length===1&&n.requiresSellingPlan){const P=$[0].sellingPlan.id.split("/").pop();h("addVariants",[{quantity:1,variantId:t.upsellProduct.preferenceValue.id,productId:j,properties:{_oneClickRefId:t.campaignid},selling_plan:P}])}else g("cartItemAdder",{productId:j,variantId:t.upsellProduct.preferenceValue.id,hideVariantOptionSelectors:!0,productInfo:n,properties:{_oneClickRefId:t.campaignid},removingCheckOnCartItemAdderClose:()=>{r(!1)}});else h("addVariants",[{quantity:1,variantId:t.upsellProduct.preferenceValue.id,productId:j,properties:{_oneClickRefId:t.campaignid}}])}else g("cartItemAdder",{productId:j,productInfo:n,properties:{_oneClickRefId:t.campaignid},removingCheckOnCartItemAdderClose:()=>{r(!1)}});else{const $=C(A[0].id);if($&&$.length>0)if($.length===1&&n.requiresSellingPlan){const P=$[0].sellingPlan.id.split("/").pop();h("addVariants",[{quantity:1,variantId:A[0].id,productId:j,selling_plan:P,properties:{_oneClickRefId:t.campaignid}}])}else g("cartItemAdder",{productId:j,variantId:t.upsellProduct.preferenceValue.id,hideVariantOptionSelectors:!0,productInfo:n,properties:{_oneClickRefId:t.campaignid},removingCheckOnCartItemAdderClose:()=>{r(!1)}});else h("addVariants",[{quantity:1,variantId:A[0].id,productId:j,properties:{_oneClickRefId:t.campaignid}}])}else{const $=p.items.find(P=>P.properties&&P.properties._oneClickRefId&&P.properties._oneClickRefId===t.campaignid);$&&h("deleteProducts",[$])}},L=()=>{let k;return s.preferenceType==="merchantSelect"&&s.preferenceValue?k=s.preferenceValue.id:k=n.variants.find(A=>A.price===n.price).id,k};return n&&n.available?a($e,{children:[(m||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&a(Rs,{isChecked:e,product:n,campaign:t,onCheckboxChange:k=>v(k.detail.checked),globalContext:{config:d,currentLanguage:l,cart:p},cart:p,isCartLoading:u?.get?.isLoading,content:b},`corner-cart-oneclick-upsell-${t.campaignid}`),(!m||window.CornerWebComponentsAPI?.shouldShowBoth)&&a("div",{id:`corner-cowi-cart-one-click-${t.campaignid}`,className:"corner-cowi-cart-one-click flex flex-row p-4 items-center border-b border-solid border-cowi-outlines","data-corner-product-id":n.id,"data-corner-variant-id":L(),children:[o.isImageVisible&&a("div",{id:`corner-cowi-cart-one-click-image-wrapper-${t.campaignid}`,className:"corner-cowi-cart-one-click-image-wrapper max-h-16 w-12 rounded-md ",children:a("img",{id:`corner-cowi-cart-one-click-image-${t.campaignid}`,src:n.image,className:" corner-cowi-cart-one-click-image w-full",alt:"product image"})}),a("div",{id:`corner-cowi-cart-one-click-text-${t.campaignid}`,className:"corner-cowi-cart-one-click-text w-full px-4",children:a("p",{className:"text-base text-cowi-primary-type",children:_(x)})}),o.ctaType&&o.ctaType==="button"?a("button",{id:`corner-cowi-cart-one-click-checkbox-cta-button-${t.campaignid}`,"aria-label":"one-click-checkbox-cta-button",onClick:()=>{v(!e)},className:"corner-cowi-cart-one-click-checkbox-cta-button shrink-0 grow-0 mr-4 cursor-pointer "+(e?"border border-solid border-cowi-primary-type  bg-cowi-card-bg text-cowi-primary-type rounded-full p-2 transition-all opacity-50 hover:opacity-100":"bg-cowi-accent-bg  text-cowi-accent-fg rounded px-3 py-2 text-sm font-bold "),children:e?a("div",{className:"w-3 h-3",children:a(le,{type:"close-cross",color:d.cornercart.cartConfig.colors.primaryType})}):a("span",{children:l.cart.related_items_cta})}):a("div",{id:`corner-cowi-cart-one-click-checkbox-${t.campaignid}`,className:"corner-cowi-cart-one-click-checkbox h-5 w-5 shrink-0 mr-4",children:a(Po,{index:`oneclick-${t.campaignid}`,checked:e,disabled:u.get.isLoading,onChange:k=>v(k)})})]})]}):null},Bs=({handleApplying:t,handleRemoving:e,...r})=>{const n=ye(null);return W(()=>{const i=n.current;i&&Object.assign(i,r)},[JSON.stringify(r)]),W(()=>{const i=n.current;if(i)return i.addEventListener("corner-discount-input-apply",t),i.addEventListener("corner-discount-input-remove",e),()=>{i.removeEventListener("corner-discount-input-apply",t),i.removeEventListener("corner-discount-input-remove",e)}},[t,e]),a("corner-discount-input",{ref:n})},qs=()=>{const{cartDetails:t,loadingFlag:e,requestCartEdit:r,cartOffers:n,currencyConversionMultiplier:i}=be(),{config:o,currentLanguage:s}=we(),[c,d]=H(""),[l,p]=H(!1),u=t.appliedDiscountCodes.map(C=>C.code),h=t.cartDiscounts.filter(C=>C.type==="automatic").map(C=>C.title).filter(C=>C[0]!==":"),g=n.value.find(C=>C.promoCode===t.attributes._corner_offer_code),m=o?.general_config?.featureFlag?.apps?.cornercart?.use_web_components||!1,w=window.CornerWebComponentsAPI?.shouldShowBoth||!1,b=window.CornerWebComponentsAPI?.shouldShowWebComponent||!1;let x;const _=!!t.cartDiscounts.find(C=>C.title[0]===":");return g&&g.reward&&_&&(x=g.reward.unit==="amount"?`-${_e(100*g.reward.value*i,o.general_config.cornerCurrencyFormat,!0)}`:`-${g.reward.value}%`),a($e,{children:[!m||w?a($e,{children:[o.cornercart.cartConfig.general&&o.cornercart.cartConfig.general.isDiscountBoxActive&&a("div",{id:"corner-cowi-cart-apply-discount-section",className:"py-2 px-3  flex justify-between",children:[a("span",{className:"flex flex-grow",children:a("input",{class:"w-full border border-cowi-outlines border-solid rounded-md mr-3 px-3 bg-cowi-card-bg text-cowi-primary-type",type:"text",placeholder:s.cart.discount_box_place_holder,name:"apply-discount",id:"corner-cowi-cart-apply-discount-input",value:c,onChange:C=>{d(C.target.value)},onKeyDown:C=>{C.key==="Enter"&&c.length>0&&(p(!0),r("addDiscountCode",c,{onFinish:()=>{d(""),p(!1)}}))}})}),a("span",{className:"",children:a("button",{id:"corner-cowi-cart-apply-discount-section-cta-btn","aria-label":"apply-discount-btn",className:`${e.get.isLoading&&"opacity-50 pointer-events-none"} text-center cursor-pointer p-3 border flex items-center border-solid border-cowi-primary-type  bg-cowi-card-bg text-cowi-primary-type hover:shadow-lg transition-all text-base font-bold rounded-md`,onClick:()=>{c.length>0&&(p(!0),r("addDiscountCode",c,{onFinish:()=>{d(""),p(!1)}}))},children:[l&&a("span",{className:"w-5 h-5 pr-2",children:a(le,{type:"loader",className:"animate-spin",color:o.cornercart.cartConfig.colors.primaryType})}),a("span",{children:s.cart.discount_box_cta})]})})]}),a("div",{id:"corner-cowi-cart-applied-discount-info-wrapper",className:"px-5",children:a("div",{id:"corner-cowi-cart-discount-tags-wrapper",className:"flex flex-wrap w-full",children:[u.length>0&&u.map(C=>a(vr,{title:C.toUpperCase(),onClose:()=>{r("removeDiscountCode",C)}})),h.length>0&&h.map(C=>a(vr,{title:C.toUpperCase()})),x&&a(vr,{title:x})]})})]}):null,(m||b)&&a(Bs,{isCartLoading:e.get.isLoading,globalContext:{config:o,currentLanguage:s,cart:t},handleApplying:C=>(function(v){v.detail.code.length===0||e.get.isLoading||r("addDiscountCode",v.detail.code)})(C),handleRemoving:C=>(function(v){r("removeDiscountCode",v.detail.code)})(C),discountCodes:u,automaticDiscounts:h,cornerDiscount:x})]})},Fs=({onCheckoutClick:t,...e})=>{const r=ye(null);return W(()=>{const n=r.current;n&&Object.assign(n,e)},[JSON.stringify(e)]),W(()=>{const n=r.current;if(n)return n.addEventListener("corner-cart-checkout-click",i),()=>{n.removeEventListener("corner-cart-checkout-click",i)};function i(o){typeof t=="function"?o.detail.config?.cornercart?.cartConfig?.expressCheckout?.isActive&&document.querySelector("#dynamic-checkout-cart")?window.useSampleData||t("express"):window.useSampleData||t():console.warn("onCheckoutClick is not a function:",t)}},[t]),a("corner-cart-checkout",{ref:r})},Vs=({handleTermsChange:t,...e})=>{const r=ye(null);return W(()=>{const n=r.current;n&&Object.assign(n,e)},[JSON.stringify(e)]),W(()=>{const n=r.current;if(n)return n.addEventListener("corner-terms-change",t),()=>{n.removeEventListener("corner-terms-change",t)}},[t]),a("corner-cart-terms",{ref:r})},Us=({...t})=>{const e=ye(null);return W(()=>{const r=e.current;r&&Object.assign(r,t)},[JSON.stringify(t)]),a("corner-cart-summary",{ref:e})},Hs=({onShoppingClick:t,...e})=>{const r=ye(null);return W(()=>{const n=r.current;n&&Object.assign(n,e)},[JSON.stringify(e)]),W(()=>{const n=r.current;if(n)return n.addEventListener("corner-secondary-shopping-click",t),()=>{n.removeEventListener("corner-secondary-shopping-click",t)}},[t]),a("corner-continue-shopping-button",{ref:r})},zs=({onCheckboxChange:t,...e})=>{const r=ye(null);return W(()=>{const n=r.current;n&&Object.assign(n,e)},[JSON.stringify(e)]),W(()=>{const n=r.current;if(n&&typeof t=="function")return n.addEventListener("corner-cart-parcelis-one-click-upsell-change",t),()=>{n.removeEventListener("corner-cart-parcelis-one-click-upsell-change",t)}},[t]),a("div",{id:"corner-cart-parcelis-one-click-upsell-wrapper",className:"flex flex-col",children:a("corner-cart-parcelis-one-click-upsell",{ref:r})})},Ws=()=>{const{parcelisInfo:t,requestCartEdit:e,loadingFlag:r,setParcelisUserOptIn:n,cartDetails:i}=be(),{config:o,currentLanguage:s}=we(),{eligibleInsuranceTierObject:c,insuranceItemInCart:d}=t,l=window.corner?.parcelisConfig,p=ye(!1),[u,h]=H(null);W(()=>{(async()=>{if(!c?.productId)return;const b=await Me(c.productId);h(b)})()},[c?.productId]);const g=u?.variants?.find(b=>b.id===c?.variantId)?.price;W(()=>{d||(p.current=!1)},[d,r?.get?.isLoading]);const m=qe(b=>{if(b){if(d||p.current)return;p.current=!0,n(!0),e("addVariants",[{quantity:1,variantId:c?.variantId,productId:c?.productId,properties:{_insure_shipping_amount:g,_corner_partner:"parcelis"}}])}else d&&(n(!1),e("deleteProducts",[d]))},[d,c,e]),w=qe(b=>m(b.detail.checked),[m]);return a(ze,{className:"flex-grow-0 flex-shrink-0 mt-2 overflow-hidden",children:a(zs,{eligibleInsuranceTierObject:c?{...c}:null,insuranceItemInCart:d?{...d}:null,isCartLoading:r?.get?.isLoading,parcelisConfig:{...l},globalContext:{config:o,currentLanguage:s,cart:i},eligibleVariantPrice:g,onCheckboxChange:w})})};class No extends Qe{state={error:null};static getDerivedStateFromError(e){return{error:e.message}}componentDidCatch(e){console.error("Error Caught by CornerCart error boundary ------>",e)}render(){return this.state.error&&"fallback"in this.props?this.props.fallback:this.props.children}}const Gs=()=>{const{shippingOffers:t,cartDetails:e,oneClickCampaigns:r,requestCartEdit:n,preventFreeShipping:i,handleCheckout:o,loadingFlag:s,isCheckoutDisabled:c}=be(),d=ke(),{config:l,currentLanguage:p,cartStyle:u}=we(),[h,g]=H(l.cornercart.cartConfig.termsCheckbox.defaultChecked),[m,w]=H(!1),b=ye(null),[x,_]=H(!1),[C,v]=H(0),[L,k]=H(0),[A,j]=H(0),$=l?.general_config?.featureFlag?.apps?.cornercart?.use_web_components||!1;let P;t&&t.value.length>0&&(P=Ii(t.value,e.total_price));const J=e.cartDiscounts?e.cartDiscounts:[];W(()=>{l&&g(l.cornercart.cartConfig.termsCheckbox.defaultChecked)},[l]),W(()=>{if(e){let q=e.cost.totalAmount,{totalDiscount:M,totalBeforeDiscount:y}=(()=>{let f=0;return e.items.map(F=>{F?.hasComponents&&F?.properties?._cornerOriginalBundlePrice?f+=parseInt(F.properties?._cornerOriginalBundlePrice):F.compareAtPrice&&l.cornercart.cartConfig.general.includeCompareAtPriceInDiscounts?f+=F.compareAtPrice*F.quantity:f+=F.cost.subtotalAmount}),{totalDiscount:f-e.cost.totalAmount,totalBeforeDiscount:f}})();k(y),v(M),j(q)}return()=>{}},[e]);const B=P||C>0||J.length>0||l.cornercart.cartConfig.general&&l.cornercart.cartConfig.general.isDiscountBoxActive,N=({id:q,title:M,value:y})=>a("div",{id:q,className:"px-5 pb-1 flex items-center justify-between ",children:[a("span",{className:"text-sm text-cowi-secondary-type",children:M}),a("span",{className:"text-sm font-bold text-cowi-primary-type",children:y})]});let Q=[{placeholder:"cart_total",value:A,valueType:"currency"}];const Z=()=>{u!=="page"?(d.isCowiOpened.set(!1),window.corner&&window.corner.execute&&window.corner.execute("onCowiClose")):window.location=window.Shopify.routes.root||"/"},U=async(q="normal")=>{if(s.get.isLoading||c)return b.current=q,void w(!0);if(l.cornercart.cartConfig.termsCheckbox.isActive&&l.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_custom_attributes)if(l.cornercart.cartConfig.termsCheckbox.isRequired&&h===!1)_(!0),setTimeout(()=>{_(!1)},800);else{let M={};M[l.cornercart.cartConfig.termsCheckbox.attributeName]=h,n("cartAttributes",M,{onFinish:()=>{window.corner.execute("onCartCtaClick"),o(h,q)}})}else window.corner.execute("onCartCtaClick"),o(!1,q)};W(()=>{!s.get.isLoading&&m&&(b.current,b.current=null,w(!1))},[s.get,m]);const re=()=>{switch(l.cornercart.cartConfig.general.checkoutButtonStyle||"split"){case"split":return a("div",{id:"corner-cowi-cart-cta-wrapper",className:`flex ${B&&" border-t border-solid border-cowi-outlines"}`,children:[a("div",{id:"corner-cowi-cart-cta-total-price-wrapper",className:" px-5 py-3 flex-1 min-w-max",children:[a("div",{id:"corner-cowi-cart-cta-total-price-label",className:"text-sm text-cowi-secondary-type leading-snug",children:p.cart.total_text}),a("div",{id:"corner-cowi-cart-cta-total-price-amount",className:"text-lg font-extrabold text-cowi-primary-type leading-snug",children:_e(A,l.general_config.cornerCurrencyFormat)})]}),a("button",{id:"corner-cowi-cart-summary-card-cta-button","aria-label":"checkout-call-to-action-button",className:`flex items-center justify-center flex-1 hover:basis-1/2 bg-cowi-cta-bg-hover-state text-center cursor-pointer p-4 bg-cowi-accent-bg text-cowi-accent-fg font-base font-bold  transition-all text-lg ${m&&"opacity-50"}`,onClick:()=>{l.cornercart.cartConfig.expressCheckout&&l.cornercart.cartConfig.expressCheckout.isActive&&document.querySelector("#dynamic-checkout-cart")?window.useSampleData||U("express"):window.useSampleData||U()},children:a("div",{children:Le(p.cart.cart_list_cta,Q)})})]});case"unified":return a("div",{id:"corner-cowi-cart-cta-wrapper",children:a("button",{id:"corner-cowi-cart-summary-card-cta-button","aria-label":"checkout-call-to-action-button",className:`flex items-center justify-center text-center w-full cursor-pointer px-4 py-5 hover:pb-6 hover:pt-4 bg-cowi-accent-bg text-cowi-accent-fg font-base font-bold  transition-all text-lg ${m&&"opacity-50"}`,onClick:()=>{l.cornercart.cartConfig.expressCheckout&&l.cornercart.cartConfig.expressCheckout.isActive&&document.querySelector("#dynamic-checkout-cart")?window.useSampleData||U("express"):window.useSampleData||U()},children:[a("span",{id:"corner-cowi-cart-summary-card-cta-button-text",children:Le(p.cart.cart_list_cta,Q)}),a("span",{className:"mx-1",id:"corner-cowi-cart-summary-card-cta-button-seperator",children:"·"}),a("span",{id:"corner-cowi-cart-summary-card-cta-button-price",children:_e(A,l.general_config.cornerCurrencyFormat)})]})});case"classic":return a("div",{id:"corner-cowi-cart-cta-wrapper",children:a("button",{id:"corner-cowi-cart-summary-card-cta-button","aria-label":"checkout-call-to-action-button",className:`flex items-center justify-center text-center w-full cursor-pointer px-4 py-5 hover:pb-6 hover:pt-4 bg-cowi-accent-bg text-cowi-accent-fg font-base font-bold  transition-all text-lg ${m&&"opacity-50"}`,onClick:()=>{l.cornercart.cartConfig.expressCheckout&&l.cornercart.cartConfig.expressCheckout.isActive&&document.querySelector("#dynamic-checkout-cart")?window.useSampleData||U("express"):window.useSampleData||U()},children:Le(p.cart.cart_list_cta,Q)})})}};function Y(q){g(q.target.checked)}return a("div",{children:[window.___INSURANCE_SETTINGS___?.shouldShow&&window.corner?.parcelisConfig?.corner_cart_integration&&window.corner?.cornerConfig?.cartConfig?.parcelisIntegration?.isActive&&$&&a(No,{fallback:null,children:a(Ws,{})}),r.length>0&&a(ze,{id:"corner-cowi-cart-oneclick-campapign-wrapper-card",className:"flex-grow-0 flex-shrink-0 mt-2 overflow-hidden",children:a("div",{id:"corner-cowi-cart-one-click-wrapper",className:"flex flex-col",children:r.map(q=>a(js,{campaignDetails:q}))})}),a(ze,{id:"corner-cowi-cart-summary-card",className:"flex-grow-0 flex-shrink-0 mt-2 overflow-hidden",children:[(!$||window.CornerWebComponentsAPI?.shouldShowBoth)&&l.cornercart.cartConfig.termsCheckbox.isActive&&l.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_custom_attributes&&a("div",{id:"corner-cowi-cart-terms-checkbox-wrapper",class:`flex items-center justify-center py-2 px-5 ${x&&"animate-shake"} border-b border-solid border-cowi-outlines`,children:[a("input",{class:"shrink-0 h-4 w-4 border border-gray-300  rounded-sm bg-white checked:bg-[color:var(--corner-cowi-accent-bg)] focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"checkbox",id:"corner-cowi-cart-terms-checkbox",checked:h,onChange:q=>{g(q.target.checked)}}),a("p",{class:"form-check-label relative inline-block text-cowi-secondary-type text-sm font-bold",children:a("span",{dangerouslySetInnerHTML:{__html:l.cornercart.cartConfig.termsCheckbox.content}})})]}),($||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&a(Vs,{checked:h,globalContext:{config:l,currentLanguage:p,cart:e},content:l.cornercart.cartConfig.termsCheckbox.content,checkBoxWarning:x,handleTermsChange:Y}),a("div",{id:"corner-cowi-cart-summary-card-details-section",children:[a(qs,{}),(!$||window.CornerWebComponentsAPI?.shouldShowBoth)&&a("div",{id:"corner-cowi-cart-summary-items-wrapper",children:[l.cornercart.cartConfig.general.showSubtotalInSummary&&L>0&&A<L&&a(N,{id:"corner-cowi-cart-summary-subtotal",title:p.cart.subtotal_text,value:_e(L,l.general_config.cornerCurrencyFormat)}),P&&!i&&a(N,{id:"corner-cowi-cart-summary-shipping",title:p.cart.shipping_text,value:P.reward.value===100?p.cart.free_text:`${P.reward.value}% OFF`}),C>0&&a(N,{id:"corner-cowi-cart-summary-discount",title:p.cart.discount_text,value:a("span",{id:"corner-cowi-cart-summary-discount-value",children:[a("span",{id:"corner-cowi-cart-summary-discount-negative-sign",children:"-"}),_e(C,l.general_config.cornerCurrencyFormat)]})}),l.cornercart.cartConfig.general.checkoutButtonStyle&&l.cornercart.cartConfig.general.checkoutButtonStyle==="classic"&&a("div",{id:"corner-cowi-cart-cta-total-price-wrapper",className:"px-5 py-2 flex items-center justify-between ",children:[a("span",{className:"text-lg font-bold text-cowi-primary-type",children:p.cart.total_text}),a("span",{className:"text-lg font-bold text-cowi-primary-type",children:_e(A,l.general_config.cornerCurrencyFormat)})]})]}),($||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&a(Us,{globalContext:{config:l,currentLanguage:p,cart:e},amountBeforeDiscount:L,amountAfterDiscount:A,showShippingOffers:!i,shippingOffer:P,totalDiscountAmount:C})]}),window.cornerDevMode&&a("div",{className:"flex flex-wrap p-1",children:Object.keys(e.attributes).map(q=>a("span",{className:"grow-0 shrink-0 mx-1 text-xs border border-solid border-cowi-outlines px-2 rounded-lg",children:[a("b",{children:q}),":",e.attributes[q]]}))}),(!$||window.CornerWebComponentsAPI?.shouldShowBoth)&&l.cornercart.cartConfig.customHtml.aboveCheckoutCta.length>0&&l.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_custom_css&&a("div",{id:"corner-cowi-cart-custom-html-above-cta",className:"border-b border-cowi-outlines border-solid",dangerouslySetInnerHTML:{__html:l.cornercart.cartConfig.customHtml.aboveCheckoutCta}}),(!$||window.CornerWebComponentsAPI?.shouldShowBoth)&&re(),($||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&a(Fs,{type:l.cornercart.cartConfig.general.checkoutButtonStyle||"split",showCartTotal:B,globalContext:{config:l,currentLanguage:p,cart:e},onCheckoutClick:U,totalAmount:A,isCartLoading:m}),(!$||window.CornerWebComponentsAPI?.shouldShowBoth)&&l.cornercart.cartConfig.customHtml.belowCheckoutCta.length>0&&l.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_custom_css&&a("div",{id:"corner-cowi-cart-custom-html-below-cta",className:"border-t border-cowi-outlines border-solid",dangerouslySetInnerHTML:{__html:l.cornercart.cartConfig.customHtml.belowCheckoutCta}}),(!$||window.CornerWebComponentsAPI?.shouldShowBoth)&&a("div",{id:"corner-cowi-cart-secondary-buttons",children:l.cornercart.cartConfig.general.showContinueShoppingBtn&&a("button",{id:"corner-cowi-cart-continue-shopping-button","aria-label":"continue-shopping-button",className:"w-full bg-cowi-card-bg text-center cursor-pointer py-4 border-t border-solid border-cowi-outlines text-cowi-primary-type font-bold hover:-translate-y-1 transition-all text-base",onClick:Z,children:p.cart.cart_list_continue_shopping})}),($||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&a(Hs,{onShoppingClick:Z,globalContext:{config:l,currentLanguage:p,cart:e},content:p.cart.cart_list_continue_shopping,isActive:l.cornercart.cartConfig.general.showContinueShoppingBtn})]})]})};function Qs({...t}){const e=ye(null);return W(()=>{const r=e.current;r&&Object.assign(r,t)},[JSON.stringify(t)]),a("corner-cart-announcement-container",{ref:e})}const Ys=()=>{const{cartAnnouncements:t,cartDetails:e}=be(),{config:r,currentLanguage:n}=we(),i=ke().isCowiOpened.get,o=t?.filter(d=>{const l=d?.config?.displaySurfaces,p=!l||l.includes("cart"),u=!!d?.attributes?.textColor;return p&&u})??[],s=o.length>0?o[0].attributes.textColor:"",c=r?.general_config?.featureFlag?.apps?.cornercart?.use_web_components||!1;return a($e,{children:[o.length&&(c||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&o.length>0?a(Qs,{announcements:o,autoScroll:i,globalContext:{config:r,currentLanguage:n,cart:e}}):null,o&&(!c||window.CornerWebComponentsAPI?.shouldShowBoth)&&a("div",{className:"",children:o.length>0&&a(Js,{buttonColors:s,cartAnnouncements:o,enableAutoplay:i})})]})},Js=({buttonColors:t,cartAnnouncements:e,enableAutoplay:r})=>a(Tt,{id:"corner-message-banner-slider",slidesToShow:1,slidesToScroll:1,enableAutoplay:r,autoplayInterval:5e3,transitionTimingFunction:"linear",data:e,item:(n,i)=>a(yo,{message:n.message,textColor:n.attributes.textColor,bgColor:n.attributes.bgColor,index:i,buttonColors:t,alignmentFlag:!1},n.id)}),Zs=()=>{const{ActiveCartTimerSliderComponent:t}=$o();return a("div",{children:t})};function Xs({onClick:t,...e}){const r=ye(null);return W(()=>{const n=r.current;n&&Object.assign(n,e)},[JSON.stringify(e)]),W(()=>{const n=r.current;if(!n||typeof t!="function")return;const i=()=>t();return n.addEventListener("corner-cart-note-click",i),()=>n.removeEventListener("corner-cart-note-click",i)},[t]),a("corner-cart-note",{ref:r})}const Ks=()=>{const{cartDetails:t,isCartInTempState:e,cartGoal:r,loadingFlag:n,oneClickCampaigns:i}=be(),o=ke(),{config:s,currentLanguage:c}=we(),d=(()=>{if(t&&(t.items||t.tempCartItems)){let h=[],g=e?t.tempCartItems:t.items;return s.cornercart.cartConfig.general.cartItemOrder==="lastItemBottom"&&(g=[...g].reverse()),i.length>0&&i.map(m=>{m.upsellConfig&&m.upsellConfig.isDisplayedinCart===!1&&h.push(m.campaignid)}),g.filter(m=>!(m.properties&&m.properties._oneClickRefId&&h.includes(m.properties._oneClickRefId)))}return[]})(),l=s?.general_config?.featureFlag?.apps?.cornercart?.use_web_components||!1,p=s.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_advanced_color_customisation?s.cornercart.cartConfig.colors.primaryType:"rgb(25,35,55)",u=()=>{o.cowiOverlay.set({type:"cartNoteAdder",params:{}})};return a("div",{id:"corner-cowi-cart-wrapper",className:"flex flex-col h-full ",children:t&&a($e,{children:[a(ze,{id:"corner-cowi-cart-item-list-card",className:"relative flex-grow min-h-0 overflow-y-auto 2xl:my-2",translucent:!0,children:[a(Ys,{}),a(Zs,{}),r.cartGoalCampaign&&r.currentMilestoneIndex!==null&&a("div",{id:"corner-cowi-cart-goal-meter-wrapper",className:"border-b border-cowi-outlines border-solid",children:a(Os,{})}),a(To,{isActive:window&&window.showCornerCartLoadingFlagForExternalDiscount===!0&&n.get.isLoading||n.get.isLoading&&n.get.isVisible}),d.length>0?a("div",{id:"corner-cowi-cart-item-list-card-inner-elements-wrapper",children:[s.cornercart.cartConfig.customHtml.aboveItemList.length>0&&s.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_custom_css&&a("div",{id:"corner-cowi-cart-custom-html-above-item",className:"border-b border-cowi-outlines border-solid",dangerouslySetInnerHTML:{__html:s.cornercart.cartConfig.customHtml.aboveItemList}}),a("div",{id:"corner-cowi-cart-item-list-wrapper",children:a("div",{id:"corner-cowi-cart-item-list",className:"flex flex-col",children:d.map((h,g)=>a(Cs,{index:g,item:h},`${h.key}-${g}`))})}),r.cartGoalCampaign&&r.cartGoalCampaign.config&&r.cartGoalCampaign.config.featureBelowCartItems&&a(Ds,{}),s.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_related_products&&(()=>{const h=s.cornercart.cartConfig.general.showRelatedProducts;if(!d.length)return!1;const g=d.some(m=>m.tags.includes("corner-hide-all-cart-upsells"));return h&&!g})()&&a(Ns,{}),s.cornercart.cartConfig.general.showOptionalNotes&&s.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_optional_note&&a($e,{children:[(!l||window.CornerWebComponentsAPI?.shouldShowBoth)&&a("div",{id:"corner-cowi-cart-note-wrapper",className:"flex justify-center mt-5",children:a("div",{id:"corner-cowi-cart-note-btn",onClick:u,className:"flex cursor-pointer border border-cowi-outlines border-solid items-center text-xs rounded-full bg-cowi-card-bg px-3 py-1 transition-all hover:-translate-y-1 max-w-fit mb-5",children:[a("div",{id:"corner-cowi-optional-note-btn-icon",className:"w-5 h-5 mr-2",children:a(le,{type:"note",color:p})}),a("span",{className:"text-base text-cowi-primary-type",children:c.cart.optional_note_btn_text})]})}),(l||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&a(Xs,{buttonText:c.cart.optional_note_btn_text,iconColor:p,onClick:u,globalContext:{config:s,currentLanguage:c,cart:t}})]}),s.cornercart.cartConfig.customHtml.belowItemList.length>0&&s.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_custom_css&&a("div",{id:"corner-cowi-cart-custom-html-below-item",className:"border-t border-cowi-outlines border-solid",dangerouslySetInnerHTML:{__html:s.cornercart.cartConfig.customHtml.belowItemList}})]}):a("div",{id:"corner-corner-cart-item-list-empty",children:s.cornercart.cartConfig.customHtml.emptyCart.length>0&&s.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_custom_css?a("div",{dangerouslySetInnerHTML:{__html:s.cornercart.cartConfig.customHtml.emptyCart}}):a("div",{children:[a("div",{className:"flex justify-center",children:a("div",{className:"mt-5 mb-6 w-20",children:a(le,{type:"non-smiley-rounded-cart",color:s.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_advanced_color_customisation?s.cornercart.cartConfig.colors.secondaryBg||s.cornercart.cartConfig.colors.outlines:"rgb(230,230,235)"})})}),a("div",{className:"text-center text-cowi-secondary-type",children:c.cart.cart_empty_state})]})})]}),t&&d.length>0&&a(Gs,{}),!s.general_config.featureFlag.apps.cornercart.remove_corner_branding&&a("div",{className:"text-center flex-grow-0 py-1 hover:border border-cowi-outlines rounded-lg",children:a("a",{className:"no-underline text-xs text-cowi-secondary-type",href:`https://apps.shopify.com/cornercart?utm_source=${window.location.host}&utm_medium=corner-widget&utm_campaign=widget-branding`,target:"_blank",children:"Powered By Corner"})})]})})},ec=({index:t,rewards:e,content:r,isAchieved:n})=>{const i=ke(),{config:o,currentLanguage:s}=we(),{cartDetails:c}=be(),[d,l]=H([]),[p,u]=H(0);return W(async()=>{let h=[];await Promise.all(e.rewardStack.map(async(g,m)=>{if(m<4)switch(g.type){case"freeProductVariant":{let w=await Me(g.target.product_id);const b=parseInt(Te(g.target.id)),x=w.variants.find(_=>_.id===b);x&&x.image?h.push(x.image):h.push(w.image);break}case"freeProduct":{let w=await Me(Te(g.target.id));h.push(w.image);break}case"shippingDiscount":if(window.freeShippingIconUrl)return window.freeShippingIconUrl;h.push("https://imagedelivery.net/QI2wC6Vls23vJd9vFFaomg/63d8d177-dbdd-4dea-d1cf-12e592388500/public");break;case"orderDiscount":if(window.orderDiscountIconUrl)return window.freeShippingIconUrl;h.push("https://imagedelivery.net/QI2wC6Vls23vJd9vFFaomg/54e83590-04bd-4ae3-6184-148513344100/public")}})),u((()=>{const g=e.stackSelectCount;let m=[],w=c.items.filter(x=>x.properties&&Object.keys(x.properties).includes("_corner_promo_code")&&Object.keys(x.properties).includes("_corner_key")),b=e.rewardStack.filter(x=>x.type==="freeProduct"||x.type==="productDiscount"||x.type==="freeProductVariant");return b&&b.map((x,_)=>{let C=w.find(v=>x.type==="freeProduct"||x.type==="productDiscount"?parseInt(v.productId)===parseInt(Te(x.target.id))&&v.properties._corner_key===`${v.productId}-${x.promoCode}(1)-${_}`:x.type==="freeProductVariant"?parseInt(v.variantId)===parseInt(Te(x.target.id))&&v.properties._corner_key===`${v.productId}-${x.promoCode}(1)-${_}`:void 0);C&&m.push({variantId:C.variantId,productId:C.productId,rewardObject:x})}),g-m.length})()),l(h)},[]),a("div",{id:`corner-cowi-cart-goal-offers-card-wrapper-${t}`,className:"corner-cowi-cart-goal-offers-card-wrapper flex items-center px-3 py-5 border-b border-solid border-cowi-outlines",children:[a("div",{id:`corner-cowi-cart-goal-offers-card-image-${t}`,className:"corner-cowi-cart-goal-offers-card-image w-14 relative md:w-16 shrink-0",children:d.length>0&&(e.rewardStack.length===1?a("img",{className:"w-full rounded-lg",src:d[0],alt:"Product Image"}):a("div",{className:"flex flex-wrap justify-center",children:d.map(h=>a("div",{className:"p-1 w-1/2 shrink-0",children:a("img",{className:"w-full rounded-md",src:h,alt:"Product Image"})}))}))}),a("div",{id:`corner-cowi-cart-goal-offers-card-content-${t}`,className:"corner-cowi-cart-goal-offers-card-content grow px-3",children:[a("p",{id:`corner-cowi-cart-goal-offers-card-content-title-${t}`,className:"corner-cowi-cart-goal-offers-card-content-title font-bold text-cowi-primary-type ",children:n?r.postGoalOfferPageTitle:r.preGoalOfferPageTitle}),a("p",{id:`corner-cowi-cart-goal-offers-card-content-description-${t}`,className:"corner-cowi-cart-goal-offers-card-content-description text-cowi-secondary-type text-tiny",children:n?r.postGoalOfferPageSubTitle:r.preGoalOfferPageSubTitle}),n&&(p===0?a("p",{className:"flex px-2 py-1 mt-3 max-w-fit items-center text-cowi-primary-type bg-cowi-secondary-bg rounded-md text-sm font-bold",children:[a("span",{className:"h-4 w-4 mr-2",children:a(le,{type:"check",color:o.cornercart.cartConfig.colors.primaryType})}),a("span",{children:[" ",s.cart.offer_card_achieved_and_selected_tag]})]}):p!==0?a("p",{className:"flex px-2 py-1 mt-3 max-w-fit items-center text-cowi-primary-type bg-cowi-secondary-bg rounded-md text-sm font-bold",children:[a("span",{className:"h-4 w-4 mr-2",children:a(le,{type:"gift",color:o.cornercart.cartConfig.colors.primaryType})}),a("span",{children:[" ",s.cart.offer_card_achieved_tag]})]}):void 0)]}),(()=>{if(e.rewardStack.length>1||e.rewardStack[0].type==="freeProduct"||e.rewardStack[0].type==="freeProductVariant")return a("button",n?{id:`corner-cowi-cart-goal-offers-card-cta-${t}`,"aria-label":"offer-cta",className:"corner-cowi-cart-goal-offers-card-cta px-3 py-2 font-bold bg-cowi-accent-bg text-cowi-accent-fg shrink-0 text-sm rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all",onClick:()=>{i.cowiOverlay.set({type:"rewardChooser",params:{stackSelectCount:e.stackSelectCount,prerequisites:e.prerequisites,rewardStack:e.rewardStack,rewardMultiplier:1,isRewardSelectionSkipable:!0,onClose:()=>{i.cowiOverlay.set(null)}}})},children:s.cart.offer_card_cta_achieved}:{id:`corner-cowi-cart-goal-offers-card-cta-${t}`,"aria-label":"offer-view-gift",className:"corner-cowi-cart-goal-offers-card-cta px-3 py-2 font-bold bg-cowi-card-bg border border-solid border-cowi-accent-bg text-cowi-accent-bg shrink-0 text-sm rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all",onClick:()=>{i.cowiOverlay.set({type:"rewardChooser",params:{stackSelectCount:e.stackSelectCount,prerequisites:e.prerequisites,rewardStack:e.rewardStack,rewardMultiplier:1,isRewardSelectionSkipable:!0,onClose:()=>{i.cowiOverlay.set(null)}}})},children:s.cart.offer_card_cta_unachieved})})()]})},tc=({index:t,rewards:e,content:r,isAchieved:n,rewardMultiplier:i})=>{const o=ke(),{config:s,currentLanguage:c}=we(),[d,l]=H([]),[p,u]=H(!1);return W(async()=>{let h=[];await Promise.all(e.rewardStack.map(async(g,m)=>{if(m<4)switch(g.type){case"freeProductVariant":{let w=await Me(g.target.product_id);const b=parseInt(Te(g.target.id)),x=w.variants.find(_=>_.id===b);x&&x.image?h.push(x.image):h.push(w.image);break}case"freeProduct":{let w=await Me(Te(g.target.id));h.push(w.image);break}}})),l(h)},[]),a("div",{id:`corner-cowi-bxgy-offers-card-wrapper-${t} `,className:"corner-cowi-bxgy-offers-card-wrapper px-3 py-5 border-b border-solid border-cowi-outlines",children:[a("div",{id:`corner-cowi-bxgy-offers-card-main-content-wrapper-${t} `,className:"corner-cowi-bxgy-offers-card-main-content-wrapper flex items-center",children:[a("div",{id:`corner-cowi-bxgy-offers-card-image-${t} `,className:"corner-cowi-bxgy-offers-card-image w-14 relative md:w-16 shrink-0",children:d.length>0&&(e.rewardStack.length===1?a("img",{className:"w-full rounded-lg",src:d[0],alt:"Product Image"}):a("div",{className:"flex flex-wrap justify-center",children:d.map(h=>a("div",{className:"p-1 w-1/2 shrink-0",children:a("img",{className:"w-full rounded-md",src:h,alt:"Product Image"})}))}))}),a("div",{id:`corner-cowi-bxgy-offers-card-content-${t} `,className:"corner-cowi-bxgy-offers-card-content grow px-3",children:[a("p",{id:`corner-cowi-bxgy-offers-card-content-title-${t} `,className:"corner-cowi-bxgy-offers-card-content-title font-bold text-cowi-primary-type ",children:n?r.postGoalOfferPageTitle:r.preGoalOfferPageTitle}),a("p",{id:`corner-cowi-bxgy-offers-card-content-description-${t} `,className:"corner-cowi-bxgy-offers-card-content-description text-cowi-secondary-type text-tiny",children:n?r.postGoalOfferPageSubTitle:r.preGoalOfferPageSubTitle}),n&&a("p",{className:"flex px-2 py-1 mt-3 max-w-fit items-center text-cowi-primary-type bg-cowi-secondary-bg rounded-md text-sm font-bold",children:[a("span",{className:"h-4 w-4 mr-2",children:a(le,{type:"check",color:s.cornercart.cartConfig.colors.primaryType})}),a("span",{children:[" ",c.cart.offer_card_achieved_tag]})]})]}),n&&i>1?a("button",{id:`corner-cowi-bxgy-offers-card-cta-${t}`,"aria-label":"bxgy-offer-expand-multiple-gifts",className:`corner-cowi-bxgy-offers-card-cta px-3 py-2 font-bold  shrink-0 text-sm rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all
        ${p?"bg-cowi-card-bg text-cowi-accent-bg":"bg-cowi-accent-bg text-cowi-accent-fg"}
        `,onClick:()=>{u(!p)},children:p?c.cart.offer_card_cta_multiple_gift_collapse:c.cart.offer_card_cta_multiple_gift_expand}):(()=>{if(e.rewardStack.length>1||e.rewardStack[0].type==="freeProduct"||e.rewardStack[0].type==="freeProductVariant")return a("button",n?{id:`corner-cowi-bxgy-offers-card-cta-${t}`,"aria-label":"bxgy-offer-cta",className:"px-3 py-2 font-bold bg-cowi-accent-bg text-cowi-accent-fg shrink-0 text-sm rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all",onClick:()=>{o.cowiOverlay.set({type:"rewardChooser",params:{stackSelectCount:e.stackSelectCount,prerequisites:e.prerequisites,rewardStack:e.rewardStack,rewardMultiplier:i,isRewardSelectionSkipable:!0,onClose:()=>{o.cowiOverlay.set(null)}}})},children:c.cart.offer_card_cta_achieved}:{id:`corner-cowi-bxgy-offers-card-cta-${t}`,"aria-label":"bxgy-offer-view-gift",className:"px-3 py-2 font-bold bg-cowi-card-bg border border-solid border-cowi-accent-bg text-cowi-accent-bg shrink-0 text-sm rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all",onClick:()=>{o.cowiOverlay.set({type:"rewardChooser",params:{stackSelectCount:e.stackSelectCount,prerequisites:e.prerequisites,rewardStack:e.rewardStack,rewardMultiplier:i,isRewardSelectionSkipable:!0,onClose:()=>{o.cowiOverlay.set(null)}}})},children:c.cart.offer_card_cta_unachieved})})()]}),p&&i>1&&a("div",{id:`corner-cowi-bxgy-offers-card-multipliers-wrapper-${t} `,className:"corner-cowi-bxgy-offers-card-multipliers-wrapper border border-solid border-cowi-outlines mt-3 rounded-md",children:(()=>{let h=[];for(let g=1;g<=i;g++){let m=[{placeholder:"number",value:g}];h.push(a("div",{className:`flex flex-wrap justify-between px-3 py-2 ${g!==i&&"border-b border-solid border-cowi-outlines"} `,children:[a("p",{className:"font-bold text-cowi-secondary-type ",children:Le(c.cart.offer_card_cta_multiple_gift_title,m)}),a("button",{id:`corner-cowi-bxgy-offers-card-cta-${t} `,"aria-label":"bxgy-offer-cta",className:"corner-cowi-bxgy-offers-card-cta px-2 py-2 font-bold bg-cowi-accent-bg text-cowi-accent-fg shrink-0 text-sm rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all",onClick:()=>{let w={">=":[...e.prerequisites[">="][0],g]};o.cowiOverlay.set({type:"rewardChooser",params:{stackSelectCount:e.stackSelectCount,prerequisites:w,rewardStack:e.rewardStack,rewardMultiplier:g,isRewardSelectionSkipable:!0,onClose:()=>{o.cowiOverlay.set(null)}}})},children:c.cart.offer_card_cta_achieved})]}))}return h})()})]})},rc=({index:t,discountCodeConfig:e,code:r,content:n})=>{const{config:i}=we(),{requestCartEdit:o,cartDetails:s}=be(),[c,d]=H(!1),[l,p]=H(!1);return W(()=>{if(s&&s.appliedDiscountCodes&&s.appliedDiscountCodes.length>0){let u=s.appliedDiscountCodes.findIndex(h=>h.code===r&&h.applicable===!0);d(u>-1)}},[s]),a("div",{id:`corner-cowi-discount-coupon-card-wrapper-${t}`,className:"corner-cowi-discount-coupon-card-wrapper flex items-center px-3 py-5 border-b border-solid border-cowi-outlines",children:[a("div",{id:`corner-cowi-discount-coupon-card-image-${t}`,className:"corner-cowi-discount-coupon-card-image w-14 self-stretch relative md:w-16 shrink-0",children:e.imageUrl&&e.imageUrl.length>5?a("img",{className:"w-full rounded-lg",src:e.imageUrl,alt:"Offer Image"}):a("div",{className:"flex flex-wrap justify-center items-center w-full  rounded-lg bg-cowi-secondary-bg h-full",children:a("div",{className:`h-6 w-6 ${l&&"animate-spin"}`,children:a(le,{type:l?"loader":"tag",color:i.cornercart.cartConfig.colors.primaryType})})})}),a("div",{id:`corner-cowi-discount-coupon-card-content-${t}`,className:"corner-cowi-discount-coupon-card-content grow px-3",children:[a("p",{id:`corner-cowi-discount-coupon-card-content-title-${t}`,className:"corner-cowi-discount-coupon-card-content-title font-bold text-cowi-primary-type ",children:n.cardTitle}),a("p",{id:`corner-cowi-discount-coupon-card-content-description-${t}`,className:"orner-cowi-discount-coupon-card-content-description text-cowi-secondary-type text-tiny",children:n.cardSubTitle})]}),a("div",{className:"border border-solid border-cowi-outlines rounded-lg flex flex-col overflow-hidden",children:[a("div",{className:"text-base font-bold px-2 py-1 text-center flex items-center justify-center",children:[a("div",{children:r.length>11?r.slice(0,10)+"...":r}),a("div",{className:`h-5 w-5 cursor-pointer ${l&&"animate-spin"}`,onClick:()=>{navigator.clipboard.writeText(r)},children:a(le,{type:l?"loader":"copy",color:i.cornercart.cartConfig.colors.primaryType})})]}),c?a("div",{className:"bg-cowi-secondary-bg text-cowi-primary-type font-bold flex items-center justify-center  text-center p-2 ",children:a("span",{children:[" ",n.postApplicationCta]})}):a("button",{id:`corner-cowi-discount-coupon-card-cta-${t}`,"aria-label":"apply-discount-btn",onClick:()=>{p(!0),o("addDiscountCode",r,{onFinish:()=>{p(!1)}})},className:"corner-cowi-discount-coupon-card-cta flex items-center justify-center bg-cowi-accent-bg text-center p-2 text-cowi-accent-fg font-bold cursor-pointer",children:a("span",{children:n.preApplicationCta})})]})]})},nc=()=>{ke();const{cartDetails:t,offerPageItems:e,loadingFlag:r}=be();return a("div",{id:"corner-cowi-offers-wrapper",className:"flex flex-col h-full ",children:t&&e.length>0&&a($e,{children:a(ze,{id:"corner-cowi-offers-item-list-bg-card",className:"relative flex-grow min-h-0 overflow-y-auto 2xl:my-2",translucent:!0,children:[a(To,{isActive:r.get.isLoading}),e.map((n,i)=>{switch(n.type){case"goal_meter_in_cart":return a(ec,{index:i,isAchieved:n.isAchieved,rewards:n.rewards,content:n.content,goal:n.goal});case"bxgy_free":return a(tc,{index:i,isAchieved:n.isAchieved,rewardMultiplier:n.rewardMultiplier,rewards:n.rewards,content:n.content,goal:n.goal});case"discount_code":return a(rc,{index:i,discountCodeConfig:n.config,code:n.discount_code,content:n.content})}})]})})})},ic=()=>{const t=ke(),{config:e,currentLanguage:r}=we(),{addProductsWithRewards:n,requestCartEdit:i}=be(),[o,s]=H(),[c,d]=H(1),[l,p]=H(!1),[u,h]=H(!1),[g,m]=H(null),[w,b]=H(!1);let x,_,{productId:C,productInfo:v,rewardObject:L,prerequisites:k,properties:A,onClose:j,hideVariantOptionSelectors:$,variantId:P,removingCheckOnCartItemAdderClose:J}=t.cowiOverlay.get?t.cowiOverlay.get.params:{};const B=()=>{h(!1),p(!1),j&&j(),J&&J()};if(o&&(x=w&&g?(()=>{let N,Q;return o.sellingPlanAllocations.nodes.forEach(Z=>{Z.sellingPlan.id.split("/").pop()===g&&(N=Z.sellingPlan)}),N.priceAdjustments[0].adjustmentValue.adjustmentAmount!==void 0?Q=o.price-100*N.priceAdjustments[0].adjustmentValue.adjustmentAmount.amount:N.priceAdjustments[0].adjustmentValue.price!==void 0?Q=100*N.priceAdjustments[0].adjustmentValue.price.amount:N.priceAdjustments[0].adjustmentValue.adjustmentPercentage!==void 0&&(Q=o.price*(100-N.priceAdjustments[0].adjustmentValue.adjustmentPercentage)/100),Q>0?Q:0})():o.price,w&&g?o.price>x&&(_=o.price):o.compareAtPrice&&o.compareAtPrice>o.price&&(_=o.compareAtPrice)),W(()=>{(async()=>{if(v||(v=await Me(C)),$&&P){let Q;v.variants.forEach(Z=>{Z.id===P&&(s(Z),Q=Z)}),Q.sellingPlanAllocations&&Q.sellingPlanAllocations.nodes.length>0&&(b(!0),v.requiresSellingPlan?m(Q.sellingPlanAllocations.nodes[0].sellingPlan.id.split("/").pop()):m(""))}else v.preferredVariant?(s(v.preferredVariant),v.preferredVariant.sellingPlanAllocations&&v.preferredVariant.sellingPlanAllocations.nodes.length>0&&(b(!0),v.requiresSellingPlan?m(v.preferredVariant.sellingPlanAllocations.nodes[0].sellingPlan.id.split("/").pop()):m(""))):(s(v.variants[0]),v.variants[0].sellingPlanAllocations&&v.variants[0].sellingPlanAllocations.nodes.length>0&&(b(!0),v.requiresSellingPlan?m(v.variants[0].sellingPlanAllocations.nodes[0].sellingPlan.id.split("/").pop()):m("")))})();const N=setTimeout(()=>{h(!0)},200);return()=>{clearTimeout(N)}},[t.cowiOverlay.get]),v&&o)return a("div",{id:"corner-cowi-cart-item-adder-bg",className:"absolute flex flex-col justify-end top-0 right-0 w-full h-full z-30 bg-black bg-opacity-50 transition-all "+(u?"opacity-100":"opacity-0"),children:[a("div",{id:"corner-cowi-cart-item-adder-close",className:"flex justify-center mb-6",children:a("button",{id:"corner-cowi-cart-item-adder-close-btn","aria-label":"close-cart-item-adder",onClick:()=>B(),className:"flex cursor-pointer items-center text-xs rounded-full bg-cowi-card-bg shadow-lg p-4 transition-all focus:outline-none hover:-translate-y-1 hover:rotate-90 max-w-fit z-50",children:a("div",{id:"corner-cowi-cart-item-adder-close-btn-icon",className:"w-3 h-3",children:a(le,{type:"close-cross",color:e.cornercart.cartConfig.colors.primaryType})})})}),a("div",{id:"corner-cowi-cart-item-adder-card-wrapper",className:"w-full",children:a(ze,{id:"corner-cowi-cart-item-adder-card",className:"m-0 w-full p-6 transition-all shadow-lg  "+(u?"translate-y-0":"translate-y-full"),children:[a("div",{id:"corner-cowi-cart-item-adder-item",className:"flex items-center pb-4","data-corner-variant-id":o.id,"data-corner-product-id":v.id,children:[a("div",{id:"corner-cowi-cart-item-adder-item-image",className:"relative w-14 flex flex-wrap items-center flex-grow-0 flex-shrink-0 overflow-hidden  p-1",children:a("img",{className:"w-full rounded-lg shadow",src:o.image?o.image:v.image,alt:"product-image"})}),a("div",{id:"corner-cowi-cart-item-adder-item-info",className:"flex-grow px-2",children:[a("a",{href:v.url,className:"text-base text-cowi-primary-type font-bold hover:text-[color:var(--corner-cowi-accent-bg)] transition-all",children:v.title.length>50?`${v.title.substring(0,45)}...`:v.title}),o.selectedOptions.length>1&&a("div",{className:"text-xs text-cowi-secondary-type",children:o.selectedOptions.map((N,Q)=>Q!==o.selectedOptions.length-1?`${N.value},`:`${N.value}`)})]}),a("div",{id:"corner-cowi-cart-item-adder-item-info-price-wrapper",className:" font-bold flex-shrink-0 text-center",children:[a("div",{id:"corner-cowi-cart-item-adder-item-info-compare-at-price",className:"font-xs text-cowi-secondary-type line-through",children:_&&_e(_*c,e.general_config.cornerCurrencyFormat)}),a("div",{id:"corner-cowi-cart-item-adder-item-info-price",className:"text-base text-cowi-primary-type",children:_e(x*c,e.general_config.cornerCurrencyFormat)})]})]}),a("div",{id:"corner-cowi-cart-item-adder-option-selector-wrapper",children:[!$&&v.options.map((N,Q)=>{if(N.values.length>1)return a("div",{children:[a("label",{className:"font-bold text-xs mb-1 text-cowi-primary-type",children:N.name}),a("select",{onChange:()=>(()=>{let Z=[];v.options.map((re,Y)=>{let q=document.getElementById(`corner-cowi-cart-item-adder-item-option-selector-${Y}`)?document.getElementById(`corner-cowi-cart-item-adder-item-option-selector-${Y}`).value:re.values[0];Z[Y]={name:re.name,value:q}});let U=v.variants.find(re=>JSON.stringify(re.selectedOptions)===JSON.stringify(Z));if(U)s(U),U.sellingPlanAllocations&&U.sellingPlanAllocations.nodes.length===0&&(m(null),b(!1));else{let re={...productDetails.variants[0],available:!1,availableForSale:!1,selectedOptions:Z};s(re),re.sellingPlanAllocations&&re.sellingPlanAllocations.nodes.length===0&&(m(null),b(!1))}})(),name:N.name,className:"block w-full text-base py-2 mb-3 bg-cowi-card-bg border border-cowi-outlines border-solid rounded text-cowi-primary-type focus:outline-none",id:`corner-cowi-cart-item-adder-item-option-selector-${Q}`,children:[a("option",{value:!0,disabled:!0,children:N.name}),N.values.map(Z=>a("option",{selected:Z===o.selectedOptions[Q].value,value:Z,children:Z}))]})]})}),o&&o.sellingPlanAllocations&&o.sellingPlanAllocations.nodes.length>0&&a("div",{children:[a("label",{className:"font-bold text-xs mb-1 text-cowi-primary-type",children:v.sellingPlanGroups.nodes[0].name}),a("select",{value:g,onChange:N=>m(N.target.value),name:"selling_plan",className:"block w-full text-base py-2 mb-3 bg-cowi-card-bg border border-cowi-outlines border-solid rounded text-cowi-primary-type focus:outline-none",id:"corner-cowi-cart-item-adder-item-selling-plan-selector",disabled:o.sellingPlanAllocations.nodes.length===1&&v.requiresSellingPlan===!0,children:[v.requiresSellingPlan===!1&&a("option",{value:"",children:r.cart.one_time_purchase_plan_title}),o.sellingPlanAllocations.nodes.map(N=>a("option",{value:N.sellingPlan.id.split("/").pop(),children:N.sellingPlan.name},N.sellingPlan.id))]})]})]}),a("div",{id:"corner-cowi-cart-item-adder-cta-qty-wrapper",className:"flex items-stretch  mt-3",children:[!v.tags.includes("corner-hide-qty")&&!L&&a("div",{id:"corner-cowi-cart-item-adder-qty",className:"flex items-center justify-center  border pb-1 border-cowi-outlines border-solid mr-2 rounded-lg",children:[a("button",{"aria-label":"decrease-quantity",onClick:()=>{c>1&&d(N=>N-1)},className:` ${c===1&&"opacity-50 pointer-events-none"} leading-none text-cowi-secondary-type text-xl focus:outline-none bg-transparent px-3 pb-1 transition-all duration-500 cursor-pointer rounded-full hover:bg-[color:var(--corner-cowi-accent-bg)]  hover:text-[color:var(--corner-cowi-accent-fg)]`,children:a("span",{children:"-"})}),a("div",{className:"text-cowi-primary-type text-center focus:outline-none bg-transparent text-base font-bold appearance-none shrink-0 px-1",children:Jr(c,v.productType)}),a("button",{"aria-label":"increase-quantity",onClick:()=>{d(N=>N+1)},className:"leading-none text-cowi-secondary-type text-xl focus:outline-none bg-transparent px-3 pb-1 cursor-pointer transition-all duration-500 rounded-full hover:bg-[color:var(--corner-cowi-accent-bg)]  hover:text-[color:var(--corner-cowi-accent-fg)] ",children:a("span",{children:"+"})})]}),a("button",{"aria-label":"add-to-cart",onClick:async()=>{if(p(!0),L)n([{rewardIndex:0,variantId:o.id,productId:v.id,quantity:c,availability:o.available,rewardObject:L,prerequisites:k}],B),B();else{const N=[{quantity:c,variantId:o.id,productId:v.id,properties:A||null,selling_plan:g}];i("addVariants",N,{onFinish:()=>{B()}})}},id:"corner-cowi-cart-item-adder-cta-button",className:`flex-grow flex items-center justify-center text-center py-3 cursor-pointer bg-cowi-accent-bg text-cowi-accent-fg font-base font-bold rounded-lg hover:saturate-200 trannsition-all text-lg  ${!o.available&&"pointer-events-none saturate-0 opacity-60"}`,children:a("div",l?{className:"w-8 h-8 animate-spin",children:a(le,{type:"loader",color:e.cornercart.cartConfig.colors.accentFg})}:{children:o.available?r.cart.add_item:r.cart.sold_out})})]})]})})]})};function oc({onCancel:t,onSave:e,...r}){const n=ye(null);return W(()=>{const i=n.current;i&&Object.assign(i,r)},[JSON.stringify(r)]),W(()=>{const i=n.current;if(i)return i.addEventListener("corner-cart-note-overlay-cancel",o),i.addEventListener("corner-cart-note-overlay-save",s),()=>{i.removeEventListener("corner-cart-note-overlay-cancel",o),i.removeEventListener("corner-cart-note-overlay-save",s)};function o(){typeof t=="function"&&t()}function s(c){typeof e=="function"&&e(c.detail.note,()=>{i.resetLoader?.()})}},[t,e]),a("corner-cart-note-overlay",{ref:n})}const ac=()=>{const{config:t,currentLanguage:e}=we(),r=ke(),{requestCartEdit:n,cartDetails:i}=be(),o=t?.general_config?.featureFlag?.apps?.cornercart?.use_web_components||!1,s=()=>{r.cowiOverlay.set(null)},c=(d,l)=>{n("addNote",d,{onFinish:()=>{l?.(),r.cowiOverlay.set(null)}})};return a($e,{children:[(!o||window.CornerWebComponentsAPI?.shouldShowBoth)&&a(sc,{}),(o||window.CornerWebComponentsAPI?.shouldShowWebComponent)&&a(oc,{initialNote:i.note||"",titleText:e.cart.optional_note_title,cancelText:e.cart.optional_note_cancel,ctaText:e.cart.optional_note_cta,accentBgColor:t.cornercart.cartConfig.colors.accentBg,accentFgColor:t.cornercart.cartConfig.colors.accentFg,loaderColor:t.cornercart.cartConfig.colors.accentFg,onCancel:s,onSave:c,globalContext:{config:t,currentLanguage:e,cart:i}})]})},sc=()=>{const{config:t,currentLanguage:e}=we(),r=ke(),{requestCartEdit:n,cartDetails:i}=be(),[o,s]=H(!1),[c,d]=H(!1),[l,p]=H(i.note||"");return W(()=>{const u=setTimeout(()=>{s(!0)},200);return()=>{clearTimeout(u)}},[]),a("div",{id:"corner-cowi-cart-note-adder-bg",className:"absolute flex flex-col justify-center top-0  right-0 w-full h-full z-30 bg-black bg-opacity-50 transition-all "+(o?"opacity-100":"opacity-0"),children:a("div",{id:"corner-cowi-cart-note-adder-card-wrapper",className:"w-full p-4",children:a(ze,{id:"corner-cowi-cart-note-adder-card",className:"m-0 w-full p-6 transition-all shadow-lg  "+(o?"translate-y-0":"translate-y-full"),children:[a("div",{id:"corner-cowi-cart-note-adder-title",className:"text-center font-bold text-xl mb-3 text-cowi-primary-type",children:e.cart.optional_note_title}),a("div",{id:"corner-cowi-cart-note-adder-input",className:"text-center text-base",children:a("textarea",{value:l,onChange:u=>{p(u.target.value)},rows:"4",className:"w-full border border-solid border-cowi-outlines focus:outline-none rouded-lg bg-cowi-card-bg text-cowi-primary-type"})}),a("div",{className:"flex",children:[a("button",{"aria-label":"optional-note-cancel",onClick:()=>{r.cowiOverlay.set(null)},id:"corner-cowi-cart-note-adder-cta-button",className:"flex-grow cursor-pointer flex items-center justify-center text-center mt-5 mr-2 py-3 bg-cowi-card-bg text-cowi-accent-bg font-base font-bold rounded-lg hover:saturate-200 trannsition-all text-lg",children:e.cart.optional_note_cancel}),a("button",{"aria-label":"optional-note-cta",onClick:async()=>{d(!0),n("addNote",l,{onFinish:()=>{d(!1),r.cowiOverlay.set(null)}})},id:"corner-cowi-cart-note-adder-cta-button",className:"flex-grow flex items-center justify-center text-center mt-5 py-3 cursor-pointer bg-cowi-accent-bg text-cowi-accent-fg font-base font-bold rounded-lg hover:saturate-200 trannsition-all text-lg",children:c?a("div",{className:"w-4 h-4 animate-spin",children:a(le,{type:"loader",color:t.cornercart.cartConfig.colors.accentFg})}):a("span",{children:[" ",e.cart.optional_note_cta]})})]})]})})})},cc=({reward:t,itemIndex:e,rewardMultiplier:r,onChange:n,isSelectable:i,isSelected:o,selectedVariantId:s,prerequisites:c})=>{const{config:d,currentLanguage:l}=we();let p=window.Shopify&&window.Shopify.currency&&window.Shopify.currency.rate?window.Shopify.currency.rate:1;const u=t.target.productDetails,[h,g]=H(()=>(()=>{if(t.type==="freeProductVariant"){let w=u.variants.findIndex(b=>b.id===parseInt(Te(t.target.id)));return u.variants[w]}if(s)return u.variants.filter(w=>w.id===s)[0];{let w=u.variants.findIndex(b=>b.available===!0);return w>-1?u.variants[w]:u.variants[0]}})()),m=t.unit==="percent"?h.price-h.price*(t.value/100):h.price*p-100*t.value;return a("div",{id:`corner-cowi-cart-overlay-reward-chooser-item-${e}`,className:"corner-cowi-cart-overlay-reward-chooser-item border-b border-solid border-cowi-outlines","data-corner-variant-id":h.id,"data-corner-product-id":u.id,children:[a("div",{id:`corner-cowi-cart-overlay-reward-chooser-item-info-wrapper-${e}`,className:"corner-cowi-cart-overlay-reward-chooser-item-info-wrapper flex flex-row p-4 items-center",children:[a("div",{id:`corner-cowi-cart-overlay-reward-chooser-item-image-wrapper-${e}`,className:"corner-cowi-cart-overlay-reward-chooser-item-image-wrapper max-h-16 w-12 rounded-md overflow-hidden",children:a("img",{id:"corner-cowi-cart-overlay-reward-chooser-item-image",src:h.image?h.image:u.image,className:"w-full transition-all",alt:"product image"})}),a("div",{id:`corner-cowi-cart-overlay-reward-chooser-item-text-${e}`,className:"corner-cowi-cart-overlay-reward-chooser-item-text w-full px-4 cursor-pointer",onClick:()=>{i&&n({rewardIndex:e,rewardMultiplier:r,quantity:1,variantId:h.id,productId:u.id,availability:h.available,rewardObject:t,prerequisites:c,handle:u.handle,image:u.image,title:u.title},o?"unchecked":"checked")},children:[a("div",{className:"flex items-center",children:[a("p",{className:"text-base text-cowi-primary-type font-bold",children:_t(u.title,67)}),o&&!h.available&&a("p",{className:"animate-bounce text-sm text-cowi-primary-type bg-cowi-secondary-bg rounded-full flex items-center px-2 font-bold ml-2 shrink-0",children:[a("div",{id:"corner-cowi-sold-out-reward-icon",className:"w-3 h-3 mr-2",children:a(le,{type:"danger-minus",color:d.cornercart.cartConfig.colors.primaryType})}),a("span",{children:l.cart.sold_out})]})]}),t.type==="freeProductVariant"&&h.selectedOptions&&a("div",{className:"text-xs leading-0 text-cowi-secondary-type",children:h.selectedOptions.map((w,b)=>{if(w.value!=="Default Title")return b!==h.selectedOptions.length-1?`${w.value} •`:` ${w.value}`})}),a("p",{className:"text-cowi-secondary-type",children:[a("span",{className:"text-sm line-through",children:_e(h.price,d.general_config.cornerCurrencyFormat)}),a("span",{className:"text-base font-bold ml-2",children:m!==0?_e(m,d.general_config.cornerCurrencyFormat):a("span",{className:"px-2 bg-cowi-secondary-bg text-cowi-primary-type rounded-full",children:l.cart.free_text})})]})]}),i?a("div",{id:`corner-cowi-cart-overlay-reward-chooser-item-checkbox-${e}`,className:"corner-cowi-cart-overlay-reward-chooser-item-checkbox h-6 w-6 shrink-0 mr-4",children:a(Po,{index:`reward-${e}`,checked:o,onChange:w=>{n({rewardIndex:e,rewardMultiplier:r,quantity:1,variantId:h.id,productId:u.id,availability:h.available,rewardObject:t,prerequisites:c,handle:u.handle,image:u.image,title:u.title},w?"checked":"unchecked")}})}):a("a",{id:`corner-cowi-cart-overlay-reward-chooser-item-view-link-${e}`,className:`corner-cowi-cart-overlay-reward-chooser-item-view-link ${u.type==="free_product"&&"hidden"} px-3 py-2 bg-cowi-card-bg border border-solid border-cowi-accent-bg text-cowi-accent-bg shrink-0 text-sm rounded-lg cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all`,href:window.Shopify.routes.root+"products/"+u.handle,children:l.cart.view_product_in_store})]}),o&&u.variants.length>1&&t.type!=="freeProductVariant"&&a("div",{id:`corner-cowi-cart-overlay-reward-chooser-item-options-wrapper-${e}`,className:"corner-cowi-cart-overlay-reward-chooser-item-options-wrapper p-4 bg-cowi-secondary-bg",children:u.options.map((w,b)=>{if(w.values.length>1)return a("div",{children:[a("label",{className:"font-bold text-xs mb-1 text-cowi-primary-type",children:w.name}),a("select",{onChange:()=>(()=>{let x=[];u.options.map((C,v)=>{C.values.length>1?x[v]={name:C.name,value:document.getElementById(`corner-cowi-cart-overlay-reward-chooser-item-option-selector-${v}-${e}`).value}:x[v]={name:C.name,value:C.values[0]}});let _=u.variants.find(C=>JSON.stringify(C.selectedOptions)===JSON.stringify(x));if(_)g(_),n({quantity:1,rewardIndex:e,rewardMultiplier:r,variantId:_.id,productId:u.id,availability:_.available,rewardObject:t,prerequisites:c,handle:u.handle,image:u.image,title:u.title},"variantChange");else{let C={...u.variants[0],available:!1,availableForSale:!1,selectedOptions:x};g(C),n({quantity:1,rewardIndex:e,rewardMultiplier:r,variantId:0,productId:u.id,availability:C.available,rewardObject:t,prerequisites:c,handle:u.handle,image:u.image,title:u.title},"variantChange")}})(),name:w.name,className:"corner-cowi-cart-overlay-reward-chooser-item-option-selector block w-full text-base py-2 px-2 bg-cowi-card-bg border border-cowi-outlines border-solid rounded text-cowi-primary-type focus:outline-none",id:`corner-cowi-cart-overlay-reward-chooser-item-option-selector-${b}-${e}`,children:[a("option",{value:!0,disabled:!0,children:w.name}),w.values.map(x=>a("option",{selected:x===h.selectedOptions[b].value,value:x,children:x}))]})]})})})]})},lc=()=>{const t=ke(),{config:e,currentLanguage:r}=we(),{cartDetails:n,addProductsWithRewards:i,loadingFlag:o}=be(),[s,c]=H(!1),[d,l]=H([]),[p,u]=H(null),[h,g]=H(!1),{stackSelectCount:m,rewardStack:w,prerequisites:b,onClose:x,isRewardSelectionSkipable:_,rewardMultiplier:C}=t.cowiOverlay.get?t.cowiOverlay.get.params:{},v=(A,j)=>{switch(j){case"checked":if(p.length<m)u([...p,A]);else{let $=[...p];$.splice(0,1),$.push(A),u($)}break;case"unchecked":{let $=[...p],P=p.findIndex(J=>J.rewardIndex===A.rewardIndex);P>-1&&($.splice(P,1),u($));break}case"variantChange":{let $=p.findIndex(J=>J.rewardIndex===A.rewardIndex),P=[...p];P.splice($,1,A),u(P);break}}};let L=[{placeholder:"gift_count",value:m}];const k=Ne.apply(b,je(n));return W(()=>{h&&!o.get.isLoading&&(()=>{const A=p.filter(j=>j.availability===!0);i(A,()=>{c(!1),g(!1),x()})})()},[o,h]),W(()=>{(async()=>{const j=[];await Promise.all(w.map(async $=>{if($.type==="freeProduct"||$.type==="freeProductVariant"||$.type==="productDiscount"){let P=await Me($.target.product_id),J={...$,target:{...$.target,productDetails:P}};j.push(J)}})),($=>{let P=[],J=n.items.filter(N=>N.properties&&Object.keys(N.properties).includes("_corner_promo_code")&&Object.keys(N.properties).includes("_corner_key")),B=$.filter(N=>N.type==="freeProduct"||N.type==="productDiscount"||N.type==="freeProductVariant");if(B&&B.map((N,Q)=>{let Z=J.find(U=>N.type==="freeProduct"||N.type==="productDiscount"?parseInt(U.productId)===parseInt(Te(N.target.id))&&U.properties._corner_key===`${U.productId}-${N.promoCode}(${C})-${Q}`:N.type==="freeProductVariant"?parseInt(U.variantId)===parseInt(Te(N.target.id))&&U.properties._corner_key===`${U.productId}-${N.promoCode}(${C})-${Q}`:void 0);Z&&P.push({quantity:1,rewardIndex:Q,variantId:Z.variantId,productId:Z.productId,availability:!0,rewardObject:N,rewardMultiplier:C,prerequisites:b})}),P.length===0&&B&&!_)for(let N=0;N<m;N++){const Q=B[N];let Z;if(Q.type==="freeProductVariant")Z=parseInt(Te(Q.target.id));else{const U=Q.target.productDetails.variants;let re=U.findIndex(Y=>Y.available===!0);Z=re>-1?U[re].id:U[0].id}P.push({quantity:1,rewardIndex:N,variantId:Z,productId:parseInt(Q.target.product_id),availability:!0,rewardObject:Q,rewardMultiplier:C,prerequisites:b})}u(P)})(j),l(j)})();const A=setTimeout(()=>{c(!0)},200);return()=>{clearTimeout(A)}},[t.cowiOverlay.get]),a("div",{id:"corner-cowi-cart-overlay-reward-chooser-bg",className:"absolute flex flex-col justify-center top-0 right-0 w-full h-full z-30 bg-black bg-opacity-50 transition-all "+(s?"opacity-100":"opacity-0"),children:p&&a("div",{id:"corner-cowi-cart-overlay-reward-chooser-card-wrapper",className:"w-full max-h-[85%] p-4",children:a(ze,{id:"corner-cowi-cart-overlay-reward-chooser-card",className:"m-0 h-full w-full transition-all shadow-lg overflow-hidden flex flex-col "+(s?"translate-y-0":"translate-y-full"),children:[a("div",{id:"corner-cowi-cart-overlay-reward-chooser-header",className:"py-4 px-5 border-b border-solid border-cowi-outlines",children:[k&&a("div",{id:"corner-cowi-cart-overlay-reward-chooser-title-wrapper",children:[a("div",{className:"flex justify-center w-full",id:"corner-cowi-cart-overlay-reward-chooser-hero-icon-wrapper",children:a("div",{id:"corner-cowi-cart-overlay-reward-chooser-hero-icon",className:"w-9 h-9 p-2 rounded-full flex items-center justify-center bg-cowi-accent-bg ",children:a(le,{type:"gift",color:e.cornercart.cartConfig.colors.accentFg})})}),a("p",{id:"corner-cowi-cart-overlay-reward-chooser-title",className:"text-lg font-bold text-center mb-2 text-cowi-primary-type",children:r.cart.reward_overlay_title})]}),a("div",{id:"corner-cowi-cart-overlay-reward-chooser-header-sub-content",className:"flex justify-center ",children:[a("p",{id:"corner-cowi-cart-overlay-reward-chooser-header-sub-content-text",className:"text-cowi-secondary-type",children:Le(r.cart.reward_overlay_sub_text,L)}),k&&a("div",{id:"corner-cowi-cart-overlay-reward-chooser-header-sub-content-counter",className:"px-2 bg-cowi-secondary-bg text-cowi-primary-type text-sm font-bold rounded-full ml-2",children:[p.length,"/",m>w.length?w.length:m]})]})]}),a("div",{id:"corner-cowi-cart-overlay-reward-chooser-reward-wrapper",className:"overflow-y-auto grow",children:d.length>0?d.map((A,j)=>{let $=p.findIndex(J=>`${J.productId}-${J.rewardObject.promoCode}(${C})-${J.rewardIndex}`==`${A.target.productDetails.id}-${A.promoCode}(${C})-${j}`),P=$>-1?p[$].variantId:null;return a(cc,{reward:A,isSelectable:k,itemIndex:j,rewardMultiplier:C,prerequisites:b,isSelected:$>-1,selectedVariantId:P,onChange:v},`${A.target.id}(${C})-${j}`)}):a("div",{className:"w-4 h-4 animate-spin",children:a(le,{type:"loader",color:e.cornercart.cartConfig.colors.primaryType})})}),a("div",{className:"flex",children:[_&&a("button",{"aria-label":"cancel-reward-chooser",onClick:()=>{c(!1),setTimeout(()=>{x&&x()},200)},id:"corner-cowi-cart-overlay-reward-chooser-cta",className:"flex-1 min-w-max flex cursor-pointer w-full items-center justify-center text-center py-5 text-cowi-accent-bg bg-cowi-card-bg font-base font-bold hover:pt-4 hover:pb-6 transition-all text-lg",children:a("span",{children:r.cart.reward_overlay_cancel_text})}),k&&a("button",{"aria-label":"submit-reward-chooser",onClick:()=>g(!0),id:"corner-cowi-cart-overlay-reward-chooser-cta",className:`
                    flex flex-1 min-w-max w-full
                    items-center justify-center text-center
                    py-5 bg-cowi-accent-bg text-cowi-accent-fg
                    font-base font-bold text-lg
                    cursor-pointer
                    hover:pt-4 hover:pb-6
                    transition-all
                    ${p.find(A=>!A.availability)||p.length!==m&&!_?"pointer-events-none grayscale opacity-50":""}
                  `,children:[a("div",{id:"corner-cowi-cart-overlay-reward-chooser-cta-btn",className:`w-3 h-3 ${h&&"animate-spin"}`,children:a(le,h?{type:"loader",color:e.cornercart.cartConfig.colors.accentFg}:{type:"check",color:e.cornercart.cartConfig.colors.accentFg})}),!h&&a("span",{className:"ml-2",children:r.cart.reward_overlay_cta_text})]})]})]})})})},dc=()=>{const t=ke(),{config:e,currentLanguage:r}=we(),[n,i]=H(!1),{handleCheckout:o}=be();let{content:s,onClose:c,termsCheckboxStatus:d}=t.cowiOverlay.get?t.cowiOverlay.get.params:{};return W(()=>{s||(s=document.querySelector("#dynamic-checkout-cart").outerHTML);const l=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(l)}},[]),a("div",{id:"corner-cowi-cart-express-checkout-chooser-bg",className:"absolute flex flex-col justify-end top-0 right-0 w-full h-full z-30 bg-black bg-opacity-50 transition-all "+(n?"opacity-100":"opacity-0"),children:[a("div",{id:"corner-cowi-cart-express-checkout-chooser-close",className:"flex justify-center mb-6",children:a("button",{id:"corner-cowi-cart-express-checkout-chooser-close-btn","aria-label":"close-express-checkout-chooser",onClick:()=>(i(!1),void(c&&c())),className:"flex cursor-pointer items-center text-xs rounded-full bg-cowi-card-bg shadow-lg p-4 transition-all focus:outline-none hover:-translate-y-1 hover:rotate-90 max-w-fit z-50",children:a("div",{id:"corner-cowi-express-checkout-close-btn-icon",className:"w-3 h-3",children:a(le,{type:"close-cross",color:e.cornercart.cartConfig.colors.primaryType})})})}),a("div",{id:"corner-cowi-cart-express-checkout-chooser-wrapper",className:"w-full",children:a(ze,{id:"corner-cowi-cart-express-checkout-chooser-card",className:"m-0 w-full p-6 transition-all shadow-lg  "+(n?"translate-y-0":"translate-y-full"),children:[a("div",{id:"corner-cowi-cart-express-checkout-contents",className:"additional-checkout-buttons--vertical",dangerouslySetInnerHTML:{__html:s}}),a("button",{className:" w-full text-center p-4 mt-2 rounded-sm font-bold bg-cowi-accent-bg text-cowi-accent-fg text-lg hover:brightness-90",onClick:()=>{o(d,"normal")},children:r.cart.other_checkouts_cta})]})})]})},uc=()=>{const t=ke(),[e,r]=H(!1),n=t.cowiOverlay.get;return W(()=>{const i=setTimeout(()=>{r(!0)},200);return()=>{clearTimeout(i)}},[]),a("div",{id:"corner-cowi-cart-overlay-modal-bg",className:"absolute flex flex-col justify-center top-0  right-0 w-full h-full z-30 bg-black bg-opacity-50 transition-all "+(e?"opacity-100":"opacity-0"),children:a("div",{id:"corner-cowi-cart-overlay-modal-card-wrapper",className:"w-full p-4",children:a(ze,{id:"corner-cowi-cart-overlay-modal-card",className:"m-0 w-full p-6 transition-all shadow-lg  "+(e?"translate-y-0":"translate-y-full"),children:[n.params.isClosable&&a("div",{id:"corner-cowi-cart-overlay-modal-close-button-wrapper",className:"flex items-center justify-end",children:a("div",{id:"corner-cowi-cart-overlay-modal-close-button",onClick:()=>{t.cowiOverlay.set(null)},className:"flex cursor-pointer items-center text-xs text-cowi-primary-type rounded-full bg-cowi-card-bg shadow-lg w-4 h-4 transition-all hover:-translate-y-1 max-w-fit z-50",children:a(le,{type:"close-cross"})})}),n.params.title&&a("div",{id:"corner-cowi-cart-overlay-modal-title",className:"text-center font-bold text-xl",children:n.params.title}),n.params.description&&a("div",{id:"corner-cowi-cart-overlay-modal-message",className:"text-center text-base",children:[n.params.styles&&a("style",{dangerouslySetInnerHTML:{__html:n.params.styles}}),a("span",{dangerouslySetInnerHTML:{__html:n.params.description?n.params.description:"Please try again later"}})]}),a("div",{id:"corner-cowi-cart-overlay-modal-actions-wrapper",className:"flex items-stretch justify-center",children:[n.params.secondaryCta&&a("button",{"aria-label":"optional-note-cancel",onClick:()=>{if(n.params.secondaryCta.action)try{n.params.secondaryCta.action()}catch(i){console.log("caught error modal onSecondaryCta click",i)}else t.cowiOverlay.set(null)},id:"corner-cowi-cart-overlay-modal-cta-button",className:"w-full mx-1 flex items-center justify-center cursor-pointer text-center mt-5 py-3 bg-cowi-secondary-bg text-cowi-primary-fg font-base font-bold rounded-lg hover:saturate-200 trannsition-all text-base",children:n.params.secondaryCta.text||"Cancel"}),n.params.primaryCta&&a("button",{"aria-label":"optional-note-cta",onClick:()=>{if(n.params.primaryCta.action)try{n.params.primaryCta.action()}catch(i){console.log("caught error modal onPrimaryCta click",i)}else t.cowiOverlay.set(null)},id:"corner-cowi-cart-overlay-modal-cta-button",className:"w-full mx-1 flex items-center justify-center cursor-pointer text-center mt-5 py-3 bg-cowi-accent-bg text-cowi-accent-fg font-base font-bold rounded-lg hover:saturate-200 trannsition-all text-base",children:n.params.primaryCta.text||"Ok"})]})]})})})},pc=({item:t,index:e,onChange:r,updatedQuantity:n,editable:i})=>{const{loadingFlag:o}=be(),s=t.image||t.featuredImage&&t.featuredImage.url||null,c=t.optionsWithValues?t.optionsWithValues.map(d=>d.value).join(", "):t.variantOptions?t.variantOptions.join(", "):"";return a("div",{id:`corner-cowi-bundle-editor-item-${e}`,className:"corner-cowi-bundle-editor-item flex items-center py-2 px-4 border-b border-solid border-cowi-outlines",children:[a("div",{id:`corner-cowi-bundle-editor-item-image-${e}`,className:"corner-cowi-bundle-editor-item-image w-14 h-14 rounded-lg bg-gray-300 flex items-center justify-center overflow-hidden mr-4",children:s?a("img",{src:s.startsWith("http")?s:`https:${s}`,alt:t.title,className:"object-cover w-full h-full"}):null}),a("div",{id:`corner-cowi-bundle-editor-item-info-${e}`,className:"corner-cowi-bundle-editor-item-info flex-1 min-w-0",children:[a("div",{id:`corner-cowi-bundle-editor-item-title-${e}`,className:"corner-cowi-bundle-editor-item-title font-bold text-cowi-primary-type text-base truncate",dangerouslySetInnerHTML:{__html:t.title}}),a("div",{id:`corner-cowi-bundle-editor-item-variant-${e}`,className:"corner-cowi-bundle-editor-item-variant text-cowi-secondary-type text-base truncate text-sm",children:c})]}),a("div",{id:`corner-cowi-bundle-editor-item-quantity-${e}`,className:"corner-cowi-bundle-editor-item-quantity flex items-center justify-center rounded-md ml-4",children:[i&&a("button",{"aria-label":"decrease-quantity","aria-description":`decrease quantity of ${t.title}`,onClick:()=>{r(n-1)},className:`corner-cowi-cart-item-customiser-qty-decrease ${o.get.isLoading&&"pointer-events-none"} ${n===0&&"pointer-events-none opacity-50"} w-8 h-6 px-2 flex items-center justify-center border border-cowi-outlines border-solid leading-none text-cowi-secondary-type text-xl focus:outline-none bg-transparent transition-all duration-500 cursor-pointer rounded-md hover:bg-[color:var(--corner-cowi-accent-bg)]  hover:text-[color:var(--corner-cowi-accent-fg)]`,children:a(le,{type:"minus"})}),a("div",{id:`corner-cowi-bundle-editor-item-quantity-value-${e}`,className:"corner-cowi-bundle-editor-item-quantity-value px-2 text-center focus:outline-none  text-sm  2xl:text-base flex items-center justify-center",children:a("span",{className:"text-cowi-primary-type font-bold ",children:[n," "]})}),i&&a("button",{"aria-label":"increase-quantity","aria-description":`increase quantity of ${t.title}`,onClick:()=>{r(n+1)},className:`corner-cowi-cart-item-customiser-qty-increase ${o.get.isLoading&&"pointer-events-none"} w-8 h-6 px-2 flex items-center justify-center border border-cowi-outlines border-solid leading-none text-cowi-secondary-type text-xl focus:outline-none bg-transparent transition-all duration-500 cursor-pointer rounded-md hover:bg-[color:var(--corner-cowi-accent-bg)] hover:text-[color:var(--corner-cowi-accent-fg)]`,children:a(le,{type:"plus"})})]})]})},hc=()=>{const t=ke(),{config:e,currentLanguage:r}=we(),{requestCartEdit:n,loadingFlag:i}=be(),[o,s]=H(!1),[c,d]=H(),[l,p]=H(!1),{bundleItem:u,onClose:h,editable:g}=t.cowiOverlay.get?t.cowiOverlay.get.params:{},m=()=>{s(!1),setTimeout(()=>{h&&h()},200)};return W(()=>{const w=setTimeout(()=>{s(!0)},200);return()=>{clearTimeout(w)}},[t.cowiOverlay.get]),W(()=>{!i.get.isLoading&&l&&m()},[i.get.isLoading]),W(()=>{u&&(async()=>{const w=await(async()=>{try{const b=window.location.href,x=await fetch(b),_=await x.text(),C=document.createElement("div");C.innerHTML=_;const v=C.querySelector("#corner-bundle-items");return v?JSON.parse(v.innerHTML):null}catch(b){console.error("Error fetching bundle data:",b)}})();if(w&&w.items){const b=w.items.find(x=>x.lineItemId===u.id);if(b&&b.itemComponents){let x=[];b.itemComponents.forEach(_=>{x.push({id:_.id,title:_.title,InitialQuantity:_.quantity,image:_.image,variantOptions:_.variant_options,optionsWithValues:_.options_with_values,featuredImage:_.featured_image,variantId:_.variant_id,updatedQuantity:_.quantity,properties:_.properties})}),d(x)}}})()},[u]),a("div",{id:"corner-cowi-cart-overlay-bundle-editor-bg",className:"absolute flex flex-col justify-center top-0 right-0 w-full h-full z-30 bg-black bg-opacity-50 transition-all "+(o?"opacity-100":"opacity-0"),children:a("div",{id:"corner-cowi-cart-overlay-bundle-editor-card-wrapper",className:"w-full max-h-[85%] p-4",children:a(ze,{id:"corner-cowi-cart-overlay-bundle-editor-card",className:"m-0 h-full w-full transition-all shadow-lg overflow-hidden flex flex-col "+(o?"translate-y-0":"translate-y-full"),children:[a("div",{id:"corner-cowi-cart-overlay-bundle-editor-header",className:"py-4 px-5 border-b border-solid border-cowi-outlines",children:a("div",{id:"corner-cowi-cart-overlay-bundle-editor-title-wrapper",children:[a("div",{className:"flex justify-center w-full",id:"corner-cowi-cart-overlay-bundle-editor-hero-icon-wrapper",children:a("div",{id:"corner-cowi-cart-overlay-bundle-editor-hero-icon",className:"w-9 h-9 p-2 rounded-full flex items-center justify-center bg-cowi-accent-bg",children:a(le,{type:"bundle",color:e.cornercart.cartConfig.colors.accentFg})})}),a("p",{id:"corner-cowi-cart-overlay-bundle-editor-title",className:"text-lg font-bold text-center mb-2 text-cowi-primary-type",dangerouslySetInnerHTML:{__html:u.title}})]})}),a("div",{id:"corner-cowi-cart-overlay-bundle-editor-content",className:"overflow-y-auto grow",children:c!==void 0?c.length>0?c.map((w,b)=>a(pc,{item:w,index:b,editable:g,initialQuantity:w.InitialQuantity,updatedQuantity:w.updatedQuantity,onChange:x=>{((_,C)=>{d(v=>v.map(L=>L.id===_?{...L,updatedQuantity:C}:L))})(w.id,x)}},w.id||b)):a("p",{className:"text-cowi-secondary-type text-center",children:"No items in bundle."}):a("p",{className:"text-cowi-secondary-type text-center py-4 flex items-center justify-center gap-2",children:[a(le,{type:"loader",color:e.cornercart.cartConfig.colors.primaryType,className:"w-4 h-4 animate-spin"}),a("span",{className:"text-sm",children:"Fetching bundle items..."})]})}),a("div",{className:"flex",children:[h&&a("button",{"aria-label":"cancel-bundle-editor",onClick:m,id:"corner-cowi-cart-overlay-bundle-editor-cancel",className:"flex-1 min-w-max flex cursor-pointer w-full items-center justify-center text-center py-5 text-cowi-accent-bg bg-cowi-card-bg font-base font-bold hover:pt-4 hover:pb-6 transition-all text-lg",children:a("span",{children:r.cart.bundle_edit_popup_secondary_cta})}),c&&c.some(w=>w.updatedQuantity!==w.InitialQuantity)&&a("button",{"aria-label":"save-bundle-editor",onClick:()=>{if(i.set({isLoading:!0,isVisible:!0}),c.some(w=>w.updatedQuantity<w.InitialQuantity)){const w=c.map(b=>({quantity:b.updatedQuantity,variantId:b.variantId,productId:b.productId,properties:b.properties||null}));n("deleteProducts",[u]),n("addVariants",w)}else{const w=c.map(b=>({quantity:b.updatedQuantity-b.InitialQuantity,variantId:b.variantId,productId:b.productId,properties:b.properties||null}));n("addVariants",w)}p(!0)},id:"corner-cowi-cart-overlay-bundle-editor-save",className:"flex-1 min-w-max flex cursor-pointer w-full items-center justify-center text-center py-5 bg-cowi-accent-bg text-cowi-accent-fg font-base font-bold hover:pt-4 hover:pb-6 transition-all text-lg",children:[a("div",{id:"corner-cowi-cart-overlay-bundle-editor-save-icon",className:"w-3 h-3",children:i.get.isLoading?a("span",{className:"w-5 h-5 pr-2",children:a(le,{type:"loader",className:"animate-spin",color:e.cornercart.cartConfig.colors.accentFg})}):a(le,{type:"check",color:e.cornercart.cartConfig.colors.accentFg})}),a("span",{className:"ml-2",children:r.cart.bundle_edit_popup_primary_cta})]})]})]})})})},gc=()=>{const t=ke();if(!t.cowiOverlay.get)return null;switch(t.cowiOverlay.get.type){case"cartItemAdder":return a(ic,{});case"modal":return a(uc,{});case"cartNoteAdder":return a(ac,{});case"rewardChooser":return a(lc,{});case"expressCheckoutChooser":return a(dc,{});case"bundleEditor":return a(hc,{})}},Ao=({isSelected:t,icon:e,text:r,onClick:n})=>{const{config:i}=we();return a("button",{onClick:n,"aria-description":`go to ${r} page`,"aria-label":"page-selector-button",className:`font-bold py-5 px-2 bg-cowi-card-bg flex-1 flex cursor-pointer
    justify-center items-center ${t&&"border-b-2 border-cowi-accent-bg border-solid"}`,children:[a("span",{className:"w-4 h-4 mr-2",children:a(le,{type:e,color:t?i.cornercart.cartConfig.colors.accentBg:i.cornercart.cartConfig.colors.primaryType})}),a("span",{className:"text-lg "+(t?"text-cowi-accent-bg":"text-cowi-primary-type"),children:r})]})},mc=()=>{const{config:t}=we(),e=ke(),[r,n]=H(t.cornercart.cartConfig),[i,o]=H(!1);return W(()=>{e.viewStateHistory.currentView.view,n(t.cornercart.cartConfig),o(t.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_advanced_color_customisation)},[e.viewStateHistory.currentView.view,t.cornercart]),a("style",{children:[`
        :root {
          --corner-cowi-accent-bg: ${r.colors.accentBg};
          --corner-cowi-accent-fg: ${r.colors.accentFg};
          --corner-cowi-widget-bg: ${i?r.colors.widgetBg:"rgb(238,242,246)"};
          --corner-cowi-card-bg: ${i?r.colors.cardBg:"rgb(255,255,255)"};
          --corner-cowi-secondary-bg: ${i?r.colors.secondaryBg||r.colors.outlines:"rgb(230,230,235)"}; 
          --corner-cowi-translucent-card-bg: ${i?`linear-gradient(0deg, ${Ye(r.colors.cardBg,1)} 10%, ${Ye(r.colors.cardBg,.95)} 100%)`:`linear-gradient(0deg, ${Ye("rgb(255,255,255)",1)} 0%, ${Ye("rgb(255,255,255)",.95)} 100%)`};

          --corner-cowi-banner-blender: ${i?`linear-gradient(0deg, ${Ye(r.colors.widgetBg,1)} 0%, ${Ye(r.colors.widgetBg,0)} 100%)`:`linear-gradient(0deg, ${Ye("rgb(255,255,255)",1)} 0%, ${Ye("rgb(255,255,255)",0)} 100%)`};
          --corner-cowi-primary-type: ${i?r.colors.primaryType:"rgb(25,35,55)"};
          --corner-cowi-secondary-type: ${i?r.colors.secondaryType:"rgb(100,120,140)"};
          --corner-cowi-outlines: ${i?r.colors.outlines:"rgb(230,230,235)"}; 
          --corner-cowi-banner-gradient-start: ${r.banner.gradientStart};
          --corner-cowi-banner-text: ${r.colors.bannerText||r.colors.accentFg};
          --corner-cowi-banner-gradient-end: ${r.banner.gradientEnd};
          --corner-cowi-banner-image-url: url(${r.banner.imageUrl});
        }
        `,`
        .widgets-by-corner.corner-widget .bg-cowi-accent-bg {
          background:var(--corner-cowi-accent-bg);
        }
        .widgets-by-corner.corner-widget .bg-cowi-widget-bg {
          background:var(--corner-cowi-widget-bg);
        }
        .widgets-by-corner.corner-widget .bg-cowi-card-bg {
          background:var(--corner-cowi-card-bg);
        }
        .widgets-by-corner.corner-widget .bg-cowi-secondary-bg {
          background:var(--corner-cowi-secondary-bg);
        }
        .widgets-by-corner.corner-widget .bg-cowi-translucent-card-bg {
          background:var(--corner-cowi-translucent-card-bg);
        }
        .widgets-by-corner.corner-widget .bg-cowi-outlines {
          background:var(--corner-cowi-outlines);
        }

        .widgets-by-corner.corner-widget .text-cowi-accent-bg {
          color:var(--corner-cowi-accent-bg);
        }
        .widgets-by-corner.corner-widget .text-cowi-accent-fg {
          color:var(--corner-cowi-accent-fg);
        }
        .widgets-by-corner.corner-widget .text-cowi-secondary-bg {
          color:var(--corner-cowi-secondary-bg);
        }
        .widgets-by-corner.corner-widget .text-cowi-primary-type {
          color:var(--corner-cowi-primary-type);
        }
        .widgets-by-corner.corner-widget .text-cowi-secondary-type {
          color:var(--corner-cowi-secondary-type);
        }
        .widgets-by-corner.corner-widget .text-cowi-outlines {
          color:var(--corner-cowi-outlines);
        }
        .widgets-by-corner.corner-widget .text-cowi-banner-text {
          color:var(--corner-cowi-banner-text);
        }

        .widgets-by-corner.corner-widget .border-cowi-outlines {
          border-color:var(--corner-cowi-outlines);
        }
        .widgets-by-corner.corner-widget .border-cowi-accent-fg {
          border-color:var(--corner-cowi-accent-fg);
        }
        .widgets-by-corner.corner-widget .border-cowi-accent-bg {
          border-color:var(--corner-cowi-accent-bg);
        }
        .widgets-by-corner.corner-widget .border-cowi-secondary-bg {
          border-color:var(--corner-cowi-secondary-bg);
        }
        .widgets-by-corner.corner-widget .border-cowi-primary-type {
          border-color:var(--corner-cowi-primary-type);
        }
      
       
        .widgets-by-corner.corner-widget #corner-cowi-banner-blend-gradient{
          background: var(--corner-cowi-banner-blender);
        }
        .widgets-by-corner.corner-widget #corner-cowi-open-wrapper {
          z-index:${t.cornercart.cartLauncherConfig.zIndex} !important;
        }
        .widgets-by-corner.corner-widget #corner-cowi-banner {
          background-color:var(--corner-cowi-accent-bg);
          ${r.banner.type==="image"&&i?"background-image: var(--corner-cowi-banner-image-url)":"background-image: linear-gradient(var(--corner-cowi-banner-gradient-start),var(--corner-cowi-banner-gradient-end));"}
        }

        .animate-shake {
          animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        @keyframes shake {
          10%, 90% {
            transform: translate3d(-1px, 0, 0);
          }
          
          20%, 80% {
            transform: translate3d(2px, 0, 0);
          }
        
          30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
          }
        
          40%, 60% {
            transform: translate3d(4px, 0, 0);
          }
        }
        `,`/* width */
.widgets-by-corner.corner-widget ::-webkit-scrollbar {
  width: 5px !important;
  height: 8px !important;
}

/* Indeterminate progress bar */

.widgets-by-corner.corner-widget #corner-cowi-cart-indeterminate-loading-bar-runner.cowi-animated-progress-bar {
  animation: indeterminateAnimation .6s infinite linear alternate;
  transform-origin: 0% 50%;
  background:linear-gradient(90deg, ${Ye(r.colors.accentBg,0)} 0%, ${r.colors.accentBg} 30%, ${r.colors.accentBg} 70%, ${Ye(r.colors.accentBg,0)} 100%);
}

@keyframes indeterminateAnimation {
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.5);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
}

.widgets-by-corner .animate-breathing {
  animation: breathing 1.5s ease-out infinite normal;
}

@keyframes breathing {
  0% {
opacity:1
  }

  50% {
 opacity:0.5
  }

  100% {
 opacity:1
  }
}



/* Track */
.widgets-by-corner.corner-widget::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
.widgets-by-corner.corner-widget ::-webkit-scrollbar-thumb {
  background: var(--corner-cowi-outlines); 
  border-radius: 10px;
}

/* Handle on hover */
.widgets-by-corner.corner-widget ::-webkit-scrollbar-thumb:hover {
  opacity:70; 
}

/* fixing paypal express checkout btn */
div[class*="paypal-buttons"] > iframe[name*="detect_close"] {
  display: none !important;
}

`,`${t.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_custom_css&&t.cornercart.cartConfig.general.themeCss?t.cornercart.cartConfig.general.themeCss:""}`,`${t.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_custom_css&&t.cornercart.cartConfig.general.customCss}`,`@media only screen and (max-width: 650px) {
         html:has(#corner-cowi-open-primary-card.opacity-100) {
         overflow: hidden !important;
         }
      }`]})},fc=()=>{const{config:t,currentLanguage:e,cartStyle:r}=we(),n=ke(),{offerPageItems:i}=be();return a($e,{children:[a(mc,{}),a("div",{id:r!=="page"?"corner-cowi-open-wrapper":"corner-cowi-cart-page-wrapper",className:`flex h-full w-full  transition-all
        ${(()=>{switch(r){case"widget":return"fixed flex-col-reverse top-0 pointer-events-none p-3 "+(n.cowiAlignment.get==="left"?" items-start":"items-end");case"drawer":return`fixed flex-col-reverse top-0 pointer-events-none p-0 ${n.isCowiOpened.get&&"bg-black bg-opacity-25"} ${n.cowiAlignment.get==="left"?" items-start":"items-end"}`;case"popup":return`fixed flex-col-reverse top-0 pointer-events-none p-3 items-center justify-center ${n.isCowiOpened.get&&"bg-black bg-opacity-25"} ${n.cowiAlignment.get==="left"?" items-start":"items-end"}`;case"page":return"justify-center p-3"}})()}
        `,children:[r!=="widget"&&r!=="page"&&a("button",{id:"corner-cowi-outside-close-button","aria-label":"corner-cowi-outside-close-button",onClick:()=>{n.isCowiOpened.set(!1),window.corner&&window.corner.execute&&window.corner.execute("onCowiClose")},className:"fixed h-full w-full flex-grow  opacity-0 "+(n.isCowiOpened.get?"pointer-events-auto":"pointer-events-none "),children:" "}),a("div",{id:"corner-cowi-open-primary-card",className:`relative ${(()=>{switch(r){case"widget":return"bg-cowi-widget-bg shadow-lg w-full sm:w-[360px] md:w-[445px] h-full sm:h-[97%] max-h-[65em] rounded-xl duration-500 "+(n.isCowiOpened.get?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 translate-y-4");case"drawer":return"bg-cowi-widget-bg shadow-lg w-full sm:w-[420px] md:w-[440px] 2xl:w-[445px] h-full duration-500 "+(n.isCowiOpened.get?"opacity-100 translate-x-0 pointer-events-auto":n.cowiAlignment.get==="left"?"opacity-0  -translate-x-28":"opacity-0 translate-x-28");case"popup":return"bg-cowi-widget-bg shadow-lg w-full sm:w-[460px] md:w-[580px] 2xl:w-[635px] h-full sm:h-[90%] max-h-[55em] rounded-xl duration-500 "+(n.isCowiOpened.get?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 translate-y-4");case"page":return"w-full sm:w-[460px] md:w-[580px] 2xl:w-[635px] min-h-[400px] rounded-xl"}})()} transition-all  overflow-hidden `,children:[r!=="page"&&a("div",{id:"corner-cowi-banner",className:"absolute z-10 top-0 flex flex-col-reverse w-full h-60 bg-cover bg-no-repeat bg-center ",children:a("div",{id:"corner-cowi-banner-blend-gradient",className:"h-1/2 w-full",children:" "})}),a("div",{id:"corner-cowi-interior-wrapper",className:`flex flex-col ${r!=="page"&&"z-20"} top-0 h-full w-full ${r!=="page"?"absolute":"relative"}`,children:[r!=="page"&&a("div",{id:"corner-cowi-header",className:"flex flex-grow-0 items-center justify-between px-5 pt-2 md:pt-4 pb-2 2xl:pt-6 2xl:pb-3 text-cowi-primary-type",children:[a("div",{id:"cowi-corner-header-page-title",className:"text-2xl font-bold text-cowi-banner-text flex items-center",children:[window.cornerDevMode&&a("span",{className:"cursor-pointer",onClick:()=>{n.throwConfetti()},children:"🎉"}),a("span",{className:"flex items-center",children:(()=>{switch(n.viewStateHistory.currentView.page){case"cart":default:return e.cart.cart_context_title;case"offers":return e.cart.offers_context_title}})()})]}),r!=="page"&&a("div",{id:"corner-cowi-close-btn",onClick:()=>{n.isCowiOpened.set(!1),window.corner&&window.corner.execute&&window.corner.execute("onCowiClose")},className:"flex cursor-pointer items-center text-xs text-cowi-primary-type rounded-full bg-cowi-card-bg shadow-lg px-3 py-1 transition-all hover:-translate-y-1 max-w-fit z-50",children:[a("div",{id:"corner-cowi-close-btn-icon",className:"w-3 h-3 mr-2",children:a(le,{type:"close-cross",color:t.general_config.featureFlag.apps.cornercart.cornerwidget.cornerwidget_advanced_color_customisation?t.cornercart.cartConfig.colors.primaryType:"rgb(25,35,55)"})}),e.cart.widget_close_text]})]}),a("div",{id:"corner-widget-page-wrapper",className:"px-3 2xl:px-5 pb-3 flex-grow min-h-0 ",children:(()=>{switch(n.viewStateHistory.currentView.page){case"cart":default:return a(Ks,{});case"offers":return a(nc,{})}})()}),(!t.cornercart.cartConfig.general.hideOffersSection&&i.length>0||n.viewStateHistory.currentView.page==="offers")&&a("div",{id:"corner-cowi-page-selectors-wrapper",className:"px-3 2xl:px-5 pb-3",children:a(ze,{id:"corner-cowi-page-selectors",className:" flex-grow-0 flex items-center overflow-hidden",children:[a(Ao,{text:e.cart.cart_context_title,icon:"smiley-rounded-cart",isSelected:n.viewStateHistory.currentView.page==="cart",onClick:()=>{n.viewStateHistory.currentView.page!=="cart"&&n.viewStateHistory.changeView({type:"goTo",payload:{page:"cart",view:"cart-list",params:""}})}}),a(Ao,{text:e.cart.offers_context_title,icon:"gift",isSelected:n.viewStateHistory.currentView.page==="offers",onClick:()=>{n.viewStateHistory.currentView.page!=="offers"&&n.viewStateHistory.changeView({type:"goTo",payload:{page:"offers",view:"offer-list",params:""}})}})]})}),a(gc,{})]})]})]})]})},wc=()=>{const{config:t,cartStyle:e}=we(),{cartAnnouncements:r,cartDetails:n,cartTimers:i}=be(),o=c=>c.some(d=>d.config.displaySurfaces&&d.config.displaySurfaces.includes("siteTop")),s=n&&o(r)||n&&o(i);return a("div",{children:[a("div",{translate:"no",className:`widgets-by-corner corner-widget notranslate ${e==="page"&&"h-full"}`,children:[t.cornercart.cartConfig.customJs&&a("script",{dangerouslySetInnerHTML:{__html:`try { ${t.cornercart.cartConfig.customJs} } catch(e) { console.error("Error in CornerCart's custom JavaScript. Please check your code under 'Cart Drawer > Advanced settings > Add custom JavaScript' in the CornerCart app",e); }`}}),(()=>{if(t.cornercart.cartLauncherConfig.isActive&&document.querySelectorAll("[block-corner-widget]").length===0)return t.cornercart.cartLauncherConfig.type==="cornerButton"?a(as,{page:"cart"}):a(ss,{page:"cart"})})(),t.cornercart.cartConfig.general.isActive&&a(fc,{})]}),s&&Aa(a(hs,{cartAnnouncements:r}),document.querySelector(".corner-siteTop-announcement-bar"))]})},yc=()=>a(No,{children:a(Ga,{children:a(Ya,{children:a(ns,{children:a(fo,{children:a(wc,{})})})})})}),bc=({styleObj:t,itemId:e})=>a("style",{children:[`
        :root {
          --corner-toaster-${e}-bg-toaster: ${t.bgColor};
          --corner-toaster-${e}-fg-toaster: ${t.fgColor};
        }
      `,`
        .widgets-by-corner .toaster #${e} .bg-toaster-bg {
          background: var(--corner-toaster-${e}-bg-toaster);
        }
        .widgets-by-corner .toaster #${e} .text-toaster-fg {
          color: var(--corner-toaster-${e}-fg-toaster);
        }
        .widgets-by-corner .toaster #${e} .animate-add-toaster {
          transform-origin: ${t.position==="top"?"50% 0%":"50% 100%"};
          animation: add-animate .3s linear;
        }
        .widgets-by-corner .toaster #${e} .animate-remove-toaster{
          transform-origin: ${t.position==="top"?"50% 0%":"50% 100%"};
          animation: remove-animate .3s linear;
        }
        @keyframes add-animate {
          from {
            height: 0px;
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            height: 50px;
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes remove-animate {
          from {
            height: 50px;
            transform: scaleY(1);
            opacity: 1;
          }
          to {
            height: 0px;
            transform: scaleY(0);
            opacity: 0;
          }
        }
         
      `]});Mi(({item:t,onDelete:e})=>(W(()=>{t.autoCloseDuration!==0&&setTimeout(()=>e(t.id,t.stylingObject.position),t.autoCloseDuration)},[]),a("div",{children:[a(bc,{styleObj:t.stylingObject,itemId:t.id}),a("div",{id:t.id,children:a("div",{className:"max-w-lg rounded-lg shadow-lg mt-3 bg-toaster-bg text-toaster-fg animate-add-toaster "+(t.isRemove?"animate-remove-toaster":""),children:a("div",{className:"p-3 flex",children:[a("div",{className:"w-4 mt-2 flex-none mr-4",children:a(le,{type:t.content.icon,color:t.stylingObject.iconColor})}),a("div",{children:t.content.content}),t.content.closable?a("div",{className:"w-3 mt-2 ml-4 flex-none cursor-pointer",onClick:()=>e(t.id,t.stylingObject.position),children:a(le,{type:"close-cross",color:t.stylingObject.fgColor})}):null]})})})]})));const vc=({styleObj:t,itemId:e})=>a("style",{children:[`
        :root {
          --corner-notification-${e}-bg-notification: ${t.bgColor};
          --corner-notification-${e}-fg-notification: ${t.fgColor};
          --corner-notification-${e}-bg-cta: ${t.ctaBgColor};
          --corner-notification-${e}-fg-cta: ${t.ctaFgColor};
          --corner-notification-${e}-fg-cancel-text: ${t.ctaBgColor};
        }
      `,`
        .widgets-by-corner .notification #${e} .bg-notification-bg {
          background: var(--corner-notification-${e}-bg-notification);
        }
        .widgets-by-corner .notification #${e} .text-notification-fg {
          color: var(--corner-notification-${e}-fg-notification);
        }
        .widgets-by-corner .notification #${e} .bg-cta-bg {
            background: var(--corner-notification-${e}-bg-cta);
        }
        .widgets-by-corner .notification #${e} .text-cta-fg {
            color: var(--corner-notification-${e}-fg-cta);
        } 
        .widgets-by-corner .notification #${e} .text-cancel-fg {
            color: var(--corner-notification-${e}-fg-cancel-text);
        }
        .widgets-by-corner .notification #${e} .animate-add-notification {
          transform-origin: ${t.position==="top-left"||t.position==="top-right"?"50% 0%":"50% 100%"};
          animation: add-animate .3s linear;
        }
        .widgets-by-corner .notification #${e} .animate-remove-notification {
          transform-origin: ${t.position==="top-left"||t.position==="top-right"?"50% 0%":"50% 100%"};
          animation: remove-animate .3s linear;
        }
        @keyframes add-animate {
          from {
            height: 0px;
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            height: 50px;
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes remove-animate {
          from {
            height: 50px;
            transform: scaleY(1);
            opacity: 1;
          }
          to {
            height: 0px;
            transform: scaleY(0);
            opacity: 0;
          }
        }     
      `]});Mi(({item:t,onDelete:e,onCtaBtn:r})=>(W(()=>{t.autoCloseDuration!==0&&setTimeout(()=>e(t.id,t.stylingObject.position),t.autoCloseDuration)},[]),a("div",{children:[a(vc,{styleObj:t.stylingObject,itemId:t.id}),a("div",{id:t.id,children:a("div",{className:"shadow-lg bg-notification-bg w-full sm:w-[360px] md:w-[390px] xl:w-[435px] text-notification-fg  mt-3 animate-add-notification "+(t.isRemove?"animate-remove-notification":""),children:a("div",{className:"p-3",children:[a("div",{className:"flex justify-between",children:[a("div",{className:"font-bold",children:t.content.title}),a("div",{className:"w-3 mt-2 ml-2 flex-none cursor-pointer",onClick:()=>e(t.id,t.stylingObject.position),children:a(le,{type:"close-cross",color:t.stylingObject.fgColor})})]}),a("div",{className:"mt-2",children:t.content.content}),a("div",{className:"flex justify-end",children:[a("div",{className:"mt-4 mr-2 text-cancel-fg cursor-pointer",onClick:()=>e(t.id,t.stylingObject.position),children:t.content.cancelText}),a("button",{"aria-label":"cta-button",onClick:()=>r(),className:"max-w-xs text-center py-2 mt-3 bg-cta-bg text-cta-fg font-bold rounded-md cursor-pointer",children:t.content.ctaText})]})]})})})]})));/**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const _r=globalThis,In=_r.ShadowRoot&&(_r.ShadyCSS===void 0||_r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tn=Symbol(),Eo=new WeakMap;let Oo=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Tn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(In&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Eo.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Eo.set(e,t))}return t}toString(){return this.cssText}};const Lo=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new Oo(r,t,Tn)},Mo=In?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return(n=>new Oo(typeof n=="string"?n:n+"",void 0,Tn))(r)})(t):t,{is:_c,defineProperty:xc,getOwnPropertyDescriptor:Cc,getOwnPropertyNames:$c,getOwnPropertySymbols:kc,getPrototypeOf:Sc}=Object,xr=globalThis,Do=xr.trustedTypes,Ic=Do?Do.emptyScript:"",Tc=xr.reactiveElementPolyfillSupport,Ht=(t,e)=>t,Pn={toAttribute(t,e){switch(e){case Boolean:t=t?Ic:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ro=(t,e)=>!_c(t,e),jo={attribute:!0,type:String,converter:Pn,reflect:!1,useDefault:!1,hasChanged:Ro};/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */Symbol.metadata??=Symbol("metadata"),xr.litPropertyMetadata??=new WeakMap;let Pt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=jo){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);n!==void 0&&xc(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:i}=Cc(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:n,set(o){const s=n?.call(this);i?.call(this,o),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??jo}static _$Ei(){if(this.hasOwnProperty(Ht("elementProperties")))return;const t=Sc(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ht("properties"))){const e=this.properties,r=[...$c(e),...kc(e)];for(const n of r)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,n]of e)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const n=this._$Eu(e,r);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)e.unshift(Mo(n))}else t!==void 0&&e.push(Mo(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{if(In)e.adoptedStyleSheets=r.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of r){const i=document.createElement("style"),o=_r.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=n.cssText,e.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:Pn).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const i=r.getPropertyOptions(n),o=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Pn;this._$Em=n;const s=o.fromAttribute(e,i.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){const n=this.constructor,i=this[t];if(r??=n.getPropertyOptions(t),!((r.hasChanged??Ro)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:i},o){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),i!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,i]of r){const{wrapped:o}=i,s=this[n];o!==!0||this._$AL.has(n)||s===void 0||this.C(n,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Pt.elementStyles=[],Pt.shadowRootOptions={mode:"open"},Pt[Ht("elementProperties")]=new Map,Pt[Ht("finalized")]=new Map,Tc?.({ReactiveElement:Pt}),(xr.reactiveElementVersions??=[]).push("2.1.1");/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const Nn=globalThis,Cr=Nn.trustedTypes,Bo=Cr?Cr.createPolicy("lit-html",{createHTML:t=>t}):void 0,qo="$lit$",st=`lit$${Math.random().toFixed(9).slice(2)}$`,Fo="?"+st,Pc=`<${Fo}>`,ht=document,zt=()=>ht.createComment(""),Wt=t=>t===null||typeof t!="object"&&typeof t!="function",An=Array.isArray,En=`[ 	
\f\r]`,Gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vo=/-->/g,Uo=/>/g,gt=RegExp(`>|${En}(?:([^\\s"'>=/]+)(${En}*=${En}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ho=/'/g,zo=/"/g,Wo=/^(?:script|style|textarea|title)$/i,Nt=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),Ke=Symbol.for("lit-noChange"),Ae=Symbol.for("lit-nothing"),Go=new WeakMap,mt=ht.createTreeWalker(ht,129);function Qo(t,e){if(!An(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bo!==void 0?Bo.createHTML(e):e}const Nc=(t,e)=>{const r=t.length-1,n=[];let i,o=e===2?"<svg>":e===3?"<math>":"",s=Gt;for(let c=0;c<r;c++){const d=t[c];let l,p,u=-1,h=0;for(;h<d.length&&(s.lastIndex=h,p=s.exec(d),p!==null);)h=s.lastIndex,s===Gt?p[1]==="!--"?s=Vo:p[1]!==void 0?s=Uo:p[2]!==void 0?(Wo.test(p[2])&&(i=RegExp("</"+p[2],"g")),s=gt):p[3]!==void 0&&(s=gt):s===gt?p[0]===">"?(s=i??Gt,u=-1):p[1]===void 0?u=-2:(u=s.lastIndex-p[2].length,l=p[1],s=p[3]===void 0?gt:p[3]==='"'?zo:Ho):s===zo||s===Ho?s=gt:s===Vo||s===Uo?s=Gt:(s=gt,i=void 0);const g=s===gt&&t[c+1].startsWith("/>")?" ":"";o+=s===Gt?d+Pc:u>=0?(n.push(l),d.slice(0,u)+qo+d.slice(u)+st+g):d+st+(u===-2?c:g)}return[Qo(t,o+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Qt{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const c=e.length-1,d=this.parts,[l,p]=Nc(e,r);if(this.el=Qt.createElement(l,n),mt.currentNode=this.el.content,r===2||r===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=mt.nextNode())!==null&&d.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(qo)){const h=p[s++],g=i.getAttribute(u).split(st),m=/([.?@])?(.*)/.exec(h);d.push({type:1,index:o,name:m[2],strings:g,ctor:m[1]==="."?Ec:m[1]==="?"?Oc:m[1]==="@"?Lc:$r}),i.removeAttribute(u)}else u.startsWith(st)&&(d.push({type:6,index:o}),i.removeAttribute(u));if(Wo.test(i.tagName)){const u=i.textContent.split(st),h=u.length-1;if(h>0){i.textContent=Cr?Cr.emptyScript:"";for(let g=0;g<h;g++)i.append(u[g],zt()),mt.nextNode(),d.push({type:2,index:++o});i.append(u[h],zt())}}}else if(i.nodeType===8)if(i.data===Fo)d.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(st,u+1))!==-1;)d.push({type:7,index:o}),u+=st.length-1}o++}}static createElement(e,r){const n=ht.createElement("template");return n.innerHTML=e,n}}function At(t,e,r=t,n){if(e===Ke)return e;let i=n!==void 0?r._$Co?.[n]:r._$Cl;const o=Wt(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??=[])[n]=i:r._$Cl=i),i!==void 0&&(e=At(t,i._$AS(t,e.values),i,n)),e}let Ac=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??ht).importNode(e,!0);mt.currentNode=n;let i=mt.nextNode(),o=0,s=0,c=r[0];for(;c!==void 0;){if(o===c.index){let d;c.type===2?d=new Et(i,i.nextSibling,this,t):c.type===1?d=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(d=new Mc(i,this,t)),this._$AV.push(d),c=r[++s]}o!==c?.index&&(i=mt.nextNode(),o++)}return mt.currentNode=ht,n}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}};class Et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=Ae,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=At(this,e,r),Wt(e)?e===Ae||e==null||e===""?(this._$AH!==Ae&&this._$AR(),this._$AH=Ae):e!==this._$AH&&e!==Ke&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):(n=>An(n)||typeof n?.[Symbol.iterator]=="function")(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ae&&Wt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ht.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Qt.createElement(Qo(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(r);else{const o=new Ac(i,this),s=o.u(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(e){let r=Go.get(e.strings);return r===void 0&&Go.set(e.strings,r=new Qt(e)),r}k(e){An(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of e)i===r.length?r.push(n=new Et(this.O(zt()),this.O(zt()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class $r{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,o){this.type=1,this._$AH=Ae,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ae}_$AI(e,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)e=At(this,e,r,0),s=!Wt(e)||e!==this._$AH&&e!==Ke,s&&(this._$AH=e);else{const c=e;let d,l;for(e=o[0],d=0;d<o.length-1;d++)l=At(this,c[n+d],r,d),l===Ke&&(l=this._$AH[d]),s||=!Wt(l)||l!==this._$AH[d],l===Ae?e=Ae:e!==Ae&&(e+=(l??"")+o[d+1]),this._$AH[d]=l}s&&!i&&this.j(e)}j(e){e===Ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ec extends $r{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ae?void 0:e}}class Oc extends $r{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ae)}}class Lc extends $r{constructor(e,r,n,i,o){super(e,r,n,i,o),this.type=5}_$AI(e,r=this){if((e=At(this,e,r,0)??Ae)===Ke)return;const n=this._$AH,i=e===Ae&&n!==Ae||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==Ae&&(n===Ae||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Mc{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){At(this,e)}}const Dc={I:Et},Rc=Nn.litHtmlPolyfillSupport;Rc?.(Qt,Et),(Nn.litHtmlVersions??=[]).push("3.3.1");const On=globalThis;/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */let Ot=class extends Pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((r,n,i)=>{const o=i?.renderBefore??n;let s=o._$litPart$;if(s===void 0){const c=i?.renderBefore??null;o._$litPart$=s=new Et(n.insertBefore(zt(),c),c,void 0,i??{})}return s._$AI(r),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ke}};Ot._$litElement$=!0,Ot.finalized=!0,On.litElementHydrateSupport?.({LitElement:Ot});const jc=On.litElementPolyfillSupport;jc?.({LitElement:Ot}),(On.litElementVersions??=[]).push("4.2.1");/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const Yo=1,Jo=2,kr=t=>(...e)=>({_$litDirective$:t,values:e});let Sr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const Bc=kr(class extends Sr{constructor(t){if(super(t),t.type!==Yo||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const i=!!e[n];i===this.st.has(n)||this.nt?.has(n)||(i?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return Ke}});/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function qc(t,e,r){return t?e(t):r?.(t)}/**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */function*Fc(t,e){if(t!==void 0){let r=0;for(const n of t)yield e(n,r++)}}/**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const Zo="important",Vc=" !"+Zo,Uc=kr(class extends Sr{constructor(t){if(super(t),t.type!==Yo||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,r)=>{const n=t[r];return n==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?r.removeProperty(n):r[n]=null);for(const n in e){const i=e[n];if(i!=null){this.ft.add(n);const o=typeof i=="string"&&i.endsWith(Vc);n.includes("-")||o?r.setProperty(n,o?i.slice(0,-11):i,o?Zo:""):r[n]=i}}return Ke}});/**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class Ln extends Sr{constructor(e){if(super(e),this.it=Ae,e.type!==Jo)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ae||e==null)return this._t=void 0,this.it=e;if(e===Ke)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Ln.directiveName="unsafeHTML",Ln.resultType=1;const Hc=kr(Ln),{I:zc}=Dc,Xo=()=>document.createComment(""),Yt=(t,e,r)=>{const n=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(r===void 0){const o=n.insertBefore(Xo(),i),s=n.insertBefore(Xo(),i);r=new zc(o,s,t,t.options)}else{const o=r._$AB.nextSibling,s=r._$AM,c=s!==t;if(c){let d;r._$AQ?.(t),r._$AM=t,r._$AP!==void 0&&(d=t._$AU)!==s._$AU&&r._$AP(d)}if(o!==i||c){let d=r._$AA;for(;d!==o;){const l=d.nextSibling;n.insertBefore(d,i),d=l}}}return r},ft=(t,e,r=t)=>(t._$AI(e,r),t),Wc={},Mn=t=>{t._$AR(),t._$AA.remove()},Ko=(t,e,r)=>{const n=new Map;for(let i=e;i<=r;i++)n.set(t[i],i);return n},Gc=kr(class extends Sr{constructor(t){if(super(t),t.type!==Jo)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let n;r===void 0?r=e:e!==void 0&&(n=e);const i=[],o=[];let s=0;for(const c of t)i[s]=n?n(c,s):s,o[s]=r(c,s),s++;return{values:o,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,n]){const i=(w=>w._$AH)(t),{values:o,keys:s}=this.dt(e,r,n);if(!Array.isArray(i))return this.ut=s,o;const c=this.ut??=[],d=[];let l,p,u=0,h=i.length-1,g=0,m=o.length-1;for(;u<=h&&g<=m;)if(i[u]===null)u++;else if(i[h]===null)h--;else if(c[u]===s[g])d[g]=ft(i[u],o[g]),u++,g++;else if(c[h]===s[m])d[m]=ft(i[h],o[m]),h--,m--;else if(c[u]===s[m])d[m]=ft(i[u],o[m]),Yt(t,d[m+1],i[u]),u++,m--;else if(c[h]===s[g])d[g]=ft(i[h],o[g]),Yt(t,i[u],i[h]),h--,g++;else if(l===void 0&&(l=Ko(s,g,m),p=Ko(c,u,h)),l.has(c[u]))if(l.has(c[h])){const w=p.get(s[g]),b=w!==void 0?i[w]:null;if(b===null){const x=Yt(t,i[u]);ft(x,o[g]),d[g]=x}else d[g]=ft(b,o[g]),Yt(t,i[u],b),i[w]=null;g++}else Mn(i[h]),h--;else Mn(i[u]),u++;for(;g<=m;){const w=Yt(t,d[m+1]);ft(w,o[g]),d[g++]=w}for(;u<=h;){const w=i[u++];w!==null&&Mn(w)}return this.ut=s,((w,b=Wc)=>{w._$AH=b})(t,d),Ke}});/**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */class Ce extends Ot{constructor(){super()}get html(){return Nt}get map(){return Fc}get classMap(){return Bc}get when(){return qc}get styleMap(){return Uc}get nothing(){return Ae}get unsafeHTML(){return Hc}get repeat(){return Gc}get css(){return Lo}createRenderRoot(){return this}}let Ve=class Oe extends Ce{static HIDE_TAGS={IMAGE:"corner-hide-img",TITLE:"corner-hide-title",OPTIONS:"corner-hide-options",SELLING_PLAN:"corner-hide-selling-plan",PRICE:"corner-hide-price",CLOSE_BUTTON:"corner-hide-close-btn",ALL:"corner-hide-all",PARCELIS_PRODUCT:"parcelis",NON_CLICKABLE_TITLE:"corner-non-clickable-product-title"};static DEFAULTS={COLORS:{PRIMARY:"#000000",SECONDARY:"#666666",ACCENT:"#000000"},TEXTS:{FREE:"Free",UNKNOWN_PRODUCT:"Unknown Product",UNKNOWN_ITEM:"Unknown Item",VIEW_BUNDLE:"View Bundle",REMOVE_ITEM:"Remove item from cart"},LIMITS:{TITLE_TRUNCATE:67,PRICE_FALLBACK:"$0.00"},CURRENCY_FORMAT:"USD {{amount}}"};static PRODUCT_TYPES={FREE:"free_product"};static PROPERTY_KEYS={BUNDLE_QTY:"_cornerBundleQty",SHIPPING_INTERVAL_UNIT:"shipping_interval_unit_type",SHIPPING_INTERVAL_FREQUENCY:"shipping_interval_frequency"};static BANNED_PROPERTIES=["shipping_interval_unit_type","shipping_interval_frequency"];static properties={index:{type:Number},item:{type:Object},quantity:{type:Number},cart:{type:Object},isLoading:{type:Boolean},isCartLoading:{type:Boolean},lineItemMessages:{type:Array},globalContext:{type:Object},isQtyHidden:{type:Boolean},strikedPrice:{type:Number},finalPrice:{type:Number},isFreeProduct:{type:Boolean,attribute:!1}};constructor(){super(),this.index=0,this.item={},this.globalContext={},this.isCartLoading=!1}truncateString(e,r){return typeof e!="string"?"":window.corner?.utils?.truncateString?.(e,r)||(e.length>r?e.substring(0,r)+"...":e)}formatMoney(e,r){return window.corner?.utils?.formatMoney?.(e,r)||e}renderRechargeShippingFrequency(e,r){return!e||!r?"":window.corner?.utils?.renderRechargeShippingFrequency?.(e,r)||`Every ${e} ${r}${e>1?"s":""}`}isUrl(e){if(typeof e!="string")return!1;const r=window.corner?.utils?.isUrl?.(e);if(typeof r=="boolean")return r;try{return new URL(e),!0}catch{return!1}}get shouldShowImage(){return!this.item?.tags?.includes(Oe.HIDE_TAGS.IMAGE)}get shouldShowTitle(){return!this.item?.tags?.includes(Oe.HIDE_TAGS.TITLE)}get shouldShowOptions(){return!this.item?.tags?.includes(Oe.HIDE_TAGS.OPTIONS)}get shouldShowPrice(){return!this.item?.tags?.includes(Oe.HIDE_TAGS.PRICE)}get shouldShowCloseButton(){return!this.item?.tags?.includes(Oe.HIDE_TAGS.CLOSE_BUTTON)}get shouldShowAll(){return!this.item?.tags?.includes(Oe.HIDE_TAGS.ALL)}get isParcelisProduct(){return!!this.item?.tags?.includes(Oe.HIDE_TAGS.PARCELIS_PRODUCT)}get shouldShowSellingPlans(){return!this.item?.tags?.includes(Oe.HIDE_TAGS.SELLING_PLAN)}get isTitleClickable(){return this.item?.url&&this.item?.productType!==Oe.PRODUCT_TYPES.FREE&&!this.item?.tags?.includes(Oe.HIDE_TAGS.NON_CLICKABLE_TITLE)&&!this.isParcelisProduct}get variantOptions(){return this.item?.variantOptions?.filter(e=>e!=="Default Title")||[]}get hasVariantOptions(){return this.variantOptions.length>0}get productTitle(){return this.item?.productTitle||Oe.DEFAULTS.TEXTS.UNKNOWN_PRODUCT}get truncatedTitle(){return this.truncateString(this.productTitle,Oe.DEFAULTS.LIMITS.TITLE_TRUNCATE)}get sellingPlanName(){return this.item?.sellingPlanAllocation?.selling_plan?.name}get hasRechargePlan(){return!(!this.item?.properties?.[Oe.PROPERTY_KEYS.SHIPPING_INTERVAL_UNIT]||!this.item?.properties?.[Oe.PROPERTY_KEYS.SHIPPING_INTERVAL_FREQUENCY])}get shouldRenderItemProperties(){return this.item?.properties&&typeof this.item?.properties=="object"&&Object.keys(this.item?.properties).length>0}get filteredPropertyKeys(){return Object.keys(this.item?.properties).filter(e=>(!e.startsWith("_")||window.cornerDevMode)&&!Oe.BANNED_PROPERTIES.includes(e)&&this.item?.properties[e])}get shouldShowStrikedPrice(){return this.strikedPrice>this.finalPrice}get removeButtonLabel(){return`Remove ${this.productTitle} from cart`}get freeText(){return this.globalContext?.currentLanguage?.cart?.free_text||Oe.DEFAULTS.TEXTS.FREE}get cornerCurrencyFormat(){return this.globalContext?.config?.general_config?.cornerCurrencyFormat||Oe.DEFAULTS.CURRENCY_FORMAT}get strikedPriceFormatted(){return this.strikedPrice?this.formatMoney(this.strikedPrice,this.cornerCurrencyFormat):""}get finalPriceFormatted(){return typeof this.finalPrice!="number"?"":this.formatMoney(this.finalPrice,this.cornerCurrencyFormat)}get primaryColor(){return this.globalContext?.config?.cornercart?.cartConfig?.colors?.primaryType||Oe.DEFAULTS.COLORS.PRIMARY}get secondaryColor(){return this.globalContext?.config?.cornercart?.cartConfig?.colors?.secondaryType||Oe.DEFAULTS.COLORS.SECONDARY}get accentColor(){return this.globalContext?.config?.cornercart?.cartConfig?.colors?.accentBg||Oe.DEFAULTS.COLORS.ACCENT}handleImageClick(){this.dispatchEvent(new CustomEvent("cart-action",{detail:{type:"imageClick",params:{bundleItem:this.item}}}))}handleItemRemove(){this.dispatchEvent(new CustomEvent("cart-action",{detail:{type:"deleteItem",item:this.item}}))}};class Dn extends Ce{static properties={index:{type:Number},item:{type:Object},hidden:{type:Boolean},quantity:{type:Number},globalContext:{type:Object},isLoading:{type:Boolean},isCartLoading:{type:Boolean}};static HIDE_TAGS={HIDE_QTY:"corner-hide-qty"};get productTitle(){return this.item?.productTitle||""}get shouldDisableQtyIncreaseButton(){return!!(this.item?.quantityRule&&typeof this.item?.quantityRule.maximum=="number"&&this.quantity>=this.item.quantityRule.maximum)}get shouldDisableQtyDecreaseButton(){return!!(this.item?.quantityRule&&typeof this.item?.quantityRule.minimum=="number"&&this.quantity<=this.item.quantityRule.minimum)}get shouldShowQty(){return!this.item?.tags?.includes(Dn.HIDE_TAGS.HIDE_QTY)}formatQuantity(e,r){return window.corner?.utils?.formatQuantity?.(e,r)||e}handleQtyChange(e){this.isLoading||this.isCartLoading||this.dispatchEvent(new CustomEvent("cart-action",{bubbles:!0,composed:!0,detail:{type:e,item:this.item}}))}render(){return this.when(this.hidden&&this.quantity>1,()=>this.when(this.hidden&&this.quantity>1,()=>this.html`
          <div
            id="corner-cowi-cart-item-qty-${this.index}"
            class=${this.classMap({"corner-cowi-cart-item-qty":!0,grow:!0,flex:!0,"items-center":!0,"rounded-md":!0,"corner-hide-qty":!this.shouldShowQty,invisible:!this.item?.cost,"pointer-events-none":!this.item?.cost})}
          >
            <div
              class="px-2 text-cowi-secondary-type text-center focus:outline-none bg-transparent text-sm 2xl:text-base font-bold appearance-none"
            >
              QTY:{' '}
              ${this.formatQuantity(this.quantity,this.item?.productType)}
            </div>
          </div>
        `),()=>this.when(!this.hidden,()=>this.when(!this.hidden,()=>this.html`
              <div
                id="corner-cowi-cart-item-qty-${this.index}"
                class="corner-cowi-cart-item-qty flex items-center justify-center rounded-md"
              >
                <button
                  id="corner-cowi-cart-item-customiser-qty-decrease-${this.index}"
                  aria-label="decrease-quantity"
                  aria-description="decrease quantity of ${this.productTitle}"
                  class=${this.classMap({"corner-cowi-cart-item-customiser-qty-decrease":!0,"w-8":!0,"h-6":!0,"px-2":!0,flex:!0,"items-center":!0,"justify-center":!0,border:!0,"border-cowi-outlines":!0,"border-solid":!0,"leading-none":!0,"text-cowi-secondary-type":!0,"text-xl":!0,"focus:outline-none":!0,"bg-transparent":!0,"transition-all":!0,"duration-500":!0,"cursor-pointer":!0,"rounded-md":!0,"hover:bg-[color:var(--corner-cowi-accent-bg)]":!0,"hover:text-[color:var(--corner-cowi-accent-fg)]":!0,"pointer-events-none":this.isLoading||this.isCartLoading,"opacity-50":this.shouldDisableQtyDecreaseButton})}
                  @click=${()=>this.handleQtyChange("decrease")}
                >
                  <corner-icon type="minus"></corner-icon>
                </button>

                <div
                  class="px-2 text-cowi-primary-type text-center focus:outline-none bg-transparent text-sm 2xl:text-base font-bold appearance-none"
                >
                    ${this.formatQuantity(this.quantity,this.item?.productType)}
                </div>

                <button
                  id="corner-cowi-cart-item-customiser-qty-increase-${this.index}"
                  aria-label="increase-quantity"
                  aria-description="increase quantity of ${this.productTitle}"
                  class=${this.classMap({"corner-cowi-cart-item-customiser-qty-increase":!0,"w-8":!0,"h-6":!0,"px-2":!0,flex:!0,"items-center":!0,"justify-center":!0,border:!0,"border-cowi-outlines":!0,"border-solid":!0,"leading-none":!0,"text-cowi-secondary-type":!0,"text-xl":!0,"focus:outline-none":!0,"bg-transparent":!0,"transition-all":!0,"duration-500":!0,"cursor-pointer":!0,"rounded-md":!0,"hover:bg-[color:var(--corner-cowi-accent-bg)]":!0,"hover:text-[color:var(--corner-cowi-accent-fg)]":!0,"pointer-events-none":this.isLoading||this.isCartLoading,"opacity-50":this.shouldDisableQtyIncreaseButton})}
                  @click=${()=>this.handleQtyChange("increase")}
                >
                  <corner-icon type="plus"></corner-icon>
                </button>
              </div>
            `),()=>this.nothing))}}class Qc extends Ve{static properties={isCornerVolumeBundleItem:{type:Boolean},isBundleEditable:{type:Boolean}};constructor(){super(),this.isQtyHidden=!0}get bundleButtonText(){return this.globalContext?.currentLanguage?.cart?.bundle_view_content_btn||Ve.DEFAULTS.TEXTS.VIEW_BUNDLE}get truncatedTitle(){return this.truncateString(this.item?.title,Ve.DEFAULTS.LIMITS.TITLE_TRUNCATE)}get imageLabel(){return`${Ve.DEFAULTS.TEXTS.VIEW_BUNDLE}: ${this.truncatedTitle}`}get removeButtonLabel(){return`Remove ${this.title} from cart`}render(){if(!this.item)return this.nothing;try{return this.html`
        <div
          id="corner-cowi-cart-item-${this.index}"
          data-testid="corner-cart-line"
          data-corner-product-id=${this.item?.productId||""}
          data-corner-variant-id=${this.item?.variantId||""}
          data-product-type=${this.item?.productType||""}
          data-vendor=${this.item?.vendor||""}
          data-quantity=${this.item?.quantity||0}
          class=${this.classMap({"corner-cowi-cart-item":!0,hidden:!this.shouldShowAll})}
          role="listitem"
          aria-label=${this.productTitle}
        >
          <div
            id=${`corner-cowi-cart-item-primary-info-${this.index}`}
            data-testid="corner-cowi-cart-item-primary-info"
            class="corner-cowi-cart-item-primary-info flex items-stretch"
          >
            <div
              id=${`corner-cowi-cart-item-list-item-image-${this.index}`}
              data-testid="corner-cowi-cart-item-list-item-image"
              class=${this.classMap({"w-16":!0,"bg-cowi-card-bg":!0,relative:!0,"md:w-20":!0,flex:!0,"flex-wrap":!0,"items-start":!0,"flex-grow-0":!0,"flex-shrink-0":!0,"rounded-lg":!0,"corner-bundle-stack cursor-pointer":!0,invisible:!this.shouldShowImage,"pointer-events-none":!this.shouldShowImage})}
              title=${this.imageLabel}
              @click=${this.handleImageClick}
            >
              ${this.when(this.item?.properties?.[Ve.PROPERTY_KEYS.BUNDLE_QTY],()=>this.html`
                  <div
                    class="flex absolute -bottom-3 z-20 left-1/3 rounded-full items-center justify-center p-1 w-6 h-6 text-cowi-accent-bg border border-solid border-cowi-accent-bg bg-cowi-card-bg"
                  >
                    ${this.item?.properties?.[Ve.PROPERTY_KEYS.BUNDLE_QTY]}
                  </div>
                `)}
              ${this.when(this.item?.image,()=>this.html`
                  <img
                    data-testid="item-image"
                    class="w-full relative z-10 object-cover rounded-lg border border-solid border-cowi-accent-bg h-full"
                    src=${this.item.image}
                    alt=${this.item.productTitle+"-image"}
                  />
                `)}
            </div>
            <div
              data-testid="corner-cowi-cart-item-list-item-info-body"
              id="corner-cowi-cart-item-list-item-info-body-${this.index}"
              class="corner-cowi-cart-item-list-item-info-body flex flex-col justify-between flex-grow ml-4"
            >
              <div
                data-testid="corner-cowi-cart-item-list-item-info-title-wrapper"
                id="corner-cowi-cart-item-list-item-info-title-wrapper-${this.index}"
                class="corner-cowi-cart-item-list-item-info-title-wrapper flex items-start"
              >
                <div class="grow">
                  ${this.html`
                    <a data-testid="corner-cowi-cart-item-title-anchor"
                      href=${this.isTitleClickable?this.item.url:"#"}
                      class=${this.classMap({"text-base":!0,"font-bold":!0,invisible:!this.shouldShowTitle,"pointer-events-none":!this.shouldShowTitle||!this.isTitleClickable})}>
                      <p 
                        class="text-md leading-snug text-cowi-primary-type hover:text-[color:var(--corner-cowi-accent-bg)] transition-all">
                        ${this.truncatedTitle}
                      </p>
                    </a>
                  `}
                  ${this.html`
                    <button
                      @click=${this.handleImageClick}
                      @keydown=${e=>e.key==="Enter"&&this.handleImageClick(e)}
                      class="corner-cowi-cart-item-bundle-expand-btn mt-2 flex cursor-pointer border border-cowi-outlines border-solid items-center text-sm rounded-full bg-cowi-card-bg px-3 py-1 transition-all hover:-translate-y-1 max-w-fit"
                      aria-label=${`Edit bundle: ${this.productTitle}`}
                      title=${`Edit bundle: ${this.productTitle}`}
                      type="button"
                    >
                      ${this.unsafeHTML(this.bundleButtonText)}
                    </button>
                  `}
                  <div
                    id="corner-cowi-cart-item-line-properties-${this.index}"
                    class="corner-cowi-cart-item-line-properties text-xs flex flex-wrap leading-0 text-cowi-secondary-type"
                  >
                    ${this.when(this.sellingPlanName,()=>this.html`
                        <div
                          id="corner-cowi-cart-item-selling-plan-${this.index}"
                          class=${this.classMap({"corner-cowi-cart-item-selling-plan":!0,"px-2":!0,"font-bold":!0,"leading-0":!0,"text-cowi-secondary-type":!0,"mr-1":!0,"mt-1":!0,"rounded-lg":!0,border:!0,"border-solid":!0,"border-cowi-outlines":!0,"max-w-fit":!0,invisible:!this.shouldShowSellingPlans,"pointer-events-none":!this.shouldShowSellingPlans})}
                        >
                          <span> ${this.sellingPlanName} </span>
                        </div>
                      `)}
                    ${this.when(this.hasRechargePlan,()=>this.html`
                        <div
                          id="corner-cowi-cart-item-recharge-plan-description-${this.index}"
                          class="corner-cowi-cart-item-recharge-plan-description px-2 font-bold leading-0 text-cowi-secondary-type mr-1 mt-1 rounded-lg border border-solid border-cowi-outlines max-w-fit"
                        >
                          <span>
                            ${this.renderRechargeShippingFrequency(this.item?.properties?.[Ve.PROPERTY_KEYS.SHIPPING_INTERVAL_FREQUENCY],this.item?.properties?.[Ve.PROPERTY_KEYS.SHIPPING_INTERVAL_UNIT])}
                          </span>
                        </div>
                      `)}
                    ${this.when(this.shouldRenderItemProperties,()=>this.map(this.filteredPropertyKeys,e=>{const r=this.item?.properties?.[e];return this.when(this.isUrl(this.item?.properties?.[e]),()=>this.html`
                            <div
                              id=${e}
                              class="shrink-0 border border-cowi-outlines border-solid px-1 mr-1 mt-1 rounded-lg max-w-full"
                            >
                              <div class="flex items-center break-all">
                                <span>${e}:</span>
                                <a
                                  href=${r}
                                  target="_blank"
                                  class="font-bold w-5 h-5 mx-1"
                                >
                                  <corner-icon
                                    type="link"
                                    .color=${this.secondaryColor}
                                  ></corner-icon>
                                </a>
                              </div>
                            </div>
                          `,()=>this.html`
                                <div
                                  class="shrink-0 border border-cowi-outlines border-solid px-1 mr-1 mt-1 rounded-lg max-w-full"
                                >
                                  <div class="break-all">
                                    <span>${e}:</span>
                                    <span class="font-bold"
                                      >${r}</span
                                    >
                                  </div>
                                </div>
                              `)}))}
                  </div>
                </div>
                ${this.html`
                  <div
                    data-testid="corner-cowi-cart-item-list-item-info-remove-btn"
                    id="corner-cowi-cart-item-list-item-info-remove-btn-${this.index}"
                   class=${this.classMap({"corner-cowi-cart-item-list-item-info-remove-btn":!0,"w-5":!0,"h-5":!0,"p-[4px]":!0,"shrink-0":!0,"rounded-full":!0,"transition-all":!0,"opacity-50":!0,"cursor-pointer":!0,"hover:rotate-90":!0,"hover:opacity-100":!0,"mt-1":!0,"pointer-events-none":!this.shouldShowCloseButton||this.isLoading,invisible:!this.shouldShowCloseButton})}
                    @click=${this.handleItemRemove}
                    title=${this.removeButtonLabel}
                  >
                    <corner-icon
                      data-testid="corner-cowi-cart-item-list-item-info-remove-icon"
                      type="close-cross"
                      .color=${this.secondaryColor}
                    ></corner-icon>
                  </div>
                `}
              </div>
              ${this.when(this.lineItemMessages&&this.lineItemMessages.length,()=>this.html`
                  <corner-cart-line-messages
                    .lineItemMessages=${this.lineItemMessages}
                    .index=${this.index}
                  >
                  </corner-cart-line-messages>`)}
              <div
                id="corner-cowi-cart-item-customiser-${this.index}"
                class=${this.classMap({"corner-cowi-cart-item-customise":!0,flex:!0,"mt-3":!0,"items-center":!0,"justify-end":this.isCornerVolumeBundleItem||this.isQtyHidden,"justify-between":!(this.isCornerVolumeBundleItem||this.isQtyHidden)})}
              >
                ${this.when(!this.isQtyHidden&&!this.isCornerVolumeBundleItem,()=>this.html`
                  <corner-qty-control
                      class="block"
                      .index=${this.index}
                      .item=${this.item}
                      .quantity=${this.quantity}
                      .hidden=${this.isQtyHidden||this.isCornerVolumeBundleItem}
                      .globalContext=${this.globalContext}
                      .isLoading=${this.isLoading}
                      .isCartLoading=${this.isCartLoading}
                      @click=${this.handleQtyChange}
                    >
                    </corner-qty-control>
                `)}
                ${this.html`
                  <corner-price-text 
                    .item=${this.item}
                    .index=${this.index}
                    .finalPrice=${this.finalPriceFormatted}
                    .strikedPrice=${this.strikedPriceFormatted}
                    .hidePrice=${!this.shouldShowPrice}
                    .hideStrikedPrice=${!this.shouldShowStrikedPrice}
                    .freeText=${this.freeText}
                    .fallBackPrice=${this.fallBackPrice}
                    .isLoading=${this.isLoading}
                    .loaderColor=${this.primaryColor}
                    .isFreeProduct=${this.isFreeProduct}
                  ></corner-price-text>
                `}
              </div>
            </div>
          </div>
        </div>
      `}catch(e){return console.error("Error rendering cart item:",e),this.html`
        <div
          class="p-4 text-red-500 border border-red-300 rounded"
          role="alert"
        >
          Error loading cart item
        </div>
      `}}}class Jt extends Ce{static properties={index:{type:Number},lineItemMessages:{type:Array},wrapperClasses:{type:String},globalContext:{type:Object}};static CONTAINER_NAME="corner-cowi-line-item-messages-container";static CAMPAIGN_TYPES={LINE_ITEM_MESSAGES:"line_item_messages",TAGS:"tags"};getLocalizedMessage(e){return window.corner?.utils?.getLocalizedMessage?.(e)}wordReplacer(e,r){return window.corner.utils.wordReplacer(e,r)}getCampaignConfigProperty(e,r){return e&&e.config&&e.config[r]?e.config[r]:null}getCampaignConfigStyleProperty(e,r,n){const i=this.getCampaignConfigProperty(e,"style");return i?i[r]:n}constructor(){super()}render(){return this.when(this.lineItemMessages&&this.lineItemMessages.length,()=>this.html`
          <div
            class="relative ${Jt.CONTAINER_NAME}-${this.index} ${this.wrapperClasses}"
            id="${Jt.CONTAINER_NAME}-${this.index}"
          >
            ${this.map(this.lineItemMessages,(e,r)=>this.when(e&&e.type===Jt.CAMPAIGN_TYPES.LINE_ITEM_MESSAGES,()=>{const n=`corner-cowi-line-item-message-${this.index}-campaign-${e.campaign_id}`,i=this.getCampaignConfigProperty(e,"messagePosition")==="inside",o={"py-1.5":!0,"corner-cowi-highlight-tag-wrapper":!0,"text-cowi-primary-type":!0,"bg-cowi-secondary-bg":!0,"rounded-md":!0,"text-sm":!0,"px-2":i,"inline-block":i,"mt-1":i,"mr-1":i,"w-full":!i,"px-4":!i,"mb-1":this.lineItemMessages.length>1&&r!==this.lineItemMessages.length-1},s=Array.isArray(e.message)&&e.message.length!==0?this.html`<div>
                        ${this.unsafeHTML(window.corner.utils.getLocalizedMessage(e.message))}
                      </div>`:null,c=this.getCampaignConfigStyleProperty(e,"bgColor","transparent"),d=this.getCampaignConfigStyleProperty(e,"textColor","black"),l=`${n}-corner-cowi-highlight-content`;return this.html`
                    <div
                      id=${n}
                      style=${this.styleMap({backgroundColor:c,color:d})}
                      class=${this.classMap(o)}
                    >
                      <style>
                        #${l} * {
                          color: ${d||"inherit"} !important;
                          width: 100%;
                          height: 100%;
                        }
                        #${l} span {
                          line-height: 1.5;
                        }
                      </style>

                      <div
                        id=${l}
                        class="corner-cowi-highlight-tag-content flex w-full items-center"
                      >
                        ${s}
                      </div>
                    </div>
                  `},()=>{const n=`corner-cowi-line-item-message-${this.index}-campaign-${e.campaign_id}`,i={"py-1.5":!0,"corner-cowi-highlight-tag-wrapper":!0,"text-cowi-primary-type":!0,"bg-cowi-secondary-bg":!0,"rounded-md":!0,"text-sm":!0,"w-full":!0,"px-4":!0,"mb-1":this.lineItemMessages.length>1&&r!==this.lineItemMessages.length-1};return this.when(e.content&&e.wordMap,()=>{const o=this.wordReplacer(e.content,e.wordMap),s=`${n}-corner-cowi-highlight-content`;return this.html`
                        <div
                          id=${n}
                          style=${this.styleMap({backgroundColor:null,color:null})}
                          class=${this.classMap(i)}
                        >
                          <style>
                            #${s} * {
                              color: ${"inherit"} !important;
                              width: 100%;
                              height: 100%;
                            }
                            #${s} span {
                              line-height: 1.5;
                            }
                          </style>

                          <div
                            id=${s}
                            class="corner-cowi-highlight-tag-content flex w-full items-center"
                          >
                            ${this.unsafeHTML(o)}
                          </div>
                        </div>
                      `},()=>null)}))}
          </div>
        `)}}class Yc extends Ce{static properties={index:{type:Number},item:{type:Object},finalPrice:{type:Number},strikedPrice:{type:Number},hidePrice:{type:Boolean},hideStrikedPrice:{type:Boolean},freeText:{type:String},loaderColor:{type:String},isFreeProduct:{type:Boolean},fallBackPrice:{type:String},isLoading:{type:Boolean}};constructor(){super(),this.item={},this.index=0,this.hidePrice=!1,this.hideStrikedPrice=!0,this.finalPrice=0,this.strikedPrice=0,this.freeText="",this.fallBackPrice=""}render(){return this.finalPrice===null&&this.finalPrice===void 0||this.isLoading?this.html`
        <div
            class="mx-3 w-6 h-6 animate-spin"
            aria-label="Loading price"
        >
            <corner-icon
            type="loader"
            .color=${this.loaderColor}
            aria-hidden="true"
            ></corner-icon>
        </div>
        `:this.html`
        <div
            data-testid="corner-price-text"
          id="corner-cowi-cart-item-price-${this.index}"
          class=${this.classMap({"corner-cowi-cart-item-price":!0,flex:!0,"items-center":!0,"text-center":!0,invisible:this.hidePrice,"pointer-events-none":this.hidePrice})}
            aria-label="Item price"
        >
            ${this.when(!this.hideStrikedPrice,()=>this.html`
              <p
                class="text-xs md:text-sm text-cowi-secondary-type line-through mr-2"
                aria-label="Original price"
              >
                ${this.unsafeHTML(this.strikedPrice)}
              </p>
            `)}
            <p
              class=${this.classMap({"text-sm":!0,"md:text-base":!0,"text-cowi-primary-type":!0,"text-center":!0,"font-bold":!0,"px-3":this.isFreeProduct,"bg-cowi-secondary-bg":this.isFreeProduct,"rounded-full":this.isFreeProduct})}
              aria-label=${this.isFreeProduct?"Free item":"Current price"}
            >
              ${this.when(this.isFreeProduct,()=>this.unsafeHTML(this.freeText),()=>this.unsafeHTML(this.finalPrice))}
            </p>
        </div>
        `}}class Jc extends Ce{static properties={discounts:{type:Array},index:{type:Number},displayCloseIcon:{type:Boolean},globalContext:{type:Object}};constructor(){super(),this.displayCloseIcon=!1}get primaryColor(){return this.globalContext?.config?.cornercart?.cartConfig?.colors?.primaryType||CornerCartLineCore.DEFAULTS.COLORS.PRIMARY}get secondaryColor(){return this.globalContext?.config?.cornercart?.cartConfig?.colors?.secondaryType||CornerCartLineCore.DEFAULTS.COLORS.SECONDARY}get accentColor(){return this.globalContext?.config?.cornercart?.cartConfig?.colors?.accentBg||CornerCartLineCore.DEFAULTS.COLORS.ACCENT}render(){return this.html`
             <div
                id=corner-cowi-cart-item-discounts-${this.index}
                class="corner-cowi-cart-item-discounts w-full flex flex-wrap mt-1 px-4 md:px-6"
                >
                ${this.map(this.discounts,(e,r)=>{const n=e.title.replace(/&#39;/g,"'");return this.html`
                    <corner-offer-tag
                      .index=${r}
                      .content=${n}
                      .displayCloseIcon=${this.displayCloseIcon}
                      .tagIconColor=${this.primaryColor}
                      .closeIconColor=${this.secondaryColor}
                    />
                  `})}
            </div>
        `}}class et extends Ce{static DEFAULTS={STAR_COLOR:"#E5A500",EMPTY_STAR_COLOR:"#D1D5DB",STAR_SIZE:"14px",FONT_SIZE:"14px",GAP:"6px",COUNT_FORMAT:"parentheses",MAX_STARS:5};static properties={item:{type:Object},index:{type:Number},showStars:{type:Boolean},showRating:{type:Boolean},showRatingCount:{type:Boolean},starColor:{type:String},emptyStarColor:{type:String},textColor:{type:String},starSize:{type:String},fontSize:{type:String},gap:{type:String},countFormat:{type:String}};constructor(){super(),this.showStars=!0,this.showRating=!0,this.showRatingCount=!0,this.starColor=et.DEFAULTS.STAR_COLOR,this.emptyStarColor=et.DEFAULTS.EMPTY_STAR_COLOR,this.textColor="",this.starSize=et.DEFAULTS.STAR_SIZE,this.fontSize=et.DEFAULTS.FONT_SIZE,this.gap=et.DEFAULTS.GAP,this.countFormat=et.DEFAULTS.COUNT_FORMAT}get hasRatingValue(){const e=this.item?.rating?.value;return e!=null&&e!==""}get numericRating(){return parseFloat(this.item?.rating?.value)||0}get displayRating(){const e=String(this.item?.rating?.value??""),r=e.indexOf(".");return r===-1?e:e.slice(0,r+3)}get maxStars(){return parseInt(this.item?.rating?.scale_max||String(et.DEFAULTS.MAX_STARS),10)||et.DEFAULTS.MAX_STARS}get reviewCount(){const e=this.item?.ratingCount;return e??0}get shouldRender(){return!(!this.hasRatingValue||this.numericRating<=0)&&(this.showStars||this.showRating||this.showRatingCount)}get resolvedTextColor(){return this.textColor||Ve.DEFAULTS.COLORS.SECONDARY}_fillPercentForStar(e){const r=this.numericRating,n=Math.max(0,Math.min(1,r-(e-1)));return n<=.125?0:n<=.375?25:n<=.625?50:n<=.875?75:100}_buildAriaLabel(){const e=[`Rated ${this.displayRating} out of ${this.maxStars}`];return this.showRatingCount&&e.push(`${this.reviewCount} reviews`),e.join(", ")}_renderStar(e){const r=this._fillPercentForStar(e),n=`corner-rating-star-${this.index}-${e}`;return this.html`
      <span
        id=${n}
        class="corner-rating-star relative inline-block"
        style=${this.styleMap({width:this.starSize,height:this.starSize,fontSize:this.starSize,lineHeight:this.starSize})}
        aria-hidden="true"
      >
        <span
          class="absolute left-0 top-0"
          style=${this.styleMap({color:this.emptyStarColor})}
        >
          ★
        </span>
        <span
          class="absolute left-0 top-0 overflow-hidden whitespace-nowrap"
          style=${this.styleMap({color:this.starColor,width:`${r}%`})}
        >
          ★
        </span>
      </span>
    `}_renderStars(){const e=Array.from({length:this.maxStars},(r,n)=>this._renderStar(n+1));return this.html`
      <span class="corner-line-reviews-stars flex items-center gap-0.5">${e}</span>
    `}_renderRatingText(){return this.showRating?this.html`
    <span class="corner-line-reviews-rating"
    style=${this.styleMap({color:this.resolvedTextColor})}
    >
    ${this.displayRating}
    </span>
    `:this.nothing}_renderReviewCountText(){return this.showRatingCount?this.countFormat==="suffix"?this.html`
        <span class="corner-line-reviews-count"
        style=${this.styleMap({color:this.resolvedTextColor})}
        > · ${this.reviewCount} reviews</span>
      `:this.html`<span class="corner-line-reviews-count"
    style=${this.styleMap({color:this.resolvedTextColor})}
    > (${this.reviewCount})
    </span>`:this.nothing}render(){return this.shouldRender?this.html`
      <div
        id="corner-cowi-cart-item-rating-${this.index}"
        data-testid="corner-line-reviews"
        class="corner-line-reviews flex items-center text-cowi-secondary-type"
        style=${this.styleMap({gap:this.gap,marginTop:"4px",fontSize:this.fontSize,color:this.resolvedTextColor})}
        aria-label=${this._buildAriaLabel()}
      >
        ${this.showStars?this._renderStars():this.nothing}
        ${this.showRating||this.showRatingCount?this.html`
              <span class="corner-line-reviews-text flex items-center leading-5 gap-1">
                ${this._renderRatingText()}${this._renderReviewCountText()}
              </span>
            `:this.nothing}
      </div>
    `:this.nothing}}class Zc extends Ce{static properties={index:{type:Boolean},content:{type:String},displayCloseIcon:{type:Boolean},tagIconColor:{type:String},closeIconColor:{type:String}};constructor(){super()}triggerOnClose(){this.dispatchEvent(new CustomEvent("tag-action",{detail:{type:"removeTag",index:this.index,content:this.content}}))}render(){return this.html`
        <div class="text-xs mr-1 bg-cowi-secondary-bg px-2 py-1 my-1 rounded-md flex items-center text-cowi-primary-type font-bold">
            <span class="font-bold w-5 h-5 mr-1">
                <corner-icon
                type="tag"
                .color=${this.tagIconColor}
                ></corner-icon>
            </span>
            <span>
                ${this.unsafeHTML(this.content)}
            </span>
            ${this.when(this.displayCloseIcon,()=>this.html`
                    <button
                    aria-description="close tag"
                    aria-label="close-tag"
                    @click=${this.triggerOnClose}
                    class="font-bold w-2 h-2 ml-2 cursor-pointer"
                    >
                    <corner-icon
                        type="close-cross"
                        .color=${this.closeIconColor}
                    ></corner-icon>
                    </button>
                `)}
            </div>
        `}}class Xc extends Ce{static properties={globalContext:{type:Object},message:{type:Array}};constructor(){super(),this.globalContext={},this.message=[]}getWordMap(){return[{placeholder:"items_subtotal_price",value:this.globalContext.cart?.items_subtotal_price,valueType:"currency"},{placeholder:"itemCount",value:this.globalContext.cart?.itemCount},{placeholder:"currency",value:this.globalContext.cart?.currency},{placeholder:"total_discount",value:this.globalContext.cart?.total_discount,valueType:"currency"},{placeholder:"original_total_price",value:this.globalContext.cart?.original_total_price,valueType:"currency"}]}replaceMessageBannerTextPlaceholders(e){const r=e||this.message||[];if(!Array.isArray(r)||r.length===0)return"";const n=window.Shopify?.locale||"en",i=r.map(c=>c.language).includes(n)?r.find(c=>c.language===n):r[0],o=i?.content||"";return window.corner.utils.wordReplacer(o,this.getWordMap())||""}}class Rn extends Xc{static properties={textColor:{type:String},bgColor:{type:String},align:{type:Boolean},announcementId:{type:String},cart:{type:Object},globalContext:{type:Object}};static CONTAINER_NAME="corner-cowi-message-banner-item-container";constructor(){super(),this.textColor="#000",this.bgColor="#fff",this.align=!1,this.announcementId="0"}render(){const e=this.replaceMessageBannerTextPlaceholders();if(!e)return this.nothing;const r=`${Rn.CONTAINER_NAME}-${this.announcementId}`,n=this.classMap({"w-full":!0,relative:!0,[r]:!0,"text-left":this.align,"text-center":!this.align,"h-full":!0});return this.html`
      <div class=${n} id=${r}>
        <style>
          .widgets-by-corner #${r} * {
            color: ${this.textColor} !important;
          }
        </style>

        <div
          id=${`corner-cowi-message-banner-item-${this.announcementId}`}
          class="corner-cowi-message-banner-item text-center py-4 text-sm border-b border-solid border-cowi-outlines"
          style=${this.styleMap({background:this.bgColor,padding:"1rem 25px",fontSize:"1.5rem",color:this.textColor,"min-height":"stretch",display:"flex","align-items":"center","justify-content":this.align?"flex-start":"center","flex-direction":"column","flex-wrap":"wrap"})}
        >
          ${this.unsafeHTML(e)}
        </div>
      </div>
    `}}class Kc extends Ce{static properties={announcements:{type:Array},cart:{type:Object},globalContext:{type:Object},align:{type:Boolean},autoScroll:{type:Boolean},autoScrollInterval:{type:Number},controllerType:{type:String},showDots:{type:Boolean}};constructor(){super(),this.announcements=[],this.globalContext={},this.align=!1,this.autoScroll=!0,this.autoScrollInterval=5e3,this.controllerType="swipeIndicators",this.showDots=!1}get buttonColors(){const e=this.visibleCartAnnouncements;return e.length>0?e[0].attributes.textColor:""}get visibleCartAnnouncements(){return Array.isArray(this.announcements)?this.announcements.filter(e=>{const r=e?.config?.displaySurfaces,n=!r||r.includes("cart"),i=!!e?.attributes?.textColor;return n&&i}):[]}render(){const e=this.visibleCartAnnouncements;return e&&e.length!==0?this.html`
      <corner-carousel
        .autoScroll=${this.autoScroll}
        .autoScrollInterval=${this.autoScrollInterval}
        .controllerType=${this.controllerType}
        .showDots=${this.showDots}
        .itemsPerPage=${1}
        .buttonColor=${this.buttonColors}
      >
        ${this.repeat(e,r=>r.id,(r,n)=>this.html`
            <corner-cart-announcement-item
              .message=${r.message}
              .textColor=${r.attributes?.textColor??"#000"}
              .bgColor=${r.attributes?.bgColor??"#fff"}
              .align=${this.align}
              .cart=${this.globalContext.cart}
              .globalContext=${this.globalContext}
              .announcementId=${String(n)}
            ></corner-cart-announcement-item>
          `)}
      </corner-carousel>
    `:this.nothing}}class jn extends Ce{static instanceCounter=0;static properties={padding:{type:String},margin:{type:String},class:{type:String,attribute:"class"}};constructor(){super(),this.padding="",this.margin="",this.class="",this._wrapperElement=null,this.instanceId="corner-container-"+ ++jn.instanceCounter,this._wrapperId=`${this.instanceId}-wrapper`,this._childObserver=null,this._moveChildrenRafId=null}render(){const e={};return this.padding&&(e.padding=this.padding),this.margin&&(e.margin=this.margin),this.html`
      <div
        id=${this._wrapperId}
        class="corner-container-wrapper ${this.class||""}"
        style=${this.styleMap(e)}
      ></div>
    `}connectedCallback(){super.connectedCallback(),this.dataset.containerId=this.instanceId}firstUpdated(){this.moveChildren(),this.setupChildObserver()}updated(e){super.updated(e),e.has("class")&&(this._wrapperElement=null),(this._wrapperElement||this.querySelector(`#${this._wrapperId}`))&&this.moveChildren()}disconnectedCallback(){super.disconnectedCallback(),this._childObserver&&(this._childObserver.disconnect(),this._childObserver=null),this._moveChildrenRafId!==null&&(cancelAnimationFrame(this._moveChildrenRafId),this._moveChildrenRafId=null),this._wrapperElement=null}setupChildObserver(){typeof MutationObserver<"u"&&(this._childObserver&&this._childObserver.disconnect(),this._childObserver=new MutationObserver(e=>{e.some(r=>r.type==="childList"&&(r.addedNodes.length>0||r.removedNodes.length>0))&&(this._moveChildrenRafId!==null&&cancelAnimationFrame(this._moveChildrenRafId),this._moveChildrenRafId=requestAnimationFrame(()=>{this.moveChildren(),this._moveChildrenRafId=null}))}),this._childObserver.observe(this,{childList:!0,subtree:!1}))}moveChildren(){this._wrapperElement=this.querySelector(`#${this._wrapperId}`),this._wrapperElement&&Array.from(this.children).filter(e=>e!==this._wrapperElement&&e.parentElement!==this._wrapperElement).forEach(e=>{this._wrapperElement.appendChild(e)})}}class Zt{constructor(){if(Zt.instance)return Zt.instance;this.components=new Map,this.classNameToTagName=new Map,this.extendedComponents=new Map,this.variantComponents=new Map,this.isInitialized=!1,this.pendingCallbacksForReady=[],Zt.instance=this}registerComponent(e,r,n){if(!e||typeof e!="string")return{added:!1,message:"registerComponent: tagName must be a non-empty string",type:"error"};if(!r||typeof r!="string")return{added:!1,message:"registerComponent: className must be a non-empty string",type:"error"};if(typeof n!="function")return{added:!1,message:"registerComponent: classDefinition must be a function/class",type:"error"};if(!/^[a-z][a-z0-9]*-[a-z0-9-]*$/.test(e))return{added:!1,message:"registerComponent: tagName must be lowercase alphanumeric with at least one hyphen",type:"error"};if(!/^[A-Z][a-zA-Z0-9]*$/.test(r))return{added:!1,message:"registerComponent: className must be PascalCase (e.g., CornerIcon)",type:"error"};let i,o="log";if(this.components.has(e)){const s=this.components.get(e);this.classNameToTagName.has(s.className)&&this.classNameToTagName.delete(s.className),i=`Component "${e}" already registered (className: "${s.className}"). Overwriting with new registration (className: "${r}").`,o="warn"}if(this.classNameToTagName.has(r)){const s=this.classNameToTagName.get(r);s!==e&&(i=`className "${r}" already exists for "${s}". Now registering same className for "${e}". getClass('${r}') will return the last registered component.`,o="warn")}return this.components.set(e,{tagName:e,className:r,classDefinition:n}),this.classNameToTagName.set(r,e),i=i||`Component "${e}" registered successfully`,{added:!0,message:i,type:o}}registerExtendedComponent(e,r){if(!e||typeof e!="string")return{added:!1,message:"registerExtendedComponent: tagName must be a non-empty string",type:"error"};if(typeof r!="function")return{added:!1,message:"registerExtendedComponent: componentClass must be a function/class",type:"error"};if(!/^[a-z][a-z0-9]*-[a-z0-9-]*$/.test(e))return{added:!1,message:"registerExtendedComponent: tagName must be lowercase alphanumeric with at least one hyphen",type:"error"};let n,i="log";return this.extendedComponents.has(e)&&(n=`Component "${e}" already has an extension. Overwriting with new extension. Previous customization will be lost.`,i="warn"),this.components.has(e)||(n=`Extending "${e}" but no base component registered. Available: [${Array.from(this.components.keys()).join(", ")}]`,i="warn"),this.extendedComponents.set(e,r),n=n||`Component "${e}" extended successfully`,{added:!0,message:n,type:i}}registerVariantComponent(e,r,n,i){if(!e||typeof e!="string")return{added:!1,message:"registerVariantComponent: tagName must be a non-empty string",type:"error"};if(!r||typeof r!="string")return{added:!1,message:"registerVariantComponent: className must be a non-empty string",type:"error"};if(!i||typeof i!="string")return{added:!1,message:"registerVariantComponent: baseClassName must be a non-empty string",type:"error"};if(typeof n!="function")return{added:!1,message:"registerVariantComponent: componentClass must be a function/class",type:"error"};if(!/^[a-z][a-z0-9]*-[a-z0-9-]*$/.test(e))return{added:!1,message:"registerVariantComponent: tagName must be lowercase alphanumeric with at least one hyphen",type:"error"};if(!/^[A-Z][a-zA-Z0-9]*$/.test(r))return{added:!1,message:"registerVariantComponent: className must be PascalCase (e.g., CornerCartProgressBar)",type:"error"};if(!/^[A-Z][a-zA-Z0-9]*$/.test(i))return{added:!1,message:"registerVariantComponent: baseClassName must be PascalCase (e.g., CornerCartProgress)",type:"error"};let o,s="log";if(this.variantComponents.has(e)){const c=this.variantComponents.get(e);this.classNameToTagName.has(c.className)&&this.classNameToTagName.delete(c.className),o=`Component "${e}" already has a variant (className: "${c.className}"). Overwriting with new variant (className: "${r}").`,s="warn"}return this.classNameToTagName.has(i)||(o=`Creating variant "${r}" but no base component "${i}" registered. Available: [${Array.from(this.components.keys()).join(", ")}]`,s="warn"),this.variantComponents.set(e,{tagName:e,className:r,classDefinition:n,baseClassName:i}),this.classNameToTagName.set(r,e),o=o||`Component "${r}" variant created successfully`,{added:!0,message:o,type:s}}getComponent(e){if(e&&typeof e=="string")return this.extendedComponents.get(e)||this.components.get(e)?.classDefinition||this.variantComponents.get(e)?.classDefinition}getComponentByClassName(e){if(!e||typeof e!="string")return null;const r=this.classNameToTagName.get(e);return r&&(this.variantComponents.get(r)||this.components.get(r))||null}getAllTagNames(){return Array.from([...this.components.keys(),...this.variantComponents.keys()])}getAllClassNames(){return Array.from(this.classNameToTagName.keys())}onReady(e){typeof e=="function"?this.pendingCallbacksForReady.push(e):console.warn("[CornerWebComponentsRegistry] onReady: callback must be a function")}markAsReady(){this.isInitialized=!0,this.pendingCallbacksForReady.forEach(e=>{try{e()}catch(r){console.error("[CornerWebComponentsRegistry] Error in onReady callback:",r)}}),this.pendingCallbacksForReady=[]}hasComponent(e){return!(!e||typeof e!="string")&&this.components.has(e)}hasComponentByClassName(e){return!(!e||typeof e!="string")&&this.classNameToTagName.has(e)}get size(){return this.components.size+this.variantComponents.size}clear(){this.components.clear(),this.classNameToTagName.clear(),this.extendedComponents.clear(),this.variantComponents.clear(),this.isInitialized=!1,this.pendingCallbacksForReady=[]}isDefined(e){return!(!e||typeof e!="string")&&!!window.customElements.get(e)}}class wt{static VALID_LEVELS=["log","warn","error"];static VALID_TYPES=["table","console"];constructor(e=100){this.debug=!1,(typeof e!="number"||e<=0||!Number.isFinite(e))&&(console.warn(`CornerWebComponentsAPI: Invalid maxLogs "${e}". Must be a positive number. Using default 100.`),e=100),this.logs=[],this.maxLogs=Math.floor(e)}_storeLog(e,r,n){const i={timestamp:new Date().toISOString(),level:e,message:`CornerWebComponentsAPI: ${r}`,...n!==void 0&&{data:n}};this.logs.push(i),this.logs.length>this.maxLogs&&this.logs.shift()}_validateType(e,r="console"){return wt.VALID_TYPES.includes(e)?e:(console.warn(`CornerWebComponentsAPI: Invalid type "${e}". Valid types: ${wt.VALID_TYPES.join(", ")}. Using default "${r}".`),r)}_printLogsToConsole(e){e.forEach(({level:r,message:n,data:i})=>{i!==void 0?console[r](n,i):console[r](n)})}log(e){this._storeLog("log",e)}error(e,r){this._storeLog("error",e,r),console.error(e)}warn(e){this._storeLog("warn",e)}setDebug(e=!0){this.debug=e}isDebug(){return this.debug}getLogs(){return[...this.logs]}getLogsByLevel(e){return wt.VALID_LEVELS.includes(e)?this.logs.filter(r=>r.level===e):(console.warn(`CornerWebComponentsAPI: Invalid log level: "${e}". Valid levels: ${wt.VALID_LEVELS.join(", ")}`),[])}printLogs(e="console"){e=this._validateType(e),console.group("Corner Web Components API Logs"),console.log(`Total logs: ${this.logs.length}`),this.logs.length===0?console.log("No logs stored"):e==="table"?console.table(this.logs):this._printLogsToConsole(this.logs),console.groupEnd()}printLogsByLevel(e,r="console"){r=this._validateType(r);const n=this.getLogsByLevel(e);(n.length!==0||wt.VALID_LEVELS.includes(e))&&(console.group(`Corner Web Components API ${e.toUpperCase()} Logs`),console.log(`Total ${e} logs: ${n.length}`),n.length===0?console.log(`No ${e} logs found`):r==="table"?console.table(n):this._printLogsToConsole(n),console.groupEnd())}clearLogs(){this.logs=[]}getLogStats(){const e={log:0,warn:0,error:0,total:this.logs.length};return this.logs.forEach(r=>{e[r.level]!==void 0&&e[r.level]++}),e}}const Bn="CORNER_COMPONENT_CLASSES",Ir="CORNER_EXTENDED_CLASSES",qn="CORNER_PENDING_EXTENDED_COMPONENTS",ea="WEB_COMPONENTS",ta="BOTH",el="NONE",tl="Component class not found",rl="Component already defined";class Xt extends wt{constructor(){if(Xt.instance)return Xt.instance;super(),this.componentRegistry=new Zt,this.isComponentsDefined=!1,this.debugView=el,Xt.instance=this,window.CornerWebComponentsAPI=this._createPublicAPI()}_createPublicAPI(){const e=this;return{createVariantComponent:(r,n,i,o)=>e.createVariantComponent(r,n,i,o),extendComponent:(r,n)=>e.extendComponent(r,n),extendComponents:r=>e.extendComponents(r),getComponent:r=>e.getComponent(r),getComponentByClassName:r=>e.getComponentByClassName(r),getClass:r=>e.getClass(r),getAllTagNames:()=>e.getAllTagNames(),getAvailableClasses:()=>e.getAvailableClasses(),hasComponent:r=>e.hasComponent(r),hasComponentByClassName:r=>e.hasComponentByClassName(r),hasExtendedComponent:r=>e.hasExtendedComponent(r),isDefined:r=>e.isDefined(r),whenReady:()=>e.whenReady(),getLogs:()=>e.getLogs(),getLogsByLevel:r=>e.getLogsByLevel(r),printLogs:(r="console")=>e.printLogs(r),printLogsByLevel:(r,n="console")=>e.printLogsByLevel(r,n),clearLogs:()=>e.clearLogs(),getLogStats:()=>e.getLogStats(),setDebug:r=>e.setDebug(r),showWebComponent:()=>e.showWebComponent(),showBoth:()=>e.showBoth(),get size(){return e.size},get isInitialized(){return e.isInitialized},get debug(){return e.isDebug()},get shouldShowBoth(){return e.debugView===ta},get shouldShowWebComponent(){return e.debugView===ea||this.shouldShowBoth},get debugView(){return e.debugView}}}get isInitialized(){return this.componentRegistry.isInitialized}_addPendingComponents(){window[qn]&&(window[qn].forEach(e=>{this.componentRegistry.onReady(e)}),delete window[qn])}_addExistingExtendedComponents(){const e=window[Ir]||new Map;if(this.log("[Legacy] Adding existing extended components to registry",e),e&&e.size){const r=[];e.forEach((n,i)=>{this.registerExtendedComponent(i,n)||r.push(i)}),r.length>0&&this.warn(`[Legacy] Failed to register existing extended components: ${r.join(", ")}`)}else this.log("[Legacy] No existing extended components found")}_addComponentToWindow(e,r){window[Bn]||(window[Bn]={}),window[Bn][e]=r}_addExtendedComponentToWindow(e,r){window[Ir]||(window[Ir]=new Map),window[Ir].set(e,r)}init(e){return this._addPendingComponents(),!e||this.registerComponents(e)}registerComponent(e,r,n){const i=this.componentRegistry.registerComponent(e,r,n);return i.type==="error"?(this.error(i.message),!1):(this._addComponentToWindow(r,n),this.isComponentsDefined&&this.defineComponent(e),this[i.type](i.message),i.added)}registerExtendedComponent(e,r){const n=this.componentRegistry.registerExtendedComponent(e,r);return n.type==="error"?(this.error(n.message),!1):(this._addExtendedComponentToWindow(e,r),this.isComponentsDefined&&this.defineComponent(e),this[n.type](n.message),n.added)}registerComponents(e){if(!Array.isArray(e))return this.error("registerComponents: components must be an array"),!1;const r=[];for(const{tagName:n,classDefinition:i,className:o}of e)this.registerComponent(n,o,i)||r.push(n);return window.dispatchEvent(new CustomEvent("CORNER_COMPONENT_CLASSES_READY",{detail:{timestamp:Date.now()}})),this._addExistingExtendedComponents(),this.componentRegistry.markAsReady(),r.length>0&&this.warn(`Some components failed to register: ${r.join(", ")}`),this.log("Components registered and ready event dispatched"),r.length===0}registerVariant(e,r,n,i){const o=this.componentRegistry.registerVariantComponent(e,r,n,i);return o.type==="error"?(this.error(o.message),!1):(this.isComponentsDefined&&this.defineComponent(e),this[o.type](o.message),o.added)}getAllTagNames(){return this.componentRegistry.getAllTagNames()}whenReady(){return this.isInitialized?Promise.resolve(this):new Promise(e=>{this.componentRegistry.onReady(()=>{e(this)})})}createVariantComponent(e,r,n,i){if(!e||typeof e!="string")return this.error("createVariantComponent: Invalid tagName in component definition"),!1;if(!n||typeof n!="string")return this.error("createVariantComponent: baseClassName must be a non-empty string"),!1;if(typeof i!="function")return this.error("createVariantComponent: callback must be a function"),!1;const o=this.getComponentByClassName(n);if(!o)return this.error(`createVariantComponent: No base component found with className "${n}"`),!1;const s=o.classDefinition;if(!s)return this.error(`createVariantComponent: No base class found for baseClassName "${n}"`),!1;try{const c=i(s);return typeof c!="function"?(this.error("createVariantComponent: Callback must return a class/function"),!1):(this.registerVariant(e,r,c,n),!0)}catch(c){return this.error("createVariantComponent: Error creating extended class:",c),!1}}extendComponent(e,r){if(!e||typeof e!="string")return this.error("extendComponent: className must be a non-empty string"),!1;if(typeof r!="function")return this.error("extendComponent: callback must be a function"),!1;const n=this.getComponentByClassName(e);if(!n)return!1;const i=n.classDefinition;if(!i)return this.error(`extendComponent: No base class found for className "${e}"`),!1;try{const o=r(i);if(typeof o!="function")return this.error("extendComponent: Callback must return a class/function"),!1;const s=n.tagName;return s&&typeof s=="string"?(this.registerExtendedComponent(s,o),{tagName:s,className:e}):(this.error("extendComponent: Invalid tagName in component definition"),!1)}catch(o){return this.error("extendComponent: Error creating extended class:",o),!1}}extendComponents(e){const r={success:[],failed:[]};if(!e||typeof e!="object")return this.error("extendComponents: components must be an object"),r;for(const[n,i]of Object.entries(e)){const o=this.extendComponent(n,i);o&&o.tagName?(r.success.push(n),this.isComponentsDefined&&this.defineComponent(o.tagName)):r.failed.push(n)}return r.success.length>0&&this.log(`Extended ${r.success.length} component(s): ${r.success.join(", ")}`),r.failed.length>0&&this.warn(`Failed to extend ${r.failed.length} component(s): ${r.failed.join(", ")}`),r}getComponentByClassName(e){if(!e||typeof e!="string")return this.error("getComponentByClassName: className must be a non-empty string"),null;const r=this.componentRegistry.getComponentByClassName(e);return r||this.error(`getComponentByClassName: No component found with className "${e}". Available: ${this.getAvailableClasses().join(", ")}`),r}getClass(e){const r=this.getComponentByClassName(e);return r?r.classDefinition:null}getAvailableClasses(){return this.componentRegistry.getAllClassNames()}isDefined(e){return this.componentRegistry.isDefined(e)}hasComponent(e){return this.componentRegistry.hasComponent(e)}hasComponentByClassName(e){return this.componentRegistry.hasComponentByClassName(e)}getComponent(e){return this.componentRegistry.getComponent(e)}hasExtendedComponent(e){return!(!e||typeof e!="string")&&this.componentRegistry.extendedComponents.has(e)}get size(){return this.componentRegistry.size}clear(){this.componentRegistry.clear(),this.isComponentsDefined=!1,this.log("Registry cleared")}defineComponent(e){if(this.isDefined(e))return{status:"skipped",message:rl};const r=this.getComponent(e);if(!r)return this.error(`Component class not found for <${e}>`),{status:"error",message:tl};try{return window.customElements.define(e,r),{status:"defined",message:`Defined component <${e}>.`}}catch(n){return this.error(`Failed to define component <${e}>:`,n),{status:"error",message:`Failed to define: ${n.message}`}}}defineComponents(){const e=[],r=[],n=[];for(const i of this.getAllTagNames()){const o=this.defineComponent(i);o.status!=="error"?o.status!=="skipped"?o.status==="defined"&&(this.hasExtendedComponent(i)?this.log(`Defined extended component <${i}>.`):e.push(i)):r.push(i):n.push({tagName:i,error:o.message})}return this.setComponentsDefined(),e.length>0&&this.log(`Defined default components: ${e.join(", ")}`),r.length>0&&this.log(`Skipped already defined components: ${r.join(", ")}`),n.length>0&&this.error(`${n.length} component(s) failed to define: ${n.map(i=>i.tagName).join(", ")}`),{defined:e.length,skipped:r.length,failed:n.length,errors:n}}setComponentsDefined(){this.isComponentsDefined=!0,this.log("All components marked as defined in CustomElementRegistry")}showWebComponent(){this.debugView=ea}showBoth(){this.debugView=ta}}class nl extends Ce{static properties={isChecked:{type:Boolean},isDisabled:{type:Boolean},onChange:{type:Function},id:{type:String},color:{type:String}};constructor(){super(),this.color="currentColor"}_handleChange(e){const r=e.target.checked;e.target.checked=this.isChecked,this.dispatchEvent(new CustomEvent("corner-checkbox-change",{detail:{checked:r},bubbles:!0,composed:!0}))}render(){const e=this.classMap({"corner-checkbox-wrapper":!0,"w-full":!0,"h-full":!0,"pointer-events-none":this.isDisabled});return this.html`
        <div class=${e}>
        ${this.html`
      <style>
        .widgets-by-corner .corner-cowi-checkbox-${this.id} {
          --corner-border-default: var(--corner-cowi-primary-type);
          display: block;
          width: 100%;
          height: 100%;
          cursor: pointer;
          position: relative;
          -webkit-tap-highlight-color: transparent;
        }

        .widgets-by-corner .corner-cowi-checkbox-${this.id} svg {
          display: block;
          position: absolute;
        }

        .widgets-by-corner .corner-cowi-checkbox-${this.id} input {
          display: block;
          outline: none;
          border: none;
          padding: 0;
          margin: 0;
          -webkit-appearance: none;
          width: 100%;
          height: 100%;
          border-radius: 36% / 36%;
          box-shadow: inset 0 0 0 1.5px var(--border, var(--corner-border-default));
          background: var(--background, transparent);
          transition:
            background 0.25s linear,
            box-shadow 0.25s linear;
        }

        .widgets-by-corner .corner-cowi-checkbox-${this.id} input + svg {
          width: 116% !important;
          height: 100% !important;
          left: 0;
          top: 0;
          color: var(--corner-cowi-accent-bg);
        }

        .widgets-by-corner .corner-cowi-checkbox-${this.id} input + svg .tick {
          stroke-dasharray: 20;
          stroke-dashoffset: 20;
          transition: stroke-dashoffset 0.2s;
        }

        .widgets-by-corner .corner-cowi-checkbox-${this.id} input + svg .tick.mask {
          stroke: white;
        }

        .widgets-by-corner .corner-cowi-checkbox-${this.id} input + svg + svg {
          width: 61%;
          height: 61%;
          fill: none;
          stroke: var(--corner-cowi-accent-bg);
          stroke-width: 15%;
          stroke-linecap: round;
          top: -33.33%;
          right: -55.55%;
          stroke-dasharray: 40%;
          stroke-dashoffset: 122%;
          pointer-events: none;
        }

        .widgets-by-corner .corner-cowi-checkbox-${this.id} input:checked {
          --background: var(--corner-cowi-accent-bg);
          --border: var(--corner-cowi-accent-bg);
        }

        .widgets-by-corner .corner-cowi-checkbox-${this.id} input:checked + svg .tick {
          stroke-dashoffset: 0; 
        }

        .widgets-by-corner .corner-cowi-checkbox-${this.id} input:checked + svg + svg {
          animation: check-${this.id} 0.2s ease 0.175s;
        }

        .widgets-by-corner .corner-cowi-checkbox-${this.id}:hover input:not(:checked) {
          --border: var(--corner-cowi-accent-bg);
        }

        @keyframes widgets-by-corner check-${this.id} {
          100% {
            stroke-dashoffset: 40%;
          }
        }
      </style>
    `}
        <label class=${`corner-cowi-checkbox-${this.id}`} id="corner-cowi-checkbox-${this.id}">
          <input
            type="checkbox"
            id="corner-cowi-checkbox-input-${this.id}"
            class="checkbox-input"
            .checked=${this.isChecked}
            ?disabled=${this.isDisabled}
            @change=${this._handleChange}
          />

          <svg viewBox="0 0 21 18">
            <symbol
              id="tick-path-${this.id}"
              viewBox="0 0 21 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69"
                fill="none"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </symbol>

            <defs>
              <mask id="tick-${this.id}">
                <use class="tick mask" href="#tick-path-${this.id}" />
              </mask>
            </defs>

            <use class="tick" href="#tick-path-${this.id}" stroke="currentColor"></use>

            <path
              fill="${this.color}"
              mask="url(#tick-${this.id})"
              d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z"
            ></path>
          </svg>

          <svg class="lines" viewBox="0 0 11 11">
            <path d="M5.88086 5.89441L9.53504 4.26746" />
            <path d="M5.5274 8.78838L9.45391 9.55161" />
            <path d="M3.49371 4.22065L5.55387 0.79198" />
          </svg>
        </label>
      </div>
        `}}class il extends Ce{static properties={campaign:{type:Object},product:{type:Object},globalContext:{type:Object},cart:{type:Object},isCartLoading:{type:Object},content:{type:Object}};constructor(){super()}updated(e){if(e.has("cart")&&this.cart?.items){const r=this.cart.items.find(n=>n?.properties?._oneClickRefId===this.campaign?.campaignid);this.isChecked=!!r}}get getActiveFg(){return this?.globalContext?.config?.cornercart?.cartConfig?.colors?.accentFg}get getPrimaryColor(){return this.globalContext.config?.cornercart.cartConfig.colors.primaryType}formatUpsellText(e){let r=0;if(this.campaign?.upsellProduct?.preferenceType==="merchantSelect"&&this.campaign?.upsellProduct?.preferenceValue)r=this.product.variants.find(i=>i.id==this.campaign?.upsellProduct.preferenceValue.id).price;else{const i=this.cart?.items?.find(o=>o?.properties?._oneClickRefId===this.campaign?.campaignid);r=i?i.cost.amountPerQuantity:this.product?.price}const n=[{placeholder:"title",value:`${this.product?.title}`},{placeholder:"amount",value:`${r}`,valueType:"currency"},{placeholder:"variant_title",value:`${this.campaign?.upsellProduct?.preferenceValue?.displayName}`}];return window.corner.utils.wordReplacer(e,n)}handleOneClickUpSellChange(e){const r=new CustomEvent("corner-cart-oneclick-upsell-change",{detail:{checked:e,campaignId:this.campaign.campaignid,productDetails:this.product},bubbles:!0,composed:!0});this.dispatchEvent(r)}getDisplayedPriceVariantId(){let e;return this.campaign?.upsellProduct?.preferenceType==="merchantSelect"&&this.campaign?.upsellProduct?.preferenceValue?e=this.campaign?.upsellProduct?.preferenceValue?.id:e=(this.product?.variants?.find(n=>n?.price===this.product?.price)).id,e}}const yt={critical(t,e,r=null){const n=`[${t}] CRITICAL: ${e}`;throw console.error(n,r||""),new Error(n)},error(t,e,r=null){console.error(`[${t}] ERROR: ${e}`,r||"")},warn(t,e,r=null){console.warn(`[${t}] WARNING: ${e}`,r||"")}},ol=["totalOrderValue","cartItemCount","cartWeight"],al=(t,e,r,n,i)=>{if(!Array.isArray(t)||t.length===0)return{milestones:[],progress:0};const o=typeof r!="number"||isNaN(r)?1:r,s=typeof e!="number"||isNaN(e)?0:e,c=n==="totalOrderValue",d=x=>c?x*o:x,l=t.map(x=>d(x.goal)),p=c?s*o:s,u=t.map((x,_)=>{const C=l[_],v=C>0?Math.min(100,Math.max(0,p/C*100)):0;return{...x,progress:Math.round(100*v)/100}}),h=100/u.length;let g=0,m=0;if(i&&i.milestones&&i.milestones.length>0){const x=i.milestones[i.milestones.length-1];x&&typeof x.goal=="number"&&(m=d(x.goal))}let w=0,b=-1;for(let x=0;x<l.length;x++){if(!(p>=l[x])){b===-1&&(b=x);break}w=x+1,x+1<l.length&&(b=x+1)}if(p>=l[l.length-1])g=100;else if(g=w*h,b>=0&&b<l.length){const x=b>0?l[b-1]:m,_=l[b]-x;_>0&&(g+=(p-x)/_*h)}return{milestones:u,progress:Math.round(100*g)/100}},sl=(t,e,r,n,i)=>{let o=[];for(let c=0;c<t.length;c+=e)o.push(t.slice(c,c+e));const s=[];for(let c=0;c<o.length;c++){const d=c>0?s[c-1]:null;s.push(al(o[c],r,n,i,d))}return o=s,o=o.map((c,d)=>((l,p,u)=>{let h=0;return(p===0||u[p-1].progress>=100)&&(h=l.progress),{milestones:l.milestones,progress:Math.round(100*h)/100}})(c,d,o)),o};class cl extends Ce{static properties={milestones:{type:Array,attribute:"milestones"},milestonesPerPage:{type:Number,attribute:"milestones-per-page"},currentMilestoneIndex:{type:Number,attribute:"current-milestone-index"},goalType:{type:String,attribute:"goal-type",converter:e=>(r=>{return i="totalOrderValue",ol.includes(n=r)?n:i;var n,i})(e)},currencyConversionMultiplier:{type:Number,attribute:"currency-conversion-multiplier"},currentValue:{type:Number,attribute:"current-value"},rewardsWorth:{type:Array,attribute:"rewards-worth"},globalContext:{type:Object,attribute:"global-context"}};constructor(){super(),this.milestones=[],this.milestonesPerPage=4,this.currentMilestoneIndex=0,this.goalType="totalOrderValue",this.currencyConversionMultiplier=1,this.currentValue=0,this.rewardsWorth=[],this.globalContext={},this._milestonePages=[],this._currentMilestonePageIndex=0}get milestonePages(){return this._milestonePages}get milestonesLength(){return this.milestones.length}get milestonePagesLength(){return this.milestonePages.length}get currentMilestone(){if(!this.milestones||this.milestones.length===0)return null;const e=Math.max(0,Math.min(this.currentMilestoneIndex,this.milestones.length-1));return this.milestones[e]}get currentMilestonePageIndex(){return this._currentMilestonePageIndex}updateCurrentMilestonePageIndex(){this._currentMilestonePageIndex=((e,r,n,i,o=null)=>{let s=Math.floor(e/r);if(r>0&&(e+1)%r===0&&e<i-1&&n>1){let c=!1;if(o&&Array.isArray(o)&&o.length>0){const d=Math.floor(e/r),l=e%r;if(d>=0&&d<o.length&&o[d]&&o[d].milestones&&l>=0&&l<o[d].milestones.length){const p=o[d].milestones[l];c=p&&p.progress===100}else c=!1}else c=!0;c&&(s=Math.min(n-1,Math.floor((e+1)/r)))}return e>i-1&&(s=n-1),Math.max(0,s)})(this.currentMilestoneIndex,this.milestonesPerPage,this.milestonePagesLength,this.milestonesLength,this.milestonePages)}updateMilestonePages(){try{this._milestonePages=sl(this.milestones,this.milestonesPerPage,this.currentValue,this.currencyConversionMultiplier,this.goalType)}catch(e){yt.error("[CornerCartProgressCore]","Error updating milestone pages:",e),this._milestonePages=[]}}willUpdate(e){(e.has("milestones")||e.has("milestonesPerPage")||e.has("currentValue")||e.has("currencyConversionMultiplier")||e.has("goalType"))&&(this.updateMilestonePages(),this.updateCurrentMilestonePageIndex()),e.has("currentMilestoneIndex")&&this.updateCurrentMilestonePageIndex()}wordReplacer(e,r){return((n,i)=>{const o=window?.corner?.utils?.wordReplacer;return o?o(n,i):n??""})(e,r)}renderMilestoneText(e,r){if(!e||!r)return this.nothing;const n=(({milestone:c,goalType:d,currentValue:l,currencyConversionMultiplier:p,rewardsWorthForMilestone:u})=>{const h=d==="totalOrderValue",g=typeof p!="number"||isNaN(p)?1:p,m=typeof l!="number"||isNaN(l)?0:l,w=typeof c.goal=="number"?c.goal:0,b=c.rewards?.rewardStack?.[0],x=Math.max(0,w-m);return[{placeholder:"goal",value:h?""+x*g*100:`${x}`,valueType:h?"currency":"number"},{placeholder:"current_status",value:h?100*m:m,valueType:h?"currency":"number"},{placeholder:"discount",value:b?.unit==="percent"?`${b.value}%`:100*(b?.value||0)*g,valueType:b?.unit!=="percent"?"currency":"number"},{placeholder:"rewardValue",value:u||"",valueType:"number"}]})({milestone:r,goalType:this.goalType,currentValue:this.currentValue,currencyConversionMultiplier:this.currencyConversionMultiplier,rewardsWorthForMilestone:this.rewardsWorth?.[r.id]}),i=e==="aboveText",o=this.currentMilestoneIndex===this.milestonesLength,s=i?o?this.milestones[this.milestonesLength-1]?.content?.postGoalText:r.content?.preGoalText:r.content?.milestoneLabel;return s?this.wordReplacer(s,n):this.nothing}}class Kt extends Ce{static CHECKOUT_TYPES={SPLIT:"split",UNIFIED:"unified",CLASSIC:"classic"};static DEFAULTS={COLORS:{PRIMARY:"#000000",SECONDARY:"#666666",ACCENT:"#000000"},LIMITS:{TITLE_TRUNCATE:67,PRICE_FALLBACK:"$0.00"},CURRENCY_FORMAT:"USD {{amount}}"};static properties={type:{type:String},showCartTotal:{type:Boolean},globalContext:{type:Object},totalAmount:{type:Number},isCartLoading:{type:Boolean}};constructor(){super(),this.type="split",this.showCartTotal=!1,this.globalContext={},this.totalAmount=0,this.isCartLoading=!1}wordReplacer(e,r){return((n,i)=>{const o=window?.corner?.utils?.wordReplacer;return o?o(n,i):n??""})(e,r)}get computedWordMap(){return[{placeholder:"cart_total",value:this.totalAmount,valueType:"currency"}]}formatMoney(e,r){return((n,i)=>window.corner?.utils?.formatMoney?.(n,i)||n)(e,r)}get cornerCurrencyFormat(){return this.globalContext?.config?.general_config?.cornerCurrencyFormat||Kt.DEFAULTS.CURRENCY_FORMAT}get getCurrentLanguage(){return this.globalContext?.currentLanguage||{}}get getTotalText(){return this.globalContext?.currentLanguage?.cart?.total_text||""}get getCartCtaButtonText(){return this.getCurrentLanguage.cart?.cart_list_cta||""}get getCheckoutType(){return this.type||Kt.CHECKOUT_TYPES.SPLIT}handleCheckoutSelection(){this.globalContext?.config?.cornercart?.cartConfig?.expressCheckout&&this.globalContext.config.cornercart.cartConfig.expressCheckout.isActive&&document.querySelector("#dynamic-checkout-cart")?window.useSampleData||this.dispatchCheckoutClickEvent({config:this.globalContext?.config,variant:this.getCheckoutType,isExpress:!0}):window.useSampleData||this.dispatchCheckoutClickEvent({config:this.globalContext?.config,variant:this.getCheckoutType,isExpress:!1})}dispatchCheckoutClickEvent({config:e,variant:r,isExpress:n}){this.dispatchEvent(new CustomEvent("corner-cart-checkout-click",{bubbles:!0,composed:!0,detail:{variant:r,config:e,isExpress:n}}))}get isCustomCssEnabled(){return this.globalContext?.config?.general_config?.featureFlag?.apps?.cornercart?.cornerwidget?.cornerwidget_custom_css||!1}get customHtmlAboveCta(){return this.globalContext?.config?.cornercart?.cartConfig?.customHtml?.aboveCheckoutCta||""}get customHtmlBelowCta(){return this.globalContext?.config?.cornercart?.cartConfig?.customHtml?.belowCheckoutCta||""}}class ll extends Ce{static properties={globalContext:{type:Object},isCartLoading:{type:Boolean},code:{type:String,attribute:!1},isLoading:{type:Boolean,attribute:!1},discountCodes:{type:Array},automaticDiscounts:{type:Array},cornerDiscount:{type:String}};constructor(){super(),this.globalContext={},this.code="",this.isLoading=!1,this.isCartLoading=!1,this.discountCodes=[],this.automaticDiscounts=[],this.cornerDiscount=""}updated(e){e&&!e.has("isLoading")&&!this.isCartLoading&&this.isLoading&&(this.isLoading=!1,this.code="")}apply(){this.code&&!this.isCartLoading&&(this.isLoading=!0,this.dispatchEvent(new CustomEvent("corner-discount-input-apply",{detail:{code:this.code},bubbles:!0,composed:!0})))}_handleRemove(e){e.detail?.content&&!this.isCartLoading&&this.dispatchEvent(new CustomEvent("corner-discount-input-remove",{detail:{code:e.detail.content},bubbles:!0,composed:!0}))}get getDiscountBoxPlaceholder(){return this.globalContext?.currentLanguage?.cart?.discount_box_place_holder||""}get getDiscountBoxCtaText(){return this.globalContext?.currentLanguage?.cart?.discount_box_cta||""}get getPrimaryTypeColor(){return this.globalContext?.config?.cornercart?.cartConfig?.colors?.primaryType||""}get getIsDiscountBoxActive(){return this.globalContext?.config?.cornercart?.cartConfig?.general?.isDiscountBoxActive||!1}}class dl extends Ce{static properties={checked:{type:Boolean},content:{type:String},checkBoxWarning:{type:Boolean},globalContext:{type:Object}};constructor(){super(),this.globalContext={},this.checked=!1,this.content="",this.checkBoxWarning=!1}_handleChange(e){this.checked=e.target.checked,this.dispatchEvent(new CustomEvent("corner-terms-change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}get getIsActive(){return this.globalContext?.config?.cornercart?.cartConfig?.termsCheckbox?.isActive&&this.globalContext?.config?.general_config?.featureFlag?.apps?.cornercart?.cornerwidget?.cornerwidget_custom_attributes}render(){if(!this.getIsActive)return this.nothing;const e=this.classMap({flex:!0,"items-center":!0,"justify-center":!0,"py-2":!0,"px-5":!0,"border-b":!0,"border-solid":!0,"border-cowi-outlines":!0,"animate-shake":this.checkBoxWarning});return this.html`
      <div
        id="corner-cowi-cart-terms-checkbox-wrapper"
        class=${e}
      >
        <input
          class="shrink-0 h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[color:var(--corner-cowi-accent-bg)] focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          id="corner-cowi-cart-terms-checkbox"
          .checked=${this.checked}
          @change=${this._handleChange}
        />
        <p class="form-check-label relative inline-block text-cowi-secondary-type text-sm font-bold">
          <span>
            ${this.unsafeHTML(this.content)}
          </span>
        </p>
      </div>
    `}}class Tr extends Ce{static DEFAULTS={CURRENCY_FORMAT:"USD {{amount}}",CHECKOUT_BUTTON_STYLE:"split"};static properties={globalContext:{type:Object},amountBeforeDiscount:{type:Number},amountAfterDiscount:{type:Number},showShippingOffers:{type:Boolean},shippingOffer:{type:Object},totalDiscountAmount:{type:Number}};constructor(){super(),this.globalContext={},this.amountBeforeDiscount=0,this.amountAfterDiscount=0,this.showShippingOffers=!1,this.shippingOffer={},this.totalDiscountAmount=0}renderPricingSubItem(e,r,n){return this.html`
            <div id=${e} class="px-5 pb-1 flex items-center justify-between">
                <span class="text-sm text-cowi-secondary-type">${this.unsafeHTML(r)}</span>
                <span class="text-sm font-bold text-cowi-primary-type">
                    ${typeof n=="string"?this.unsafeHTML(n):n}
                </span>
            </div>
        `}get getShowSubtotal(){return this.globalContext?.config?.cornercart?.cartConfig?.general?.showSubtotalInSummary||!1}get getSubtotalText(){return this.globalContext?.currentLanguage?.cart?.subtotal_text||""}get getShippingText(){return this.globalContext?.currentLanguage?.cart?.shipping_text||""}get getDiscountText(){return this.globalContext?.currentLanguage?.cart?.discount_text||""}get getFreeText(){return this.globalContext?.currentLanguage?.cart?.free_text||""}get getCurrencyFormat(){return this.globalContext?.config?.general_config?.cornerCurrencyFormat||Tr.DEFAULTS.CURRENCY_FORMAT}get getCheckoutButtonStyle(){return this.globalContext?.config?.cornercart?.cartConfig?.general?.checkoutButtonStyle||Tr.DEFAULTS.CHECKOUT_BUTTON_STYLE}get getTotalText(){return this.globalContext?.currentLanguage?.cart?.total_text||""}formatMoney=(e,r)=>window.corner?.utils?.formatMoney?.(e,r)||e}class ul extends Ce{static properties={globalContext:{type:Object},content:{type:String},isActive:{type:Boolean}};constructor(){super(),this.globalContext={},this.content="",this.isActive=!1}get getShowContinueShoppingBtn(){return this.isActive&&(this.globalContext?.config?.cornercart?.cartConfig?.general?.showContinueShoppingBtn??!1)}get getContinueShoppingText(){return this.content||this.globalContext?.currentLanguage.cart.cart_list_continue_shopping||""}_handleContinueShoppingClick(){this.dispatchEvent(new CustomEvent("corner-secondary-shopping-click",{bubbles:!0,composed:!0,detail:{type:"continue-shopping"}}))}}class pl extends Ce{static properties={timerId:{type:String},endTime:{type:Number},status:{type:String},message:{type:String},postMessage:{type:String},textColor:{type:String},bgColor:{type:String},postTextColor:{type:String},postBgColor:{type:String},postTimerAction:{type:String},_remainingTime:{type:Object,attribute:!1},_isExhausted:{type:Boolean,attribute:!1},globalContext:{type:Object}};constructor(){super(),this.timerId="",this.endTime=null,this.status=null,this.message="",this.postMessage="",this.textColor="",this.bgColor="",this.postTextColor="",this.postBgColor="",this.postTimerAction="",this._remainingTime={days:null,hours:null,minutes:null,seconds:null},this._isExhausted=!1,this._intervalId=null,this.globalContext={}}connectedCallback(){super.connectedCallback(),this._startTimer()}updated(e){super.updated(e),(e.has("endTime")||e.has("status"))&&this._startTimer()}disconnectedCallback(){super.disconnectedCallback(),this._clearInterval()}_startTimer(){if(this._clearInterval(),this.status==="exhausted")return void(this._isExhausted=!0);if(this.status!=="running"||!this.endTime)return;const e=this._calculateRemainingTime();this._remainingTime=e,this._isExhausted=e.isExhausted,e.isExhausted?this._handleExhausted():this._intervalId=setInterval(()=>{const r=this._calculateRemainingTime();this._remainingTime=r,r.isExhausted&&(this._isExhausted=!0,this._clearInterval(),this._handleExhausted())},1e3)}_clearInterval(){this._intervalId&&(clearInterval(this._intervalId),this._intervalId=null)}_calculateRemainingTime(){const e=this.endTime-Date.now();if(e<0)return{days:"00",hours:"00",minutes:"00",seconds:"00",isExhausted:!0};const r=Math.floor(e/864e5),n=Math.floor(e/36e5%24),i=Math.floor(e/6e4%60),o=Math.floor(e/1e3%60);return{days:r<10?"0"+r:String(r),hours:n<10?"0"+n:String(n),minutes:i<10?"0"+i:String(i),seconds:o<10?"0"+o:String(o),isExhausted:!1}}_handleExhausted(){this.dispatchEvent(new CustomEvent("corner-cart-timer-exhausted",{bubbles:!0,composed:!0,detail:{timerId:this.timerId,postTimerAction:this.postTimerAction}}))}get timerContent(){if(this._isExhausted)return this.postMessage||"";const e=this._buildWordMap(),r=((n,i)=>{const o=window?.corner?.utils?.wordReplacer;return o?o(n,i):n??""})(this.message||"",e);return typeof r=="string"?r:String(r??"")}get currentTextColor(){return this._isExhausted?this.postTextColor:this.textColor}get currentBgColor(){return this._isExhausted?this.postBgColor:this.bgColor}_buildWordMap(){const e=this._remainingTime;let r=[{placeholder:"timeRemaining",value:""}];return e.days===null||e.hours===null||e.minutes===null||e.seconds===null||(e.days==0&&e.hours==0?(r[0].value=`${e.minutes}:${e.seconds}`,r=[...r,{placeholder:"minutesRemaining",value:e.minutes},{placeholder:"secondsRemaining",value:e.seconds}]):e.days==0?(r[0].value=`${e.hours}:${e.minutes}:${e.seconds}`,r=[...r,{placeholder:"hoursRemaining",value:e.hours},{placeholder:"minutesRemaining",value:e.minutes},{placeholder:"secondsRemaining",value:e.seconds}]):(r[0].value=`${e.days}:${e.hours}:${e.minutes}:${e.seconds}`,r=[...r,{placeholder:"daysRemaining",value:e.days},{placeholder:"hoursRemaining",value:e.hours},{placeholder:"minutesRemaining",value:e.minutes},{placeholder:"secondsRemaining",value:e.seconds}])),r}}class hl extends Ce{static properties={timers:{type:Array},displaySurface:{type:String},autoScroll:{type:Boolean},autoScrollInterval:{type:Number},controllerType:{type:String},showDots:{type:Boolean},itemsPerPage:{type:Number}};constructor(){super(),this.timers=[],this.displaySurface="cart",this.autoScroll=!0,this.autoScrollInterval=5e3,this.controllerType="swipeIndicators",this.showDots=!1,this.itemsPerPage=1}get visibleTimers(){if(!Array.isArray(this.timers))return[];const e=this.displaySurface||"cart";return this.timers.filter(r=>{const n=r?.displaySurfaces;return!n||n.includes(e)})}render(){const e=this.visibleTimers;return e&&e.length!==0?this.html`
      <corner-carousel
        .autoScroll=${this.autoScroll}
        .autoScrollInterval=${this.autoScrollInterval}
        .controllerType=${this.controllerType}
        .showDots=${this.showDots}
        .itemsPerPage=${this.itemsPerPage}
      >
        ${this.repeat(e,r=>r.id,r=>this.html`
            <corner-cart-timer-item
              .timerId=${r.id}
              .endTime=${r.endTime}
              .status=${r.status}
              .message=${r.message}
              .postMessage=${r.postMessage}
              .textColor=${r.textColor}
              .bgColor=${r.bgColor}
              .postTextColor=${r.postTextColor}
              .postBgColor=${r.postBgColor}
              .postTimerAction=${r.postTimerAction}
            ></corner-cart-timer-item>
          `)}
      </corner-carousel>
    `:this.nothing}}class gl extends Ce{static properties={items:{type:Array},autoScroll:{type:Boolean},autoScrollInterval:{type:Number},controllerType:{type:String},showDots:{type:Boolean}};constructor(){super(),this.items=[],this.autoScroll=!0,this.autoScrollInterval=5e3,this.controllerType="swipeIndicators",this.showDots=!1}render(){return Array.isArray(this.items)&&this.items.length!==0?this.html`
      <corner-carousel
        .autoScroll=${this.autoScroll}
        .autoScrollInterval=${this.autoScrollInterval}
        .controllerType=${this.controllerType}
        .showDots=${this.showDots}
        .itemsPerPage=${1}
      >
        ${this.repeat(this.items,e=>e.id,(e,r)=>e.type==="cart_timer"?this.html`
                <corner-cart-timer-item
                  .timerId=${e.id}
                  .endTime=${e.endTime}
                  .status=${e.status}
                  .message=${e.message}
                  .postMessage=${e.postMessage}
                  .textColor=${e.textColor}
                  .bgColor=${e.bgColor}
                  .postTextColor=${e.postTextColor}
                  .postBgColor=${e.postBgColor}
                  .postTimerAction=${e.postTimerAction}
                ></corner-cart-timer-item>
              `:this.html`
              <corner-cart-announcement-item
                .message=${e.message}
                .textColor=${e.textColor}
                .bgColor=${e.bgColor}
                .cart=${this.globalContext.cart}
                .announcementId=${String(e.id||r)}
              ></corner-cart-announcement-item>
            `)}
      </corner-carousel>
    `:this.nothing}}class ml extends Ce{static properties={initialNote:{type:String},titleText:{type:String},cancelText:{type:String},ctaText:{type:String},accentBgColor:{type:String},accentFgColor:{type:String},loaderColor:{type:String},_slideIn:{type:Boolean,state:!0},_ctaLoader:{type:Boolean,state:!0},_note:{type:String,state:!0},globalContext:{type:Object}};constructor(){super(),this.initialNote="",this.titleText="Add a note",this.cancelText="Cancel",this.ctaText="Save",this.accentBgColor="#000000",this.accentFgColor="#ffffff",this.loaderColor="#ffffff",this._slideIn=!1,this._ctaLoader=!1,this._note="",this.globalContext={}}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this._slideIn=!0},200)}updated(e){super.updated(e),e.has("initialNote")&&this.initialNote!==void 0&&(this._note=this.initialNote)}handleNoteChange(e){this._note=e.target.value}handleCancel(){this.dispatchEvent(new CustomEvent("corner-cart-note-overlay-cancel",{bubbles:!0,composed:!0}))}handleSave(){this._ctaLoader=!0,this.dispatchEvent(new CustomEvent("corner-cart-note-overlay-save",{bubbles:!0,composed:!0,detail:{note:this._note}}))}resetLoader(){this._ctaLoader=!1}render(){const e={absolute:!0,flex:!0,"flex-col":!0,"justify-center":!0,"top-0":!0,"right-0":!0,"w-full":!0,"h-full":!0,"z-30":!0,"bg-black":!0,"bg-opacity-50":!0,"transition-all":!0,"opacity-100":this._slideIn,"opacity-0":!this._slideIn},r={"m-0":!0,"w-full":!0,"p-6":!0,"transition-all":!0,"shadow-lg":!0,"bg-cowi-card-bg":!0,"rounded-lg":!0,"translate-y-0":this._slideIn,"translate-y-full":!this._slideIn},n={flexGrow:"1",backgroundColor:this.accentBgColor,color:this.accentFgColor};return this.html`
      <div
        id="corner-cowi-cart-note-adder-bg"
        class=${this.classMap(e)}
      >
        <div id="corner-cowi-cart-note-adder-card-wrapper" class="w-full p-4">
          <div
            id="corner-cowi-cart-note-adder-card"
            class=${this.classMap(r)}
          >
            <div
              id="corner-cowi-cart-note-adder-title"
              class="text-center font-bold text-xl mb-3 text-cowi-primary-type"
            >
              ${this.unsafeHTML(this.titleText)}
            </div>
            <div id="corner-cowi-cart-note-adder-input" class="text-center text-base">
              <textarea
                .value=${this._note}
                @input=${this.handleNoteChange}
                rows="4"
                class="w-full border border-solid border-cowi-outlines focus:outline-none rounded-lg bg-cowi-card-bg text-cowi-primary-type"
              ></textarea>
            </div>
            <div class="flex">
              <button
                aria-label="optional-note-cancel"
                @click=${this.handleCancel}
                id="corner-cowi-cart-note-adder-cancel-button"
                class="cursor-pointer flex items-center justify-center text-center mt-5 mr-2 py-3 bg-cowi-card-bg text-cowi-accent-bg font-base font-bold rounded-lg hover:saturate-200 transition-all text-lg"
                style=${this.styleMap({flexGrow:"1"})}
              >
                ${this.unsafeHTML(this.cancelText)}
              </button>
              <button
                aria-label="optional-note-cta"
                @click=${this.handleSave}
                id="corner-cowi-cart-note-adder-cta-button"
                class="flex items-center justify-center text-center mt-5 py-3 cursor-pointer font-base font-bold rounded-lg hover:saturate-200 transition-all text-lg"
                style=${this.styleMap(n)}
              >
                ${this._ctaLoader?this.html`
                      <div class="w-4 h-4 animate-spin">
                        <corner-icon type="loader" color=${this.loaderColor}></corner-icon>
                      </div>
                    `:this.html`<span>${this.unsafeHTML(this.ctaText)}</span>`}
              </button>
            </div>
          </div>
        </div>
      </div>
    `}}class fl extends Ce{static properties={index:{type:Number},sellingPlanOptions:{type:Array},selectedPlanId:{type:String},hasOnetimePurchasePlan:{type:Boolean},onetimePurchaseLabel:{type:String},id:{type:String},quantity:{type:Number},globalContext:{type:Object}};constructor(){super(),this.sellingPlanOptions=[],this.hasOnetimePurchasePlan=!1,this.onetimePurchaseLabel="One time purchase",this.globalContext={}}handlePlanChange(e){const r=e.target.value;let n;n=r==="one-time"?"":parseInt(r.split("/").pop()),this.dispatchEvent(new CustomEvent("corner-cart-selling-plan-select-change",{bubbles:!0,composed:!0,detail:{type:"changeSellingPlan",params:{id:this.id,quantity:this.quantity,sellingPlanId:n}}}))}render(){return this.html`
      <div class="corner-cowi-selling-plan-select-wrapper px-4 md:px-6 pt-2">
        <select
          id="corner-cowi-cart-item-selling-plan-select-${this.index}"
          class="corner-cowi-cart-item-selling-plan-select border border-cowi-outlines border-solid rounded-md text-sm bg-cowi-card-bg px-3 py-2 text-cowi-primary-type cursor-pointer w-full"
          @change=${this.handlePlanChange}
        >
          ${this.when(this.hasOnetimePurchasePlan,()=>this.html`<option value="one-time" ?selected=${!this.selectedPlanId}>${this.onetimePurchaseLabel}</option>`)}
          ${this.map(this.sellingPlanOptions,e=>this.html`<option value=${e.id} ?selected=${e.id===this.selectedPlanId}>${e.name}</option>`)}
        </select>
      </div>
    `}}class ra extends Ce{static properties={globalContext:{type:Object},productList:{type:Array},type:{type:String},title:{type:String},ctaText:{type:String},clickedProductId:{type:String},isLoading:{type:Boolean},enableAutoplay:{type:Boolean}};constructor(){super(),this.globalContext={},this.productList=[],this.type="carousel",this.title="",this.ctaText="",this.clickedProductId=null,this.isLoading=!1,this.enableAutoplay=!1}get currencyFormat(){return this.globalContext?.config?.general_config?.cornerCurrencyFormat||"USD {{amount}}"}get loaderColor(){return this.globalContext?.config?.cornercart?.cartConfig?.colors?.primaryType||"rgb(25,35,55)"}getFeaturedVariant(e){return e&&(e.preferredVariant||e.variants?.[0])||null}getFeaturedImageUrl(e,r=this.getFeaturedVariant(e)){return e&&r&&(r.image||e.image)||""}truncateText(e,r){return e?e.length>r?e.slice(0,r)+"...":e:""}formatMoney(e,r=this.currencyFormat){return window.corner?.utils?.formatMoney?.(e,r)||e}updated(e){e.has("isLoading")&&!this.isLoading&&(this.clickedProductId=null)}dispatchRelatedItemAction(e){if(!e)return;const r=this.getFeaturedVariant(e);r&&(this.clickedProductId=String(e.id),this.dispatchEvent(new CustomEvent("corner-related-items-action",{bubbles:!0,composed:!0,detail:{item:e,featuredVariant:r}})))}}class wl extends ra{static properties={...ra.properties};constructor(){super(),this.type="carousel"}render(){return this.html`
      <div id="corner-cowi-related-items" class="mt-3 px-4">
        <div
          id="corner-cowi-related-items-text"
          class="text-cowi-secondary-type text-center text-sm font-bold text-cowi-secondary-type"
        >
          ${this.unsafeHTML(this.title)}
        </div>
        ${(()=>{switch(this.type){case"cards":return this.html`
                <corner-related-items-card
                  .globalContext=${this.globalContext}
                  .productList=${this.productList}
                  .ctaText=${this.ctaText}
                  .isLoading=${this.isLoading}
                ></corner-related-items-card>
              `;case"list":return this.html`
                <corner-related-items-list
                  .globalContext=${this.globalContext}
                  .productList=${this.productList}
                  .ctaText=${this.ctaText}
                  .isLoading=${this.isLoading}
                ></corner-related-items-list>
              `;default:return this.html`
                <corner-related-items-carousel
                  .globalContext=${this.globalContext}
                  .productList=${this.productList}
                  .ctaText=${this.ctaText}
                  .isLoading=${this.isLoading}
                  .enableAutoplay=${this.enableAutoplay}
                ></corner-related-items-carousel>
              `}})()}
      </div>
    `}}class yl{constructor(e={}){this.enabled=e.enabled??!0,this.interval=e.interval??3e3,this.loop=e.loop??!0,this.onAdvance=e.onAdvance||(()=>{}),this.timer=null,this.isPaused=!1,this.isUserInteracting=!1,this.resumeTimer=null}start(){this.enabled&&(this.stop(),this.timer=setInterval(()=>{this.isPaused||this.onAdvance()},this.interval))}stop(){this.timer&&(clearInterval(this.timer),this.timer=null)}pause(){this.isPaused=!0}resume(){this.isPaused=!1}restart(){this.enabled&&!this.isPaused&&this.start()}handleMouseEnter(){this.enabled&&this.pause()}handleMouseLeave(){this.enabled&&!this.isUserInteracting&&(this.resumeTimer&&(clearTimeout(this.resumeTimer),this.resumeTimer=null),this.resume())}handleInteractionStart(){this.enabled&&(this.resumeTimer&&(clearTimeout(this.resumeTimer),this.resumeTimer=null),this.isUserInteracting=!0,this.pause())}handleInteractionEnd(){this.enabled&&(this.isUserInteracting=!1,this.resumeTimer&&clearTimeout(this.resumeTimer),this.resumeTimer=setTimeout(()=>{this.isUserInteracting||this.resume(),this.resumeTimer=null},500))}updateConfig(e={}){let r=!1;e.enabled!==void 0&&e.enabled!==this.enabled&&(this.enabled=e.enabled,this.enabled?r=!0:this.stop()),e.interval!==void 0&&e.interval!==this.interval&&(this.interval=e.interval,r=this.enabled),e.loop!==void 0&&(this.loop=e.loop),e.onAdvance!==void 0&&(this.onAdvance=e.onAdvance),r&&this.start()}destroy(){this.stop(),this.resumeTimer&&(clearTimeout(this.resumeTimer),this.resumeTimer=null),this.isUserInteracting=!1,this.isPaused=!1}}function Pr(t,e,r,n){const i=(function(s,c,d){const l=window.getComputedStyle(s).getPropertyValue(`scroll-padding-${c}`)||"0px";if(l==="auto")return 0;if(l.endsWith("px")){const p=parseInt(l,10);return Number.isNaN(p)?(yt.warn(d,`Invalid scroll padding value: ${l}, defaulting to 0`),0):p}if(l.endsWith("%")){const p=parseInt(l,10);return Number.isNaN(p)?(yt.warn(d,`Invalid scroll padding percentage: ${l}, defaulting to 0`),0):s.clientWidth/100*p}return yt.warn(d,`Unsupported scroll padding value: ${l}, defaulting to 0`),0})(t,r,n),o=(function(s,c,d){const l=window.getComputedStyle(s).getPropertyValue(`scroll-margin-${c}`)||"0px";if(!l.endsWith("px"))return yt.warn(d,`Unsupported scroll margin value: ${l}, defaulting to 0`),0;const p=parseInt(l,10);return Number.isNaN(p)?(yt.warn(d,`Invalid scroll margin: ${l}, defaulting to 0`),0):p})(e,r,n);return i+o}function Nr(t,e,r){const n=e.getBoundingClientRect(),i=t.getBoundingClientRect();return r==="x"?t.scrollLeft+(n.left-i.left):t.scrollTop+(n.top-i.top)}const Fn="external",na="internal",Vn="user",ia="auto";class bl{constructor(e){this.carousel=e,this._updateSource=Fn,this._pendingIndex=null}validatePageIndex(e){return e==null||typeof e!="number"||isNaN(e)?0:this.carousel.pages&&this.carousel.pages.length!==0?Math.max(0,Math.min(e,this.carousel.pages.length-1)):Math.max(0,e)}setPageIndex(e,r=Fn){const n=this.validatePageIndex(e);return(n!==(this.carousel.pageIndex??0)||this._updateSource!==r)&&(this._updateSource=r,this._pendingIndex=n,this.carousel.pageIndex=n,!0)}isFromScroll(){return this._updateSource===na}resetUpdateSource(){this._updateSource=Fn,this._pendingIndex=null}getActivePageIndex(){return this.validatePageIndex(this.carousel.pageIndex)}}class vl{constructor(e){this.carousel=e}goTo(e,r={}){if(!this.carousel.scrollEl)return void yt.warn(this.carousel.instanceId,"Cannot navigate: scroll element not initialized");const n=Math.max(0,Math.min(e,this.carousel.pages.length-1)),i=this.carousel.pages[n];if(!i)return;const o=this.carousel.getCarouselItems(),s=i[0];if(s<0||s>=o.length)return;const c=o[s],d=Pr(this.carousel.scrollEl,c,this.carousel.nearSidePos,this.carousel.instanceId),l=r.behavior||this.carousel.behavior,p=Nr(this.carousel.scrollEl,c,this.carousel.axis)-d;this.carousel.axis==="x"?this.carousel.scrollEl.scrollTo({behavior:l,left:p}):this.carousel.scrollEl.scrollTo({behavior:l,top:p})}handlePrevClick(){const e=this.carousel.pageIndex-1;this.carousel.stateManager.setPageIndex(e,Vn),this.carousel.autoScrollManager.restart()}handleNextClick(){const e=this.carousel.pageIndex+1;this.carousel.stateManager.setPageIndex(e,Vn),this.carousel.autoScrollManager.restart()}next(){if(!this.carousel.hasNextPage)return;const e=this.carousel.pageIndex+1;this.carousel.stateManager.setPageIndex(e,ia),this.carousel.autoScrollManager.restart()}advanceAutoScroll(){this.carousel.pages&&this.carousel.pages.length!==0&&(this.carousel.hasNextPage?this.next():this.carousel.autoScrollLoop?this.carousel.stateManager.setPageIndex(0,ia):this.carousel.autoScrollManager.stop())}}class _l{constructor(e){this.carousel=e,this._cachedPagePositions=null}cachePagePositions(){if(!this.carousel.scrollEl||!this.carousel.pages||this.carousel.pages.length===0)return void(this._cachedPagePositions=null);const e=this.carousel.getCarouselItems();this._cachedPagePositions=new Map,this.carousel.pages.forEach((r,n)=>{if(r.length===0)return;const i=r[0];if(i<0||i>=e.length)return;const o=e[i],s=Pr(this.carousel.scrollEl,o,this.carousel.nearSidePos,this.carousel.instanceId),c=Nr(this.carousel.scrollEl,o,this.carousel.axis)-s;this._cachedPagePositions.set(n,c)})}detectCurrentPageFromScroll(){if(!this.carousel.scrollEl||!this.carousel.pages||this.carousel.pages.length===0)return null;const e=this.carousel.scrollEl[this.carousel.scrollPos];if(this._cachedPagePositions&&this._cachedPagePositions.size>0){let o=0,s=1/0;return this._cachedPagePositions.forEach((c,d)=>{const l=Math.abs(e-c);l<s&&(s=l,o=d)}),o}const r=this.carousel.getCarouselItems();let n=0,i=1/0;return this.carousel.pages.forEach((o,s)=>{if(o.length===0)return;const c=o[0];if(c<0||c>=r.length)return;const d=r[c],l=Pr(this.carousel.scrollEl,d,this.carousel.nearSidePos,this.carousel.instanceId),p=Nr(this.carousel.scrollEl,d,this.carousel.axis)-l,u=Math.abs(e-p);u<i&&(i=u,n=s)}),n}calculatePages(){if(!this.carousel.scrollEl)return[];const e=this.carousel.scrollEl,r=this.carousel.getCarouselItems(),n=this.carousel.axis,i=Math.ceil(n==="x"?e.clientWidth:e.clientHeight);let o;return r.reduce((s,c,d)=>{const l=s[s.length-1],p=Nr(e,c,n),u=c.getBoundingClientRect(),h=p+(n==="x"?u.width:u.height);if(!l||c.dataset.shouldSnap==="true"||h-o>i){s.push([d]);const g=Pr(e,c,this.carousel.nearSidePos,this.carousel.instanceId);o=p-g}else l.push(d);return s},[])}invalidateCache(){this._cachedPagePositions=null}}class Un extends Ot{static instanceCounter=0;static properties={visible:{type:Boolean,attribute:"visible"},behavior:{type:String},pageIndex:{type:Number,attribute:"page-index"},snapPointIndexes:{type:Set,state:!0},autoScroll:{type:Boolean,attribute:"auto-scroll"},autoScrollInterval:{type:Number,attribute:"auto-scroll-interval"},autoScrollLoop:{type:Boolean,attribute:"auto-scroll-loop"},axis:{type:String,attribute:!1},pages:{type:Array,attribute:!1},itemsPerPage:{type:Number,attribute:"items-per-page"},itemWidth:{type:String,attribute:"item-width"},itemHeight:{type:String,attribute:"item-height"},alignItems:{type:String,attribute:"align-items"},gap:{type:String,attribute:"gap"},showDots:{type:Boolean,attribute:"show-dots"},controllerType:{type:String,attribute:"controller-type"},buttonColor:{type:String,attribute:"button-color"},class:{type:String,attribute:"class"}};static styles=[Lo`
      :host {
        display: block;
      }

      .corner-carousel-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }

      .corner-carousel-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .corner-carousel-scroll-wrapper {
        position: relative;
        flex-grow: 1;
        overflow: hidden;
        order: 2;
      }

      .corner-carousel-scroll {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        gap: 0;
      }

      .corner-carousel-scroll::-webkit-scrollbar {
        display: none;
      }

      ::slotted(*) {
        flex: 0 0 100%;
        width: 100%;
        overflow: hidden;
        scroll-snap-align: start;
      }

      .corner-carousel-button {
        margin: 0 4px;
        padding: 4px;
        background: var(--corner-cowi-card-bg, #ffffff);
        border: 1px solid var(--corner-cowi-outlines, #d4d4d8);
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .corner-carousel-button[aria-disabled='true'] {
        visibility: hidden;
        pointer-events: none;
      }

      .corner-carousel-indicator {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 10;
        width: 12px;
        height: 12px;
      }

      .corner-carousel-indicator-left {
        // left: 16px;
        left: 2%;
      }

      .corner-carousel-indicator-right {
        // right: 16px;
        right: 4%;
      }

      .corner-carousel-indicator[aria-disabled='true'] {
        visibility: hidden;
        pointer-events: none;
      }

      .corner-carousel-icon-rotated {
        display: inline-block;
        transform: rotate(180deg);
      }

      .corner-carousel-dots {
        margin-top: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .corner-carousel-dot {
        height: 4px;
        width: 4px;
        margin: 0 4px;
        border: none;
        border-radius: 100%;
        background: var(--corner-cowi-secondary-bg, #d4d4d8);
        transition:
          width 150ms ease,
          radius 150ms ease;
        cursor: pointer;
        padding: 2px;
      }

      .corner-carousel-dot.is-active {
        width: 10px;
        padding: 0px;
        border-radius: 35%;
      }

      .corner-carousel-sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      slot {
        display: contents;
      }

      .corner-carousel-button-left {
        order: 1;
      }
      .corner-carousel-button-right {
        order: 3;
      }

      corner-icon {
        display: block !important;
        width: 10px !important;
        height: 15px !important;
      }
    `];constructor(){super(),this.instanceId="corner-carousel-"+ ++Un.instanceCounter,this.axis="x",this.behavior="smooth",this.pages=[],this.snapPointIndexes=new Set,this.autoScroll=!0,this.autoScrollInterval=3e3,this.autoScrollLoop=!0,this.itemsPerPage=null,this.itemWidth=null,this.itemHeight=null,this.gap="0px",this.showDots=!1,this.controllerType="bigButtons",this.buttonColor="rgb(25,35,55)",this.class="",this.alignItems="stretch",this.pageIndex=0,this.stateManager=new bl(this),this.scrollHandler=new _l(this),this.navigation=new vl(this),this.autoScrollManager=new yl({enabled:this.autoScroll,interval:this.autoScrollInterval,loop:this.autoScrollLoop,onAdvance:()=>this.navigation.advanceAutoScroll()}),this.handleSlotChange=()=>{this.configureCarouselItems(),this.refresh(),this.dispatchCarouselReady()}}get dimension(){return this.axis==="x"?"width":"height"}get nearSidePos(){return this.axis==="x"?"left":"top"}get farSidePos(){return this.axis==="x"?"right":"bottom"}get scrollPos(){return this.axis==="x"?"scrollLeft":"scrollTop"}get hasPrevPage(){return!this.pages||this.pages.length===0?!1:Math.min(this.stateManager.getActivePageIndex(),this.pages.length-1)>0}get hasNextPage(){return!this.pages||this.pages.length===0?!1:Math.min(this.stateManager.getActivePageIndex(),this.pages.length-1)<this.pages.length-1}getCarouselItems(){return this.slotEl?this.slotEl.assignedElements({flatten:!0}).filter(e=>e instanceof HTMLElement):[]}configureCarouselItems(){if(!this.scrollEl)return;const e=this.getCarouselItems();this.scrollEl.style.gap=this.gap||"0px",this.scrollEl.style.alignItems=this.alignItems||"start";const r=this.controllerType==="none"?1:this.itemsPerPage;e.forEach((n,i)=>{if(n.style.flexShrink="0",n.style.overflow="hidden",this.itemWidth)n.style.width=this.itemWidth,n.style.flexBasis=this.itemWidth;else if(r){const o=`calc((100% - ${(parseFloat(this.gap)||0)*(r-1)}px) / ${r})`;n.style.width=o,n.style.flexBasis=o}else n.style.width="100%",n.style.flexBasis="100%";this.itemHeight?n.style.height=this.itemHeight:n.style.removeProperty("height"),r&&i%r===0?n.dataset.shouldSnap="true":delete n.dataset.shouldSnap,n.style.scrollSnapAlign="start"})}async firstUpdated(){this.scrollEl=this.shadowRoot?.querySelector(".corner-carousel-scroll"),this.slotEl=this.shadowRoot?.querySelector("slot"),this.configureCarouselItems(),this.setupEventListeners(),requestAnimationFrame(()=>{this.refresh(),requestAnimationFrame(()=>{this.autoScroll&&this.autoScrollManager.start(),this.dispatchCarouselReady()})})}willUpdate(e){if(super.willUpdate(e),e.has("pageIndex")){const r=this.stateManager.validatePageIndex(this.pageIndex);this.pageIndex!==r&&(this.pageIndex=r)}}updated(e){if(super.updated(e),e.has("pageIndex")){const r=this.pageIndex,n=e.get("pageIndex");if(this.stateManager.isFromScroll())return void this.stateManager.resetUpdateSource();r!==n&&this.pages&&this.pages.length>0&&this.scrollEl&&(this.autoScrollManager.restart(),requestAnimationFrame(()=>this.goTo(r)),this.dispatchPageChange()),this.stateManager.resetUpdateSource()}(e.has("autoScroll")||e.has("autoScrollInterval")||e.has("autoScrollLoop"))&&this.autoScrollManager.updateConfig({enabled:this.autoScroll,interval:this.autoScrollInterval,loop:this.autoScrollLoop}),(e.has("itemsPerPage")||e.has("itemWidth")||e.has("itemHeight")||e.has("gap")||e.has("alignItems")||e.has("controllerType"))&&(this.configureCarouselItems(),requestAnimationFrame(()=>this.refresh()))}setupEventListeners(){this.scrollEl&&(this.handleScroll=()=>{this.scrollRafId||(this.scrollRafId=requestAnimationFrame(()=>{this.pages&&this.pages.length>0?this.refreshActivePage(this.pages):this.refresh(),this.scrollRafId=null}),this._isUserScrolling&&(this.scrollEndTimer&&clearTimeout(this.scrollEndTimer),this.scrollEndTimer=setTimeout(()=>{if(!this.isConnected)return;const e=this.scrollHandler.detectCurrentPageFromScroll();e!==null&&(e!==this.stateManager.getActivePageIndex()&&this.stateManager.setPageIndex(e,na),this.dispatchPageChange()),this._isUserScrolling=!1,this.scrollEndTimer=null},250)))},this.handleResize=()=>{this.resizeDebounceTimer&&clearTimeout(this.resizeDebounceTimer),this.resizeDebounceTimer=setTimeout(()=>{this.refresh(),this.resizeDebounceTimer=null},250)},this.handleMouseEnter=()=>this.autoScrollManager.handleMouseEnter(),this.handleMouseLeave=()=>this.autoScrollManager.handleMouseLeave(),this.handleInteractionStart=()=>{this._isUserScrolling=!0,this.autoScrollManager.handleInteractionStart()},this.handleInteractionEnd=()=>{this.interactionEndTimer&&clearTimeout(this.interactionEndTimer),this.interactionEndTimer=setTimeout(()=>{this.isConnected&&(this._isUserScrolling=!1),this.interactionEndTimer=null},100),this.autoScrollManager.handleInteractionEnd()},this.handleKeyDown=e=>{!this.pages||this.pages.length<=1||(e.key==="ArrowLeft"&&this.axis==="x"&&this.hasPrevPage&&(e.preventDefault(),this.navigation.handlePrevClick()),e.key==="ArrowRight"&&this.axis==="x"&&this.hasNextPage&&(e.preventDefault(),this.navigation.handleNextClick()))},this.scrollEl.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize),window.addEventListener("orientationchange",this.handleResize),this.addEventListener("mouseenter",this.handleMouseEnter),this.addEventListener("mouseleave",this.handleMouseLeave),this.addEventListener("keydown",this.handleKeyDown),this.scrollEl.addEventListener("touchstart",this.handleInteractionStart,{passive:!0}),this.scrollEl.addEventListener("touchend",this.handleInteractionEnd,{passive:!0}),this.scrollEl.addEventListener("touchcancel",this.handleInteractionEnd,{passive:!0}),this.scrollEl.addEventListener("pointerdown",this.handleInteractionStart),this.scrollEl.addEventListener("pointerup",this.handleInteractionEnd),this.scrollEl.addEventListener("pointercancel",this.handleInteractionEnd),this.scrollEl.addEventListener("pointerleave",this.handleInteractionEnd))}disconnectedCallback(){super.disconnectedCallback(),this.scrollEl&&(this.scrollEl.removeEventListener("scroll",this.handleScroll),this.scrollEl.removeEventListener("touchstart",this.handleInteractionStart),this.scrollEl.removeEventListener("touchend",this.handleInteractionEnd),this.scrollEl.removeEventListener("touchcancel",this.handleInteractionEnd),this.scrollEl.removeEventListener("pointerdown",this.handleInteractionStart),this.scrollEl.removeEventListener("pointerup",this.handleInteractionEnd),this.scrollEl.removeEventListener("pointercancel",this.handleInteractionEnd),this.scrollEl.removeEventListener("pointerleave",this.handleInteractionEnd)),window.removeEventListener("resize",this.handleResize),window.removeEventListener("orientationchange",this.handleResize),this.removeEventListener("mouseenter",this.handleMouseEnter),this.removeEventListener("mouseleave",this.handleMouseLeave),this.removeEventListener("keydown",this.handleKeyDown),this.interactionEndTimer&&clearTimeout(this.interactionEndTimer),this.resizeDebounceTimer&&clearTimeout(this.resizeDebounceTimer),this.scrollRafId&&cancelAnimationFrame(this.scrollRafId),this.scrollEndTimer&&clearTimeout(this.scrollEndTimer),this.autoScrollManager&&this.autoScrollManager.destroy()}refreshActivePage(e){this.scrollEl&&(e&&e.length!==0?(this.pages=e,this.scrollHandler.invalidateCache()):this.pages=[])}refresh(){if(!this.scrollEl)return;const e=this.scrollHandler.calculatePages();if(this.snapPointIndexes=new Set(e.map(r=>r[0])),this.scrollHandler.cachePagePositions(),this.refreshActivePage(e),this.pageIndex!==void 0&&e&&e.length>0&&this.scrollEl&&!this.stateManager.isFromScroll()){const r=this.stateManager.validatePageIndex(this.pageIndex);r!==this.pageIndex&&(this.pageIndex=r),requestAnimationFrame(()=>this.goTo(this.pageIndex))}}previousPage(){this.navigation.handlePrevClick()}nextPage(){this.navigation.handleNextClick()}advanceAutoScroll(){this.navigation.advanceAutoScroll()}goTo(e,r={}){this.navigation.goTo(e,r)}dispatchPageChange(){this.dispatchEvent(new CustomEvent("change",{detail:{pageIndex:this.pageIndex,pages:this.pages,hasPrevPage:this.hasPrevPage,hasNextPage:this.hasNextPage},bubbles:!0,composed:!0}))}dispatchCarouselReady(){const e=this.getCarouselItems().length;this.dispatchEvent(new CustomEvent("carousel-ready",{detail:{itemCount:e,pageCount:this.pages?this.pages.length:0},bubbles:!0,composed:!0}))}renderControllers(){const e=this.pages?this.pages.length:0;return this.controllerType!=="bigButtons"||e<=1?null:Nt`
      <button
        id="${this.instanceId}-slider-left-btn"
        aria-label="Previous slide"
        aria-controls="${this.instanceId}-carousel"
        aria-disabled=${!this.hasPrevPage}
        tabindex=${this.hasPrevPage?"0":"-1"}
        class="corner-carousel-button corner-carousel-button-left"
        @click=${()=>this.navigation.handlePrevClick()}
      >
        <corner-icon type="caret" color=${this.buttonColor}></corner-icon>
      </button>
      <button
        id="${this.instanceId}-slider-right-btn"
        aria-label="Next slide"
        aria-controls="${this.instanceId}-carousel"
        aria-disabled=${!this.hasNextPage}
        tabindex=${this.hasNextPage?"0":"-1"}
        class="corner-carousel-button corner-carousel-button-right"
        @click=${()=>this.navigation.handleNextClick()}
      >
        <span class="corner-carousel-icon-rotated">
          <corner-icon type="caret" color=${this.buttonColor}></corner-icon>
        </span>
      </button>
    `}renderSwipeIndicators(){const e=this.pages?this.pages.length:0;return this.controllerType!=="swipeIndicators"||e<=1?null:Nt`
      <button
        aria-label="Previous slide"
        aria-disabled=${!this.hasPrevPage}
        tabindex=${this.hasPrevPage?"0":"-1"}
        class="corner-carousel-indicator corner-carousel-indicator-left"
        @click=${()=>this.navigation.handlePrevClick()}
      >
        <corner-icon type="caret" color=${this.buttonColor}></corner-icon>
      </button>
      <button
        aria-label="Next slide"
        aria-disabled=${!this.hasNextPage}
        tabindex=${this.hasNextPage?"0":"-1"}
        class="corner-carousel-indicator corner-carousel-indicator-right"
        @click=${()=>this.navigation.handleNextClick()}
      >
        <span class="corner-carousel-icon-rotated">
          <corner-icon type="caret" color=${this.buttonColor}></corner-icon>
        </span>
      </button>
    `}renderDots(){return!this.showDots||!this.pages||this.pages.length<=1?null:Nt`
      <div class="corner-carousel-dots" role="tablist" aria-label="Carousel page indicators">
        ${this.pages.map((e,r)=>{const n=r===this.pageIndex;return Nt`
            <button
              role="tab"
              aria-label="Go to slide ${r+1}"
              aria-selected=${n}
              aria-controls="${this.instanceId}-carousel"
              tabindex=${n?"0":"-1"}
              class="corner-carousel-dot ${n?"is-active":""}"
              @click=${()=>this.stateManager.setPageIndex(r,Vn)}
            >
              <span class="corner-carousel-sr-only">Slide ${r+1}</span>
            </button>
          `})}
      </div>
    `}render(){const e=this.controllerType==="swipeIndicators",r=this.class?this.class:"";return Nt`
      <div
        id=${this.instanceId}
        class="corner-carousel-wrapper ${r}"
        role="region"
        aria-label="Carousel"
      >
        <div class="corner-carousel-container">
          <div class="corner-carousel-scroll-wrapper ${e?"is-relative":""}">
            <div
              id="${this.instanceId}-carousel"
              class="corner-carousel-scroll"
              role="group"
              aria-label="Carousel slides"
              aria-live="polite"
              aria-atomic="false"
              tabindex="0"
            >
              <slot @slotchange=${this.handleSlotChange}></slot>
            </div>
            ${e?this.renderSwipeIndicators():null}
          </div>
          ${e?null:this.renderControllers()}
        </div>
        ${this.renderDots()}
      </div>
    `}}class xl extends Ce{static properties={eligibleInsuranceTierObject:{type:Object},insuranceItemInCart:{type:Object},isCartLoading:{type:Boolean},parcelisConfig:{type:Object},globalContext:{type:Object},eligibleVariantPrice:{type:Number}};get getActiveFg(){return this?.globalContext?.config?.cornercart?.cartConfig?.colors?.accentFg}showParcelisInfoModal(){const e=[1,2,3,4].map(r=>`<tr>
                <td class="corner-parcelis-cell corner-parcelis-cell--left">${this.globalContext?.currentLanguage?.cart?.[`parcelis_modal_row_${r}_column_1`]}</td>
                <td class="corner-parcelis-cell"><corner-icon type="check" color="#000000" style="width:20px;height:20px;display:inline-block;"></corner-icon></td>
                <td class="corner-parcelis-cell"><corner-icon type="close-cross" color="#000000" style="width:16px;height:16px;display:inline-block;"></corner-icon></td>
              </tr>`).join("");window.showCornerCartModal({title:this.globalContext?.currentLanguage?.cart?.parcelis_modal_title,styles:`
        #corner-parcelis-table { width: 100%; border-collapse: collapse; font-size: 12px; }
        #corner-parcelis-table, #corner-parcelis-table th, #corner-parcelis-table td { border: none !important; box-shadow: none !important; }
        #corner-parcelis-table th, #corner-parcelis-table td { padding: 8px 12px; }
        #corner-parcelis-table th { font-weight: bold; }
        #corner-parcelis-table th:first-child, #corner-parcelis-table td.corner-parcelis-cell--left { text-align: left !important; width: 50% !important; }
        #corner-parcelis-table th:not(:first-child), #corner-parcelis-table td:not(.corner-parcelis-cell--left) { text-align: center !important; }
        #corner-parcelis-table svg { display: inline-block !important; }
      `,description:`
        <table id="corner-parcelis-table" class="corner-parcelis-table">
          <thead>
            <tr>
              <th>${this.globalContext?.currentLanguage?.cart?.parcelis_modal_column_header_1}</th>
              <th>${this.globalContext?.currentLanguage?.cart?.parcelis_modal_column_header_2}</th>
              <th>${this.globalContext?.currentLanguage?.cart?.parcelis_modal_column_header_3}</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
      `,primaryCta:{text:this.globalContext?.currentLanguage?.cart?.widget_close_text}})}handleParcelisChange(e){const r=new CustomEvent("corner-cart-parcelis-one-click-upsell-change",{detail:{checked:e},bubbles:!0,composed:!0});this.dispatchEvent(r)}get currencyFormat(){return this.globalContext?.config?.general_config?.cornerCurrencyFormat}formatMoney(e,r=this.currencyFormat){return window.corner?.utils?.formatMoney?.(e,r)||e}}const er=new Xt,Cl=[{tagName:"corner-icon",className:"CornerIcon",classDefinition:class extends Ce{static properties={color:{type:String},type:{type:String},className:{type:String}};constructor(){super(),this.color="#000000",this.type="",this.className=""}render(){switch(this.type){case"smiley-rounded-cart":return this.html`
          <svg
            class=${this.className}
            style="fill: ${this.color};"
            viewBox="0 0 255 255"
            fill=${this.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 13.6395C0 6.10663 6.10501 0 13.6359 0H20.7503C43.4539 0 62.1832 17.02 64.8815 39H215.849C241.649 39 260.387 63.5385 253.6 88.4363L234.404 152.851C231.168 164.72 220.391 172.953 208.092 172.953H61.9448C48.1927 172.953 37.0444 161.802 37.0444 148.047V39H37.0532C34.7667 32.1872 28.3315 27.2791 20.7503 27.2791H13.6359C6.10501 27.2791 0 21.1724 0 13.6395ZM88.1056 255C103.588 255 116.139 242.688 116.139 227.5C116.139 212.312 103.588 200 88.1056 200C72.6231 200 60.072 212.312 60.072 227.5C60.072 242.688 72.6231 255 88.1056 255ZM214.257 227.5C214.257 242.688 201.93 255 186.724 255C171.518 255 159.191 242.688 159.191 227.5C159.191 212.312 171.518 200 186.724 200C201.93 200 214.257 212.312 214.257 227.5ZM87.9883 120.115C118.946 143.929 162.054 143.929 193.012 120.115L178.988 101.885C156.298 119.339 124.702 119.339 102.012 101.885L87.9883 120.115Z"
            />
          </svg>
        `;case"non-smiley-rounded-cart":return this.html`
          <svg
            class=${this.className}
            style="fill: ${this.color};"
            viewBox="0 0 255 255"
            fill=${this.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.6359 0C6.10501 0 0 6.10663 0 13.6395C0 21.1724 6.10501 27.2791 13.6359 27.2791H20.7503C28.3315 27.2791 34.7667 32.1872 37.0532 39H37.0444V148.047C37.0444 161.802 48.1927 172.953 61.9448 172.953H208.092C220.391 172.953 231.168 164.72 234.404 152.851L253.6 88.4363C260.387 63.5385 241.649 39 215.849 39H64.8815C62.1832 17.02 43.4539 0 20.7503 0H13.6359ZM116.139 227.5C116.139 242.688 103.588 255 88.1056 255C72.6231 255 60.072 242.688 60.072 227.5C60.072 212.312 72.6231 200 88.1056 200C103.588 200 116.139 212.312 116.139 227.5ZM186.724 255C201.93 255 214.257 242.688 214.257 227.5C214.257 212.312 201.93 200 186.724 200C171.518 200 159.191 212.312 159.191 227.5C159.191 242.688 171.518 255 186.724 255Z"
            />
          </svg>
        `;case"close-cross":return this.html`
          <svg
            class=${this.className}
            style="fill: ${this.color};"
            fill=${this.color}
            viewBox="0 0 348.333 348.334"
          >
            <g>
              <path
                d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85
		c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563
		c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85
		l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554
		L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
              />
            </g>
          </svg>
        `;case"caret":return this.html`
          <svg
            class=${this.className}
            style="fill: ${this.color};"
            viewBox="0 0 24 24"
            fill=${this.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 17.898C15 18.972 13.7351 19.546 12.9268 18.8388L6.61617 13.3169C5.81935 12.6197 5.81935 11.3801 6.61617 10.6829L12.9268 5.16108C13.7351 4.45388 15 5.02785 15 6.1018L15 17.898Z"
            />
          </svg>
        `;case"loader":return this.html`
          <svg
            class=${this.className}
            style="fill: ${this.color};"
            fill=${this.color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            />
          </svg>
        `;case"note":return this.html`
          <svg
            class=${this.className}
            style="fill: ${this.color};"
            fill=${this.color}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8l8-8V5a2 2 0 0 0-2-2zm-7 16v-7h7l-7 7z"
            />
          </svg>
        `;case"check":return this.html`
          <svg
            class=${this.className}
            style="fill: ${this.color};"
            fill=${this.color}
            viewBox="0 0 236.988 236.988"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="198.098,24.326 87.543,134.881 38.891,86.229 0,125.121 87.543,212.662 236.988,63.217 "
            />
          </svg>
        `;case"info":return this.html`
          <svg
            class=${this.className}
            style="fill: ${this.color};"
            fill=${this.color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 122.88"
          >
            <path
              d="M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM59.12,36a8,8,0,0,1,.61-3.16,7.82,7.82,0,0,1,1.8-2.63,8.33,8.33,0,0,1,2.62-1.79,8.08,8.08,0,0,1,6.11,0,8.06,8.06,0,0,1,2.58,1.79,7.83,7.83,0,0,1,1.77,2.63A8.38,8.38,0,0,1,75.2,36a8.15,8.15,0,0,1-.59,3.1,8.23,8.23,0,0,1-1.76,2.65,8.15,8.15,0,0,1-2.59,1.82,7.72,7.72,0,0,1-3.05.6,8,8,0,0,1-3.12-.6,7.84,7.84,0,0,1-2.61-1.8,8.07,8.07,0,0,1-1.77-2.64A8.3,8.3,0,0,1,59.12,36Zm3.09,47.8-.17.63-.12.49-.05.34,0,.27a2,2,0,0,0,.09.64v0a1.09,1.09,0,0,0,.23.41.86.86,0,0,0,.35.23,1.55,1.55,0,0,0,.55.09,2.74,2.74,0,0,0,1.46-.63,14.6,14.6,0,0,0,2.15-2.06,36,36,0,0,0,2.57-3.3c.89-1.26,1.82-2.71,2.79-4.33a.37.37,0,0,1,.5-.13l3.28,2.44a.36.36,0,0,1,.09.5,56.84,56.84,0,0,1-4.58,6.87,30.35,30.35,0,0,1-4.73,4.89l0,0a18.55,18.55,0,0,1-4.92,2.92,14.15,14.15,0,0,1-5.19,1,13.63,13.63,0,0,1-4.07-.55,7.92,7.92,0,0,1-3-1.66,7.1,7.1,0,0,1-1.86-2.72,9.92,9.92,0,0,1-.61-3.62c0-.45,0-.92.08-1.42s.14-1,.25-1.58v0c.1-.54.25-1.15.43-1.82s.41-1.43.67-2.26L54.1,61.61l.47-1.67c.12-.47.22-.88.3-1.24a8.43,8.43,0,0,0,.15-.9,5.75,5.75,0,0,0,.06-.77,2.9,2.9,0,0,0-.2-1.09v0a2.49,2.49,0,0,0-.57-.81,2.68,2.68,0,0,0-.94-.55,4.15,4.15,0,0,0-1.28-.19H47.45a.37.37,0,0,1-.37-.36l0-.13,1.22-4.43a.37.37,0,0,1,.36-.27l23.67-.75a.38.38,0,0,1,.38.36l0,.12L62.21,83.78ZM97,25.88a50.31,50.31,0,1,0,14.72,35.56A50.16,50.16,0,0,0,97,25.88Z"
            />
          </svg>
        `;case"danger-minus":return this.html`
          <svg
            class=${this.className}
            style="fill: ${this.color};"
            fill=${this.color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 511.99"
          >
            <path
              fill-rule="nonzero"
              d="M256 0c70.68 0 134.69 28.66 181.01 74.98C483.35 121.31 512 185.31 512 255.99c0 70.68-28.66 134.69-74.99 181.02-46.32 46.32-110.33 74.98-181.01 74.98-70.68 0-134.69-28.66-181.02-74.98C28.66 390.68 0 326.67 0 255.99S28.65 121.31 74.99 74.98C121.31 28.66 185.32 0 256 0zm116.73 236.15v39.69c0 9.39-7.72 17.12-17.11 17.12H156.38c-9.39 0-17.11-7.7-17.11-17.12v-39.69c0-9.41 7.69-17.11 17.11-17.11h199.24c9.42 0 17.11 7.76 17.11 17.11zm37.32-134.21c-39.41-39.41-93.89-63.8-154.05-63.8-60.16 0-114.64 24.39-154.05 63.8-39.42 39.42-63.81 93.89-63.81 154.05 0 60.16 24.39 114.64 63.8 154.06 39.42 39.41 93.9 63.8 154.06 63.8s114.64-24.39 154.05-63.8c39.42-39.42 63.81-93.9 63.81-154.06s-24.39-114.63-63.81-154.05z"
            />
          </svg>
        `;case"gift":return this.html`
          <svg
            class=${this.className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill=${this.color}
              d="M20 13v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16zM14.5 2a3.5 3.5 0 0 1 3.163 5.001L21 7a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1l3.337.001a3.5 3.5 0 0 1 5.664-3.95A3.48 3.48 0 0 1 14.5 2zm-5 2a1.5 1.5 0 0 0-.144 2.993L9.5 7H11V5.5a1.5 1.5 0 0 0-1.356-1.493L9.5 4zm5 0l-.144.007a1.5 1.5 0 0 0-1.35 1.349L13 5.5V7h1.5l.144-.007a1.5 1.5 0 0 0 0-2.986L14.5 4z"
            />
          </svg>
        `;case"link":return this.html`
          <svg
            class=${this.className}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style="fill: ${this.color};"
            fill=${this.color}
          >
            <g
              id="web-app"
              stroke="none"
              stroke-width="1"
              fill-rule="evenodd"
            >
              <g id="link-external">
                <path
                  d="M6,8 C9.33333333,8 11,8 11,8 C11,8 11,8.66666667 11,10 L6,10 L6,18 L14,18 L14,13 L16,13 L16,18 C16,19.1045695 15.1045695,20 14,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,10 C4,8.8954305 4.8954305,8 6,8 Z M16.613961,6 L12,6 L12,4 L20,4 L20,12 L18,12 L18,7.44238816 L12.6642136,12.7781746 L11.25,11.363961 L16.613961,6 Z"
                  id="Shape"
                />
              </g>
            </g>
          </svg>
        `;case"tag":return this.html`
          <svg
            class=${this.className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill=${this.color}
              d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm2.828 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829z"
            />
          </svg>
        `;case"circle-plus":return this.html`
          <svg
            class=${this.className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill=${this.color}
              d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
            />
          </svg>
        `;case"copy":return this.html`
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 8V7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5H17C17.9428 5 18.4142 5 18.7071 5.29289C19 5.58579 19 6.05719 19 7V12C19 12.9428 19 13.4142 18.7071 13.7071C18.4142 14 17.9428 14 17 14H16M7 19H12C12.9428 19 13.4142 19 13.7071 18.7071C14 18.4142 14 17.9428 14 17V12C14 11.0572 14 10.5858 13.7071 10.2929C13.4142 10 12.9428 10 12 10H7C6.05719 10 5.58579 10 5.29289 10.2929C5 10.5858 5 11.0572 5 12V17C5 17.9428 5 18.4142 5.29289 18.7071C5.58579 19 6.05719 19 7 19Z"
              stroke=${this.color}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        `;case"plus":return this.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${this.color}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class=${this.className}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        `;case"minus":return this.html`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${this.color}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class=${this.className}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 12h14"
            />
          </svg>
        `;case"freeShipping":return this.html`
          <svg
            viewBox="0 0 24 24"
            class=${this.className}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill=${this.color}
              d="M21.89,11.55,20.17,8.1A2,2,0,0,0,18.38,7H17V6a2,2,0,0,0-2-2H4A2,2,0,0,0,2,6V16a2,2,0,0,0,2,2H5.18a3,3,0,0,0,5.64,0h2.36a3,3,0,0,0,5.64,0H20a2,2,0,0,0,2-2V12A1,1,0,0,0,21.89,11.55ZM8,18a1,1,0,1,1,1-1A1,1,0,0,1,8,18Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,16,18Zm4-2H18.83s0-.05,0-.08a3.78,3.78,0,0,0-.17-.35l-.11-.21a3.29,3.29,0,0,0-.33-.41.8.8,0,0,0-.13-.13,3.29,3.29,0,0,0-.41-.33l-.21-.11-.35-.17-.08,0V9h1.39L20,12.24Z"
            />
          </svg>
        `;case"bundle":return this.html`
          <svg
            class=${this.className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5777 4.43152L15.5777 3.38197C13.8221 2.46066 12.9443 2 12 2C11.0557 2 10.1779 2.46066 8.42229 3.38197L8.10057 3.5508L17.0236 8.64967L21.0403 6.64132C20.3941 5.90949 19.3515 5.36234 17.5777 4.43152Z"
              fill=${this.color}
            />
            <path
              d="M21.7484 7.96434L17.75 9.96353V13C17.75 13.4142 17.4142 13.75 17 13.75C16.5858 13.75 16.25 13.4142 16.25 13V10.7135L12.75 12.4635V21.904C13.4679 21.7252 14.2848 21.2965 15.5777 20.618L17.5777 19.5685C19.7294 18.4393 20.8052 17.8748 21.4026 16.8603C22 15.8458 22 14.5833 22 12.0585V11.9415C22 10.0489 22 8.86557 21.7484 7.96434Z"
              fill=${this.color}
            />
            <path
              d="M11.25 21.904V12.4635L2.25164 7.96434C2 8.86557 2 10.0489 2 11.9415V12.0585C2 14.5833 2 15.8458 2.5974 16.8603C3.19479 17.8748 4.27062 18.4393 6.42228 19.5685L8.42229 20.618C9.71524 21.2965 10.5321 21.7252 11.25 21.904Z"
              fill=${this.color}
            />
            <path
              d="M2.95969 6.64132L12 11.1615L15.4112 9.4559L6.52456 4.37785L6.42229 4.43152C4.64855 5.36234 3.6059 5.90949 2.95969 6.64132Z"
              fill=${this.color}
            />
          </svg>
        `;case"circle-info":return this.html`
          <svg
            class=${this.className}
            fill=${this.color}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
        `;default:return this.html`<span
          >Icon type "${this.type}" not found</span
        >`}}}},{tagName:"corner-qty-control",className:"CornerQtyControl",classDefinition:Dn},{tagName:"corner-cart-line-messages",className:"CornerCartLineMessages",classDefinition:Jt},{tagName:"corner-cart-line-free-item",className:"CornerCartLineFreeItem",classDefinition:class extends Ve{static properties={};constructor(){super(),this.isFreeProduct=!0}render(){if(!this.item)return this.nothing;try{return this.html`
        <div
          id="corner-cowi-cart-free-item-${this.index}"
          data-testid="corner-cart-line"
          data-corner-product-id=${this.item?.productId||""}
          data-corner-variant-id=${this.item?.variantId||""}
          data-product-type=${this.item?.productType||""}
          data-vendor=${this.item?.vendor||""}
          data-quantity=${this.item?.quantity||0}
          class=${this.classMap({"corner-cowi-cart-free-item":!0,hidden:!this.shouldShowAll})}
          role="listitem"
          aria-label=${this.productTitle}
        >
          <div
            id=${`corner-cowi-cart-item-primary-info-${this.index}`}
            data-testid="corner-cowi-cart-item-primary-info"
            class="corner-cowi-cart-item-primary-info flex items-stretch"
          >
            <div
              id=${`corner-cowi-cart-item-list-item-image-${this.index}`}
              data-testid="corner-cowi-cart-item-list-item-image"
              class=${this.classMap({"w-16":!0,"bg-cowi-card-bg":!0,relative:!0,"md:w-20":!0,flex:!0,"flex-wrap":!0,"items-start":!0,"flex-grow-0":!0,"flex-shrink-0":!0,"rounded-lg":!0,invisible:!this.shouldShowImage,"pointer-events-none":!this.shouldShowImage})}
            >
              ${this.html`
                <div
                  data-testid="free-item-icon"
                  class="flex absolute -top-3 z-20 left-1/3 rounded-full items-center justify-center p-1 w-6 h-6 border border-solid border-cowi-accent-bg bg-cowi-card-bg"
                >
                  <corner-icon
                    type="gift"
                    .color=${this.accentColor}
                  >
                  </corner-icon>
                </div>
              `}
              ${this.when(this.item?.image,()=>this.html`
                  <img
                    data-testid="item-image"
                    class="w-full relative z-10 object-cover rounded-lg border border-solid border-cowi-accent-bg"
                    src=${this.item.image}
                    alt=${this.item.productTitle+"-image"}
                  />
                `,()=>this.html`
                  <corner-icon
                    data-testid="corner-icon-gift"
                    type="gift"
                    .color=${this.primaryColor}
                  >
                  </corner-icon>
                `)}
            </div>
            <div
              data-testid="corner-cowi-cart-item-list-item-info-body"
              id="corner-cowi-cart-item-list-item-info-body-${this.index}"
              class="corner-cowi-cart-item-list-item-info-body flex flex-col justify-between flex-grow ml-4"
            >
              <div
                data-testid="corner-cowi-cart-item-list-item-info-title-wrapper"
                id="corner-cowi-cart-item-list-item-info-title-wrapper-${this.index}"
                class="corner-cowi-cart-item-list-item-info-title-wrapper flex items-start"
              >
                <div class="grow">
                  ${this.html`
                    <a data-testid="corner-cowi-cart-item-title-anchor"
                      href=${this.isTitleClickable?this.item.url:"#"}
                      class=${this.classMap({"text-base":!0,"font-bold":!0,invisible:!this.shouldShowTitle,"pointer-events-none":!this.shouldShowTitle||!this.isTitleClickable})}>
                      <p 
                        class="text-md leading-snug text-cowi-primary-type hover:text-[color:var(--corner-cowi-accent-bg)] transition-all">
                        ${this.truncatedTitle}
                      </p>
                    </a>
                  `}
                  ${this.when(this.hasVariantOptions,()=>this.html`
                      <div
                        id="corner-cowi-cart-item-variant-options-${this.index}"
                        class=${this.classMap({"corner-cowi-cart-item-variant-options":!0,"text-sm":!0,"leading-0":!0,"text-cowi-secondary-type":!0,"mt-2":!0,invisible:!this.shouldShowOptions,"pointer-events-none":!this.shouldShowOptions})}
                        aria-label="Product variant options"
                      >
                          ${this.map(this.variantOptions,(t,e)=>this.when(t&&t!=="Default Title",()=>this.html`
                                  ${e!==this.variantOptions.length-1?`${t} •`:` ${t}`}
                                `,()=>this.nothing))}
                      </div>
                    `)}
                  <div
                    id="corner-cowi-cart-item-line-properties-${this.index}"
                    class="corner-cowi-cart-item-line-properties text-xs flex flex-wrap leading-0 text-cowi-secondary-type"
                  >
                    ${this.when(this.shouldRenderItemProperties,()=>this.map(this.filteredPropertyKeys,t=>{const e=this.item?.properties?.[t];return this.when(this.isUrl(this.item?.properties?.[t]),()=>this.html`
                            <div
                              id=${t}
                              class="shrink-0 border border-cowi-outlines border-solid px-1 mr-1 mt-1 rounded-lg max-w-full"
                            >
                              <div class="flex items-center break-all">
                                <span>${t}:</span>
                                <a
                                  href=${e}
                                  target="_blank"
                                  class="font-bold w-5 h-5 mx-1"
                                >
                                  <corner-icon
                                    type="link"
                                    .color=${this.secondaryColor}
                                  ></corner-icon>
                                </a>
                              </div>
                            </div>
                          `,()=>this.html`
                                <div
                                  class="shrink-0 border border-cowi-outlines border-solid px-1 mr-1 mt-1 rounded-lg max-w-full"
                                >
                                  <div class="break-all">
                                    <span>${t}:</span>
                                    <span class="font-bold"
                                      >${e}</span
                                    >
                                  </div>
                                </div>
                              `)}))}
                  </div>
                </div>
                ${this.html`
                  <div
                    data-testid="corner-cowi-cart-item-list-item-info-remove-btn"
                    id="corner-cowi-cart-item-list-item-info-remove-btn-${this.index}"
                   class=${this.classMap({"corner-cowi-cart-item-list-item-info-remove-btn":!0,"w-5":!0,"h-5":!0,"p-[4px]":!0,"shrink-0":!0,"rounded-full":!0,"transition-all":!0,"opacity-50":!0,"cursor-pointer":!0,"hover:rotate-90":!0,"hover:opacity-100":!0,"mt-1":!0,"pointer-events-none":!this.shouldShowCloseButton||this.isLoading,invisible:!this.shouldShowCloseButton})}
                    @click=${this.handleItemRemove}
                    title=${this.removeButtonLabel}
                  >
                    <corner-icon
                      data-testid="corner-cowi-cart-item-list-item-info-remove-icon"
                      type="close-cross"
                      .color=${this.secondaryColor}
                    ></corner-icon>
                  </div>
                `}
              </div>
              ${this.when(this.lineItemMessages&&this.lineItemMessages.length,()=>this.html`
                  <corner-cart-line-messages
                    .lineItemMessages=${this.lineItemMessages}
                    .index=${this.index}
                  >
                  </corner-cart-line-messages>`)}
              <div
                id="corner-cowi-cart-item-customiser-${this.index}"
                class=${this.classMap({"corner-cowi-cart-item-customise":!0,flex:!0,"mt-3":!0,"items-center":!0,"justify-end":this.isQtyHidden,"justify-between":!this.isQtyHidden})}
              >
                ${this.html`
                  <corner-qty-control
                      class="block"
                      .index=${this.index}
                      .item=${this.item}
                      .quantity=${this.item?.quantity}
                      .hidden=${this.isQtyHidden}
                      .globalContext=${this.globalContext}
                      .isLoading=${this.isLoading}
                      .isCartLoading=${this.isCartLoading}
                    >
                    </corner-qty-control>
                `}
                ${this.html`
                  <corner-price-text 
                    .item=${this.item}
                    .index=${this.index}
                    .finalPrice=${this.finalPriceFormatted}
                    .strikedPrice=${this.strikedPriceFormatted}
                    .hidePrice=${!this.shouldShowPrice}
                    .hideStrikedPrice=${!this.shouldShowStrikedPrice}
                    .freeText=${this.freeText}
                    .fallBackPrice=${this.fallBackPrice}
                    .isLoading=${this.isLoading}
                    .loaderColor=${this.primaryColor}
                    .isFreeProduct=${this.isFreeProduct}
                  ></corner-price-text>
                `}
              </div>
            </div>
          </div>
        </div>
      `}catch(t){return console.error("Error rendering cart item:",t),this.html`
        <div
          class="p-4 text-red-500 border border-red-300 rounded"
          role="alert"
        >
          Error loading cart item
        </div>
      `}}}},{tagName:"corner-cart-line-item",className:"CornerCartLineItem",classDefinition:class extends Ve{static properties={};constructor(){super()}render(){if(!this.item)return this.nothing;try{return this.html`
        <div
          id="corner-cowi-cart-item-${this.index}"
          data-testid="corner-cart-line"
          data-corner-product-id=${this.item?.productId||""}
          data-corner-variant-id=${this.item?.variantId||""}
          data-product-type=${this.item?.productType||""}
          data-vendor=${this.item?.vendor||""}
          data-quantity=${this.item?.quantity||0}
          class=${this.classMap({"corner-cowi-cart-item":!0,hidden:!this.shouldShowAll})}
          role="listitem"
          aria-label=${this.productTitle}
        >
          <div
            id=${`corner-cowi-cart-item-primary-info-${this.index}`}
            data-testid="corner-cowi-cart-item-primary-info"
            class="corner-cowi-cart-item-primary-info flex items-stretch"
          >
            <div
                id=${`corner-cowi-cart-item-list-item-image-${this.index}`}
                data-testid="corner-cowi-cart-item-list-item-image"
                class=${this.classMap({"w-16":!0,"bg-cowi-card-bg":!0,relative:!0,"md:w-20":!0,flex:!0,"flex-wrap":!0,"items-start":!0,"flex-grow-0":!0,"flex-shrink-0":!0,"rounded-lg":!0,invisible:!this.shouldShowImage,"pointer-events-none":!this.shouldShowImage||this.isParcelisProduct})}
                title=${this.imageLabel}
                @click=${this.handleImageClick}
              >
                ${this.when(this.item?.image,()=>this.html`
                      <img
                        data-testid="item-image"
                        class="w-full relative z-10 object-cover rounded-lg"
                        src=${this.item.image}
                        alt=${this.item.productTitle+"-image"}
                      />
                    `,()=>this.html`<div class="corner-no-image"></div>`)}
              </div>
            <div
              data-testid="corner-cowi-cart-item-list-item-info-body"
              id="corner-cowi-cart-item-list-item-info-body-${this.index}"
              class="corner-cowi-cart-item-list-item-info-body flex flex-col justify-between flex-grow ml-4"
            >
              <div
                data-testid="corner-cowi-cart-item-list-item-info-title-wrapper"
                id="corner-cowi-cart-item-list-item-info-title-wrapper-${this.index}"
                class="corner-cowi-cart-item-list-item-info-title-wrapper flex items-start"
              >
                <div class="grow">
                  ${this.html`
                    <a data-testid="corner-cowi-cart-item-title-anchor"
                      href=${this.isTitleClickable?this.item.url:"#"}
                      class=${this.classMap({"text-base":!0,"font-bold":!0,invisible:!this.shouldShowTitle,"pointer-events-none":!this.shouldShowTitle||!this.isTitleClickable})}>
                      <p 
                        class="text-md leading-snug text-cowi-primary-type hover:text-[color:var(--corner-cowi-accent-bg)] transition-all">
                        ${this.truncatedTitle}
                      </p>
                    </a>
                  `}
                  ${this.when(this.globalContext?.config?.cornercart?.cartConfig?.general?.showReviewRating,()=>this.html`
                      <corner-cart-line-rating
                        .item=${this.item}
                        .index=${this.index}
                        .showStars=${!0}
                        .showRating=${!0}
                        .showRatingCount=${!0}
                        .textColor=${"black"}
                        .starSize=${"14px"}
                        .fontSize=${"12px"}
                        .gap=${"6px"}
                        .countFormat=${"parentheses"}
                      ></corner-cart-line-rating>
                    `)}
                  ${this.when(this.hasVariantOptions,()=>this.html`
                      <div
                        id="corner-cowi-cart-item-variant-options-${this.index}"
                        class=${this.classMap({"corner-cowi-cart-item-variant-options":!0,"text-sm":!0,"leading-0":!0,"text-cowi-secondary-type":!0,"mt-2":!0,invisible:!this.shouldShowOptions,"pointer-events-none":!this.shouldShowOptions})}
                        aria-label="Product variant options"
                      >
                          ${this.map(this.variantOptions,(t,e)=>this.when(t&&t!=="Default Title",()=>this.html`
                                  ${e!==this.variantOptions.length-1?`${t} •`:` ${t}`}
                                `,()=>this.nothing))}
                      </div>
                    `)}
                  <div
                    id="corner-cowi-cart-item-line-properties-${this.index}"
                    class="corner-cowi-cart-item-line-properties text-xs flex flex-wrap leading-0 text-cowi-secondary-type"
                  >
                    ${this.when(this.sellingPlanName,()=>this.html`
                        <div
                          id="corner-cowi-cart-item-selling-plan-${this.index}"
                          class=${this.classMap({"corner-cowi-cart-item-selling-plan":!0,"px-2":!0,"font-bold":!0,"leading-0":!0,"text-cowi-secondary-type":!0,"mr-1":!0,"mt-1":!0,"rounded-lg":!0,border:!0,"border-solid":!0,"border-cowi-outlines":!0,"max-w-fit":!0,invisible:!this.shouldShowSellingPlans,"pointer-events-none":!this.shouldShowSellingPlans})}
                        >
                          <span> ${this.sellingPlanName} </span>
                        </div>
                      `)}
                    ${this.when(this.hasRechargePlan,()=>this.html`
                        <div
                          id="corner-cowi-cart-item-recharge-plan-description-${this.index}"
                          class="corner-cowi-cart-item-recharge-plan-description px-2 font-bold leading-0 text-cowi-secondary-type mr-1 mt-1 rounded-lg border border-solid border-cowi-outlines max-w-fit"
                        >
                          <span>
                            ${this.renderRechargeShippingFrequency(this.item?.properties?.[Ve.PROPERTY_KEYS.SHIPPING_INTERVAL_FREQUENCY],this.item?.properties?.[Ve.PROPERTY_KEYS.SHIPPING_INTERVAL_UNIT])}
                          </span>
                        </div>
                      `)}
                    ${this.when(this.shouldRenderItemProperties,()=>this.map(this.filteredPropertyKeys,t=>{const e=this.item?.properties?.[t];return this.when(this.isUrl(this.item?.properties?.[t]),()=>this.html`
                            <div
                              id=${t}
                              class="shrink-0 border border-cowi-outlines border-solid px-1 mr-1 mt-1 rounded-lg max-w-full"
                            >
                              <div class="flex items-center break-all">
                                <span>${t}:</span>
                                <a
                                  href=${e}
                                  target="_blank"
                                  class="font-bold w-5 h-5 mx-1"
                                >
                                  <corner-icon
                                    type="link"
                                    .color=${this.secondaryColor}
                                  ></corner-icon>
                                </a>
                              </div>
                            </div>
                          `,()=>this.html`
                                <div
                                  class="shrink-0 border border-cowi-outlines border-solid px-1 mr-1 mt-1 rounded-lg max-w-full"
                                >
                                  <div class="break-all">
                                    <span>${t}:</span>
                                    <span class="font-bold"
                                      >${e}</span
                                    >
                                  </div>
                                </div>
                              `)}))}
                  </div>
                </div>
                ${this.html`
                  <div
                    data-testid="corner-cowi-cart-item-list-item-info-remove-btn"
                    id="corner-cowi-cart-item-list-item-info-remove-btn-${this.index}"
                   class=${this.classMap({"corner-cowi-cart-item-list-item-info-remove-btn":!0,"w-5":!0,"h-5":!0,"p-[4px]":!0,"shrink-0":!0,"rounded-full":!0,"transition-all":!0,"opacity-50":!0,"cursor-pointer":!0,"hover:rotate-90":!0,"hover:opacity-100":!0,"mt-1":!0,"pointer-events-none":!this.shouldShowCloseButton||this.isLoading,invisible:!this.shouldShowCloseButton})}
                    @click=${this.handleItemRemove}
                    title=${this.removeButtonLabel}
                  >
                    <corner-icon
                      data-testid="corner-cowi-cart-item-list-item-info-remove-icon"
                      type="close-cross"
                      .color=${this.secondaryColor}
                    ></corner-icon>
                  </div>
                `}
              </div>
              ${this.when(this.lineItemMessages&&this.lineItemMessages.length,()=>this.html`
                  <corner-cart-line-messages
                    .lineItemMessages=${this.lineItemMessages}
                    .index=${this.index}
                  >
                  </corner-cart-line-messages>`)}
              <div
                id="corner-cowi-cart-item-customiser-${this.index}"
                class=${this.classMap({"corner-cowi-cart-item-customise":!0,flex:!0,"mt-3":!0,"items-center":!0,"justify-end":this.isQtyHidden||this.isParcelisProduct,"justify-between":!this.isQtyHidden&&!this.isParcelisProduct})}
              >
                ${this.html`
                  <corner-qty-control
                      class="block"
                      .index=${this.index}
                      .item=${this.item}
                      .quantity=${this.quantity}
                      .hidden=${this.isQtyHidden||this.isParcelisProduct}
                      .globalContext=${this.globalContext}
                      .isLoading=${this.isLoading}
                      .isCartLoading=${this.isCartLoading}
                    >
                    </corner-qty-control>
                `}
                ${this.html`
                  <corner-price-text 
                    .item=${this.item}
                    .index=${this.index}
                    .finalPrice=${this.finalPriceFormatted}
                    .strikedPrice=${this.strikedPriceFormatted}
                    .hidePrice=${!this.shouldShowPrice}
                    .hideStrikedPrice=${!this.shouldShowStrikedPrice}
                    .freeText=${this.freeText}
                    .fallBackPrice=${this.fallBackPrice}
                    .isLoading=${this.isLoading}
                    .loaderColor=${this.primaryColor}
                    .isFreeProduct=${this.isFreeProduct}
                  ></corner-price-text>
                `}
              </div>
            </div>
          </div>
        </div>
      `}catch(t){return console.error("Error rendering cart item:",t),this.nothing}}}},{tagName:"corner-cart-line-bundle-item",className:"CornerCartLineBundleItem",classDefinition:Qc},{tagName:"corner-price-text",className:"CornerPriceText",classDefinition:Yc},{tagName:"corner-cart-line-discounts",className:"CornerCartLineDiscounts",classDefinition:Jc},{tagName:"corner-cart-line-rating",className:"CornerCartLineRating",classDefinition:et},{tagName:"corner-offer-tag",className:"CornerOfferTag",classDefinition:Zc},{tagName:"corner-cart-announcement-item",className:"CornerCartAnnouncementItem",classDefinition:Rn},{tagName:"corner-cart-announcement-container",className:"CornerCartAnnouncementContainer",classDefinition:Kc},{tagName:"corner-carousel",className:"CornerCarousel",classDefinition:Un},{tagName:"corner-container",className:"CornerContainer",classDefinition:jn},{tagName:"corner-check-box",className:"CornerCustomCheckBox",classDefinition:nl},{tagName:"corner-cart-oneclick-upsell",className:"CornerCartOneClickUpSell",classDefinition:class extends il{static properties={type:{type:String}};constructor(){super(),this.type="checkbox"}render(){return this.product&&this.product.available?this.html`
            <div id="${this._containerId}">
                <div id="corner-cowi-one-click-${this.campaign.campaignid}" class="corner-cowi-cart-one-click flex flex-row p-4 items-center border-b border-solid border-cowi-outlines"
                  data-corner-product-id=${this.product.id}
                  data-corner-variant-id=${this.getDisplayedPriceVariantId()}>
                  ${this.html`
                    ${this.campaign?.upsellConfig?.isImageVisible?this.html`
                      <div
                        id="corner-cowi-cart-one-click-image-wrapper-${this.campaign?.campaignid}"
                        class="corner-cowi-cart-one-click-image-wrapper max-h-16 w-12 rounded-md"
                      >
                        <img
                          id="corner-cowi-cart-one-click-image-${this.product?.image}"
                          src=${this.product?.image}
                          alt="product image"
                          class="corner-cowi-cart-one-click-image w-full"
                        />
                      </div>
                    `:this.nothing}
                  `}
                  ${this.html`
                    <div
                      id="corner-cowi-cart-one-click-text-${this.campaign?.campaignid}"
                      class="corner-cowi-cart-one-click-text w-full px-4"
                    >
                      <p class="text-base text-cowi-primary-type">
                        ${this.unsafeHTML(this.formatUpsellText(this.content?.value?.upsellPrimaryText))}
                      </p>
                    </div>
                  `}
                  ${(()=>{switch(this.type){case"checkbox":default:return this.when(this.campaign?.upsellConfig&&this.campaign?.upsellConfig?.ctaType==="checkbox",()=>this.html`
                            <div
                              id="corner-cowi-cart-one-click-checkbox-${this.campaign?.campaignid}"
                              class="corner-cowi-cart-one-click-checkbox h-5 w-5 shrink-0 mr-4"
                            >
                              <corner-check-box
                                id="corner-upsell-${this.campaign?.campaignid}"
                                .isChecked=${this.isChecked}
                                ?isDisabled=${this.isCartLoading}
                                @corner-checkbox-change=${t=>this.handleOneClickUpSellChange(t.detail.checked)}
                                .color=${this.getActiveFg}
                              ></corner-check-box>
                            </div>`,()=>this.nothing);case"button":return this.when(this.campaign?.upsellConfig&&this.campaign?.upsellConfig?.ctaType==="button",()=>this.html`
                            <button
                              id="corner-cowi-cart-one-click-checkbox-cta-button-${this.campaign.campaignid}"
                              @click=${()=>this.handleOneClickUpSellChange(!this.isChecked)}
                              ?disabled=${this.isCartLoading}
                              aria-label="one-click-checkbox-cta-button"
                              class=${this.classMap({"corner-cowi-cart-one-click-checkbox-cta-button":!0,"shrink-0":!0,"grow-0":!0,"mr-4":!0,"cursor-pointer":!0,"opacity-50":this.campaign?.upsellConfig?.ctaType==="button"&&this.isChecked,border:this.isChecked,"border-solid":this.isChecked,"border-cowi-primary-type":this.isChecked,"bg-cowi-card-bg":this.isChecked,"text-cowi-primary-type":this.isChecked,"rounded-full":this.isChecked,"p-2":this.isChecked,"transition-all":this.isChecked,"hover:opacity-100":this.isChecked,"bg-cowi-accent-bg":!this.isChecked,"text-cowi-accent-fg":!this.isChecked,rounded:!this.isChecked,"px-3":!this.isChecked,"py-2":!this.isChecked,"text-sm":!this.isChecked,"font-bold":!this.isChecked})}
                            >
                              ${this.isChecked?this.html`
                                    <div class="w-3 h-3">
                                      <corner-icon
                                        type="close-cross"
                                        .color=${this.getPrimaryColor}
                                      ></corner-icon>
                                    </div>`:this.html`<span>${this.unsafeHTML(this.globalContext?.currentLanguage?.cart?.related_items_cta||"")}</span>`}
                            </button>`,()=>this.nothing)}})()}
                </div>
            </div>
                  `:this.nothing}}},{tagName:"corner-cart-parcelis-one-click-upsell",className:"CornerCartParcelisOneClickUpsell",classDefinition:class extends xl{render(){if(!this.eligibleInsuranceTierObject)return this.nothing;const{title_color:t,title_font_size:e,insurance_amount_color:r,insurance_amount_font_size:n,show_insurance_amount:i,description_color:o,description_font_size:s,parcelis_logo_url:c,show_logo:d}=this.parcelisConfig??{};return this.html`
      <div
        id="corner-cowi-cart-parcelis-upsell-wrapper"
        class="flex flex-col p-4 border border-solid border-cowi-outlines rounded-lg"
      >
        <div class="flex flex-row items-start">
          ${this.when(d,()=>this.html`
              <div id="corner-cowi-cart-parcelis-logo-wrapper" class="max-h-16 w-12 shrink-0 rounded-md">
                <img src=${c} alt="parcelis logo" id="corner-cowi-cart-parcelis-logo" class="w-full h-full object-contain" />
              </div>
            `,()=>this.nothing)}
          <div id="corner-cowi-cart-parcelis-content-wrapper" class="flex-1 px-4 flex flex-col">
            <div id="corner-cowi-cart-parcelis-title-wrapper" class="flex items-center gap-1">
              <span
                id="corner-cowi-cart-parcelis-upsell-cta"
                style=${this.styleMap({color:t,fontSize:e})}
              >${this.globalContext?.currentLanguage?.cart?.parcelis_upsell_cta}
              </span>
              <div class="w-4 h-4 shrink-0" @click=${()=>this.showParcelisInfoModal()}>
                <corner-icon
                  type="circle-info"
                  color=${t}
                  class="cursor-pointer w-full h-full"
                ></corner-icon>
              </div>
            </div>
            ${this.when(i,()=>this.html`
                <span
                  id="corner-cowi-cart-parcelis-price"
                  class="font-bold"
                  style=${this.styleMap({color:r,fontSize:n})}
                >
                  ${this.eligibleVariantPrice?this.unsafeHTML(this.formatMoney(this.eligibleVariantPrice)):""}
                </span>
              `,()=>this.nothing)}
          </div>
          <div id="corner-cowi-cart-parcelis-checkbox" class="h-5 w-5 shrink-0 mr-4">
            <corner-check-box
              id="corner-parcelis"
              .isChecked=${this.insuranceItemInCart!==null}
              ?isDisabled=${this.isCartLoading}
              @corner-checkbox-change=${l=>this.handleParcelisChange(l.detail.checked)}
              .color=${this.getActiveFg}
            ></corner-check-box>
          </div>
        </div>
        <p
          id="corner-cowi-cart-parcelis-description"
          class="mt-2"
          style=${this.styleMap({color:o,fontSize:s})}
        >
          ${this.globalContext?.currentLanguage?.cart?.parcelis_description_text}
        </p>
      </div>
    `}}},{tagName:"corner-cart-progress",className:"CornerCartProgress",classDefinition:class extends cl{static properties={variant:{type:String,attribute:"variant"}};constructor(){super(),this.variant="bar"}render(){return this.variant,this.html`
            <corner-cart-progress-bar 
                .milestones=${this.milestones} 
                .milestonesPerPage=${this.milestonesPerPage} 
                .currentMilestoneIndex=${this.currentMilestoneIndex} 
                .goalType=${this.goalType} 
                .currencyConversionMultiplier=${this.currencyConversionMultiplier} 
                .currentValue=${this.currentValue} 
                .rewardsWorth=${this.rewardsWorth}
                .globalContext=${this.globalContext}
                >
            </corner-cart-progress-bar>
        `}}},{tagName:"corner-cart-checkout",className:"CornerCartCheckout",classDefinition:class extends Kt{static properties={type:{type:String}};constructor(){super(),this.type=Kt.CHECKOUT_TYPES.SPLIT}render(){return this.html`
      ${this.customHtmlAboveCta&&this.customHtmlAboveCta.length>0&&this.isCustomCssEnabled?this.html`
              <div
                id="corner-cowi-cart-custom-html-above-cta"
                class="border-b border-cowi-outlines border-solid"
              >
                ${this.unsafeHTML(this.customHtmlAboveCta)}
              </div>
            `:this.nothing}

      ${(()=>{switch(this.type){case"unified":return this.html`
                  <corner-cart-checkout-unified
                      .type=${this.type}
                      .globalContext=${this.globalContext}
                      .totalAmount=${this.totalAmount}
                      .wordMap=${this.computedWordMap}
                      .isCartLoading=${this.isCartLoading}
                      .showCartTotal=${this.showCartTotal}
                  ></corner-cart-checkout-unified>`;case"classic":return this.html`
                  <corner-cart-checkout-classic
                      .type=${this.type}
                      .globalContext=${this.globalContext}
                      .totalAmount=${this.totalAmount}
                      .wordMap=${this.computedWordMap}
                      .isCartLoading=${this.isCartLoading}
                      .showCartTotal=${this.showCartTotal}
                  ></corner-cart-checkout-classic>`;default:return this.html`
                  <corner-cart-checkout-split
                      .type=${this.type}
                      .globalContext=${this.globalContext}
                      .totalAmount=${this.totalAmount}
                      .wordMap=${this.computedWordMap}
                      .showCartTotal=${this.showCartTotal}
                      .isCartLoading=${this.isCartLoading}
                      
                  ></corner-cart-checkout-split>`}})()}

      ${this.customHtmlBelowCta&&this.customHtmlBelowCta.length>0&&this.isCustomCssEnabled?this.html`
              <div
                id="corner-cowi-cart-custom-html-below-cta"
                class="border-t border-cowi-outlines border-solid"
              >
                ${this.unsafeHTML(this.customHtmlBelowCta)}
              </div>
            `:this.nothing}
    `}}},{tagName:"corner-discount-input",className:"CornerDiscountInput",classDefinition:class extends ll{static properties={};constructor(){super()}getTags(){return[...(Array.isArray(this.discountCodes)?this.discountCodes:[]).map(t=>({key:`code-${t}`,title:String(t||"").toUpperCase(),closable:!0})),...(Array.isArray(this.automaticDiscounts)?this.automaticDiscounts:[]).map(t=>({key:`auto-${t}`,title:String(t||"").toUpperCase(),closable:!1})),...this.cornerDiscount?[{key:"corner-applied",title:String(this.cornerDiscount).toUpperCase(),closable:!1}]:[]]}render(){return this.html`
    ${this.getIsDiscountBoxActive?this.when(this.getIsDiscountBoxActive,()=>this.html`
            <div
              id="corner-cowi-cart-apply-discount-section"
              class="py-2 px-3 flex justify-between"
            >
              <span class="flex flex-grow">
                <input
                  class="w-full border border-cowi-outlines border-solid rounded-md mr-3 px-3 bg-cowi-card-bg text-cowi-primary-type"
                  type="text"
                  placeholder=${this.getDiscountBoxPlaceholder}
                  name="apply-discount"
                  id="corner-cowi-cart-apply-discount-input"
                  .value=${this.code}
                  @input=${t=>this.code=t.target.value}
                  ?disabled=${this.isCartLoading}
                  @keydown=${t=>{t.key==="Enter"&&this.code.length>0&&this.apply()}}
                />
              </span>
              <span>
                <button
                  id="corner-cowi-cart-apply-discount-section-cta-btn"
                  aria-label="apply-discount-btn"
                  class=${this.classMap({"text-center":!0,"cursor-pointer":!0,"p-3":!0,border:!0,flex:!0,"items-center":!0,"border-solid":!0,"border-cowi-primary-type":!0,"bg-cowi-card-bg":!0,"text-cowi-primary-type":!0,"hover:shadow-lg":!0,"transition-all":!0,"text-base":!0,"font-bold":!0,"rounded-md":!0,"opacity-50":this.isCartLoading,"pointer-events-none":this.isCartLoading})}
                  @click=${()=>{this.code.length>0&&!this.isCartLoading&&this.apply()}}
                >
                  ${this.when(this.isLoading,()=>this.html`
                      <span class="w-5 h-5 pr-2">
                        <corner-icon
                          type="loader"
                          class="animate-spin"
                          .color=${this.getPrimaryTypeColor}
                        ></corner-icon>
                      </span>
                    `)}
                  <span>${this.unsafeHTML(this.getDiscountBoxCtaText)}</span>
                </button>
              </span>
            </div>
          `,()=>this.nothing()):this.nothing}

    <div id="corner-cowi-cart-applied-discount-info-wrapper" class="px-5">
      <div id="corner-cowi-cart-discount-tags-wrapper" class="flex flex-wrap w-full">
        ${this.repeat(this.getTags(),t=>t.key,t=>this.html`
            <corner-offer-tag
              .index=${t.key}
              .content=${t.title}
              .displayCloseIcon=${t.closable}
              @tag-action=${e=>this._handleRemove(e)}
            ></corner-offer-tag>
          `)}
      </div>
    </div>
  `}}},{tagName:"corner-cart-terms",className:"CornerCartTerms",classDefinition:dl},{tagName:"corner-cart-summary",className:"CornerCartSummary",classDefinition:class extends Tr{static properties={};constructor(){super()}render(){return this.html`
            <div id="corner-cowi-cart-summary-items-wrapper">
  
                <!-- Subtotal  tax -->
                ${this.when(this.getShowSubtotal&&this.amountBeforeDiscount>0&&this.amountAfterDiscount<this.amountBeforeDiscount,()=>this.renderPricingSubItem("corner-cowi-cart-summary-subtotal",this.getSubtotalText,this.formatMoney(this.amountBeforeDiscount,this.getCurrencyFormat)))}
                
                <!-- Shipping -->
                ${this.when(this.shippingOffer&&this.showShippingOffers,()=>this.renderPricingSubItem("corner-cowi-cart-summary-shipping",this.getShippingText,this.shippingOffer.reward.value===100?this.getFreeText:`${this.shippingOffer.reward.value}% OFF`))}
                
                <!-- Discount -->
                ${this.when(this.totalDiscountAmount>0,()=>this.renderPricingSubItem("corner-cowi-cart-summary-discount",this.getDiscountText,`<span id="corner-cowi-cart-summary-discount-value">
                            <span id="corner-cowi-cart-summary-discount-negative-sign">-</span>
                            ${this.formatMoney(this.totalDiscountAmount,this.getCurrencyFormat)}
                        </span>`))}
                
                <!-- Total (classic style) -->
                ${this.when(this.getCheckoutButtonStyle==="classic",()=>this.html`
                        <div id="corner-cowi-cart-cta-total-price-wrapper" class="px-5 py-2 flex items-center justify-between">
                            <span class="text-lg font-bold text-cowi-primary-type">
                                ${this.unsafeHTML(this.getTotalText)}
                            </span>
                            <span class="text-lg font-bold text-cowi-primary-type">
                                ${this.unsafeHTML(this.formatMoney(this.amountAfterDiscount,this.getCurrencyFormat))}
                            </span>
                        </div>
                    `)}
            </div>
        `}}},{tagName:"corner-continue-shopping-button",className:"CornerContinueShoppingButton",classDefinition:class extends ul{static properties={globalContext:{type:Object}};constructor(){super()}render(){return this.html`
        <div id="corner-cowi-cart-secondary-buttons">
            ${this.when(this.getShowContinueShoppingBtn,()=>this.html`
                        <button
                            id="corner-cowi-cart-continue-shopping-button"
                            aria-label="continue-shopping-button"
                            class="w-full bg-cowi-card-bg text-center cursor-pointer py-4 border-t border-solid border-cowi-outlines text-cowi-primary-type font-bold hover:-translate-y-1 transition-all text-base"
                            @click=${()=>this._handleContinueShoppingClick()}
                        >
                            ${this.unsafeHTML(this.getContinueShoppingText)}
                        </button>
                    `)}
        </div>
    `}}},{tagName:"corner-cart-timer-item",className:"CornerCartTimerItem",classDefinition:class extends pl{constructor(){super()}render(){const t=this.timerContent;if(!t)return this.nothing;const e=`corner-cowi-timer-message-banner-item-${this.timerId}`;return this.html`
      <div class="w-full h-full">
        <style>
          #${e} * {
            color: ${this.currentTextColor} !important;
          }
        </style>
        <div
          id=${e}
          class="corner-cowi-timer-message-banner-item text-center text-sm border-b border-solid border-cowi-outlines flex items-center justify-center h-full tabular-nums w-full"
          style=${this.styleMap({background:this.currentBgColor,padding:"1rem 25px",fontSize:"1.5rem"})}
        >
          ${this.unsafeHTML(t)}
        </div>
      </div>
    `}}},{tagName:"corner-cart-timer-container",className:"CornerCartTimerContainer",classDefinition:hl},{tagName:"corner-site-announcement-timer-container",className:"CornerSiteAnnouncementTimerContainer",classDefinition:gl},{tagName:"corner-cart-note-overlay",className:"CornerCartNoteOverlay",classDefinition:ml},{tagName:"corner-cart-note",className:"CornerCartNote",classDefinition:class extends Ce{static properties={buttonText:{type:String},iconColor:{type:String},globalContext:{type:Object}};constructor(){super(),this.buttonText="",this.iconColor="rgb(25,35,55)",this.globalContext={}}_handleClick(){this.dispatchEvent(new CustomEvent("corner-cart-note-click",{bubbles:!0,composed:!0}))}render(){return this.html`
      <div id="corner-cowi-cart-note-wrapper" class="flex justify-center mt-5">
        <div
          id="corner-cowi-cart-note-btn"
          @click=${this._handleClick}
          class="flex cursor-pointer border border-cowi-outlines border-solid items-center text-xs rounded-full bg-cowi-card-bg px-3 py-1 transition-all hover:-translate-y-1 max-w-fit mb-5"
        >
          <div id="corner-cowi-optional-note-btn-icon" class="w-5 h-5 mr-2">
            <corner-icon type="note" color=${this.iconColor}></corner-icon>
          </div>
          <span class="text-base text-cowi-primary-type">
            ${this.unsafeHTML(this.buttonText)}
          </span>
        </div>
      </div>
    `}}},{tagName:"corner-cart-subscription-upgrade",className:"CornerCartSubscriptionUpgrade",classDefinition:class extends Ce{static properties={index:{type:Number},text:{type:String},sellingPlanId:{type:Number},id:{type:String},quantity:{type:Number},globalContext:{type:Object}};constructor(){super(),this.text="Upgrade to subscription",this.globalContext={}}handleUpgradeClick(){this.dispatchEvent(new CustomEvent("corner-cart-subscription-upgrade-click",{bubbles:!0,composed:!0,detail:{type:"changeSellingPlan",params:{id:this.id,quantity:this.quantity,sellingPlanId:this.sellingPlanId}}}))}render(){return this.html`
      <div class="corner-cowi-subscription-upgrade-wrapper px-4 md:px-6 pt-2">
        <button
          id="corner-cowi-cart-item-subscription-upgrade-${this.index}"
          class="corner-cowi-cart-item-subscription-upgrade bg-cowi-accent-bg cursor-pointer px-3 py-2 rounded-md text-sm font-bold text-cowi-accent-fg w-full"
          @click=${this.handleUpgradeClick}
        >
          ${this.text}
        </button>
      </div>
    `}}},{tagName:"corner-cart-selling-plan-select",className:"CornerCartSellingPlanSelect",classDefinition:fl},{tagName:"corner-related-items",className:"CornerRelatedItems",classDefinition:wl}];er.init(Cl);const $l=(t,e)=>t.length>e?`${t.substring(0,Math.min(t.length,e))}...`:t,kl=(t,e)=>{let r=window.cornerRechargeString||"Every",n=e.toLowerCase(),i=parseInt(t);return isNaN(i)||i<=0?"Invalid delivery schedule":(n=n==="day"||n==="days"?"Day":n==="month"||n==="months"?"Month":"Week",`${r} ${i} ${n}${i===1?"":"s"}`)};function Sl(t){return/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(t)}const tr=(t,e,r)=>{var n=r?t.toFixed(e).toString():Number(t.toFixed(e)).toString();return n.match(/^\.\d+/g)?"0"+n:n.match(/(?:\.\d+)/g)&&n.match(/(?:\.\d+)/g)[0].length===2?n+"0":n},Hn=(t,e)=>{var r="",n=/\{\{\s*(\w+)\s*\}\}/;let i,o=!1;if(window.Shopify.currency){const{active:s}=window.Shopify.currency;e&&e[`${s}`]?(i=e[`${s}`].format,o=!!e[`${s}`].showDecimalsIfWholeNumber):i=`{{amount}} ${s} `}else e?Object.keys(e).forEach(function(s){e[s].isDefault===!0&&(i=e[s].format)}):i="{{amount}}";switch(i.match(n)[1]){case"amount":default:r=tr(t/100,2,o).replace(/(\d+)(\d{3}[\.,]?)/,"$1,$2").replace(/(\d+)(\d{3}[\.,]?)/,"$1,$2");break;case"amount_no_decimals":r=tr(t/100,0,o).replace(/(\d+)(\d{3}[\.,]?)/,"$1,$2").replace(/(\d+)(\d{3}[\.,]?)/,"$1,$2");break;case"amount_with_comma_separator":r=tr(t/100,2,o).replace(/\./,",").replace(/(\d+)(\d{3}[\.,]?)/,"$1.$2").replace(/(\d+)(\d{3}[\.,]?)/,"$1.$2");break;case"amount_no_decimals_with_comma_separator":r=tr(t/100,0,o).replace(/\./,",").replace(/(\d+)(\d{3}[\.,]?)/,"$1.$2").replace(/(\d+)(\d{3}[\.,]?)/,"$1.$2")}return i.replace(n,r)},oa=(t,e)=>{let r=t;const n=window.cornerRenderConfig?.json_build_object?.general_config?.cornerCurrencyFormat,i=t.match(/{{(.*?)}}/g);return i&&i.length>0&&i.map(o=>{let s,c,d;if(o.includes("|")){s=o.split("|")[0].replace(/{{|}}|\s|<|>/g,""),c=o.split("|")[1].split(":")[0].replace(/\s|}}/g,"");const l=e.find(p=>p.placeholder===s);if(l){let p=l?l.value:"";const u=l?l.valueType:"string";switch(c){case"plus":d=parseFloat(o.split(":")[1].replace(/\s|}}/g,"")),u&&u==="currency"&&(d*=100),p=p?parseFloat(p)+d:"";break;case"minus":d=parseFloat(o.split(":")[1].replace(/\s|}}/g,"")),u&&u==="currency"&&(d*=100),p=p?parseFloat(p)-d:"";break;case"times":d=parseInt(o.split(":")[1].replace(/\s|}}/g,"")),p=p?parseFloat(p)*d:"";break;case"divided_by":d=parseFloat(o.split(":")[1].replace(/\s|}}/g,"")),p=p?parseFloat(p)/d:"";break;case"round":if(u&&u==="currency"){const h=parseFloat(p)/100;p=100*Math.round(h)}else p=p?Math.round(parseFloat(p)):"";break;case"append":d=o.split(":")[1].match(/(["'])(.*?[^\\])\1/g,"")[0].slice(1,-1),p=l?l.value+d:"";break;case"capitalize":p=l?l.value.charAt(0).toUpperCase()+l.value.slice(1):"";break;case"downcase":p=l?l.value.toLowerCase():"";break;case"pluralize":{let h=o.split(":")[1].match(/(["'])(.*?[^\\])\1/g,"")[0].slice(1,-1),g=o.split(":")[1].match(/(["'])(.*?[^\\])\1/g,"")[1].slice(1,-1);p=(u&&u==="currency"?parseFloat(l.value)/100:parseFloat(l.value))>1?g:h;break}}u&&u==="currency"&&c!=="pluralize"&&(p=Hn(p,n)),r=r.replace(o,p)}else r=t}else{s=o.replace(/{{|}}|\s|<|>/g,"");const l=e.find(p=>p.placeholder===s);if(l){let p=l.value||"";l.valueType&&l.valueType==="currency"&&(p=Hn(p,n)),r=r.replace(o,p)}else r=t}}),r},Il=(t,e)=>{const r=window?.corner?.globalVariables?.quantityFormats;let n=t,i="{{quantity}}";if(r){const o=r.find(c=>c.productType===e),s=r.find(c=>c.productType==="allProducts");o?(i=o.format,n=t*o.conversionRate):s&&(i=s.format,n=t*s.conversionRate)}return oa(i,[{placeholder:"quantity",value:n,valueType:"number"}])},Tl=t=>{if(!Array.isArray(t)||t.length===0)return null;let e,r=window.Shopify.locale;return e=t.map(n=>n.language).includes(r)?t.find(n=>n.language===r):t[0],e.content},Pl=(t,e)=>{if(!t)return`rgba(0, 0, 0, ${e})`;const r=t.match(/\d+/g);return!r||r.length<3?`rgba(0, 0, 0, ${e})`:`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${e})`},aa=async()=>{window.corner=window.corner||{},window.corner.utils={...window.corner.utils||{},truncateString:$l,renderRechargeShippingFrequency:kl,isUrl:Sl,formatMoney:Hn,wordReplacer:oa,floatToString:tr,formatQuantity:Il,getLocalizedMessage:Tl,rgbToRgba:Pl},await(async()=>{if(window.cornerRenderConfig)return window.cornerRenderConfig;{let t={},e={};const r=window.corner&&Array.isArray(window.corner.campaigns)&&window.corner.campaigns.length>0,n=window.corner&&Array.isArray(window.corner.automations),i=window.corner&&window.corner.cornerConfig&&window.corner.cornerConfig.cartConfig;let o=[],s=[],c=null;if(r&&window.corner.campaigns.forEach(l=>{const{details:p,...u}=l;let h={...u,...p,campaignid:l.campaign_id};o.push(h)}),n&&window.corner.automations.forEach(l=>{const{details:p,...u}=l;let h={...u,...p,id:l.automation_id};s.push(h)}),i){const{generalconfig:l,version:p,updatedAt:u,...h}=window.corner.cornerConfig;e={general_config:l,cornercart:h},c=e}const d=[];if(r||d.push("campaigns"),n||d.push("automations"),i||d.push("conf"),d.length>0){console.log("⛔️ Fetching missing CornerCart config from cornercart servers:",d);const l=`${window.Shopify.shop==="hide-and-leather-online.myshopify.com"?"https://ace.usecorner.io/":"https://starlink.cornercart.io"}/corner/config/${window.Shopify.shop}/`;await Promise.all(d.map(async p=>{let u=await(await window.fetch(`${l}${p}.json`)).json();p==="campaigns"?o=u.campaigns||[]:p==="automations"?s=u.automations||[]:p==="conf"&&(c={general_config:u.json_build_object&&u.json_build_object.general_config?u.json_build_object.general_config:void 0,cornercart:u.json_build_object&&u.json_build_object.cornercart?u.json_build_object.cornercart:{}})}))}return t.json_build_object=c,t.campaigns=o,t.automations=s,window.cornerRenderConfig=t,t}})()&&((async()=>{if(document.getElementsByClassName("sticky-atc-bar-wrapper").length===0&&document.body){var t=document.createElement("div");t.setAttribute("class","sticky-atc-bar-wrapper"),document.body.appendChild(t)}di(os).render({selector:".sticky-atc-bar-wrapper",inline:!1,clean:!1})})(),(async()=>{if(document.getElementsByClassName("corner-widget-wrapper").length===0&&document.body){var t=document.createElement("div");t.setAttribute("class","corner-widget-wrapper");let n=document.querySelector(window.elementToReplaceInCartPage||"main");n&&["/cart","/cart/",`${window.Shopify.routes.root}cart`,`${window.Shopify.routes.root}cart/`].includes(window.location.pathname)?n.after(t):document.body.appendChild(t)}const e=document.querySelector("body"),r=document.createElement("div");r.setAttribute("class","corner-siteTop-announcement-bar widget-by-corner"),e.insertBefore(r,e.firstChild),di(yc).render({selector:".corner-widget-wrapper",inline:!1,clean:!1})})(),(function(){try{const t=er.defineComponents();t.failed===0?er.log("All components loaded successfully"):er.warn(`Loaded components with ${t.failed} failure(s). Check logs for details.`)}catch(t){throw er.error("Failed to load custom web components:",t),t}})())};aa(),document.addEventListener("DOMContentLoaded",()=>{aa()})});
