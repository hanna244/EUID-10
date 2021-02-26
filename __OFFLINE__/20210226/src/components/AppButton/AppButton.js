import React, { Component } from 'react'
import classNames from 'classnames'

export default class AppButton extends Component {
  render() {
    const { className, ...restProps } = this.props
    return (
      <button
        type="button"
        className={classNames('App-button', className)}
        {...restProps}
      />
    )
  }
}
