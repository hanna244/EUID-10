import React from 'react'
import styled from 'styled-components'
import { auth, signInWithGoogle, signOut } from './service/firebase'
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

  // 사이드 이펙트
  React.useEffect(() => {
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
          </>
        )}
      </header>
    </Container>
  )
}

export default App
