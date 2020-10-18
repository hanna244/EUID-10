# OFFLINE_MENTORING

# QnA
 **1.BEM표기법을 BEM방법론이라고도 하는데 CSS표기법과 CSS방법론의 개념이 어떻게 다른가요?**
 // D06 TIL에 질문하기

## 1. 터미널에서 쓰는 npm 명령어
* VScode 에디터 팔레트 단축키 (`F1`)

명령어 | 약자 | 뜻
--- | --- | ---
install | i | 설치 
uninstall | un | 설치 제거

## 2. Sass
* Sass는 햄튼 캐틀린이 설계하고 나탈리 바이첸바움이 개발한 "스타일시트 언어"이다. CSS의 여러가지 불편함(부모 상속 선택자가 불가능해 코드가 쉽게 지저분해지고 유지보수도 어렵다)을 보완하여 가독성이 높고 코드의 재사용에 편리한 가능가 졌다. 즉, CSS의 능력을 더 확장(extension)시켜 사용할 수 있도록 하는 프리프로세서(전처리기)이다. 
* [사스 공식 홈페이지] : <https://sass-lang.com/>
* [사스 홈페이지 한국어 번역] : <https://sass-guidelin.es/ko/>

### 2-1. SASS vs SCSS 

* Sass는 Sass 표기법과 SCSS 표기법이 있다. 둘 중 어떤 표기법을 사용해도 Sass에서 구동가능하지만 Sass 3.0부터 CSS 친화적인 SCSS（Sassy CSS） 표기법이 기본 표기법이 되었다.

### 2-2. 프리프로세서(Preprocessor)
  + "전처리기"라고 하며 Sass, Less, Stylus 등이 있다. CSS가 동작하기 전에 사용하는 기능이며 웹에서는 직접 동작하지 않기 때문에 반드시 컴파일 과정을 거처서 CSS로 변환하여 사용한다. 
  + 프리프로세싱 -> CSS 변환(컴파일) -> CSS(프로세싱) -> 포스트(프로세싱)
  
  CSS가 동작하기 전에 사용하는 기능이며, 

### 2-3. 변수 
* 재사용하고자 하는 속성을 변수로 저장할 수 있다. 
* 일관성을 유지하거나 유지보수 할때 편리하다. 
* 디자인 시안에서 재사용 컴포넌트를 확인 후 변수를 만들어준다. 

```SCSS
// SCSS
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

// CSS
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

### 2-4. 중첩
* Sass는 중첩 기능을 사용할 수 있다. 상위 선택자를 매번 입력하는 수고로움을 덜고 더 편리하게 작성이 가능하다. 

#### 2-4-1. 부모 참조 선택자 (상위 선택자)

* 앰퍼샌드(ampersand) : (`&`)
+ 상위(부모)선택자를 참조할 때 사용한다. 
```scss
/*    1    */
// class=".icon .up-arrow"

// CSS
.icon .up-arrow { 
    margin: 0 
}

// SCSS
.icon {
    &.up-arrow{ 
        margin: 0 
    }
}

/*    2    */
// class="header__form--email"

// SCSS
.header {
    &__form {}
    &--email {}
}
```
---
##### [참고]
* BEM(Block Element Modifier)
  + 개발, 디버깅, 유지보수를 위하여 CSS 선택자의 이름을 가능한 한 직관적이고 명확하게 만들기 위해 사용한다. 
  + 클래스 명을 `.block__element--modifier`와 같은 형식으로 나타낸다. 
  + **ID에는 사용할 수 없고, 오직 클래스명에만 활용할 수 있다.**
  + [BEM (Block Element Modifier)] : <https://dabin-lee.github.io/test_long/2_css/3_CSS_metodologia/css_metodologia.html#3-bem-block-element-modifier>
---

## JS 함수 실습 
* 함수 부분을 영상으로 이론 공부할 때 이해했고 공부 후 어느정도 함수식 해석이 가능해서 직접 실습 할때 어려움이 없을 거라고 생각했지만 큰 오산이었다. 간단해 보이지만 정복하기 쉽지 않다. 꾸준히 연습해야 한다.

* 무조건 배운 후 **실습!** 빈 창에 직접 코드를 쓰기! 바보같아 보여도 상관하지 말고 여러가지 시도를 해볼 것! 그리고 그 경험을 기록으로 남길 것! 

### HTML에서 JS를 로드하기 할때 `<script>`의 위치

#### HTML에서 JS를 로드
* `<script></script>` 태그를 사용해 자바스크립트 파일을 불러온다. 
```js
    <script src="./index.js"></script>
