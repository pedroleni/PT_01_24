//! --- importaciones
const User = require("../models/User.model")
const randomCode = require("../../utils/randomCode");
const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const nodemailer = require("nodemailer")


//! --------------------------------------------------------
//? ---------------------- Registro largo ------------------
//! --------------------------------------------------------

const registerLargo = async(req, res, next) => {
    // capturamos la imagen que se sube a cloudinary
    // con optional chaining ? porque puede ser que el user haya subido imagen o no
    let catchImg = req.file?.path;

    try {
        // actualizamos los indices del esquema de modelo de User
        await User.syncIndexes()

        //?--- generamos el codigo de confirmacion con la funcion de utils randomCode
        const confirmationCode = randomCode();

        //?--- generamos el usuario con el email y el name
        const { email, name } = req.body;

        /** usamos el método findOne para traer el email y el name del user
         * y después comprobar si existe o no para manejar los errores
         * y darle respuesta al usuario --- puede pasar que el user no se guarde, que el user ya exista,
         * que haya un error en le envio del codigo de confirmacion por correo, ...
         */
        const userExist = await User.findOne(
            { email: req.body.email },
            { name: req.body.name }
        )

        /** comprobamos si el usuario existe o no
         * si no existe lo guardamos en una nueva istancia ---> new User
         * y lo guardamos con su body con la info que ha dado el usuario
         * y su codigo de confirmacion
         * 
         * además hacemos la subida de la imagen si la hubiera y si no ponemos una por defecto
         * 
         * después con un try catch guardamos el user y manejamos errores
         */
        if (!userExist) {
            const newUser = new User({ ...req.body, confirmationCode })

            req.file 
            ? (newUser.image = req.file.path) 
            : (newUser.image = 'https://res.cloudinary.com/deahoouj6/image/upload/v1709323076/sd4tavfxko5roomnebcs.webp')

            /** guardamos el user de la nueva instancia de user que se ha creado 
             * y enviamos el codigo de confirmacion al email que ha dado el user
             * usamos nodemailer
            */
            try {
                const userSave = await newUser.save();

                //! --------------------------------------------------------
                //todo ------- envio correo codigo de confirmacion ---------
                //! --------------------------------------------------------

                if (userSave) {
                    // traemos las variables de entorno del .env
                    const EMAIL = process.env.EMAIL;
                    const PASSWORD = process.env.PASSWORD;

                    // creamos funcion que contiene el servicio y la autenticacion
                    const transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                            user: EMAIL,
                            pass: PASSWORD,
                        }
                    })

                    // configurar opciones del mail
                    const mailOptions = {
                        from: EMAIL,
                        to: email,
                        subject: 'Código de confirmación',
                        text: `Hola ${name}: tu código de confirmación es ${confirmationCode}`
                    }

                    // enviamos el email
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            console.log(error);
                            return res.status(404).json({
                                user : userSave,
                                confirmationCode : 'error, reenviar el codigo'
                            })
                        } else {
                            console.log(info.response);
                            return res.status(200).json({
                                user : userSave,
                                confirmationCode
                            })
                        }
                    })
                    //! --------------------------------------------------------
                    //todo ------- fin de nodemailer ---------------------------
                    //! --------------------------------------------------------
                } else {
                    // si el user no se ha guardado
                    return res.status(404).json('el usuario no se ha guardado')
                }

            } catch (error) {
                // no se ha guardado el user
                return res.status(404).json({
                    error: 'error catch save',
                    message: error.message
                })
            }

        } else {
            // el usuario ya existe
            req.file && deleteImgCloudinary(catchImg)
            return res.status(404).json('el usuario ya existe')
        }

    } catch (error) {
        // error registro
        return res.status(404).json({
            error: 'error catch general',
            message: error.message
        })
    }
}


//! --------------------------------------------------------
//? ----------------- Registro con estado ------------------
//! --------------------------------------------------------


//! --- exportamos las funciones

module.exports = { registerLargo }