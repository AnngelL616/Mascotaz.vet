<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$bd = "Prueba1";

// Crear conexión
$conexion = mysqli_connect($servidor, $usuario, $password, $bd);

// Verificar la conexión
if (!$conexion) {
    die("Error en la conexión a la base de datos: " . mysqli_connect_error());
} else {
    echo "Conexión exitosa";
    // Aquí puedes realizar otras operaciones con la base de datos
    // por ejemplo, ejecutar consultas, insertar datos, etc.
}
?>