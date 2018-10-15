var $xqlt221l=document.getElementsByClassName("xqlt221l");
var $xqlt221c=document.getElementsByClassName("xqlt221c");
var $xqlt221r=document.getElementsByClassName("xqlt221r");

$xqlt221l[0].onclick=function(){
	$xqlt221c[0].value=$xqlt221c[0].value*1-1;
	if($xqlt221c[0].value<=1){
		$xqlt221c[0].value=1;
	}
}
$xqlt221r[0].onclick=function(){
	$xqlt221c[0].value=$xqlt221c[0].value*1+1;
}
$xqlt221c[0].oninput=function(){
	if($xqlt221c[0].value<=1){
		$xqlt221c[0].value=1;
	}
}
