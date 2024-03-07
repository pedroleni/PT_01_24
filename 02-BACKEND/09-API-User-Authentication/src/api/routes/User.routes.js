//! -- importaciones

const { upload } = require("../../middleware/files.middleware");
const { isAuth } = require("../../middleware/auth.middleware")
const { 
    registerLargo, 
    registerEstado, 
    registerRedirect, 
    sendCode, 
    login,
    exampleAuth,
    autoLogin,
    resendCode,
    checkNewUser,
    changePassword,
    sendPassword
} = require("../controllers/User.controllers")

//! --- hacer el enrutado

const UserRoutes = require("express").Router();

//! --- rutas

UserRoutes.post('/register', upload.single('image'), registerLargo);
UserRoutes.post('/registerUtil', upload.single('image'), registerEstado);
UserRoutes.post('/registerRedirect', upload.single('image'), registerRedirect)
UserRoutes.post('/login', login)
UserRoutes.get('/pruebas', [isAuth], exampleAuth)
UserRoutes.post('/login/autologin', autoLogin)
UserRoutes.post("/resendCode", resendCode)
UserRoutes.post("/check", checkNewUser)
UserRoutes.patch("/forgotPassword", changePassword)
UserRoutes.patch("/sendPassword/:id", sendPassword)

/** controlador que se usa con el redirect */
UserRoutes.post('/register/sendMail/:id', sendCode)

//! --- exportamos

module.exports = UserRoutes;