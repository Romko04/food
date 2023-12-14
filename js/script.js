document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1.3,
        spaceBetween: 20,
        centeredSlides: true,
    });

    var today = new Date().getDay();
    
    swiper.slideTo(today - 1, 1000, true);
});


const btnYet = document.querySelector('.footer__navigation-list__item-link--yet')
const links = document.querySelectorAll('.footer__navigation-list__item-link')

if (links.length > 3) {
    btnYet.classList.add('active')
    for (let i = 3; i < links.length; i++) {
        links[i].classList.add('hidden');
    }
}

btnYet.addEventListener('click',(e)=>{
    e.preventDefault()
    const list = document.querySelector('.footer__navigation-list')
    list.classList.add('active')
    btnYet.classList.remove('active')
    for (let i = 3; i < links.length; i++) {
        links[i].classList.add('active');
    }
})