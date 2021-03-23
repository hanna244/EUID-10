import React, { Fragment, useState, useRef } from 'react'
import { animated, useTransition } from 'react-spring'

const visibleStyle = { height: 'auto', opacity: 1, overflow: 'visible' }
const hiddenStyle = { height: 0, opacity: 0, overflow: 'hidden' }

const getElementHeight = (ref) => {
  return ref.current ? ref.current.getBoundingClientRect().height : 0
}

const SimpleSliceItem = ({
  children,
  isVisible,
  forceSlideIn = false,
  ...restProps
}) => {
  const isVisibleOnMount = useRef(isVisible && !forceSlideIn)
  const containerRef = useRef(null)

  const transition = useTransition(isVisible, null, {
    enter: () => async (next, cancel) => {
      const height = getElementHeight(containerRef)
      cancel()

      await next({ height, overflow: 'hidden' })
      await next(visibleStyle)
    },
    leave: () => async (next, cancel) => {
      const height = getElementHeight(containerRef)
      cancel()
      await next({ height, overflow: 'hidden' })
      await next(hiddenStyle)

      isVisibleOnMount.current = false
    },
    from: isVisibleOnMount.current ? visibleStyle : hiddenStyle,
    unique: 'true',
  })

  return transition.map(({ item: show, key, props }) =>
    show ? (
      <animated.div ref={containerRef} style={props} {...restProps}>
        {children}
      </animated.div>
    ) : null
  )
}

export const SimpleSlice = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <Fragment>
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'true' : 'false'}
      </button>
      <SimpleSliceItem isVisible={isVisible}>
        <p>이 것은</p>
        <p>데모입니다.</p>
      </SimpleSliceItem>
    </Fragment>
  )
}
