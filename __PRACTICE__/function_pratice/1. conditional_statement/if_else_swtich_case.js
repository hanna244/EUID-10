/* if else 문 ---------------------------------------------------------------- */

// 변수 `type_of_car`에 원시 데이터 타입인 문자열 '마이크로 자동차'가 할당 됨
var type_of_car = '마이크로 자동차'

if (type_of_car === '경차') {
  console.log('기아 모닝을 추천합니다.')
} else if (type_of_car === '소형차') {
  console.log('기아 프라이드는 어떠세요?')
} else if (type_of_car === '중형차') {
  console.log('현대 쏘나타 아니면 BMW 3 시리즈가 좋겠어요.')
} else if (type_of_car === '대형차') {
  console.log('크라이슬러 300, 메르세데스-벤츠 E 클래스, 현대 에쿠스 타보세요!')
} else if (
  type_of_car === '스포츠카' ||
  type_of_car === '컨버터블' ||
  type_of_car === '로드스터' ||
  type_of_car === 'SUV'
) {
  console.log('BMW Z4')
  console.log('푸조 파트너, 오펠 메리바')
  console.log('쉐보레 올란도, 기아 카니발 또는 스포티지 ...')
  console.log('다양합니다! 골라보세요! :-)')
} else {
  console.log('음... 말씀하신 종류는 국내에서 판매하지 않습니다. :-(')
}

/* switch case 문 ------------------------------------------------------------ */

var type_of_car = '경차' // 기아 모닝을 추천합니다.

// 조건 처리 (스위칭)
switch (type_of_car) {
  case '경차':
    console.log('기아 모닝을 추천합니다.')
    break
  case '소형차':
    console.log('기아 프라이드는 어떠세요?')
    break
  case '중형차':
    console.log('현대 쏘나타 아니면 BMW 3 시리즈가 좋겠어요.')
    break
  case '대형차':
    console.log(
      '크라이슬러 300, 메르세데스-벤츠 E 클래스, 현대 에쿠스 타보세요!'
    )
    break
  case '스포츠카':
  case '컨버터블':
  case '로드스터':
  case 'SUV':
    console.log('BMW Z4')
    console.log('푸조 파트너, 오펠 메리바')
    console.log('쉐보레 올란도, 기아 카니발 또는 스포티지 ...')
    console.log('다양합니다! 골라보세요! :-)')
    break
  default:
    console.log('음... 말씀하신 종류는 국내에서 판매하지 않습니다. :-(')
}
