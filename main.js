'use strict'

const page = document.querySelector('.page');

const handleSelectLigth = () => {
  page.classList.add('light-theme');
  page.classList.remove('dark-theme');
  page.classList.remove('backendless-theme');
}

const handleSelectDark = () => {
  page.classList.add('dark-theme');
  page.classList.remove('light-theme');
  page.classList.remove('backendless-theme');
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

