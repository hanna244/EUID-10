/*    1     */
// while문을 for문으로 바꾸기

var i = 0

while (i < 10) {
  console.log(i)
  ++i
}

// 출력되는 값 : 1-9 / i : 10

// for 문
for (var i = 0; i < 10; ++i) {
  console.log(i)
}

// 출력되는 값 : 1-9 / i : 10

// for 문 실행 흐름
// [초기선언] -> [조건문] -> `console.log(i);` -> [증감문]

/*    2     */
// for 문의 변수구간을 밖으로 빼서 작성하는 법

// for 문 안에 변수구간이 있던 자리에 `;` 세미콜론을 남겨준다
var i = 0
for (; i < 10; ++i) {
  console.log(i)
}

/*    3     */
// 중첩된 while 문

var i = 0
var j = 4

while (i < 10) {
  while (j > 0) {
    console.log('j:', j)
    j = j - 2
  }
  console.log('i:', i)
  ++i
}

// 출력되는 값 j : 4, 2, i : 0-9 // i = 10, j = 0

// 중첩된 while 문을 for 문으로 바꾸기

for (var i = 0; i < 10; ++i) {
  for (var j = 4; j > 0; j = j - 2) {
    console.log('j:', j)
  }
  console.log('i:', i)
}

// 중첩된 for 문을 더 간단하게 작성하기
// #3 콤마를 사용해서 두 개의 변수를 묶어준 선언 구간, 뿐만아니라 증감에 대한 변화값도 콤마로 묶어 줄 수 있다.

for (var i = 0, j = 4; i < 10; ++i, j = j - 2) {
  if (j > 0) {
    console.log('j:', j)
  }
  console.log('i:', i)
}

// 중첩된 for 문에 label 넣어주기

outFor: for (var i = 0; i < 10; ++i) {
  inFor: for (var j = 4; j > 0; j = j - 2) {
    console.log('j:', j)
    break outFor
  }
  console.log('i:', i)
}

// 출력되는 값 : j = 4
