const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const { Client } = require("./db/models/clients.model"); 

dotenv.config();
const app = express();

const rutaPath = path.join(__dirname, "..", "..");
const rutaFrontend = rutaPath + "/frontend";
const port = process.env.PORT || 3000;

const routerApi = require("./routes");
const { Product } = require("./db/models/products.model");
const { Supplier } = require("./db/models/suppliers.model");
const { RawMaterial } = require("./db/models/rawMaterials.model");
const { Worker } = require("./db/models/workers");

//Server
app.listen(port, () => {
  console.log("Port ==>", port);
});

//Configuración
app.use(express.static(rutaFrontend));
console.log(rutaFrontend);

app.use(cors());



//middleware
const storage = multer.diskStorage({
  destination: path.join(rutaFrontend, "/assets/image/productosVentas"),
  filename(req,file,cb){
    //req = informacion de peticion del usuario
    // file= informacion del archivos que me da el usuario
    // cb = que hace despues de hacer todo lo que tengo que hacar
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
});
app.use(multer({ storage }).single("image"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Rutas
//app.use(require('./routes/clientesFronted'));

app.get("/manager/agregar/cliente", (req, res) =>
  res.sendFile(rutaFrontend + "/pages/formulario/formularioAgregarCliente.html")
);

app.get("/carrito/compra/cliente",validarAcceso(usuario.tipo_usuario), (req, res) =>
  res.sendFile(rutaFrontend + "/pages/manager/carritoDeCompra.html")
);

app.get("/catalogo", (req, res) =>
  res.sendFile(rutaFrontend + "/pages/manager/catalogo.html")
);

app.get("/manager/agregar/empleado", (req, res) =>
  res.sendFile(rutaFrontend + "/pages/formulario/formularioAgregarEmpleado.html")
);

app.get("/manager/agregar/materia/prima", (req, res) =>
  res.sendFile(rutaFrontend + "/pages/formulario/formularioAgregarMateriaPrima.html")
);

app.get("/manager/agregar/productos/ventas", (req, res) =>
  res.sendFile(rutaFrontend + "/pages/formulario/formularioAgregarProductoVenta.html")
);

app.get("/manager/agregar/proveedor", (req, res) =>
  res.sendFile(rutaFrontend + "/pages/formulario/formularioAgregarProveedor.html")
);

app.get("/manager/consultar/cliente", (req, res) =>
  res.sendFile(
    rutaFrontend + "/pages/manager/consultarCliente.html"
  )
);

app.get("/manager/consultar/proveedor", (req, res) =>
  res.sendFile(rutaFrontend + "/pages/manager/consultarProveedor.html")
);

app.get("/manager/consultar/materia/prima", (req, res) =>
  res.sendFile(rutaFrontend + "/pages/manager/consultarMateriaPrima.html")
);

app.get("/manager/agregar/materia/prima", (req, res) =>
  res.sendFile(rutaFrontend + "/pages/formulario/formularioMateriaPrima.html")
);

// Supongamos que tienes un modelo llamado "Client"
app.get("/api/v1/clients/:id", async (req, res) => {
  try {
    const { id } = req.params; // Obtiene el ID del cliente de los parámetros de la URL

    // Busca el cliente por su ID
    const cliente = await Client.findByPk(id);

    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    res.status(200).json({ success: true, data: cliente });
  } catch (error) {
    console.error("Error al obtener cliente:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});


app.post("/api/v1/clients", async (req, res) => {
  try {
    
    
    const {
      nombre,
      apellido,
      segundo_nombre,
      segundo_apellido,
      cedula,
      deuda_acomulada,
    } = req.body;
    console.log("Datos recibidos:", req.body);
    console.log(req.body);
    
    // Crea un nuevo cliente en la base de datos
    const nuevoCliente = await Client.create({
      nombre,
      apellido,
      segundo_nombre,
      segundo_apellido,
      cedula,
      deuda_acomulada,
    });
    console.log(nuevoCliente);
    res.status(200).json({ test: true });
  } catch (error) {
    console.error("Error al agregar cliente:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// this.URI = "http://localhost:3000/api/v1/products";
/*
app.post("/api/v1/products", async (req, res) => {
  try {
    const {
      nombre,
      precio,
      tipo,
      fotoProductoVenta,
    } = req.body;
    console.log("Datos recibidos:", req.body);
    console.log(req.body);

    // Crea un nuevo cliente en la base de datos
    const nuevoProducto = await Product.create({
      nombre,
      precio,
      tipo,
    });
    console.log(nuevoProducto);
    res.status(200).json({ test: true });
  } catch (error) {
    console.error("Error al agregar producto venta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
*/
/*
app.post("/api/v1/products", async (req, res) => {
  try {
    const { nombre, precio, tipo } = req.body;
    const fotoProductoVenta = req.file; // multer coloca el archivo aquí

    // Guarda la información del producto y la imagen en la base de datos
    const nuevoProducto = await Product.create({
      nombre,
      precio,
      tipo,
      imagen: fotoProductoVenta.path, // Guarda la ruta de la imagen
    });

    res.status(200).json(nuevoProducto);
  } catch (error) {
    console.error("Error al agregar producto venta:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
*/

app.post("/api/v1/products", async (req, res) => {
  try {
    const { nombre, precio, tipo } = req.body;
    const fotoProductoVenta = req.file; // multer coloca el archivo aquí

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

app.post("/api/v1/suppliers", async (req, res) => {
  try {
    const { nombre, nro_telefono, nro_factura } = req.body;
    console.log("Datos recibidos:", req.body);
    console.log(req.body);

    // Crea un nuevo cliente en la base de datos
    const nuevoProveedor = await Supplier.create({
      nombre,
      nro_telefono,
      nro_factura,
    });
    console.log(nuevoProveedor);
    res.status(200).json({ test: true });
  } catch (error) {
    console.error("Error al agregar proveedor:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.post("/api/v1/rawMaterials", async (req, res) => {
  try {
    const { nombre, precio_unitario, precio_total, cantidad, id_proveedor } =
      req.body;
    console.log("Datos recibidos:", req.body);
    console.log(req.body);

    // Crea un nuevo cliente en la base de datos
    const nuevoProductoMateriaPrima = await RawMaterial.create({
      nombre,
      precio_unitario,
      precio_total,
      cantidad,
      id_proveedor,
    });
    console.log(nuevoProductoMateriaPrima);
    res.status(200).json({ test: true });
  } catch (error) {
    console.error("Error al agregar proveedor:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.post("http://localhost:3000/api/v1/workers", async (req, res) => {
  try {
     const {
       nombre,
       apellido,
       segundo_nombre,
       segundo_apellido,
       cedula,
       cargo,
       local_donde_trabaja,
     } = req.body;
    console.log("Datos recibidos:", req.body);
    console.log(req.body);

    // Crea un nuevo cliente en la base de datos
    const nuevoEmpleado = await Worker.create({
      nombre,
      apellido,
      segundo_nombre,
      segundo_apellido,
      cedula,
      cargo,
      local_donde_trabaja,
    });
    console.log(nuevoEmpleado);
    res.status(200).json({ test: true });
  } catch (error) {
    console.error("Error al agregar empleado:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});



// Supongamos que tienes un modelo llamado "Client"
app.put("/api/v1/clients/:id", async (req, res) => {
  try {
    const { id } = req.params; // Obtiene el ID del cliente de los parámetros de la URL
    const {
      nombre,
      apellido,
      segundo_nombre,
      segundo_apellido,
      cedula,
      deuda_acomulada,
    } = req.body;

    // Busca el cliente por su ID
    const clienteAModificar = await Client.findByPk(id);

    if (!clienteAModificar) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    // Actualiza los campos deseados
    clienteAModificar.nombre = nombre;
    clienteAModificar.apellido = apellido;
    clienteAModificar.segundo_nombre = segundo_nombre;
    clienteAModificar.segundo_apellido = segundo_apellido;
    clienteAModificar.cedula = cedula;
    clienteAModificar.deuda_acomulada = deuda_acomulada;

    // Guarda los cambios en la base de datos
    await clienteAModificar.save();

    res.status(200).json({ success: true, data: clienteAModificar });
  } catch (error) {
    console.error("Error al modificar cliente:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Supongamos que tienes un modelo llamado "Client"
app.delete("/api/v1/clients/:id", async (req, res) => {
  try {
    const { id } = req.params; // Obtiene el ID del cliente de los parámetros de la URL

    // Busca el cliente por su ID
    const clienteAEliminar = await Client.findByPk(id);

    if (!clienteAEliminar) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    // Elimina el registro de la base de datos
    await clienteAEliminar.destroy();

    res.status(200).json({ success: true, message: "Cliente eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar cliente:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});




routerApi(app);
