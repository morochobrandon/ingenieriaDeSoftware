let proveedorSeleccionadoGlobalConsultar;

function proveedorSeleccionado(proveedor) {
    
    proveedorSeleccionadoGlobalConsultar = proveedor;

    localStorage.setItem(
      "proveedorSeleccionado",
      JSON.stringify(proveedorSeleccionadoGlobalConsultar)
    );

    window.location.href = "/agregar/productoMateriaPrima";
}