# 학습 중 새롭게 알게된 내용

<br>

- 학습 중 새롭게 알게된 내용 또는 학습 목표 이외에 스스로 학습한 내용들을 정리합니다.

## 목차

1. [DOM API & BOM API & WEB API](##1)
1. [`Element.classList` MDN문서 해석](##2)
1. [`window` 상위 객체](##3)
1. [제목 요소 순서](##4)
1. [`js`에서 요소 노드를 불러올 때, 왜 상위 요소부터 차례로 불러오나요?](##5)

## 5

`js`에서 요소 노드를 불러올 때, 왜 상위 요소부터 차례로 불러오나요?

<details open>
  <summary>#5 보기</summary>

  <br>

```js
var photoGallery = document.querySelector(".photoGallery");
var photoGalleryBigPhoto = photoGallery.querySelector(
  ".photoGallery__bigPhoto"
);
```

상위 요소 부터 차례로 불러와야 내가 찾아 사용하려는 하위 요소가 어느 부모에 속해 있는 자식 요소인지 알 수 있다. 또한 이렇게 요소를 불러와야 내가 하려는 수행하려는 작업의 한 눈에 파악할 수 있어서 편리하다.

</details>

<br>

## 4

제목 요소 순서

<details>
  <summary>#4 보기</summary>

  <br>

[](https://www.youtube.com/watch?v=ahNuj_-0O7w&lc=Ugz_-JyRmZP_NQqv1zt4AaABAg.9FM5WrAo4cZ9FXyvEb6LZ6)

1. 아웃라인이란?

1. "특정 요소(blockquote, td 등)는 '섹셔닝 루트'로 불립니다."
   여기에서 특정 요소란 "독립적인 아웃라인을 가지는" 요소를 의미하나요?

</details>

<br>

## 3

`window` 상위 객체

<details>
  <summary>#3 보기</summary>

  <br>
  
  `window.addEventListener('scroll', handleScroll);` 해당 이벤트 구문에서 `window`에 이벤트를 걸어주는 이유는 `scroll`이 `window`의 기능(메소드)이기 때문에 `window`가 이벤트를 받는 대상이 되나요?

</details>

<br>

## 2

`Element.classList` MDN문서 해석

<details>
  <summary>#2 보기</summary>

  <br>

[](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)
"element.classList 그 자체는 읽기 전용 프로퍼티지만 add()와 remove() 메서드를 이용하여 변형할 수 있다."
여기서 "읽기 전용"이라는 말은 `console.log()`처럼 기록하고 출력된 내용을 읽는 것을 말하나요?

</details>

<br>

## 1

DOM API & BOM API & WEB API

<details>
  <summary>#1 보기</summary>

  <br>

</details>
