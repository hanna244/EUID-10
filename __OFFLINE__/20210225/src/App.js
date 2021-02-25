import './App.css'
import React from 'react'
import logo from './logo.svg'
import Message from './components/Message'
import MessageControl from './components/MessageControl'
import store from './store/store'

const { greeting } = store.getState()

function App() {
  const [message, setMessage] = React.useState(greeting)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message />
        <MessageControl>
          <MessageControl.Input
            value={message}
            onChange={(e) => {
              // App 컴포넌트의 상태 업데이트
              setMessage(e.target.value)
            }}
          />
          <MessageControl.Button
            onClick={() => {
              const action = {
                type: 'CHANGE_GREETING',
                payload: message,
              }

              store.dispatch(action)
            }}
          >
            메시지 변경
          </MessageControl.Button>
        </MessageControl>
      </header>
    </div>
  )
}

export default App
