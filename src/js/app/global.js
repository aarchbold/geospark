$.fn.handleScreenHeight = function() {
    var $context = $(this);

    $context.height($(window).height());
    $(window).resize(function() {
        $context.height($(window).height());
    });
}

$(function(){
    $('.screen-height').handleScreenHeight();
})