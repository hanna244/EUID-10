import React, { Component } from 'react'
import { MessageContext } from '../../contexts/Message'
import { ContainerChild } from './styles'

// Child 컴포넌트

class Child extends Component {
  static contextType = MessageContext
  render() {
    const { style, message, ...props } = this.props
    const { message: contextMessage, changeMessage } = this.context
    return (
      <ContainerChild>
        <button
          type="button"
          style={{ width: '100%', padding: 5, border: 0, ...style }}
          onClick={() => changeMessage(message)}
          {...props}
        />
      </ContainerChild>
    )
  }
}

// 내보내기 문법
export { Child as default, ContainerChild }
