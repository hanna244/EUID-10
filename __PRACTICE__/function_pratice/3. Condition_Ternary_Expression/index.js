var c2 = !true ? 'this is true' : 'this is false'

// if문
if (c1) {
  c2 = 'this is true'
} else {
  c2 = 'this is false'
}

/* 실습 1 --------------------------------------------------------------------- */

/*   1   */
function getYear(format) {
  var date = new Date()
  var year = date.getFullYear()
  // if (!format) {format = '';};
  // format = 조건 ? 참인 값 : 거짓인 값
  // format은 조건문이 참이면 공백으로 처리하고 , 거짓이면 format 값을 다시 넣어준다.
  format = !format ? '' : format
  return year + format
}

/*   2   */
function getYear(format) {
  var date = new Date()
  var year = date.getFullYear()
  return year + (format || '')
}

/*   3   */
function getYear(format) {
  // var year = new Date().getFullYear();
  return new Date().getFullYear() + (format || '')
}

/* 실습 2 --------------------------------------------------------------------- */

function getHours(format, ampm) {
  var hour = Number(new Date().getHours())
  // format이 없을 경우 조건 참
  //if (!format) {format = '';}
  format = !format ? '' : format

  // ampm 전달인자 값이 참일 경우
  if (ampm) {
    // hour 값이 12보다 작을 경우는
    // 'AM' : 0시 ~ 11시 59분
    if (hour < 12) {
      ampm = 'AM '
      if (12 - hour > 3) {
        // 9 이하의 수
        hour = '0' + hour // '09'
      }
    }
    // hour 값이 12 이상일 경우는
    // 'PM' : 12시 ~ 23시 59분
    else {
      ampm = 'PM '
      hour = hour - 12
    }
  }
  // ampm 전달인자 값이 거짓일 경우
  else {
    ampm = ''
  }
  // 결과 반환
  return ampm + hour + format
  // return ampm + hour + (format || '');
}

if (ampm) {
  // 변수 = 조건 ? 참인 값 : 조건 ? 참인 값 : 거짓인 값
  // ampm = !ampm ? '' : hour < 12 ? 참 : 거짓;
  ampm = !ampm ? '' : hour < 12 ? AM : PM
  // hour = hour < 12 && 12 - hour > 3 ? 0 + hour : hour - 12;
  hour = hour >= 12 ? hour - 12 : 12 - hour > 3 ? '0' + hour : hour
} else {
  ampm = ''
}
