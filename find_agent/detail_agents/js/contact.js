 $("#blackscreen").hide();
 $("#mbox").hide();
 
 
 $(".listBlockA01>.buttonContent").click(function(e){
	 		
			 $("#blackscreen").fadeIn();
				$("#mbox").fadeIn();
		})
		
 $("#close").click(function(e){
	 		
			 $("#blackscreen").fadeOut();
				$("#mbox").fadeOut();
		})
		
 $(".inputdiv>.buttonContent").click(function(e){
	 		alert("Your message sucessfully send.");
			 $("#blackscreen").fadeOut();
				$("#mbox").fadeOut();
		})