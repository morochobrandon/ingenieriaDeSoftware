const contenedorProveedores = document.getElementById("tabla-container");

/** Crea los proveedores en la tabla con proveedores.js */

function crearFilasEnTabla(proveedores) {

  proveedores.forEach((proveedor) => {
    if (contenedorProveedores) {

      // lógica de tu función
      const nuevoProveedor = document.createElement("tr");
      nuevoProveedor.classList = "fila-tabla";
      nuevoProveedor.innerHTML = `
         
          <td data-titulo="nombre">${proveedor.nombre}</td>
           <td data-titulo="nro_telefono">${proveedor.nro_telefono}</td>
          <td data-titulo="nro_factura">${proveedor.nro_factura}</td>    
          <td>
            <button>Seleccionar</button>
          </td>
      `;

      console.log(nuevoProveedor.innerHTML);
  
      contenedorProveedores.appendChild(nuevoProveedor);
      nuevoProveedor
        .getElementsByTagName("button")[0]
        .addEventListener("click", () => proveedorSeleccionado(proveedor));

    } else {
      console.log("El elemento con ID 'proveedores-container' no se encontró.");
    }
  });
}

let proveedoresObtenidos; // Declara la variable globalmente

function obtenerProveedores() {
  fetch("http://localhost:3000/api/v1/suppliers")
    .then((response) => response.json())
    .then((data) => {
      proveedoresObtenidos = data; // Asigna la respuesta a la variable global
      crearFilasEnTabla(data);
    })
    .catch((error) => console.error("Error:", error));
}

obtenerProveedores();
