const clienteRecuperado = JSON.parse(
  localStorage.getItem("clienteSeleccionado")
);
console.log("cliente:");
console.log(clienteRecuperado);

// Suponiendo que ya tienes el valor en clienteSeleccionadoGlobal
const idClienteElement = document.getElementById("id");
const nombreClienteElement = document.getElementById("nombre");
const apellidoClienteElement = document.getElementById("apellido");
const segundo_nombreClienteElement = document.getElementById("segundo_nombre");
const segundo_apellidoClienteElement =
  document.getElementById("segundo_apellido");
const cedulaClienteElement = document.getElementById("cedula");
const deuda_acomuladaClienteElement =
  document.getElementById("deuda_acomulada");

// Usa el atributo 'value' en lugar de 'textContent'
idClienteElement.value = clienteRecuperado.id;
nombreClienteElement.value = clienteRecuperado.nombre;
apellidoClienteElement.value = clienteRecuperado.apellido;
segundo_nombreClienteElement.value = clienteRecuperado.segundo_nombre;
segundo_apellidoClienteElement.value = clienteRecuperado.segundo_apellido;
cedulaClienteElement.value = clienteRecuperado.cedula;
deuda_acomuladaClienteElement.value = clienteRecuperado.deuda_acomulada;
