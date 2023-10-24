function calcularCosto() {
    var tipoMascota = document.getElementById("tipoMascota").value;
    var pesoAproximado = parseFloat(document.getElementById("pesoAproximado").value);

    // Definir costos base para el Plan Platino y Plan Dorado
    var costoPlanPlatino = {
        "0-10": 360000,
        "10-20": 420000,
        "20-30": 480000,
        "30-40": 540000,
        "40+": 600000
    };

    var costoPlanDorado = {
        "0-10": 130000,
        "10-20": 150000,
        "20-30": 170000,
        "30-40": 210000,
        "40-50": 260000,
        "50+": 320000
    };

    // Calcular el costo basado en el tipo de mascota y el peso aproximado
    var costoTotal;
    if (tipoMascota === "Perro") {
        var rango = obtenerRangoPeso(pesoAproximado);
        costoTotal = calcularCostoPorRango(costoPlanPlatino, costoPlanDorado, rango);
    } else if (tipoMascota === "Gato") {
        // Implementar costos para gatos si es necesario
        var rango = obtenerRangoPeso(pesoAproximado);
        costoTotal = calcularCostoPorRango(costoPlanPlatino, costoPlanDorado, rango);
    } else if (tipoMascota === "Otro") {
        // Implementar costos para otros tipos de mascotas si es necesario
        var rango = obtenerRangoPeso(pesoAproximado);
        costoTotal = calcularCostoPorRango(costoPlanPlatino, costoPlanDorado, rango);
    } else {
        // Tipo de mascota no válido
        alert("Tipo de mascota no válido. Por favor, elija opciones válidas.");
        return;
    }

    // Mostrar el resultado
    var resultadoCotizacionDiv = document.getElementById("resultadoCotizacion");
    resultadoCotizacionDiv.innerHTML = "Cotización para " + tipoMascota + ": $" + costoTotal.toFixed(2);
}

// Función para obtener el rango de peso
function obtenerRangoPeso(peso) {
    if (peso <= 10) {
        return "0-10";
    } else if (peso <= 20) {
        return "10-20";
    } else if (peso <= 30) {
        return "20-30";
    } else if (peso <= 40) {
        return "30-40";
    } else {
        return "50+";
    }
}

// Función para calcular el costo basado en el rango de peso y los costos de Platino y Dorado
function calcularCostoPorRango(costoPlatino, costoDorado, rango) {
    var costoPlatinoPlan = costoPlatino[rango];
    var costoDoradoPlan = costoDorado[rango];

    // Aquí puedes aplicar tu lógica para elegir entre los planes Platino y Dorado según algún criterio
    
    var costoElegido = Math.min(costoPlatinoPlan, costoDoradoPlan);

    return costoElegido;
}