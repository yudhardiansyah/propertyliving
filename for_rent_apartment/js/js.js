$(function() {
	$("#wrapPaging").children().hide(); 
		$(".place1").show();
		$(".navcomplete").show();
		$(".NumNav").css("background","#fff");
		  $(".NumNav").css("color","#032d53");
		 $("#num1").css("background","#032d53");
		 $("#num1").css("color","#fff");
    $('#ListBlockA02').on('click', function() {
        var selected = $('#city option:selected');
		var selected2 = $('#price option:selected');
      	console.log(selected);
	  
	  	if(selected.val() == 1 && selected2.val() == 1)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".price1.place1").fadeIn();
		   $("#contentNav").fadeIn();
		} 
	  	else if(selected.val() == 2 && selected2.val() == 1)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".price1.place2").fadeIn();
		   $("#contentNav").fadeIn();
		} 
		else if(selected.val() == 3 && selected2.val() == 1)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".price1.place3").fadeIn();
		   $("#contentNav").fadeIn();
		} 
		else if(selected.val() == 4 && selected2.val() == 1)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".price1.place4").fadeIn();
		   $("#contentNav").fadeIn();
		} 
		else if(selected.val() == 1 && selected2.val() == 2)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".price2.place1").fadeIn();
		   $("#contentNav").fadeIn();
		} 
	  	else if(selected.val() == 2 && selected2.val() == 2)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".price2.place2").fadeIn();
		   $("#contentNav").fadeIn();
		} 
		else if(selected.val() == 3 && selected2.val() == 2)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".price2.place3").fadeIn();
		   $("#contentNav").fadeIn();
		} 
		else if(selected.val() == 4 && selected2.val() == 2)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".price2.place4").fadeIn();
		   $("#contentNav").fadeIn();
		} 
        else if(selected.val() == 1)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".place1").fadeIn();
		   $("#contentNav").fadeIn();
		} 
		
		else if(selected.val() == 2)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".place2").fadeIn();
		   $("#contentNav").fadeIn();
		   
		} 
		
		else if(selected.val() == 3)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".place3").fadeIn();
		   $("#contentNav").fadeIn();
	
		} 
		
		else if(selected.val() == 4)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".place4").fadeIn();
		   $("#contentNav").fadeIn();

		} 
		 else if(selected2.val() == 1)
		{
		   $("#wrapPaging").children().hide(); 
		   $(".price1:lt(4)").fadeIn();
		   $("#contentNav").fadeIn();
		} 
		
		else
		{
		   $("#wrapPaging").children().hide(); 
		   $(".place1").fadeIn();
		   $(".navcomplete").fadeIn();
		}
    });
	
});

 $("#num1").click(function(e){
		   $("#wrapPaging").children().hide(); 
		$(".place1").fadeIn();
		$(".navcomplete").fadeIn();
		$(".NumNav").css("background","#fff");
		  $(".NumNav").css("color","#032d53");
		 $("#num1").css("background","#032d53");
		 $("#num1").css("color","#fff");
		})
		
 $("#num2").click(function(e){
		   $("#wrapPaging").children().hide(); 
		   $(".price1").slice(4,8).fadeIn();
		   $(".navcomplete").fadeIn();
		   $(".NumNav").css("background","#fff");
		   $(".NumNav").css("color","#032d53");
		    $("#num2").css("background","#032d53");
		   $("#num2").css("color","#fff");
		})
		
 $("#num3").click(function(e){
		   $("#wrapPaging").children().hide(); 
		   $(".place2").slice(0,4).fadeIn();
		   $(".navcomplete").fadeIn();
		    $(".NumNav").css("background","#fff");
		   $(".NumNav").css("color","#032d53");
		    $("#num3").css("background","#032d53");
		   $("#num3").css("color","#fff");
		})
		
 $("#num4").click(function(e){
		   $("#wrapPaging").children().hide(); 
		   $(".price2").slice(4,8).fadeIn();
		   $(".navcomplete").fadeIn();
		    $(".NumNav").css("background","#fff");
		   $(".NumNav").css("color","#032d53");
		    $("#num4").css("background","#032d53");
		   $("#num4").css("color","#fff");
		})
		
 $("#num5").click(function(e){
		   $("#wrapPaging").children().hide(); 
		   $(".place2").slice(0,4).fadeIn();
		   $(".navcomplete").fadeIn();
		    $(".NumNav").css("background","#fff");
		   $(".NumNav").css("color","#032d53");
		    $("#num5").css("background","#032d53");
		   $("#num5").css("color","#fff");
		})