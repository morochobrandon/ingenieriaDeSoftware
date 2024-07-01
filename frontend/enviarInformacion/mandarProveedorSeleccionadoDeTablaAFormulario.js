const proveedorRecuperado = JSON.parse(
  localStorage.getItem("proveedorSeleccionado")
);
console.log("proveedor:");
console.log(proveedorRecuperado);

// Suponiendo que ya tienes el valor en proveedorSeleccionadoGlobal
const idProveedorElement = document.getElementById("id");
const nombreProveedorElement = document.getElementById("nombre");
const nro_telefonoProveedorElement = document.getElementById("nro_telefono");
const nro_facturaProveedorElement = document.getElementById("nro_factura");


// Usa el atributo 'value' en lugar de 'textContent'
idProveedorElement.value = proveedorRecuperado.id;
nombreProveedorElement.value = proveedorRecuperado.nombre;
nro_telefonoProveedorElement.value = proveedorRecuperado.nro_telefono;
nro_facturaProveedorElement.value = proveedorRecuperado.nro_factura;

