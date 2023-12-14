document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1.3,
        spaceBetween: 20,
        centeredSlides: true,
    });

    var today = new Date().getDay();
    
    swiper.slideTo(today - 1, 1000, true);
});
