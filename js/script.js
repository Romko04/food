
/*Ініціалізація свайперів */
document.addEventListener('DOMContentLoaded', function () {
    const slidesNav = document.querySelectorAll('.footer__navigation-list__item-link')
    let number = 4
    if (slidesNav && slidesNav.length < 4) {
        number = slidesNav.length
        const nav = document.querySelector('.nav__wrapper')
        nav.classList.add('nav--less')

    }
    

    let swiper = new Swiper('.foods__wrapper', {
        slidesPerView: 1.3,
        breakpoints: {
            500: {
                slidesPerView: 1.5
            },
            1240: {
                slidesPerView: 1.3
            }
        },
        spaceBetween: 20,
        centeredSlides: true,
    });

    let today = new Date().getDay();
    
    swiper.slideTo(today - 1, 1000, true);
    console.log(number);
    let swiperNav = new Swiper('.nav__wrapper', {
        slidesPerView: 3,
        spaceBetween: 25,
        breakpoints: {
            356: {
                slidesPerView: number
            },
            500: {
                slidesPerView: 5
            }
        }
    });
    

})




