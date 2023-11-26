const signUpForm = document.querySelector('#signup-form')

signUpForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const username = signUpForm['username-text'].value
    const email = signUpForm['email-text'].value
    const password = signUpForm['password-text'].value

    console.log(username, email, password)
})