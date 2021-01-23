var getYear, getDay

/* 몇 년도인지 반환하는 함수 ----------------------------------------------------------- */

getYear = function (format) {
  var date = new Date()
  // 조건문
  // format 전달인자 값이 있으면 전달인자 값을 사용하고,
  // 없으면 빈문자열을 format 값으로 사용한다.
  if (!format) {
    format = ''
  }
  return date.getFullYear() + format
}

/* 몇 요일인지 반환하는 함수 ----------------------------------------------------------- */

getDay = function (format) {
  var date = new Date()
  var date = date.getDay() // 2

  switch (day) {
    case 0:
      day = '일'
      break
    case 1:
      day = '월'
      break
    case 2:
      day = '화'
      break
    case 3:
      day = '수'
      break
    case 4:
      day = '목'
      break
    case 5:
      day = '금'
      break
    case 6:
      day = '토'
  }

  if (!format) {
    format = ''
  }

  return day + format
}

var today = el('.today')
var year = el('.year', today)
var day = el('.day', today)

year.textContent = getYear()
day.textContent = getDay()
