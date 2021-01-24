// -----------------------------------------------------------------------------------------
// 키보드 이벤트 핸들링 (Keyboard Event Handling)
//
// - 이벤트 속성: keydown, keypress, keyup / input(HTML5)
// - 이벤트 객체 (Event Object)
//
// 이벤트 발생 순서
// keydown ➔ keypress ➔ keyup
//
// 키가 처음 눌려지면 keydown 이벤트가 발생합니다.
// (영문, 숫자, space, enter, 한글, tab, caps lock, shift, ctrl, alt(option), command, arrow, F1~12)
//
// keydown 이벤트 이후, keypress 이벤트가 발생합니다.
// (영문, 숫자, space, enter)
//
// 키를 놓으면 keyup 이벤트가 발생합니다.
// (tab, caps lock 발생 X)
//
// 인터랙션 테스트: https://codepen.io/yamoo9/full/vRmeQZ/
//
//
// 화살표 키 up을 누르면, boy 캐릭터가 점프해야 합니다.
// 점프 후에는 다시 서 있는 boy 캐릭터로 변경되어야 합니다.
// 화살표 키 left, right를 누르면 boy 캐릭터가 누른 방향으로 이동합니다.
//
// arrow-top   = 점프 / space
// arrow-left  = 왼쪽을 보며 이동
// arrow-right = 오른쪽을 보며 이동
//
// ------------------------------------------------------------------------------------------
// codepen 실습 : https://codepen.io/hanna244/pen/rNMgZOd?editors=0011

// 문서 객체 참조
var boy = el('.boy')
var distanceX = 40

// 구형
// window.onkeydown = function(){};

// 신형
// 조건이 많아지기 때문에 switch 문을 사용
window.addEventListener('keydown', function (e) {
  // console.log(e.type, ' = ', e.keyCode, ' | ', e.code, ' | ', e.key);
  switch (e.keyCode) {
    case 38: // up
    case 32: // space
      jump()
      break
    case 37: // arrow right
      moveLeft()
      break
    case 39: // arrow right
      moveRight()
  }
})

// jump 클래스 추가 후 여전히 요소에 클래스가 남아있는 이슈를 해결
boy.addEventListener('animationend', stand)

function stand() {
  boy.classList.remove('jump')
}
function jump() {
  boy.classList.add('jump')
}
function getDistanceX() {
  return (
    window.parseInt(boy.style.transform.replace('translateX(', ''), 10) || 0
  )
}
function moveLeft() {
  // 함수가 실행 됐을 때 애니메이션이 마치 움직이게(이동하기)하기 위해 translateX 값을 가져온다.
  var disX = getDistanceX() - distanceX
  boy.style.transform = 'translateX(' + disX + 'px) rotateY(180deg)'
}
function moveRight() {
  var disX = getDistanceX() + distanceX
  boy.style.transform = 'translateX(' + disX + 'px) rotateY(0deg)'
}

// 코드 리팩토링
// getDistanceX() 함수 만들어서 중복되는 구문 헬퍼 함수 만들기
// 유지 보수를 고려해서 distanceX(캐릭터 이동거리 설정) 변수 만들기

// 코드 리팩토링 전 코드
// function moveLeft() {
//  // 함수가 실행 됐을 때 애니메이션이 마치 움직이게(이동하기)하기 위해 translateX 값을 가져온다.
//   var disX = window.parseInt(boy.style.transform.replace('translateX(', ''), 10) || 0;
//   console.log(disX);
//   boy.style.transform = 'translateX(' + (disX -= 30) + 'px) rotateY(180deg)';
// }
// function moveRight() {
//   var disX = window.parseInt(boy.style.transform.replace('translateX(', ''), 10) || 0;
//   console.log(disX);
//   boy.style.transform = 'translateX(' + (disX += 30) + 'px) rotateY(0deg)';
// }
