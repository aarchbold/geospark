function showAnimation(el,className) {
    el.addClass(className);
}
function hideAnimation(el,className) {
    el.removeClass(className);
}


$(function() {
    $(window).on('DOMContentLoaded load resize scroll', function() {
        if (isElementInViewport($('#featuresForecasting'))) {
            console.log('feature in view');
            showAnimation($('.element-to-animate',$('#featuresForecasting')),'animate-clip');
        } else {
            hideAnimation($('.element-to-animate',$('#featuresForecasting')),'animate-clip');
            console.log('feature not in view');
        }
    }); 
    // $.scrollify({
    //     section : '.scroll-me'
    // });
});