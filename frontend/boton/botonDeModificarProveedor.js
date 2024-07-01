
let proveedorSeleccionadoGlobal;

function proveedorSeleccionado(proveedor) {
    
    proveedorSeleccionadoGlobal = proveedor;
    console.log("antes de que cambie");
    console.log(proveedorSeleccionadoGlobal);

    
    localStorage.setItem(
      "proveedorSeleccionado",
      JSON.stringify(proveedorSeleccionadoGlobal)
    );

   
    window.location.href = "/modificar/proveedor/especifico";
}
