import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCfyS3Q-bo_ryqyxQqtKFzIIJK0F82m1lc",
    authDomain: "crwn-db-effc1.firebaseapp.com",
    databaseURL: "https://crwn-db-effc1.firebaseio.com",
    projectId: "crwn-db-effc1",
    storageBucket: "crwn-db-effc1.appspot.com",
    messagingSenderId: "564024849517",
    appId: "1:564024849517:web:5c875d601281078a07fb64",
    measurementId: "G-SPHRCF69EF"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: "select_account"})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase