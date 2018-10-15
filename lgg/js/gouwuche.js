var $gwc1v=document.getElementsByClassName("gwc1v");
var $gwc2v=document.getElementsByClassName("gwc2v");
var $gwc3v=document.getElementsByClassName("gwc3v");
var $gwc3l=document.getElementsByClassName("gwc3l");
var $gwc3c=document.getElementsByClassName("gwc3c");
var $gwc3r=document.getElementsByClassName("gwc3r");
var $gwc4v=document.getElementsByClassName("gwc4v");
var $gwc5v=document.getElementsByClassName("gwc5v");
var $gwc6v=document.getElementsByClassName("gwc6v");
var $money1=document.getElementsByClassName("money1");
var $money2=document.getElementsByClassName("money2");
var $money3=document.getElementsByClassName("money3");
var cont=2;
for(let i=0;i<cont;i++){
	$gwc3l[i].onclick=function(){
		$gwc3c[i].value=$gwc3c[i].value*1-1;
		if($gwc3c[i].value<=1){
			$gwc3c[i].value=1;
		}
		$gwc5v[i].innerHTML=$gwc3c[i].value*$gwc2v[i].innerHTML;
		$gwc6v[i].innerHTML=$gwc3c[i].value*$gwc2v[i].innerHTML;
		var a=0;
		for(var e=0;e<$gwc6v.length;e++){
			a+=$gwc6v[e].innerHTML*1;
		}
		$money1[0].innerHTML=a;
		$money2[0].innerHTML=a;
		$money3[0].innerHTML=a;
	}
	$gwc3r[i].onclick=function(){
		$gwc3c[i].value=$gwc3c[i].value*1+1;
		$gwc5v[i].innerHTML=$gwc3c[i].value*$gwc2v[i].innerHTML;
		$gwc6v[i].innerHTML=$gwc3c[i].value*$gwc2v[i].innerHTML;
		var a=0;
		for(var e=0;e<$gwc6v.length;e++){
			a+=$gwc6v[e].innerHTML*1;
		}
		$money1[0].innerHTML=a;
		$money2[0].innerHTML=a;
		$money3[0].innerHTML=a;
	}
	$gwc3c[i].oninput=function(){
		if($gwc3c[i].value<=1){
			$gwc3c[i].value=1;
		}
		$gwc5v[i].innerHTML=$gwc3c[i].value*$gwc2v[i].innerHTML;
		$gwc6v[i].innerHTML=$gwc3c[i].value*$gwc2v[i].innerHTML;
		var a=0;
		for(var e=0;e<$gwc6v.length;e++){
			a+=$gwc6v[e].innerHTML*1;
		}
		$money1[0].innerHTML=a;
		$money2[0].innerHTML=a;
		$money3[0].innerHTML=a;
	}
}


