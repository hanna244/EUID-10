/**
 * DOM 모듈
 */
window.DOM = (function moduleDOM(global) {
  'use strict'

  /* -------------------------------------------------------------------------- */
  // 비공개 모듈

  var _isType = function (data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
  }

  var _copyArray = function (array) {
    return _isType(array) === 'array' ? array.slice() : []
  }

  /* -------------------------------------------------------------------------- */
  // 폴리필(Polyfill)

  if (!Object.entries) {
    Object.entries = function (obj) {
      // Object.keys() IE 9+
      var ownProps = Object.keys(obj)
      var i = ownProps.length
      var resArray = new Array(i)
      while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]]
      return resArray
    }
  }

  /* -------------------------------------------------------------------------- */
  // 유틸리티 함수

  var getById = function (idName) {
    return document.getElementById(idName)
  }

  var getNode = function (selector, context) {
    return (context || document).querySelector(selector)
  }

  var getNodeList = function (selector, context) {
    return (context || document).querySelectorAll(selector)
  }

  /* -------------------------------------------------------------------------- */

  // 가상 노드 생성
  var createElement = function () {
    // 전달 인자 분해
    var type = arguments[0]
    var props = arguments[1]
    var children = [].slice.call(arguments, 2)

    // 노드 생성
    var node = document.createElement(type)

    // props 값이 존재하지 않을 경우 초기화
    if (!props) {
      props = {}
    }

    // props.children 값 유형이 문자일 경우
    if (_isType(props.children) === 'string') {
      // 문자 → 배열화 재할당
      props.children = [props.children]
    }

    // children 값이 존재할 경우
    if (children) {
      // 값 유형이 문자인 경우
      if (_isType(children) === 'string') {
        // 문자 → 배열화 재할당
        children = [chlidren]
      }

      // 첫번째 아이템 추출
      var firstChild = children[0]

      // 첫번재 아이템이 배열 유형인 경우
      if (_isType(firstChild) === 'array') {
        // 첫번째 아이템 복제 후, 재할당
        props.children = _copyArray(firstChild)
      } else {
        // 첫번째 아이템이 배열 유형이 아닌 경우
        props.children = props.children || []
      }

      // props.children, children 복제 후, 배열 병합 → 재할당
      props.children = _copyArray(props.children).concat(_copyArray(children))
    }

    // props 속성 객체 node에 할당 (이벤트 속성 포함)
    for (
      var i = 0, keyValues = Object.entries(props), l = keyValues.length;
      i < l;
      i++
    ) {
      var keyValue = keyValues[i]
      var key = keyValue[0]
      var value = keyValue[1]

      if (key !== 'children') {
        if (/^on/.test(key)) {
          var eventType = key.replace('on', '').toLowerCase()
          var eventListener =
            _isType(value) === 'function' ? value : function () {}
          node.addEventListener(eventType, eventListener)
        } else {
          if (key === 'className') {
            key = 'class'
          }
          node.setAttribute(key, value)
        }
      } else {
        value.map(function (child) {
          if (_isType(child) === 'string') {
            node.innerText = node.innerText + child
          }
          if (child.nodeType === 1) {
            node.appendChild(child)
          }
        })
      }
    }

    // node 반환
    return node
  }

  /* -------------------------------------------------------------------------- */

  // 렌더링: 가상 노드 → DOM 노드에 마운트(mount)
  var render = (vNode, domNode) => {
    domNode.append(vNode)
  }

  /* -------------------------------------------------------------------------- */
  // 모듈 내보내기

  return {
    getById,
    getNode,
    getNodeList,
    createElement,
    render,
  }
})(window)
