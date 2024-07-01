
let proveedorSeleccionadoGlobal;

function proveedorSeleccionado(proveedor) {
    
    proveedorSeleccionadoGlobal = proveedor;

    localStorage.setItem(
      "proveedorSeleccionado",
      JSON.stringify(proveedorSeleccionadoGlobal)
    );

    window.location.href = "/consultar/proveedor/especifico";
}


