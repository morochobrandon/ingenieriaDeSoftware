// En el archivo agregarClientes.js
const url = "http://localhost:3000/api/v1/suppliers";

// Escucha el evento submit del formulario
function agregarEnBaseDeDatos() {
  document
    .getElementById("form-first")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      // Obtiene los valores de los campos del formulario
      const nombre = e.target.elements.nombre.value;
      const nro_telefono = e.target.elements.nro_telefono.value;
      const nro_factura = e.target.elements.nro_factura.value;

      const nuevoProveedor = {
        nombre,
        nro_telefono,
        nro_factura,
      };

      console.log("Datos a enviar:", nuevoProveedor);

      try {
        // Realiza la solicitud POST al servidor
        const res = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoProveedor),
        });

        if (res.ok) {
          const resJson = await res.json();
          console.log("Proveedor guardado:", resJson);
        } else {
          const errorText = await res.text(); // Obtén el mensaje de error del servidor
          console.error("Error al guardar el proveedor:", res.status, errorText);
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    });
}