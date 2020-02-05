const imagesArray = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg'];

const image = document.getElementById('slider__image');
const buttonNext = document.getElementById('button-next');
const buttonPrev = document.getElementById('button-prev');

let currentImage = 0;

buttonNext.addEventListener('click', slideNext);
buttonPrev.addEventListener('click', slidePrev);

arrayLengthCheck();
