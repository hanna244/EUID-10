import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const FEML_lecturers = [
  {
    id: 'lecturer-az081871',
    name: '김데레사',
    module: 'A',
    facebook: 'http://facebook.com/seulbinim',
    image: 'http://yamoo9.github.io/images/photo-deresa@2x.png',
  },
  {
    id: 'lecturer-az081872',
    name: '야무',
    module: 'B, C',
    facebook: 'http://facebook.com/yamoo9',
    image: 'http://yamoo9.github.io/images/photo-yamoo9@2x.png',
  },
]

const app = (
  <div className="app" role="main" aria-labelledby="main-title">
    <h1 id="main-title">Front-End Masters League 강사진</h1>
    <ul className="lecturers">
      {FEML_lecturers.map((lecturer) => (
        <li className="lecturers" key={lecturer.id}>
          <a href={lecturer.facebook} rel="noreferer nopener">
            <figure className="lecturer-info">
              <img src={lecturer.image} alt="" className="lecturer-photo" />
              <figcaption>
                {lecturer.module} 모듈을 담당 할 {lecturer.name} 강사 Facebook
                바로가기
              </figcaption>
            </figure>
          </a>
        </li>
      ))}
    </ul>
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
