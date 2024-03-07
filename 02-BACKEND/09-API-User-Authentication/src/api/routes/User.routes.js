//! -- importaciones

const { upload } = require("../../middleware/files.middleware");
const { 
    registerLargo, 
    registerEstado, 
    registerRedirect, 
    sendCode, 
    login,
    exampleAuth,
    autoLogin
} = require("../controllers/User.controllers")
const { isAuth } = require("../../middleware/auth.middleware")

//! --- hacer el enrutado

const UserRoutes = require("express").Router();

//! --- rutas

UserRoutes.post('/register', upload.single('image'), registerLargo);
UserRoutes.post('/registerUtil', upload.single('image'), registerEstado);
UserRoutes.post('/registerRedirect', upload.single('image'), registerRedirect)
UserRoutes.post('/login', login)
UserRoutes.get('/pruebas', [isAuth], exampleAuth)
UserRoutes.post('/login/autologin', autoLogin)

/** controlador que se usa con el redirect */
UserRoutes.post('/register/sendMail/:id', sendCode)

//! --- exportamos

module.exports = UserRoutes;