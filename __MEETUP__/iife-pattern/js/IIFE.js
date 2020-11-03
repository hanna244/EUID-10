// 1. 전역을 오염시킨다는 의미는 무엇??
var hanna = 'hanna';

(function scopeFunction() {
  console.log(hanna);

  function init() {
    console.log('initialization');
  }

  init();
})();

console.log(hanna);

/* -------------------------------------------------------------------------- */

// 2. IIFE 패턴이 사용된 함수의 반환 값 함수에 대한 질문
var fn2 = (function outerFunction() {
  var fnName = 'outerFunction';

  return function innerFunction() {
    // var fnName = 'innerFunction';
    console.log(fnName);
  };
})();

window.setTimeout(fn2, 3000); // 3초 뒤에 fn2 실행 - 결과 값: ?
