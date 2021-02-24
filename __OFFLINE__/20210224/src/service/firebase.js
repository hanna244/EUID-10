import firebase from 'firebase/app'
import 'firebase/auth'

// Firebase 구성 객체
const config = {
  apiKey: 'AIzaSyA0zozq0tAcSqppM0MDUfGUk5a7PLnnOwM',
  authDomain: 'learning-guide-firebase.firebaseapp.com',
  databaseURL: 'https://learning-guide-firebase.firebaseio.com',
  projectId: 'learning-guide-firebase',
  storageBucket: 'learning-guide-firebase.appspot.com',
  messagingSenderId: '474758312015',
  appId: '1:474758312015:web:de4c029882400fdde83a3a',
}

// Firebase 앱 초기화
firebase.initializeApp(config)

// Firebase 인증 객체
export const auth = firebase.auth()

// 로컬라이제이션
// auth.languageCode = 'ko'
auth.useDeviceLanguage()

// 로그인(인증) 지속성 설정
// console.log(firebase.auth.Auth.Persistence.LOCAL) // 창을 닫아도 로그인 상태 유지 (기본 값)
// console.log(firebase.auth.Auth.Persistence.SESSION) // 열린 세션(창)에서만 로그인 상태 유지
// console.log(firebase.auth.Auth.Persistence.NONE) // 창을 닫으면 로그오프
// auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

// Google 인증 공급업체 객체 생성
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
// 사용자의 컴퓨터에 등록되어 있는 Google 계정 중 하나를 사용자가 선택할 수 있도록 한다.
googleAuthProvider.setCustomParameters({ prompt: 'select_account' })
// Google 로그인 함수
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider)

// 로그아웃 함수
export const signOut = () => auth.signOut()

// firebase 기본 내보내기
export default firebase
