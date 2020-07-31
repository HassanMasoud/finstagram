import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCLprxiQermBv4EO61ePjcRBqwdTNaiAkA",
  authDomain: "finstagram-dfb55.firebaseapp.com",
  databaseURL: "https://finstagram-dfb55.firebaseio.com",
  projectId: "finstagram-dfb55",
  storageBucket: "finstagram-dfb55.appspot.com",
  messagingSenderId: "667054206780",
  appId: "1:667054206780:web:1cbec9f6898623fe8c3839",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
