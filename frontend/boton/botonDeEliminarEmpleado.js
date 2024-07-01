

function empleadoSeleccionadoEliminado(empleado) {
 

 
  fetch(`http://localhost:3000/api/v1/workers/${empleado.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json", 
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("empleado eliminado correctamente");
  
        window.location.href = "/eliminar/empleado/";

      } else {
        console.error("Error al eliminar el empleado");
      }
    })
    .catch((error) => console.error("Error:", error));
}
