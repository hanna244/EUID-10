import { createElement } from '../../modules/DOM'

// 함수형 컴포넌트
// export default function Heading(props) {
//   return createElement('h1', props)
// }

export default class Heading {
  constructor(props) {
    this.props = { ...this.__proto__.constructor.defaultProps, ...props }
  }

  static defaultProps = {
    className: 'headingNode',
  }

  render() {
    return createElement('h1', this.props)
  }
}
