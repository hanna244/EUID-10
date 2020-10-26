/**
 * 문서에서 요소 노드를 찾아오는 유틸리티 함수
 * @function
 * @param selector:String CSS 선택자
 * @param context:Node document 또는 문서의 요소 노드
 * @returns HTMLElementNode 문서 요소 객체 반환
 * @example
 * var appHeader = findNode('.appHeader');
 * var homeLink = findNode('.homeLink', appHeader);
 */

// DOM API 표준으로 제공된 기술 사양
// var appHeader = document.querySelector('.appHeader');
// var homeLink = appHeader.querySelector('.homeLink');

function findNode(selector, context) {
  // if (!context) { context = document; }
  // context = context ? context : document;
  // context = context || document;
  return (context || document).querySelector(selector);
}

var appHeader = findNode('.appHeader');
var homeLink = findNode('.homeLink', appHeader);
