// -----------------------------------------------------------------------------------------
// 마우스 이벤트 핸들링 (Mouse Event Handling)
//
// <a href> 요소의 기본 동작 차단이 필요한 이유
// click 이벤트는 마우스 이벤트이지만, 접근성도 준수 가능한 이벤트입니다.
//
// 예제에 영감을 준 URL: dribbble.com/shots/2818064-Broken-link
// codepen : https://codepen.io/hanna244/pen/MWjdVJj?editors=0011
//
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// 현재 시점에서 이 부분 코드는 무시 하고 아래 부분으로 넘어갑니다.

var img, sound

var lazyload_urls = [
  // monkys nomal ➔ click 애니메이션 GIF
  'monks-to-click.gif',
  // monkys click ➔ nomal 애니메이션 GIF
  'monks-to-normal.gif',
  // click sound ➔ 클릭 사운드 MP3
  'https://cdn.rawgit.com/yamoo9/assets/master/media/clickOn.mp3',
]

lazyload_urls.forEach(function (url, index) {
  var max = lazyload_urls.length - 1
  // console.log(url)
  // 레이지 이미지 로드
  if (index < max) {
    img = new Image()
    img.src = url
  }
  // 클릭 사운드
  else {
    sound = new Audio()
    sound.src = url
    init()
  }
})

// ------------------------------------------------------------------------------------------
// 이 부분 코드 부터 실습입니다.

// 문서 객체 참조
var monky = null

// 클릭 상태 변수
var is_clicked = false

// 초기화 함수
function init() {
  // 이 곳에 코드를 작성합니다
  monky = el('.link.is-monkys')
  monky.addEventListener('click', toggleMonkyMotion)
}

function toggleMonkyMotion(e) {
  // 이벤트 객체의 기본동작 차단 메서드
  e.preventDefault()
  var target = e.target
  if (is_clicked) {
    target.src = 'monks-to-normal.gif'
  } else {
    target.src = 'monks-to-click.gif'
  }
  // 상태 변경
  is_clicked = !is_clicked
  console.log(is_clicked)
  // click 사운드 재생
  sound.play()
}
