# Array.prototype.findIndex()

- [[MDN]배열 객체의 `findIndex()`메서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

## `findIndex()`

- `return`값이 `true`면 작동이 멈춘다.

```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = function (element) {
  return element > 13;
};
// const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```
