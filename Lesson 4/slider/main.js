const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};

const prepareCurrSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
};

const nextSlide = () => {
    if(index === slides.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    prepareCurrSlide(index);
};

setInterval(nextSlide, 2000);

const prevSlide = () => {
    if (index === 0) {
        index = slides.length - 1;
    }
    else {
        index --;
    }
    prepareCurrSlide(index);
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrSlide(indexDot);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

