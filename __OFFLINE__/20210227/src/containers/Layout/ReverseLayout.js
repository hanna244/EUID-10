import React from 'react'
import { layout, main } from './ReverseLayout.module.scss'

import Container from 'components/Container/Container'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

/* -------------------------------------------------------------------------- */

const ReverseLayout = ({ children }) => {
  return (
    <div className={layout}>
      <Footer />
      <main className={main}>
        <Container>{children}</Container>
      </main>
      <Header />
    </div>
  )
}

export default ReverseLayout
