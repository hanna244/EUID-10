import React from 'react'
import styled from 'styled-components'
import {
  signInWithGoogle,
  signOut,
  auth,
  getAllUsers as getAllCollection,
} from './service/firebase'
import Loading from './components/Loading'
import Profile from './components/Profile'

const Container = styled.div`
  margin: 40px;
`
const Button = styled.button`
  border: 1px solid ${({ color }) => color ?? '#434343'};
  padding: 0.64em 1.47em;
  background: ${({ background }) => background ?? '#91182c'};
  color: ${({ color }) => color ?? '#fff'};

  &:hover {
    background: ${({ hoverColor }) => hoverColor ?? '#7a575d'};
  }
`

function App() {
  const [currentUser, setCurrentUser] = React.useState(null)
  const [hasError, setHasError] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [users, setUsers] = React.useState([])

  // const getAllUsers = () => {
  // 비동기
  // Promise 방식
  // getAllCollection('Users').then((users) => {
  //   setUsers(users)
  // })

  // setUsers(/* 비동기 함수 ======> 언제 올지 모르는 데이터를 넣어서 업데이트 할거야 */)
  // }

  // Async 함수 방식
  const getAllUsers = async () => {
    // 비동기
    const users = await getAllCollection('Users')
    setUsers(users)
  }

  React.useEffect(() => {
    // 컴포넌트가 마운트 된 이후에 Firestore의 Users 컬렉션에 등록된 모든 문서를 가져와
    getAllUsers()

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setCurrentUser(currentUser)
      setIsLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  // 로그인 함수
  const logIn = () => signInWithGoogle()

  // 로그아웃 함수
  const logOut = () => signOut()

  if (hasError) {
    return <div role="alert">{hasError.message}</div>
  }

  return (
    <Container className="App">
      <header className="App-header">
        <h1>Google Auth Provider 사용하기</h1>
        {isLoading ? (
          <Loading loadingMessage="앱을 준비 중입니다." height="80" />
        ) : (
          <>
            {currentUser ? (
              <>
                <Profile size={30} source={currentUser.photoURL} />
                <p>{currentUser.displayName}님이 입장하셨습니다.</p>
              </>
            ) : (
              <p>로그인이 필요한 서비스입니다.</p>
            )}
            {!currentUser ? (
              <Button type="button" onClick={logIn}>
                로그인
              </Button>
            ) : (
              <Button type="button" onClick={logOut} color="#ebf4dc">
                로그아웃
              </Button>
            )}
            <br />
            <Button type="button" onClick={getAllUsers}>
              클릭 시 User 업데이트
            </Button>
          </>
        )}
      </header>
      <table>
        <caption>내가 좋아하는 사람들</caption>
        <thead>
          <tr>
            <th>이름</th>
            <th>이메일</th>
            <th>직업</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default App
