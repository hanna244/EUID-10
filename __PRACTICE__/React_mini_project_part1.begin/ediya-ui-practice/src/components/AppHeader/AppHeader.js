import './AppHeader.scss'
import React from 'react'
import AppHomeLink from '../AppHomeLink/AppHomeLink'
import AppNavigation from '../AppNavigation/AppNavigation'

const AppHeader = () => {
  return (
    <header className="appHeader">
      <AppHomeLink />
      <AppNavigation />
    </header>
  )
}

export default AppHeader
