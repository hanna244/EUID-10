import './AppHeader.scss'
import React from 'react'
import AppHomeLink from '../AppHomeLink/AppHomeLink'
import AppNavigation from '../AppNavigation/AppNavigation'

const AppHeader = () => {
  return (
    <header className="appHeader">
      <AppHomeLink
        wrapperProps={{
          as: 'h2',
          className: 'wrapper',
          title: '래퍼',
        }}
        className="test"
        href="/"
        title="홈 페이지로 이동"
      >
        <span className="a11yHidden" lang="en">
          EDIYA COFFEE
        </span>
      </AppHomeLink>
      <AppNavigation />
    </header>
  )
}

export default AppHeader
