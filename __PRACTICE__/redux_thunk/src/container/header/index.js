import React from 'react'
import './Header.sass'
import { Link } from 'react-router-dom'

export const Header = ({ children, ...restProps }) => {
  return (
    <div {...restProps}>
      {children}
      <Link className="resetLink" to="/">
        홈
      </Link>
    </div>
  )
}

export default Header
