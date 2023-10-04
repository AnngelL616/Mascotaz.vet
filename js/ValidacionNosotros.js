function mostrarAgradecimiento(event) {
    // Prevenir la recarga de la página
    event.preventDefault();

    // Ocultar el formulario
    var formulario = document.querySelector("form");
    formulario.style.display = "none";

    // Mostrar el mensaje de agradecimiento
    var mensaje = document.getElementById("mensajeAgradecimiento");
    mensaje.style.display = "block";
      // Obtener todas las respuestas seleccionadas
    var respuestas = document.querySelectorAll('input[type="radio"]:checked');

    // Verificar si todas las preguntas tienen respuesta
    if (respuestas.length < 9) { // Ajusta el número según la cantidad de preguntas
        event.preventDefault(); // Evitar el envío del formulario
        alert("Por favor, responda todas las preguntas antes de enviar la encuesta.");
    } else {
        // Mostrar el mensaje de agradecimiento y mantener el formulario visible
        document.getElementById("mensajeAgradecimiento").style.display = "block";
    }
}