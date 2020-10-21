var photoList = ['bigPhoto-1.jpg', 'bigPhoto-2.jpg', 'bigPhoto-3.jpg', 'bigPhoto-4.jpg']

var photoGallery = document.querySelector('.photoGallery');
var photoGalleryButtons = photoGallery.querySelectorAll('button');
var photoGalleryBigPhoto = photoGallery.querySelector('.photoGallery__bigPhoto');
var photoGalleryBigPhotoImage = photoGalleryBigPhoto.querySelector('img');

// handleChangeBigImage 라는 이름의 함수 만들기 
// 클릭 이벤트를 적용한 이미지를 클릭했을 때 ....
function handleChangeBigImage(e)  {
    // console.log(e.currentTarget);
    // 버튼에 설정한 데이터 인텍스 속성의 순서를 가져온다
    var z = e.currentTarget.getAttribute('data-index');
    
    // 가져온 z값에 1을 더해줘야하는데 z의 값의 유형은 문자데이터이기 때문에 '+1'을 할 수 없다. 그래서 z값의 유형을 숫자데이터로 바꿔줘야한다. 
    z = Number(z) + 1

    // 가져온 값을 큰 이미지 src 속성 값을 업데이트 한다.
    photoGalleryBigPhotoImage.setAttribute('src', './assets/bigPhoto-' + z + '.jpg');
}

// 노드리스트에서 찾은 요소 중에 첫 번째 요소에 클릭 이벤트 적용, 그리고 함수 이름 정의
// photoGalleryButtons[0].addEventListener('click', handleChangeBigImage);
// photoGalleryButtons[1].addEventListener('click', handleChangeBigImage);


// 큰 화면에 이미지가 바뀌게 하기 위해서는 집합된 원소의 순서를 바꿔주는 반복문을 만들어야 한다.
var i = 0;
var l = photoGalleryButtons.length;

while (i < l) {
    var button = photoGalleryButtons[i];
    button.setAttribute('data-index', i);
    button.addEventListener('click', handleChangeBigImage);
    ++i;
}