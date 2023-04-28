var Y=Object.defineProperty;var H=(s,e,t)=>e in s?Y(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var v=(s,e,t)=>(H(s,typeof e!="symbol"?e+"":e,t),t),E=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var i=(s,e,t)=>(E(s,e,"read from private field"),t?t.call(s):e.get(s)),h=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},y=(s,e,t,c)=>(E(s,e,"write to private field"),c?c.call(s,t):e.set(s,t),t);var l=(s,e,t)=>(E(s,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var n,d,r,p,x,u,m,w,L,g,S;class O{constructor(e){h(this,p);h(this,u);h(this,w);h(this,g);h(this,n,{color:"black",stroke:2,x:0,y:0});h(this,d,!1);h(this,r,void 0);this.canvas=e,y(this,r,e.getContext("2d"))}setColor(e){i(this,n).color=e}listen(){this.canvas.addEventListener("mousedown",e=>l(this,p,x).call(this,e),!1),this.canvas.addEventListener("touchstart",e=>l(this,p,x).call(this,e),!1),this.canvas.addEventListener("mouseup",e=>l(this,u,m).call(this,e),!1),this.canvas.addEventListener("mouseout",e=>l(this,u,m).call(this,e),!1),this.canvas.addEventListener("touchend",e=>l(this,u,m).call(this,e),!1),this.canvas.addEventListener("touchcancel",e=>l(this,u,m).call(this,e),!1),this.canvas.addEventListener("mousemove",e=>l(this,w,L).call(this,e),!1),this.canvas.addEventListener("touchmove",e=>l(this,w,L).call(this,e),!1)}}n=new WeakMap,d=new WeakMap,r=new WeakMap,p=new WeakSet,x=function(e){y(this,d,!0),e instanceof TouchEvent&&(i(this,n).x=e.touches[0].clientX,i(this,n).y=e.touches[0].clientY),e instanceof MouseEvent&&(i(this,n).x=e.clientX,i(this,n).y=e.clientY)},u=new WeakSet,m=function(e){if(!i(this,d))return;y(this,d,!1);let t=0,c=0;e instanceof TouchEvent&&(t=e.touches[0].clientX,c=e.touches[0].clientY),e instanceof MouseEvent&&(t=e.clientX,c=e.clientY),l(this,g,S).call(this,i(this,n).x,i(this,n).y,t,c,i(this,n).color,i(this,n).stroke,!0)},w=new WeakSet,L=function(e){if(!i(this,d))return;let t=0,c=0;e instanceof TouchEvent&&(t=e.touches[0].clientX,c=e.touches[0].clientY),e instanceof MouseEvent&&(t=e.clientX,c=e.clientY),l(this,g,S).call(this,i(this,n).x,i(this,n).y,t,c,i(this,n).color,i(this,n).stroke,!0),i(this,n).x=t,i(this,n).y=c},g=new WeakSet,S=function(e,t,c,o,a,f,X){i(this,r).beginPath(),i(this,r).moveTo(e-60,t),i(this,r).lineTo(c-60,o),i(this,r).strokeStyle=a,i(this,r).lineWidth=f,i(this,r).stroke(),i(this,r).closePath()};const k=document.createElement("template");k.innerHTML=`
	<div></div>
`;const _=(s="#ffffff")=>{const e=document.createElement("style");return e.innerHTML=`
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
	`,e};class M extends HTMLElement{constructor(){super(...arguments);v(this,"_value","#ffffff")}get value(){return this._value}set value(t){this.style.setProperty("--color",t),this._value=t}connectedCallback(){const t=this.attachShadow({mode:"open"});t.appendChild(_(this.value)),t.appendChild(k.content.cloneNode(!0)),this.onclick=()=>this.change()}change(){this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}toggleSelected(){this.ariaSelected=this.ariaSelected==="true"?"false":"true"}attributeChangedCallback(t,c,o){t==="value"&&o!==c&&(this.value=o)}}v(M,"observedAttributes",["value"]);customElements.define("color-swatch-item",M);const T=document.createElement("template");T.innerHTML=`
	<color-swatch-item value="black" aria-selected="true"></color-swatch-item>
	<color-swatch-item value="white" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="red" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="yellow" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="green" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="cyan" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="blue" aria-selected="false"></color-swatch-item>
	<color-swatch-item value="hotpink" aria-selected="false"></color-swatch-item>
`;const q=(s="#ffffff")=>{const e=document.createElement("style");return e.innerHTML=`
		:host {
			--color: ${s};
			display: flex;
			flex-flow: row wrap;
			column-gap: 4px;
		}
	`,e};class P extends HTMLElement{constructor(){super(...arguments);v(this,"_value","black")}get value(){return this._value}set value(t){this.style.setProperty("--color",t),this._value=t}connectedCallback(){const t=this.attachShadow({mode:"open"});t.appendChild(q(this.value)),t.appendChild(T.content.cloneNode(!0)),t.querySelectorAll("color-swatch-item").forEach(o=>{o.onchange=({detail:a})=>{this.change(a),this.unSelectItems(),o.toggleSelected()}})}change(t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t}))}unSelectItems(){var t;(t=this.shadowRoot)==null||t.querySelectorAll("color-swatch-item").forEach(c=>{c.ariaSelected="false"})}attributeChangedCallback(t,c,o){t==="value"&&o!==c&&(this.value=o)}}v(P,"observedAttributes",["value"]);customElements.define("color-swatch",P);const b=document.querySelector("canvas"),C=document.querySelector("color-swatch");if(b&&C){const s=()=>{b.width=window.innerWidth-60,b.height=window.innerHeight-50};addEventListener("resize",s,!1),s();const e=new O(b);e.listen(),C.onchange=({detail:t})=>{e.setColor(t)}}
