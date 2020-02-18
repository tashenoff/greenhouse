document.load = function() {
  $(function() {
    objectFitImages();
  });
};
var modal = document.getElementById('myModal');

var img = document.getElementById('myImgs');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
var body = document.querySelector('#example'); //От сюда z
var span = document.getElementsByClassName('modal-gallery__close')[0];
let logo = 'img/logo.png';
let logotwo = 'img/logo_color.png ';
var hamburger = document.querySelector('.hamburger');
var mobmenu = document.querySelector('.nav__right');
const anchors = document.querySelectorAll('#scroll');

window.onscroll = function() {
  scrollFunction();
};

for (let anchor of anchors) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href');

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

document.addEventListener('scroll', (e) => {
  console.log(window);
  if (window.screenY > 50) {
    document.querySelector('.nav__hamburger').classList.add('is-scrolled');
  }
});

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('is-active');
  mobmenu.classList.toggle('nav__right--visible');
  if (hamburger.classList.contains('is-active')) {
    body.style.overflowY = 'hidden'; // body переменную переименуй, под какую нить осмысленную, типа wrapper
    body.style.position = 'fixed';
  } else {
    body.style.overflowY = 'visible';
    body.style.position = 'relative';
  }
});

let clientPosition = 0;

const setlassToMenu = (e) => {
  console.log(e);
  if (e.clientX > clientPosition) {
    e.target.classList.add('nav__item--to-left'); //
  } else {
    e.target.classList.add('nav__item--to-right');
  }
  clientPosition = e.clientX;
  e.target.classList.add('nav__item--hovered');
};

const removelassFromMenu = (e) => {
  e.target.classList.remove('nav__item--to-left'); //

  e.target.classList.remove('nav__item--to-right');

  e.target.classList.remove('nav__item--hovered');
};

document.querySelectorAll('.nav__item').forEach((el) => {
  el.addEventListener('mouseenter', setlassToMenu);
  el.addEventListener('mouseleave', removelassFromMenu);
});

function scrollFunction() {
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 280
  ) {
    document.getElementById('navbar').classList.add('white');
    document.getElementById('logo').src = '/img/logo_color.svg';
  } else {
    document.getElementById('navbar').classList.remove('white');
    document.getElementById('logo').src = '/img/logo_white.svg';
  }
}

span.onclick = function() {
  modal.style.display = 'none';
  body.style.overflowY = 'visible';
  body.style.position = 'relative';
};

document.getElementById('tomatosRow').addEventListener('click', (e) => {
  if (e.target.classList.contains('container-gallery__item--img')) {
    modalImg.src = e.target.src;
    modal.style.display = 'block';
    body.style.overflowY = 'hidden'; // body переменную переименуй, под какую нить осмысленную, типа wrapper
    body.style.position = 'fixed';
  }
  e.preventDefault();
});

//збс а можно вопрос один
//дэ смотри, я вот сдела что бы скрол блочился при модалке
//Тебе iverflow надо вешать не на body , а на какой
//По ходу ниче ты не сделаешь с этим)
//А  я не могу скролить, шо за хуйня?
//все заебись
// Точно? сек, точно! тогда ниже код не нужен?Какой? Нужен ты просто исправь коекакие моменты.
//с этим понятно, слушай а можно еще один вопрос?)давай Я вот делаю адаптивное меню смотри
