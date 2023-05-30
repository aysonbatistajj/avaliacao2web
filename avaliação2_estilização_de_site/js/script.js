const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

//esconde o slide
function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

//mostra o slide
function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

//console.log(slider)

currentSlide = currentSlide + 1
currentSlide = currentSlide - 1

//menu hamburguer
var ul = document.querySelector('nav ul');
var opcoes = document.querySelector('ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
        console.log(opcoes)
    }else{
        ul.classList.add('open');
    }
}

opcoes.onclick = function () {
  ul.classList.remove('open');
};