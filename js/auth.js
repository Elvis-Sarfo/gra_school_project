import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
onAuthStateChanged(auth, (_user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    user = _user;

  } else {
    // User is signed out
    localStorage.removeItem('authUser')
  }
});

var user = localStorage.getItem('authUser');
console.log(user);
if (user) {
  // User is signed in.
} else {
  // No user is signed in.
  window.location = '/'
}
console.log(user)