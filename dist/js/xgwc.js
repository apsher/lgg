"use strict";function xgwc(){var e=document.getElementsByClassName("gwcnumber"),t=JSON.parse(localStorage.shopList),n=0;for(i=0;i<t.length;i++)n+=1*t[i].count;e[0].innerHTML=n}