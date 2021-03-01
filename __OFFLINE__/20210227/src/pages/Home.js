import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'

import Layout from 'containers/Layout/Layout'
import NoFooterLayout from 'containers/Layout/NoFooterLayout'

import News from 'components/News/News'

/* -------------------------------------------------------------------------- */

const LayoutModeChanger = styled.button`
  position: fixed;
  z-index: 1000;
  top: 10px;
  right: 10px;
  border: 0;
  border-radius: 8px;
  padding: 20px 30px;
  background-color: #011b52;
  color: #f3fcff;
  font-weight: bold;
`

/* -------------------------------------------------------------------------- */

const Home = () => {
  const [layoutMode, setLayoutMode] = React.useState(true)
  const LayoutMode = layoutMode ? Layout : NoFooterLayout

  return (
    <>
      <LayoutMode>
        <p>News API를 사용해 전 세계 뉴스를 표시할 것입니다.</p>
        <News />
      </LayoutMode>
      {ReactDOM.createPortal(
        <LayoutModeChanger onClick={() => setLayoutMode(!layoutMode)}>
          {layoutMode ? 'NoFooterLayout' : 'Layout'}
        </LayoutModeChanger>,
        document.body
      )}
    </>
  )
}

export default Home
