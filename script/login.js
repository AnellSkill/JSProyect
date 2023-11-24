function guardar(){
    db.collection("users").add({
        Username: document.getElementById("username-text").value,
        Email: document.getElementById("email-text").value,
        Password: document.getElementById("password-text").value,
    })
    .then((docRef) => {
        alert("You have log in successfully")
    })
    .catch((error) => {
        alert("Your email or your password have been incorrectly")
    });
}

let userspace = document.getElementById("username.text").value
let emailspace = document.getElementById("email-text").value
let passspace = document.getElementById("password-text").value
