
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firese JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    // Your web app's Firebase configuration
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
  var db = getFirestore(app);
  var auth = getAuth(app);

  export {app, db, auth};
