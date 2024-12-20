const contenedorProveedores = document.getElementById("tabla-container");

/** Crea los clientes en la tabla con clientes.js */
function crearFilasEnTabla(proveedores) {
  proveedores.forEach((proveedor) => {
    if (contenedorProveedores) {
      // lógica de tu función
      const nuevoProveedor = document.createElement("tr");
      nuevoProveedor.classList = "fila-tabla";
      nuevoProveedor.innerHTML = `
          <td data-titulo="nombre">${proveedor.nombre}</td>
          <td data-titulo="telefono">${proveedor.nro_telefono}</td>
          <td data-titulo="telefono">${proveedor.nro_factura}</td>
          <td>
              <button>Seleccionar</button>
          </td>
      `;
      contenedorProveedores.appendChild(nuevoProveedor);
      nuevoProveedor
        .getElementsByTagName("button")[0]
        .addEventListener("click", () => proveedorSeleccionado(proveedor));

    } else {
      console.log("El elemento con ID 'clientes-container' no se encontró.");
    }
  });
}

function obtenerProveedores() {
  fetch("http://localhost:3000/api/v1/suppliers")
    .then((response) => response.json())
    .then((data) => {
      crearFilasEnTabla(data); 
    })
    .catch((error) => console.error("Error:", error));
}

obtenerProveedores();

