<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recibir datos del formulario
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];

    // Configuración de correo
    $to = "hernandezgalvezalejandro@gmail.com";
    $subject = "Nuevo mensaje desde el formulario";
    $message = "Nombre: $nombre\nCorreo: $correo";

    // Enviar correo
    mail($to, $subject, $message);

    // Responder al cliente (React)
    echo json_encode(["success" => true, "message" => "Correo enviado con éxito"]);
} else {
    // Responder si la solicitud no es POST
    echo json_encode(["success" => false, "message" => "Solicitud no válida"]);
}
?>