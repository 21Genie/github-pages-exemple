let body = document.querySelector('.page');
let lightThemeButton = document.querySelector('.theme-button-light');
let darkThemeButton = document.querySelector('.theme-button-dark');

darkThemeButton.onclick = function () {
  body.classList.add('dark')
  lightThemeButton.classList.remove('active')
  darkThemeButton.classList.add('active')
}

lightThemeButton.onclick = function () {
  body.classList.remove('dark')
  lightThemeButton.classList.add('active')
  darkThemeButton.classList.remove('active')
}

let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let serifFontButton = document.querySelector('.font-button-serif');

serifFontButton.onclick = function () {
  body.classList.add('serif')
  serifFontButton.classList.add('active')
  sansSerifFontButton.classList.remove('active')
}

sansSerifFontButton.onclick = function () {
  body.classList.remove('serif')
  serifFontButton.classList.remove('active')
  sansSerifFontButton.classList.add('active')
}


let articleSections = document.querySelectorAll('.blog-article');

for (let articleSection of articleSections) {
  let moreButton = articleSection.querySelector('.more');
  moreButton.onclick = function () {
    articleSection.classList.remove('short');
  };
}


let BtnGrid = document.querySelector('.card-view-button-grid');
let BtnList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

BtnList.onclick = function () {
  cards.classList.add('list')
  BtnGrid.classList.remove('active')
  BtnList.classList.add('active')
}

BtnGrid.onclick = function () {
  cards.classList.remove('list')
  BtnGrid.classList.add('active')
  BtnList.classList.remove('active')
}


let mainImg = document.querySelector('.active-photo');
let previews = document.querySelectorAll('.preview-list a');

for (let activeImage of previews) {
  activeImage.onclick = function (evt) {
    evt.preventDefault();
    mainImg.src = activeImage.href

    let currentActive = document.querySelector('.preview-list .active-item');
    currentActive.classList.remove('active-item');
    activeImage.classList.add('active-item');
  }
}