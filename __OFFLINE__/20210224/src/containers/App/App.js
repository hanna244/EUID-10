import React from 'react'

// Firebase 서비스
import {
  auth,
  signInWithGoogle,
  signOut,
  getAllUsers as getAllUsersInFirestore,
  addUser as addUserInFirestore,
  removeUsers as removeUsersInFirestore,
} from '../../service/firebase'

// 컴포넌트
import Loader from '../../components/Loader'
import Avatar from '../../components/Avatar'

// 스타일 컴포넌트
import { Button, Container, Headline } from './styled'

/* -------------------------------------------------------------------------- */

function App() {
  // 컴포넌트 상태
  const [currentUser, setCurrentUser] = React.useState(null)
  const [isPending, setIsPending] = React.useState(true)
  const [hasError, setHasError] = React.useState(null)
  const [users, setUsers] = React.useState([])

  // ----------------------------------------------------

  // 사이드 이펙트
  React.useEffect(() => {
    // 모든 Users 컬렉션 문서 가져와 상태 업데이트
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

  // ----------------------------------------------------

  // 로그인 함수
  const logIn = () => signInWithGoogle()

  // 로그아웃 함수
  const logOut = () => signOut()

  // 모든 사용자 가져오기 함수
  const getAllUsers = async () => {
    // Firestore의 모든 데이터 가져오기
    try {
      const users = await getAllUsersInFirestore()
      setUsers(users)
    } catch (error) {
      setHasError(error)
    }
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

    try {
      await addUserInFirestore(dummyUser)
      getAllUsers()
    } catch (error) {
      setHasError(error)
    }
  }

  // Firebase Cloud Firestore 문서 제거
  const removeUser = () => {
    try {
      removeUsersInFirestore('name', '상욱')
      getAllUsers()
    } catch (error) {
      hasError(error)
    }
  }

  // ----------------------------------------------------

  // 오류가 발생하면 오류 메시지를 UI에 렌더링
  if (hasError) {
    return <div role="alert">{hasError.message}</div>
  }

  // 오류가 없으면 렌더링
  return (
    <Container>
      <header className="App-header">
        <Headline>Google Auth Provider 사용하기</Headline>

        {isPending ? (
          <Loader loadingMessage="앱을 준비 중입니다" height="90" />
        ) : (
          <>
            {currentUser ? (
              // 로그인 사용자에게 보이는 콘텐츠
              <>
                <Avatar url={currentUser.photoURL} />
                <p>
                  <strong>{currentUser.displayName}</strong>님이 입장하셨습니다.
                </p>
                <Button
                  type="button"
                  onClick={logOut}
                  color="#eee"
                  background="#000"
                  hoverColor="#242424"
                >
                  로그아웃
                </Button>
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

                <pre>
                  {users.length ? (
                    JSON.stringify(users, null, 2)
                  ) : (
                    <Loader
                      loadingMessage="데이터를 불러오고 있습니다"
                      height="40"
                    />
                  )}
                </pre>
              </>
            ) : (
              // 로그오프 사용자에게 보이는 콘텐츠
              <>
                <p>로그인을 해야 서비스를 이용할 수 있습니다.</p>
                <Button
                  type="button"
                  onClick={logIn}
                  color="#182bd6"
                  hoverColor="#eaebf0"
                >
                  로그인
                </Button>
              </>
            )}
          </>
        )}
      </header>
    </Container>
  )
}

export default App
