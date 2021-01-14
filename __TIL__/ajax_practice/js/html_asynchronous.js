;(function (global, $, ajax) {
  'use strict'

  /* Dom 객체에 참조 ---------------------------- */
  var $links = $('nav a')
  var $main = $('main.content')

  /* 이벤트 핸들러 ---------------------------- */
  var ajaxCallHTML = function (e) {
    // 앵커 요소의 기본 링크 능력을 상실
    e.preventDefault()
    var href = this.getAttribute('href')

    // 다른 앵커 요소를 클릭했을 때 이전에 클릭한 요소의 색상이 여전히 남아있지 않도록 한다.
    $links.each(function (link) {
      if (link.classList.contains('is-active')) {
        link.classList.remove('is-active')
      }
    })
    // 앵커 요소를 클릭했을 때 색상이 활성화 되로록 한다.
    this.classList.add('is-active')

    /* 비동기 통신 실행 ---------------------------- */
    // ajax 비동기 통신 수행
    // typeof data는 string
    ajax.get(href).then(function (data) {
      $main.html(data)
    })
  }

  /* 앵커 요소 순환 및 이벤트 바인딩 ---------------------------- */
  $.each($links, function (link, index) {
    // eq() : $link를 개별적으로 출력
    // Dom 객체가 각가의 앵커 요소를 출력
    var $link = $links.eq(index)
    $link.on('click', ajaxCallHTML)
  })
})(window, Dom, ajax)
