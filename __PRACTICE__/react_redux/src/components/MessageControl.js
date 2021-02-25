import React, { Fragment } from 'react'
import store from '../store/store'

// 클래스 내부에는 const 구문을 사용할 수 없다.
const { greeting } = store.getState()

class MessageControl extends React.Component {
  state = {
    context: greeting,
  }

  changeText = () => {
    {
      input.value
    }
  }

  static Input = ({ id, type, ...props }) => {
    return (
      <div>
        <label htmlFor={id}>이메일 변경</label>
        <input
          id={id}
          type={type}
          value={this.state.context}
          onChange={changeText}
          {...props}
        />
      </div>
    )
  }

  static Button = (props) => {
    return (
      <button type="button" {...props}>
        변경
      </button>
    )
  }

  render() {
    return this.props.children
  }
}

export default MessageControl
