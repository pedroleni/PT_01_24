//! --------- nos requerimos mongoose---
const mongoose = require("mongoose");

//! ----------nos traemos de mongoose la parte de los esquemas de datos

const Schema = mongoose.Schema;

//! --------- creamos los esquemas de datos

// Definir el modelo de datos:
// ------------> Le damos a cada clave del objeto el Type (tipo de dato)
// ------------> definimos otras propiedades que limitan la informacion que se puede incluir en esa clave
// ------------> que sea requerido, una longitud maxima y minima, etc etc

const CharacterSchema = new Schema(
  {
    name: { type: String, required: false, unique: false },
    gender: {
      type: String,
      enum: ["hombre", "mujer", "otros"],
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menssage" }],
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

//! -------- con la definicion de datos y su esquema vamos a crear el modelo de datos

const Character = mongoose.model("Character", CharacterSchema);

//! -------- exportar el modelo para que lo utilicen los controladores

module.exports = Character;

//* ------------------------------------------------------------------------
//* ---- PARA PODER PONER MAS DE UNA OPCION VALIDADA POR ENUM EN EL GENDER
//* ------------------------------------------------------------------------

  //?--- en el modelo
    //!--- se cambia el tipo de dato de gender a un array que contenga strings
      /** gender: {
        type: [String],
        enum: ["hombre", "mujer", "otros"],
        required: false,
      }, */

  //?--- en el update o register del controlador
    //!--- si se recibe un array para el gender se verifican los resultados con la funcion enum
      /** if (req.body?.gender) {
        let updatedGender = req.body.gender.filter(g => enumOk(g).check);
        // si hay algun elemento en el array se añade al updateGender para ver si se valida
        if (updatedGender.length > 0) {
          customBody.gender = updatedGender;
        } else {
          // si ningun gender es valido se mantiene el gender que estaba
          customBody.gender = characterById.gender;
        }
      } */

  //?--- uso en insomnia
    //!--- multipar form
      // usaremos comas para separar los string: piscina, terraza
    
    //!--- JSON
      // gender: ['piscina', 'terraza']