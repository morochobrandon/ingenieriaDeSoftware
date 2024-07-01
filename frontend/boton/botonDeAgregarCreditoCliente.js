// En el archivo formularioAgregarCliente.html se importa este archivo
const url = "http://localhost:3000/api/v1/loanProducts";





async function agregarEnBaseDeDatos() {
  try {
    // Obtener los productos en memoria
    const productosEnMemoria = JSON.parse(localStorage.getItem("Productos"));

    if (productosEnMemoria && productosEnMemoria.length > 0) {
      // Obtener el ID del cliente
      const clienteRecuperado = JSON.parse(
        localStorage.getItem("clienteSeleccionado")
      );
      const idCliente = clienteRecuperado.id;

      // Iterar sobre los productos y guardar cada uno según su cantidad
      for (const producto of productosEnMemoria) {
        for (let i = 0; i < producto.cantidad; i++) {
          const nuevoProductoFiado = {
            nombre: producto.nombre,
            precio: producto.precio,
            tipo: producto.tipo,
            id_cliente: idCliente,
          };

          console.log("Datos a enviar:", nuevoProductoFiado);

          // Realiza la solicitud POST al servidor para guardar el producto
          const res = await fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoProductoFiado),
          });

          if (res.ok) {
            const resJson = await res.json();
            console.log("Producto guardado:", resJson);
          } else {
            const errorText = await res.text(); // Obtén el mensaje de error del servidor
            console.error(
              "Error al guardar el producto:",
              res.status,
              errorText
            );
          }
        }
      }

      // Vaciar los productos en memoria después de guardarlos
      localStorage.removeItem("Productos");
/*
      // Mostrar mensaje de éxito
      document.getElementById("mensaje-exito").style.display = "block";

      // Ocultar el mensaje después de 5 segundos
      setTimeout(function () {
        document.getElementById("mensaje-exito").style.display = "none";
      }, 5000); // 5000 milisegundos = 5 segundos
      */
      window.location.href = "/carrito/compra/cliente";
    } else {
      console.log("No hay productos para guardar en la base de datos.");
    }
  } catch (error) {
    console.error("Error en la función agregarEnBaseDeDatos:", error);
  }
}


// Escucha el evento submit del formulario

/*
function agregarEnBaseDeDatos() {
  document
    .getElementById("form-first")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      // Obtener los productos en memoria
      const productosEnMemoria = JSON.parse(localStorage.getItem("Productos"));

      if (productosEnMemoria && productosEnMemoria.length > 0) {

        const idCliente = clienteRecuperado.id;
        // Iterar sobre los productos
        productosEnMemoria.forEach((producto, index) => {
          console.log(`Producto ${index + 1}:`);
          console.log("ID:", producto.id);
          console.log("Nombre:", producto.nombre);
          console.log("Cantidad:", producto.cantidad);
          console.log("Precio:", producto.precio);
          console.log("Imagen:", producto.imagen);
          console.log("Tipo:", producto.tipo);
          console.log("Fecha de creación:", producto.createdAt);
          console.log("Última actualización:", producto.updatedAt);
          console.log("--------------------");
        });
      } else {
        console.log("No se encontraron datos en memoria.");
      }

      // Verificar si hay productos en memoria
      if (productosEnMemoria && productosEnMemoria.length > 0) {
        // Iterar sobre los productos y guardar cada uno según su cantidad
        for (const producto of productosEnMemoria) {
          for (let i = 0; i < producto.cantidad; i++) {
            const nuevoProductoFiado = {
              nombre: producto.nombre,
              precio: producto.precio,
              tipo: producto.tipo,
              id_cliente: idCliente,
            };

            console.log("Datos a enviar:", nuevoProductoFiado);

            try {
              // Realiza la solicitud POST al servidor para guardar el producto
              const res = await fetch(url, {
                method: "POST",
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoProductoFiado),
              });

              if (res.ok) {
                const resJson = await res.json();
                console.log("Producto guardado:", resJson);
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
          }
        }

        // Vaciar los productos en memoria después de guardarlos
        localStorage.removeItem("Productos");

        // Mostrar mensaje de éxito
        document.getElementById("mensaje-exito").style.display = "block";

        // Ocultar el mensaje después de 5 segundos
        setTimeout(function () {
          document.getElementById("mensaje-exito").style.display = "none";
        }, 5000); // 5000 milisegundos = 5 segundos
      } else {
        console.log("No hay productos para guardar en la base de datos.");
      }
    });
}
    */
