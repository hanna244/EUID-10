import React from 'react'

const Select = ({ list, id, ...restProps }) => {
  return (
    <>
      {/* 접근성을 위해 label을 선택해준다.  */}
      {/* <label htmlFor={id}>원하시는 것을 선택하세요</label> */}
      {/* 나머지 연산자는 맨 뒤에 작성하는 것이 좋다. 왜? 속성을 덮어쓰기 때문 */}
      {/* 이벤트 함수나 상태 props 같은 경우 restProps에 담기기 따로 작성할 필요가 없다. */}
      <select id={id} {...restProps}>
        <option value="">선택하세요</option>
        {list.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  )
}

export const AppSelect = () => {
  const [keyword, setkeyword] = React.useState(['react', 'router'])

  const handleSelect = (e) => {
    // 멀티플 셀렉트이기 때문에 children으로 설정해야 배열을 전달 할 수 있다.
    const selectedOptionValue = Array.from(e.target.children)
      .filter((option) => option.selected)
      .map((option) => option.value)

    setkeyword(selectedOptionValue)
  }

  return (
    <div>
      <h1>리액트 폼 컨트롤 셀렉트 예제</h1>
      <Select
        multiple
        id="react-f"
        list={AppSelect.list}
        // 업데이트할 상태의 값과 상태를 업데이트할 이벤트를 같이 전달해야한다.
        value={keyword}
        onChange={handleSelect}
      />
      <p>{JSON.stringify(keyword, null, 2)}</p>
    </div>
  )
}

AppSelect.list = [
  { label: '리액트', id: 's1', value: 'react' },
  { label: '라우터', id: 's2', value: 'router' },
  { label: '리덕스', id: 's3', value: 'redux' },
]
