
let clienteSeleccionadoGlobalConsultar;

function clienteSeleccionado(cliente) {
    
    clienteSeleccionadoGlobalConsultar = cliente;

    localStorage.setItem(
      "clienteSeleccionado",
      JSON.stringify(clienteSeleccionadoGlobalConsultar)
    );

    window.location.href = "/eliminar/credito/cliente";
}
