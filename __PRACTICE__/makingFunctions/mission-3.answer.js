/**
 * 미션 3.
 * 다음 문장을 읽고, 재사용 가능한 함수를 추출해보세요.
 */

// 안되면 반복해서 익숙해져야 한다. 그래야 할 수 있다.



/* -------------------------------------------------------------------------- */
/* 함수를 작성해보세요.                                                            */
/* -------------------------------------------------------------------------- */
function repetitiveWork(doIt, canYou, repeatCount, limitCount) {
  // 매개변수 초기화
  repeatCount = repeatCount || 0;
  limitCount = limitCount || 10;

  // 함수 안의 함수 (함숭 안에서만 접근 가능)
  function repeat(doIt) {
    console.log(doIt);
    if (++repeatCount > limitCount) { canYou = !canYou; }
  }

  do { repeat(doIt); } 
  while (!canYou);

  return canDo();
}

// 외부의 함수
function canDo() {
  return '그래야 할 수 있다.';
}



/* -------------------------------------------------------------------------- */
/* 함수를 실행해 기대한 대로 작동되는지 확안하세요.                                       */
/* -------------------------------------------------------------------------- */
repetitiveWork('안되면 반복해서 익숙해져야 한다.', false);
