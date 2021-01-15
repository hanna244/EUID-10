;(function (global, $, ajax) {
  'use strict'

  var $menu = $('.ediya-menu')

  ajax.get('/data/ediya-menu.json').then(function (data) {
    var templ = $.template(data, function (item) {
      // JSON -> 데이터 값 추출
      var figure = item.figure
      var detail = item.detail
      var name = figure.name
      var width = figure.width
      var height = figure.height
      var ko = detail.ko
      var en = detail.en
      var desc = detail.desc
      var display = detail.display_criteria

      var template =
        '\
        <li class="ediya-menu__item">\
          <a href="#">\
            <figure>\
              <img src="https://raw.githubusercontent.com/yamoo9/assets/master/images/ediya/' +
        name +
        '.png" alt width="' +
        width +
        '" height="' +
        height +
        '">\
              <figcaption>' +
        ko +
        '</figcaption>\
            </figure>\
          </a>\
          <div hidden class="ediya-menu__item--detail">\
              <strong class="ediya-menu__item--name">' +
        ko +
        '<span lang="en">' +
        en +
        '</span></strong>\
              <p>' +
        desc +
        '</p>\
              <div class="ediya-menu__item--multi-column is-2"><p>\
          '

      template += $.template(display, function (item) {
        return '<span>' + item[0] + '<b>(' + item[1] + ')</b></span>'
      })

      template +=
        '</p></div><button type="button" class="button is-close-panel" aria-label="아이템 소개 패널 닫기">×</button></div></li>'
      return template
    })
    $menu.html(templ)
  })
})(window, Dom, ajax)

// var template = '\
//                 <li class="ediya-menu__item">\
//                   <a href="#">\
//                     <figure>\
//                       <img src="https://raw.githubusercontent.com/yamoo9/assets/master/images/ediya/'+ name +'.png" alt width="'+ width +'" height="'+ height +'">\
//                       <figcaption>'+ ko +'</figcaption>\
//                     </figure>\
//                   </a>\
//                   <div hidden class="ediya-menu__item--detail">\
//                       <strong class="ediya-menu__item--name">'+ ko +'<span lang="en">'+ en +'</span></strong>\
//                       <p>'+ desc +'</p>\
//                       <div class="ediya-menu__item--multi-column is-2"><p>\
//                 ';

// template += _.template(display, function(item){
//   return '<span>'+ item[0] +'<b>('+ item[1] +')</b></span>';
// });

// template += '</p></div><button type="button" class="button is-close-panel" aria-label="아이템 소개 패널 닫기">×</button></div></li>';
