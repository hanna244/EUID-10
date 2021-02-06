import React from 'react'
import Lecturers from './Components/Lucturers'
import DeliveryComment from './Components/DeliveryComment'

const FEML_lecturers = [
  {
    id: 'lecturer-az081871',
    name: '김데레사',
    module: 'A',
    facebook: 'http://facebook.com/seulbinim',
    // image: 'http://yamoo9.github.io/images/photo-deresa@2x.png',
  },
  {
    id: 'lecturer-az081872',
    name: '야무',
    module: 'B, C',
    facebook: 'http://facebook.com/yamoo9',
    // image: 'http://yamoo9.github.io/images/photo-yamoo9@2x.png',
  },
]

function App() {
  return (
    <div className="app" role="main" aria-labelledby="main-title">
      <h1 id="main-title">Front-End Masters League 강사진</h1>
      <Lecturers instructor={FEML_lecturers} />
      <DeliveryComment />
    </div>
  )
}

export default App
