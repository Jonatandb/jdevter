import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA5K3WuKaGIA4vnYPDFyvx0uPvF-KrAMJI',
  authDomain: 'jdevter.firebaseapp.com',
  projectId: 'jdevter',
  storageBucket: 'jdevter.appspot.com',
  messagingSenderId: '693316261666',
  appId: '1:693316261666:web:1fb8b67a8fb814456c777b',
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuth = user => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
  }
}

export const onAuthStateChanged = onChange => {
  return firebase.auth().onAuthStateChanged(user => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null
    onChange(normalizedUser)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}
