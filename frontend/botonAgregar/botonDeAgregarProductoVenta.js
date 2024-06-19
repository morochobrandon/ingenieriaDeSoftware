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
