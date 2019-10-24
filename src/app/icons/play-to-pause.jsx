const Foo = () => (
	<svg height="60" width="60" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
		<title>play to pause</title>
		<g fill={this.props.secondaryfill} stroke={this.props.secondaryfill} strokeLinecap="round" strokeWidth={this.props.strokewidth}>
			<g className="nc-interact_play-pause-o-32">
				<rect className="nc-pause" height="26" width="7" fill="none" opacity="1" transform="translate(0 0)" x="20" y="3"/>
				<polygon fill="none" points="5 29 6 29 12 29 12 3 5 3 5 29" stroke={this.props.fill} data-end="5 29 6 29 12 29 12 3 5 3 5 29"/>
			</g>
			<script>!function(){function t(e){var i=e.parentNode;if("svg"!==i.tagName)i=t(i);return i;}function e(t,e,i,a){return 1&gt;(t/=a/2)?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e}function i(t){this.element=t,this.play=this.element.getElementsByTagName("polygon")[0],this.play.start=this.play.getAttribute("points").replace(/,/g," ").split(" ").map(Number),this.play.end=this.play.getAttribute("data-end").replace(/,/g," ").split(" ").map(Number),this.pauseRect=this.element.querySelectorAll(".nc-pause")[0],this.time={start:null,total:200},this.status={interacted:!1,animating:!1},this.init()}if(!window.requestAnimationFrame){var a=null;window.requestAnimationFrame=function(t,e){var i=(new Date).getTime();a||(a=i);var n=Math.max(0,16-(i-a)),s=window.setTimeout(function(){t(i+n)},n);return a=i+n,s}}i.prototype.init=function(){var t=this;this.element.addEventListener("click",function(){t.status.animating||(t.status.animating=!0,window.requestAnimationFrame(t.triggerAnimation.bind(t)))})},i.prototype.triggerAnimation=function(t){var e=this.getProgress(t),i=this.status.interacted?this.time.total-e:e;this.animateIcon(i),this.checkProgress(e)},i.prototype.getProgress=function(t){return this.time.start||(this.time.start=t),t-this.time.start},i.prototype.checkProgress=function(t){var e=this;this.time.total&gt;t?window.requestAnimationFrame(e.triggerAnimation.bind(e)):(this.status={interacted:!this.status.interacted,animating:!1},this.time.start=null)},i.prototype.animateIcon=function(t){if(t&gt;this.time.total)(t=this.time.total);if(0&gt;t)(t=0);var i=e(t,0,1,this.time.total),a=[];this.pauseRect.setAttribute("transform","translate("+16*(1-i)+" 0)"),this.pauseRect.setAttribute("opacity",i);for(var n=0;this.play.start.length&gt;n;n++)a[n]=this.play.start[n]+(this.play.end[n]-this.play.start[n])*i;this.play.setAttribute("points",a.join(" "))};var n=document.getElementsByClassName("nc-interact_play-pause-o-32");if(n)for(var s=0;n.length&gt;s;s++)new i(t(n[s]))}();</script>
		</g>
	</svg>
);

export default Foo;
