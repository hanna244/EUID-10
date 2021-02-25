import store from './store/store'
import MessageControl from './components/MessageControl'

function App() {
  const { greeting: message } = store.getState()
  return (
    <div className="App">
      <header className="App-header">리덕스 공부하기</header>
      <p>{message}</p>
      <MessageControl>
        <MessageControl.Input id="greeting" type="text" />
        <MessageControl.Button />
      </MessageControl>
    </div>
  )
}

export default App
