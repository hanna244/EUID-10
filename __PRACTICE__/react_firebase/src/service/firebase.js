import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBJnWzlHKFgYVClvOXzkZpfyKXbf8WB3Qg',
  authDomain: 'netflix-project-210223.firebaseapp.com',
  projectId: 'netflix-project-210223',
  storageBucket: 'netflix-project-210223.appspot.com',
  messagingSenderId: '1031422483194',
  appId: '1:1031422483194:web:a6fc12258d6c5e84fd4743',
}

firebase.initializeApp(config)

export const auth = firebase.auth()

// 구글 인증 공급업체 로그인 함수
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

// console.log(googleAuthProvider)

googleAuthProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider)

// 로그아웃
export const signOut = () => auth.signOut()

export default firebase

// setCurrentUser({
//   accessToken: res.credential.accessToken,
//   uid: res.profile.uid,
//   displayName: res.user.displayName,
//   photoURL: res.user.pothoURL,
//   email: res.user.email,
//   phoneNumber: res.user.phoneNumber,
//   providerId: res.credential.providerId,
// })
