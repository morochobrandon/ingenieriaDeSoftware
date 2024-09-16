

function clienteSeleccionadoEliminado(cliente) {
  // Supongamos que cliente.id es el identificador único del cliente que deseas eliminar

  // Realiza una solicitud DELETE al backend
  fetch(`http://localhost:3000/api/v1/clients/${cliente.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json", // Asegúrate de ajustar el tipo de contenido según tu API
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("Cliente eliminado correctamente");
        // Aquí puedes actualizar la tabla o realizar otras acciones necesarias
        window.location.href = "/manager/consultar/cliente";

      } else {
        console.error("Error al eliminar el cliente");
      }
    })
    .catch((error) => console.error("Error:", error));
}
