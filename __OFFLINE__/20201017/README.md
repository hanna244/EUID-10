[← BACK](../README.md)

# 2020. 10. 17

오프라인 멘토링 1회차 진행 내용 정리.

# QnA
 
<!-- D06 TIL에 질문하기 -->
**1.BEM표기법을 BEM방법론이라고도 하는데 CSS표기법과 CSS방법론의 개념이 어떻게 다른가요?**

용어 | 설명
--- | ---
표기법 | 글자나 부호로 언어를 적어 나타내는 규칙이나 방법을 통틀어 이르는 말
방법론 | 어떤 일을 해 나가는 방식에 대한 이론

## CSS 문법(Syntax)

CSS는 웹 브라우저에서 해석되는 스타일 언어로 CSS 코드를 작성하는 문법을 제공합니다.
질문주신 CSS 표기법이 문법입니다.

```css
선택자 {
  속성1: 값1;
  속성2: 값2;
}
```

## CSS 방법론(Methodology)

CSS를 개발하는데 사용되는 공식적인 표준 방법론은 없습니다. 그래서 사용자마다 제각각의 코드를 양산하는 것입니다.
이러한 문제점을 해결하기 위해 등장한 다양한 CSS 방법론이 존재합니다. 대표적인 CSS 방법론은 다음과 같습니다.

