function mostrarGuardado() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellidos").value;
    var ciudad = document.getElementById("txtCiudad").value;
    var celular = document.getElementById("txtCelular").value;
    alert("Estudiante " + nombre + " " + apellido + " usted vive en " + ciudad + " y su teléfono de contacto es " + celular + ". sus datos han sido registrados en nuestro sistema");
}