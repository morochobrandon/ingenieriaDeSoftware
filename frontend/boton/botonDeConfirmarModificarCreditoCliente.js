
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

      actualizarDeudaCliente();


      //actualizarDeudaCliente(precio);
      

      const nuevoDatosCreditoCliente = {
        nombre,
        precio,
        tipo,
        id_cliente,
      };


      //actualizarDeudaCliente(nuevoDatosCreditoCliente.precio);

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

               // Oculta el mensaje después de 5 segundos
            setTimeout(function () {
             window.location.href="/elegir/cliente/modificar/credito"; 
            }, 7000); // 5000 milisegundos = 5 segundos

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



async function actualizarDeudaCliente() {
  try {
     const idClienteElement = document.getElementById("id_cliente");
    const precio = document.getElementById("precio");
    const precioAux = document.getElementById("precioAux");
     const nombreClienteElement = document.getElementById("nombre_cliente");
     const apellidoClienteElement = document.getElementById("apellido");
     const segundo_nombreClienteElement =document.getElementById("segundo_nombre");
     const segundo_apellidoClienteElement =document.getElementById("segundo_apellido");
     const cedulaClienteElement = document.getElementById("cedula");
     const deuda_acomuladaClienteElement =document.getElementById("deuda_acomulada");

    console.log("El id del cliente es:", idClienteElement.value);
    console.log("La precio del producto es:", precio);
    console.log("La deuda del cliente es:", deuda_acomuladaClienteElement.value);

    let difereciaPrecio = parseInt(precio.value) - parseInt(precioAux.value);

    let deudaConDiferenciaDePrecio =parseInt(deuda_acomuladaClienteElement.value) + difereciaPrecio;

    console.log("la nueva deuda es:", deudaConDiferenciaDePrecio);

    const clienteModificado = {
      deuda_acomulada: deudaConDiferenciaDePrecio,
    };

    const clienteModificadoTodosLosDatos = {
      id: idClienteElement.value,
      nombre: nombreClienteElement.value,
      apellido: apellidoClienteElement.value,
      segundo_nombre: segundo_nombreClienteElement.value,
      segundo_apellido: segundo_apellidoClienteElement.value,
      cedula: cedulaClienteElement.value,
      deuda_acomulada: deudaConDiferenciaDePrecio,
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

    console.log("deuda con diferencia de precio:");
    console.log(deudaConDiferenciaDePrecio);

    deuda_acomuladaClienteElement.value = deudaConDiferenciaDePrecio;

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
