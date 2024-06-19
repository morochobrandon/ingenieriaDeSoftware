const {Router} = require('express');
const router = Router(); 

router.get("/manager/agregar/cliente", (req, res) =>
  res.sendFile(rutaFrontend + "/pages/formulario/formularioAgregarCliente.html")
);


module.exports = router;