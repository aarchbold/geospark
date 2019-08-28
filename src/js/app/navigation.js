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

    // do the scroll
    var lastScrollTop = 0;
    window.addEventListener('scroll', function(){ 
        var st = window.pageYOffset || document.documentElement.scrollTop; 
        if (st > 20) {
            $context.addClass('-slim');
        } else {
            $context.removeClass('-slim');
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
}

$.fn.handleDropDowns = function() {
    var $context = $(this),
        $triggers = $('.topnav-dropdown__trigger', $context),
        $dropdownlinks = $('.topnav-dropdown__list a', $context);

    $triggers.click(function(e) {
        e.preventDefault();
        var $lists = $('.topnav-links li'),
            $parent = $(this).parent(),
            $dropdown = $('.topnav-dropdown', $parent);

        if ($parent.hasClass('-active')) {
            $parent.removeClass('-active');

        } else {
            $lists.removeClass('-active');
            $parent.addClass('-active');
        }
    });

    $dropdownlinks.click(function() {
        var $dropdown = $(this).closest('.topnav-dropdown');
        $dropdown.removeClass('-active');
        $dropdown.fadeOut('fast');
    })
}

$(function(){
    $('.topnav-container').handleTopNav();
    $('.topnav-links-container').handleDropDowns();
})