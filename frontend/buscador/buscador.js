document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador")) {
    if (e.key === "Escape") e.target.value = "";
    document.querySelectorAll(".fila-tabla").forEach((clientes) => {
      console.log(clientes);
      clientes.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? clientes.classList.remove("filtro")
        : clientes.classList.add("filtro");
    });
  }
});
