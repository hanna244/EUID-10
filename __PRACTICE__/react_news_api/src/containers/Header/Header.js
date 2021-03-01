import React from 'react'
import { container } from './Header.module.scss'

import HomeLink from 'components/HomeLink/HomeLink'
import Container from 'components/Container/Container'

/* -------------------------------------------------------------------------- */

const Header = () => {
  return (
    <header className={container}>
      <Container>
        <HomeLink lang="en">React News</HomeLink>
      </Container>
    </header>
  )
}

export default Header
