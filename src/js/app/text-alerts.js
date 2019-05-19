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