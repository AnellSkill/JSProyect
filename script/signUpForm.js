const signUpForm = document.querySelector('#login-form')

//Todo esto due importado
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"

import {showMessage} from './showMessage.js'

import { auth } from './Firebase.js'

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signUpForm['email-text'].value
    const password = signUpForm['password-text'].value

    console.log( email, password)

   try {
    const userCredentials =  await createUserWithEmailAndPassword( auth, email, password)
    console.log(userCredentials)

    showMessage ( 'Welcome' + userCredentials.user.email)

   } catch (error) {
    if(error.code === 'auth/invalid-email'){
        showMessage('Invalid Email', 'email')
    }else if(error.code === 'auth/weak-password'){
        alert('Invalid Password')
    }else if(error.code === 'auth/email-already-in-use'){
    alert('The email already exist')
    }else if(error.code){
    showMessage(error.message,'Error')
    }
   }
})