import React from 'react'
import { layout, main } from './Layout.module.scss'

import Container from 'components/Container/Container'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

/* -------------------------------------------------------------------------- */

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      <main className={main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
