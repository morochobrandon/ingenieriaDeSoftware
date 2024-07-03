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
      const nro_facturaInt = nro_factura ? parseInt(nro_factura, 10) : null;

      const nuevoProveedor = {
        nombre,
        nro_telefono,
        nro_factura: nro_facturaInt,
      };

      console.log("Datos a enviar:", nuevoProveedor);
      try {
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            
            const facturas = data.map((data) => data.nro_factura);
            const facturasFiltradas = facturas.filter((nro_factura) => nro_factura == nro_facturaInt)
           

            if (facturasFiltradas.length > 0) {
                console.log("Ya existe un Proveedor con este numero de factura");
                document.getElementById("mensaje-error").style.display = "block";
          
                // Oculta el mensaje después de 5 segundos
                setTimeout(function () {
                  document.getElementById("mensaje-error").style.display = "none";
                }, 5000); // 5000 milisegundos = 5 segundos
                
                // No guardes el nuevo cliente
            } else {
                console.log("No se encontró un proveedor con este numero de factura");
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
          
                    // Vaciar   los valores de los campos del formulario
                      e.target.elements.nombre.value="";
                      e.target.elements.nro_telefono.value="";
                      e.target.elements.nro_factura.value="";
          
                    // Después de borrar los valores de los campos y confirmar que el cliente se ha guardado
                    document.getElementById("mensaje-exito").style.display = "block";
          
                    // Oculta el mensaje después de 5 segundos
                    setTimeout(function () {
                      document.getElementById("mensaje-exito").style.display = "none";
                    }, 5000); // 5000 milisegundos = 5 segundos
                  } else {
                    const errorText = await res.text(); // Obtén el mensaje de error del servidor
                    console.error("Error al guardar el proveedor:", res.status, errorText);
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