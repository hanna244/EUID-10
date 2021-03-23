import React from 'react'
import { SlideToggleContent } from './SlideToggleContent'

export const SideToggle = ({ ...restProps }) => {
  const [isVisible, setIsVisible] = React.useState(false)
  return (
    <>
      <h3 {...restProps}>Slide Toggle</h3>
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Close' : 'Open'} content
      </button>
      <SlideToggleContent isVisible={isVisible}>
        <>
          <h4>Success!! 🎉</h4>
          <p>This content will be mounted and unmounted</p>
        </>
      </SlideToggleContent>
    </>
  )
}
