/* 이미지(해시 포함) 경로 호출 --------------------------------------------------------- */

import bigPhoto1 from '../assets/bigPhoto-1.jpg';
import bigPhoto2 from '../assets/bigPhoto-2.jpg';
import bigPhoto3 from '../assets/bigPhoto-3.jpg';
import bigPhoto4 from '../assets/bigPhoto-4.jpg';

/* 설정 변수 -------------------------------------------------------------------- */

var indexKey = 'data-index';
var activeClassName = 'photoGallery__button--active';
var bigPhotos = [ bigPhoto1, bigPhoto2, bigPhoto3, bigPhoto4 ];

/* 문서 대상(요소) 찾기 ------------------------------------------------------------- */

var photoGallery = document.querySelector('.photoGallery');

var photoGalleryBigPhoto = photoGallery.querySelector('[class*="bigPhoto"]');
var photoGalleryBigPhotoImage = photoGalleryBigPhoto.querySelector('img');
var photoGalleryBigPhotoCaption = photoGalleryBigPhoto.querySelector('[class*="Caption"]');

var photoGalleryControls = photoGallery.querySelector('[class*="controls"]');
var photoGalleryButtons = photoGalleryControls.querySelectorAll('[class*="button"]');

/* 이벤트 리스너 ------------------------------------------------------------------ */

function handleClickPhotoGalleryButton(e) {
  var button = this;
  var image = button.querySelector('img');
  var index = button.getAttribute(indexKey);

  renderActiveButton(button);
  renderCaption(image);
  renderActiveImage(index);
}

/* 렌더링 함수 ------------------------------------------------------------------- */

function renderActiveButton(button) {
  for (var i = 0; i < photoGalleryButtons.length; i++) {
    var buttonTester = photoGalleryButtons[i];
    if (buttonTester.classList.contains(activeClassName)) {
      buttonTester.classList.remove(activeClassName);
    }
  }

  button.classList.add(activeClassName);
}

function renderCaption(image) {
  var captionText = image.getAttribute('alt').replace('(썸네일)', '');
  photoGalleryBigPhotoCaption.textContent = captionText;
}

function renderActiveImage(index) {
  photoGalleryBigPhotoImage.setAttribute('src', bigPhotos[index]);
}

/* 이벤트 바인딩 ------------------------------------------------------------------ */

var i = 0;
var button = null;

while ((button = photoGalleryButtons[i++])) {
  button.setAttribute(indexKey, i - 1);
  button.addEventListener('click', handleClickPhotoGalleryButton);
}
