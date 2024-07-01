const contenedorVentas = document.getElementById("tabla-container");

/** Crea las filas en la tabla con ventas */
function crearFilasEnTabla(ventas) {
  ventas.forEach((venta) => {
    if (contenedorVentas) {
      const nuevaFila = document.createElement("tr");
      nuevaFila.classList = "fila-tabla";
      nuevaFila.innerHTML = `
          <td data-titulo="fecha">${venta.createdAt}</td>
          <td data-titulo="nro_reporte">${venta.id}</td>
          <td>
              <button>Ver más</button>
          </td>
      `;
      contenedorVentas.appendChild(nuevaFila);
      nuevaFila
        .getElementsByTagName("button")[0]
        .addEventListener("click", () => ventaSeleccionada(venta));
    } else {
      console.log("El elemento con ID 'tabla-container' no se encontró.");
    }
  });
}

function obtenerVentas() {
  fetch("http://localhost:3000/api/v1/sales")
    .then((response) => response.json())
    .then((data) => {
      crearFilasEnTabla(data);
    })
    .catch((error) => console.error("Error:", error));
}

obtenerVentas();
