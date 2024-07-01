

function materiaPrimaSeleccionadoEliminado(materiaPrima) {


  fetch(`http://localhost:3000/api/v1/rawMaterials/${materiaPrima.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json", 
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("materiaPrima eliminado correctamente");
        
        window.location.href = "/eliminar/productoMateriaPrima";
      } else {
        console.error("Error al eliminar el materiaPrima");
      }
    })
    .catch((error) => console.error("Error:", error));
}
