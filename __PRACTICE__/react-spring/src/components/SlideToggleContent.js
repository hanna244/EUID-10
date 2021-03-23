import React, { useRef } from 'react'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

const Inner = styled.div`
  &:before,
  &:after {
    content: '';
    display: table;
  }
`

// CSS 보이게 하기
// const visibleStyle = { opacity: 1, overflow: 'visible' }
// CSS 안보이게 하기
// const hiddenStyle = { opacity: 0, height: 0, overflow: 'hidden' }

function getElementHeight(ref) {
  return ref.current ? ref.current.getBoundingClientRect().height : 0
}

/** The children of this component will slide down on mount and will slide up on unmount */
/** 이 구성 요소의 자식은 마운트시 아래로 슬라이드하고 마운트 해제시 위로 슬라이드합니다. */
export const SlideToggleContent = ({ isVisible, children, forceSlideIn }) => {
  const isVisibleOnMount = useRef(isVisible && !forceSlideIn)
  const containerRef = useRef(null)
  const innerRef = useRef(null)
  // 질문1, null인데 어떻게 높이 값을 구하는가?
  console.log(containerRef) // null
  console.log(innerRef) // null

  const transitions = useTransition(isVisible, null, {
    enter: () => async (next, cancel) => {
      // height???? 어떻게??
      const height = getElementHeight(innerRef)

      // cancel()

      // 높이에 따라 펼쳐질 떄, 서서히 opacity: 0이 된다는 것인가?
      await next({ height, opacity: 1, overflow: 'hidden' })
      await next({ height: 'auto', opacity: 1, overflow: 'visible' })
    },
    // 애니메이션 끝
    leave: () => async (next, cancel) => {
      const height = getElementHeight(containerRef)

      // cancel()

      await next({ height, overflow: 'hidden' })
      await next({ opacity: 0, height: 0, overflow: 'hidden' })

      isVisibleOnMount.current = false
    },
    // 애니메이션 기본 스타일
    from: isVisibleOnMount.current ? { opacity: 1 } : { opacity: 0 },
    unique: true,
  })

  return transitions.map(({ item: show, props: springProps, key }) => {
    if (show) {
      return (
        <animated.div ref={containerRef} key={key} style={springProps}>
          <Inner ref={innerRef}>{children}</Inner>
        </animated.div>
      )
    }

    return null
  })
}

SlideToggleContent.defaultProps = {
  forceSlideIn: false,
}
