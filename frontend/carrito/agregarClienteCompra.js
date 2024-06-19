
const clienteRecuperado = JSON.parse(localStorage.getItem("clienteSeleccionado"));
console.log(clienteRecuperado);

// Suponiendo que ya tienes el valor en clienteSeleccionadoGlobalQueQuiereComprar
const nombreClienteElement = document.getElementById("nombreCliente");
const apellidoClienteElement = document.getElementById("apellidoCliente");

nombreClienteElement.textContent = clienteRecuperado.nombre;
apellidoClienteElement.textContent = clienteRecuperado.apellido;

