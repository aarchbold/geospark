$(function(){
    if ($('#homeTestimonial').length > 0) {
      $('#homeTestimonial').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        dotsClass: 'home-carousel__dots'
      });
    }
})