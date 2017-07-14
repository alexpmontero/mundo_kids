// alert("funciona");
function efectos()
{
	// $("h3").on("click",function(){
	// 	$(this).hide();
	// });

	// $("#boton1").on("click",function(){
	// 	$("h3").show();
	// });
	$("#res-btn1").on("click",function(){
		$("#resp1").toggle("slow");
	})

	$("#res-btn2").on("click",function(){
		$("#resp2").slideToggle("slow");
	})

	$("#res-btn3").on("click",function(){
		$("#resp3").toggle("slow");
	})
	
	$("#res-btn4").on("click",function(){
		$("#resp4").slideToggle("slow");
	})
	
	$("#res-btn5").on("click",function(){
		$("#resp5").toggle("slow");
	})
	
	$("#res-btn6").on("click",function(){
		$("#resp6").slideToggle("slow");
	})
	
	$("#res-btn7").on("click",function(){
		$("#resp7").toggle("slow");
	})
	
	$("#res-btn8").on("click",function(){
		$("#resp8").slideToggle("slow");
	})
	
	$("#res-btn9").on("click",function(){
		$("#resp9").toggle("slow");
	})
	
}

$(document).on("ready",efectos);