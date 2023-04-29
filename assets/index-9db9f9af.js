var $=Object.defineProperty;var z=(i,o,e)=>o in i?$(i,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[o]=e;var r=(i,o,e)=>(z(i,typeof o!="symbol"?o+"":o,e),e),L=(i,o,e)=>{if(!o.has(i))throw TypeError("Cannot "+e)};var t=(i,o,e)=>(L(i,o,"read from private field"),e?e.call(i):o.get(i)),l=(i,o,e)=>{if(o.has(i))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(i):o.set(i,e)},C=(i,o,e,n)=>(L(i,o,"write to private field"),n?n.call(i,e):o.set(i,e),e);var T=(i,o,e)=>(L(i,o,"access private method"),e);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const v of a.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&n(v)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const A=document.createElement("template");A.innerHTML=`
	<div></div>
`;const B=(i="#ffffff")=>{const o=document.createElement("style");return o.innerHTML=`
		:host {
			--color: ${i};
			display: block;
			position: relative;
			width: 24px;
			height: 24px;
			background: #000000;
			box-shadow: inset -2px -2px 0px rgba(255, 255, 255, 0.33), inset 2px 2px 0px rgba(255, 255, 255, 0.33);
			cursor: pointer;
		}
		:host > div {
			width: 22px;
			height: 22px;
			box-sizing: border-box;
			background: var(--color);
			
		}
		:host-context([aria-selected="true"]) > div {
			/* Color/Border/Inner */
			border-width: 2px 0px 0px 2px;
			border-style: solid;
			border-color: rgba(17, 17, 17, 0.66);
		}
	`,o};class P extends HTMLElement{constructor(){super(...arguments);r(this,"_value","#ffffff")}get value(){return this._value}set value(e){this.style.setProperty("--color",e),this._value=e}connectedCallback(){const e=this.attachShadow({mode:"open"});e.appendChild(B(this.value)),e.appendChild(A.content.cloneNode(!0)),this.onclick=()=>this.change()}change(){this.dispatchEvent(new CustomEvent("change",{detail:this.value}))}toggleSelected(){this.ariaSelected=this.ariaSelected==="true"?"false":"true"}attributeChangedCallback(e,n,s){e==="value"&&s!==n&&(this.value=s)}}r(P,"observedAttributes",["value"]);customElements.define("color-item",P);const N=document.createElement("template");N.innerHTML=`
	<color-item value="black" aria-selected="true"></color-item>
	<color-item value="white" aria-selected="false"></color-item>
	<color-item value="red" aria-selected="false"></color-item>
	<color-item value="yellow" aria-selected="false"></color-item>
	<color-item value="green" aria-selected="false"></color-item>
	<color-item value="cyan" aria-selected="false"></color-item>
	<color-item value="blue" aria-selected="false"></color-item>
	<color-item value="hotpink" aria-selected="false"></color-item>
`;const D=(i="#ffffff")=>{const o=document.createElement("style");return o.innerHTML=`
		:host {
			--color: ${i};
			display: flex;
			flex-flow: row wrap;
			column-gap: 4px;
		}
	`,o};class O extends HTMLElement{constructor(){super(...arguments);r(this,"_value","black")}get value(){return this._value}set value(e){this.style.setProperty("--color",e),this._value=e}connectedCallback(){const e=this.attachShadow({mode:"open"});e.appendChild(D(this.value)),e.appendChild(N.content.cloneNode(!0));const n=e.querySelectorAll("color-item");n.forEach(s=>{s.onchange=({detail:a})=>{this.value=a,n.forEach(v=>v.ariaSelected="false"),this.dispatchEvent(new CustomEvent("change",{detail:a})),s.toggleSelected()}})}attributeChangedCallback(e,n,s){e==="value"&&s!==n&&(this.value=s)}}r(O,"observedAttributes",["value"]);customElements.define("color-swatch",O);class q{constructor(o){r(this,"drawing",!1);this.context=o}setConfig(o){this.config={...this.config,...o}}}const R=document.createElement("template");R.innerHTML=`
  <button is="tool-button" value="brush">
    <span is="tool-symbol">brush</span>
  </button>
  <!--<button is="tool-button" value="fill">
    <span is="tool-symbol">format_color_fill</span>
  </button>-->
  <button is="tool-button" value="rect">
    <span is="tool-symbol">rectangle</span>
  </button>
`;const I=()=>{const i=document.createElement("style");return i.innerHTML=`
    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");

		:host {
			display: flex;
			flex-flow: row wrap;
      justify-content: center;
			row-gap: 8px;
		}

    .material-symbols-outlined {
      display: flex;
      font-variation-settings: 'FILL' 0, 'wght' 0, 'GRAD' 0, 'opsz' NaN;
    }
    
    button.tool-button {
      padding: 4px;
      background-color: transparent;
      border-color: transparent;
      border-radius: 4px;
      border-width: 1px;
      cursor: pointer;
    }

    button.tool-button:hover {
      background-color: #fffef890;
    }
  
    button.tool-button[aria-selected='true'] {
      background-color: #fffef8;
      border: 1px solid #929387;
    }
  
	`,i};class X extends HTMLElement{constructor(){super(...arguments);r(this,"_value","rect")}get value(){return this._value}set value(e){this._value=e}connectedCallback(){const e=this.attachShadow({mode:"open"});e.appendChild(I()),e.appendChild(R.content.cloneNode(!0));const n=e.querySelectorAll('button[is="tool-button"]');n.forEach(s=>{s.value===this.value&&this.select(s),s.onselect=()=>{n.forEach(a=>a.ariaSelected="false"),this.select(s)}})}select(e){const n=e.value;this.value=n,this.dispatchEvent(new CustomEvent("select",{detail:n})),e.toggleSelected()}attributeChangedCallback(e,n,s){e==="value"&&s!==n&&(this.value=s)}}r(X,"observedAttributes",["value"]);customElements.define("tool-box",X);var f,m,p,h,y,S;class k extends q{constructor(){super(...arguments);l(this,y);l(this,f,{x:0,y:0});r(this,"config",{color:"black",stroke:2});l(this,m,e=>{this.drawing=!0;const{clientX:n=0,clientY:s=0}=e instanceof TouchEvent?e.changedTouches[0]:e;t(this,f).x=n,t(this,f).y=s});l(this,p,e=>{if(!this.drawing)return;const{clientX:n=0,clientY:s=0}=e instanceof TouchEvent?e.changedTouches[0]:e;T(this,y,S).call(this,n,s,!0),t(this,f).x=n,t(this,f).y=s});l(this,h,e=>{if(!this.drawing)return;this.drawing=!1;const{clientX:n=0,clientY:s=0}=e instanceof TouchEvent?e.changedTouches[0]:e;T(this,y,S).call(this,n,s)})}subscribe(){const{canvas:e}=this.context;e.addEventListener("mousedown",t(this,m),!1),e.addEventListener("mouseup",t(this,h),!1),e.addEventListener("mouseout",t(this,h),!1),e.addEventListener("touchstart",t(this,m),!1),e.addEventListener("touchend",t(this,h),!1),e.addEventListener("touchcancel",t(this,h),!1),e.addEventListener("mousemove",t(this,p),!1),e.addEventListener("touchmove",t(this,p),!1)}unsubscribe(){const{canvas:e}=this.context;e.removeEventListener("mousedown",t(this,m),!1),e.removeEventListener("mouseup",t(this,h),!1),e.removeEventListener("mouseout",t(this,h),!1),e.removeEventListener("touchstart",t(this,m),!1),e.removeEventListener("touchend",t(this,h),!1),e.removeEventListener("touchcancel",t(this,h),!1),e.removeEventListener("mousemove",t(this,p),!1),e.removeEventListener("touchmove",t(this,p),!1)}}f=new WeakMap,m=new WeakMap,p=new WeakMap,h=new WeakMap,y=new WeakSet,S=function(e,n,s){const{x:a,y:v}=t(this,f);this.context.beginPath(),this.context.moveTo(a-60,v),this.context.lineTo(e-60,n),this.context.lineWidth=this.config.stroke,this.context.strokeStyle=this.config.color,this.context.stroke(),this.context.closePath()};class Y extends HTMLButtonElement{constructor(){super(...arguments);r(this,"value")}connectedCallback(){this.classList.add("tool-button"),this.onclick=()=>this.select()}select(){this.dispatchEvent(new CustomEvent("select",{detail:this.value}))}toggleSelected(){this.ariaSelected=this.ariaSelected==="true"?"false":"true"}attributeChangedCallback(e,n,s){e==="value"&&s!==n&&(this.value=s)}}r(Y,"observedAttributes",["value"]);customElements.define("tool-button",Y,{extends:"button"});var c,d,b,g,u;class F extends q{constructor(){super(...arguments);l(this,c,{x:0,y:0});l(this,d,{x:0,y:0});r(this,"config",{color:"black",stroke:2});l(this,b,e=>{this.drawing=!0;const{clientX:n=0,clientY:s=0}=e instanceof TouchEvent?e.changedTouches[0]:e;t(this,c).x=n-this.context.canvas.offsetLeft,t(this,c).y=s-this.context.canvas.offsetTop});l(this,g,e=>{if(!this.drawing)return;const{clientX:n=0,clientY:s=0}=e instanceof TouchEvent?e.changedTouches[0]:e;t(this,d).x=n-this.context.canvas.offsetLeft,t(this,d).y=s-this.context.canvas.offsetTop,this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.context.lineWidth=this.config.stroke,this.context.strokeStyle=this.config.color,this.context.fillStyle="white",this.context.strokeRect(t(this,c).x,t(this,c).y,t(this,d).x-t(this,c).x,t(this,d).y-t(this,c).y)});l(this,u,e=>{if(!this.drawing)return;this.drawing=!1;const{clientX:n=0,clientY:s=0}=e instanceof TouchEvent?e.changedTouches[0]:e;t(this,d).x=n-this.context.canvas.offsetLeft,t(this,d).y=s-this.context.canvas.offsetTop,this.context.strokeRect(t(this,c).x,t(this,c).y,t(this,d).x-t(this,c).x,t(this,d).y-t(this,c).y)})}subscribe(){const{canvas:e}=this.context;e.addEventListener("mousedown",t(this,b),!1),e.addEventListener("mouseup",t(this,u),!1),e.addEventListener("mouseout",t(this,u),!1),e.addEventListener("touchstart",t(this,b),!1),e.addEventListener("touchend",t(this,u),!1),e.addEventListener("touchcancel",t(this,u),!1),e.addEventListener("mousemove",t(this,g),!1),e.addEventListener("touchmove",t(this,g),!1)}unsubscribe(){const{canvas:e}=this.context;e.removeEventListener("mousedown",t(this,b),!1),e.removeEventListener("mouseup",t(this,u),!1),e.removeEventListener("mouseout",t(this,u),!1),e.removeEventListener("touchstart",t(this,b),!1),e.removeEventListener("touchend",t(this,u),!1),e.removeEventListener("touchcancel",t(this,u),!1),e.removeEventListener("mousemove",t(this,g),!1),e.removeEventListener("touchmove",t(this,g),!1)}}c=new WeakMap,d=new WeakMap,b=new WeakMap,g=new WeakMap,u=new WeakMap;class W extends HTMLSpanElement{connectedCallback(){this.classList.add("material-symbols-outlined")}}customElements.define("tool-symbol",W,{extends:"span"});var x,E,w;class j extends HTMLCanvasElement{constructor(){super(...arguments);l(this,x,void 0);l(this,E,void 0);l(this,w,()=>{this.width=window.innerWidth-60,this.height=window.innerHeight-50})}connectedCallback(){this.classList.add("paint-canvas");const e=this.getContext("2d");e&&(C(this,x,{brush:new k(e),fill:new k(e),rect:new F(e)}),this.dispatchEvent(new CustomEvent("load"))),window.addEventListener("resize",t(this,w),!1),t(this,w).call(this)}select(e){Object.values(t(this,x)).forEach(n=>n.unsubscribe()),C(this,E,t(this,x)[e]),t(this,E).subscribe()}setConfig(e){t(this,E).setConfig(e)}}x=new WeakMap,E=new WeakMap,w=new WeakMap;customElements.define("paint-canvas",j,{extends:"canvas"});const M=document.querySelector("main"),H=document.querySelector("aside"),_=document.querySelector("footer");customElements.whenDefined("paint-canvas").then(i=>{const o=new i;if(M){const e=document.createElement("tool-box"),n=document.createElement("color-swatch");e.onselect=({detail:s})=>{o.select(s)},o.onload=()=>{H&&_&&(H.appendChild(e),_.appendChild(n),n.onchange=({detail:s})=>{o.setConfig({color:s})})},M.appendChild(o)}});
