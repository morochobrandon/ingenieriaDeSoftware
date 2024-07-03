// En el archivo agregarClientes.js
const url = "http://localhost:3000/api/v1/clients";

// Escucha el evento submit del formulario
function agregarEnBaseDeDatos() {
  document
    .getElementById("form-first")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      // Obtiene los valores de los campos del formulario
      const id = e.target.elements.id.value;
      const nombre = e.target.elements.nombre.value;
      const segundoNombre = e.target.elements.segundo_nombre.value;
      const segundoApellido = e.target.elements.segundo_apellido.value;
      const cedula = e.target.elements.cedula.value;
      const deudaAcomulada = e.target.elements.deuda_acomulada.value;
      const cedulaInt = cedula ? parseInt(cedula, 10) : null;
      const deudaAcomuladaInt = deudaAcomulada
      const nuevoDatosCliente = {
        nombre,
        segundo_nombre: segundoNombre,
        segundo_apellido: segundoApellido,
        cedula: cedulaInt,
        deuda_acomulada: deudaAcomuladaInt,
      };
      
      console.log("Datos a enviar:", nuevoDatosCliente);
      try {
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            
            const cedulas = data.map((data) => data.cedula);
            const cedulasFiltradas = cedulas.filter((cedula) => cedula == cedulaInt)
           

            if (cedulasFiltradas.length > 0) {
                console.log("Ya existe un Proveedor con este numero de factura");
                document.getElementById("mensaje-error").style.display = "block";
          
                // Oculta el mensaje después de 5 segundos
                setTimeout(function () {
                  document.getElementById("mensaje-error").style.display = "none";
                }, 5000); // 5000 milisegundos = 5 segundos
                
            } else {
                console.log("No se encontró un proveedor con este numero de factura");
                try {
                  // Realiza la solicitud POST al servidor
                  const res = await fetch(
                    `http://localhost:3000/api/v1/clients/${id}`,
                    {
                      method: "PUT",
                      mode: "cors",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(nuevoDatosCliente),
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
            }
        } else {
            console.error("Error al obtener datos:", response.status);
        }
    } catch (error) {
        console.error("Error en la solicitud GET:", error);
    }
      
    });
}