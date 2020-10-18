# OFFLINE_MENTORING

# QnA
 **1.BEM표기법을 BEM방법론이라고도 하는데 CSS표기법과 CSS방법론의 개념이 어떻게 다른가요?**
 // D06 TIL에 질문하기

## 1. 터미널에서 쓰는 npm 명령어

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
  