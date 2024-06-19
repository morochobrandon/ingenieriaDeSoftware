// En algún lugar global (fuera de cualquier función)
let clienteSeleccionadoGlobalQueQuiereComprar;

function clienteSeleccionado(cliente) {
    // Asigna el valor del cliente a la variable global
    clienteSeleccionadoGlobalQueQuiereComprar = cliente;
    console.log("antes de que cambie");
    console.log(clienteSeleccionadoGlobalQueQuiereComprar);

    // Guarda el valor del cliente en localStorage
    localStorage.setItem("clienteSeleccionado", JSON.stringify(clienteSeleccionadoGlobalQueQuiereComprar));

    // Cambia la ubicación de la ventana
    window.location.href = "/catalogo";
}
/*
// En la nueva ventana, puedes recuperar el valor del cliente así:
let clienteRecuperado = JSON.parse(localStorage.getItem("clienteSeleccionado"));
console.log(clienteRecuperado);
*/