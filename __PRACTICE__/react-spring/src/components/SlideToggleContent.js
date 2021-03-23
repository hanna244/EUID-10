import { useTransition, animated } from 'react-spring'
import React from 'react'

// CSS 보이게 하기
const visibleStyle = { height: 'auto', opacity: 1, overflow: 'visible' }
// CSS 안보이게 하기
const hiddenStyle = { opacity: 0, height: 0, overflow: 'hidden' }

function getElementHeight(ref) {
  return ref.current ? ref.current.getBoundingClientRect().height : 0
}

export const SlideToggleContent = ({
  isVisible,
  children,
  forceSlideIn,
  ...restProps
}) => {
  const isVisibleOnMount = React.useRef(isVisible)
  const containerRef = React.useRef(null)
  const innerRef = React.useRef(null)

  const transitions = useTransition(isVisible, null, {
    enter: () => async (next, cancel) => {
      const height = getElementHeight(innerRef)
      cancel()
      await next({ height, opacity: 1, overflow: 'hidden' })
      await next(visibleStyle)
    },
    leave: () => async (next, cancel) => {
      const height = getElementHeight(containerRef)
      cancel()
      await next({ height, overflow: 'hidden' })
      await next(hiddenStyle)
    },
    from: isVisibleOnMount.current ? visibleStyle : hiddenStyle,
  })

  return transitions.map(({ item: show, props: springProps, key }) => {
    if (show) {
      return (
        <animated.div
          ref={containerRef}
          key={key}
          style={springProps}
          {...restProps}
        >
          <p ref={innerRef}>{children}</p>
        </animated.div>
      )
    }
    return null
  })
}
