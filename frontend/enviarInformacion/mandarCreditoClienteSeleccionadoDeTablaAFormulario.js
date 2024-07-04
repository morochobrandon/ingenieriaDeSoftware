const creditoCliente = JSON.parse(
  localStorage.getItem("creditoClienteSeleccionado")
);
console.log("credito cliente:");
console.log(creditoCliente);

// Suponiendo que ya tienes el valor en clienteSeleccionadoGlobal
const idCreditoClienteElement = document.getElementById("id");
const nombreCreditoClienteElement = document.getElementById("nombre");
const precioCreditoClienteElement = document.getElementById("precio");
const precioCreditoAuxClienteElement = document.getElementById("precioAux");
const tipoCreditoClienteElement = document.getElementById("tipo");
const idClienteElement = document.getElementById("id_cliente");


// Usa el atributo 'value' en lugar de 'textContent'
idCreditoClienteElement.value = creditoCliente.id;
nombreCreditoClienteElement.value = creditoCliente.nombre;
precioCreditoClienteElement.value = creditoCliente.precio;
precioCreditoAuxClienteElement.value = creditoCliente.precio;
tipoCreditoClienteElement.value = creditoCliente.tipo;
idClienteElement.value = creditoCliente.id_cliente;

