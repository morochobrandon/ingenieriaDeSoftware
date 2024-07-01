const materiaPrimaRecuperado = JSON.parse(
  localStorage.getItem("materiaPrimaSeleccionado")
);
console.log("materiaPrima:");
console.log(materiaPrimaRecuperado);

// Suponiendo que ya tienes el valor en materiaPrimaSeleccionadoGlobal
const idMateriaPrimaElement = document.getElementById("id");
const nombreMateriaPrimaElement = document.getElementById("nombre");
const precio_unitarioMateriaPrimaElement = document.getElementById("precio_unitario");
const precio_totalMateriaPrimaElement = document.getElementById("precio_total");
const cantidadMateriaPrimaElement =
  document.getElementById("cantidad");
const id_proveedorMateriaPrimaElement = document.getElementById("id_proveedor");

// Usa el atributo 'value' en lugar de 'textContent'
idMateriaPrimaElement.value = materiaPrimaRecuperado.id;
idMateriaPrimaElement.value = materiaPrimaRecuperado.id;
nombreMateriaPrimaElement.value = materiaPrimaRecuperado.nombre;
precio_unitarioMateriaPrimaElement.value =
  materiaPrimaRecuperado.precio_unitario;
precio_totalMateriaPrimaElement.value = materiaPrimaRecuperado.precio_total;
cantidadMateriaPrimaElement.value = materiaPrimaRecuperado.cantidad;
id_proveedorMateriaPrimaElement.value = materiaPrimaRecuperado.id_proveedor;

