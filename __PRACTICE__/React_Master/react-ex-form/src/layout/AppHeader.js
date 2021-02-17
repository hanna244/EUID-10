import React from 'react'

const linkStyle = { color: '#fff', textDecoration: 'none' }

const AppHeader = ({ title }) => {
	return (
		<header className="App-header">
			<h1>
				<a
					style={linkStyle}
					href="https://yamoo9.github.io"
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
