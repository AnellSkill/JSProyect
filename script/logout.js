import { signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"

import { auth } from './Firebase.js'

const logout = document.querySelector('#logout')

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
    console.log("signup out");
  } catch (error) {
    console.log(error)
  }
});