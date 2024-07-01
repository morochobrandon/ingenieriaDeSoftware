
let prestamoClienteSeleccionadoGlobalConsultar;

function productoFiadoSeleccionado(cliente) {
  prestamoClienteSeleccionadoGlobalConsultar = cliente;

  localStorage.setItem(
    "creditoClienteSeleccionado",
    JSON.stringify(prestamoClienteSeleccionadoGlobalConsultar)
  );

  window.location.href = "/consultar/credito/cliente/especifico";
}
