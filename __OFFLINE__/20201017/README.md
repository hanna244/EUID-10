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
  