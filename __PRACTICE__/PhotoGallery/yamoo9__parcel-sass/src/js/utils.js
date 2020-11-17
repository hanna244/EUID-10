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

// 완전정복! 함수!!!

// 함수 = 프로시저(절차)
// 함수 프로그래밍 - 절차형 프로그래밍 - 절차에 맞게 프로그램이 실행
// 객체 지향 프로그래밍, React
// JavaScript 언어 (왜??? 함수를 짜서 절차적으로 프로그램이 실행되도록 프로그래밍 사고(생각하는 힘) 하려고)

function findNode(selector, context) {
  // if (!context) { context = document; }
  // context = context ? context : document;
  // context = context || document;
  return (context || document).querySelector(selector);
}

function on(domNodeOrObject, eventType, eventListener) {
  domNodeOrObject.addEventListener(eventType, eventListener);
}

function ready(initializationFunction) {
  on(window, 'DOMContentLoaded', initializationFunction);
}

/* -------------------------------------------------------------------------- */

function handleClickBody(e) {
  var appHeader = findNode('.appHeader');
  var homeLink = findNode('.homeLink', appHeader);
  console.log(homeLink);
}

function init() {
  on(document.body, 'click', handleClickBody);
}

ready(init);
