

function clienteSeleccionadoEliminado(cliente) {

  fetch(`http://localhost:3000/api/v1/clients/${cliente.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json", 
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("Cliente eliminado correctamente");

        window.location.href = "/eliminar/cliente/";

      } else {
        console.error("Error al eliminar el cliente");
      }
    })
    .catch((error) => console.error("Error:", error));
}
