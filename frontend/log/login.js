const mensajeError = document.getElementsByClassName("error")[0];


let usuarioSeleccionadaGlobal;

function entrar() {
  document
  .getElementById("login-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
  const user = e.target.elements.user.value;
  const password = e.target.elements.password.value;

  nuevoUsuario = {
    user,
    password,
  }

  localStorage.setItem("usuarioSeleccionado", JSON.stringify(nuevoUsuario));
  
  if (user=== "jefe" && password ==="jefe") {
      
      window.location.href = "/principalJefe";
      
    

  } else if (user==="gerente" && password ==="gerente") {
      
      window.location.href = "/principalGerente";
  } else if (user==="administrador" && password ==="administrador") {
     
      window.location.href = "/principalAdministrador";
  }
})}
