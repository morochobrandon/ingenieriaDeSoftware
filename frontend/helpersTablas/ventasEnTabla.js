const contenedorVentas = document.getElementById("tabla-container");

/** Crea las filas en la tabla con ventas */
function crearFilasEnTabla(ventas) {
  ventas.forEach((venta) => {
    const timestamp = Date.parse(venta.createdAt); // Convierte la cadena a un timestamp
    const fecha = new Date(timestamp);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1; // Sumamos 1 porque los meses en JavaScript son base 0
    const anio = fecha.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${anio}`;
    if (contenedorVentas) {
      const nuevaFila = document.createElement("tr");
      nuevaFila.classList = "fila-tabla";
      nuevaFila.innerHTML = `
          <td data-titulo="fecha">${fechaFormateada}</td>
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
