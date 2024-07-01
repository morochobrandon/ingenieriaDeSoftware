// En el archivo formularioModificarProveedor.html se importa este archivo

// Escucha el evento submit del formulario
function agregarEnBaseDeDatos() {
  document
    .getElementById("form-first")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      // Obtiene los valores de los campos del formulario
      const id = e.target.elements.id.value;
      const nombre = e.target.elements.nombre.value;
      const nro_factura = e.target.elements.nro_factura.value;
      const nro_telefono = e.target.elements.nro_telefono.value;

      const nuevoDatosProveedor = {
        nombre,
        nro_factura,
        nro_telefono,
      };

      console.log("Datos a enviar:", nuevoDatosProveedor);

      try {
        // Realiza la solicitud POST al servidor
        const res = await fetch(
          `http://localhost:3000/api/v1/suppliers/${id}`,
          {
            method: "PUT",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoDatosProveedor),
          }
        );

        if (res.ok) {
          const resJson = await res.json();
          console.log("Proveedor guardado:", resJson);

          // Después de borrar los valores de los campos y confirmar que el cliente se ha guardado
          document.getElementById("mensaje-exito").style.display = "block";

          // Oculta el mensaje después de 5 segundos
          setTimeout(function () {
            document.getElementById("mensaje-exito").style.display = "none";
          }, 5000); // 5000 milisegundos = 5 segundos
        } else {
          const errorText = await res.text(); // Obtén el mensaje de error del servidor
          console.error(
            "Error al guardar el proveedor:",
            res.status,
            errorText
          );
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    });
}
