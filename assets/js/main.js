$(function (){

	$('#bg-home').maximage();

	//Pegando Altura
	function altura(){
		
	}
	var height = document.documentElement.clientHeight;
	//Colocar valor no elento
	if(height > 650){

		$('.page').show().css({'height':height + "px"});	

	}else{
		//Nada
	}

});	