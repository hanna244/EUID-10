import './AppHomeLink.scss'
import React from 'react'

const AppHomeLink = () => {
  return (
    <h1 className="appHeader__brand">
      <a
        className="appHeader__homeLink"
        href="/"
        title="홈 페이지로 이동"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="a11yHidden" lang="en">
          EDIYA COFFEE
        </span>
      </a>
    </h1>
  )
}

export default AppHomeLink
