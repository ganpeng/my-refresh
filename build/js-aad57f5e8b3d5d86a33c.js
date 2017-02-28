webpackJsonp([1],{0:function(t,i,e){"use strict";e(60);var s=e(65);e(55),e(56);var n=document.getElementById("app"),h='<div id="test"></div>';n.innerHTML=h;var a=document.getElementById("test");s(a),a.rotateZ=45,a.translateX=100,a.scale=1.5},55:function(t,i,e){!function(){function i(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function e(t,i){return t.x*i.x+t.y*i.y}function s(t,s){var n=i(t)*i(s);if(0===n)return 0;var h=e(t,s)/n;return h>1&&(h=1),Math.acos(h)}function n(t,i){return t.x*i.y-i.x*t.y}function h(t,i){var e=s(t,i);return n(t,i)>0&&(e*=-1),180*e/Math.PI}function a(t,i){var e=new o(t);return e.add(i),e}var o=function(t){this.handlers=[],this.el=t};o.prototype.add=function(t){this.handlers.push(t)},o.prototype.del=function(t){t||(this.handlers=[]);for(var i=this.handlers.length;i>=0;i--)this.handlers[i]===t&&this.handlers.splice(i,1)},o.prototype.dispatch=function(){for(var t=0,i=this.handlers.length;t<i;t++){var e=this.handlers[t];"function"==typeof e&&e.apply(this.el,arguments)}};var r=function(t,i){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.scale=1,this.isDoubleTap=!1;var e=function(){};this.rotate=a(this.element,i.rotate||e),this.touchStart=a(this.element,i.touchStart||e),this.multipointStart=a(this.element,i.multipointStart||e),this.multipointEnd=a(this.element,i.multipointEnd||e),this.pinch=a(this.element,i.pinch||e),this.swipe=a(this.element,i.swipe||e),this.tap=a(this.element,i.tap||e),this.doubleTap=a(this.element,i.doubleTap||e),this.longTap=a(this.element,i.longTap||e),this.singleTap=a(this.element,i.singleTap||e),this.pressMove=a(this.element,i.pressMove||e),this.touchMove=a(this.element,i.touchMove||e),this.touchEnd=a(this.element,i.touchEnd||e),this.touchCancel=a(this.element,i.touchCancel||e),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};r.prototype={start:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var e=this.preV,s=t.touches.length;if(s>1){this._cancelLongTap(),this._cancelSingleTap();var n={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};e.x=n.x,e.y=n.y,this.pinchStartLen=i(e),this.multipointStart.dispatch(t)}this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t)}.bind(this),750)}},move:function(t){if(t.touches){var e=this.preV,s=t.touches.length,n=t.touches[0].pageX,a=t.touches[0].pageY;if(this.isDoubleTap=!1,s>1){var o={x:t.touches[1].pageX-n,y:t.touches[1].pageY-a};null!==e.x&&(this.pinchStartLen>0&&(t.scale=i(o)/this.pinchStartLen,this.pinch.dispatch(t)),t.angle=h(o,e),this.rotate.dispatch(t)),e.x=o.x,e.y=o.y}else null!==this.x2?(t.deltaX=n-this.x2,t.deltaY=a-this.y2):(t.deltaX=0,t.deltaY=0),this.pressMove.dispatch(t);this.touchMove.dispatch(t),this._cancelLongTap(),this.x2=n,this.y2=a,s>1&&t.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var i=this;t.touches.length<2&&this.multipointEnd.dispatch(t),this.touchEnd.dispatch(t),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){i.swipe.dispatch(t)},0)):this.tapTimeout=setTimeout(function(){i.tap.dispatch(t),i.isDoubleTap?(i.doubleTap.dispatch(t),clearTimeout(i.singleTapTimeout),i.isDoubleTap=!1):i.singleTapTimeout=setTimeout(function(){i.singleTap.dispatch(t)},250)},0),this.preV.x=0,this.preV.y=0,this.scale=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancel:function(t){clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout),this.touchCancel.dispatch(t)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,i,e,s){return Math.abs(t-i)>=Math.abs(e-s)?t-i>0?"Left":"Right":e-s>0?"Up":"Down"},on:function(t,i){this[t]&&this[t].add(i)},off:function(t,i){this[t]&&this[t].del(i)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.scale=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=null,null}},t.exports=r}()},56:function(t,i,e){!function(){"use strict";Date.now||(Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],i=0;i<t.length&&!window.requestAnimationFrame;++i){var e=t[i];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var s=0;window.requestAnimationFrame=function(t){var i=Date.now(),e=Math.max(s+16,i);return setTimeout(function(){t(s=e)},e-i)},window.cancelAnimationFrame=clearTimeout}}(),function(){function i(t,i,e){t.addEventListener(i,e,!1)}function e(t){return Math.sqrt(1-Math.pow(t-1,2))}function s(t){return 1-Math.sqrt(1-t*t)}function n(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1}var h=function(t){this.element="string"==typeof t.touch?document.querySelector(t.touch):t.touch,this.target=this._getValue(t.target,this.element),this.vertical=this._getValue(t.vertical,!0),this.property=t.property,this.tickID=0,this.initialVaule=this._getValue(t.initialVaule,this.target[this.property]),this.target[this.property]=this.initialVaule,this.fixed=this._getValue(t.fixed,!1),this.sensitivity=this._getValue(t.sensitivity,1),this.moveFactor=this._getValue(t.moveFactor,1),this.factor=this._getValue(t.factor,1),this.outFactor=this._getValue(t.outFactor,.3),this.min=t.min,this.max=t.max,this.deceleration=6e-4,this.maxRegion=this._getValue(t.maxRegion,600),this.springMaxRegion=this._getValue(t.springMaxRegion,60),this.maxSpeed=t.maxSpeed,this.hasMaxSpeed=!(void 0===this.maxSpeed),this.lockDirection=this._getValue(t.lockDirection,!0);var e=function(){};if(this.change=t.change||e,this.touchEnd=t.touchEnd||e,this.touchStart=t.touchStart||e,this.touchMove=t.touchMove||e,this.touchCancel=t.touchCancel||e,this.reboundEnd=t.reboundEnd||e,this.animationEnd=t.animationEnd||e,this.correctionEnd=t.correctionEnd||e,this.tap=t.tap||e,this.pressMove=t.pressMove||e,this.preventDefault=this._getValue(t.preventDefault,!0),this.preventDefaultException={tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},this.hasMin=!(void 0===this.min),this.hasMax=!(void 0===this.max),this.hasMin&&this.hasMax&&this.min>this.max)throw"the min value can't be greater than the max value.";this.isTouchStart=!1,this.step=t.step,this.inertia=this._getValue(t.inertia,!0),this._calculateIndex(),this.eventTarget=window,t.bindSelf&&(this.eventTarget=this.element),this._moveHandler=this._move.bind(this),i(this.element,"touchstart",this._start.bind(this)),i(this.eventTarget,"touchend",this._end.bind(this)),i(this.eventTarget,"touchcancel",this._cancel.bind(this)),this.eventTarget.addEventListener("touchmove",this._moveHandler,{passive:!1,capture:!1}),this.x1=this.x2=this.y1=this.y2=null};h.prototype={_getValue:function(t,i){return void 0===t?i:t},_start:function(t){this.isTouchStart=!0,this.touchStart.call(this,t,this.target[this.property]),cancelAnimationFrame(this.tickID),this._calculateIndex(),this.startTime=(new Date).getTime(),this.x1=this.preX=t.touches[0].pageX,this.y1=this.preY=t.touches[0].pageY,this.start=this.vertical?this.preY:this.preX,this._firstTouchMove=!0,this._preventMove=!1},_move:function(t){if(this.isTouchStart){var i=t.touches.length,e=t.touches[0].pageX,s=t.touches[0].pageY;if(this._firstTouchMove&&this.lockDirection){var h=Math.abs(e-this.x1)-Math.abs(s-this.y1);h>0&&this.vertical?this._preventMove=!0:h<0&&!this.vertical&&(this._preventMove=!0),this._firstTouchMove=!1}if(!this._preventMove){var a=(this.vertical?s-this.preY:e-this.preX)*this.sensitivity,o=this.moveFactor;this.hasMax&&this.target[this.property]>this.max&&a>0?o=this.outFactor:this.hasMin&&this.target[this.property]<this.min&&a<0&&(o=this.outFactor),a*=o,this.preX=e,this.preY=s,this.fixed||(this.target[this.property]+=a),this.change.call(this,this.target[this.property]);var r=(new Date).getTime();r-this.startTime>300&&(this.startTime=r,this.start=this.vertical?this.preY:this.preX),this.touchMove.call(this,t,this.target[this.property])}this.preventDefault&&!n(t.target,this.preventDefaultException)&&t.preventDefault(),1===i&&(null!==this.x2?(t.deltaX=e-this.x2,t.deltaY=s-this.y2):(t.deltaX=0,t.deltaY=0),this.pressMove.call(this,t,this.target[this.property])),this.x2=e,this.y2=s}},_cancel:function(t){var i=this.target[this.property];this.touchCancel.call(this,t,i),this._end(t)},to:function(t,i,s){this._to(t,this._getValue(i,600),s||e,this.change,function(t){this._calculateIndex(),this.reboundEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this))},_calculateIndex:function(){this.hasMax&&this.hasMin&&(this.currentPage=Math.round((this.max-this.target[this.property])/this.step))},_end:function(t){if(this.isTouchStart){this.isTouchStart=!1;var i=this,h=this.target[this.property],a=Math.abs(t.changedTouches[0].pageX-this.x1)<30&&Math.abs(t.changedTouches[0].pageY-this.y1)<30;if(a&&this.tap.call(this,t,h),this.touchEnd.call(this,t,h,this.currentPage)===!1)return;if(this.hasMax&&h>this.max)this._to(this.max,200,e,this.change,function(t){this.reboundEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this));else if(this.hasMin&&h<this.min)this._to(this.min,200,e,this.change,function(t){this.reboundEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this));else if(!this.inertia||a||this._preventMove)i._correction();else{var o=(new Date).getTime()-this.startTime;if(o<300){var r=((this.vertical?t.changedTouches[0].pageY:t.changedTouches[0].pageX)-this.start)*this.sensitivity,l=Math.abs(r)/o,c=this.factor*l;this.hasMaxSpeed&&c>this.maxSpeed&&(c=this.maxSpeed);var u=h+c*c/(2*this.deceleration)*(r<0?-1:1),p=1;u<this.min?u<this.min-this.maxRegion?(p=s((h-this.min+this.springMaxRegion)/(h-u)),u=this.min-this.springMaxRegion):(p=s((h-this.min+this.springMaxRegion*(this.min-u)/this.maxRegion)/(h-u)),u=this.min-this.springMaxRegion*(this.min-u)/this.maxRegion):u>this.max&&(u>this.max+this.maxRegion?(p=s((this.max+this.springMaxRegion-h)/(u-h)),u=this.max+this.springMaxRegion):(p=s((this.max+this.springMaxRegion*(u-this.max)/this.maxRegion-h)/(u-h)),u=this.max+this.springMaxRegion*(u-this.max)/this.maxRegion));var d=Math.round(l/i.deceleration)*p;i._to(Math.round(u),d,e,i.change,function(t){i.hasMax&&i.target[i.property]>i.max?(cancelAnimationFrame(i.tickID),i._to(i.max,600,e,i.change,i.animationEnd)):i.hasMin&&i.target[i.property]<i.min?(cancelAnimationFrame(i.tickID),i._to(i.min,600,e,i.change,i.animationEnd)):i._correction(),i.change.call(this,t)})}else i._correction()}this.preventDefault&&!n(t.target,this.preventDefaultException)&&t.preventDefault()}this.x1=this.x2=this.y1=this.y2=null},_to:function(t,i,e,s,n){if(!this.fixed){var h=this.target,a=this.property,o=h[a],r=t-o,l=new Date,c=this,u=function(){var p=new Date-l;return p>=i?(h[a]=t,s&&s.call(c,t),void(n&&n.call(c,t))):(h[a]=r*e(p/i)+o,c.tickID=requestAnimationFrame(u),void(s&&s.call(c,h[a])))};u()}},_correction:function(){if(void 0!==this.step){var t=this.target,i=this.property,s=t[i],n=Math.floor(Math.abs(s/this.step)),h=s%this.step;Math.abs(h)>this.step/2?this._to((s<0?-1:1)*(n+1)*this.step,400,e,this.change,function(t){this._calculateIndex(),this.correctionEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this)):this._to((s<0?-1:1)*n*this.step,400,e,this.change,function(t){this._calculateIndex(),this.correctionEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this))}}},t.exports=h}()},60:function(t,i){},65:function(t,i,e){!function(){function i(t,i,s){for(var n=0,h=i.length;n<h;n++){var a=i[n];e(t,a,s)}}function e(t,i,e){Object.defineProperty(t,i,{get:function(){return this["_"+i]},set:function(t){this["_"+i]=t,e()}})}function s(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function n(t,e){if(!t.hasOwnProperty("translateX")){var n=["translateX","translateY","translateZ","scaleX","scaleY","scaleZ","rotateX","rotateY","rotateZ","skewX","skewY","originX","originY","originZ"],h=s(t);e||n.push("perspective"),i(t,n,function(){var i=t.matrix3d.identity().appendTransform(t.translateX,t.translateY,t.translateZ,t.scaleX,t.scaleY,t.scaleZ,t.rotateX,t.rotateY,t.rotateZ,t.skewX,t.skewY,t.originX,t.originY,t.originZ),s=(e?"":"perspective("+t.perspective+"px) ")+"matrix3d("+Array.prototype.slice.call(i.elements).join(",")+")";h?t.style.transform=t.style.msTransform=t.style.OTransform=t.style.MozTransform=t.style.webkitTransform=s:t.transform=s}),t.matrix3d=new a,e||(t.perspective=500),t.scaleX=t.scaleY=t.scaleZ=1,t.translateX=t.translateY=t.translateZ=t.rotateX=t.rotateY=t.rotateZ=t.skewX=t.skewY=t.originX=t.originY=t.originZ=0}}var h=.017453292519943295,a=function(t,i,e,s,n,h,a,o,r,l,c,u,p,d,m,g){this.elements=window.Float32Array?new Float32Array(16):[];var v=this.elements;v[0]=void 0!==t?t:1,v[4]=i||0,v[8]=e||0,v[12]=s||0,v[1]=n||0,v[5]=void 0!==h?h:1,v[9]=a||0,v[13]=o||0,v[2]=r||0,v[6]=l||0,v[10]=void 0!==c?c:1,v[14]=u||0,v[3]=p||0,v[7]=d||0,v[11]=m||0,v[15]=void 0!==g?g:1};a.prototype={set:function(t,i,e,s,n,h,a,o,r,l,c,u,p,d,m,g){var v=this.elements;return v[0]=t,v[4]=i,v[8]=e,v[12]=s,v[1]=n,v[5]=h,v[9]=a,v[13]=o,v[2]=r,v[6]=l,v[10]=c,v[14]=u,v[3]=p,v[7]=d,v[11]=m,v[15]=g,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},multiplyMatrices:function(t,i){var e=t.elements,s=this.elements,n=e[0],h=e[4],a=e[8],o=e[12],r=e[1],l=e[5],c=e[9],u=e[13],p=e[2],d=e[6],m=e[10],g=e[14],v=e[3],f=e[7],T=e[11],x=e[15],y=i[0],M=i[1],w=i[2],_=i[3],b=i[4],X=i[5],E=i[6],Y=i[7],D=i[8],S=i[9],V=i[10],k=i[11],F=i[12],L=i[13],A=i[14],R=i[15];return s[0]=n*y+h*b+a*D+o*F,s[4]=n*M+h*X+a*S+o*L,s[8]=n*w+h*E+a*V+o*A,s[12]=n*_+h*Y+a*k+o*R,s[1]=r*y+l*b+c*D+u*F,s[5]=r*M+l*X+c*S+u*L,s[9]=r*w+l*E+c*V+u*A,s[13]=r*_+l*Y+c*k+u*R,s[2]=p*y+d*b+m*D+g*F,s[6]=p*M+d*X+m*S+g*L,s[10]=p*w+d*E+m*V+g*A,s[14]=p*_+d*Y+m*k+g*R,s[3]=v*y+f*b+T*D+x*F,s[7]=v*M+f*X+T*S+x*L,s[11]=v*w+f*E+T*V+x*A,s[15]=v*_+f*Y+T*k+x*R,this},_rounded:function(t,i){return i=Math.pow(10,i||15),Math.round(t*i)/i},_arrayWrap:function(t){return window.Float32Array?new Float32Array(t):t},appendTransform:function(t,i,e,s,n,a,o,r,l,c,u,p,d,m){var g=o*h,v=this._rounded(Math.cos(g)),f=this._rounded(Math.sin(g)),T=r*h,x=this._rounded(Math.cos(T)),y=this._rounded(Math.sin(T)),M=l*h,w=this._rounded(Math.cos(M*-1)),_=this._rounded(Math.sin(M*-1));return this.multiplyMatrices(this,this._arrayWrap([1,0,0,t,0,v,f,i,0,-f,v,e,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([x,0,y,0,0,1,0,0,-y,0,x,0,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([w*s,_*n,0,0,-_*s,w*n,0,0,0,0,1*a,0,0,0,0,1])),(c||u)&&this.multiplyMatrices(this,this._arrayWrap([this._rounded(Math.cos(c*h)),this._rounded(Math.sin(c*h)),0,0,-1*this._rounded(Math.sin(u*h)),this._rounded(Math.cos(u*h)),0,0,0,0,1,0,0,0,0,1])),(p||d||m)&&(this.elements[12]-=p*this.elements[0]+d*this.elements[4]+m*this.elements[8],this.elements[13]-=p*this.elements[1]+d*this.elements[5]+m*this.elements[9],this.elements[14]-=p*this.elements[2]+d*this.elements[6]+m*this.elements[10]),this}};var o=function(t,i,e,s,n,h){return this.a=null==t?1:t,this.b=i||0,this.c=e||0,this.d=null==s?1:s,this.tx=n||0,this.ty=h||0,this};o.prototype={identity:function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},appendTransform:function(t,i,e,s,n,a,o,r,l){if(n%360)var c=n*h,u=Math.cos(c),p=Math.sin(c);else u=1,p=0;return a||o?(a*=h,o*=h,this.append(Math.cos(o),Math.sin(o),-Math.sin(a),Math.cos(a),t,i),this.append(u*e,p*e,-p*s,u*s,0,0)):this.append(u*e,p*e,-p*s,u*s,t,i),(r||l)&&(this.tx-=r*this.a+l*this.c,this.ty-=r*this.b+l*this.d),this},append:function(t,i,e,s,n,h){var a=this.a,o=this.b,r=this.c,l=this.d;return this.a=t*a+i*r,this.b=t*o+i*l,this.c=e*a+s*r,this.d=e*o+s*l,this.tx=n*a+h*r+this.tx,this.ty=n*o+h*l+this.ty,this},initialize:function(t,i,e,s,n,h){return this.a=t,this.b=i,this.c=e,this.d=s,this.tx=n,this.ty=h,this},setValues:function(t,i,e,s,n,h){return this.a=null==t?1:t,this.b=i||0,this.c=e||0,this.d=null==s?1:s,this.tx=n||0,this.ty=h||0,this},copy:function(t){return this.setValues(t.a,t.b,t.c,t.d,t.tx,t.ty)}},n.getMatrix3D=function(t){var i={translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0,skewX:0,skewY:0,originX:0,originY:0,originZ:0,scaleX:1,scaleY:1,scaleZ:1};for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return(new a).identity().appendTransform(i.translateX,i.translateY,i.translateZ,i.scaleX,i.scaleY,i.scaleZ,i.rotateX,i.rotateY,i.rotateZ,i.skewX,i.skewY,i.originX,i.originY,i.originZ).elements},n.getMatrix2D=function(t){var i={translateX:0,translateY:0,rotation:0,skewX:0,skewY:0,originX:0,originY:0,scaleX:1,scaleY:1};for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return(new o).identity().appendTransform(i.translateX,i.translateY,i.scaleX,i.scaleY,i.rotation,i.skewX,i.skewY,i.originX,i.originY)},t.exports=n}()}});