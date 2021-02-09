import React from 'react'
import Lecturers from './Components/Lecturers'

export default class App extends React.Component {
  state = {
    FEML_lecturers: [
      {
        id: 'lecturer-az081871',
        name: '김데레사',
        module: 'A',
        facebook: 'http://facebook.com/seulbinim',
      },
      {
        id: 'lecturer-az081872',
        name: '야무',
        module: 'B, C',
        facebook: 'http://facebook.com/yamoo9',
      },
    ],
  }

  render() {
    return (
      <div className="app" role="main" aria-labelledby="main-title">
        <h1 id="main-title">Front-End Masters League 강사진</h1>
        <Lecturers instructor={this.state.FEML_lecturers} />
      </div>
    )
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        FEML_lecturers: [this.state.FEML_lecturers.pop()],
      })
    }, 2000)
  }
}
