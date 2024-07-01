const contenedorClientes = document.getElementById("tabla-container");

/** Crea los clientes en la tabla con clientes.js */
function crearFilasEnTabla(clientes) {
  clientes.forEach((cliente) => {
    if (contenedorClientes) {
      // lógica de tu función
      const nuevoCliente = document.createElement("tr");
      nuevoCliente.classList = "fila-tabla";
      nuevoCliente.innerHTML = `
          <td data-titulo="nombre">${cliente.nombre}</td>
          <td data-titulo="apellido">${cliente.apellido}</td>
          <td data-titulo="cedula">${cliente.cedula}</td>
          <td data-titulo="deuda">${cliente.deuda_acomulada}$</td>
          <td>
           <button>Seleccionar</button>
          </td>
      `;

      console.log(nuevoCliente.innerHTML);
      contenedorClientes.appendChild(nuevoCliente);
      nuevoCliente
        .getElementsByTagName("button")[0]
        .addEventListener("click", () => clienteSeleccionadoEliminado(cliente));

    } else {
      console.log("El elemento con ID 'clientes-container' no se encontró.");
    }
  });
}

function obtenerClientes() {
  fetch("http://localhost:3000/api/v1/clients")
    .then((response) => response.json())
    .then((data) => {
      crearFilasEnTabla(data); 
    })
    .catch((error) => console.error("Error:", error));
}

obtenerClientes()

