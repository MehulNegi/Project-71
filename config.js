import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBnAo-B98seDxcs7qwEVltHH1gWoah0WDs",
  authDomain: "project-71-2bd3a.firebaseapp.com",
  projectId: "project-71-2bd3a",
  storageBucket: "project-71-2bd3a.appspot.com",
  messagingSenderId: "498910279902",
  appId: "1:498910279902:web:345938b31af4897801aa4f"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

