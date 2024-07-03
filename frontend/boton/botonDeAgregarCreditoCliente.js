// En el archivo formularioAgregarCliente.html se importa este archivo
const url = "http://localhost:3000/api/v1/loanProducts";

async function agregarEnBaseDeDatos() {
   actualizarDeudaCliente();
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

      window.location.href = "/carrito/compra/cliente";
    } else {
      console.log("No hay productos para guardar en la base de datos.");
    }
  } catch (error) {
    console.error("Error en la función agregarEnBaseDeDatos:", error);
  }

 
}


async function actualizarDeudaCliente() {
  try {
    const idClienteElement = document.getElementById("idCliente");
    const precio = parseInt(document.getElementById("precio").textContent);
    const deuda_acomuladaClienteElement = (document.getElementById("deuda_acomuladaCliente"));


    console.log("El id del cliente es:", idClienteElement.value);
    console.log("La cantidad es:", precio);
    console.log("La deuda del cliente es:", deuda_acomuladaClienteElement.value);

    /*
    if (isNaN(cantidad) || isNaN(deuda_acomuladaClienteElement)) {
      console.error("Los valores no son numéricos.");
      return;
    }
   */
    let deudaMasProducto =
      parseInt(deuda_acomuladaClienteElement.value) + precio;

    console.log("El precio a aumentar es:", deudaMasProducto);

    const clienteModificado = {
      deuda_acomulada: deudaMasProducto,
    };

    console.log("El cliente modificado es:");
    console.log(clienteModificado);

    const res = await fetch(
      `http://localhost:3000/api/v1/clients/${idClienteElement.value}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clienteModificado),
      }
    );

    console.log("Cliente modificado:", clienteModificado);

    if (!res.ok) {
      const errorText = await res.text();
      console.error(
        "Error al actualizar la deuda del cliente:",
        res.status,
        errorText
      );
    }
  } catch (error) {
    console.error("Error en la función actualizarDeudaCliente:", error);
  }
}