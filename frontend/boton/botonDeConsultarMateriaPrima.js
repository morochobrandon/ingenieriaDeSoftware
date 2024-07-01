
let materiaPrimaSeleccionadoGlobalConsultar;

function materiaPrimaSeleccionado(materiaPrima) {
  
    materiaPrimaSeleccionadoGlobalConsultar = materiaPrima;

    localStorage.setItem(
      "materiaPrimaSeleccionado",
      JSON.stringify(materiaPrimaSeleccionadoGlobalConsultar)
    );

    window.location.href = "/consultar/productoMateriaPrima/especifico";
}
