"use strict";function hoverfn(){for(var n=document.getElementsByClassName("ihover1"),o=function(o){n[o].onmouseover=function(){console.log(1),move2(n[o],"margin-top",0,.5,function(){move2(n[o],"margin-top",10,10)})}},e=0;e<n.length;e++)o(e);for(var t=document.getElementsByClassName("ihover2"),m=function(o){t[o].onmouseover=function(){move2(t[o],"margin-top",40,.5,function(){move2(t[o],"margin-top",50,10)})}},i=0;i<t.length;i++)m(i)}