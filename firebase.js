// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE_gGKNOhq1dxnrVIcDYld_-M2nkTcJYE",
  authDomain: "rn-instagram-clone-e92fd.firebaseapp.com",
  projectId: "rn-instagram-clone-e92fd",
  storageBucket: "rn-instagram-clone-e92fd.appspot.com",
  messagingSenderId: "36233873009",
  appId: "1:36233873009:web:f1d7434b5ffbdb570abdd0"
};

console.log('in firebase')

// Initialize Firebase
!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

export default firebase
