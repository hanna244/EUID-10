import React from 'react'
import store from './store/store'
import MessageControl from './components/MessageControl'

const { greeting: message } = store.getState()

function App() {
  const [state, setState] = React.useState({
    context: message,
  })

  const changeText = (e) => {
    setState({
      context: e.target.value,
    })
  }

  return (
    <div className="App">
      <header className="App-header">리덕스 공부하기</header>
      <p>{store.getState().greeting}</p>
      <MessageControl>
        <MessageControl.Input
          id="greeting"
          type="text"
          context={state.context}
          changeText={changeText}
        />
        <MessageControl.Button
          onClick={() =>
            store.dispatch({
              type: 'change message',
              payload: state.context,
            })
          }
        />
      </MessageControl>
    </div>
  )
}

export default App
