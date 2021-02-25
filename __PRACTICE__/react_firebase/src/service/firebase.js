import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyBJnWzlHKFgYVClvOXzkZpfyKXbf8WB3Qg',
  authDomain: 'netflix-project-210223.firebaseapp.com',
  projectId: 'netflix-project-210223',
  storageBucket: 'netflix-project-210223.appspot.com',
  messagingSenderId: '1031422483194',
  appId: '1:1031422483194:web:a6fc12258d6c5e84fd4743',
}

firebase.initializeApp(config)

// ------------- Firestore
export const db = firebase.firestore()

export const getAllUsers = (collectionName) => {
  return db
    .collection(collectionName)
    .get()
    .then((snapshop) => snapshop.docs.map((doc) => doc.data()))
    .catch((error) => error)
}

// ------------- Auth
export const auth = firebase.auth()

// setPersistence을 사용해서 로그인 기억하기
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

// 언어 선택
auth.languageCode = 'zh'

// ------------- 구글 인증 공급업체 로그인 함수
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

googleAuthProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider)

// 로그아웃
export const signOut = () => auth.signOut()

export default firebase
