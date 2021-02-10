function 사람(이름, 성별) {
  this.이름 = 이름
  this.성별 = 성별
}

사람.prototype.달린다 = function (어디 = '공원') {
  return this.이름 + '(은)는 ' + 어디 + '으로 달린다'
}

사람.prototype.간다 = function (어디 = '집') {
  return this.이름 + '(은)는 ' + 어디 + '에 간다.'
}

/* -------------------------------------------------------------------------- */

function 강사(이름, 성별, 분야) {
  사람.call(this, 이름, 성별) // this.이름, this.성별
  this.분야 = 분야
}

강사.prototype = { ...사람.prototype }
강사.prototype.constrcutor = 강사
강사.prototype.가르친다 = function (무엇 = '학문') {
  return this.이름 + '(은)는 ' + this.분야 + '의 ' + 무엇 + '(을)를 가르친다.'
}

/* -------------------------------------------------------------------------- */

function 학생(이름, 성별, 분야) {
  사람.call(this, 이름, 성별)
  this.분야 = 분야
}

학생.prototype = { ...사람.prototype }
학생.prototype.constrcutor = 학생
학생.prototype.공부한다 = function (무엇 = '학문') {
  return this.이름 + '(은)는 ' + this.분야 + '의 ' + 무엇 + '(을)를 공부한다.'
}

/* -------------------------------------------------------------------------- */

var 한나 = new 사람('김한나', '여성')
var 야무 = new 사람('야무', '남성')

var 학생_한나 = new 학생('김한나', '여성', 'Front-End 개발')
var 강사_한나 = new 강사('야무', '남여성', 'Front-End 개발')

console.log(학생_한나.공부한다())
