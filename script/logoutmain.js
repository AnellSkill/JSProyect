import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"

import { auth } from './Firebase.js'

import './logout.js'
 
import './loginCheck.js'


onAuthStateChanged(auth, async (user) =>  {



    if (user){

    }else{

    }
})
