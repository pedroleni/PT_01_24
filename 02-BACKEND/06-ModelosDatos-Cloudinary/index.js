//! --- IMPORTACIONES Y CONFIG DOTENV

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//! --- TRAER LA CONEXION DE LA BASE DE DATOS y llamar a la función de la conexión

const { connect } = require("./src/utils/db");
connect();

//! --- CONFIGURACION DE CLOUDINARY

const { configCloudinary } = require("./src/middleware/files.middleware");
configCloudinary();

//! --- VARIABLES DE ENTORNO

const PORT = process.env.PORT;

//! --- CREAR EL SERVDIDOR WEB

const app = express();

//! --- LIMITACIONES DE CANTIDAD EN EL SERVIDOR EN EL BACKEND

app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({limit: "5mb", extended:false}));

//! --- ESCUCHAR EN EL PUERTO EL SERVIDOR WEB

app.listen(PORT, () => {
    console.log(`Server listening on port ⛵ http://localhost:${PORT}`);
})