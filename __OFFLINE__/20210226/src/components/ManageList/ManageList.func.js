import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPeople, removePerson } from '../../store/slices/peopleSlice'

/* -------------------------------------------------------------------------- */

export default function ManageList() {
  const people = useSelector(({ people }) => people)
  const dispatch = useDispatch()

  /* -------------------------------------------------------------------------- */

  const [isPending, setIsPending] = React.useState(false)
  const [hasError, setHasError] = React.useState(null)
  // const [listData, setListData] = React.useState(people ?? [])

  React.useEffect(() => {
    const fetchListData = async () => {
      setIsPending(true)
      setHasError(null)
      try {
        const response = await fetch('/api/list.json')
        const data = await response.json()
        setIsPending(false)
        // setListData(data)
        dispatch(fetchPeople(data))
      } catch (error) {
        setIsPending(false)
        setHasError(error)
      }
    }

    fetchListData()
  }, [dispatch])

  const deleteItem = React.useCallback(
    (removeId) => {
      // setListData(listData.filter(({ id }) => id !== removeId))
      dispatch(removePerson(removeId))
    },
    [dispatch]
  )

  if (isPending) {
    return <div role="alert">컴포넌트를 로딩 중입니다...</div>
  }

  if (hasError) {
    return <div role="alert">오류 발생 {hasError.message}</div>
  }

  return people.length > 0 ? (
    <ul>
      {people.map(({ id, text }) => (
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
