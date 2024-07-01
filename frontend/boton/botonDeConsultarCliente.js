
let clienteSeleccionadoGlobalConsultar;

function clienteSeleccionado(cliente) {
    
    clienteSeleccionadoGlobalConsultar = cliente;

    localStorage.setItem(
      "clienteSeleccionado",
      JSON.stringify(clienteSeleccionadoGlobalConsultar)
    );

    window.location.href = "/consultar/cliente/especifico";
}
