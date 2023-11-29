import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"

import { auth } from './Firebase.js'

import './logout.js'

import './signInForm.js'

import './signUpForm.js'

import { loginCheck } from './loginCheck.js'


onAuthStateChanged(auth, async (user) =>  {
    if (user){
        loginCheck(user)
    }else{
        loginCheck(user)
    }
})
