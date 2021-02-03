const makeArray = (o) => [...o]
const each = (list, cb) => makeArray(list).forEach(fn)
const map = (list, cb) => list.map(cb)

// ES6의 숏핸드 프로퍼티
// 만약에 모듈을 내보내지 않는다면 이 파일 내부에서만 사용 가능
module.exports = { each, map, makeArray }
