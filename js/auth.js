import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
var user = auth.currentUser;
console.log(user);
if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}
{/* <await onAuthStateChanged(auth, (_user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    user = _user;

  } else {
    // User is signed out
    window.location = '/'
  }
});
console.log(user);> */}