const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};

// header container
ScrollReveal().reveal('.header__container img', {
  duration: 1000,
});

ScrollReveal().reveal('.header__content', {
  ...scrollRevealOption,
  origin: 'right',
  delay: 500,
});

ScrollReveal().reveal('.header__tag', {
  ...scrollRevealOption,
  origin: 'left',
  delay: 1000,
});

// festive container
ScrollReveal().reveal('.festive__content .section__header', {
  ...scrollRevealOption,
});

ScrollReveal().reveal('.festive__content .section__description', {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal('.festive__content .festive__btn', {
  ...scrollRevealOption,
  delay: 1000,
});

// shopping container
ScrollReveal().reveal('.shopping__card', {
  ...scrollRevealOption,
  interval: 500,
});

// festive container
ScrollReveal().reveal('.explore__content .section__header', {
  ...scrollRevealOption,
});

ScrollReveal().reveal('.explore__content .section__description', {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal('.explore__content .explore__btn', {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal('.santa_img', {
  ...scrollRevealOption,
  origin: 'right',
  delay: 500,
});

ScrollReveal().reveal('.bg', {
  ...scrollRevealOption,
  origin: 'right',
  delay: 1000,
});

// Swiper card
var swiper = new Swiper('.swiper', {
  effect: 'cards',
  grabCursor: true,
  initialSlide: 2,
  loop: true,
  rotate: true,
  mousewheel: {
    invert: false,
  },
});
