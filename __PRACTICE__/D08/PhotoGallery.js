var photoList = ['thumbPhoto-1.jpg', 'thumbPhoto-2.jpg', 'thumbPhoto-3.jpg', 'thumbPhoto-4.jpg']
// photoGalleryButtons [button.photoGallery__button, button.photoGallery__button, button.photoGallery__button, button.photoGallery__button]

var photoGallery = document.querySelector('.photoGallery');
var photoGalleryButtons = photoGallery.querySelectorAll('button');
var photoGalleryBigPhoto = photoGallery.querySelector('.photoGallery__bigPhoto');
var photoGalleryBigPhotoImage = photoGalleryBigPhoto.querySelector('img');

function handleChangeBigPhoto(e) {
    var photoGalleryButtonIndex = e.currentTarget.getAttribute('data-index');
    var x = Number(photoGalleryButtonIndex) + 1;
    photoGalleryBigPhotoImage.setAttribute('src', './assets/bigPhoto-' + x + '.jpg')
}
var i = 0;
var l = photoGalleryButtons.length;

while (i < l) {
    var button = photoGalleryButtons[i];
    button.setAttribute('data-index', i);
    button.addEventListener('click', handleChangeBigPhoto);
    ++i;
}