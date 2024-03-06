// btn Animation

var buttons = document.getElementsByClassName('pulse--animation'),
  forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
  b.addEventListener('click', addElement);
});

function addElement(e) {
  var addDiv = document.createElement('div'),
    mValue = Math.max(this.clientWidth, this.clientHeight),
    rect = this.getBoundingClientRect();
  sDiv = addDiv.style,
    px = 'px';
  sDiv.width = sDiv.height = mValue + px;
  sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
  sDiv.top = e.clientY - rect.top - (mValue / 2) + px;
  addDiv.classList.add('pulse');
  this.appendChild(addDiv);
  addDiv.addEventListener('animationend', removeDiv);
  function removeDiv() {
    this.remove()
  }
}

// header

var openScroll = document.querySelectorAll('.header__bottom .header__link'),
  customScroll = document.querySelectorAll('.scroll__wrapper'),
  scrollItem = document.querySelectorAll('.customScroll__item');

openScroll.forEach((element) => {
  element.addEventListener('click', (e) => {
    const push = e.currentTarget,
      gods = element.nextElementSibling;
    items = element.nextElementSibling.querySelectorAll('.customScroll__item');
    items = Array.prototype.slice.call(items);
    if (gods.classList.contains('scroll__wrapper--active')) {
      gods.classList.remove('scroll__wrapper--active');
      push.classList.remove('header__link--active');
    } else {
      customScroll.forEach((element) => element.classList.remove('scroll__wrapper--active'));
      gods.classList.add('scroll__wrapper--active');
      openScroll.forEach((element) => element.classList.remove('header__link--active'));
      push.classList.add('header__link--active');
    }
  })
});

scrollItem.forEach((element) => {
  element.addEventListener('click', () => {
    customScroll.forEach((element) => element.classList.remove('scroll__wrapper--active'));
    openScroll.forEach((element) => element.classList.remove('header__link--active'));
  })
});

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.scroll__wrapper') && !target.closest('.header__bottom .header__link')) {
      customScroll.forEach((element) => element.classList.remove('scroll__wrapper--active'));
      openScroll.forEach((element) => element.classList.remove('header__link--active'));
    }
  })
});

const burger = document.querySelector('.header__burger'),
  headerNav = document.querySelector('.header__nav'),
  navLink = document.querySelectorAll('.header__top .header__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger--active');
  headerNav.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop--scroll');
});

navLink.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger--active');
    headerNav.classList.remove('header__nav--active');
    document.body.classList.remove('stop--scroll');
  })
});

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.header__nav') && !target.closest('.header__burger') && !target.closest('.swiper__btn') && !target.closest('.swiper__popup--body')) {
      burger.classList.remove('header__burger--active');
      headerNav.classList.remove('header__nav--active');
      document.body.classList.remove('stop--scroll');
    }
  })
});

const searchOpen = document.querySelector('.header__search'),
  searchClose = document.querySelector('.header__close'),
  searchForm = document.querySelector('.header__form'),
  searchInput = document.querySelector('.header__input');

searchOpen.addEventListener('click', () => {
  searchForm.classList.add('header__form--active');
  document.body.classList.add('stop--scroll');
});

searchClose.addEventListener('click', () => {
  searchForm.classList.remove('header__form--active');
  document.body.classList.remove('stop--scroll');
  searchInput.value = "";
});

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.header__form') && !target.closest('.header__search')) {
      searchForm.classList.remove('header__form--active');
    }
  })
});

// hero

var indexValue = 0;
function SlideShow() {
  setTimeout(SlideShow, 5000);
  var x;
  const img = document.querySelectorAll('.hero__item');
  for (x = 0; x < img.length; x++) {
    img[x].style.display = "none";
  }
  indexValue++;
  if (indexValue > img.length) {
    indexValue = 1
  }
  img[indexValue - 1].style.display = "block";
}
SlideShow();

// gallery

var selectBtn = document.querySelectorAll('.select__btn'),
  selectList = document.querySelectorAll('.select__list'),
  selectItem = document.querySelectorAll('.select__item');

selectBtn.forEach((element) => {
  element.addEventListener('click', (e) => {
    const pushBtn = e.currentTarget,
      godsBtn = element.nextElementSibling;
    select = element.nextElementSibling.querySelectorAll('.select__item');
    select = Array.prototype.slice.call(select);
    if (godsBtn.classList.contains('select__list--active')) {
      godsBtn.classList.remove('select__list--active');
      pushBtn.classList.remove('select__btn--active');
    } else {
      selectList.forEach((element) => element.classList.remove('select__list--active'));
      godsBtn.classList.add('select__list--active');
      selectBtn.forEach((element) => element.classList.remove('select__btn--active'));
      pushBtn.classList.add('select__btn--active');
    }
  })
});

selectItem.forEach((element) => {
  element.addEventListener('click', () => {
    selectList.forEach((element) => element.classList.remove('select__list--active'));
    selectBtn.forEach((element) => element.classList.remove('select__btn--active'));
  })
});

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.select__list') && !target.closest('.select__btn')) {
      selectList.forEach((element) => element.classList.remove('select__list--active'));
      selectBtn.forEach((element) => element.classList.remove('select__btn--active'));
    }
  })
});

selectItem.forEach(function (listItem) {
  listItem.addEventListener('click', function () {
    let text = this.innerText;
    currentText = this.closest('.select__wrapper').querySelector('.select__btn');
    currentText.innerText = text;
  })
});

