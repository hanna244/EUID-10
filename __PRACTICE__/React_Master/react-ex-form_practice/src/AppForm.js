import React from 'react'
import AppInput from './components/AppInput'

export default class App extends React.Component {
  // 초기값 설정
  state = {
    signInInfo: {
      name: '',
      pass: '',
    },
  }

  // 여러개의 input을 하나의 핸들러로 제어한다.
  multiInputHandler = (e) => {
    const { signInInfo } = this.state
    // e.target은 AppInput요소의 input 요소의 이벤트 객체가 된다.
    const { name, value } = e.target.name
    this.setState({
      signInInfo: {
        // 기존 내용을 그대로 가져오면서, name 속성을 덮어쓴다.
        ...signInInfo,
        // [name] 변수 데이터 할당
        // 향상된 객체 속성(계산된 속성) 사용
        [name]: value,
      },
    })
  }

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
              // name 속성을 통해 input을 구분한다. (name/pass)
              inputProps={{ name: 'name' }}
              onInput={this.multiInputHandler}
              content="홍길동"
            />
            <br />
            <AppInput
              id="user-pass"
              label="비밀번호"
              type="password"
              inputProps={{ name: 'pass' }}
              onInput={this.multiInputHandler}
              content="123"
            />
          </fieldset>
        </form>
      </div>
    )
  }
}
