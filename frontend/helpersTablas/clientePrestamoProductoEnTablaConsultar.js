const contenedorProductosFiados = document.getElementById("tabla-container");

/** Crea los productosFiados en la tabla con productosFiados.js */
function crearFilasEnTabla(productosFiados) {
  productosFiados.forEach((productoFiado) => {
    if (contenedorProductosFiados) {
      // lógica de tu función
      const nuevoProductoFiado = document.createElement("tr");
      nuevoProductoFiado.classList = "fila-tabla";
      nuevoProductoFiado.innerHTML = `
          <td data-titulo="nombre">${productoFiado.nombre}</td>
          <td data-titulo="precio">${productoFiado.precio}</td>
          <td data-titulo="tipo">${productoFiado.tipo}</td>
          <td data-titulo="monto">${productoFiado.id_cliente}$</td>
          <td>
            <button>Seleccionar</button>
          </td>
      `;    

      console.log(nuevoProductoFiado.innerHTML);
      contenedorProductosFiados.appendChild(nuevoProductoFiado);
      nuevoProductoFiado
        .getElementsByTagName("button")[0]
        .addEventListener("click", () =>
          productoFiadoSeleccionado(productoFiado)
        );
    } else {
      console.log(
        "El elemento con ID 'productosFiados-container' no se encontró."
      );
    }
  });
}

function obtenerProductosFiados() {
  fetch("http://localhost:3000/api/v1/loanProducts")
    .then((response) => response.json())
    .then((data) => {
      crearFilasEnTabla(data);
    })
    .catch((error) => console.error("Error:", error));
}

obtenerProductosFiados();
