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
- [CSS Variables (Custom Properties)](https://caniuse.com/css-variables)

## IE9+ 폴리필

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