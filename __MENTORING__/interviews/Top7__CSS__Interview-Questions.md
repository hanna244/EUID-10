# 자주 물어보는 CSS 인터뷰 질문 7가지

작성자 [Christina Kopecky](https://www.linkedin.com/in/cmvnk/) &nbsp; | &nbsp; 번역 [yamoo9](https://facebook.com/yamoo9)

<!-- https://blog.repl.it/Top-7-CSS-Interview-Questions-career-karma -->

웹 개발자 면접에서 채용 팀이 웹 개발에 대한 지식을 평가할 때, CSS(Cascading Style Sheets) 질문을 하기도 합니다.
CSS는 HTML과 더불어 모든 웹 개발자가 사용하기 때문에 관련 지식을 물어보는 것입니다. 다음은 CSS에 대해 가장 많이 물어보는 7가지 인터뷰 질문입니다.

<br/>

## 1. CSS의 탄생 배경과 작동 원리에 대해 간단하게 이야기 해보세요.

**답변**<br/>
CSS 등장 이전에는 스타일을 HTML 요소에 직접 넣어줘야 했습니다. 

```html
<body bgcolor="darkbrown">
  <h1 align="center">
    <font size="7">CSS가 없을 때는 HTML 문서에서 직접 꾸몄어요.</font>
  </h1>
  <br><br>
  <!-- ... -->
</body>
```

하지만 웹 사이트 제작에 대한 수요가 늘어나고, 콘텐츠가 복잡해짐에 따라 HTML(Hypertext Markup Language)의 각 요소에 설정해야 하는 인라인 스타일 속성 또한 복잡해져갔습니다.
이러한 복잡성과 비효율성을 극복하기 위해 CSS가 만들어졌고, HTML 문서에 인라인 스타일 속성을 걷어낼 수 있게 되었습니다. 그로 인해 HTML 문서를 보다 깨끗하고 읽기 쉽게 관리할 수 있게 되었습니다.

CSS는 선택자(`class`, `id`, `[attribute]` 등)를 사용해 문서의 요소를 선택하고 스타일링 합니다. 
동일한 선택자 또는 속성으로 스타일이 정의된 경우 계단식 특성(Cascading Specificity)에 의해 우선 순위가 결정됩니다.

<br/>

## 2. HTML 문서에서 CSS를 사용하는 3가지 방법을 이야기 해보세요.

**답변**<br/>

- **인라인(Inline, 직접)** 스타일링

  ```html
  <h1 style="font-size: 3rem; line-height: 1.2;">인라인 스타일링</h1>
  ```
- **인터널(Internal, 내부)** 스타일링

  ```html
  <style>
    .h1 {
      font-size: 3rem; 
      line-height: 1.2;
    }
  </style>
  ```
- **익스터널(External, 외부)** 스타일링

  ```html
  <link href="./css/modules/typography.css" />
  ```
  ```css
  /* css/modules/typography.css */

  .h1 { font-size: 3rem; line-height: 1.2; }
  ```

<br/>

## 3. 미디어 쿼리는 언제 사용하나요?

**답변**<br/> 
미디어 쿼리(Media Queries)는 다른 매개변수(Parameters)에서 스타일을 수정하는 데 사용됩니다. 
즉, 미디어 쿼리는 다른 중단점(Breakpoints)에 대한 스타일 규칙을 만들어 낼 수 있어 각 장치별 반응하는 반응형 디자인을 구현 할 수 있습니다.

<br/>

## 4. 아이디(`id`) 대신, 클래스(`class`) 속성 사용이 권장되는 이유는 무엇일까요?

**답변**<br/> 
쉽게 이해할 수 있도록 클래스룸(교실, classroom)을 예로 들어 봅시다.
각 "클래스(class, 수업)"는 같은 학년, 동일 과목 등 유사한 그룹으로 묶인 학생들이 수업을 듣습니다.
그리고 클래스에 속한 학생들은 자신 만의 고유한 학번(`id`)을 가지고 있습니다.

- HTML (각)문서에서 `id` 속성 이름이 중복 사용되면 안됩니다.<br/>
`id` 속성은 현재 페이지의 톡정 위치로 이동하기 위해 사용되기도 합니다.
- 유사하거나, 동일한 스타일로 제어해야 할 경우 `class` 속성을 사용하세요.

<br/>

## 5. Flexbox VS CSS Grid

**답변**<br/>
Flexbox는 Box Model의 확장으로 Box Model과 동일한 흐름(`margin`, `border`, `padding`, `content`)을 그대로 사용하며,
`justify-content`, `align-items`과 같은 Flex 속성을 사용하여 반응형 레이아웃에서 콘텐츠의 흐름(flow)을 메인 축과 보조 축으로 제어합니다.

반면 CSS Grid는 행(rows)과 열(columns) 2차원 공간에서 레이아웃을 제어하는 ​​속성을 사용하여 보다 자유로운 레이아웃 디자인을 제어할 수 있습니다.
CSS Grid를 사용하면 흐름에 덜 집중하면서 레이아웃의 정밀도(precision)를 높일 수 있고, Flexbox를 사용하면 반응형 흐름에 초점을 두고 레이아웃의 정밀도를 낮출 수 있습니다.

<br/>

## 6. CSS의 스타일 규칙의 우선 적용(Specificity, 특성)에 대해 이야기 해보세요.

**답변**<br/>
사용된 선택자에 따라 주어지는 특성(점수)가 다르고, 높은 점수의 선택자의 스타일 규칙이 우선 적용됩니다.

우선 적용 순위 | 특성(점수) | 선택자 | 예시 코드
--- | --- | --- | ---
1 | `1,0,0,0` | 인라인 스타일 | `<span style="display: block;">...</span>`
2 | `0,1,0,0` | `id` 선택자 | `#id { ... }`
3 | `0,0,1,0` | `class` 선택자 | `.class { ... }`
4 | `0,0,0,1` | `element(tag)` 선택자 | `span { ... }`
5 | `0,0,0,0` | 유니버셜 선택자 | `* { ... }`

<br/>

## 7. `em`, `rem`, `px`, `pt`, `%` 단위의 차이점을 설명해보세요.

**답변**<br/> 
CSS 폰트 크기 유형은 크게 2가지입니다.

- 픽셀(`px`) 및 포인트(`pt`)는 자주 사용되며 고정 단위입니다.
- `em`,`rem`,`%`는 모두 상대적으로 크기 값이 변경되는 상대 단위입니다.

대부분의 브라우저 기본 글자 크기는 `16px`입니다. 
기본 설정을 조정하려면 `px`를 사용하여 루트 요소(`html`)의 글자 크기를 조정합니다. 
조정된 루트 요소의 글자 크기 값은 `1rem`으로 `em`, `%` 단위와 달리 루트 요소의 글자 크기에 상대적으로 제어됩니다.

```css
:root {
  font-size: 10px;
}

body {
  font: 1.6rem/1.5 SpoqaHanSans, Arial, Verdana, Sans-Serif; /* 16px */
}

.small {
  font-size: 1.2rem; /* 12px */
}

.big {
  font-size: 1.8rem; /* 18px */
}
```

반응형 디자인을 위해서는 고정 단위인 `px`, `pt` 보다, `em`, `rem`, `%` 단위를 사용하는 것이 좋습니다.

<br/>

## 결론

<img align="left" src="../assets/christina.jpg" alt="" style="margin-right: -10px;" />

개발자 인터뷰에서 접할 수 있는 [CSS 인터뷰 질문](https://careerkarma.com/blog/css-interview-questions) 중 일부입니다. 이 외에도 다양한 질문이 주어질 수 있으니 
준비를 철저히 하여 원하는 회사에 입사하길 바랍니다. 행운을 빌어요! — Christina Kopecky

