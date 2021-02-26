import React from 'react'

/* -------------------------------------------------------------------------- */

class Counter extends React.Component {
  // 컴파운드 컴포넌트
  static Display = (props) => {
    return <output style={{ margin: '-4px 6px 0' }}>{props.count ?? 0}</output>
  }

  static Controls = ({ children, onIncrement, onDecrement, ...restProps }) => {
    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button type="button" onClick={onIncrement} style={Counter.buttonStyle}>
          +
        </button>
        {children}
        <button type="button" onClick={onDecrement} style={Counter.buttonStyle}>
          -
        </button>
      </div>
    )
  }

  static buttonStyle = {
    cursor: 'pointer',
    border: 0,
    borderRadius: 10,
    width: 20,
    height: 20,
  }

  // 렌더링
  render() {
    return <div>{this.props.children}</div>
  }
}

Counter.Display.displayName = 'Display'
Counter.Controls.displayName = 'Controls'

export default Counter
