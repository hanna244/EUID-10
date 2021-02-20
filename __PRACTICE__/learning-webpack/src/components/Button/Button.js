/**@jsx createElement */
import { createElement } from '@modules/DOM'
import './Button.css'

export default class Button {
  constructor(props) {
    this.props = { ...this.__proto__.constructor.defaultProps, ...props }
  }

  static defaultProps = {
    type: 'button',
    className: 'buttonNode',
  }

  render() {
    return <button {...this.props} />
  }
}
