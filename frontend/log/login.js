const mensajeError = document.getElementsByClassName("error")[0];

function entrar() {
  document
  
  .getElementById("login-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
  const user = e.target.elements.user.value;
  const password = e.target.elements.password.value;
  
  if (user=== "jefe" && password ==="jefe") {
      
      window.location.href = "/landinPages";
      
    

  } else if (user==="gerente" && password ==="gerente") {
      
      window.location.href = "/landinPagesG";
  } else if (user==="administrador" && password ==="administrador") {
     
      window.location.href = "/landinPagesA";
  }
})}
