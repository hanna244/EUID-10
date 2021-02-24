import React from 'react'
import styled from 'styled-components'
import {
  auth,
  signInWithGoogle,
  signOut,
  getAllUsers as getAllUsersInFirestore,
  addUser as addUserInFirestore,
  removeUsers as removeUsersInFirestore,
} from './service/firebase'
import Loader from './components/Loader'
import Avatar from './components/Avatar'

/* -------------------------------------------------------------------------- */

const Container = styled.div`
  margin: 40px;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
`

const Button = styled.button`
  cursor: pointer;
  width: 100px;
  border: 1px solid ${({ color }) => color ?? '#434241'};
  padding: 0.64em 1.47em;
  background: ${({ background }) => background ?? '#fefefe'};
  color: ${({ color }) => color ?? '#434241'};

  &:hover {
    background: ${({ hoverColor }) => hoverColor ?? '#dadada'};
  }
`

const Headline = styled.h1`
  font-size: 2.2rem;
  color: #182bd6;
`

/* -------------------------------------------------------------------------- */

function App() {
  const [currentUser, setCurrentUser] = React.useState(null)
  const [isPending, setIsPending] = React.useState(true)
  const [hasError, setHasError] = React.useState(null)
  const [users, setUsers] = React.useState([])

  // 사이드 이펙트
  React.useEffect(() => {
    getAllUsers()

    // Google 인증 공급자의 상태 변경 이벤트 감지 (구독)
    const unsubscribe = auth.onAuthStateChanged(
      // resolve (success)
      (currentUser) => {
        // 실시간 컴포넌트 상태 업데이트
        setCurrentUser(currentUser)
        // 팬딩 상태 업데이트
        setIsPending(false)
      },
      // reject (error)
      ({ code, message }) => {
        setHasError({
          code,
          message,
        })
      }
    )

    // 클린업 (정리)
    return () => {
      // 구독 (취소)
      unsubscribe()
    }
  }, [])

  // 로그인 함수
  const logIn = () => signInWithGoogle()

  // 로그아웃 함수
  const logOut = () => signOut()

  // 오류가 발생하면 오류 메시지를 UI에 렌더링
  if (hasError) {
    return <div role="alert">{hasError.message}</div>
  }

  // 모든 사용자 가져오기 함수
  const getAllUsers = async () => {
    // Firestore의 모든 데이터 가져오기

    // async 함수 사용법
    const users = await getAllUsersInFirestore()
    setUsers(users)

    // promise 사용법 (위 함수에서 async 키워드 제거 필요)
    // getAllUsersInFirestore().then((users) => {
    //   setUsers(users)
    // })
  }

  // Firebase Cloud Firestore 문서 추가
  // 새로운 사용자 추가 함수
  const addUser = async (newUser) => {
    // 임시 데이터
    const dummyUser = {
      name: '상욱',
      email: 'swook@gmail.com',
      job: '교사',
    }

    await addUserInFirestore(dummyUser)
    getAllUsers()
  }

  // Firebase Cloud Firestore 문서 제거
  // 리팩터링 전 코드
  const removeUser = async () => {
    await removeUsersInFirestore('name', '상욱')
    getAllUsers()
  }

  return (
    <Container>
      <header className="App-header">
        <Headline>Google Auth Provider 사용하기</Headline>

        {isPending ? (
          <Loader loadingMessage="앱을 준비 중입니다" height="90" />
        ) : (
          <>
            {currentUser ? (
              <>
                <Avatar url={currentUser.photoURL} />
                <p>
                  <strong>{currentUser.displayName}</strong>님이 입장하셨습니다.
                </p>
              </>
            ) : (
              <p>로그인을 해야 서비스를 이용할 수 있습니다.</p>
            )}

            {currentUser ? (
              <Button
                type="button"
                onClick={logOut}
                color="#eee"
                background="#000"
                hoverColor="#242424"
              >
                로그아웃
              </Button>
            ) : (
              <Button
                type="button"
                onClick={logIn}
                color="#182bd6"
                hoverColor="#eaebf0"
              >
                로그인
              </Button>
            )}

            <Button
              type="button"
              onClick={addUser}
              style={{ width: 130, marginTop: 10 }}
            >
              상욱 데이터 추가
            </Button>
            <Button
              type="button"
              onClick={removeUser}
              style={{ width: 170, marginTop: 10 }}
            >
              상욱 데이터 모두 제거
            </Button>

            <pre>{JSON.stringify(users, null, 2)}</pre>
          </>
        )}
      </header>
    </Container>
  )
}

export default App
