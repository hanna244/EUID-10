// 실습 파일 열었을 때 action.js에 저장되어 있던 파일
// Open API
// SOP(Same Origin Policy) 문제가 발생하지 않는 경우
// Access-Control-Allow-Origin: *
;(function (global, $, ajax) {
  'use strict'

  // KAIST Open API (https://www.kaist.ac.kr/kr/html/footer/0819.html)
  // 뉴스, 알림사항, 학사공지, 채용초빙, 입찰구매 API 로 빠르고 풍부한 뉴스검색결과를 사용해보세요.
  //
  // 사용법
  // 'http://www.kaist.ac.kr/_module/api/json.php?code=kr_060501&start=1&display=10'

  var kaist_open_api_address = 'http://www.kaist.ac.kr/_module/api/json.php'

  // 뉴스    : news
  // 알림사항 : 0801
  // 학사공지 : 0802
  // 채용초빙 : kr_0814
  var code = 'kr_060502'

  // 정수: 1 ~ 1000
  var start = 4

  // 정수: 1 ~ 100
  var display = 5
})(window, Dom, ajax)

// SOP 문제가 발생한 경우
// JSONP(JSON with Padding) 방식
;(function (global, $, ajax) {
  'use strict'

  var api_address = 'https://yamoo9.herokuapp.com/rest/ediya-menu'

  // SOP 문제 발생!
  // Ajax 비동기 호출

  // ajax
  //   .get(api_address)
  //   .then(function(data){
  //     console.log(data);
  //   });

  // SOP 문제 해결
  // Ajax가 아닌, JSONP 방식으로 호출 (GET 메서드만 가능)
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
})(window, Dom, ajax)

// CORS 무료 프록시 서버 활용
;(function (global, $, ajax) {
  'use strict'

  var api_address = 'https://yamoo9.herokuapp.com/rest/ediya-menu'

  function corsURL(url) {
    return 'https://crossorigin.me/' + url
  }
})(window, Dom, ajax)
