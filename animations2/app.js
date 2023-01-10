$(document).ready(function(){
    $("#btn").click(function(){
        $(".circle-one").removeClass("animated-one");
        setTimeout(function() {
            $(".circle-one").addClass("animated-one")
        }, 100);  
        $(".circle-two").removeClass("animated-two");
        setTimeout(function() {
            $(".circle-two").addClass("animated-two")
        }, 100);          
    });
});


