function validarFormulario() {
    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', function (event) {
        let hayErrores = false;

        // Validación del campo Nombre
        const nombre = document.getElementById('Nombre');
        if (!nombre.checkValidity()) {
            alert('Por favor, ingrese un nombre válido.');
            hayErrores = true;
        }

        // Validación del campo Apellido
        const apellido = document.getElementById('Apellido');
        if (!apellido.checkValidity()) {
            alert('Por favor, ingrese un apellido válido.');
            hayErrores = true;
        }

        // Validación del campo Email
        const email = document.querySelector('input[type="email"]');
        if (!email.checkValidity()) {
            alert('Por favor, ingrese una dirección de correo electrónico válida.');
            hayErrores = true;
        }

        // Validación del campo Celular
        const celular = document.getElementById('nombre');
        if (!celular.checkValidity()) {
            alert('Por favor, ingrese un número de celular válido.');
            hayErrores = true;
        }

        // Validación del campo Nombre de la Mascota
        const nombreMascota = document.getElementById('NombreMasc');
        if (!nombreMascota.checkValidity()) {
            alert('Por favor, ingrese un nombre de mascota válido.');
            hayErrores = true;
        }

        // Validación del campo Raza
        const raza = document.getElementById('Raza');
        if (!raza.checkValidity()) {
            alert('Por favor, ingrese una raza válida.');
            hayErrores = true;
        }

        // Validación del campo Peso
        const peso = document.getElementById('Peso');
        if (!peso.checkValidity()) {
            alert('Por favor, ingrese un peso válido.');
            hayErrores = true;
        }

        // Validación de al menos un plan seleccionado
        const planes = document.querySelectorAll('input[type="checkbox"]');
        let alMenosUnPlanSeleccionado = false;
        planes.forEach(function (plan) {
            if (plan.checked) {
                alMenosUnPlanSeleccionado = true;
            }
        });
        if (!alMenosUnPlanSeleccionado) {
            alert('Por favor, seleccione al menos un plan.');
            hayErrores = true;
        }

        // Validación del campo Mensaje/Asunto/Solicitud
        const mensaje = document.querySelector('textarea');
        if (mensaje.value.trim() === '') {
            alert('Por favor, ingrese un mensaje.');
            hayErrores = true;
        }

        if (hayErrores) {
            event.preventDefault();
        }
    });
}