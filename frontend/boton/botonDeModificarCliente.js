
let clienteSeleccionadoGlobal;

function clienteSeleccionado(cliente) {
    
    clienteSeleccionadoGlobal = cliente;
    console.log("antes de que cambie");
    console.log(clienteSeleccionadoGlobal);

    
    localStorage.setItem(
      "clienteSeleccionado",
      JSON.stringify(clienteSeleccionadoGlobal)
    );

   
    window.location.href = "/modificar/cliente/especifico";
}
