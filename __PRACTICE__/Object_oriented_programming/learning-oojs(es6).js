class 사람 {
  constructor(이름, 성별) {
    this.이름 = 이름
    this.성별 = 성별
  }

  달린다(어디 = '공원') {
    return `${this.이름}(은)는 ${어디}(으)로 달린다.`
  }

  간다(어디 = '집') {
    return `${this.이름}(은)는 ${어디}에 간다.`
  }
}

/* -------------------------------------------------------------------------- */

class 강사 extends 사람 {
  constructor(...props) {
    super(...props)
    this.분야 = props[2]
  }

  가르친다(무엇 = '학문') {
    return `${this.이름}(은)는 ${this.분야}(을)의 ${무엇}(을)를 가르친다.`
  }
}

/* -------------------------------------------------------------------------- */

class 학생 extends 사람 {
  constructor(...props) {
    super(...props)
    this.분야 = props[2]
  }

  공부한다(무엇 = '학문') {
    return `${this.이름}(은)는 ${this.분야}의 ${무엇}(을)를 공부한다.`
  }
}

/* -------------------------------------------------------------------------- */

class 원장 extends 강사 {
  constructor(...props) {
    super(...props)
    this.수장 = props[3]
  }
  정산한다() {
    return `원장인 ${this.이름}(은)는 소속된 모든 강사에게 월급을 지급한다`
  }
}

/* -------------------------------------------------------------------------- */

const 한나 = new 사람('김한나', '여성')
const 야무 = new 사람('야무', '남성')

const 학생_한나 = new 학생('김한나', '여성', 'Front-End 개발')
const 강사_야무 = new 강사('야무', '남성', 'Front-End 개발')
const 원장_상호 = new 원장('최상호', '남성', 'Fullstack 개발', true)

console.log(학생_한나.공부한다())
console.log(학생_한나.달린다('한강 고수부지'))
console.log(한나.간다('일산 호수공원'))

console.log(강사_야무.가르친다('React'))
console.log(야무.간다('오가다 본점'))
console.log(원장_상호.정산한다())
console.log(원장_상호.가르친다('GraphQL'))
console.log(원장_상호.간다('양평 펜션'))
