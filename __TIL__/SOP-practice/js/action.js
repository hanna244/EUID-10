// 영상 강의 시청 후 혼자 연습해본 파일
// Open API

/* SOP(Same Origin Policy) 문제가 발생하지 않는 경우 ----------------------------------- */

// Access-Control-Allow-Origin: *
;(function (global, $, ajax) {
  'use strict'

  // 사용법
  // 'http://www.kaist.ac.kr/_module/api/json.php?code=kr_060501&start=1&display=10'
  var kaist_open_api_address = 'http://www.kaist.ac.kr/_module/api/json.php'
  // 알림사항 : 0801, 학사공지 : 0802, 채용초빙 : kr_0814, 뉴스 : news
  var code = 'news'
  var start = 1
  var display = 5

  ajax
    .get(
      kaist_open_api_address +
        '?code=' +
        code +
        '&start=' +
        start +
        '&display=' +
        display
    )
    .then(function (data) {
      var template = $.template(JSON.parse(data), function (item) {
        return item.contents
      })
      $('main').html(template)
    })
}) //(window, Dom, ajax)

/* SOP 문제가 발생한 경우 ----------------------------------------------------------- */

// JSONP(JSON with Padding) 방식
;(function (global, $, ajax) {
  'use strict'

  var api_address = 'https://yamoo9.herokuapp.com/rest/ediya-menu'

  // jsonp 헬퍼함수
  function jsonp(url, callback, time_limit, log) {
    var unique_id = Math.floor(Math.random() * 100000)
    var jsonpCb = 'jsonpCb_' + unique_id
    var s = document.createElement('script')
    s.src = url + '?callback=' + jsonpCb
    document.head.insertAdjacentElement('beforeend', s)
    window[jsonpCb] = callback
    s.remove ? s.remove() : s.parentNode.removeChild(s)
    window.setTimeout(function () {
      log &&
        console.info('JSONP 콜백함수: ' + jsonpCb + '를 전역에서 제거했습니다.')
      delete window[jsonpCb]
    }, (time_limit || 3) * 1000)
  }

  ajax.jsonp(api_address, function (data) {
    $.template(data, function (item) {
      console.log(item)
    })
  })

  // jsonp 원리 익히기
  // var script = document.createElement('script')
  // script.src = api_address + '?callback=jsonpCB'

  // document.head.insertAdjacentElement('beforeend', script)

  // function jsonp(data) {
  //   console.log(data)
  // }
}) //(window, Dom, ajax)

/* CORS 무료 프록시 서버 활용 -------------------------------------------------------- */
;(function (global, $, ajax) {
  ;('use strict')

  var api_address = 'https://yamoo9.herokuapp.com/rest/ediya-menu'

  function corsURL(url) {
    return 'https://crossorigin.me/' + url
  }
})(window, Dom, ajax)