```

#### `<script>`의 위치
* 이때, `<script>` 태그의 위치를 `<head>`또는 `<body>`상단 위치시킨다면 오류가 발생한다.  
  +  웹 브라우저가 스크립트를 실행할 때 위에서 부터 아래로 차례대로 실행한다. 만약 스크립트의 위치가 `<head>`또는 `<body>`상단 위치한다면 `<body>`에 있는 DOM 요소가 파싱되기 전이기 때문에 스크립트는 실행되지만 값을 세팅할 수 없다. 

```html
<html>
<head>
    <script src="./index.js"></script> <!-- 위치1 -->
    <title>JavaScript 실습</title>
</head>
<body>
    <!-- <script src="./index.js"></script> 위치2 -->
    <h1 class="app-header-title">Lorem ipsum dolor sit amet.</h1>
    <!-- <script src="./index.js"></script> 위치3 -->
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, harum.</p>
    <!-- <script src="./index.js"></script> 위치4 -->
</body>
</html>
```
```js
var appHeaderTitle = document.querySelector('.app-header-title');


// '위치1', '위치2'에 <script>가 위치할 때
console.log(appHeaderTitle); // null

// '위치3', '위치4'에 <script>가 위치할 때
console.log(appHeaderTitle); // <h1 class="app-header-title">...</h1>
```
* 위 처럼 각각의 자리에 <script>를 위치해보고 값을 확인했다. 값을 확인하려는 DOM 요소의 뒤에 위치했을 때 부터 값이 제대로 나온다. 결론, `<script>`는 HTML `<body>` 하단에 위치시키는 것을 권장.

### 함수 실습
* JS 함수를 직접 실습하면서 놓쳤던 부분이 많았다. 그 부분들을 줄줄 작성해 보자! 한 번 실수 했으니 두 번은 없다!

1. class 이름은 원시 데이터 중에서 문자 값이다. 작은 따옴표 또는 큰 따옴표를 입력해줘야 한다. 
```js
var appHeader = findElement(.app-header); // Uncaught SyntaxError: Unexpected token '.'
```
2. 항상 선언 마지막에는 세미콜론 (`;`) 잊지 않기

3. 매개변수 `selector`는 '변수'(변할 수 있는 값)이다!!!!! 그렇기 때문에 꼭 `selector`를 사용하지 않고 다른 이름을 사용해도 상관없다
```js
function findElement(selector) {}
```
4. 아래의 `document.querySelector(selector);`구문을 해석해보면 '전체 문서에서 전달된 인자에 부합하는 선택자 이름을 가진 요소 객체를 찾아라' 이때 `selector`는 DOM 요소 객체이다. (사실 원소 데이터인줄 알았다. 원소데이터가 아니다!! 객체!!)

5. 아래 처럼 변수와 함수를 선언하고 값을 확인해보니 `undefined`가 나왔다. 왜? **함수식에서 제일 중요한 값을 반환하는 `return`를 입력해주지 않았기 때문이다.** 로직에서 `selector`를 찾으라고 명령을 했지만 찾은 값을 어떻게 해야 하는지 입력해 주지 않았다는 말이다. 
```js
function findElement(selector) {
  document.querySelector(selector);
}

var appHeader = findElement('.app-header');
console.log(appHeader); //undefined
```
6. 위에서 `return`을 입력해 주지 않아서 값이 제대로 나오지 않았던 것을 확인했다. 그럼 `return`을 어떻게 입력해야 할까?

  + 값? 아니 아무것도 출력되지 않음. (빈공간)
```js
  return selector; 
```
  + `console.log()`은 `console`패널에 기록하는 기능을 하는 것 뿐이다. 
```js
  return console.log(selector)); // .app-header
```
  + 함수 안에 함수를 넣는다는 것은 '함수가 실행되고 또 함수가 실행되고 또 함수가 실행되고...(반복)'하는 일이다. 
```js
  return findElement('.app-hearder');
```
  + [정답] 
```js
function findelement(selector) {
  // document.querySelector(selector);
  return document.querySelector(selector);
}
var appHeader = findElement('.app-header');
console.log(appHeader);
```


