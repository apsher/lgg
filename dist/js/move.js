"use strict";function move(e,r,l){"string"==typeof e&&(e=document.querySelector(e)),clearInterval(e.timer);var n=parseFloat(getStyle(e,r));"opacity"==r&&(n*=100),e.timer=setInterval(function(){var t=(l-n)/20;t=0<t?Math.ceil(t):Math.floor(t),n+=t,(0<=t&&l<=n||t<=0&&n<=l)&&(n=l,clearInterval(e.timer)),e.style[r]="opacity"==r?n/100:n+"px"},10)}function getStyle(t,e){return window.getComputedStyle?window.getComputedStyle(t,null)[e]:t.currentStyle[e]}