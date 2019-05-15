

$.fn.handleHyperionMap = function() {
    var $context = $(this),
        $triggers = $('.home-hyperion__list--item', $context),
        $panels = $('.hyperion-panel', $context),
        $outlines = $('.-outline', $context),
        $days = $('.hyperion-forecast__label', $context);

    function initOutlineFade() {
        var timer = 0;
        $outlines.each(function(i,e) {
            $(e).hide();
        })
        $outlines.each(function(i,e) {
            timer = timer + 750;
            setTimeout(function() {
                $(e).fadeIn('slow');
            },timer)
        })

    }

    function initForecastFade() {
        var timer = 0;
        $days.each(function(i,e) {
            $(e).css('opacity','0');
        })
        $days.each(function(i,e) {
            timer = timer + 200;
            setTimeout(function() {
                $(e).css('opacity','1');
            },timer)
        })
    }


    $triggers.click(function() {
        $triggers.each(function(i,e) {
            $(e).removeClass('-active');
        })
        $panels.each(function(i,e) {
            $(e).removeClass('-active');
        })
        $(this).addClass('-active');
        $('#' + $(this).attr('data-target')).addClass('-active');
        console.log($(this).attr('data-target'));
        if ($(this).attr('data-target') === 'panelPulse') {
            initOutlineFade();
        }
        if ($(this).attr('data-target') === 'panelForecast') {
            initForecastFade();
        }
    });
}

$(function(){
    $('.home-hyperion__container').handleHyperionMap();
})