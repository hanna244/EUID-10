import React from 'react'

export const ToggleButton = ({ handle, ...restProps }) => {
  return (
    <button onClick={handle} type="button" {...restProps}>
      Click Me!
    </button>
  )
}
