/*global $, window, */

$(function () {
    'use strict';
    
    // trigger nice scroll plugin
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: '10px',
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
    });
    
    //change header height
    
    $('.header').height($(window).height());
    $(window).resize(function () {
        $('.header').height($(window).height());
    });
    
    //scroll to features 
    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    
    $('.hire').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        }, 1000);
    });
    // show more image 
    $('.show-more').on('click', function () {
        $('.our-work .hidden').fadeToggle(500);
        $(this).hide();
    });
    
    //check testimonials 
    var left = $('.testimonials .fa-chevron-left'),
        right = $('.testimonials .fa-chevron-right');
    function checkClient() {
        $('.client:first').hasClass('active') ? left.fadeOut() : left.fadeIn();
        $('.client:last').hasClass('active') ? right.fadeOut() : right.fadeIn();
    }
    
    checkClient();
    
    $('.testimonials i').on('click', function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testimonials .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClient();
            });
        } else {
            $('.testimonials .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClient();
            });
        }
    });
});

