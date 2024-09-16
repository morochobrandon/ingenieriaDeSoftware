const contenedorClientes = document.getElementById("tabla-container-cliente");

/** Crea los clientes en la tabla con clientes.js */

function crearFilasEnTabla(clientes) {
  contador = 0;
  clientes.forEach((cliente) => {
    if (contenedorClientes) {

      contador +=1;
      // lógica de tu función
      const nuevoCliente = document.createElement("tr");
      nuevoCliente.classList = "clientes-tabla";
      nuevoCliente.innerHTML = `
          <td data-titulo="cedula">${cliente.cedula}</td>
          <td data-titulo="nombre">${cliente.nombre}</td>
          <td data-titulo="apellido">${cliente.apellido}</td>    
          <td data-titulo="deuda">${cliente.deuda_acomulada}$</td>
          <td>
            <button>Seleccionar</button>
          </td>
      `;

      console.log(nuevoCliente.innerHTML);
      console.log(contador);
      contenedorClientes.appendChild(nuevoCliente);
      nuevoCliente
        .getElementsByTagName("button")[0]
        .addEventListener("click", () => clienteSeleccionado(cliente));

      /*
       contenedorTarjetas.appendChild(nuevoProducto);
      nuevoProducto
        .getElementsByTagName("button")[0]
        .addEventListener("click", () => agregarAlCarrito(producto));
      */
    } else {
      console.log("El elemento con ID 'clientes-container' no se encontró.");
    }
  });
}
/*
function obtenerClientes() {
  fetch("http://localhost:3000/api/v1/clients")
    .then((response) => response.json())
    .then((data) => {
      crearFilasEnTabla(data); 
    })
    .catch((error) => console.error("Error:", error));
}
*/
let clientes; // Declara la variable globalmente

function obtenerClientes() {
  fetch("http://localhost:3000/api/v1/clients")
    .then((response) => response.json())
    .then((data) => {
      clientes = data; // Asigna la respuesta a la variable global
      crearFilasEnTabla(data); 
    })
    .catch((error) => console.error("Error:", error));
}



obtenerClientes()

