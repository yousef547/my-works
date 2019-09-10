/*global $ */

$(function () {
    'use strict';
    $('ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});
