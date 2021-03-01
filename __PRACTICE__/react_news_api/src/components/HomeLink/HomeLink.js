import React from 'react'
import { Link } from 'react-router-dom'
import { heading, logo as brand, link } from './HomeLink.module.scss'
import logo from 'assets/logo.svg'

/* -------------------------------------------------------------------------- */

const HomeLink = ({ children, ...restProps }) => {
  return (
    <h1 className={heading} {...restProps}>
      <Link to="/" className={link}>
        <img src={logo} className={brand} alt="React" />
        {children}
      </Link>
    </h1>
  )
}

export default HomeLink
