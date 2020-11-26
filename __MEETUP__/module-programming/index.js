// 향상된 객체 표기법
// Object Ehancement

// 계산된 속성들 (Computed Properties)

const goeun = {
  ['show']() {},
  ['look']() {},
  ['watch']() {},
}

const look = '' + ' 봐'.trim()
const watch = '지켜보자'.split('').join('')
const o = {
  ['show']() {},
  [look]() {},
  [watch]() {},
}
