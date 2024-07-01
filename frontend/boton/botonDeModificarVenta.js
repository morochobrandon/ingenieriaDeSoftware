let ventaSeleccionadaGlobal;

function ventaSeleccionada(venta) {
  ventaSeleccionadaGlobal = venta;

  localStorage.setItem(
    "ventaSeleccionada",
    JSON.stringify(ventaSeleccionadaGlobal)
  );

  window.location.href = "/modificar/venta/especifico";
}
