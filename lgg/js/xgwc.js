function xgwc(){
	var $gwcnumber=document.getElementsByClassName("gwcnumber");
	var list=JSON.parse(localStorage.shopList);
	var numb=0;
	for(i=0;i<list.length;i++){
		numb+=list[i].count*1;
	}
	$gwcnumber[0].innerHTML=0||numb;
	
}
