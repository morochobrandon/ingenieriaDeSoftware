

function proveedorSeleccionadoEliminado(proveedor) {
  
  fetch(`http://localhost:3000/api/v1/suppliers/${proveedor.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json", 
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("proveedor eliminado correctamente");
        
        window.location.href = "/eliminar/proveedor/";
      } else {
        console.error("Error al eliminar el proveedor");
      }
    })
    .catch((error) => console.error("Error:", error));
}
