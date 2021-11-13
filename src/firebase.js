import firebase from "firebase";

// If you're not using Code Sandbox, never hard-code the keys! Add them in your .env file and link them here
var firebaseConfig = {
  apiKey: "AIzaSyByY0V0IGc-vCHBXFeir181Cl8-Lp_Qrxc",
  authDomain: "reacttolife-5592f.firebaseapp.com",
  databaseURL: "https://reacttolife-5592f-default-rtdb.firebaseio.com",
  projectId: "reacttolife-5592f",
  storageBucket: "reacttolife-5592f.appspot.com",
  messagingSenderId: "216887888325",
  appId: "1:216887888325:web:7635a5578687a253ff63ac",
  measurementId: "G-FR4DZB2TBH"
};

// Initialize Firebase
let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
