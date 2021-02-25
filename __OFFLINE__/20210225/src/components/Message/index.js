import React, { Component } from 'react'
import store from '../../store/store'

export default class Message extends Component {
  render() {
    const { greeting: message } = store.getState()
    return message && <p>{message}</p>
  }
}
