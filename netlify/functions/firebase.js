const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAd_kehycxwx-wW9hNnNVQt_X07Tk5vVMo",
  authDomain: "week9-21da8.firebaseapp.com",
  projectId: "week9-21da8",
  storageBucket: "week9-21da8.appspot.com",
  messagingSenderId: "583965767628",
  appId: "1:583965767628:web:14d0d028f2e680f90c0f69"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase