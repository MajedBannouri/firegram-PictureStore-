import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDwOKgHEyAmSr4Qfout2O4d0_vkHgRtJ7Q",
  authDomain: "firegram-77b41.firebaseapp.com",
  databaseURL: "https://firegram-77b41.firebaseio.com",
  projectId: "firegram-77b41",
  storageBucket: "firegram-77b41.appspot.com",
  messagingSenderId: "698992879611",
  appId: "1:698992879611:web:c1f2709bc3d4775b2c8d5e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
