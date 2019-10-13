function isAnyPartOfElementInViewport(el) {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

$.fn.handleAnimatedText = function() {
    var $context = $(this),
        $textBlocks = $('.text-animation', $context),
        position = $(window).scrollTop();

    function doTheAnimation(element) {
        if (isAnyPartOfElementInViewport(element[0])) {
            element.removeClass('-animate');
        } else {
            // element.addClass('-animate');
        }
    }

    $textBlocks.each(function(i,e) {
        $(e).addClass('-animate');
        $(window).on('scroll', function() {
            doTheAnimation($(e));
        });
        doTheAnimation($(e));
    });
}

$(function(){
    $('.text-animation-group').handleAnimatedText();
})
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
    var el = $("div[data-target='" + window.location.hash +"']");
    // $.scrollify.move(window.location.hash);
    setTimeout(function(){
        if (el.length) {
            $('html, body').animate({
                scrollTop: el.offset().top
            },300);
        }
    },100)
}

$(function(){
    $('.screen-height').handleScreenHeight();
    // $.scrollify({
    //     section : '.scroll-me',
    //     sectionName : 'section-name',
    //     setHeights: false,
    //     standardScrollElements: '.no-scroll',
    //     touchScroll: false,
    //     offset: 0
    // });
    // $('.topnav-links').handleScrolling();
    window.addEventListener('hashchange', function() {
        goToSection();
    });
    $(document).ready(function() {
        goToSection();
    })
})
function getParam(name) {
    SCH = document.location.search;
    if(window['W3T'] && (W3T['MORE_ARGS'] != "")) {
        SCH += "&" + W3T['MORE_ARGS'];
    }
    SCH = "?&" + SCH.substring(1,SCH.length);
    // alert('SCH = ' + SCH);
    var start = SCH.indexOf("&" + name+"=");
    var len = start+name.length+2;
    if ((!start) && (name != SCH.substring(0,name.length))) return("");
    if (start == -1) return "";
    var end = SCH.indexOf("&",len);
    if (end == -1) end = SCH.length;
    // alert('finished getting parm ' + name);
    return unescape(SCH.substring(len,end));
}

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

function isElementInViewport (el) {
    if (!el || el.length < 1) {
        return false;
    }
    //special bonus for those using jQuery
    if (typeof jQuery !== 'undefined' && el instanceof jQuery) el = el[0];

    var rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}
$(function(){
    if ($('#homeTestimonial').length > 0) {
      $('#homeTestimonial').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 8000,
        arrows: false,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        dotsClass: 'home-carousel__dots'
      });
    }
})


$.fn.handleHomeVideo = function() {
    var $trigger = $(this),
        $videoContainer = $('.home-video-container'),
        $overlay = $('.home-video-overlay', $videoContainer),
        $content = $('.home-video-content', $videoContainer),
        $closeBtn = $('.home-overlay-close', $videoContainer);

    $trigger.click(function() {
        $videoContainer.show(0,function(){
            $content.fadeIn();
        });
    });

    $closeBtn.click(function() {
        $content.fadeOut(400,function() {
            $videoContainer.hide();
        })
    });
}

$(function(){
    $('.home-video-open').handleHomeVideo();
})


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


$.fn.handleSignUp = function() {
    var $trigger = $(this),
        $signupContainer = $('.signup-container'),
        $overlay = $('.signup-overlay'),
        $content = $('.signup-content', $signupContainer),
        $closeBtn = $('.signup-close', $signupContainer),
        $name = $('#fullName', $signupContainer),
        $email = $('#email', $signupContainer),
        $company = $('#organization', $signupContainer)
        $submit = $('.signup-content__cta a', $signupContainer),
        $errorContainer = $('.error-container', $signupContainer),
        $signupForm = $('#signupForm', $signupContainer),
        $signupSuccess = $('#signupSuccess', $signupContainer),
        emailPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

    function resetErrors() {
        $name.removeClass('error');
        $email.removeClass('error');
        $company.removeClass('error');
        $('.error-name', $errorContainer).hide();
        $('.error-email', $errorContainer).hide();
        $('.error-company', $errorContainer).hide();
        $errorContainer.hide();
    }

    function isFromValid() {
        var hasError = false;
        if ($name.val() === '') {
            hasError = true;
            $name.addClass('error');
            $('.error-name', $errorContainer).show();
        }
        if ($email.val() === '' || !emailPattern.test($email.val())) {
            hasError = true;
            $email.addClass('error');
            $('.error-email', $errorContainer).show();
        }
        if ($company.val() === '') {
            hasError = true;
            $company.addClass('error');
            $('.error-company', $errorContainer).show();
        }

        if (hasError) {
            $errorContainer.show();
            return false;
        } else {
            hasError = false;
            resetErrors();
            return true;
        }
    }

    $trigger.click(function(e) {
        e.preventDefault();
        $('body').css('overflow','hidden');
        $signupContainer.show(0,function(){
            $content.fadeIn();
            $overlay.fadeIn();
        });
    });

    $closeBtn.click(function(e) {
        e.preventDefault();
        $('body').css('overflow','auto');
        $content.fadeOut(400,function() {
            $signupContainer.hide();
            $overlay.hide();
        })
    });

    $signupContainer.click(function(e) {
        $('body').css('overflow','auto');
        if(e.target == this){
            $content.fadeOut(400,function() {
                $signupContainer.hide();
                $overlay.hide();
            })
        }
    })

    $submit.click(function(e) {
        e.preventDefault();
        resetErrors();
        if (isFromValid()) {
            $.ajax({
                url: 'https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/5391972/242a5fc0-bc05-477d-8199-bb7aa6afa176',
                type: 'POST',
                data: $('#trialForm').serialize(),
                contentType: 'application/x-www-form-urlencoded',
                success: function(data) {
                    $signupForm.hide();
                    $signupSuccess.show();
                },
                error: function(data) {
                    alert('Error submitting form. Please try again later.');
                }
            });
        } 
    })
}

$(function(){
    // $('.button-trial').handleSignUp();
    $('.button-contact').handleSignUp();
})
$.fn.handleAlerts = function() {
    var $context = $(this),
        $texts = $('.text-alert',$context),
        delay = 4000;
    
    $texts.each(function(i,e){
        setInterval(function() {
            var className = $(e).attr('class');
            var currentIndex = className.substr(className.length-1);
            var newIndex = parseInt(currentIndex) + 1;
            if (newIndex > 3) {
                newIndex = 1;
            }

            $(e).attr('class','text-alert -position'+newIndex);
        },delay)
    });
}

$(function(){
    $('.text-alerts__container').handleAlerts();
})