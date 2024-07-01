let prestamoClienteSeleccionadoGlobalConsultar;

function productoFiadoSeleccionado(cliente) {
  prestamoClienteSeleccionadoGlobalConsultar = cliente;

  console.log("Producto seleccionado:", prestamoClienteSeleccionadoGlobalConsultar);

  localStorage.setItem(
    "creditoClienteSeleccionado",
    JSON.stringify(prestamoClienteSeleccionadoGlobalConsultar)
  );

  window.location.href = "/modificar/credito/cliente/especifico";
}
