// 모듈 주입(injection) →
;(function main(global, LOGGER, DOM) {
  'use strict'

  // LOGGER 모듈 추출
  var success = LOGGER.success
  var error = LOGGER.error

  // 타이머 설정
  window.setTimeout(function () {
    isValid
      ? success('GOOD! 의존성 모듈 관리에 아무런 문제가 없습니다.')
      : error('BAD!! 의존성 모듈 관리 문제로 앱이 정상 작동하지 않습니다.')
  }, 300)

  // 유효성 검사 조건 변수
  var isValid = false

  /* -------------------------------------------------------------------------- */

  // DOM 모듈 추출
  var getNode = DOM.getNode
  var createElement = DOM.createElement
  var render = DOM.render

  // 유효성 검사 조건 변수 업데이트 (불리언 화)
  isValid = Boolean(getNode)

  // 루트 노드 참조
  var rootNode = getNode('#root')

  // 가상 노드 생성
  var headlineNode = createElement(
    'h1',
    {
      className: 'headline',
    },
    '나는 웹팩을 사랑해요!'
  )

  // 렌더링
  render(headlineNode, rootNode)
})(window, window.LOGGER, window.DOM)
