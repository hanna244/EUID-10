function 사람(이름, 성별) {
  this.이름 = 이름
  this.성별 = 성별
}

사람.prototype.달린다 = function (어디 = '공원') {
  return this.이름 + '(은)는' + 어디 + '(으)로 달린다'
}

사람.prototype.간다 = function (어디 = '집') {
  return this.이름 + '(은)는' + 어디 + '에 간다.'
}

/* -------------------------------------------------------------------------- */

function 강사(이름, 성별, 분야) {
  this.이름 = 이름
  this.성별 = 성별
  this.분야 = 분야
}

// 강사.prototype = {
//   달린다: 사람.prototype.달린다,
//   간다: 사람.prototype.간다,
// }

var humenPrototype = {}

for (var prop in 사람.prototype) {
  var value = 사람.prototype[prop]
  humenPrototype[prop] = value
}

console.log(humenPrototype)

강사.prototype.constructor = 강사
가르친다 = function (무엇 = '학문') {
  return this.이름 + '(은)는' + this.분야 + '의' + 무엇 + '(을)를 가르친다'
}

/* -------------------------------------------------------------------------- */

class 학생 extends 사람 {
  constructor(이름, 성별, 분야) {
    super(이름, 성별)
    this.분야 = 분야
  }

  공부한다(무엇 = '학문') {
    return `${this.이름}(은)는 ${this.분야}의 ${무엇}(을)를 공부한다.`
  }
}
/* -------------------------------------------------------------------------- */

class 원장 extends 강사 {
  constructor(이름, 성별, 분야, 경력) {
    super(이름, 성별, 분야)
    this.경력 = 경력
  }

  운영한다(학원 = '대성학원') {
    return `${this.이름}은 ${학원}(을)를 ${this.경력}동안 운영했다.`
  }
}

/* -------------------------------------------------------------------------- */

var 한나 = new 사람('김한나', '여성')
var 야무 = new 사람('야무', '남성')
var 주현 = new 사람('김주현', '여성')

var 학생_한나 = new 학생('김한나', '여성', 'Front-End 개발')
var 강사_야무 = new 강사('야무', '남성', 'Front-End 개발')

var 원장_주현 = new 원장('김주현', '여성', '수학', '15년')

console.log(학생_한나.공부한다())
