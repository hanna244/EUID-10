import React from 'react'

/* -------------------------------------------------------------------------- */

export default function ManageList() {
  const [isPending, setIsPending] = React.useState(false)
  const [hasError, setHasError] = React.useState(null)
  const [listData, setListData] = React.useState([])

  const deleteItem = React.useCallback(
    (removeId) => setListData(listData.filter(({ id }) => id !== removeId)),
    [listData]
  )

  React.useEffect(() => {
    const fetchListData = async () => {
      setIsPending(true)
      setHasError(null)
      try {
        const response = await fetch('/api/list.json')
        const data = await response.json()
        setIsPending(false)
        setListData(data)
      } catch (error) {
        setIsPending(false)
        setHasError(error)
      }
    }

    fetchListData()
  }, [])

  if (isPending) {
    return <div role="alert">컴포넌트를 로딩 중입니다...</div>
  }

  if (hasError) {
    return <div role="alert">오류 발생 {hasError.message}</div>
  }

  return listData.length > 0 ? (
    <ul>
      {listData.map(({ id, text }) => (
        <ManageList.Item
          key={id}
          id={id}
          onDelete={deleteItem}
          children={text}
        />
      ))}
    </ul>
  ) : (
    <p>화면에 그려낼 아이템이 없습니다.</p>
  )
}

/* -------------------------------------------------------------------------- */
// 컴파운드 컴포넌트

ManageList.Item = ({ id: removeId, children, onDelete, ...restProps }) => {
  return (
    <li {...restProps}>
      {children}{' '}
      <button type="button" onClick={() => onDelete(removeId)}>
        제거
      </button>
    </li>
  )
}

ManageList.Item.displayName = 'ManageList.Item'
