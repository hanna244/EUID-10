;(function (global, $, ajax) {
  'use strict'

  var $menu = $('.ediya-menu')

  ajax.get('/data/ediya-menu.xml').then(function (xmlDoc) {
    // XML -> 데이터 추출
    var names = xmlDoc.querySelectorAll('name')
    names = [].map.call(names, function (name) {
      return name.textContent
    })
    var widths = xmlDoc.querySelectorAll('width')
    widths = [].map.call(widths, function (width) {
      return width.textContent
    })
    var heights = xmlDoc.querySelectorAll('height')
    heights = [].map.call(heights, function (height) {
      return height.textContent
    })
    var kos = xmlDoc.querySelectorAll('ko')
    kos = [].map.call(kos, function (ko) {
      return ko.textContent
    })
    var ens = xmlDoc.querySelectorAll('en')
    ens = [].map.call(ens, function (en) {
      return en.textContent
    })
    var descs = xmlDoc.querySelectorAll('desc')
    descs = [].map.call(descs, function (desc) {
      return desc.textContent
    })
    var display = xmlDoc.querySelectorAll('display-criteria')
    display = [].map.call(display, function (criteria) {
      var items = criteria.querySelectorAll('item')
      var keyMaps = [].map.call(items, function (item) {
        var key = item.querySelector('key').textContent
        var value = item.querySelector('value').textContent
        return [key, value]
      })
      return keyMaps
    })

    // 추출한 데이터 -> 템플릿 바인딩
    var template = $.template(names, function (name, i) {
      var templ =
        '\
        <li class="ediya-menu__item">\
          <a href="#">\
            <figure>\
              <img src="https://raw.githubusercontent.com/yamoo9/assets/master/images/ediya/' +
        names[i] +
        '.png" alt width="' +
        widths[i] +
        '" height="' +
        heights[i] +
        '">\
              <figcaption>' +
        kos[i] +
        '</figcaption>\
            </figure>\
          </a>\
          <div hidden class="ediya-menu__item--detail">\
              <strong class="ediya-menu__item--name">' +
        kos[i] +
        '<span lang="en">' +
        ens[i] +
        '</span></strong>\
              <p>' +
        descs[i] +
        '</p>\
              <div class="ediya-menu__item--multi-column is-2"><p>\
        '

      templ += $.template(display, function (item, index) {
        if (i === index) {
          return $.template(item, function (it) {
            var key = it[0]
            var value = it[1]
            return '<span>' + key + '<b>(' + value + ')</b></span>'
          })
        }
      })

      templ +=
        '</p></div><button type="button" class="button is-close-panel" aria-label="아이템 소개 패널 닫기">×</button></div></li>'

      return templ
    })

    $menu.html(template)
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
