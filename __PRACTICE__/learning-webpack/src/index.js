import { success } from './modules/LOGGER'
import { createElement, getById, render } from './modules/DOM'
import Button from './components/Button/Button'
import Heading from './components/Heading/Heading'

/* -------------------------------------------------------------------------- */

const button = new Button({
  onClick() {
    success('clicked button')
  },
  children: 'click me!',
})

const heading = new Heading({
  children: '웹팩도 사랑해요!!🧡',
})

// 함수형 컴포넌트
// const heading = Heading({
//   children: '웹팩도 사랑해요!!🧡',
// })

const app = createElement('div', null, [heading.render(), button.render()])

render(app, getById('root'))
