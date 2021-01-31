/**
 * * [ 이듬(E.UID) 블렌디드 러닝 ] 2주차 오프라인 학습
 *
 * - 배열 가지고 놀기 (반복 처리 + 배열 메서드)
 * - 참조형 데이터인 배열을 복사해 안전하게 활용하기
 * - 배열(집합) + 이벤트 핸들링
 */

/* -------------------------------------------------------------------------- */
/* 배열 가지고 놀기 (반복 처리 + 배열 메서드) : https://bit.ly/ArrayReference */

// 1. 배열 생성 (글로벌, 푸터 내비게이션 / 음료 메뉴 리스트)

var globalNavigationList = [
  { id: 'gnav-1', link: '/views/login.html', text: '로그인' },
  { id: 'gnav-2', link: '/views/signup.html', text: '회원가입' },
  { id: 'gnav-3', link: '/views/design.html', text: '이디야 디자인' },
  { id: 'gnav-4', link: '/views/beverage.html', text: '이디야 음료' },
  { id: 'gnav-5', link: '/views/news.html', text: '이디야 뉴스' },
  { id: 'gnav-6', link: '/views/store.html', text: '매장 찾기' },
]

var footerNavigationList = [
  '개인정보처리방침',
  '멤버스 이용약관',
  '가맹 안내',
  '대량쿠폰구매',
  '채용안내',
  '고객의 소리',
  '사이트맵',
  '점주의 방',
]
// 2. 특정 배열 아이템을 변수에 할당

// 3. 배열 아이템 순환하여 Console 패널에 출력

footerNavigationList.forEach((item) => {
  console.log(item)
})

// 4. 새로운 아이템 추가 (앞 또는 뒤 아이템)

// footerNavigationList.unshift('앞')
// footerNavigationList.push('뒤')

// 5. 아이템 제거 (앞/뒤 또는 특정 순서에 위치한 아이템)
// footerNavigationList.shift()

// 6. 특정 아이템의 순서 추출
footerNavigationList.indexOf('가맹 안내')

// 7. 새로운 아이템을 배열의 특정 순서 위치에 추가
footerNavigationList.splice(4, 0, '새롭게 추가')
// footerNavigationList.slice('새롭게 추가',)
console.log(footerNavigationList)
// 8. 배열 복사
const a = footerNavigationList.slice()
a.pop()
a.pop()
a.pop()
a.pop()
console.log(a)

// 9. 배열 아이템에 접근 (첫번째, 특정 순서, 마지막 번째 아이템)
console.log(footerNavigationList[1])
console.log(footerNavigationList[4])
console.log(footerNavigationList[footerNavigationList.length - 1])

// 10. 배열 → 문자 → 배열 (메서드 체이닝)

/* -------------------------------------------------------------------------- */
/* 배열(집합) + 이벤트 핸들링 */

// var appHeader = document.querySelector('.app-header')
// var headerResetListLink = appHeader.querySelectorAll('a')

// var handleclick = function (e) {
//   e.preventDefault()
//   return console.log(i)
// }

// var i = 0

// while (i < headerResetListLink.length) {
//   var ListLink = headerResetListLink[i]
//   ListLink.addEventListener('click', handleclick)
//   console.log(i)
//   ++i
// }
