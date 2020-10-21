/*! yamoo9@euid.dev */

// 이미지를 관리할 집합 객체
var photoList = [ 'bigPhoto-1.jpg', 'bigPhoto-2.jpg', 'bigPhoto-3.jpg', 'bigPhoto-4.jpg' ];

// 문서에서 요소(대상) 찾기
var photoGallery = document.querySelector('.photoGallery');
var photoGalleryButtons = photoGallery.querySelectorAll('button');
var photoGalleryBigPhoto = photoGallery.querySelector('.photoGallery__bigPhoto');
var photoGalleryBigPhotoImage = photoGalleryBigPhoto.querySelector('img');

// 이벤트 핸들러(리스너) 작성
function handleChangeBigImage(e) {
  // console.log(e.currentTarget); // 이벤트가 연결된 대상
  // console.log(e.target); // 사용자가 클릭한 이벤트 대상 (현 시점, 나중에 위임 배울 때 자세히 설명)
  console.log(photoGalleryBigPhotoImage);
  // HTML 요소의 속성(attribute) src
  // getAttribute(name)
  // console.log(photoGalleryBigPhotoImage.src);
  console.log(photoGalleryBigPhotoImage.getAttribute('src'));
  // setAttribute(name, value)
  photoGalleryBigPhotoImage.setAttribute('src', './assets/' + photoList[1]);
}
// 이벤트 구문
photoGalleryButtons[1].addEventListener('click', handleChangeBigImage);
