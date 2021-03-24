import React, { Fragment, useState, useRef } from 'react'
import { animated, useTransition } from 'react-spring'
import styled from 'styled-components'

const Inner = styled.div`
  &:before,
  &:after {
    content: '';
    display: block;
  }
`

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
  // const isVisibleOnMount = useRef(isVisible && !forceSlideIn)
  const isVisibleOnMount = useRef(isVisible)
  const containerRef = useRef(null)
  const innerRef = useRef(null)

  const transition = useTransition(isVisible, null, {
    enter: () => async (next, cancel) => {
      const height = getElementHeight(innerRef)
      cancel()

      await next({ height, opacity: 1, overflow: 'visible' })
      await next(visibleStyle)
    },
    leave: () => async (next, cancel) => {
      const height = getElementHeight(containerRef)
      cancel()
      await next({ height })
      await next(hiddenStyle)

      isVisibleOnMount.current = false
    },
    from: isVisibleOnMount.current ? visibleStyle : hiddenStyle,
    unique: 'true',
  })

  return transition.map(({ item: show, key, props }) =>
    show ? (
      <animated.div ref={containerRef} style={props} {...restProps}>
        <Inner ref={innerRef}>{children}</Inner>
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
