var languages = ['HTML', 'CSS', 'JavaSctipt', 'Python']

/*   예제 1   */

while (languages.length) {
  // 조건 값이 참이면, 코드 블럭을 실행한다.
  languages.pop()
  // 조건이 참이면, 참일 동안 계속 반복 실행된다. (if문은 참일 경우 단 한 번만 실행)
  // 그래서 조건을 거짓으로 변경하는 중단점이 필요. (사용자가 설정) -> 중단점이 없으면 무한 반복(infinite)이 된다.(브라우저가 해당 메세지를 알려줌)
}

/*   예제 2   */

// 값이 `true`인 변수를 선언
var while_condition = true
var count = 0 // 조건 값을 '거짓'으로 만들기 위해
// if문을 사용하여 반복문의 조건 값을 '거짓'으로 만들어준다. 이때 if문의 조건값을 '반복종료조건'이라고 한다.

while (while_condition) {
  count = count + 1 // 0, 1, 2, 3, 4, ...으로 점점 숫자는 커지게 된다.
  console.log(count)
  if (count > 5) {
    while_condition = false
  } // '반복종료조건'을 5초과 일때 조건을 '거짓'이 되게 한다라는 조건문을 설정했다.
}

/*   예제 3   */

var while_condition = true
var count = 0
var breakPoint = 5 // breakPoint의 값이 증가하면 반복 횟수도 증가한다.

// count = count + 1;, count += 1;, count++; 세 구문 모두 같은 값으로 출력된다.
while (while_condition) {
  count = count + 1
  console.log(count)
  if (count > breakPoint) {
    while_condition = false
  }
}

// breakPoint = 10이고 if(count > breakPoint)일 때, 값은 1-11까지 출력된다. (11회 카운트)
// breakPoint = 10이고 if(count >= breakPoint)일 때, 값은 1-10까지 출력된다. (10회 카운트)

// 왜 0부터 카운트 하지 않는가?
// count = count + 1;이라는 조건을 넣어주었기 때문이다.

/* do ~ while --------------------------------------------------------------- */

// while (조건) { ... } : 조건이 거짓이면 반복 실행되지 않음
// do { ... } while(조건) : 조건이 거짓일지라도 1회는 실행
// while 문

while (false) {
  console.log('조건이 거짓이면 반복 실행되지 않습니다.')
}

// do ~ while 문

do {
  console.log('do ~ while 문의 경우는 조건이 거짓일지라도 1회는 실행됩니다.')
} while (false)
