/* Ефект при скролі */
let margin = 289
const aboutSection = document.querySelector('.about');
aboutSection.style.marginTop = margin + 'px'



window.addEventListener('scroll', function () {
    aboutSection.style.marginTop = (margin - window.scrollY) + 'px'
});