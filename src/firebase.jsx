import firebase from "firebase/compat/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCc_BCkfPoch0xyzW9qSA36lMcDZqJ0HAc",
  authDomain: "todoist-tut-51435.firebaseapp.com",
  databaseURL: "https://todoist-tut-51435-default-rtdb.firebaseio.com",
  projectId: "todoist-tut-51435",
  storageBucket: "todoist-tut-51435.firebasestorage.app",
  messagingSenderId: "1081595059850",
  appId: "1:1081595059850:web:35d74d022c497147d0d773",
  measurementId: "G-P6G6LYXTL5",
});

export { firebaseConfig as firebase };
