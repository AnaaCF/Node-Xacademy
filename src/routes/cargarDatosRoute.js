const express = require("express");
const router = express.Router();

const { cargarDatosController } = require("../controllers")

router.post('/book',cargarDatosController.crearBook);
router.post('/library',cargarDatosController.crearLibrary);
router.post('/user',cargarDatosController.crearUser)


module.exports = router;