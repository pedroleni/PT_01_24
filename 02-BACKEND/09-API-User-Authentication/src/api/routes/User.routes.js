//! -- importaciones

const { upload } = require("../../middleware/files.middleware");
const { 
    registerLargo, 
    registerEstado, 
    registerRedirect, 
    sendCode 
} = require("../controllers/User.controllers")

//! --- hacer el enrutado

const UserRoutes = require("express").Router();

//! --- rutas

UserRoutes.post('/register', upload.single('image'), registerLargo);
UserRoutes.post('/registerUtil', upload.single('image'), registerEstado);
UserRoutes.post('/registerRedirect', upload.single('image'), registerRedirect)

/** controlador que se usa con el redirect */
UserRoutes.post('/register/sendMail/:id', sendCode)

//! --- exportamos

module.exports = UserRoutes;