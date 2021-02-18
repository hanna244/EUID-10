import React, {Component } “react” 

export default AppInput extends Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.id}>이메일</label>
        <input htmlId={this.props.id} value={this.props.message} onChange={this.props.handle} ></input>
      </>
    )
  }
}
