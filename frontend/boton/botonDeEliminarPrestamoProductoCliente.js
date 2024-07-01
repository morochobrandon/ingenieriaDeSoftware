

function productoFiadoSeleccionadoEliminado(productoPrestamo) {

  fetch(`http://localhost:3000/api/v1/loanProducts/${productoPrestamo.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("producto fiado eliminado correctamente");

        window.location.href = "/eliminar/credito/cliente";
      } else {
        console.error("Error al eliminar el producto fiado");
      }
    })
    .catch((error) => console.error("Error:", error));
}
