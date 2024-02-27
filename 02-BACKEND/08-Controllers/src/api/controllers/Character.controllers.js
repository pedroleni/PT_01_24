//! --- importaciones de --- middleware de Cloudinary + modelo Character
const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Character = require("../models/Character.model")

/** CRUD
 * CREATE ---> post
 * READ ---> get
 * UPDATE ---> put (actualizacion completa), patch (actualizacion parcial)
 * DELETE ---> delete
 */

//! -----------------------------------------------------
//? ---------------------- POST create ------------------
//! -----------------------------------------------------

const create = async(req, res, next) => {

    // vamos a capturar la url de la imagen que subimos a cloudinary
    /** la imagen se sube antes de ejecutar el controlador >>> capturamos la imagen porque si hay un error
     * en en controlador, una vez dentro, el elemento no se crea */

    // optional chaining ? >>> como la imagen no es obligatoria - required:false - puede ser que no tengamos un req.file
    let catchImg = req.file?.path; // si tiene req.file trae el path y si no tiene req.file no trae el path

    try {
        //! --- ACTUALIZAR LOS INDEXS
        /** los indexs se forman cuando empezamos el create y funcionan cuando la clave es unique 
         * por que? >>> porque si se ha modificado el modelo, podemos sincronizarlo con nuestro controlador */
        await Character.syncIndexes();

        //! --- INSTANCIAR UN CHARACTER >>> new Character
        /** vamos a instanciar un nuevo character y le metemos como info inicial lo que recibimos en el req.body */
        const newCharacter = new Character(req.body);

        //! --- VALORAR SI SE HA RECIBIDO UNA IMAGEN O NO
        /** si recibimos la imagen metemos la url (path) en el objeto creado arriba (en la instancia) */
        if (req.file){
            // si hay file me traes el path de la imagen
            newCharacter.image = catchImg;
        } else {
            // si no hay file metes esta imagen estandar
            newCharacter.image = "https://res.cloudinary.com/deahoouj6/image/upload/v1708714215/placeholder_qj5di6.webp"
        }

        //! --- GUARDAR LA INSTANCIA DEL NUEVO CHARACTER
        const saveCharacter = await newCharacter.save();

        //! -- devolver la respuesta en funcion de SI SE HA GUARDADO O NO
        if (saveCharacter) {
            // si se ha guardado >>> status 200 --- todo ok se ha guardado el character
            return res.status(200).json(saveCharacter)
        } else {
            // si no se ha guardado >>> status 404 --- todo mal, no se ha guardado
            return res.status(404).json("No se ha podido guardar el elemento en la DB ❌")
        }

    } catch (error) {
        //! --- solo entramos en el catch si ha habido un error
        /** si ha habido un error >>> 
         * borramos la imagen de cloudinary porque va antes del controlador
         * y devolvemos respuesta con el error de que no se ha producido el POST (create) */
        req.file?.path && deleteImgCloudinary(catchImg);
        next(error);
        return (
            res.status(404).json({
                message: "Error en la creación del elemento ❌",
                error: error,
            }) && next(error)
        )
    }
}

//! -----------------------------------------------------
//? ---------------------- get by id --------------------
//! -----------------------------------------------------

const getById = async (req, res, next) => {
    try {
        // hago una petición del parametro id
        // cuando vaya a leer la ruta, tengo que buscarlo como un param
        const { id } = req.params;
        // busco dentro del personaje su id con el metodo findById
        const characterById = await Character.findById(id);
        // valoramos si ha encontrado a ese personaje o no
        if (characterById) {
            // si lo ha encontrado, me devueelve el personaje y una respuesta de status todo ok 
            return res.status(200).json(characterById)
        } else {
            // si no lo encuentra, me devueelve una respuesta de status 404, el error es del cliente, y no ha encontrado el id
            return res.status(404).json("no se ha encontrado el character, pon un id correcto")
        }
    } catch (error) {
        // si no es capaz de hacer alguna de las tareas que le pedimos en el try, el intento se rompe y nos lleva al catch, al error
        return res.status(404).json({
            error:"error en la busqueda por id",
            message: error.message,
        })
    }
}

//! -----------------------------------------------------
//? ---------------------- get all ----------------------
//! -----------------------------------------------------

const getAll = async (req, res, next) => {
    try {
        // intenta encontrar todos los characters
        const allCharacter = await Character.find();
        // el find() nos devuelde un array, una coleccion en este caso con los personajes
        // si el lenght de los character es mayor que 0 es porque al menos hay un character
        if (allCharacter.length > 0) {
            // si hay algun character me devuelves todos los personajes >>> los devuelve en un array
            return res.status(200).json(allCharacter)
        } else {
            // si no hay ninguno, pues un error
            return res.status(404).json("no se han encontrado characters, sorry!")
        }
    } catch (error) {
        return res.status(404).json({
            error:"error en la busqueda de los characters",
            message: error.message,
        })
    }
}


//! --- EXPORTAMOS EL CONTROLADOR

module.exports = { 
    create, 
    getById,
    getAll
}