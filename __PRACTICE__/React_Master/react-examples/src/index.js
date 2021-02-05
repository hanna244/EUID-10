import React from 'react'
import ReactDOM from 'react-dom'

// Data === State
const state = {
  appClassName: 'app',
  appTitleClassName: 'app-title',
  appHeadlineContents: ['React', '앱'],
}

const app = (
  <div className={state.appClassName}>
    <h1 className={state.appTitleClassName}>
      <span lang="en">{state.appHeadlineContents[0]}</span>{' '}
      {state.appHeadlineContents[1]}
    </h1>
  </div>
)

ReactDOM.render(app, document.getElementById('root'))
