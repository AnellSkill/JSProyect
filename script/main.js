import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"
import { auth } from './Firebase.js'
import { loginCheck } from "./loginCheck.js";

import './signUpForm.js'
import './signInForm.js'
import './logout.js'


onAuthStateChanged(auth, async (user) => {
  loginCheck(user);
})