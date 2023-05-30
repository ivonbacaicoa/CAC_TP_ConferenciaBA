function validarCampoTexto() {
    const resumenButton = document.querySelector("#btncalcular");
    if (!resumenButton.clicked) {
      alert("Haga click en el botón 'Resumen' para totalizar y enviar el formulario.");
      return false; // Detener el envío del formulario
    }
    return true; // Permitir el envío del formulario si se presionó el botón 'Resumen'
    }