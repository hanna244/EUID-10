;(function (global) {
  'use strict'

  // XMLHttpRequest 객체 생성
  var xhr = new XMLHttpRequest()

  // .open() 메서드 동기 통신 설정
  xhr.open('GET', './ajax-desc.txt', false)

  var call_btn = document.querySelector('.call-ajax-data-button')
  var print_area = document.querySelector('.print_area')
  var callAjaxData = function () {
    xhr.send()

    // 동기 통신에 따른 응답이 오면 처리
    if (xhr.status === 200 || xhr.status === 304) {
      print_area.textContent = xhr.responseText
    } else {
      console.warn('통신 실패')
    }
  }

  call_btn.addEventListener('click', callAjaxData)
})(window)
