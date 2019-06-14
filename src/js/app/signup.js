

$.fn.handleSignUp = function() {
    var $trigger = $(this),
        $signupContainer = $('.signup-container'),
        $overlay = $('.signup-overlay', $signupContainer),
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

    $submit.click(function(e) {
        e.preventDefault();
        resetErrors();
        if (isFromValid()) {
            $signupForm.hide();
            $signupSuccess.show();
        } 
    })
}

$(function(){
    $('.button-trial').handleSignUp();
})