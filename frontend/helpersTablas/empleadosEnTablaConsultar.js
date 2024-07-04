const contenedorEmpleados = document.getElementById("tabla-container");

/** Crea los empleados en la tabla con empleados.js */

function crearFilasEnTabla(empleados) {

  empleados.forEach((empleado) => {
    if (contenedorEmpleados) {

      // lógica de tu función
      const nuevoEmpleado = document.createElement("tr");
      nuevoEmpleado.classList = "fila-tabla";
      nuevoEmpleado.innerHTML = `
          <td data-titulo="cedula">${empleado.cedula}</td>
          <td data-titulo="nombre">${empleado.nombre}</td>
          <td data-titulo="apellido">${empleado.apellido}</td>
          <td data-titulo="cargo">${empleado.cargo}</td>    
          <td data-titulo="local donde trabaja">${empleado.local_donde_trabaja}</td>
          <td>
            <button>Seleccionar</button>
          </td>
      `;

      console.log(nuevoEmpleado.innerHTML);
      contenedorEmpleados.appendChild(nuevoEmpleado);
      nuevoEmpleado
        .getElementsByTagName("button")[0]
        .addEventListener("click", () => empleadoSeleccionado(empleado));
    } else {
      console.log("El elemento con ID 'empleados-container' no se encontró.");
    }
  });
}

let empleados; // Declara la variable globalmente

function obtenerempleados() {
  fetch("http://localhost:3000/api/v1/workers")
    .then((response) => response.json())
    .then((data) => {
      empleados = data; // Asigna la respuesta a la variable global
      crearFilasEnTabla(data);
    })
    .catch((error) => console.error("Error:", error));
}



obtenerempleados()

