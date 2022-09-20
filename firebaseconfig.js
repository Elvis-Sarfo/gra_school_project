
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firese JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAPw3zIsWwYmVCH6OpNPeJg_e9fnmk9kW4",
    authDomain: "gra-school.firebaseapp.com",
    projectId: "gra-school",
    storageBucket: "gra-school.appspot.com",
    messagingSenderId: "693272566435",
    appId: "1:693272566435:web:6472e527473a570effbd16",
    measurementId: "G-TQ8Y4PYQSX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
