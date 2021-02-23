import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
var firebaseConfig = {
    apiKey: "AIzaSyCveBTdQEygjLpyg17DDM2cGtOi4AXtfiE",
    authDomain: "digital-download-platform.firebaseapp.com",
    projectId: "digital-download-platform",
    storageBucket: "digital-download-platform.appspot.com",
    messagingSenderId: "717894786446",
    appId: "1:717894786446:web:93db2388469ed160c518df"
  }

export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })
