;(function(global, $){
  'use strict';

  /**
   * JSON Server 에서 서비스 되는 REST API 주소 입력
   */
  var rest_api = '/todos';

  // 참조 변수
  var todos      = null;
  var $spinner   = null;
  var $todo_list = null;

  /** 초기화 함수 */
  function init(){
    // 문서 객체 참조 후, jQuery 객체 반환
    $todo_list = $('.app-todo__list');
    $spinner   = $('.app-loading-spinner');
    bindHeaderTime();
    renderTodoItems();
    bind();
  }

  /** 헤더 영역 시간 설정 함수 */
  function bindHeaderTime() {
    var t = today();
    $('.app-time__year').text(t.year);
    $('.app-time__month').text(t.month);
    $('.app-time__date').text(t.date);
  }


  /** 시간 정보 객체를 반환하는 함수 */
  function today(){
    var d       = new Date();
    var year    = d.getFullYear();
    var month   = d.getMonth() + 1;
    var date    = d.getDate();
    var hours   = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var time    = hours < 10 ?
                    '0' + hours + ':' + minutes + ' am' :
                    hours < 12 ? hours + ':' + minutes + ' am' : (hours - 12) + ':' + minutes + ' pm';
    month = month < 10 ? '0'+month : month;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    return {
      year: year,
      month: month,
      date: date,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      time: time
    };
  }

  /**
   * 할 일 목록 렌더링 함수
   * REST API - GET 설정
   */
  function renderTodoItems(){

    // $todo_list 내부 HTML 제거

    // 로딩 스피너 보임

    // REST API :: GET

      // 로딩 스피너 감춤

      // $todo_list 내부에 template 삽입

  }

  /** 이벤트 바인딩 함수 */
  function bind(){

    var $input_bg    = $('.app-todo__input-bg');
    var $input_field = $('.app-todo__input-field');
    var $register    = $('.app-todo__register-button');
    var $bgAndField  = $input_bg.add($input_field);
    var $input_todo  = $('#input-todo');

    // 할 일 추가 버튼
    $('.app-todo__add-button').on('click', function(){
      $bgAndField.addClass('is-expand');
    });

    /**
     * 할 일 등록 버튼
     * REST API - POST 설정
     */
    $register.on('click', function(){
      $bgAndField.removeClass('is-expand');
      var todo = $input_todo.val();
      if (todo.trim().length > 0) {
        // REST API :: POST

      }
      $input_todo.val('');
    });

    $input_todo.on('keyup', function(e){
      // Enter
      if (e.keyCode === 13) { $register.trigger('click'); }
    });

    // 이벤트 위임 //
    // 할 일 콘텐츠 더블클릭 이벤트
    $todo_list.on('dblclick', '.app-todo__item-todo', function(){
      this.setAttribute('contenteditable', true);
    });
    /**
     * 할 일 콘텐츠 블러 이벤트
     * REST API - PUT 설정
     */
    $todo_list.on('blur', '.app-todo__item-todo', function(){
      var parent = this.parentNode;
      var i = parent.getAttribute('data-index');
      if ( this.textContent !== todos[i - 1].content ) {
        // REST API :: PUT

      }
      this.removeAttribute('contenteditable');
    });

    //
    /**
     * 제거 버튼
     * REST API - DELETE 설정
     */
    $todo_list.on('click', '.app-todo__item-remove-button', function(){
      var id = this.parentNode.getAttribute('data-index');
      // REST API :: DELETE

    });

  }

  /**
   * REST API 메서드 단축 함수
   */
  function restApiGet(){

  }
  function restApiPost(){

  }
  function restApiPut(){

  }
  function restApiDelete(){

  }

  init();

})//(window, window.jQuery);