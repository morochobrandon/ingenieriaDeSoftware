// En algún lugar global (fuera de cualquier función)
let materiaPrimaSeleccionadoGlobalQueQuiereComprar;

function materiaPrimaSeleccionado(materiaPrima) {
    // Asigna el valor del materiaPrima a la variable global
    materiaPrimaSeleccionadoGlobalQueQuiereComprar = materiaPrima;
    console.log("antes de que cambie");
    console.log(materiaPrimaSeleccionadoGlobalQueQuiereComprar);

    // Guarda el valor del materiaPrima en localStorage
    localStorage.setItem("materiaPrimaSeleccionado", JSON.stringify(materiaPrimaSeleccionadoGlobalQueQuiereComprar));

    // Cambia la ubicación de la ventana
    window.location.href = "/manager/consultar/materia/prima";
}
/*
// En la nueva ventana, puedes recuperar el valor del materiaPrima así:
let materiaPrimaRecuperado = JSON.parse(localStorage.getItem("materiaPrimaSeleccionado"));
console.log(materiaPrimaRecuperado);
*/