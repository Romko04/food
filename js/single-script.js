let margin = 289;
const aboutSection = document.querySelector('.about');
aboutSection.style.marginTop = margin + 'px';

window.addEventListener('scroll', function () {
    let newMargin = margin - window.scrollY;
    // Застосовуємо мінімальне значення для marginTop
    newMargin = Math.max(newMargin, 0);
    aboutSection.style.marginTop = newMargin + 'px';
});

