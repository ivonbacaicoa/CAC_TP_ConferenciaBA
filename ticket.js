const button = document.querySelector("#btncalcular");
const total = document.querySelector("#total");
const categoria = document.querySelector("#categoria");
const cantidad = document.querySelector("#cantidad");

  button.onclick = () => {
    const cantidadValue = parseInt(cantidad.value);
    if (cantidadValue > 0) {
      total.value = "Total a pagar: $" + cantidadValue * 200 * categoria.value;
      button.clicked = true; // Indicar que se ha presionado el botón 'Resumen'
    } else {
      alert("Ingrese un número entero positivo")
    }
  }

