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
        // window.location.reload();
    })

    // $('html, body').animate({
    //     scrollTop: ($('#element').offset().top)
    // },500);
}

goToSection = function(section) {
    // var el = $("div[data-target='" + window.location.hash +"']");
    $.scrollify.move(window.location.hash);
    // if (el.length) {
    //     $('html, body').animate({
    //         scrollTop: el.offset().top
    //     },300);
    // }
}

$(function(){
    $('.screen-height').handleScreenHeight();
    $.scrollify({
        section : '.scroll-me',
        sectionName : 'section-name',
        setHeights: false,
        //standardScrollElements: '.no-scroll',
        touchScroll: false,
        offset: 0
    });
    $('.topnav-links').handleScrolling();
    window.addEventListener('hashchange', function() {
        goToSection();
    });
    $(document).ready(function() {
        goToSection();
    })
})