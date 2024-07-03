const proveedorRecuperado = JSON.parse(
  localStorage.getItem("proveedorSeleccionado")
);
console.log("proveedor:");
console.log(proveedorRecuperado);

// Suponiendo que ya tienes el valor en proveedorSeleccionadoGlobal
const idProveedorElement = document.getElementById("id_proveedor");



// Usa el atributo 'value' en lugar de 'textContent'
idProveedorElement.value = proveedorRecuperado.id;


