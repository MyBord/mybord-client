import React from 'react';

/* eslint-disable */
const SampleIcon = ({ height = 14, width = 14 }) => (
  <svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <title>menu to arrow right 2</title>
    <g fill="#111111" stroke="#111111" strokeLinecap="round" strokeWidth="2">
      <g className="nc-interact_menu-arrow-2-o-32" transform="rotate(180 16 16)">
        <path d="M2 9h28" fill="none" stroke="#111111" strokeDasharray="28 28" strokeLinecap="round" transform="translate(0 0) rotate(0 2 9)"/>
        <path d="M2 23h28" fill="none" stroke="#111111" strokeDasharray="28 28" strokeLinecap="round" transform="translate(0 0) rotate(0 2 23)"/>
      </g>
      {/*<script>!function(){function t(e){var i=e.parentNode;if("svg"!==i.tagName)i=t(i);return i;}function e(t,e,i,n){return 1&gt;(t/=n/2)?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e}function i(t){this.element=t,this.topLine=this.element.getElementsByTagName("path")[0],this.bottomLine=this.element.getElementsByTagName("path")[1],this.lineLength=this.bottomLine.getTotalLength(),this.time={start:null,total:150},this.status={interacted:!1,animating:!1},this.init()}if(!window.requestAnimationFrame){var n=null;window.requestAnimationFrame=function(t,e){var i=(new Date).getTime();n||(n=i);var s=Math.max(0,16-(i-n)),a=window.setTimeout(function(){t(i+s)},s);return n=i+s,a}}i.prototype.init=function(){var t=this;this.element.addEventListener("click",function(){t.status.animating||(t.status.animating=!0,window.requestAnimationFrame(t.triggerAnimation.bind(t)))})},i.prototype.triggerAnimation=function(t){var e=this.getProgress(t),i=this.status.interacted?this.time.total-e:e;this.animateIcon(i),this.checkProgress(e)},i.prototype.getProgress=function(t){return this.time.start||(this.time.start=t),t-this.time.start},i.prototype.checkProgress=function(t){var e=this;this.time.total&gt;t?window.requestAnimationFrame(e.triggerAnimation.bind(e)):(this.status={interacted:!this.status.interacted,animating:!1},this.time.start=null)},i.prototype.animateIcon=function(t){if(t&gt;this.time.total)(t=this.time.total);if(0&gt;t)(t=0);var i=e(t,0,1,this.time.total).toFixed(2);this.topLine.setAttribute("transform","translate("+7*i+" "+7*i+") rotate("+45*-i+" 2 9)"),this.bottomLine.setAttribute("transform","translate("+7*i+" "+7*-i+") rotate("+45*i+" 2 23)"),this.topLine.setAttribute("stroke-dashoffset",i*this.lineLength*.5),this.bottomLine.setAttribute("stroke-dashoffset",i*this.lineLength*.5)};var s=document.getElementsByClassName("nc-interact_menu-arrow-2-o-32");if(s)for(var a=0;s.length&gt;a;a++)new i(t(s[a]))}();</script>*/}
    </g>
  </svg>
);

export default SampleIcon;
