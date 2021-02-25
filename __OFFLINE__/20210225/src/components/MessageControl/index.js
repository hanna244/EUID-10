import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

export default class MessageControl extends Component {
  // 컴파운드 컴포넌트
  static Button = (props) => {
    return <button type="button" {...props} />
  }

  static Input = ({ id = uuid(), label = '메시지 변경', ...restProps }) => {
    return (
      <div>
        <label htmlFor={id}>{label}</label> {': '}
        <input id={id} type="text" {...restProps} />
      </div>
    )
  }

  render() {
    return this.props.children
  }
}
