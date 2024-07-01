
let materiaPrimaSeleccionadoGlobal;

function materiaPrimaSeleccionado(materiaPrima) {

    materiaPrimaSeleccionadoGlobal = materiaPrima;
    console.log("antes de que cambie");
    console.log(materiaPrimaSeleccionadoGlobal);

  
    localStorage.setItem(
      "materiaPrimaSeleccionado",
      JSON.stringify(materiaPrimaSeleccionadoGlobal)
    );


    window.location.href = "/modificar/productoMateriaPrima/especifico";
}
