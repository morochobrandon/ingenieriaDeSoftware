const ventaRecuperada = JSON.parse(localStorage.getItem("ventaSeleccionada"));
console.log("venta:");
console.log(ventaRecuperada);

// Suponiendo que ya tienes el valor en proveedorSeleccionadoGlobal
const idVentaElement = document.getElementById("id");
const efectivo_bsElement = document.getElementById("efectivo_bs");
const pagoMovil_bsElement = document.getElementById("pagoMovil_bs");
const efectivo_divisaElement = document.getElementById("efectivo_divisa");
const efectivo_eurosElement = document.getElementById("efectivo_euros");
const zelleElement = document.getElementById("zelle");
const transferencia_bsElement = document.getElementById("transferencia_bs");
const pdv_tdd_provincial_bsElement = document.getElementById(
  "pdv_tdd_provincial_bs"
);
const pdv_tdc_provincial_bsElement = document.getElementById(
  "pdv_tdc_provincial_bs"
);
const pdv_tdd_bancamiga_bsElement = document.getElementById(
  "pdv_tdd_bancamiga_bs"
);
const pdv_tdc_bancamiga_bsElement = document.getElementById(
  "pdv_tdc_bancamiga_bs"
);
const pdv_tdd_banesco_bsElement = document.getElementById("pdv_tdd_banesco_bs");
const pdv_tdc_banesco_bsElement = document.getElementById("pdv_tdc_banesco_bs");
const pdv_tdd_mercantil_bsElement = document.getElementById(
  "pdv_tdd_mercantil_bs"
);
const pdv_tdc_mercantil_bsElement = document.getElementById(
  "pdv_tdc_mercantil_bs"
);

// Usa el atributo 'value' en lugar de 'textContent'
idVentaElement.value = ventaRecuperada.id;
efectivo_bsElement.value = ventaRecuperada.efectivo_bs;
pagoMovil_bsElement.value = ventaRecuperada.pagoMovil_bs;
efectivo_divisaElement.value = ventaRecuperada.efectivo_divisa;
efectivo_eurosElement.value = ventaRecuperada.efectivo_euros;
zelleElement.value = ventaRecuperada.zelle;
transferencia_bsElement.value = ventaRecuperada.transferencia_bs;
pdv_tdd_provincial_bsElement.value = ventaRecuperada.pdv_tdd_provincial_bs;
pdv_tdc_provincial_bsElement.value = ventaRecuperada.pdv_tdc_provincial_bs;
pdv_tdd_bancamiga_bsElement.value = ventaRecuperada.pdv_tdd_bancamiga_bs;
pdv_tdc_bancamiga_bsElement.value = ventaRecuperada.pdv_tdc_bancamiga_bs;
pdv_tdd_banesco_bsElement.value = ventaRecuperada.pdv_tdd_banesco_bs;
pdv_tdc_banesco_bsElement.value = ventaRecuperada.pdv_tdc_banesco_bs;
pdv_tdd_mercantil_bsElement.value = ventaRecuperada.pdv_tdd_mercantil_bs;
pdv_tdc_mercantil_bsElement.value = ventaRecuperada.pdv_tdc_mercantil_bs;
