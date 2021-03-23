import React, { useState, Fragment } from 'react'
import { SlideToggleContent } from './SlideToggleContent'

export const SideToggle = ({ ...restProps }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <Fragment>
      <h3>Side Toggle</h3>
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? '닫기' : '열기'}
      </button>
      <SlideToggleContent isVisible={isVisible}>
        <h4>react-spring 학습 중</h4>
        <p>익숙해 질 떄까지!</p>
      </SlideToggleContent>
    </Fragment>
  )
}