new Swiper('.gallery__swiper', {
  navigation: {
    prevEl: '.swiper__btn--prev',
    nextEl: '.swiper__btn--next'
  },
  pagination: {
    el: '.swiper__pagination',
    type: 'fraction'
  },
  breakpoints: {
    1445: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
      simulateTouch: false,
    },
    1024: {
      simulateTouch: true,
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      simulateTouch: true,
      spaceBetween: 38,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    320: {
      simulateTouch: true,
      spaceBetween: 21,
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});


var popupBtn = document.querySelectorAll('.swiper__btn'),
  popup = document.querySelectorAll('.swiper__popup'),
  popupClose = document.querySelectorAll('.swiper__popup--btn');

popupBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const currentSwiperBtn = e.currentTarget.dataset.btn;
    document.body.classList.add('stop--scroll');
    if (document.querySelector(`[data-popup="${currentSwiperBtn}"]`).classList.contains('popup--active')) {
      popup.forEach(function (element) { element.classList.remove('popup--active') });
    } else {
      popup.forEach(function (element) { element.classList.remove('popup--active') });
      document.querySelector(`[data-popup="${currentSwiperBtn}"]`).classList.add('popup--active');
    };
  })
});

popupClose.forEach(function (element) {
  element.addEventListener('click', function () {
    popup.forEach(function (element) { element.classList.remove('popup--active') });
    document.body.classList.remove('stop--scroll');
  })
});

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.swiper__popup--body') && !target.closest('.swiper__btn') && !target.closest('.header') && !target.closest('.hero')) {
      popup.forEach((element) => element.classList.remove('popup--active'));
      document.body.classList.remove('stop--scroll');
    }
  })
});

// catalog

var openCatalog = document.querySelectorAll('.catalog__btn'),
  catalogChars = document.querySelectorAll('.catalog__characters'),
  catalogLink = document.querySelectorAll('.catalog__characters--item .catalog__link'),
  catalogCaracter = document.querySelectorAll('.catalog__wrapper--left');

openCatalog.forEach((element) => {
  element.addEventListener('click', (e) => {
    const currentCatalogBtn = e.currentTarget,
      currentCatalogChar = element.nextElementSibling;
    if (currentCatalogBtn.classList.contains('catalog__btn--active')) {
      openCatalog.forEach((element) => element.classList.remove('catalog__btn--active'));
      catalogChars.forEach((element) => element.classList.remove('catalog__characters--active'));
    } else {
      openCatalog.forEach((element) => element.classList.remove('catalog__btn--active'));
      catalogChars.forEach((element) => element.classList.remove('catalog__characters--active'));
      currentCatalogBtn.classList.add('catalog__btn--active');
      currentCatalogChar.classList.add('catalog__characters--active');
    }
  })
});

catalogLink.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const currentLink = e.currentTarget.dataset.link;
    catalogCaracter.forEach(function (element) { element.style.display = "none" });
    document.querySelector(`[data-character="${currentLink}"]`).style.display = "block";
  })
});

// events

new Swiper('.events__swiper', {
  navigation: {
    prevEl: '.events__btn--prev',
    nextEl: '.events__btn--next'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    1445: {
      simulateTouch: false,
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1024: {
      simulateTouch: true,
      spaceBetween: 27,
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    768: {
      simulateTouch: true,
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    320: {
      simulateTouch: true,
      spaceBetween: 21,
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});

var eventsBtnPrev = document.querySelector('.events__btn--prev'),
  eventsBtnNext = document.querySelector('.events__btn--next');

eventsBtnPrev.setAttribute("tabIndex", "13");
eventsBtnNext.setAttribute("tabIndex", "13");

document.querySelector('.events__swiper .swiper-wrapper').addEventListener('transitionend', function () {
  eventsBtnPrev.setAttribute("tabIndex", "13");
  eventsBtnNext.setAttribute("tabIndex", "13");
});

// projects

new Swiper('.projects__swiper', {
  navigation: {
    prevEl: '.projects__btn--prev',
    nextEl: '.projects__btn--next'
  },
  breakpoints: {
    1445: {
      simulateTouch: false,
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1024: {
      simulateTouch: true,
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      simulateTouch: true,
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    320: {
      simulateTouch: true,
      spaceBetween: 21,
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }

});

tippy('[data-tippy-content]');

var projectsBtnPrev = document.querySelector('.projects__btn--prev'),
  projectsBtnNext = document.querySelector('.projects__btn--next');

projectsBtnPrev.setAttribute("tabIndex", "14");
projectsBtnNext.setAttribute("tabIndex", "14");

document.querySelector('.projects__swiper .swiper-wrapper').addEventListener('transitionend', function () {
  projectsBtnPrev.setAttribute("tabIndex", "14");
  projectsBtnNext.setAttribute("tabIndex", "14");
});

// contacts

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.75846806898367, 37.60108849999989],
    controls: ['smallMapDefaultSet'],
    zoom: 13.5,
  });

  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/1920/map__svg.svg',
  });

  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('routeButtonControl');
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.add('zoomControl', {
    size: 'small',
    float: 'right',
    position: {
      top: '255px',
      right: '25px'
    }
  });
  myMap.controls.add('geolocationControl', {
    size: 'large',
    float: 'right',
    position: {
      top: '360px',
      right: '25px'
    }
  });
};

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  colorWrong: '#FF5C00',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
      function: (name, value) => {
        const regexp = new RegExp(/^[a-zA-ZА-Яа-я]{0,}$/gm);
        return regexp.test(value);
      }
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    }
  },

  messages: {
    name: {
      minLength: 'Минимальное число символов: 2',
      maxLength: 'Число букв не должно быть больше 30',
      required: 'Введите имя',
      function: 'Неверный формат'
    },
    tel: {
      required: 'Введите телефон',
      function: 'Мимальное количество цифр: 10'
    },
  },
});

























































































