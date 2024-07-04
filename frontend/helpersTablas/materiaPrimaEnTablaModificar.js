const contenedorMateriaPrima = document.getElementById("tabla-container");

/** Crea los clientes en la tabla con clientes.js */
function crearFilasEnTabla(materiasPrimas) {
  materiasPrimas.forEach((materiaPrima) => {
    if (contenedorMateriaPrima) {
      // lógica de tu función
      const nuevaMateriaPrima = document.createElement("tr");
      nuevaMateriaPrima.classList = "fila-tabla";
      nuevaMateriaPrima.innerHTML = `
          <td data-titulo="nombre">${materiaPrima.nombre}</td>
          <td data-titulo="precio Unico">${materiaPrima.precio_unitario}$</td>
          <td data-titulo="precio total">${materiaPrima.precio_total}$</td>
          <td data-titulo="cantidad">${materiaPrima.cantidad}</td>
          <td data-titulo="id">${materiaPrima.id_proveedor}</td>
          <td>
             <button>Seleccionar</button>
          </td>
      `;

      console.log(nuevaMateriaPrima.innerHTML);
      contenedorMateriaPrima.appendChild(nuevaMateriaPrima);
       nuevaMateriaPrima
         .getElementsByTagName("button")[0]
         .addEventListener("click", () =>
           materiaPrimaSeleccionado(materiaPrima)
         );

    } else {
      console.log("El elemento con ID 'clientes-container' no se encontró.");
    }
  });
}

function obtenerMateriaPrima() {
  fetch("http://localhost:3000/api/v1/rawMaterials")
    .then((response) => response.json())
    .then((data) => {
      crearFilasEnTabla(data);
    })
    .catch((error) => console.error("Error:", error));
}

obtenerMateriaPrima();

