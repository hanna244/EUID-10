/* continue 문 ----------------------------------------------------------------- */
// 반복(순환) 중 조건이 충족할 경우, 조건 확인 영역으로 이동 (일종의 jump와 같다)

var while_condition = true
var count = 0
var repeatingCount = 10

while (while_condition) {
  ++count // 선 증가 연산자
  if (count === 3 || count === 7) {
    continue
  }
  if (count >= repeatingCount) {
    while_condition = false
  }
}

// 출력되는 결과 : 1, 2, 4, 5, 6, 8, 9, 10

/* break 문 ------------------------------------------------------------------ */
// 반복(순환) 중 조건이 충족할 경우, 실행 종료 (반복문 종료)

var while_condition = true
var count = 0
var repeatingCount = 10

while (while_condition) {
  ++count // 선 증가 연산자
  if (count === 3 || count === 7) {
    continue
  }
  if (count === 6) {
    break
  }
  console.log(count) // 6
  if (count >= repeatingCount) {
    while_condition = false
  }
}

// 출력되는 결과 : 1, 2, 4, 5
