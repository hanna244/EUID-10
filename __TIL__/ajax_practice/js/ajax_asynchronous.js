// 참고 : https://app.gitbook.com/@shhn0509/s/dom/~/drafts/-MQq3Zg9CAGcg_134aue/ajas/ajax-1/undefined-1/ajax/ajax

;(function (global) {
  'use strict'

  var call_btn = document.querySelector('.call-ajax-data-button')
  var print_area = document.querySelector('.print_area')

  function ajaxDemo() {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', './ajax-desc.txt', true)

    xhr.onreadystatechange = function () {
      if ((xhr.status === 200 || xhr.status === 304) && xhr.readyState === 4) {
        console.log('[finish] xhr.status : ', xhr.status)
        console.log('[complete] xhr.readyState : ', xhr.readyState)
        print_area.textContent = xhr.responseText
      } else {
        console.log('xhr.status : ', xhr.status)
        console.log('xhr.readyState : ', xhr.readyState)
        // console.warn('통신 실패')
      }
    }
    xhr.send()
  }

  // call_btn.addEventListener('click', ajaxDemo)

  // ajax 라이브러리 사용하기
  /*   1   */
  ajax('./ajax-desc.txt').then(function (data) {
    print_area.textContent = data
  })

  /*   2   */
  ajax({
    url: './ajax-desc.txt',
    dataType: 'text',
  }).then(function (data) {
    print_area.textContent = data
  })
})(window)
