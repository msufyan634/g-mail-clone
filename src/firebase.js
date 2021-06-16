  import firebase from "firebase/app";
  import 'firebase/auth'
require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyD86EmI_VYFq5k1-zdr0yGwjEkMJjxDqy8",
  authDomain: "g-mail-2a392.firebaseapp.com",
  projectId: "g-mail-2a392",
  storageBucket: "g-mail-2a392.appspot.com",
  messagingSenderId: "395865197041",
  appId: "1:395865197041:web:0eb818a444c9423b271c50",
  measurementId: "G-FGCVR2RNN0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
   const auth=firebase.auth();
   const provider=new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider}
  // export {};


//   import firebase from "firebase/app";
// require("firebase/firestore");
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCquQ3d2w9aWbQmv525AWRZvvMCsM0pDQs",
//   authDomain: "solidity-audit.firebaseapp.com",
//   projectId: "solidity-audit",
//   storageBucket: "solidity-audit.appspot.com",
//   messagingSenderId: "833455016016",
//   appId: "1:833455016016:web:4ec16f8c4acfed69652955",
//   measurementId: "G-J5VX81H9MT"
// };
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// export default db ;