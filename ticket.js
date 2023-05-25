



const button = document.querySelector("#btncalcular");

const total = document.querySelector("#total"); 
const cantegoria = document.querySelector("#categoria"); 
const cantidad = document.querySelector("#cantidad"); 


function validarCampoTexto() {
    var campoTexto = document.getElementById('miCampoTexto').value;
    
    if (campoTexto.trim() === '') {
      alert('El campo de texto está vacío');
      return false; // La validación falla
    }
    
    // La validación pasa
    return true;
  }


button.onclick = () => { 
    if (cantidad.value > 0) {
    total.value = "Total a pagar: $"+ cantidad.value*200*categoria.value
} else
// console.log("No se puede realizar un producto con una variable negativa")
alert('No es posible comprar una cantidad negativa')
}

