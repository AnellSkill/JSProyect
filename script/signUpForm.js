import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

import { auth } from './Firebase.js';
// Encuentra el formulario usando la etiqueta del formulario
const signUpForm = document.querySelector('form');

if (signUpForm) {
    signUpForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = signUpForm['email-text'].value;
        const password = signUpForm['password-text'].value;

        console.log(email, password);
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredentials);

            showMessage('Welcome' + ' ' + userCredentials.user.email);
        } catch (error) {
            if (error.code === 'auth/invalid-email') {
                showMessage('Invalid Email', 'Error');
            } else if (error.code === 'auth/weak-password') {
                showMessage('Invalid Password', 'Error');
            } else if (error.code === 'auth/email-already-in-use') {
                showMessage('The email already exists', 'Error');
            } else if (error.code) {
                showMessage(error.message, 'Error');
            }
        }
    });
}
