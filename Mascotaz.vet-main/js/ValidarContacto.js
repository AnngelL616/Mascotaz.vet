function validarFormulario() {
    var nombre = document.getElementById("Nombre").value;
    var apellido = document.getElementById("Apellido").value;
    var email = document.getElementById("Email").value;
    var celular = document.getElementById("Celular").value;
    var nombreMascota = document.getElementById("NombreMasc").value;
    var raza = document.getElementById("Raza").value;
    var peso = document.getElementById("Peso").value;

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    if (apellido === "") {
        alert("Por favor, ingresa tu apellido.");
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
        alert("Por favor, ingresa un email válido.");
        return false;
    }

    if (isNaN(celular)) {
        alert("Por favor, ingresa un número de celular válido.");
        return false;
    }

    if (nombreMascota === "") {
        alert("Por favor, ingresa el nombre de tu mascota.");
        return false;
    }

    if (raza === "") {
        alert("Por favor, ingresa la raza de tu mascota.");
        return false;
    }

    if (isNaN(peso)) {
        alert("Por favor, ingresa un peso válido.");
        return false;
    }

    return true;
}
