// En el archivo formularioModificarEmpleado.html se importa este archivo

// Escucha el evento submit del formulario
function agregarEnBaseDeDatos() {
  document
    .getElementById("form-first")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      // Obtiene los valores de los campos del formulario
      const id = e.target.elements.id.value;
      const nombre = e.target.elements.nombre.value;
      const apellido = e.target.elements.apellido.value;
      const segundo_nombre = e.target.elements.segundo_nombre.value;
      const segundo_apellido = e.target.elements.segundo_apellido.value;
      const cedula = e.target.elements.cedula.value;
      const cargo = e.target.elements.cargo.value;
      const local_donde_trabaja = e.target.elements.local_donde_trabaja.value;

      const cedulaInt = cedula ? parseInt(cedula, 10) : null;
      
      const nuevoDatosEmpleado = {
        nombre,
        apellido,
        segundo_nombre,
        segundo_apellido,
        cedula,
        cargo,
        local_donde_trabaja,
      };

      console.log("Datos a enviar:", nuevoDatosEmpleado);

      try {
        // Realiza la solicitud GET para verificar la cédula
        
      
        const resConsulta = await fetch(`http://localhost:3000/api/v1/workers`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
      
        if (resConsulta.ok) {
          const data = await resConsulta.json();
          const cedulas = data.map((data) => data.cedula);
          const cedulasFiltradas = cedulas.filter((cedula) => cedula == cedulaInt)
          if (cedulasFiltradas.length > 0) {
            console.log("La cédula ya está registrada.");
            document.getElementById("mensaje-cedula").style.display = "block";
      
                // Oculta el mensaje después de 5 segundos
                setTimeout(function () {
                  document.getElementById("mensaje-cedula").style.display = "none";
                }, 5000); 
          } else {
            try {
              // Realiza la solicitud POST al servidor
              const res = await fetch(`http://localhost:3000/api/v1/workers/${id}`, {
                method: "PUT",
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoDatosEmpleado),
              });
      
              if (res.ok) {
                const resJson = await res.json();
                console.log("Empleado guardado:", resJson);
      
                // Después de borrar los valores de los campos y confirmar que el cliente se ha guardado
                document.getElementById("mensaje-exito").style.display = "block";
      
                // Oculta el mensaje después de 5 segundos
                setTimeout(function () {
                  document.getElementById("mensaje-exito").style.display = "none";
                }, 5000); // 5000 milisegundos = 5 segundos
              } else {
                const errorText = await res.text(); // Obtén el mensaje de error del servidor
                console.error("Error al guardar el empleado:", res.status, errorText);
              }
            } catch (error) {
              console.error("Error en la solicitud:", error);
            }
            // Maneja la respuesta de la solicitud POST
          }
        } else {
          console.error("Error al consultar la cédula.");
          // Maneja el error de la solicitud GET
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    });
}
