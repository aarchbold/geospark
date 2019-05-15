

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