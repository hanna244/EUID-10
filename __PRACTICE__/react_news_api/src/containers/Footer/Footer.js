import Container from 'components/Container/Container'
import React from 'react'
import { container, link } from './Footer.module.scss'

/* -------------------------------------------------------------------------- */

const Footer = () => {
  return (
    <footer className={container}>
      <Container>
        <a
          className={link}
          href="https://ko.reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          lang="en"
        >
          React를 학습해보세요.
        </a>
      </Container>
    </footer>
  )
}

export default Footer
