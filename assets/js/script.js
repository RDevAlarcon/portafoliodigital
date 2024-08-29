document.addEventListener('DOMContentLoaded', function() {
    asignarEventos();
});

function asignarEventos(){
    let elBotonForm = document.getElementById("btnForm");
    elBotonForm.addEventListener('click', mostrarMensaje);
}

function mostrarMensaje(){
    // Limpiar los campos
    let elNombre = document.getElementById("nombreContacto");
    elNombre.value = "";
    let elEmail = document.getElementById("emailContacto");
    elEmail.value = "";
    let elMensaje = document.getElementById("mensajeContacto");
    elMensaje.value = "";

    alert('Sus datos fueron registrados');
}
