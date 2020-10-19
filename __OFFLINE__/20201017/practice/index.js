/* 함수 이해 I ------------------------------------------------------------------ */

function goTo(who, where) {
  if (!where) {
    where = '교회';
  }
  return who + '(이)가' + ' ' + where + '(으)로 간다';
}

console.log(goTo('엄마', '집'));
console.log(goTo('한나'));
console.log(goTo('두나'));
console.log(goTo('세나'));

/* 함수 이해 II -------------------------------------------------------------------- */

function findElement(selector) {
  // document.querySelector(selector); // 문서에서 찾은 요소 객체
  return document.querySelector(selector);
}

function findElements(selector) {
  return document.querySelectorAll(selector);
}

var appHeader = findElement('.app-header');
console.log(appHeader);

var appHeaderTitle = document.querySelector('.app-header-title');
console.log(appHeaderTitle);

var mainContent = findElement('.main-content');
console.log(mainContent);