- [BEM](http://getbem.com/)
- [OOCSS](http://oocss.org/)
- [SMACSS](http://smacss.com/)
- [SUIT CSS](http://suitcss.github.io/)
- [atomic-css](https://github.com/nemophrost/atomic-css)

## BEM 방법론(Methodology)

BEM — Block Element Modifier는 Front-End 개발에서 **재사용 가능한 컴포넌트 및 코드 공유**에 도움이 되는 방법론입니다.

- **Easy** → BEM을 사용하려면 <strong>BEM의 명명 규칙(표기법)</strong>을 사용하면 됩니다.
- **Modular** → 코드를 재사용 가능한 독립 블록(block) 모듈(`.module`)로 CSS 선택자를 정의합니다.
- **Flexible** → BEM을 사용하면 방법론과 도구를 원하는 방식으로 구성하거나, 재구성 할 수 있습니다.

## BEM 표기법(Naming)

> There are only two hard things in Computer Science: cache invalidation and naming things. — Phil Karlton

> 컴퓨터 과학에는 2가지 어려운 문제가 있습니다.<br/>
> 하나는 "캐시 무효화"이고, 다른 하나는 "이름을 정하는 것"입니다.<br/>
> — Phil Karlton

안타깝게도 대부분의 CSS 코드 베이스는 때때로 구조나 명명 규칙 없이 개발됩니다. 
이로 인해 장기적으로 유지 관리 할 수 없는 CSS 코드 베이스가 발생합니다. 반면, 
BEM은 웹 사이트 개발에 참여하는 모든 사람이 단일 코드 베이스로 작업하고 동일한 언어를 사용하도록 보장합니다. 
적절한 이름을 사용하면 웹 사이트 디자인 변경에 대비하기 용이합니다.

### Block

그 자체로 의미있는 독립 실행형 엔터티를 캡슐화합니다. 블록은 중첩되고 블록 간에 인터랙션 할 수 있지만, 의미 상 동일하게 유지됩니다. 
우선 순위나 계층이 없습니다. DOM 표현이 없는 전체적 엔티티(예: 컨트롤러 또는 모델)도 블록일 수 있습니다.

*HTML*

```html
<nav class="AppNavigation">
  <!-- ... -->
</nav>
```

*SCSS*

```scss
.AppNavigation {
  // `앱 내비게이션 블록` 스타일 ...
}
```

*Compiled CSS*

```css
.AppNavigation { ... }
```

### Element

블록의 일부이며 독립형 의미가 없습니다. 모든 요소는 의미상 해당 블록에 연결됩니다.

*HTML*

```html
<nav class="AppNavigation">
  <!-- ... -->
  <button class="AppNavigation__menuButton" type="button">...</button>
</nav>
```

*SCSS*

```scss
.AppNavigation {
  // ...
  &__MenuButton {
    // 내비게이션 메뉴 `버튼 요소` 스타일 ...
  }
}
```

*Compiled CSS*

```css
.AppNavigation { ... }
.AppNavigation__MenuButton { ... }
```

### Modifier

블록 또는 요소에 대한 플래그(Flags)로 모양(appearance), 행동(behavior) 또는 상태(state)를 변경하는 데 사용합니다.

*HTML*

```html
<nav class="AppNavigation AppNavigation--fixedTop">
  <!-- ... -->
  <button class="AppNavigation__menuButton AppNavigation__menuButton--opened" type="button">...</button>
</nav>
```

*SCSS*

```scss
.AppNavigation {
  &--fixedTop {
    // 앱 내비게이션 상단 고정 스타일 ...
  }
  // ...
  &__MenuButton {
    // ...
    &--opened {
      // 내비게이션 메뉴 버튼 `열린 상태` 스타일 ...
    }
  }
}
```

*Compiled CSS*

```css
.AppNavigation--fixedTop { ... }
.AppNavigation__MenuButton--opened { ... }
```


<br />

## 1. 터미널에서 쓰는 npm 명령어
* VScode 에디터 팔레트 단축키 (`F1`)

명령어 | 약자 | 뜻
--- | --- | ---
`install` | `i` | 패키지 설치 명령
`uninstall` | `un` | 설치된 패키지 제거 명령

## 2. Sass

* [Sass는 햄튼 캐틀린이 설계하고 나탈리 바이첸바움이 개발한 "스타일시트 언어"이다.](https://bit.ly/35e1vSG) CSS의 여러가지 불편함(예: [부모 선택자(Parent Selector, `&`, Sass에서 개발한 특수 선택자)](https://sass-lang.com/documentation/style-rules/parent-selector)를 제공하지 않아 코드가 쉽게 지저분해지고 유지보수도 어렵다)을 보완/확장하는 기능을 제공하여 코드를 보다 효율적으로 가독성있게 작성하고, 재사용할 수 있는 설계가 가능해졌다. 즉, CSS의 능력을 더 확장(extension)시켜 사용할 수 있도록 하는 프리프로세서(전처리기)이다. 
* [Sass 공식 홈페이지](https://sass-lang.com/)
* [Sass 가이드라인(한국어 번역)](https://sass-guidelin.es/ko/)

### 2-1. Sass vs SCSS 

* Sass는 [Sass <del>표기법</del> 문법과 SCSS 문법이 있다.](https://sass-lang.com/documentation/syntax) 둘 중 어떤 문법을 사용해도 Sass에서 구동 가능하지만, Sass 3.0부터 CSS 친화적인 SCSS（Sassy CSS） 문법이 기본 문법이 되었다.

*SCSS 문법*

```scss
.container {
  width: $container-width;
  margin: {
    left: auto;
    right: auto;
  };
}
```

*Sass 문법 (Indented Syntax)*

```scss
.container
  width: $container-width
  margin: 
    left: auto
    right: auto
```

### 2-2. 프리프로세서(Preprocessor)

  + Pre-Processor란? 프로세싱(처리) 전에 처리하는 것을 말하며, "전처리기"라고 해석 가능하다. 대표적인 프리프로세서로는 [Sass](https://sass-lang.com), [less](http://lesscss.org/), [stylus](https://stylus-lang.com/) 등이 있다. 프리프로세서는 브라우저에서 직접 해석(처리)되지 않아 프리프로세서로 작성된 코드를 CSS로 컴파일(변환)해야 한다.
  + 프리프로세싱 → CSS 변환(컴파일) → CSS(프로세싱) → 포스트(프로세싱)

### 2-3. 변수(Variables)

* 재사용하고자 하는 속성을 [변수](https://sass-lang.com/documentation/variables)로 저장할 수 있다. 
* 일관성을 유지하거나 유지보수 할때 편리하다. 
* 디자인 시안에서 재사용 컴포넌트를 확인 후 변수를 만든다.

```scss
// SCSS

$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

```css
/* Compiled CSS */

body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

### 2-4. 중첩(Nesting)

* Sass는 [중첩](https://sass-lang.com/guide#topic-3) 기능을 사용할 수 있다. 상위 선택자를 매번 입력하는 수고로움을 덜고 더 편리하게 작성이 가능하다. 

```scss
// SCSS Nesting

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li { display: inline-block; }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

```css
/* Compiled CSS */

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

#### 2-4-1. 부모 선택자(Parent Selector)

* 앰퍼샌드(ampersand) : (`&`)
* 상위(부모)선택자를 참조할 때 사용한다. 

```scss
/*    1    */
// class=".icon .up-arrow"

// SCSS
.icon {
  &.up-arrow{ 
    margin: 0 
  }
}

// Compiled CSS
.icon.up-arrow { 
  margin: 0 
}
```

* [접미사 추가](https://sass-lang.com/documentation/style-rules/parent-selector#adding-suffixes)를 사용해 코드를 관리할 수 있다.
* [BEM](http://getbem.com/) 방법론이 적용된 CSS 네이밍 작성에 사용하면 편리하다.

```scss
/*    2    */
// class="header__form--email"

// SCSS
.header {
  // ...
  &__form { 
    // ... 
    &--email { 
      // ... 
    }
  }
}


// Compiled CSS
.header { 
  // ... 
}

.header__form { 
  // ... 
}

.header__form--email { 
  // ... 
}
```

<br />

---

<br />

##### [참고]

* [BEM(Block Element Modifier)](http://getbem.com/)
  + 개발, 디버깅, 유지보수를 위하여 CSS 선택자의 이름을 가능한 한 직관적이고 명확하게 만들기 위해 사용한다.
  + 클래스 명을 `.block__element--modifier`와 같은 형식으로 나타낸다. 
  + **ID에는 사용할 수 없고, 오직 클래스명에만 활용할 수 있다.**
  + [BEM (dabin-lee.github.io)](https://dabin-lee.github.io/test_long/2_css/3_CSS_metodologia/css_metodologia.html#3-bem-block-element-modifier)
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
* 위 처럼 각각의 자리에 `<script>`를 위치해보고 값을 확인했다. 값을 확인하려는 DOM 요소의 뒤에 위치했을 때 부터 값이 제대로 나온다. 결론, `<script>`는 HTML `<body>` 하단에 위치시키는 것을 권장.

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

5. 아래 처럼 변수와 함수를 선언하고 값을 확인해보니 `undefined`가 나왔다. <br/>
왜? **함수식에서 제일 중요한 값을 반환하는 `return`를 입력해주지 않았기 때문이다.** 로직에서 `selector`를 찾으라고 명령을 했지만 찾은 값을 어떻게 해야 하는지 입력해 주지 않았다는 말이다. 
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