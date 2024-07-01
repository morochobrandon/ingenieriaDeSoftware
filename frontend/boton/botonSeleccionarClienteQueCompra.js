
let clienteSeleccionadoGlobalQueQuiereComprar;

function clienteSeleccionado(cliente) {
    
    clienteSeleccionadoGlobalQueQuiereComprar = cliente;
    console.log("antes de que cambie");
    console.log(clienteSeleccionadoGlobalQueQuiereComprar);

    
    localStorage.setItem("clienteSeleccionado", JSON.stringify(clienteSeleccionadoGlobalQueQuiereComprar));

  
    window.location.href = "/catalogo";
}
