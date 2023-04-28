var O=Object.defineProperty;var _=(s,e,t)=>e in s?O(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var m=(s,e,t)=>(_(s,typeof e!="symbol"?e+"":e,t),t),x=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var i=(s,e,t)=>(x(s,e,"read from private field"),t?t.call(s):e.get(s)),h=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},y=(s,e,t,a)=>(x(s,e,"write to private field"),a?a.call(s,t):e.set(s,t),t);var l=(s,e,t)=>(x(s,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();var c,d,r,p,E,u,v,w,L,g,S;class q{constructor(e){h(this,p);h(this,u);h(this,w);h(this,g);h(this,c,{color:"black",stroke:2,x:0,y:0});h(this,d,!1);h(this,r,void 0);this.canvas=e,y(this,r,e.getContext("2d"))}setColor(e){i(this,c).color=e}listen(){this.canvas.addEventListener("mousedown",e=>l(this,p,E).call(this,e),!1),this.canvas.addEventListener("mouseup",e=>l(this,u,v).call(this,e),!1),this.canvas.addEventListener("mouseout",e=>l(this,u,v).call(this,e),!1),this.canvas.addEventListener("touchstart",e=>l(this,p,E).call(this,e),!1),this.canvas.addEventListener("touchend",e=>l(this,u,v).call(this,e),!1),this.canvas.addEventListener("touchcancel",e=>l(this,u,v).call(this,e),!1),this.canvas.addEventListener("mousemove",e=>l(this,w,L).call(this,e),!1),this.canvas.addEventListener("touchmove",e=>l(this,w,L).call(this,e),!1)}}c=new WeakMap,d=new WeakMap,r=new WeakMap,p=new WeakSet,E=function(e){y(this,d,!0);const{clientX:t=0,clientY:a=0}=e instanceof TouchEvent?e.changedTouches[0]:e;i(this,c).x=t,i(this,c).y=a},u=new WeakSet,v=function(e){if(!i(this,d))return;y(this,d,!1);const{clientX:t=0,clientY:a=0}=e instanceof TouchEvent?e.changedTouches[0]:e;l(this,g,S).call(this,i(this,c).x,i(this,c).y,t,a,i(this,c).color,i(this,c).stroke,!1)},w=new WeakSet,L=function(e){if(!i(this,d))return;const{clientX:t=0,clientY:a=0}=e instanceof TouchEvent?e.changedTouches[0]:e;l(this,g,S).call(this,i(this,c).x,i(this,c).y,t,a,i(this,c).color,i(this,c).stroke,!0),i(this,c).x=t,i(this,c).y=a},g=new WeakSet,S=function(e,t,a,o,n,f,H){i(this,r).beginPath(),i(this,r).moveTo(e-60,t),i(this,r).lineTo(a-60,o),i(this,r).strokeStyle=n,i(this,r).lineWidth=f,i(this,r).stroke(),i(this,r).closePath()};const T=document.createElement("template");T.innerHTML=`
	<div></div>
`;const A=(s="#ffffff")=>{const e=document.createElement("style");return e.innerHTML=`
		:host {
			--color: ${s};
			display: block;
			position: relative;
			width: 16px;
			height: 16px;
			background: #000000;
			box-shadow: inset -1px -1px 0px rgba(255, 255, 255, 0.33), inset 1px 1px 0px rgba(255, 255, 255, 0.33);
			cursor: pointer;
		}
		:host > div {
			width: 14px;
			height: 14px;
			box-sizing: border-box;
			background: var(--color);
			
		}
		:host-context([aria-selected="true"]) > div {
			/* Color/Border/Inner */
			border-width: 1px 0px 0px 1px;
			border-style: solid;
			border-color: #111111;
		}
	`,e};class k extends HTMLElement{constructor(){super(...arguments);m(this,"_value","#ffffff")}get value(){return this._value}set value(t){this.style.setProperty("--color",t),this._value=t}connectedCallback(){const t=this.attachShadow({mode:"open"});t.appendChild(A(this.value)),t.appendChild(T.content.cloneNode(!0)),this.onclick=()=>this.change()}change(){this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}toggleSelected(){this.ariaSelected=this.ariaSelected==="true"?"false":"true"}attributeChangedCallback(t,a,o){t==="value"&&o!==a&&(this.value=o)}}m(k,"observedAttributes",["value"]);customElements.define("color-swatch-item",k);const P=document.createElement("template");P.innerHTML=`
	<color-swatch-item value="black" aria-selected="true"></color-swatch-item>
	<color-swatch-item value="white" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="red" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="yellow" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="green" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="cyan" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="blue" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="hotpink" aria-selected="false"></color-swatch-item>
`;const N=(s="#ffffff")=>{const e=document.createElement("style");return e.innerHTML=`
		:host {
			--color: ${s};
			display: flex;
			flex-flow: row wrap;
			column-gap: 4px;
		}
	`,e};class M extends HTMLElement{constructor(){super(...arguments);m(this,"_value","black")}get value(){return this._value}set value(t){this.style.setProperty("--color",t),this._value=t}connectedCallback(){const t=this.attachShadow({mode:"open"});t.appendChild(N(this.value)),t.appendChild(P.content.cloneNode(!0)),t.querySelectorAll("color-swatch-item").forEach(o=>{o.onchange=({detail:n})=>{this.change(n),this.unSelectItems(),o.toggleSelected()}})}change(t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t}))}unSelectItems(){var t;(t=this.shadowRoot)==null||t.querySelectorAll("color-swatch-item").forEach(a=>{a.ariaSelected="false"})}attributeChangedCallback(t,a,o){t==="value"&&o!==a&&(this.value=o)}}m(M,"observedAttributes",["value"]);customElements.define("color-swatch",M);const b=document.querySelector("canvas"),C=document.querySelector("color-swatch");if(b&&C){const s=()=>{b.width=window.innerWidth-60,b.height=window.innerHeight-50};addEventListener("resize",s,!1),s();const e=new q(b);e.listen(),C.onchange=({detail:t})=>{e.setColor(t)}}
