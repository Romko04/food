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
    
});


// const btnYet = document.querySelector('.footer__navigation-list__item-link--yet')
// const links = document.querySelectorAll('.footer__navigation-list__item-link')

// if (links.length > 4) {
//     btnYet.classList.add('active')
//     for (let i = 3; i < links.length; i++) {
//         links[i].classList.add('hidden');
//     }
// }

// btnYet.addEventListener('click',(e)=>{
//     e.preventDefault()
//     btnYet.classList.remove('active')
//     for (let i = 3; i < links.length; i++) {
//         links[i].classList.add('active');
//     }
// })