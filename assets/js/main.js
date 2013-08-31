$(function (){

	$('#bg-home').maximage();

	//Pegando Altura
	var height = document.documentElement.clientHeight;
	//Colocar valor no elento
	if(height > 600){

		$('.page').show().css({'height':height + "px"});	

	}else{
		//Nada
	}

});