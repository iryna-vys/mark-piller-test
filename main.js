'use strict'

const page = document.querySelector('.page');
const iconsBlack = document.querySelectorAll('.link-icon-black');
const iconsWhite = document.querySelectorAll('.link-icon-white');

const handleSelectLigth = () => {
  page.classList.add('light-theme');
  page.classList.remove('dark-theme');
  page.classList.remove('backendless-theme');
  iconsBlack.forEach(icon => {
    icon.classList.add('link-icon');
    icon.classList.remove('hidden');
  });
  iconsWhite.forEach(icon => {
    icon.classList.add('hidden');
    icon.classList.remove('link-icon');
  });
}

const handleSelectDark = () => {
  page.classList.add('dark-theme');
  page.classList.remove('light-theme');
  page.classList.remove('backendless-theme');
  iconsWhite.forEach(icon => {
    icon.classList.add('link-icon');
    icon.classList.remove('hidden');
  });
  iconsBlack.forEach(icon => {
    icon.classList.add('hidden');
    icon.classList.remove('link-icon');
  })
}

const handleSelectBackendless = () => {
  page.classList.add('backendless-theme');
  page.classList.remove('light-theme');
  page.classList.remove('dark-theme');
}

const lightThemeButton = document.querySelector('.light-theme-button');
lightThemeButton.onclick = () => handleSelectLigth();

const darkThemeButton = document.querySelector('.dark-theme-button');
darkThemeButton.onclick = () => handleSelectDark();

const backendlessThemeButton = document.querySelector('.backendless-theme-button');
backendlessThemeButton.onclick = () => handleSelectBackendless();

const themeSelect = document.querySelector('.theme-select');
themeSelect.onchange = function() {
  switch (themeSelect.value) {
    case 'light-theme': 
      handleSelectLigth();
      break;
    case 'dark-theme':
      handleSelectDark();
      break;
    case 'backendless-theme':
      handleSelectBackendless();
  }
}

const lightThemeRadio = document.querySelector('.light-theme-radio');
lightThemeRadio.onchange = () => handleSelectLigth();

const darkThemeRadio = document.querySelector('.dark-theme-radio');
darkThemeRadio.onchange = () => handleSelectDark();

const backendlessThemeRadio = document.querySelector('.backendless-theme-radio');
backendlessThemeRadio.onchange = () => handleSelectBackendless();


const modals = document.querySelectorAll('.modal');
const imgs = document.querySelectorAll('.gallery-img');
const modalImgs = document.querySelectorAll('.modal-content');
const captionTexts = document.querySelectorAll('.modal-caption');
imgs.forEach((img, i) => {
  img.onclick = function(){
    modals[i].classList.remove('hidden');
    modalImgs[i].src = this.src;
    captionTexts[i].innerHTML = this.alt;
  }
});

const spans = document.querySelectorAll('.close');
spans.forEach((span, i) => {
  span.onclick = function() {
    modals[i].classList.add('hidden');
  }
});
