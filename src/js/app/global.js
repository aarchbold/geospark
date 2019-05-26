$.fn.handleScreenHeight = function() {
    var $context = $(this);

    $context.height($(window).height());
    $(window).resize(function() {
        $context.height($(window).height());
    });
}

$.fn.handleScrolling = function() {
    var $context = $(this),
        $links = $('.go-to-link');

    $links.click(function(e) {
        console.log($(e));
    })

    // $('html, body').animate({
    //     scrollTop: ($('#element').offset().top)
    // },500);
}

goToSection = function() {
    var el = $("div[data-target='" + window.location.hash +"']");
    if (el.length) {
        $('html, body').animate({
            scrollTop: el.offset().top
        },300);
    }
}

$(function(){
    $('.screen-height').handleScreenHeight();
    $.scrollify({
        section : '.scroll-me',
        setHeights: false,
        standardScrollElements: '.no-scroll',
        offset: 0
    });
    // $('.topnav-links').handleScrolling();
    window.addEventListener('hashchange', function() {
        goToSection();
    });
    $(document).ready(function() {
        goToSection();
    })
})