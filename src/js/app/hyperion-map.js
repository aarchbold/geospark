

$.fn.handleHyperionMap = function() {
    var $context = $(this),
        $triggers = $('.home-hyperion__list--item', $context),
        $panels = $('.hyperion-panel', $context),
        $outlines = $('.-outline', $context),
        $days = $('.hyperion-forecast__label', $context),
        $eventsTable = $('.hyperion-events__types', $context);

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

    function initEventsFade() {
        $('.hyperion-events__line').css('opacity','0')
        $('.hyperion-events__item--inner').removeClass('-active')
        $eventsTable.css('opacity','0')
        setTimeout(function() {
            $eventsTable.css('opacity','1')
        },200)
        setTimeout(function() {
            $('.hyperion-events__item--inner:eq(1)').addClass('-active')
        },1000)
        setTimeout(function() {
            $('.hyperion-events__item--inner:eq(2)').addClass('-active')
        },1200)

        setTimeout(function() {
            $('.hyperion-events__line:eq(0)').css('opacity','1')
        },1600)
        setTimeout(function() {
            $('.hyperion-events__line:eq(1)').css('opacity','1')
        },2000)
        setTimeout(function() {
            $('.hyperion-events__line:eq(2)').css('opacity','1')
        },2400)
        
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
        if ($(this).attr('data-target') === 'panelEvents') {
            initEventsFade();
        }
    });

    initOutlineFade();
}

$(function(){
    $('.home-hyperion__container').handleHyperionMap();
})