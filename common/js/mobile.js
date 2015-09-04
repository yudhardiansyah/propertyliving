$(document).ready(function(e) 
	{
		
		$(".mmdrop").hide();
		$(".mmdrop2").hide();
		$(".mmdrop3").hide();
		$("#loginBlock>ul>li>ul").hide();
		
		$("#test").hide();
        $(".mobileMenu").click(function(e){
			$(".mmdrop").slideToggle("normal");
			$("#test").slideUp("slow");
			
		})
		
		 $(".mobileMenu2").click(function(e){
			$(".mmdrop2").slideToggle("normal");
		})
		
		 $(".mobileMenu3").click(function(e){
			$(".mmdrop3").slideToggle("normal");
		})	
		 $("#mobileLogin").click(function(e){
			$("#test").slideToggle("slow");
			$(".mmdrop").slideUp("normal");
		})	
		 $("#loginBlock>ul>#register>span").click(function(e){
			$("#loginBlock>ul>li>ul").slideToggle("fast");
		})	
		
		
		$(window).resize(function()
		{
			if ($(window).width() > 480)
			{	
				$("#gnavArea").show();
			}
			else if($(window).width() <=480)
			{
				$(window).scroll(function() {
					$(".mmdrop").slideUp("fast");
					$("#test").slideUp("normal");
				});
			}
		});
    });
	
	