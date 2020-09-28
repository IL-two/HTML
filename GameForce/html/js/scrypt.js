
$(document).ready(function()
{    
    $(".presss").hover(function()
    {        
        $("li ul").stop().fadeToggle(300);
    });
    /*$(".text-slide h3").mouseover(function(){
        $(this).animate({paddingLeft: "20%"}, "normal");          
    });
    $(".text-slide h3").mouseout(function(){
        $(this).animate({paddingLeft: "0"}, "normal");          
    });*/
    $(".text-slide h3").click(function(){
        $(this).siblings(".slide").slideToggle("slow");    
        $(this).siblings(".textOPS").slideUp("slow");
        if( $(this).siblings(".textOPS").is(":hidden")){
            $(this).siblings(".textOPS").slideToggle("slow");
        }
    });
})