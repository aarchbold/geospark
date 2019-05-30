

$.fn.handleSignUp = function() {
    var $trigger = $(this),
        $signupContainer = $('.signup-container'),
        $overlay = $('.signup-overlay', $signupContainer),
        $content = $('.signup-content', $signupContainer),
        $closeBtn = $('.signup-close', $signupContainer);

    $trigger.click(function(e) {
        e.preventDefault();
        $signupContainer.show(0,function(){
            $content.fadeIn();
        });
    });

    $closeBtn.click(function(e) {
        e.preventDefault();
        $content.fadeOut(400,function() {
            $signupContainer.hide();
        })
    });
}

$(function(){
    $('.button-trial').handleSignUp();
})