# CSS 변수(Variables)

`--custom-property-name`과 같이 `--`로 시작하는 속성 이름은 [var()](https://developer.mozilla.org/ko/docs/Web/CSS/var) 함수를 사용하여, 다른 스타일 선언에서 사용할 수 있는 커스텀 속성(Custom Properties)을 말합니다.
커스텀 속성은 선언된 요소로 범위(Scope)가 제한되고 캐스케이드 알고리즘(Cascade Algorithm, 계단식 연산)이 적용됩니다.

분류 | 적용 값
--- | ---
**초기 값**	| 텍스트 참조
**적용 대상** | 모든 요소
**상속 여부** | 가능
**계산 된 값** | 변수에 설정된 값으로 대체
**애니메이션 유형** |	개별(discrete) 적용

## 문법

CSS 변수(또는 커스텀 속성)를 정의하는 기본 문법은 다음과 같습니다.

> <b>NOTE.</b><br>
> CSS 변수는 대/소문자를 구분합니다. `--my-color`와 `--My-color`는 동일한 변수로 인식되지 않음에 주의하세요.


📄 **variables.css**

```css
/* --css-variable: <declaration-value>; */

:root {
  /* 컬러 */
  --primary-color: #30cddf;
  --secondary-color: #5238e0;
  --white-color: #f0f0f0;
  --black-color: #131316;
  /* 포커스 상태 */
  --focus-visible: 0 0 0 6px rgba(43, 23, 155, 0.7);
}
```

📄 **style.css**

```css
body {
  margin: 0;
  background: var(--white-color, #fff);
  color: var(--black-color, #000);
}

:focus {
  outline: none;
  box-shadow: var(--focus-visible);
}

.primary-section {
  background: var(--primary-color);
}

.secondary-section {
  background: var(--secondary-color);
  color: var(--white-color);
}
```

🗳 **브라우저 렌더링 출력 결과**

CSS 변수(커스텀 속성) 값이 각 속성의 값으로 대체되어 브라우저에서 다음과 같이 해석됩니다.

```css
body {
  margin: 0;
  background: #f0f0f0;
  color: #131316;
}

:focus {
  outline: none;
  box-shadow: 0 0 0 6px rgba(43, 23, 155, 0.7);
}

.primary-section {
  background: #30cddf;
}

.secondary-section {
  background: #5238e0;
  color: #f0f0f0;
}
```

## 변수(커스텀 속성) 상속

커스텀 속성은 상속됩니다. 변수가 설정된 요소의 커스텀 속성 값이 설정되지 않은 경우, 부모의 값이 사용됩니다.

```html
<div class="parent">
  <div class="child">
    <div class="grand-child first"></div>
    <div class="grand-child last"></div>
  </div>
</div>
```

```css
:root {
  --space: 0;
}

.parent {
  --space: 10px;
  margin-right: var(--space);
}

.child {
  margin-right: var(--space);
}

.grand-child.first {
  --space: 2em;
  margin-right: var(--space);
}

.grand-child.last {
  margin-right: var(--space);
}
```

적용 대상 | 변수 값이 대체된 출력 결과 | 상속 여부
--- | --- | ---
`.parent` | `margin-right: 10px` | 설정 값 사용.
`.child` | `margin-right: 10px` | 부모의 변수 값 상속.
`.grand-child.first` | `margin-right: 2em` | 설정 값 사용.
`.grand-child.last` | `margin-right: 10px` | 부모의 변수 값 상속.

## JavaScript에서의 CSS 변수(커스텀 속성) GET/SET

**␥ 속성 값 가져오기**

```js
const {getComputedStyle} = window;
const targetNode = document.querySelector('.target');

getComputedStyle(targetNode,null).getPropertyValue('--variable-name');
```

**␥ 속성 값 설정하기**

```js
targetNode.style.setPropertyValue('--variable-name', '24px');
```

## 브라우저 호환성

- 모든 브라우저 지원. 
- IE 미지원.
- [CSS Variables (Custom Properties) [caniuse.com]](https://caniuse.com/css-variables)

## IE 11+ 폴리필

[ie11CustomProperties](https://github.com/nuxodin/ie11CustomProperties)는 Internet Explorer 11에서 CSS 변수를 사용할 수 있게 하는 폴리필 라이브러리입니다. 이 라이브러리는 약 11,000개의 웹사이트에서 사용되고 있습니다. 아래 코드를 `<head>` 안에 붙여넣고 사용합니다.

```html
<script>window.MSInputMethodContext && document.documentMode && document.write('<script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"><\/script>');</script>
```

### 기능

- 체이닝(연결):  `--b:var(--a)`
- 폴백(대체 값):  `var(--custom-color, --base-color, gray)`
- JS 인테그레이션: 
    - `style.setProperty('--custom-var', 'value')`
    - `style.getPropertyValue('--custom-var')`
    - `getComputedStyle(elNode,null).getPropertyValue('--custom-var')`
- `style` 속성: `<div style="--a:b">`
- 캐스케이드 알고리즘
- CSS 변수 상속
- SVG 지원

### 사용법

이 스크립트는 IE가 속성 정의, 캐스케이드, 읽을 수 있는 최소한의 커스텀 속성을 지원한다는 점을 활용합니다. 단, 이중 대시(`--`)로 시작하는 커스텀 속성은 사용할 수 없습니다.

예를 들어 CSS에 작성된 `--foo`를 `-ie-foo`로 스크립트가 대체합니다. 대체된 `.myEl {-ie-test : 'aaa'} // 대시 하나만 허용됩니다! "-"` 코드를 JavaScript를 사용해 IE에서 읽을 수 있습니다. 
`getComputedStyle(querySelector('. myEl'))['-ie-test']` 

변수 getter 및 setter를 포함하는 모든 규칙을 검색하고 영향을 받는 선택자를 메모리하여, 향후 영향을 받는 요소를 뮤테이션 옵저버(mutation observer)를 통해 찾을 수 있습니다.
영향을 받는 각 요소는 고유한 클래스 속성과 요소를 렌더링 하는 자체 스타일이 설정됩니다. 다음은 스크립트가 수행하는 각 단계입니다.

1. CSS 작성

```css
header { --myColor:red; }
main { --myColor:green; }
li { color:var(--myColor); }
```

2. CSS 재작성

```css
header { -ie-myColor:red; }
main { -ie-myColor:green; }
li { -ieHasVar-color:var(-ie-myColor); }
```

3. 영향을 받는 모든 요소를 ​​찾아 속성 값을 설정

```js
querySelectorAll('li').forEach(function(){
  // getPropertyValue() : CSS 변수(커스텀 속성)을 처리하도록 확장
  var color = getComputedStyle(this).getPropertyValue('--myColor');
  // draw_the_Element()
})
```

3. 요소를 렌더링 하면, 각 요소에 CSS 변수 값이 대체됩니다.

```css
li.iecp-u1 { color:red; }
li.iecp-u2 { color:red; }
li.iecp-u3 { color:green; }
li.iecp-u4 { color:green; }
```

### 제한사항

- 요소에 `style` 속성을 사용할 경우, IE11에서 값을 가져오려면 다음과 같이 작성해야 합니다.<br>`<div style="--color:blue" ie-style="--color:blue">`
- `:root`가 아닌, 개별 요소에서 `var()` 함수를 사용해 CSS 변수를 사용해야 합니다.
- `@impport`를 사용한 변수 사용은 현재 지원되지 않습니다.
- `!important` 사용 시 문제가 발생할 수 있으니 주의합니다.

## IE 9+ 포니필

Internet Explorer 9 이상에서 CSS 변수(커스텀 속성)를 사용할 수 있도록 하는 [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill) 라이브러리 사용법은 [문서](https://jhildenbiddle.github.io/css-vars-ponyfill/)를 참고하세요. 

```html
<script src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2"></script>
```

> <b>NOTE.</b><br>
> 사용에 제약 조건이 있습니다. (예: `:root`에만 CSS 속성 사용 가능)

## 참고 문서

- [CSS Custom Properties for Cascading Variables Module Level 1 [W3C]](https://www.w3.org/TR/css-variables-1)
- [Custom properties (--*): CSS variables [MDN]](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [사용자 지정 CSS 속성 사용하기 (변수) [MDN]](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)