

function productoFiadoSeleccionadoEliminado(productoPrestamo) {

  actualizarDeudaCliente(productoPrestamo);

  fetch(`http://localhost:3000/api/v1/loanProducts/${productoPrestamo.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log("producto fiado eliminado correctamente");

        window.location.href = "/eliminar/credito/cliente";
      } else {
        console.error("Error al eliminar el producto fiado");
      }
    })
    .catch((error) => console.error("Error:", error));
}



async function actualizarDeudaCliente(productoPrestamo) {
  try {
    const idClienteElement = document.getElementById("id");
    const precio = productoPrestamo.precio;
    const nombreClienteElement = document.getElementById("nombre");
    const apellidoClienteElement = document.getElementById("apellido");
    const segundo_nombreClienteElement = document.getElementById("segundo_nombre");
    const segundo_apellidoClienteElement = document.getElementById("segundo_apellido");
    const cedulaClienteElement = document.getElementById("cedula");
    const deuda_acomuladaClienteElement = document.getElementById(
      "deuda_acomulada"
    );
    

    console.log("El id del cliente es:", idClienteElement.value);
    console.log("La precio del producto es:", precio);
    console.log(
      "La deuda del cliente es:",
      deuda_acomuladaClienteElement.value
    );

    let deudaMenosProducto =
      parseInt(deuda_acomuladaClienteElement.value) - precio;

    console.log("El precio disminuyo a es:", deudaMenosProducto);

    const clienteModificado = {
      deuda_acomulada: deudaMenosProducto,
    };

    const clienteModificadoTodosLosDatos = {
      id: idClienteElement.value,
      nombre: nombreClienteElement.value,
      apellido: apellidoClienteElement.value,
      segundo_nombre: segundo_nombreClienteElement.value,
      segundo_apellido: segundo_apellidoClienteElement.value,
      cedula: cedulaClienteElement.value,
      deuda_acomulada: deudaMenosProducto,
    };

    console.log("El cliente modificado con todos los datos es:");
    console.log(clienteModificadoTodosLosDatos);


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

     console.log("deuda menos producto es es:");
     console.log(deudaMenosProducto);

     deuda_acomuladaClienteElement.value = deudaMenosProducto ;

     console.log("deuda_acomuladaClienteElement.value es es:");
      console.log(deuda_acomuladaClienteElement.value);

      localStorage.setItem(
        "clienteSeleccionado",
        JSON.stringify(clienteModificadoTodosLosDatos)
      );



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
