// -----------------------------------------------------------------------------------------
// 이벤트 핸들링 (Event Handling)
//
// - 이벤트 속성: on{EventType} : click, mouseover, dragstart, ....
// - 핸들러 : 이벤트 속성에 연결된 함수 : 이벤트 객체(Event Object)를 매개변수로 전달 받는다.
// -----------------------------------------------------------------------------------------

/* oninput 방법 --------------------------------------------------------------- */

/* <form class="form" oninput="sumNumbers()"></form> */

const sumNumbers = function () {
  const number_1 = el('input[aria-label="첫번째 수"]').value
  const number_2 = el('input[aria-label="두번째 수"]').value
  const output = el('output[aria-label="결과 값"]')
  const result = Number(number_1) + Number(number_2)
  output.value = result
}

// 실수한 부분
// const output = el('output[aria-label="결과 값"]').value 라고 입력해서 작동이 안됐었댜.

/* addEventListener 방법 ------------------------------------------------------ */

var formNode = el('form')

const handleSumNumber = function () {
  const number_1 = el('input[aria-label="첫번째 수"]').value
  const number_2 = el('input[aria-label="두번째 수"]').value
  const output = el('output[aria-label="결과 값"]')
  const result = Number(number_1) + Number(number_2)
  output.value = result
}

formNode.addEventListener('input', handleSumNumber)
