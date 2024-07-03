const clienteRecuperado = JSON.parse(
    localStorage.getItem("clienteSeleccionado")
  );
  console.log(clienteRecuperado);
  
  // Suponiendo que ya tienes el valor en clienteSeleccionadoGlobalQueQuiereComprar
  const nombreClienteElement = document.getElementById("nombreCliente");
  const apellidoClienteElement = document.getElementById("apellidoCliente");
  const idClienteElement = document.getElementById("idCliente");
  const deuda_acomuladaClienteElement = document.getElementById(
    "deuda_acomuladaCliente"
  );
  
  nombreClienteElement.textContent = clienteRecuperado.nombre;
  apellidoClienteElement.textContent = clienteRecuperado.apellido;
  idClienteElement.value = clienteRecuperado.id;
  deuda_acomuladaClienteElement.value = clienteRecuperado.deuda_acomulada;