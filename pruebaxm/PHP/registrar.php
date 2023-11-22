<?php
include ("conec.php");

if (isset($_POST['registrar'])) {
    // Recoger los datos del formulario
   if(
    strlen($_POST["Nombre"])>=1 &&
    strlen($_POST["Apellido"])>=1 &&
    strlen($_POST["Email"])>=1 &&
    strlen($_POST["Celular"])>=1 &&
    strlen($_POST["NombreMasc"])>=1 &&
    strlen( $_POST["Raza"])>=1 &&
    strlen($_POST["Peso"])>=1 &&
    strlen($_POST["Mensaje"])>=1 
    ){
        $Nombre = trim($_POST["Nombre"]);
        $Apellido=trim($_POST["Apellido"]);
        $email = trim($_POST["Email"]);
        $Telefono= trim($_POST["Celular"]);
        $NombreMasc = trim($_POST["NombreMasc"]);
        $Raza = trim($_POST["Raza"]);
        $Peso = trim($_POST["Peso"]);
        $Mensaje =trim($_POST["Mensaje"]);
        $consulta = "INSERT INTO mascota(Nombre) VALUES ('$NombreMasc')";
        $resultado = mysqli_query($conexion, $consulta);
        if($resultado){

            ?>
            <h3 class="sucess" >Registro completado</h3>
            <?php
        }else{
            ?>
            <h3 class="error"> Ocurrio un error</h3>
            <?php
        }
    } else{
        ?>
        <h3 class="error"> llenar todos los campos</h3>
        <?php
    }
}

?>
