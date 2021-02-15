import React, { Component } from 'react'

const ControlNumber = ({ ...props }) => {
  return (
    <>
      <button type="button" onClick={props.handle.decrease}>
        -
      </button>
      <button type="button" onClick={props.handle.increase}>
        +
      </button>
    </>
  )
}

const ShowNumber = (props) => {
  console.log(props)
  return <output>{props.number}</output>
}

class Counter extends Component {
  state = {
    number: this.props.defaultNumber,
  }

  increase = () => {
    console.log('증가')
    this.setState({ number: this.state.number + 1 })
  }
  decrease = () => {
    console.log('감소')
    this.setState({ number: this.state.number - 1 })
  }

  render() {
    const { increase, decrease } = this
    return (
      <>
        <ShowNumber number={this.state.number} />
        <ControlNumber
          style={{ color: '#f00' }}
          handle={{ increase, decrease }}
        />
      </>
    )
  }
}

export default Counter
