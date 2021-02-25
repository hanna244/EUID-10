import React from 'react'
import store from './store/store'
import MessageControl from './components/MessageControl'

function App() {
  const [context, setContext] = React.useState(store.getState().greeting)

  const changeText = (e) => {
    setContext(e.target.value)
  }

  const changeButton = () => {
    store.dispatch({
      type: 'CHANGE_TEXT',
      payload: context,
    })
  }

  return (
    <div className="App">
      <header className="App-header">리덕스 공부하기</header>
      <p>{store.getState().greeting}</p>
      <MessageControl>
        <MessageControl.Input
          value={context}
          onChange={changeText}
          id="greeting"
          type="text"
        />
        <MessageControl.Button onClick={changeButton} />
      </MessageControl>
    </div>
  )
}

export default App
