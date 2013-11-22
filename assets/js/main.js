$(function (){

	$('#bg-home').maximage({
		cycleOptions: {
			fx: 'fade',
			// Speed has to match the speed for CSS transitions
			speed: 1000, 
			timeout: 0,
			prev: '#arrow_left',
			next: '#arrow_right',
			pause: 1
		}
	});

	//Pegando Altura
	$(window).load(altura);
  	$(window).resize(altura);
	function altura(){
		var height = document.documentElement.clientHeight;
		//Colocar valor no elento
		if(height > 650){

			$('.page').show().css({'height':height + "px"});	

		}else{
			//Nada
		}	
	}

});

//Modal
	$('#example').on('click', function ( e ) {
	    $.fn.custombox( this, {
	        effect: 'fadein'
	    });
	    e.preventDefault();
	});

//Box Empresa
jQuery(function(){
	jQuery('.esconde-span').hide();
	jQuery('.mostra-span').click(function(){
		jQuery('.esconde-span').hide();
	    jQuery('#span'+$(this).attr('target')).slideToggle("slow");
	});
});