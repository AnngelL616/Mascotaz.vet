function calcularCosto() {
    var tipoMascota = document.getElementById("tipoMascota").value;
    var nombrePlan = document.getElementById("tipoPlan").value;
    var pesoAproximado = parseFloat(document.getElementById("pesoAproximado").value);
    
    // Definir costos base en un objeto
    var costosBase = {
        "Perro": {
            "Plan Dorado Colectivo": 50,
            "Plan Platino Individual": 60,
            "Plan Veterinario Eutanasia": 70,
            "Plan Huerfanos": 80
        },
        "Gato": {
            "Plan Básico": 40,
            "Plan Intermedio": 60,
            "Plan Premium": 80
        },
        "Otro": {
            "Plan Básico": 30,
            "Plan Intermedio": 50,
            "Plan Premium": 70
        }
    };

    // Verificar si el tipo de mascota y el plan existen en el objeto de costos base
    if (costosBase.hasOwnProperty(tipoMascota) && costosBase[tipoMascota].hasOwnProperty(nombrePlan)) {
        var costoBase = costosBase[tipoMascota][nombrePlan];
        var costoTotal = costoBase + (pesoAproximado * 2);

        // Mostrar el resultado de la cotización en un elemento HTML con el id "resultadoCotizacion"
        var resultadoCotizacionDiv = document.getElementById("resultadoCotizacion");
        resultadoCotizacionDiv.innerHTML = "Cotización para " + nombrePlan + " de " + tipoMascota + ":<br>" +
            "Costo base del plan: $" + costoBase + "<br>" +
            "Costo adicional por peso: $" + (pesoAproximado * 2) + "<br>" +
            "Costo total: $" + costoTotal;
    } else {
        // Manejar el caso en que el tipo de mascota o el plan no sean válidos
        alert("Tipo de mascota o plan no válidos. Por favor, elija opciones válidas.");
    }

    // Aquí puedes realizar el segundo cálculo y mostrarlo en otro elemento HTML
    // Por ejemplo, puedes realizar el cálculo y mostrarlo en un elemento con el id "resultadoSegundoCalculo"
    var resultadoSegundoCalculo = "El segundo cálculo es $50"; // Reemplaza esto con el resultado real
    var resultadoSegundoCalculoDiv = document.getElementById("resultadoSegundoCalculo");
    resultadoSegundoCalculoDiv.innerHTML = resultadoSegundoCalculo;
}
