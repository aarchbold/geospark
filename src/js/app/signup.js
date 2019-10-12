

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