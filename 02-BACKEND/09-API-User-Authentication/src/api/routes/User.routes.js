//! -- importaciones

const { upload } = require("../../middleware/files.middleware");
const { registerLargo } = require("../controllers/User.controllers")

//! --- hacer el enrutado

const UserRoutes = require("express").Router();

//! --- rutas

UserRoutes.post('/register', upload.single('image'), registerLargo)

//! --- exportamos

module.exports = UserRoutes;