function guardar() {
    // Obtén los valores de los campos de usuario, correo y contraseña
    var username = document.getElementById("username-text").value;
    var email = document.getElementById("email-text").value;
    var password = document.getElementById("password-text").value;

    // Verifica si alguno de los campos está vacío
    if (username === '' || email === '' || password === '') {
        // Muestra un mensaje de error al usuario
        alert("Please complete all the fields before proceeding.");
    } else {
        // Si todos los campos están llenos, procede con la lógica para guardar en la base de datos

        // Guardar datos en Firestore
        db.collection("users").add({
            Username: username,
            Email: email,
            Password: password,
        })
        .then((docRef) => {
            alert("¡You have access succesfully!");
        })
        .catch((error) => {
            console.error("Error al guardar en Firestore: ", error);
            alert("Hubo un error al intentar guardar los datos. Por favor, inténtalo de nuevo.");
        });
    }
}