function hoverfn(){
	var $i1=document.getElementsByClassName("ihover1");
	for(let i=0;i<$i1.length;i++){
		$i1[i].onmouseover=function(){
			console.log(1);
			move2($i1[i], 'margin-top',0,0.5,()=> {
	        move2($i1[i], 'margin-top',10,10)
	      });
		}
	}
	var $i2=document.getElementsByClassName("ihover2");
	for(let c=0;c<$i2.length;c++){
		$i2[c].onmouseover=function(){
			console.log(2);
			move2($i2[c], 'margin-top',40,0.5,()=> {
	        move2($i2[c], 'margin-top',50,10)
	      });
		}
	}
}
