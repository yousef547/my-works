/*global $, window*/

$(function () {
    'use strict';
    
    var windowHeight = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    
    $('.slider, .carousel-item').height(windowHeight - (upperH + navH));
    
    
    //featured
    
    $(' .featured ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-md').css('opacity', '1');
        } else {
            
            $('.shuffle-images .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', '1');
        }
    });
});
