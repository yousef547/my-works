/*global $, window, document*/

$(document).ready(function () {
    
    "use strict";
    
    //nice scroll
    
    $("html").niceScroll();
    
    $('.carousel').carousel({
        
        interval: 5000
        
    });
    
    //show color option
    $(".gear-check").click(function () {
        
        $(".color-option").fadeToggle();
        
    });
    
    //change theme color on click
    
    var colorLi = $(".color-option ul li"),
        
        scrollButton = $("#scroll-up");
    
    colorLi
        .eq(0).css("backgroundColor", "#e41b17").end()
        .eq(1).css("backgroundColor", "#721888").end()
        .eq(2).css("backgroundColor", "#009aff").end()
        .eq(3).css("backgroundColor", "#a5e838").end()
        .eq(4).css("backgroundColor", "#00ced6");
    
    colorLi.click(function () {
        
        $("link[href*='web']").attr("href", $(this).attr("data-value"));
        
    });
    // the scroll top
    
    
    $(window).scroll(function () {
        
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
        } else {
            
            scrollButton.hide();
        }
    });
    
    
    scrollButton.click(function () {
        
        $("html,body").animate({scrollTop : 0}, 600);
    });
});

//loading screen 

$(window).load(function () {
     
    "use strict";
    
    $(".loading-overlay .sk-folding-cube").fadeOut(1000,
        function () {
            $("body").css("overflow", "auto");
        
            $(this).parent().fadeOut(1000,
                                 function () {
                    $(this).remove();
                });
        });
});