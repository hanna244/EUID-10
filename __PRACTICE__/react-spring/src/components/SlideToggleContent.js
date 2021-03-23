import { useTransition, animated } from 'react-spring'
import React from 'react'

export const SlideToggleContent = ({ isVisible, children, ...restProps }) => {
  const transition = useTransition(isVisible, null, {
    enter: {},
  })

  return transition.map(({ item: show, prop: toggleStyle, key }) =>
    console.log(show)
  )
}
