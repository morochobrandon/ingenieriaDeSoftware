// En el archivo agregarClientes.js
const url = "http://localhost:3000/api/v1/workers";

// Escucha el evento submit del formulario
function agregarEnBaseDeDatos() {
  document
    .getElementById("form-first")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      // Obtiene los valores de los campos del formulario
      const nombre = e.target.elements.nombre.value;
      const apellido = e.target.elements.apellido.value;
      const segundoNombre = e.target.elements.segundo_nombre.value;
      const segundoApellido = e.target.elements.segundo_apellido.value;
      const cedula = e.target.elements.cedula.value;
      const cargo = e.target.elements.cargo.value;
      const local_donde_trabaja = e.target.elements.local_donde_trabaja.value;


      // Convierte "cedula" a enteros y valida
      const cedulaInt = cedula ? parseInt(cedula, 10) : null;

      // Valida que los enteros sean números válidos
      if (isNaN(cedulaInt)) {
        console.error("datos ingresados no son números válidos.");
        return;
      }

      const nuevoEmpleado = {
        nombre,
        apellido,
        segundo_nombre: segundoNombre,
        segundo_apellido: segundoApellido,
        cedula: cedulaInt,
        cargo,
        local_donde_trabaja,
      };

      console.log("Datos a enviar:", nuevoEmpleado);

      try {
        // Realiza la solicitud POST al servidor
        const res = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoEmpleado),
        });

        if (res.ok) {
          const resJson = await res.json();
          console.log("Empleado guardado:", resJson);
        } else {
          const errorText = await res.text(); // Obtén el mensaje de error del servidor
          console.error(
            "Error al guardar el empleado:",
            res.status,
            errorText
          );
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    });
}