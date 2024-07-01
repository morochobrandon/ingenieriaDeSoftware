const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

dotenv.config();
const app = express();

const rutaPath = path.join(__dirname, "..", "..");
const rutaFrontend = rutaPath + "/frontend";
const port = process.env.PORT || 3000;

const routerApi = require("./routes");
const { Product } = require("./db/models/products.model");

//Configuración
app.use(express.static(rutaFrontend));
console.log(rutaFrontend);

app.use(cors());

//middleware
const storage = multer.diskStorage({
  destination: path.join(rutaFrontend, "/productosVentas"),
  filename(req, file, cb) {
    //req = informacion de peticion del usuario
    // file= informacion del archivos que me da el usuario
    // cb = que hace despues de hacer todo lo que tengo que hacar
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});
app.use(multer({ storage }).single("image"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const baseRoutesFrontend = {
  agregarCliente: "/agregar/cliente", ////////////////////////////////
  agregarProductoVenta: "/agregar/productoVenta", ////////////////////
  agregarProveedor: "/agregar/proveedor", ////////////////////////////
  agregarProductoMateriaPrima: "/agregar/productoMateriaPrima", //////
  agregarEmpleado: "/agregar/empleado", //////////////////////////////
  agregarVenta: "/agregar/venta", //////////////////////////////////

  carritoCompra: "/carrito/compra/cliente", //////////////////////////
  catalogo: "/catalogo", /////////////////////////////////////////////
  elegirClienteQueSeLeFia: "/elegirClienteQueSeLeFia", ///////////////

  //tablas
  consultarCliente: "/consultar/cliente", ////////////////////////////
  consultarProductoVenta: "/consultar/productoVenta",
  consultarProveedor: "/consultar/proveedor", ////////////////////////
  consultarProductoMateriaPrima: "/consultar/productoMateriaPrima", //
  consultarEmpleado: "/consultar/empleado", //////////////////////////
  consultarCreditoCliente: "/consultar/credito/cliente",
  consultarVenta: "/consultar/venta", ////////////////////////////////

  modificarCliente: "/modificar/cliente",
  modificarProductoVenta: "/modificar/productoVenta",
  modificarProveedor: "/modificar/proveedor", ////////////////////////
  modificarProductoMateriaPrima: "/modificar/productoMateriaPrima", //
  modificarEmpleado: "/modificar/empleado", //////////////////////////
  modificarCreditoCliente: "/modificar/credito/cliente",
  modificarVenta: "/modificar/venta", ////////////////////////////////

  eliminarCliente: "/eliminar/cliente", //////////////////////////////
  eliminarProductoVenta: "/eliminar/productoVenta",
  eliminarProveedor: "/eliminar/proveedor", //////////////////////////
  eliminarProductoMateriaPrima: "/eliminar/productoMateriaPrima", ////
  eliminarEmpleado: "/eliminar/empleado", ////////////////////////////
  eliminarCreditoCliente: "/eliminar/credito/cliente", /////////////

  elegirClienteConsultarCredito: "/elegir/cliente/consultar/credito",
  elegirClienteModificarCredito: "/elegir/cliente/modificar/credito",
  elegirClienteEliminarCredito: "/elegir/cliente/eliminar/credito", //
  //especifico
  consultarClienteEspecifico: "/consultar/cliente/especifico", //
  consultarProductoVentaEspecifico: "/consultar/productoVenta/especifico", //
  consultarProveedorEspecifico: "/consultar/proveedor/especifico", //
  consultarProductoMateriaPrimaEspecifico:
    "/consultar/productoMateriaPrima/especifico", //
  consultarEmpleadoEspecifico: "/consultar/empleado/especifico",
  consultarCreditoClienteEspecifico: "/consultar/credito/cliente/especifico",
  consultarVentaEspecifico: "/consultar/venta/especifico", //

  modificarClienteEspecifico: "/modificar/cliente/especifico",
  modificarProductoVentaEspecifico: "/modificar/productoVenta/especifico",
  modificarProveedorEspecifico: "/modificar/proveedor/especifico", //
  modificarProductoMateriaPrimaEspecifico:
    "/modificar/productoMateriaPrima/especifico", //
  modificarEmpleadoEspecifico: "/modificar/empleado/especifico", //
  modificarCreditoClienteEspecifico: "/modificar/credito/cliente/especifico",
  modificarVentaEspecifico: "/modificar/venta/especifico", //
};










//gestion de prestamos


// ----- agregar credito cliente  -------

app.get(baseRoutesFrontend.elegirClienteQueSeLeFia, (req, res) =>
  res.sendFile(rutaFrontend + "/carrito/elegirClienteQueSeLeFia.html")
);

app.get(baseRoutesFrontend.catalogo, (req, res) =>
  res.sendFile(rutaFrontend + "/carrito/catalogo.html")
);

app.get(baseRoutesFrontend.carritoCompra, (req, res) =>
  res.sendFile(rutaFrontend + "/carrito/carritoDeCompra.html")
);




// ------- consultar credito cliente ---------
app.get(baseRoutesFrontend.elegirClienteConsultarCredito, (req, res) =>
  res.sendFile(rutaFrontend + "/consultar/elegirClienteParaConsultarCreditoEnTabla.html")
);

app.get(baseRoutesFrontend.consultarCreditoCliente, (req, res) =>
  res.sendFile(rutaFrontend + "/consultar/consultarCreditoClienteEnTabla.html")
);

app.get(baseRoutesFrontend.consultarCreditoClienteEspecifico, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioConsultarCreditoCliente.html")
);


// -------- modificar credito cliente ---------

app.get(baseRoutesFrontend.elegirClienteModificarCredito, (req, res) =>
  res.sendFile(
    rutaFrontend + "/modificar/elegirClienteParaModificarCreditoEnTabla.html"
  )
);

app.get(baseRoutesFrontend.modificarCreditoCliente, (req, res) =>
  res.sendFile(rutaFrontend + "/modificar/modificarCreditoClienteEnTabla.html")
);

app.get(baseRoutesFrontend.modificarCreditoClienteEspecifico, (req, res) =>
  res.sendFile(
    rutaFrontend + "/formulario/formularioModificarCreditoCliente.html"
  )
);


// -------- eliminar credito cliente -----------

app.get(baseRoutesFrontend.elegirClienteEliminarCredito, (req, res) =>
  res.sendFile(rutaFrontend + "/eliminar/elegirClienteParaEliminarCreditoEnTabla.html")
);

app.get(baseRoutesFrontend.eliminarCreditoCliente, (req, res) =>
  res.sendFile(rutaFrontend + "/eliminar/eliminarCreditoClienteEnTabla.html")
);





//gestion de ventas

// ----- agregar venta de producto  -------
app.get(baseRoutesFrontend.agregarProductoVenta, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioAgregarProductoVenta.html")
);

// ----- generar reporte del dia -------

app.get(baseRoutesFrontend.agregarVenta, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioAgregarVenta.html")
);

// ----- consultar reporte  -------

app.get(baseRoutesFrontend.consultarVenta, (req, res) =>
  res.sendFile(rutaFrontend + "/consultar/consultarVentaEnTabla.html")
);

app.get(baseRoutesFrontend.consultarVentaEspecifico, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioConsultarVenta.html")
);

// ----- modificar reporte  -------

app.get(baseRoutesFrontend.modificarVenta, (req, res) =>
  res.sendFile(rutaFrontend + "/modificar/modificarVentaEnTabla.html")
);

app.get(baseRoutesFrontend.modificarVentaEspecifico, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioModificarVenta.html")
);














//gestion de proveedores

// ----- agregar proveedor  -------

app.get(baseRoutesFrontend.agregarProveedor, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioAgregarProveedor.html")
);

// ----- consultar proveedor  -------

//tabla
app.get(baseRoutesFrontend.consultarProveedor, (req, res) =>
  res.sendFile(rutaFrontend + "/consultar/consultarProveedorEnTabla.html")
);

//especifico

app.get(baseRoutesFrontend.consultarProveedorEspecifico, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioConsultarProveedor.html")
);

// ----- modificar proveedor  -------

//tabla
app.get(baseRoutesFrontend.modificarProveedor, (req, res) =>
  res.sendFile(rutaFrontend + "/modificar/modificarProveedorEnTabla.html")
);

//especifico
app.get(baseRoutesFrontend.modificarProveedorEspecifico, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioModificarProveedor.html")
);

// ----- eliminar proveedor  -------
app.get(baseRoutesFrontend.eliminarProveedor, (req, res) =>
  res.sendFile(rutaFrontend + "/eliminar/eliminarProveedorEnTabla.html")
);



















// gestion de materia prima

// ----- agregar materia prima  -------

app.get(baseRoutesFrontend.agregarProductoMateriaPrima, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioAgregarMateriaPrima.html")
);

// ----- consultar materia prima  -------

//tabla
app.get(baseRoutesFrontend.consultarProductoMateriaPrima, (req, res) =>
  res.sendFile(rutaFrontend + "/consultar/consultarMateriaPrimaEnTabla.html")
);

//especifico

app.get(
  baseRoutesFrontend.consultarProductoMateriaPrimaEspecifico,
  (req, res) =>
    res.sendFile(
      rutaFrontend + "/formulario/formularioConsultarMateriaPrima.html"
    )
);

// ----- modificar materia prima  -------

//tabla
app.get(baseRoutesFrontend.modificarProductoMateriaPrima, (req, res) =>
  res.sendFile(rutaFrontend + "/modificar/modificarMateriaPrimaEnTabla.html")
);

//especifico

app.get(
  baseRoutesFrontend.modificarProductoMateriaPrimaEspecifico,
  (req, res) =>
    res.sendFile(
      rutaFrontend + "/formulario/formularioModificarMateriaPrima.html"
    )
);

// ----- eliminar materia prima  -------

app.get(baseRoutesFrontend.eliminarProductoMateriaPrima, (req, res) =>
  res.sendFile(rutaFrontend + "/eliminar/eliminarMateriaPrimaEnTabla.html")
);


















// gestion de nomina


// ----- agregar empleado  -------

app.get(baseRoutesFrontend.agregarEmpleado, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioAgregarEmpleado.html")
);


// ----- consultar empleado  -------


//tabla
app.get(baseRoutesFrontend.consultarEmpleado, (req, res) =>
  res.sendFile(rutaFrontend + "/consultar/consultarEmpleadoEnTabla.html")
);

//especifico
app.get(baseRoutesFrontend.consultarEmpleadoEspecifico, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioConsultarEmpleado.html")
);

// ----- modificar empleado  -------

//tabla
app.get(baseRoutesFrontend.modificarEmpleado, (req, res) =>
  res.sendFile(rutaFrontend + "/modificar/modificarEmpleadoEnTabla.html")
);
//especifico
app.get(baseRoutesFrontend.modificarEmpleadoEspecifico, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioModificarEmpleado.html")
);


// ----- eliminar empleado  -------

//tabla
app.get(baseRoutesFrontend.eliminarEmpleado, (req, res) =>
  res.sendFile(rutaFrontend + "/eliminar/eliminarEmpleadoEnTabla.html")
);





//-------------------------------------------------------------




//gestion de clientes

// ----- agregar cliente  -------

app.get(baseRoutesFrontend.agregarCliente, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioAgregarCliente.html")
);


// ----- consultar cliente  -------

//tabla

app.get(baseRoutesFrontend.consultarCliente, (req, res) =>
  res.sendFile(rutaFrontend + "/consultar/consultarClienteEnTabla.html")
);

//especifico
app.get(baseRoutesFrontend.consultarClienteEspecifico, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioConsultarCliente.html")
);


// ----- modificar cliente  -------

//tabla

app.get(baseRoutesFrontend.modificarCliente, (req, res) =>
  res.sendFile(rutaFrontend + "/modificar/modificarClienteEnTabla.html")
);

//especifico
app.get(baseRoutesFrontend.modificarClienteEspecifico, (req, res) =>
  res.sendFile(rutaFrontend + "/formulario/formularioModificarCliente.html")
);


// ----- eliminar cliente  -------

app.get(baseRoutesFrontend.eliminarCliente, (req, res) =>
  res.sendFile(rutaFrontend + "/eliminar/eliminarClienteEnTabla.html") 
);









//Rutas

app.post("/api/v1/products", async (req, res) => {
  try {
    const { nombre, precio, tipo } = req.body;
    const fotoProductoVenta = req.file; // multer coloca el archivo aquí
    console.log('entro aqui')
    // Extrae el nombre del archivo de la ruta completa
    const nombreArchivo = path.basename(fotoProductoVenta.path);

    // Guarda la información del producto y el nombre del archivo en la base de datos
    const nuevoProducto = await Product.create({
      nombre,
      precio,
      tipo,
      imagen: nombreArchivo, // Guarda solo el nombre del archivo
    });

    res.status(200).json(nuevoProducto);
  } catch (error) {
    console.error("Error al agregar producto venta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});



routerApi(app);

//Server
app.listen(port, () => {
  console.log("Port ==>", port);
});

