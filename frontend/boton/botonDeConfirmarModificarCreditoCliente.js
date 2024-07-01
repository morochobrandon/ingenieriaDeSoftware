
// Escucha el evento submit del formulario
function agregarEnBaseDeDatos() {
  document
    .getElementById("form-first")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      // Obtiene los valores de los campos del formulario
      const id = e.target.elements.id.value;
      const nombre = e.target.elements.nombre.value;
      const precio = e.target.elements.precio.value;
      const tipo = e.target.elements.tipo.value;
      const id_cliente = e.target.elements.id_cliente.value;

      const nuevoDatosCreditoCliente = {
        nombre,
        precio,
        tipo,
        id_cliente,
      };

      console.log("Datos a enviar:", nuevoDatosCreditoCliente);
      console.log("Id del producto a modificar:",id);

      try {
        // Realiza la solicitud POST al servidor
        const res = await fetch(
          `http://localhost:3000/api/v1/loanProducts/${id}`,
          {
            method: "PUT",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoDatosCreditoCliente),
          }
        );

        if (res.ok) {
          const resJson = await res.json();
          console.log("producto guardado:", resJson);

          // Después de borrar los valores de los campos y confirmar que el cliente se ha guardado
          document.getElementById("mensaje-exito").style.display = "block";

          // Oculta el mensaje después de 5 segundos
          setTimeout(function () {
            document.getElementById("mensaje-exito").style.display = "none";
          }, 5000); // 5000 milisegundos = 5 segundos
        } else {
          const errorText = await res.text(); // Obtén el mensaje de error del servidor
          console.error(
            "Error al guardar el producto:",
            res.status,
            errorText
          );
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    });
}
