const contenedorProductosFiados = document.getElementById("tabla-container");

/** Crea los productosFiados en la tabla con productosFiados.js */
function crearFilasEnTabla(productosFiados) {
  const idCliente = document.getElementById("id");
  const productosFiadosFiltro = productosFiados.filter((productoFiado) => (productoFiado.id_cliente == parseInt(idCliente.value)));
  productosFiadosFiltro.forEach((productoFiado) => {
    if (contenedorProductosFiados) {
      // lógica de tu función
      const nuevoProductoFiado = document.createElement("tr");
      nuevoProductoFiado.classList = "fila-tabla";
      nuevoProductoFiado.innerHTML = `
          <td data-titulo="nombre">${productoFiado.nombre}</td>
          <td data-titulo="apellido">${productoFiado.precio}</td>
          <td data-titulo="cedula">${productoFiado.tipo}</td>
          
          <td>
            <button>Seleccionar</button>
          </td>
      `;

      console.log(nuevoProductoFiado.innerHTML);
      contenedorProductosFiados.appendChild(nuevoProductoFiado);
            nuevoProductoFiado
              .getElementsByTagName("button")[0]
              .addEventListener("click", () =>
                productoFiadoSeleccionadoEliminado(productoFiado)
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
