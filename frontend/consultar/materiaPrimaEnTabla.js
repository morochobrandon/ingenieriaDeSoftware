const contenedor = document.getElementById("tabla-container");

/** Crea los clientes en la tabla con clientes.js */
function crearFilasEnTabla(materiasPrimas) {
  contador = 0;
  materiasPrimas.forEach((materiaPrima) => {
    if (contenedor) {
      contador += 1;
      // lógica de tu función
      console.log("si entro a la codicion para imprimir");
      const nuevaMateriaPrima = document.createElement("tr");
      nuevaMateriaPrima.classList = "producto-tabla";
      nuevaMateriaPrima.innerHTML = `
          <td data-titulo="nombre">${materiaPrima.nombre}</td>
          <td data-titulo="precio Unico">${materiaPrima.precio_unitario}</td>
          <td data-titulo="precio total">${materiaPrima.precio_total}</td>
          <td data-titulo="cantidad">${materiaPrima.cantidad}$</td>
          <td data-titulo="id">${materiaPrima.id_proveedor}</td>
          <td>
              <button data-id="${contador}" >Seleccionar</button>
          </td>
      `;

      console.log(nuevaMateriaPrima.innerHTML);
      console.log(contador);
      contenedor.appendChild(nuevaMateriaPrima);
      nuevaMateriaPrima
        .getElementsByTagName("button")[0]
        .addEventListener("click", () =>
          materiaPrimaSeleccionado(materiaPrima)
        );
    } else {
      console.log(
        "El elemento con ID 'producto materia prima-container' no se encontró."
      );
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

