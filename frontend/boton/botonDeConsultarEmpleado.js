
let empleadoSeleccionadoGlobalConsultar;

function empleadoSeleccionado(empleado) {

    empleadoSeleccionadoGlobalConsultar = empleado;
    console.log("antes de que cambie");
    console.log(empleadoSeleccionadoGlobalConsultar);

    localStorage.setItem(
      "empleadoSeleccionado",
      JSON.stringify(empleadoSeleccionadoGlobalConsultar)
    );

    window.location.href = "/consultar/empleado/especifico";
}
