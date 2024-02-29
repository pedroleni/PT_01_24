//! --- importaciones de modelos de datos
const Movie = require("../models/Movie.model")
const Character = require("../models/Character.model")

//! -----------------------------------------------------
//? ---------------------- POST create ------------------
//! -----------------------------------------------------

const createMovie = async (req, res, next) => {
    try {
        // actualizamos indices de mdelo
        await Movie.syncIndexes();
        /** instanciamos nuevo Movie con su body del modelo
         * y guardamos
         */
        const newMovie = new Movie(req.body)
        const savedMovie = await newMovie.save()
        /** devuelve si se ha guardado o no con status y mensaje o movie */
        return res
        .status(savedMovie ? 200 : 404)
        .json(savedMovie ? savedMovie : "error al crear la movie")

    } catch (error) {
        return res.status(404).json({
            error: "error en el catch",
            message: error.message
        }) && next(error)
    }
}

//! -------------------------------- toggle ---------------------------
//? ---------------------- add o delete un character ------------------
//! -------------------------------------------------------------------

/** qué es un toggle ---> elemento intercativo
 * tien dos estados ---> activado y desactivado /// Permite al usuario cmabiar entre dos estados
 * Ej ---> es como un interruptor de la luz. Si está encendido y le doy, lo activo, se apaga la luz. Y viceversa
 */

//? en la ruta (dentro de MovieRoutes) add/:id --->  el id se refiere al id de la pelicula que es el que buscamos con movieByid
const toggleCharacter = async (req, res, next) => {
    // este es el id de la movie que vamos a actualizar
    const { id } = req.params;
    // enviamos esto por el req.body de movie ---> "723623", "827463467", "3848336" ---> una vez aplicado el split(",")
    const { characters } = req.body; 

    /** Buscamos la pelicula por id para ver si existe */
    const movieById = await Movie.findById(id)

    /** hacemos condicional para ver si existe o mandar un error, manejamos esa busqueda */
    if (movieById) {
        /** cargamos el split que taremos del req.body y lo convertimos en un array
         * separando las posiciones con una coma que es como se separan los elementos de un array
         * eso se hace mediante el metodo split
         */
        const arrayIdCharacters = characters.split(",")

        /** recorremos este array y comprobamos:
         * 1) ---> si tenemos el character ---> lo sacamos de la db
         * 2) ---> si no tenemos el character ---> lo metemos en la db
         */

        /** metemos toda la logica del mapeo en un promise.all 
         * para decirle que todas las asincronias que se han ido cumpliendo dentro
         * nos las resuelva --- una vez que terminen las asincronias nos devuelve una promesa
         * diciendo que se han podido cumplir todas --- devuelve >>> el movie actualziado con los characters
         */
        Promise.all(
            arrayIdCharacters.map(async (character, index) => {
                if (movieById.characters.includes(character)) {
                    /** 1) ---> si tenemos el character ---> lo sacamos de la db
                     * usamos $pull
                     */
                    try {
                        await Movie.findByIdAndUpdate(id, {
                            // dentro de character saca el id del elemento que recorro (movie)
                            $pull : { characters : character }
                        })
    
                        try {
                            await Character.findByIdAndUpdate(character, {
                                // sacamos la movie del character
                                $pull : { movies : id }
                            })
                        } catch (error) {
                            return res.status(404).json({
                                error: "error update character - pull",
                                message: error.message
                            }) && next(error)
                        }
                    } catch (error) {
                        return res.status(404).json({
                            error: "error update movie - pull",
                            message: error.message
                        }) && next(error)
                    }
                } else {
                    /** 2) ---> si no tenemos el character ---> lo metemos en la db 
                     * usamos $push
                    */
                    try {
                        await Movie.findByIdAndUpdate(id, {
                            // metemos el character en la movie
                            $push: { characters : character }
                        })
    
                        try {
                            await Character.findByIdAndUpdate(character, {
                                // metemos la movie en el character
                                $push : { movies : id }
                            })
                        } catch (error) {
                            return res.status(404).json({
                                error: "error update character - push",
                                message: error.message
                            }) && next(error)
                        }
                    } catch (error) {
                        return res.status(404).json({
                            error: "error update movie - push",
                            message: error.message
                        }) && next(error)
                    }
                }
            })
        ).then(async () => {
            return res.status(200).json({
                dataUpdate : await Movie.findById(id)
            })
        })
    } else {
        /** si no encuentra el id nos dice que la peli no existe */
        res.status(404).json("esta movie no existe")
    }
}

//! -----------------------------------------------------
//? ---------------------- delete -----------------------
//! -----------------------------------------------------

//? --- LO HACEIS VOSOTROS !!!!! 😃


//! --- exportaciones
module.exports = { createMovie, toggleCharacter }