function gouwuchefn(){
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
	var $btndel=document.getElementsByClassName("shop-btn-del");
	var $alldel=document.getElementsByClassName("gwc041");
	var $gwc_c=document.getElementsByClassName("gwc_c");
	var $gwc_table=document.getElementsByClassName("gwc_table");
	var shoplist = localStorage.shopList || '[]';
    if(shoplist=='[]'){
    	$gwc_c[0].style.display="block";
    	$gwc_table[0].style.display="none";
    }
	else{
		$gwc_c[0].style.display="none";
    	$gwc_table[0].style.display="block";
		var b=0;
		for(var e=0;e<$gwc6v.length;e++){
			b+=$gwc6v[e].innerHTML*1;
		}
		$money1[0].innerHTML=b;
		$money2[0].innerHTML=b;
		$money3[0].innerHTML=b;
		var cont=JSON.parse(localStorage.shopList).length;
		for(let g=0;g<cont;g++){
			$gwc3l[g].onclick=function(){
				$gwc3c[g].value=$gwc3c[g].value*1-1;
				if($gwc3c[g].value<=0){
					$gwc3c[g].value=0;
				}
				$gwc5v[g].innerHTML=$gwc3c[g].value*$gwc2v[g].innerHTML;
				$gwc6v[g].innerHTML=$gwc3c[g].value*$gwc2v[g].innerHTML;
				var a=0;
				for(var e=0;e<$gwc6v.length;e++){
					a+=$gwc6v[e].innerHTML*1;
				}
				$money1[0].innerHTML=a;
				$money2[0].innerHTML=a;
				$money3[0].innerHTML=a;
				var list=JSON.parse(localStorage.shopList);
				list[g].count=$gwc3c[g].value;
				localStorage.shopList=JSON.stringify(list);
			}
			$gwc3r[g].onclick=function(){
				$gwc3c[g].value=$gwc3c[g].value*1+1;
				$gwc5v[g].innerHTML=$gwc3c[g].value*$gwc2v[g].innerHTML;
				$gwc6v[g].innerHTML=$gwc3c[g].value*$gwc2v[g].innerHTML;
				var a=0;
				for(var e=0;e<$gwc6v.length;e++){
					a+=$gwc6v[e].innerHTML*1;
				}
				$money1[0].innerHTML=a;
				$money2[0].innerHTML=a;
				$money3[0].innerHTML=a;
				var list=JSON.parse(localStorage.shopList);
				list[g].count=$gwc3c[g].value;
				localStorage.shopList=JSON.stringify(list);
			}
			$gwc3c[g].oninput=function(){
				if($gwc3c[g].value<=0){
					$gwc3c[g].value=0;
				}
				$gwc5v[g].innerHTML=$gwc3c[g].value*$gwc2v[g].innerHTML;
				$gwc6v[g].innerHTML=$gwc3c[g].value*$gwc2v[g].innerHTML;
				var a=0;
				for(var e=0;e<$gwc6v.length;e++){
					a+=$gwc6v[e].innerHTML*1;
				}
				$money1[0].innerHTML=a;
				$money2[0].innerHTML=a;
				$money3[0].innerHTML=a;
				var list=JSON.parse(localStorage.shopList);
				list[g].count=$gwc3c[g].value;
				localStorage.shopList=JSON.stringify(list);
			}
			$btndel[g].onclick=function(e){
				e = e || window.event;
	            var target = e.target || e.srcElement;
				target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
				var list=JSON.parse(localStorage.shopList);
				list.splice(g,1);
				localStorage.shopList=JSON.stringify(list);
				window.location.reload();
			}
			$alldel[0].onclick=function(){
//				localStorage="";
				var list=JSON.parse(localStorage.shopList);
				list.splice(0,3);
				localStorage.shopList=JSON.stringify(list);
				window.location.reload();
//		    	$gwc_c[0].style.display="block";
//		    	$gwc_table[0].style.display="none";
			}
		}
	}
}

