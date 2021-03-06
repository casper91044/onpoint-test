const slideWrapper = document.querySelector('.slide-wrapper');
const nav_0 = document.querySelector('.nav__0');
const nav_1 = document.querySelector('.nav__1');
const nav_2 = document.querySelector('.nav__2');
let touchStartY;
let touchEndY;
let currentSlide = 0;
let slider = document.getElementById("Slider_range");
let slides = document.getElementsByClassName('sec_horizontal')[0];



const update = function(currentSlide) {
    nav_0.style.backgroundColor = 'white';
    nav_1.style.backgroundColor = 'white';
    nav_2.style.backgroundColor = 'white';
    slideWrapper.style.transform = `translateY(-${currentSlide*768}px)`;
    document.querySelector('.nav__' + currentSlide).style.backgroundColor = '#f78b1f';

    if (currentSlide == 2) {
        document.getElementById('scroll-down').style.opacity = 0;
    } else if (currentSlide == 1) {
        document.getElementById('scroll-down').style.opacity = 1;
    }

}

window.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
})

window.addEventListener('touchend', e => {
    touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 50 && currentSlide <= 1) {
        currentSlide += 1;
        update(currentSlide);
    }
    if (touchStartY - touchEndY < -50 && currentSlide >= 1) {
        currentSlide -= 1;
        update(currentSlide);
    }
})


slider.onchange = function (e) {
    if (slider.value > 75) {
        slides.style.marginLeft = '-200%';
        slider.value = 100;
    } else if (slider.value >= 30 && slider.value <= 75) {
        slides.style.marginLeft = '-100%';
        slider.value = 50;
    } else if (slider.value < 30) {
        slides.style.marginLeft = '0%';
        slider.value = 0;
    }

}
