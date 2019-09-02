function showAnimation(el,className) {
    el.addClass(className);
}
function hideAnimation(el,className) {
    el.removeClass(className);
}


$(function() {
    $(window).on('DOMContentLoaded load resize scroll', function() {
        if (isElementInViewport($('#featuresForecasting'))) {
            showAnimation($('.element-to-animate',$('#featuresForecasting')),'animate-clip');
        } else {
            hideAnimation($('.element-to-animate',$('#featuresForecasting')),'animate-clip');
        }
        if (isElementInViewport($('.event-cards__container'))) {
            $('.event-cards__item').each(function(i,e) {
                showAnimation($(e),'-animate-me');
            })
        } else {
            $('.event-cards__item').each(function(i,e) {
                hideAnimation($(e),'-animate-me');
            })
        }
        //featuresAlerts
        if (isElementInViewport($('#featuresAlerts .feature-section'))) {
            showAnimation($('.feature-alerts__image',$('#featuresAlerts')),'-animate-me');
        } else {
            hideAnimation($('.feature-alerts__image',$('#featuresAlerts')),'-animate-me');
        }
    }); 
    // $.scrollify({
    //     section : '.scroll-me'
    // });
});