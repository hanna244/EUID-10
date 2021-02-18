import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AppInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: props.content || '',
    }
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }

  static defaultProps = {
    type: 'text',
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id} className="label">
          {this.props.label}
        </label>{' '}
        {''}
        <input
          style={AppInput.style}
          type={this.props.type}
          id={this.props.id}
          className="input"
          value={this.constructor.content}
          onChange={(e) =>
            this.setState({
              content: e.target.value.trim(),
            })
          }
          value={this.state.content}
        />
      </div>
    )
  }
}

AppInput.style = { color: '#276678' }
