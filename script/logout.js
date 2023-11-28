import { signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js"

import { auth } from './Firebase.js'

const logout = document.querySelector('.logged-out')

logout.addEventListener('click', async () => {
  await  signOut(auth)
  console.log('User signed Out')
})
