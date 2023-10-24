function mostrarAgradecimiento(event) {
    // Prevenir la recarga de la página
    
    // Ocultar el formulario
    var formulario = document.querySelector("form");
    formulario.style.display = "none";

    // Obtener todas las respuestas seleccionadas
    var respuestas = document.querySelectorAll('input[type="radio"]:checked');

    // Verificar si todas las preguntas tienen respuesta (ajusta el número según la cantidad de preguntas)
    if (respuestas.length < 3) {
        alert("Por favor, responda todas las preguntas antes de enviar la encuesta.");
    } else {
        // Mostrar el mensaje de agradecimiento
        document.getElementById("mensajeAgradecimiento").style.display = "block";
        alert("¡Gracias por calificarnos!")
    }
}
