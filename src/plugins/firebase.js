import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC-V7CaNWBAW492XOc9KW-oBObv1Q0eHck",
    authDomain: "todo-list-vue-30650.firebaseapp.com",
    projectId: "todo-list-vue-30650",
    storageBucket: "todo-list-vue-30650.appspot.com",
    messagingSenderId: "363769750681",
    appId: "1:363769750681:web:16fa3941a4c72fe4a64408"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}