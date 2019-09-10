/*global $, window, */

$(function () {
    'use strict';
    
    // adiust header height 
    var myHeader = $('.header'),
        mySlider = $('.bxslider');
    myHeader.height($(window).height());
    $(window).resize(function () {
        myHeader.height($(window).height());
    });
    //links add active class
    $('.navbar .links li a').on('click', function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    // adjust bxslider list item center
    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider').height()) / 2);
    });
    //trigger the bx slider
    mySlider.bxSlider({
        pager: false
    });
    // smooth scroll to div 
    $('.links li a').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    // our auto slider code 
    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    //start our work 
    $('.our-work ul li').on('click', function () {
        $(this).addClass('show').siblings().removeClass('show');
    });
    
    // trigger nice scroll 
        $('html').niceScroll({
            cursorcolor: '#1abc9c',
            cursorwidth: '15px',
            cursorborder: '1px solid none',
            cursorborderradius: 0
        }); 
   // trigger mixitup 
    
        var mixer = mixitup('#continer');
        var mixer = mixitup(containerEl);
        var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 600
        }
    });
});

