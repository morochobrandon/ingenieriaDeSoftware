
let empleadoSeleccionadoGlobal;

function empleadoSeleccionado(empleado) {
  
    empleadoSeleccionadoGlobal = empleado;
    console.log("antes de que cambie");
    console.log(empleadoSeleccionadoGlobal);

    
    localStorage.setItem(
      "empleadoSeleccionado",
      JSON.stringify(empleadoSeleccionadoGlobal)
    );

    
    window.location.href = "/modificar/empleado/especifico";
}
