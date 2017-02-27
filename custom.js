$(function() { 

    $("html").niceScroll({
        cursorborderradius: "1px",
        cursorborder: "none",
        cursorwidth: "7",
        cursorcolor: "#557799",
        autohidemode: "none",
        });
});

$(document).ready(function(){
    $(".button-one").click(function(){
        $('.one').fadeIn();
    });
    $(".closer").click(function(){
        $('.one').fadeOut();
    });
    $('.one').click(function(evt){    
            if(!$(evt.target).is('.win, .winh2, .winp, .winspan')) {
                    $('.one').fadeOut();
             }
            });
});
