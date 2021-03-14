import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA5K3WuKaGIA4vnYPDFyvx0uPvF-KrAMJI',
  authDomain: 'jdevter.firebaseapp.com',
  projectId: 'jdevter',
  storageBucket: 'jdevter.appspot.com',
  messagingSenderId: '693316261666',
  appId: '1:693316261666:web:1fb8b67a8fb814456c777b',
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const mapUserFromFirebaseAuth = user => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
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

export const addJdevit = ({ avatar, content, userId, userName }) => {
  return db.collection('devits').add({
    avatar,
    userName,
    userId,
    content,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

export const getLatestJdevits = () => {
  return db
    .collection('devits')
    .orderBy('createdAt', 'desc')
    .get()
    .then(({ docs }) => {
      return docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data

        return {
          id,
          ...data,
          createdAt: +createdAt.toDate(),
        }
      })
    })
}
