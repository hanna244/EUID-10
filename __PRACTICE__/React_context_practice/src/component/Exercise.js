import React from 'react'
import { MessageContext } from '../contexts/Message'
import GrandParent from './GrandParent'
import Print from './Print'

// Root 클래스 컴포넌트
export default class Root extends React.Component {
  // 상태
  state = {
    message: '초기 상태 메시지',
  }

  // 메서드
  changeMessage = (newMessage) => {
    // this.setState((state) => ({}));
    this.setState({
      message: newMessage,
    })
  }

  // 렌더
  render() {
    return (
      <MessageContext.Provider
        value={{
          message: this.state.message,
          changeMessage: this.changeMessage,
        }}
      >
        <Print>{this.state.message}</Print>
        <GrandParent parentCount={2} childrenCount={2} />
      </MessageContext.Provider>
    )
  }
}
