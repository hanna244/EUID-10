import React, { Component } from 'react'

export default class ManageList extends Component {
  state = {
    isPending: false,
    hasError: null,
    listData: [],
  }

  componentDidMount() {
    this.fetchListData()
  }

  fetchListData = async () => {
    this.setState({
      isPending: true,
      hasError: null,
    })
    try {
      const response = await fetch('/api/list.json')
      const data = await response.json()
      this.setState({
        isPending: false,
        listData: data,
      })
    } catch (error) {
      this.setState({
        isPending: false,
        hasError: error,
      })
    }
  }

  deleteItem = (removeId) => {
    this.setState({
      listData: this.state.listData.filter(({ id }) => id !== removeId),
    })
  }

  render() {
    if (this.state.isPending) {
      return <div role="alert">컴포넌트를 로딩 중입니다...</div>
    }

    if (this.state.hasError) {
      return <div role="alert">오류 발생 {this.state.hasError.message}</div>
    }

    return this.state.listData.length > 0 ? (
      <ul>
        {this.state.listData.map(({ id, text }) => (
          <ManageList.Item
            key={id}
            id={id}
            onDelete={this.deleteItem}
            children={text}
          />
        ))}
      </ul>
    ) : (
      <p>화면에 그려낼 아이템이 없습니다.</p>
    )
  }
}

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
