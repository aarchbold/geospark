

$.fn.handleTopNav = function() {
    var $context = $(this),
        $nav = $('.topnav-links-container', $context),
        $open = $('.topnav-mobile-cta__open', $context),
        $close = $('.topnav-mobile-cta__close', $context),
        breakpoint = 860;

    $open.click(function(e) {
        e.preventDefault();
        $nav.fadeIn();
        $open.hide();
        $close.fadeIn();
    })

    $close.click(function(e) {
        e.preventDefault();
        $nav.fadeOut();
        $open.fadeIn();
        $close.hide();
    })

    var initNav = debounce(function() {        
        if (window.innerWidth > breakpoint) {  
            $nav.show();
        } else {
            $nav.hide();
            $close.hide();
            $open.show();
        }
    }, 250);

    window.addEventListener('resize', initNav);
}

$.fn.handleDropDowns = function() {
    var $context = $(this),
        $triggers = $('.topnav-dropdown__trigger', $context);

    $triggers.click(function() {
        var $parent = $(this).parent();
        console.log($parent);
        if ($parent.hasClass('-active')) {
            $parent.removeClass('-active');
            $('.topnav-dropdown', $parent).fadeOut('fast');
        } else {
            $parent.addClass('-active');
            $('.topnav-dropdown', $parent).fadeIn('fast');
        }
    });
}

$(function(){
    $('.topnav-container').handleTopNav();
    $('.topnav-links-container').handleDropDowns();
})