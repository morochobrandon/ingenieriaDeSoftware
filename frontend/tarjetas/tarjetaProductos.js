const contenedorTarjetas = document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos) {
  productos.forEach(producto => {
    if (contenedorTarjetas) {
      const nuevoProducto = document.createElement("div");
      nuevoProducto.classList = "tarjeta-producto";
      nuevoProducto.innerHTML = `
        <img src="/productosVentas/${producto.imagen}" alt="Producto 1">
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio}</p>
        <button>Agregar al carrito</button>`;
      contenedorTarjetas.appendChild(nuevoProducto);
      nuevoProducto
        .getElementsByTagName("button")[0]
        .addEventListener("click", () => agregarAlCarrito(producto));
    } else {
      console.log("El elemento con ID 'productos-container' no se encontró.");
    }
  });
}

function obtenerProductos() {
  
  fetch("http://localhost:3000/api/v1/products")
    .then(response => response.json())
    .then(data => {
      crearTarjetasProductosInicio(data); // No es necesario hacer JSON.parse aquí
    })
    .catch(error => console.error("Error:", error));
}

obtenerProductos();
