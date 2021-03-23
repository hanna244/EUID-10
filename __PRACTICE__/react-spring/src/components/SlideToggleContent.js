import { useTransition, animated } from 'react-spring'
import React from 'react'

export const SlideToggleContent = ({ isVisible, children, ...restProps }) => {
  const transition = useTransition(isVisible, null, {
    enter: {},
  })

  return transition.map(({ item: show, prop: toggleStyle, key }) =>
    show ? (
      <animated.div prop={toggleStyle} key={key} {...restProps}>
        {children}
      </animated.div>
    ) : null
  )
}
