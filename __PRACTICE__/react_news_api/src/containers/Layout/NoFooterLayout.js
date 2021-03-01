import React from 'react'
import { layout, main } from './Layout.module.scss'

import Container from 'components/Container/Container'
import Header from '../Header/Header'

/* -------------------------------------------------------------------------- */

const NoFooterLayout = ({ children }) => {
  return (
    <div className={layout}>
      <Header />
      <main className={main}>
        <Container>{children}</Container>
      </main>
    </div>
  )
}

export default NoFooterLayout
