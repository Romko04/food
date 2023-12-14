
/*Ініціалізація свайперів */
document.addEventListener('DOMContentLoaded', function () {
    let swiper = new Swiper('.foods__wrapper', {
        slidesPerView: 1.3,
        spaceBetween: 20,
        centeredSlides: true,
    });

    let today = new Date().getDay();
    
    swiper.slideTo(today - 1, 1000, true);

    let swiperNav = new Swiper('.nav__wrapper', {
        slidesPerView: 4,
        spaceBetween: 10,
    });

})




