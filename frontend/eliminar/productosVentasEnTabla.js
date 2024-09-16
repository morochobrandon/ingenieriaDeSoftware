const contenedorProductosVentas = document.getElementById("tabla-container");

/** Crea los clientes en la tabla con clientes.js */
function crearFilasEnTabla(productos) {
  productos.forEach((producto) => {
    if (contenedorClientes) {
      // lógica de tu función
      const nuevoProducto = document.createElement("tr");
      nuevoProducto.classList = "tarjeta-producto";
      nuevoProducto.innerHTML = `
          <td data-titulo="nombre">${producto.nombre}</td>
          <td data-titulo="apellido">${producto.precio}</td>
          <td data-titulo="cedula">${producto.tipo}</td>
          <td>
            <a href="#">eliminar</a>
          </td>
      `;
      contenedorProductosVentas.appendChild(nuevoProducto);
    } else {
      console.log("El elemento con ID 'clientes-container' no se encontró.");
    }
  });
}

function obtenerProductosVentas() {
  fetch("http://localhost:3000/api/v1/products")
    .then((response) => response.json())
    .then((data) => {
      crearFilasEnTabla(data);
    })
    .catch((error) => console.error("Error:", error));
}

obtenerProductosVentas();
