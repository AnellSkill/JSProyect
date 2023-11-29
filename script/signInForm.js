import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./Firebase.js";

const signInForm = document.querySelector('form')

if (signInForm) {
    signInForm.addEventListener('submit', async e => {
        e.preventDefault;

        const email = signInForm['email-text'].value;
        const password = signInForm['password-text'].value;

        try {
            const credentials = await signInWithEmailAndPassword(auth, email, password)
            console.log(credentials)
        } catch (error) {
            console.log(error)
        }
    });
}