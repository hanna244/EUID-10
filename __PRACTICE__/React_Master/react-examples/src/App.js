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

  linkStyle = { color: '#3c4bab', textDecoration: 'none' }

  handleLinkClick = (title, e) => {
    e.preventDefault()
    this.otherMemberMethod()
    console.log(title)
  }

  otherMemberMethod() {
    console.log('다른 멤버 호출 됨')
  }

  removeLecture = () => {
    console.log('callback')
    this.setState({
      // this.state.FEML_lecturers 데이터 변경
    })
  }

  render() {
    // const { FEML_lecturers } = this.state
    const instructorTitle = '강사진'
    return (
      <div className="app" role="main" aria-labelledby="main-title">
        <h1 id="main-title">
          <a
            style={this.linkStyle}
            href="http://yamoo9.github.io"
            lang="en"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.handleLinkClick.bind(this, instructorTitle)}
          >
            Front-End Masters League
          </a>{' '}
          {instructorTitle}
        </h1>
        <Lecturers
          instructor={this.state.FEML_lecturers}
          handleRemoveLecturer
        />
      </div>
    )
  }
}
