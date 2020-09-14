import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDLF4ozXo6c0bK-ynle1hRkVIRtwAKYDgM',
  authDomain: 'crwn-db-97714.firebaseapp.com',
  databaseURL: 'https://crwn-db-97714.firebaseio.com',
  projectId: 'crwn-db-97714',
  storageBucket: 'crwn-db-97714.appspot.com',
  messagingSenderId: '646111939869',
  appId: '1:646111939869:web:0e640d180d22d3fc39e5f4'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ promt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
