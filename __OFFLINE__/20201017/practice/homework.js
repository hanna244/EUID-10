// 함수 10개 만들기

/*    1    */

// '나라'의 랜드마크는 '이곳'이다.
function visit(country, place) {
    return country + '의 랜드마크는' + ' ' + place + '이다';
}

    console.log(visit('프랑스', '에펠탑'));
    console.log(visit('러시아', '성바실리성당'));

// [주의]
// * 함수를 실행하는 구문이 없음. 그래서 함수가 실행될 수가 없다.
// console.log('러시아', '성바실리성당');
// * 입력한 함수의 매개변수와 반환값에 매개변수의 이름이 같이야 한다.

/*====    2    ====*/
// 다이어트를 한다면 지금 당장 헬스장에 간다.
// 위의 문장은 if문으로 만들 수 없는 문장인가?
function choose(diet, goto) {
  if (diet) {
    goto = '헬스장';
  }
  return diet + '를 한다면 지금 당장' + goto + '에 간다.';
}

/*    3    */

// 마트에 '음료'가 있다면 사과주스를 사오고, 없다면 물을 사와라.
// 만들려는 문장을 출력할 수 없는 식.
// function buy(beverage) {
//     if (beverage) {
//         beverage = '사과주스';
//     }
//     else {
//         beverage = '물';
//     }
//     // return ???
// }

// 마트에서 'oo'를 사와라 만약, 'oo'이 없다면 물을 사와라.
function buy(beverage) {
    if (!beverage) {
        beverage = '물';
    }
    return '마트에서' + ' ' + beverage + '(을)를 사와라';
}

console.log(buy('사과주스'));
console.log(buy());

// [주의]

// * 조건문 값을 입력할 때 기억하기!
//   + 조건문의 값이 '참'일 때 해당 매개변수에 할당할 값을 입력해 준다.
//   + 조건문 안에 로직 입력할 때 손이 멈춰버림... 뭘 입력해야하지? 이때 기억하자 `context = document` 처음 조건문을 배웠을 때 예시로 들었던 구문이다.

// *  `else`문 사용시
// ```js
// else (!beverage) {
//     beverage = '물';
// }
// ```
//   + 문법에 맞지 않다. `eles`문은 그 자체로 `if`문의 조건에 맞지 않을 때 실행되는 기능을 가지고 있기 때문에 `(!beverage)`이라는 조건 값을 입력하지 않는다.

// * `return` 구문 입력시
// ```js
// return 마트에서 + ' ' + 'beverage' + '(을)를 사와라';
// // `마트에서`라는 문자데이터에는 작은 따옴표를 안넣고 매개변수 `beverage`에는 작은 따옴표를 넣었다. 연습해서 실수를 줄이자. 제발.
// ```

/*    4    */

function sum(x, y) {
    console.log(x + y);
    return x + y;
}

var n1 = sum(7, 8);

// [주의]
// * 위의 함수식에서 `console.log(x + y)` 로직이 없으면 콘솔패널에서 결과값을 확인 할 수 없다.
// 콘솔에서 결과값을 확인하는 방법 1. 함수식 안에 console.log(x + y); 넣어주기, 2. 변수 선언 뒤에  console.log(n1); 넣어주기

/*====    5    ====*/

function add(n1, text) {
  return n1 + ' ' + text;
}

var number = add(8 + '여덞');
console.log(number); // 8여덞 undefined

/*    6    */

function testResult(score) {
    if (score === 100) {
        console.log('참 잘했어요!');
    }
    else if (score >= 80) {
        console.log('조금만 더 노력하면 100점!');
    }
    else if (score >= 50) {
        console.log('분발하세요!');
    }
    else if (score >= 30) {
        console.log('나머지 공부 당첨!');
    }
     else {
         console.log('정말 너무 해요...');
     }
}

testResult(100);
testResult(80);
testResult(50);
testResult(30);

// [주의]
// * if문의 조건변수에는 항상 논리값이 나오게 한다! 뭘 써야하지 하고 멈춰있지말고 참!, 거짓! 이 두개만 생각하기!
// * 멀티 조건문을 사용할 때는 `else`(거짓이면)가 아닌 `else if`(거짓이고 만약-라면)을 사용!
// * 마지막의 `else`를 사용할 때는 위에 어떠한 조건문에도 해당이 되지 않기 때문에 `조건변수` 값을 넣지 않는다.

/*    7    */

var score = 10;

switch (score) {
    case 100:
        console.log('참 잘했어요!');
        break;
    case  80:
        console.log('조금만 더 노력하면 100점!');
        break;
    case 50:
        console.log('분발하세요!');
        break;
    case 30:
        console.log('나머지 공부 당첨!');
        break;
    default:
        console.log('고생많았어요!');
}

// [주의]
// switch문은 비교 연산자 사용이 불가능하다.!

/**
 * 아래와 같이 사용할 경우 비교 연산자 사용이 가능합니다.
 */

var score = 40;

switch (true) {
  case score === 100:
    console.log('참 잘했어요!');
    break;
  case score >= 80:
    console.log('조금만 더 노력하면 100점!');
    break;
  case score >= 50:
    console.log('분발하세요!');
    break;
  case score >= 30:
    console.log('나머지 공부 당첨!');
    break;
  default:
    console.log('고생많았어요!');
}

/*    8   */

function Meet(who) {
    if (who === '친구') {
        console.log('대학로에 있는 맛집을 추천해!');
    }
    else if (who === '애인') {
        console.log('강남의 감성 포차가는 것을 추천해!');
    }
    else if (who === '부모님') {
        console.log('종로에 한식집에서 한정식 먹는 것을 추천!');
    }
    else {
        console.log('집 앞 편의점에서 라면 먹는 것을 추천!');
    }
}

Meet('친구');
Meet('애인');
Meet('부모님');
Meet();

/*====    9    ====*/
// 값이 제대로 안나옴!!!!!!!!!
switch (who){
    case '친구':
        console.log('대학로에 있는 맛집을 추천해!');
        break;
    case '애인':
        console.log('강남의 감성 포차가는 것을 추천해!');
        break;
    case '부모님':
        console.log('종로에 한식집에서 한정식 먹는 것을 추천!');
        break;
    default:
        console.log('집 앞 편의점에서 라면 먹는 것을 추천!')
}

var who = '친구'; //집 앞 편의점에서 라면 먹는 것을 추천!

// [주의]
// * `switch (조건변수){}` 조건 변수 잊지말고 기입! 그게 아니면 함수에 값을 전달 할 수 없음!
// `case: '친구';`가 아닌 `case '친구':`이다.
