// En el archivo formularioAgregarVenta.html se importa este archivo
const urlVentas = "http://localhost:3000/api/v1/sales";

// Escucha el evento submit del formulario
function agregarEnBaseDeDatos() {
  document
    .getElementById("form-first")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      // Obtiene los valores de los campos del formulario
      const efectivo_bs = e.target.elements.efectivo_bs.value;
      const pagoMovil_bs = e.target.elements.pagoMovil_bs.value;
      const efectivo_divisa = e.target.elements.efectivo_divisa.value;
      const efectivo_euros = e.target.elements.efectivo_euros.value;
      const zelle = e.target.elements.zelle.value;
      const credito = e.target.elements.credito.value;
      const transferencia_bs = e.target.elements.transferencia_bs.value;
      const pdv_tdd_provincial_bs =
        e.target.elements.pdv_tdd_provincial_bs.value;
      const pdv_tdc_provincial_bs =
        e.target.elements.pdv_tdc_provincial_bs.value;
      const pdv_tdd_bancamiga_bs = e.target.elements.pdv_tdd_bancamiga_bs.value;
      const pdv_tdc_bancamiga_bs = e.target.elements.pdv_tdc_bancamiga_bs.value;
      const pdv_tdd_banesco_bs = e.target.elements.pdv_tdd_banesco_bs.value;
      const pdv_tdc_banesco_bs = e.target.elements.pdv_tdc_banesco_bs.value;
      const pdv_tdd_mercantil_bs = e.target.elements.pdv_tdd_mercantil_bs.value;
      const pdv_tdc_mercantil_bs = e.target.elements.pdv_tdc_mercantil_bs.value;

      const nuevaVenta = {
        efectivo_bs: parseFloat(efectivo_bs),
        pagoMovil_bs: parseFloat(pagoMovil_bs),
        efectivo_divisa: parseFloat(efectivo_divisa),
        efectivo_euros: parseFloat(efectivo_euros),
        zelle: parseFloat(zelle),
        credito: parseFloat(credito),
        transferencia_bs: parseFloat(transferencia_bs),
        pdv_tdd_provincial_bs: parseFloat(pdv_tdd_provincial_bs),
        pdv_tdc_provincial_bs: parseFloat(pdv_tdc_provincial_bs),
        pdv_tdd_bancamiga_bs: parseFloat(pdv_tdd_bancamiga_bs),
        pdv_tdc_bancamiga_bs: parseFloat(pdv_tdc_bancamiga_bs),
        pdv_tdd_banesco_bs: parseFloat(pdv_tdd_banesco_bs),
        pdv_tdc_banesco_bs: parseFloat(pdv_tdc_banesco_bs),
        pdv_tdd_mercantil_bs: parseFloat(pdv_tdd_mercantil_bs),
        pdv_tdc_mercantil_bs: parseFloat(pdv_tdc_mercantil_bs),
      };

      console.log("Datos a enviar:", nuevaVenta);

      try {
        // Realiza la solicitud POST al servidor
        const res = await fetch(urlVentas, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevaVenta),
        });

        if (res.ok) {
          const resJson = await res.json();
          console.log("Venta guardada:", resJson);

          // Vaciar   los valores de los campos del formulario
          e.target.elements.efectivo_bs.value = "";
          e.target.elements.pagoMovil_bs.value = "";
          e.target.elements.efectivo_divisa.value = "";
          e.target.elements.efectivo_euros.value = "";
          e.target.elements.zelle.value = "";
          e.target.elements.credito.value = "";
          e.target.elements.transferencia_bs.value = "";
          e.target.elements.pdv_tdd_provincial_bs.value = "";
          e.target.elements.pdv_tdc_provincial_bs.value = "";
          e.target.elements.pdv_tdd_bancamiga_bs.value = "";
          e.target.elements.pdv_tdc_bancamiga_bs.value = "";
          e.target.elements.pdv_tdd_banesco_bs.value = "";
          e.target.elements.pdv_tdc_banesco_bs.value = "";
          e.target.elements.pdv_tdd_mercantil_bs.value = "";
          e.target.elements.pdv_tdc_mercantil_bs.value = "";
          

          // Después de borrar los valores de los campos y confirmar que el cliente se ha guardado
          document.getElementById("mensaje-exito").style.display = "block";

          // Oculta el mensaje después de 5 segundos
          setTimeout(function () {
            document.getElementById("mensaje-exito").style.display = "none";
          }, 5000); // 5000 milisegundos = 5 segundos
        } else {
          const errorText = await res.text(); // Obtén el mensaje de error del servidor
          console.error("Error al guardar la venta:", res.status, errorText);
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    });
}
