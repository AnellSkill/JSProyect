import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./Firebase.js";
import { showMessage } from './showMessage.js'

const signInForm = document.querySelector('#login-form')

signInForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signInForm["login-email"].value;
    const password = signInForm["login-password"].value;
  
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCredentials)
  
      // Close the login modal
      const modal = bootstrap.Modal.getInstance(signInForm.closest('#signinModal'));
      modal.hide();
  
      // reset the form
      signInForm.reset();
  
      // show welcome message
      showMessage("Welcome back " + userCredentials.user.email);
    } catch (error) {
      if (error.code){
        showMessage("The password is wrong, the email is wrong or the username is not found", "error")
      }
    }
  });