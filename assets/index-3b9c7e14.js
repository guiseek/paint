var g=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var s=(i,t,e)=>(g(i,t,"read from private field"),e?e.call(i):t.get(i)),l=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},E=(i,t,e,o)=>(g(i,t,"write to private field"),o?o.call(i,e):t.set(i,e),e);var a=(i,t,e)=>(g(i,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();var c,u,h,m,w,f,v,p,x,y,X;class Y{constructor(t){l(this,m);l(this,f);l(this,p);l(this,y);l(this,c,{color:"black",x:0,y:0});l(this,u,!1);l(this,h,void 0);this.canvas=t,E(this,h,t.getContext("2d"))}listen(){this.canvas.addEventListener("mousedown",t=>a(this,m,w).call(this,t),!1),this.canvas.addEventListener("touchstart",t=>a(this,m,w).call(this,t),!1),this.canvas.addEventListener("mouseup",t=>a(this,f,v).call(this,t),!1),this.canvas.addEventListener("mouseout",t=>a(this,f,v).call(this,t),!1),this.canvas.addEventListener("touchend",t=>a(this,f,v).call(this,t),!1),this.canvas.addEventListener("touchcancel",t=>a(this,f,v).call(this,t),!1),this.canvas.addEventListener("mousemove",t=>a(this,p,x).call(this,t),!1),this.canvas.addEventListener("touchmove",t=>a(this,p,x).call(this,t),!1)}}c=new WeakMap,u=new WeakMap,h=new WeakMap,m=new WeakSet,w=function(t){E(this,u,!0),t instanceof TouchEvent&&(s(this,c).x=t.touches[0].clientX,s(this,c).y=t.touches[0].clientY),t instanceof MouseEvent&&(s(this,c).x=t.clientX,s(this,c).y=t.clientY)},f=new WeakSet,v=function(t){if(!s(this,u))return;E(this,u,!1);let e=0,o=0;t instanceof TouchEvent&&(e=t.touches[0].clientX,o=t.touches[0].clientY),t instanceof MouseEvent&&(e=t.clientX,o=t.clientY),a(this,y,X).call(this,s(this,c).x,s(this,c).y,e,o,s(this,c).color,!0)},p=new WeakSet,x=function(t){if(!s(this,u))return;let e=0,o=0;t instanceof TouchEvent&&(e=t.touches[0].clientX,o=t.touches[0].clientY),t instanceof MouseEvent&&(e=t.clientX,o=t.clientY),a(this,y,X).call(this,s(this,c).x,s(this,c).y,e,o,s(this,c).color,!0),s(this,c).x=e,s(this,c).y=o},y=new WeakSet,X=function(t,e,o,n,r,d){s(this,h).beginPath(),s(this,h).moveTo(t,e),s(this,h).lineTo(o,n),s(this,h).strokeStyle=r,s(this,h).lineWidth=2,s(this,h).stroke(),s(this,h).closePath()};const L=document.querySelector("canvas");if(L){const i=()=>{L.width=window.innerWidth,L.height=window.innerHeight};addEventListener("resize",i,!1),i(),new Y(L).listen()}
