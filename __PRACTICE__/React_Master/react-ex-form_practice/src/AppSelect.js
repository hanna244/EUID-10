import React from 'react'

const Select = ({ list, id, handle, ...restProps }) => {
  return (
    <>
      <select name="FE" id={id} {...restProps} onChange={handle}>
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
    const selectedOptionValue = Array.from(e.target.value)
      .filter((option) => option.selected)
      .map((option) => option.value)

    setkeyword(selectedOptionValue)
  }

  return (
    <div>
      <h1>리액트 폼 컨트롤 셀렉트 예제</h1>
      <Select
        multiple
        handle={handleSelect}
        id="react-f"
        list={AppSelect.list}
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
