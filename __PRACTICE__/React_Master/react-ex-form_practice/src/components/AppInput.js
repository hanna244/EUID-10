import React, { Component } from 'react'
import { string, func } from 'prop-types'

export default class AppInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: props.content || '',
    }
  }

  static propTypes = {
    id: string.isRequired,
    label: string.isRequired,
    onInput: func,
  }

  static defaultProps = {
    type: 'text',
  }

  // onInput 메서드를 props로 받아 올 때, 실행한다.
  // onInput은 콜백 메서드가 된다.
  handle = (e) => {
    const { onInput } = this.props
    onInput && onInput(e)
  }

  render() {
    return (
      <div>
        <label
          htmlFor={this.props.id}
          className="label"
          // 부모 컴포넌트에서 속성을 추가 할 경우 이 곳에 담긴다.
          {...this.props.labelProps}
        >
          {this.props.label}
        </label>
        <input
          style={AppInput.inputStyle}
          type={this.props.type}
          id={this.props.id}
          className="input"
          onChange={(e) => this.handle(e)}
          {...this.props.inputProps}
        />
      </div>
    )
  }
}

AppInput.inputStyle = { color: '#276678' }
