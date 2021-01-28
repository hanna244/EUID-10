;(function (global, $) {
  'use strict'

  /**
   * JSON Server 에서 서비스 되는 REST API 주소 입력
   */
  var rest_api = '/todos'

  // 참조 변수
  // 서버에서 전송 받은 데이터를 참조
  var todos = null
  // Ajax 로딩 시, 화면에 표시할 정보
  // <figure class="app-loading-spinner"> 요소 참조
  var $spinner = null
  // 리스트 컨테이너 <ul class="app-todo_list"> 요소 참조
  var $todo_list = null

  /** 초기화 함수 */
  // 맨 마지막에 실행된다.
  function init() {
    // 선언된 변수에 문서 객체 참조 후, jQuery 객체 반환
    $todo_list = $('.app-todo__list')
    $spinner = $('.app-loading-spinner')
    bindHeaderTime()
    renderTodoItems()
    bind()
  }

  /** 헤더 영역 시간 설정 함수 */
  function bindHeaderTime() {
    var t = today()
    // 텍스트 값으로 반환한다.
    $('.app-time__year').text(t.year)
    $('.app-time__month').text(t.month)
    $('.app-time__date').text(t.date)
  }

  /** 시간 정보 객체를 반환하는 함수 */
  function today() {
    var d = new Date()
    var year = d.getFullYear()
    var month = d.getMonth() + 1
    var date = d.getDate()
    var hours = d.getHours()
    var minutes = d.getMinutes()
    var seconds = d.getSeconds()
    // 조건식 사용
    var time =
      hours < 10
        ? '0' + hours + ':' + minutes + ' am'
        : hours < 12
        ? hours + ':' + minutes + ' am'
        : hours - 12 + ':' + minutes + ' pm'
    month = month < 10 ? '0' + month : month
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    // 객체로 리턴
    return {
      year: year,
      month: month,
      date: date,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      time: time,
    }
  }

  /**
   * 할 일 목록 렌더링 함수
   * REST API - GET 설정
   */
  // 실제로 데이터를 화면에 뿌리는 중요한 역할을 한다.
  // init() 함수에서 실행된다.
  function renderTodoItems() {
    // $todo_list 내부 HTML 제거
    $todo_list.html('')

    // 로딩 스피너 보임
    // 사용자에게 로딩되고 있다는 것을 알려주어야 한다.
    $spinner.show()

    // REST API :: GET
    // 로딩 스피너를 감추거나 내부에 template를 삽입하는 것은 비동기 통신이 끝난 다음에 실행 해야한다.
    restApiGet(rest_api, function (data) {
      var template = ''

      todos = data

      todos.forEach((todo, index) => {
        // template
        var id = todo.id
        var time = todo.time
        var content = todo.content

        template += `\
        <li class="app-todo__item" data-index="${id}" >\
            <time class="app-todo__item-time">${time}</time>\
            <strong class="app-todo__item-todo">${content}</strong>\
            <button type="button" class="app-todo__item-remove-button" aria-label="할 일 제거"></button>\
          </li>\
        `
      })
      $.get(rest_api).done()
      // 로딩 스피너 감춤
      $spinner.hide()

      // $todo_list 내부에 template 삽입
      $todo_list.html(template)
    })
  }

  /** 이벤트 바인딩 함수 */
  function bind() {
    var $input_bg = $('.app-todo__input-bg')
    var $input_field = $('.app-todo__input-field')
    var $register = $('.app-todo__register-button')
    var $bgAndField = $input_bg.add($input_field)
    var $input_todo = $('#input-todo')

    // 할 일 추가 버튼
    $('.app-todo__add-button').on('click', function () {
      $bgAndField.addClass('is-expand')
    })

    /**
     * 할 일 등록 버튼
     * REST API - POST 설정
     */
    $register.on('click', function () {
      $bgAndField.removeClass('is-expand')
      var todo = $input_todo.val()
      if (todo.trim().length > 0) {
        // REST API :: POST
      }
      $input_todo.val('')
    })

    $input_todo.on('keyup', function (e) {
      // Enter
      if (e.keyCode === 13) {
        $register.trigger('click')
      }
    })

    // 이벤트 위임 //
    // 할 일 콘텐츠 더블클릭 이벤트
    $todo_list.on('dblclick', '.app-todo__item-todo', function () {
      this.setAttribute('contenteditable', true)
    })
    /**
     * 할 일 콘텐츠 블러 이벤트
     * REST API - PUT 설정
     */
    $todo_list.on('blur', '.app-todo__item-todo', function () {
      var parent = this.parentNode
      var i = parent.getAttribute('data-index')
      if (this.textContent !== todos[i - 1].content) {
        // REST API :: PUT
      }
      this.removeAttribute('contenteditable')
    })

    //
    /**
     * 제거 버튼
     * REST API - DELETE 설정
     */
    $todo_list.on('click', '.app-todo__item-remove-button', function () {
      var id = this.parentNode.getAttribute('data-index')
      // REST API :: DELETE
    })
  }

  /**
   * REST API 메서드 단축 함수
   */
  function restApiGet(url, cb) {
    $.get(url).done(cb)
  }
  // o => 전달할 데이터 객체
  function restApiPost(url, o, cb) {
    $.post(url, o).done(cb)
  }
  function restApiPut(o, cb) {
    $.ajax({
      method: 'PUT',
      data: o,
    }).done(cb)
  }
  function restApiDelete(id, cb) {
    $.ajax({
      url: rest_api + '/' + id,
      method: 'DELETE',
    }).done(cb)
  }

  init()
})(window, window.jQuery)
