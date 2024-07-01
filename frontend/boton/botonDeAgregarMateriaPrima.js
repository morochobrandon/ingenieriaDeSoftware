// En el archivo formularioAgregarMateriaPrima.html se importa este archivo
const url = "http://localhost:3000/api/v1/rawMaterials";

// Escucha el evento submit del formulario
function agregarEnBaseDeDatos() {
  document
    .getElementById("form-first")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      // Obtiene los valores de los campos del formulario
      const nombre = e.target.elements.nombre.value;
      const precio_unitario = e.target.elements.precio_unitario.value;
      const precio_total = e.target.elements.precio_total.value;
      const cantidad = e.target.elements.cantidad.value;
      const id_proveedor = e.target.elements.id_proveedor.value;

      // Convierte "cedula" y "deuda_acomulada" a enteros y valida
      const precio_unitarioInt = precio_unitario
        ? parseInt(precio_unitario, 10)
        : null;
      const precio_totalInt = precio_total ? parseInt(precio_total, 10) : null;
      const cantidadInt = cantidad ? parseInt(cantidad, 10) : null;
      const id_proveedorInt = id_proveedor ? parseInt(id_proveedor, 10) : null;

      // Valida que los enteros sean números válidos
      if (
        isNaN(precio_unitarioInt) ||
        isNaN(precio_totalInt) ||
        isNaN(cantidadInt) ||
        isNaN(id_proveedorInt)
      ) {
        console.error("Datos ingresados no son números válidos.");
        return;
      }

      const nuevoProductoMateriaPrima = {
        nombre,
        precio_unitario: precio_unitarioInt,
        precio_total: precio_totalInt,
        cantidad: cantidadInt,
        id_proveedor: id_proveedorInt,
      };

      console.log("Datos a enviar:", nuevoProductoMateriaPrima);

      try {
        // Realiza la solicitud POST al servidor
        const res = await fetch(url, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoProductoMateriaPrima),
        });

        if (res.ok) {
          const resJson = await res.json();
          console.log("materia prima guardado:", resJson);

          // Borra los valores de los campos del formulario
          e.target.elements.nombre.value = "";
          e.target.elements.precio_unitario.value = "";
          e.target.elements.precio_total.value = "";
          e.target.elements.cantidad.value = "";
          e.target.elements.id_proveedor.value = "";

          // Después de borrar los valores de los campos y confirmar que el cliente se ha guardado
          document.getElementById("mensaje-exito").style.display = "block";

          // Oculta el mensaje después de 5 segundos
          setTimeout(function () {
            document.getElementById("mensaje-exito").style.display = "none";
          }, 5000); // 5000 milisegundos = 5 segundos
        } else {
          const errorText = await res.text(); // Obtén el mensaje de error del servidor
          console.error(
            "Error al guardar la materia prima:",
            res.status,
            errorText
          );
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    });
}
