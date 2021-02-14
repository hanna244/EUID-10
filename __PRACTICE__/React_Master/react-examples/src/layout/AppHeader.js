import React from 'react'

export const AppHeader = ({ title }) => {
  const linkStyle = { color: '#3c4bab', textDecoration: 'none' }

  return (
    <header className="App-header">
      <h1 id="main-title">
        <a
          style={linkStyle}
          href="http://yamoo9.github.io"
          lang="en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Front-End Masters League
        </a>{' '}
        {title}
      </h1>
    </header>
  )
}

export default AppHeader
