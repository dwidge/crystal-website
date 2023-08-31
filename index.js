"use strict";(()=>{var N={NODE_ENV:"production",PUBLIC_EMAIL:"info@3dcrystalstudio.co.za",PUBLIC_PHONE:"061 4309525",PUBLIC_TITLE:"3d Crystal Studio",PUBLIC_URL:"/crystal-website"};var $,u,De,bt,U,Se,He,te,Te,I={},Pe=[],xt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Z=Array.isArray;function P(e,t){for(var n in t)e[n]=t[n];return e}function we(e){var t=e.parentNode;t&&t.removeChild(e)}function D(e,t,n){var r,_,o,a={};for(o in t)o=="key"?r=t[o]:o=="ref"?_=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?$.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return W(e,a,r,_,null)}function W(e,t,n,r,_){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:_??++De};return _==null&&u.vnode!=null&&u.vnode(o),o}function oe(){return{current:null}}function H(e){return e.children}function k(e,t){this.props=e,this.context=t}function B(e,t){if(t==null)return e.__?B(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?B(e):null}function Ae(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ae(e)}}function ne(e){(!e.__d&&(e.__d=!0)&&U.push(e)&&!q.__r++||Se!==u.debounceRendering)&&((Se=u.debounceRendering)||He)(q)}function q(){var e,t,n,r,_,o,a,s,l;for(U.sort(te);e=U.shift();)e.__d&&(t=U.length,r=void 0,_=void 0,o=void 0,s=(a=(n=e).__v).__e,(l=n.__P)&&(r=[],_=[],(o=P({},a)).__v=a.__v+1,_e(l,a,o,n.__n,l.ownerSVGElement!==void 0,a.__h!=null?[s]:null,r,s??B(a),a.__h,_),Ie(r,a,_),a.__e!=s&&Ae(a)),U.length>t&&U.sort(te));q.__r=0}function Ue(e,t,n,r,_,o,a,s,l,g,h){var i,m,p,c,d,L,y,b,E,C=0,x=r&&r.__k||Pe,M=x.length,w=M,O=t.length;for(n.__k=[],i=0;i<O;i++)(c=n.__k[i]=(c=t[i])==null||typeof c=="boolean"||typeof c=="function"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?W(null,c,null,null,c):Z(c)?W(H,{children:c},null,null,null):c.__b>0?W(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null?(c.__=n,c.__b=n.__b+1,(b=Ct(c,x,y=i+C,w))===-1?p=I:(p=x[b]||I,x[b]=void 0,w--),_e(e,c,p,_,o,a,s,l,g,h),d=c.__e,(m=c.ref)&&p.ref!=m&&(p.ref&&ie(p.ref,null,c),h.push(m,c.__c||d,c)),d!=null&&(L==null&&(L=d),(E=p===I||p.__v===null)?b==-1&&C--:b!==y&&(b===y+1?C++:b>y?w>O-y?C+=b-y:C--:C=b<y&&b==y-1?b-y:0),y=i+C,typeof c.type!="function"||b===y&&p.__k!==c.__k?typeof c.type=="function"||b===y&&!E?c.__d!==void 0?(l=c.__d,c.__d=void 0):l=d.nextSibling:l=Oe(e,d,l):l=Le(c,l,e),typeof n.type=="function"&&(n.__d=l))):(p=x[i])&&p.key==null&&p.__e&&(p.__e==l&&(l=B(p)),re(p,p,!1),x[i]=null);for(n.__e=L,i=M;i--;)x[i]!=null&&(typeof n.type=="function"&&x[i].__e!=null&&x[i].__e==n.__d&&(n.__d=x[i].__e.nextSibling),re(x[i],x[i]))}function Le(e,t,n){for(var r,_=e.__k,o=0;_&&o<_.length;o++)(r=_[o])&&(r.__=e,t=typeof r.type=="function"?Le(r,t,n):Oe(n,r.__e,t));return t}function T(e,t){return t=t||[],e==null||typeof e=="boolean"||(Z(e)?e.some(function(n){T(n,t)}):t.push(e)),t}function Oe(e,t,n){return n==null||n.parentNode!==e?e.insertBefore(t,null):t==n&&t.parentNode!=null||e.insertBefore(t,n),t.nextSibling}function Ct(e,t,n,r){var _=e.key,o=e.type,a=n-1,s=n+1,l=t[n];if(l===null||l&&_==l.key&&o===l.type)return n;if(r>(l!=null?1:0))for(;a>=0||s<t.length;){if(a>=0){if((l=t[a])&&_==l.key&&o===l.type)return a;a--}if(s<t.length){if((l=t[s])&&_==l.key&&o===l.type)return s;s++}}return-1}function St(e,t,n,r,_){var o;for(o in n)o==="children"||o==="key"||o in t||Y(e,o,null,n[o],r);for(o in t)_&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||Y(e,o,t[o],n[o],r)}function ke(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||xt.test(t)?n:n+"px"}function Y(e,t,n,r,_){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ke(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||ke(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?Ne:Ee,o):e.removeEventListener(t,o?Ne:Ee,o);else if(t!=="dangerouslySetInnerHTML"){if(_)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Ee(e){return this.l[e.type+!1](u.event?u.event(e):e)}function Ne(e){return this.l[e.type+!0](u.event?u.event(e):e)}function _e(e,t,n,r,_,o,a,s,l,g){var h,i,m,p,c,d,L,y,b,E,C,x,M,w,O,S=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(h=u.__b)&&h(t);e:if(typeof S=="function")try{if(y=t.props,b=(h=S.contextType)&&r[h.__c],E=h?b?b.props.value:h.__:r,n.__c?L=(i=t.__c=n.__c).__=i.__E:("prototype"in S&&S.prototype.render?t.__c=i=new S(y,E):(t.__c=i=new k(y,E),i.constructor=S,i.render=Et),b&&b.sub(i),i.props=y,i.state||(i.state={}),i.context=E,i.__n=r,m=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),S.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=P({},i.__s)),P(i.__s,S.getDerivedStateFromProps(y,i.__s))),p=i.props,c=i.state,i.__v=t,m)S.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(S.getDerivedStateFromProps==null&&y!==p&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(y,E),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(y,i.__s,E)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(i.props=y,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(G){G&&(G.__=t)}),C=0;C<i._sb.length;C++)i.__h.push(i._sb[C]);i._sb=[],i.__h.length&&a.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(y,i.__s,E),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(p,c,d)})}if(i.context=E,i.props=y,i.__P=e,i.__e=!1,x=u.__r,M=0,"prototype"in S&&S.prototype.render){for(i.state=i.__s,i.__d=!1,x&&x(t),h=i.render(i.props,i.state,i.context),w=0;w<i._sb.length;w++)i.__h.push(i._sb[w]);i._sb=[]}else do i.__d=!1,x&&x(t),h=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++M<25);i.state=i.__s,i.getChildContext!=null&&(r=P(P({},r),i.getChildContext())),m||i.getSnapshotBeforeUpdate==null||(d=i.getSnapshotBeforeUpdate(p,c)),Ue(e,Z(O=h!=null&&h.type===H&&h.key==null?h.props.children:h)?O:[O],t,n,r,_,o,a,s,l,g),i.base=t.__e,t.__h=null,i.__h.length&&a.push(i),L&&(i.__E=i.__=null)}catch(G){t.__v=null,(l||o!=null)&&(t.__e=s,t.__h=!!l,o[o.indexOf(s)]=null),u.__e(G,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=kt(n.__e,t,n,r,_,o,a,l,g);(h=u.diffed)&&h(t)}function Ie(e,t,n){for(var r=0;r<n.length;r++)ie(n[r],n[++r],n[++r]);u.__c&&u.__c(t,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(o){o.call(_)})}catch(o){u.__e(o,_.__v)}})}function kt(e,t,n,r,_,o,a,s,l){var g,h,i,m=n.props,p=t.props,c=t.type,d=0;if(c==="svg"&&(_=!0),o!=null){for(;d<o.length;d++)if((g=o[d])&&"setAttribute"in g==!!c&&(c?g.localName===c:g.nodeType===3)){e=g,o[d]=null;break}}if(e==null){if(c===null)return document.createTextNode(p);e=_?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,p.is&&p),o=null,s=!1}if(c===null)m===p||s&&e.data===p||(e.data=p);else{if(o=o&&$.call(e.childNodes),h=(m=n.props||I).dangerouslySetInnerHTML,i=p.dangerouslySetInnerHTML,!s){if(o!=null)for(m={},d=0;d<e.attributes.length;d++)m[e.attributes[d].name]=e.attributes[d].value;(i||h)&&(i&&(h&&i.__html==h.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(St(e,p,m,_,s),i)t.__k=[];else if(Ue(e,Z(d=t.props.children)?d:[d],t,n,r,_&&c!=="foreignObject",o,a,o?o[0]:n.__k&&B(n,0),s,l),o!=null)for(d=o.length;d--;)o[d]!=null&&we(o[d]);s||("value"in p&&(d=p.value)!==void 0&&(d!==e.value||c==="progress"&&!d||c==="option"&&d!==m.value)&&Y(e,"value",d,m.value,!1),"checked"in p&&(d=p.checked)!==void 0&&d!==e.checked&&Y(e,"checked",d,m.checked,!1))}return e}function ie(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){u.__e(r,n)}}function re(e,t,n){var r,_;if(u.unmount&&u.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ie(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){u.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&re(r[_],t,n||typeof e.type!="function");n||e.__e==null||we(e.__e),e.__=e.__e=e.__d=void 0}function Et(e,t,n){return this.constructor(e,n)}function F(e,t,n){var r,_,o,a;u.__&&u.__(e,t),_=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],a=[],_e(t,e=(!r&&n||t).__k=D(H,null,[e]),_||I,I,t.ownerSVGElement!==void 0,!r&&n?[n]:_?null:t.firstChild?$.call(t.childNodes):null,o,!r&&n?n:_?_.__e:t.firstChild,r,a),Ie(o,e,a)}function ae(e,t){F(e,t,ae)}function Fe(e,t,n){var r,_,o,a,s=P({},e.props);for(o in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)o=="key"?r=t[o]:o=="ref"?_=t[o]:s[o]=t[o]===void 0&&a!==void 0?a[o]:t[o];return arguments.length>2&&(s.children=arguments.length>3?$.call(arguments,2):n),W(e.type,s,r||e.key,_||e.ref,null)}function se(e,t){var n={__c:t="__cC"+Te++,__:e,Consumer:function(r,_){return r.children(_)},Provider:function(r){var _,o;return this.getChildContext||(_=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&_.some(function(s){s.__e=!0,ne(s)})},this.sub=function(a){_.push(a);var s=a.componentWillUnmount;a.componentWillUnmount=function(){_.splice(_.indexOf(a),1),s&&s.call(a)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}$=Pe.slice,u={__e:function(e,t,n,r){for(var _,o,a;t=t.__;)if((_=t.__c)&&!_.__)try{if((o=_.constructor)&&o.getDerivedStateFromError!=null&&(_.setState(o.getDerivedStateFromError(e)),a=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(e,r||{}),a=_.__d),a)return _.__E=_}catch(s){e=s}throw e}},De=0,bt=function(e){return e!=null&&e.constructor===void 0},k.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P({},this.state),typeof e=="function"&&(e=e(P({},n),this.props)),e&&P(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ne(this))},k.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ne(this))},k.prototype.render=H,U=[],He=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,te=function(e,t){return e.__v.__b-t.__v.__b},q.__r=0,Te=0;var A,v,ue,je,j=0,Re=[],Q=[],Ve=u.__b,Me=u.__r,We=u.diffed,Be=u.__c,$e=u.unmount;function V(e,t){u.__h&&u.__h(v,e,j||t),j=0;var n=v.__H||(v.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Q}),n.__[e]}function ce(e){return j=1,fe(Ke,e)}function fe(e,t,n){var r=V(A++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ke(void 0,t),function(s){var l=r.__N?r.__N[0]:r.__[0],g=r.t(l,s);l!==g&&(r.__N=[g,r.__[1]],r.__c.setState({}))}],r.__c=v,!v.u)){var _=function(s,l,g){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(m){return m.__c});if(h.every(function(m){return!m.__N}))return!o||o.call(this,s,l,g);var i=!1;return h.forEach(function(m){if(m.__N){var p=m.__[0];m.__=m.__N,m.__N=void 0,p!==m.__[0]&&(i=!0)}}),!(!i&&r.__c.props===s)&&(!o||o.call(this,s,l,g))};v.u=!0;var o=v.shouldComponentUpdate,a=v.componentWillUpdate;v.componentWillUpdate=function(s,l,g){if(this.__e){var h=o;o=void 0,_(s,l,g),o=h}a&&a.call(this,s,l,g)},v.shouldComponentUpdate=_}return r.__N||r.__}function pe(e,t){var n=V(A++,3);!u.__s&&de(n.__H,t)&&(n.__=e,n.i=t,v.__H.__h.push(n))}function z(e,t){var n=V(A++,4);!u.__s&&de(n.__H,t)&&(n.__=e,n.i=t,v.__h.push(n))}function Ge(e){return j=5,K(function(){return{current:e}},[])}function qe(e,t,n){j=6,z(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function K(e,t){var n=V(A++,7);return de(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Ye(e,t){return j=8,K(function(){return e},t)}function Ze(e){var t=v.context[e.__c],n=V(A++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(v)),t.props.value):e.__}function Qe(e,t){u.useDebugValue&&u.useDebugValue(t?t(e):e)}function Je(){var e=V(A++,11);if(!e.__){for(var t=v.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function Nt(){for(var e;e=Re.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(J),e.__H.__h.forEach(le),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){v=null,Ve&&Ve(e)},u.__r=function(e){Me&&Me(e),A=0;var t=(v=e.__c).__H;t&&(ue===v?(t.__h=[],v.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Q,n.__N=n.i=void 0})):(t.__h.forEach(J),t.__h.forEach(le),t.__h=[],A=0)),ue=v},u.diffed=function(e){We&&We(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Re.push(t)!==1&&je===u.requestAnimationFrame||((je=u.requestAnimationFrame)||Dt)(Nt)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Q&&(n.__=n.__V),n.i=void 0,n.__V=Q})),ue=v=null},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(J),n.__h=n.__h.filter(function(r){return!r.__||le(r)})}catch(r){t.some(function(_){_.__h&&(_.__h=[])}),t=[],u.__e(r,n.__v)}}),Be&&Be(e,t)},u.unmount=function(e){$e&&$e(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{J(r)}catch(_){t=_}}),n.__H=void 0,t&&u.__e(t,n.__v))};var ze=typeof requestAnimationFrame=="function";function Dt(e){var t,n=function(){clearTimeout(r),ze&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);ze&&(t=requestAnimationFrame(n))}function J(e){var t=v,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),v=t}function le(e){var t=v;e.__c=e.__(),v=t}function de(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ke(e,t){return typeof t=="function"?t(e):t}function at(e,t){for(var n in t)e[n]=t[n];return e}function me(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function he(e,t){return e===t&&(e!==0||1/e==1/t)||e!=e&&t!=t}function ve(e){this.props=e}function Ht(e,t){function n(_){var o=this.props.ref,a=o==_.ref;return!a&&o&&(o.call?o(null):o.current=null),t?!t(this.props,_)||!a:me(this.props,_)}function r(_){return this.shouldComponentUpdate=n,D(e,_)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(ve.prototype=new k).isPureReactComponent=!0,ve.prototype.shouldComponentUpdate=function(e,t){return me(this.props,e)||me(this.state,t)};var Xe=u.__b;u.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Xe&&Xe(e)};var Tt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Pt(e){function t(n){var r=at({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Tt,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var et=function(e,t){return e==null?null:T(T(e).map(t))},wt={map:et,forEach:et,count:function(e){return e?T(e).length:0},only:function(e){var t=T(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:T},At=u.__e;u.__e=function(e,t,n,r){if(e.then){for(var _,o=t;o=o.__;)if((_=o.__c)&&_.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),_.__c(e,t)}At(e,t,n,r)};var tt=u.unmount;function st(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=at({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return st(r,t,n)})),e}function ut(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return ut(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function X(){this.__u=0,this.t=null,this.__b=null}function lt(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Ut(e){var t,n,r;function _(o){if(t||(t=e()).then(function(a){n=a.default||a},function(a){r=a}),r)throw r;if(!n)throw t;return D(n,o)}return _.displayName="Lazy",_.__f=!0,_}function R(){this.u=null,this.o=null}u.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),tt&&tt(e)},(X.prototype=new k).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var _=lt(r.__v),o=!1,a=function(){o||(o=!0,n.__R=null,_?_(s):s())};n.__R=a;var s=function(){if(!--r.__u){if(r.state.__a){var g=r.state.__a;r.__v.__k[0]=ut(g,g.__c.__P,g.__c.__O)}var h;for(r.setState({__a:r.__b=null});h=r.t.pop();)h.forceUpdate()}},l=t.__h===!0;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},X.prototype.componentWillUnmount=function(){this.t=[]},X.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=st(this.__b,n,r.__O=r.__P)}this.__b=null}var _=t.__a&&D(H,null,e.fallback);return _&&(_.__h=null),[D(H,null,t.__a?null:e.children),_]};var nt=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Lt(e){return this.getChildContext=function(){return e.context},e.children}function Ot(e){var t=this,n=e.i;t.componentWillUnmount=function(){F(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,_){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),F(D(Lt,{context:t.context},e.__v),t.l)}function It(e,t){var n=D(Ot,{__v:e,i:t});return n.containerInfo=t,n}(R.prototype=new k).__a=function(e){var t=this,n=lt(t.__v),r=t.o.get(e);return r[0]++,function(_){var o=function(){t.props.revealOrder?(r.push(_),nt(t,e,r)):_()};n?n(o):o()}},R.prototype.render=function(e){this.u=null,this.o=new Map;var t=T(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},R.prototype.componentDidUpdate=R.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){nt(e,n,t)})};var ct=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Ft=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,jt=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Vt=/[A-Z0-9]/g,Mt=typeof document<"u",Wt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function ye(e,t,n){return t.__k==null&&(t.textContent=""),F(e,t),typeof n=="function"&&n(),e?e.__c:null}function ge(e,t,n){return ae(e,t),typeof n=="function"&&n(),e?e.__c:null}k.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(k.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var rt=u.event;function Bt(){}function $t(){return this.cancelBubble}function zt(){return this.defaultPrevented}u.event=function(e){return rt&&(e=rt(e)),e.persist=Bt,e.isPropagationStopped=$t,e.isDefaultPrevented=zt,e.nativeEvent=e};var be,Rt={enumerable:!1,configurable:!0,get:function(){return this.class}},ot=u.vnode;u.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,_={};for(var o in n){var a=n[o];if(!(o==="value"&&"defaultValue"in n&&a==null||Mt&&o==="children"&&r==="noscript"||o==="class"||o==="className")){var s=o.toLowerCase();o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&a===!0?a="":s==="ondoubleclick"?o="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||Wt(n.type)?s==="onfocus"?o="onfocusin":s==="onblur"?o="onfocusout":jt.test(o)?o=s:r.indexOf("-")===-1&&Ft.test(o)?o=o.replace(Vt,"-$&").toLowerCase():a===null&&(a=void 0):s=o="oninput",s==="oninput"&&_[o=s]&&(o="oninputCapture"),_[o]=a}}r=="select"&&_.multiple&&Array.isArray(_.value)&&(_.value=T(n.children).forEach(function(l){l.props.selected=_.value.indexOf(l.props.value)!=-1})),r=="select"&&_.defaultValue!=null&&(_.value=T(n.children).forEach(function(l){l.props.selected=_.multiple?_.defaultValue.indexOf(l.props.value)!=-1:_.defaultValue==l.props.value})),n.class&&!n.className?(_.class=n.class,Object.defineProperty(_,"className",Rt)):(n.className&&!n.class||n.class&&n.className)&&(_.class=_.className=n.className),t.props=_}(e),e.$$typeof=ct,ot&&ot(e)};var _t=u.__r;u.__r=function(e){_t&&_t(e),be=e.__c};var it=u.diffed;u.diffed=function(e){it&&it(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),be=null};var Gt={ReactCurrentDispatcher:{current:{readContext:function(e){return be.__n[e.__c].props.value}}}};function qt(e){return D.bind(null,e)}function ee(e){return!!e&&e.$$typeof===ct}function Yt(e){return ee(e)&&e.type===H}function Zt(e){return ee(e)?Fe.apply(null,arguments):e}function xe(e){return!!e.__k&&(F(null,e),!0)}function Qt(e){return e&&(e.base||e.nodeType===1&&e)||null}var Jt=function(e,t){return e(t)},Kt=function(e,t){return e(t)},Xt=H;function ft(e){e()}function en(e){return e}function tn(){return[!1,ft]}var nn=z,rn=ee;function on(e,t){var n=t(),r=ce({h:{__:n,v:t}}),_=r[0].h,o=r[1];return z(function(){_.__=n,_.v=t,he(_.__,t())||o({h:_})},[e,n,t]),pe(function(){return he(_.__,_.v())||o({h:_}),e(function(){he(_.__,_.v())||o({h:_})})},[e]),n}var f={useState:ce,useId:Je,useReducer:fe,useEffect:pe,useLayoutEffect:z,useInsertionEffect:nn,useTransition:tn,useDeferredValue:en,useSyncExternalStore:on,startTransition:ft,useRef:Ge,useImperativeHandle:qe,useMemo:K,useCallback:Ye,useContext:Ze,useDebugValue:Qe,version:"17.0.2",Children:wt,render:ye,hydrate:ge,unmountComponentAtNode:xe,createPortal:It,createElement:D,createContext:se,createFactory:qt,cloneElement:Zt,createRef:oe,Fragment:H,isValidElement:ee,isElement:rn,isFragment:Yt,findDOMNode:Qt,Component:k,PureComponent:ve,memo:Ht,forwardRef:Pt,flushSync:Kt,unstable_batchedUpdates:Jt,StrictMode:Xt,Suspense:X,SuspenseList:R,lazy:Ut,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Gt};function pt(e){return{render(t){ye(t,e)},unmount(){xe(e)}}}function _n(e,t){return ge(t,e),pt(e)}var Ce={createRoot:pt,hydrateRoot:_n};function dt({src:e,href:t,title:n,text:r=" "}){return f.createElement("a",{className:"semidark flex",href:t,title:n},f.createElement("figure",{className:"flex"},f.createElement("img",{src:e,title:n,alt:""}),f.createElement("figcaption",{className:"center hover absolute-stretch semidark pad"},f.createElement("div",null,f.createElement("b",null,n)),f.createElement("div",null,r))))}var ht=[{src:"./7bc4c8b2-ae2c-43b7-918e-76ff01c7719d.jpg",title:"SH26 Crystal",text:"Large 2D crystal - 160x120x30mm"},{src:"./078f44d4-6c71-4d09-9f53-96cb3c0e65e9.jpg",title:"",text:""},{src:"./7ca1c795-fa3f-4dc6-b1c8-7320cdf7e8d9.jpg",title:"Landscape Ellipse",text:"Oval shped Crystal 140x90x40mm"},{src:"./1eb5e08d-a963-4fce-b392-2e00ee615d06.jpg",title:"SH47 3D Crystal",text:"3D Crystal image 80x50x50mm"},{src:"./aca3b243-6c6a-4f38-a3e7-e2ca95009b8b.jpg",title:"SH124-2",text:"Large 3D Crystal 140x100x60mm"},{src:"./eb88ebf2-1d3e-4fe3-b689-fda5c269cf80.jpg",title:"SH134 SH47 on black base",text:"SH47 80x50x55mm crystal on black base. SH138 90x60x60mm crystal on black base"},{src:"./4d9eb6ff-16a8-4edc-ba47-55474db1c470.jpg",title:"Trophy T10 T11 T12",text:"Trophy crystal shape on base"},{src:"./27e1e238-1aa2-4a73-b1dd-8520a00e2063.jpg",title:"Trophy T01 T02 T03",text:"Trophy crystal award"},{src:"./f2438719-9910-4430-bda7-5c1f2412dd2c.jpg",title:"Trophy T04 T05",text:"Trophy shape crystal awards"},{src:"./ec6b9eae-fb94-483d-9500-565875dbb55a.jpg",title:"SH138. 90x60x60mm",text:"3D CAD engraving of building"},{src:"./52cc9aaa-97cb-472f-b7d5-e806da20b95c.jpg",title:"sh39",text:"SH39 Semi circle - 120x90x35mm"},{src:"./fcd68c32-2960-40ec-bbc8-17a21008dfaf.jpg",title:"SH39-120x90x30mm",text:"Ellipse 3D Crystal for 3D and 2D photos"},{src:"./e548cf39-2371-41ed-a0a3-4360143c18e6.jpg",title:"",text:""},{src:"./90189f6c-6290-4ce5-9c71-1058b894058c.jpg",title:"SH124 Crystal. 140x100x40mm",text:"140 x100 x 00mm. 2D and 3D photos .3D photographs in Crystal glass"},{src:"./39718ffa-b4a8-488f-8550-365c62288b95.jpg",title:"SH150 Crystal",text:"150 x 50 x 50mm. 3D engraving into glass. 3D models. 3D images. 3D trophies. Black base optional."},{src:"./7f198eeb-f81b-456d-8cd4-3d519ca03248.jpg",title:"SH83. 80x50x50 bevel",text:"3D Crystal engraving. Engrave your 3D photo in crystal. 3D conversion. 3D conversion"},{src:"./d11cd847-bde2-488c-a7d4-a616e4a69a13.jpg",title:"SH64. 120 x90x60mm",text:"3D photos in Crystal Glass. Stand optional extra"},{src:"./6da2647d-f035-4c3b-b5b3-f351d5480ee6.jpg",title:"SH110. 100x60x30mm",text:"2D Crystal block. Photos and images in crystal"},{src:"./06fcabdc-217f-40b0-b046-4d0c2437244d.jpg",title:"SH138. 90x60x60mm",text:"3D images in crystal block. Beautiful 3D images and photos in crystal"},{src:"./17305cec-eea7-4906-87c4-a5877535f87c.jpg",title:"SH47. 80x50x50mm",text:"3D Crystal block. 3D images in crystal"},{src:"./68c6402b-f95b-4f4e-b929-a678dfd9dedc.jpg",title:"",text:""}];var{PUBLIC_TITLE:mt="",PUBLIC_EMAIL:sn="",PUBLIC_PHONE:un=""}=N;function vt(){return f.createElement(f.Fragment,null,f.createElement("section",{className:"row pad"},f.createElement("section",null,f.createElement("h2",null,f.createElement("a",{href:"."},mt))),f.createElement("section",null,f.createElement("nav",{role:"navigation"},f.createElement("a",{href:"/home"},"Home")))),f.createElement("div",{className:"dark bgimage"},f.createElement("section",{className:"padx center"},f.createElement("h5",null,f.createElement("i",null,"CAPTURE YOUR MEMORIES in LIGHT")),f.createElement("h5",null,f.createElement("i",null,"PERSONALISED 3D CRYSTAL PHOTOS AND AWARDS IN CRYSTAL GLASS")),f.createElement("p",null,"It is inside not on top.."))),f.createElement("section",{className:"grid gap pad"},ht.map(({src:e,title:t,text:n})=>f.createElement(dt,{href:"#",src:"images/"+e,title:t,text:n}))),f.createElement("div",{className:"padx center gap"},f.createElement("h3",null,"personalised CRYSTAL GIFTS for every occasion"),f.createElement("div",null,"Quirky gifts to suit any taste and budget.")),f.createElement("div",{className:"dark bgimage"},f.createElement("div",{className:"padx center gap"},f.createElement("div",null,f.createElement("h2",null,"Contact us")),f.createElement("div",{className:"center"},f.createElement("div",null,sn),f.createElement("div",null,un),f.createElement("div",null,"We deliver countrywide")),f.createElement("div",{className:"button"},f.createElement("a",{href:"store"},"Visit the store")))),f.createElement("section",{className:"dark pad center"},f.createElement("section",null,f.createElement("h2",null,f.createElement("a",{href:"./"},mt))),f.createElement("section",null,"\xA9 All rights reserved")))}var yt=()=>f.createElement(vt,null);Ce.createRoot(document.getElementById("root")).render(f.createElement(yt));})();
