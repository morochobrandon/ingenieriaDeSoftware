// En el archivo agregarClientes.js
const url = "http://localhost:3000/api/v1/products";

// Escucha el evento submit del formulario
function agregarEnBaseDeDatos() {
  document
    .getElementById("form-first")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      const nombre = e.target.elements.nombre.value;
      const precio = e.target.elements.precio.value;
      const tipo = e.target.elements.tipo.value;
      const fotoProductoVenta =
        document.getElementById("fotoProductoVenta").files[0];

      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("precio", precio);
      formData.append("tipo", tipo);
      formData.append("image", fotoProductoVenta); // Asegúrate de que 'image' sea el nombre del campo

      // Realiza la solicitud POST al servidor
      try {
        const res = await fetch(url, {
          method: "POST",
          mode: "cors",
          body: formData, // Envía el objeto FormData con la imagen
        });

        if (res.ok) {
          const resJson = await res.json();
          console.log("Producto a vender guardado:", resJson);

          // Vacía los valores de los campos del formulario
          e.target.elements.nombre.value = "";
          e.target.elements.precio.value = "";
          e.target.elements.tipo.value = "";
          document.getElementById("fotoProductoVenta").value = ""; // Limpia el campo de carga de imagen

          // Después de borrar los valores de los campos y confirmar que el cliente se ha guardado
          document.getElementById("mensaje-exito").style.display = "block";

          // Oculta el mensaje después de 5 segundos
          setTimeout(function () {
            document.getElementById("mensaje-exito").style.display = "none";
          }, 5000); // 5000 milisegundos = 5 segundos
        } else {
          const errorText = await res.text(); // Obtén el mensaje de error del servidor
          console.error(
            "Error al guardar el producto de venta:",
            res.status,
            errorText
          );
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    });
}
