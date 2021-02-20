import { createElement } from '../../modules/DOM'

export default class Button {
  constructor(props) {
    this.props = { ...this.__proto__.constructor.defaultProps, ...props }
  }

  static defaultProps = {
    type: 'button',
  }

  render() {
    return createElement('button', this.props)
  }
}
