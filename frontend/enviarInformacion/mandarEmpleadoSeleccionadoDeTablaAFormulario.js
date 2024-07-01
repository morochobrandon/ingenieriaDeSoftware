const empleadoRecuperado = JSON.parse(
  localStorage.getItem("empleadoSeleccionado")
);
console.log("empleado:");
console.log(empleadoRecuperado);

// Suponiendo que ya tienes el valor en empleadoSeleccionadoGlobal
const idEmpleadoElement = document.getElementById("id");
const nombreEmpleadoElement = document.getElementById("nombre");
const apellidoEmpleadoElement = document.getElementById("apellido");
const segundo_nombreEmpleadoElement = document.getElementById("segundo_nombre");
const segundo_apellidoEmpleadoElement =document.getElementById("segundo_apellido");
const cedulaEmpleadoElement = document.getElementById("cedula");
const cargoEmpleadoElement =document.getElementById("cargo");
const local_donde_trabajaEmpleadoElement = document.getElementById("local_donde_trabaja");

// Usa el atributo 'value' en lugar de 'textContent'
idEmpleadoElement.value = empleadoRecuperado.id;
idEmpleadoElement.value = empleadoRecuperado.id;
nombreEmpleadoElement.value = empleadoRecuperado.nombre;
apellidoEmpleadoElement.value = empleadoRecuperado.apellido;
segundo_nombreEmpleadoElement.value = empleadoRecuperado.segundo_nombre;
segundo_apellidoEmpleadoElement.value = empleadoRecuperado.segundo_apellido;
cedulaEmpleadoElement.value = empleadoRecuperado.cedula;
cargoEmpleadoElement.value = empleadoRecuperado.cargo;
local_donde_trabajaEmpleadoElement.value = empleadoRecuperado.local_donde_trabaja;
