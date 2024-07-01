// En el archivo formularioAgregarCliente.html se importa este archivo
const url = "http://localhost:3000/api/v1/clients";

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
      const deudaAcomulada = e.target.elements.deuda_acomulada.value;

      // Convierte "cedula" y "deuda_acomulada" a enteros y valida
      const cedulaInt = cedula ? parseInt(cedula, 10) : null;
      const deudaAcomuladaInt = deudaAcomulada
        ? parseInt(deudaAcomulada, 10)
        : null;

      // Valida que los enteros sean números válidos
      if (isNaN(cedulaInt) || isNaN(deudaAcomuladaInt)) {
        console.error("Cédula o deuda acumulada no son números válidos.");
        return;
      }

      const nuevoCliente = {
        nombre,
        apellido,
        segundo_nombre: segundoNombre,
        segundo_apellido: segundoApellido,
        cedula: cedulaInt,
        deuda_acomulada: deudaAcomuladaInt,
      };

      console.log("Datos a enviar:", nuevoCliente);

      try {
        // Realiza la solicitud POST al servidor
        const res = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoCliente),
        });

        if (res.ok) {
          const resJson = await res.json();
          console.log("Cliente guardado:", resJson);

          // Vaciar   los valores de los campos del formulario
          e.target.elements.nombre.value = "";
          e.target.elements.apellido.value = "";
          e.target.elements.segundo_nombre.value = "";
          e.target.elements.segundo_apellido.value = "";
          e.target.elements.cedula.value = "";
          e.target.elements.deuda_acomulada.value = "";

          // Después de borrar los valores de los campos y confirmar que el cliente se ha guardado
          document.getElementById("mensaje-exito").style.display = "block";

          // Oculta el mensaje después de 5 segundos
          setTimeout(function () {
            document.getElementById("mensaje-exito").style.display = "none";
          }, 5000); // 5000 milisegundos = 5 segundos
        } else {
          const errorText = await res.text(); // Obtén el mensaje de error del servidor
          console.error("Error al guardar el cliente:", res.status, errorText);
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    });
}