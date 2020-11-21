# 커리 함수(curried function)

> 컴퓨터 과학에서 커링(Curring) 또는 커리 함수란?  
> 여러 개의 인자을 갖는 함수를 단일 인자를 갖는 함수들의 함수열로 바꾸는 것을 말합니다.  
> 모지즈 쇤핑클에 의해 도입되었고, 이후 [해스켈 커리](https://ko.wikipedia.org/wiki/%ED%95%B4%EC%8A%A4%EC%BC%88_%EC%BB%A4%EB%A6%AC)에 의해 발전된 방법입니다.

<!-- <br/> -->

<details open>
  <summary>커리 함수? 어떻게 활용할까?</summary>
  <!-- <br/> -->

#### 정렬 (Sort)

배열의 `sort()` 메서드는 배열의 각 원소를 비교하여 순서를 정렬합니다. (정렬 결과는 [안정적(stability)](https://ko.wikipedia.org/wiki/%EC%A0%95%EB%A0%AC_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#%EC%95%88%EC%A0%95%EC%84%B1)이 아닐 수 있습니다.)

- 오름차순(Ascending `ASC`) : 작은 수 → 큰 수 `-10, 2, 7, 19, 22`
- 내림차순(Descending `DSC`) : 큰 수 → 작은 수 `22, 19, 7, 2, -10`

**배열의 이 메서드는 원본 배열을 변경합니다.** (원본을 보호하고 새로운 배열을 반환하는 메서드: `map()`, `filter()` 등)

```js
var originalArray = [1, 10, 101, 20, -31];
// 오름차순 정렬
originalArray.sort(
  /* 비교 콜백함수 */ function (x, y) {
    // 이 방법은 숫자 원소를 비교할 때 사용합니다. (문자는 x > y ? 1 : x < y ? -1 : 0)
    return x - y;
  }
);
console.log(originalArray); // [-31, 1, 10, 20, 101]
// 내림차순 정렬
originalArray.sort(
  /* 비교 콜백함수 */ function (x, y) {
    return y - x;
  }
);
console.log(originalArray); // [101, 20, 10, 1, -31]
```

#### 🎯 원본 배열 보호의 필요성

그러므로 <u>원본 배열을 참조하는 다른 변수가 있을 경우 문제가 유발</u>될 수도 있고,
<u>다시 이전 상태로 되돌리기 위한 변수가 필요</u>할 수도 있습니다.
원본 배열을 보호한 채, 정렬 된 새로운 배열을 사용하려면? 먼저 배열 복사가 필요합니다.

```js
originalArray.slice().sort(function (x, y) {
  return x - y;
});
```

#### 유틸리티 함수 활용

보다 명시적으로 사용하기 위해 `copySort()` 유틸리티 함수를 만들어 사용할 수 있습니다.

```js
function copySort(array, compareCallback) {
  return array.slice().sort(compareCallback);
}
```

```js
copySort(originalArray, function(x, y) {
  return x - y
}
```

#### 커리 함수 활용

커리 함수 방법론에 따라 `커리함수(비교함수)(배열)` 방식으로 함수를 작성하여 실행할 수 있습니다.

```js
currySortArray(function (x, y) {
  return x - y;
})(originalArray);
```

JavaScript에서는 커리 함수를 구현하기 위해 클로저 패턴을 사용합니다.

```js
function currySortArray(function(compareCallback) {
  return function(array) {
    var copyArray = array.slice()
    return copyArray.sort(compareCallback)
  }
})
```

결과적으로 `커리함수()()`는 먼저 실행 `()` 된 함수가 함수를 결과 값으로 반환하므로, 연결지어 실행 `()` 할 수 있습니다.
작성된 커리 함수를 사용해 오름차순, 내림차순 유틸리티 함수를 만들어 사용할 수도 있습니다.

```js
// 커리 함수의 첫번째 실행은 함수 값을 반환 (비교 함수 전달)
var ascSortArray = currySortArray(function (x, y) {
  return x - y;
});
var descSortArray = currySortArray(function (x, y) {
  return y - x;
});
// 오름차순 정렬 (새로운 배열 반환)
ascSortArray(originalArray);
// 내림차순 정렬 (새로운 배열 반환)
descSortArray(originalArray);
```

#### ES5 vs ES6

커리 함수를 활용한 유틸리티를 작성하는 JavaScript 버전 별 방법을 비교해봅니다.

**ES5**

```js
function currySortArray(function(compareCallback) {
  return function(array) {
    return array.slice().sort(compareCallback)
  }
})
var ascSortArray = currySort(function(x, y) { return  x - y})
var descSortArray = currySort(function(x, y) { return  y - x})
```

**ES6**

```js
const currySortArray = (compareCallback) => (array) =>
  [...array].sort(compareCallback);
const ascSortArray = currySortArray((x, y) => x - y);
const descSortArray = currySortArray((x, y) => y - x);
```

**유틸리티 활용**

```js
ascSortArray(originalArray); // [-31, 1, 10, 20, 101]
descSortArray(originalArray); // [101, 20, 10, 1, -31]
```

#### 결론

커리 함수를 사용하는 이유는 다음과 같습니다. ([참고](https://ko.javascript.info/currying-partials))

- **함수의 재사용성을 높일 수 있음**
- 커리 함수의 첫번째 인자 : **설정(옵션)** 등
- 커리 함수의 두번째 인자 : **적용 대상, 값** 등

---

### ⚛ React 프로그래밍에서의 커리 함수

현 시대의 Front-End 개발을 리드하는 React 프로그래밍에서도 커리 함수는 빈번하게 사용됩니다.

```jsx
// Redux 스토어(Store)의 상태를 컴포넌트의 props로 매핑(mapping)하는 설정
const mapStateToProps = (state) => ({ message: state.message });
// Message 컴포넌트
const Message = (props) => (
  <div className="Message__Body">
    <p>{props.message}</p>
  </div>
);
// React Router 고차 컴포넌트 활용 예
// 고차 컴포넌트(HOC, Higher-Order Component) = 커리 함수
// 커리함수(설정)(컴포넌트)
export default connect(mapStateToProps)(Message);
```

---

</details>

<br/>
