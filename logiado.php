<?php
$sUsuario = $_POST["usuario"];
$sPass =  $_POST["pass"];
$sRespuesta = "";

if($sUsuario == "administrador" && $sPass == "12345"){
  $sRespuesta = "Acceso";
}else {
$sRespuesta = "Incorrecto";
}

echo json_encode($sRespuesta);
 ?>
