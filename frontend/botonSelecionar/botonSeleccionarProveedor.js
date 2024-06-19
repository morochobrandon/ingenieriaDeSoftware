// En algún lugar global (fuera de cualquier función)
let proveedorSeleccionadoGlobalQueQuiereComprar;

function proveedorSeleccionado(proveedor) {
    // Asigna el valor del proveedor a la variable global
    proveedorSeleccionadoGlobalQueQuiereComprar = proveedor;
    console.log("antes de que cambie");
    console.log(proveedorSeleccionadoGlobalQueQuiereComprar);

    // Guarda el valor del proveedor en localStorage
    localStorage.setItem(
      "proveedorSeleccionado",
      JSON.stringify(proveedorSeleccionadoGlobalQueQuiereComprar)
    );

    // Cambia la ubicación de la ventana
    window.location.href = "/manager/consultar/proveedor";
}

/*
// En la nueva ventana, puedes recuperar el valor del proveedor así:
let proveedorRecuperado = JSON.parse(
  localStorage.getItem("proveedorSeleccionado")
);
console.log(proveedorRecuperado);
*/
