import React from 'react'
import AppInput from './components/AppInput'

export default class App extends React.Component {
  render() {
    return (
      <div className="app container">
        <form className="form-example">
          <fieldset>
            <legend className="h2">React 폼 컨트롤 실습</legend>
            <AppInput
              id="user-name"
              label="이름"
              type="email"
              inputProps={{ name: 'name' }}
              onInput={this.multiInputHandler}
              content="홍길동"
            />
          </fieldset>
        </form>
      </div>
    )
  }
}
