const Character = require("../models/Character.model");
const Chat = require("../models/Chat.model");
const Menssage = require("../models/Message.model");
const Movie = require("../models/Movie.model");
const User = require("../models/User.model");

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++++++++++++++++++++-------C R U D--------+++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
//! ---------------------------------------------------------------------
//? -------------------------------POST create --------------------------
//! ---------------------------------------------------------------------

const createMessage = async (req, res, next) => {
  try {
    const { owner, type, content } = req.body;
    const { idRecipient } = req.params; // -----> id de a quien quiero hacer el comentario

    const findUser = await User.findById(idRecipient);
    const findCharacter = await Character.findById(idRecipient);
    const findMovie = await Movie.findById(idRecipient);

    /** cuando el findById NO ENCUENTRA EL ELEMENTOS  devuelve un null */
    //todo -----------------------> meter el id del nuevo comentario en postedMessage en el modelo de user
    if (findUser) {
      /// creamos el comentario y lo guardamos
      const newMessage = new Menssage(req.body);
      const savedMessage = await newMessage.save();
      if (type == "private") {
        // TENEMOS QUE EVALUAR SI TENEMOS UN CHAT ABIERTO CON ESTOS DOS USER
        try {
          /// despues de guardarlo comprobamos exista un chat o no

          const chatExistOne = await Chat.findOne({
            userOne: req.user._id,
            userTwo: findUser._id,
          });
          const chatExistTwo = await Chat.findOne({
            userOne: findUser._id,
            userTwo: req.user._id,
          });
          console.log(chatExistOne);
          console.log(chatExistTwo);

          if (chatExistOne != null || chatExistTwo != null) {
            //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // ---------------------------- CHAT EXISTE: TENEMOS QUE ACTUALIZARLO -------------------------------------
            //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            ///&/ existe un chat y entonces lo actualizamos conm el nuevo mensaje

            if (chatExistOne) {
              try {
                await chatExistOne.updateOne({
                  $push: { messages: newMessage._id },
                });

                try {
                  await User.findByIdAndUpdate(req.user._id, {
                    $push: {
                      postedMessages: newMessage._id,
                    },
                  });
                  return res.status(200).json({
                    chat: await Chat.findById(chatExistOne._id),
                    comment: newMessage,
                  });
                } catch (error) {
                  return res.status(404).json({
                    error:
                      "no hemos actualizado el user en la clave postedMenssages",
                    idMessage: newMessage._id,
                  });
                }
              } catch (error) {
                try {
                  await Menssage.findByIdAndDelete(savedMessage._id);
                  return res
                    .status(404)
                    .json(
                      "error en actualizar el chat existente, elimino el comentario"
                    );
                } catch (error) {
                  return res.status(404).json({
                    idCommentNoDeleted: newMessage._id,
                    error:
                      "no he borrado el coment  ni tampoco he actualizdo el chat existente",
                  });
                }
              }
            } else if (chatExistTwo) {
              try {
                await chatExistTwo.updateOne({
                  $push: { messages: newMessage._id },
                });

                try {
                  await User.findByIdAndUpdate(req.user._id, {
                    $push: {
                      postedMessages: newMessage._id,
                    },
                  });
                  return res.status(200).json({
                    chat: await Chat.findById(chatExistTwo._id),
                    comment: newMessage,
                  });
                } catch (error) {
                  return res.status(404).json({
                    error:
                      "no hemos actualizado el user en la clave postedMenssages",
                    idMessage: newMessage._id,
                  });
                }
              } catch (error) {
                try {
                  await Menssage.findByIdAndDelete(savedMessage._id);
                  return res
                    .status(404)
                    .json(
                      "error en actualizar el chat existente, elimino el comentario"
                    );
                } catch (error) {
                  return res
                    .status(404)
                    .json(
                      "no he borrado el coment  ni tampoco he actualizdo el chat existente"
                    );
                }
              }
            }
          } else {
            //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // ---------------------------- CREAR CHAT PORQUE NO EXISTE NINGUNO ---------------------------------------
            //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            /// crear un chat con el comentario que hemos creado
            const newChat = new Chat({
              userOne: req.user._id,
              userTwo: findUser._id,
              messages: [savedMessage._id],
            });

            try {
              await newChat.save();

              try {
                await User.findByIdAndUpdate(req.user._id, {
                  $push: {
                    postedMessages: newMessage._id,
                    chats: newChat._id,
                  },
                });

                try {
                  await User.findByIdAndUpdate(idRecipient, {
                    $push: {
                      chats: newChat._id,
                    },
                  });

                  return res.status(200).json({
                    chat: newChat,
                    comment: newMessage,
                  });
                } catch (error) {
                  return res.status(404).json({
                    error:
                      "no hemos actualizado el user que recibe el comentario la clave chat",
                    idMessage: newMessage._id,
                  });
                }
              } catch (error) {
                return res.status(404).json({
                  error:
                    "no hemos actualizado el user en la clave postedMenssages y en la clave chats",
                  idMessage: newMessage._id,
                });
              }
            } catch (error) {
              // lo borramos porque no nos ha enviado bien el tipo
              try {
                await Menssage.findByIdAndDelete(savedMessage._id);
                return res.status(404).json(error.message);
              } catch (error) {
                return res
                  .status(404)
                  .json(
                    "no se ha creado el chat pero no se ha borrado el comentario"
                  );
              }
            }
          }
        } catch (error) {
          return res.status(404).json(error.message);
        }
      } else if (type == "public") {
        // SIMPLEMENTE CREAMOS EL COMENTARIO Y LO METEMOS EN LOS ARRAY DE LOS MODELOS AL QUE CORRESPONDA -- USER

        try {
          await User.findByIdAndUpdate(req.user._id, {
            $push: {
              postedMessages: newMessage._id,
            },
          });

          try {
            await User.findByIdAndUpdate(idRecipient, {
              $push: {
                commentsPublicByOther: newMessage._id,
              },
            });

            return res.status(200).json({
              userOwner: await User.findById(req.user._id).populate([
                {
                  path: "chats",
                  model: Chat,
                  populate: "messages userOne userTwo",
                },
              ]),
              recipient: await User.findById(idRecipient),
              comentario: newMessage._id,
            });
          } catch (error) {
            return res.status(404).json({
              error:
                "error catch update quien recibe el comentario  -  commentsPublicByOther",
              message: error.message,
            });
          }
        } catch (error) {
          return res.status(404).json({
            error:
              "error catch update quien hace el comentario  -  postedMessages",
            message: error.message,
          });
        }
      } else {
        // lo borramos porque no nos ha enviado bien el tipo
        await Menssage.findByIdAndDelete(savedMessage._id);
        return res.status(404).json(error.message);
      }
    } else if (findCharacter) {
    } else if (findMovie) {
    } else {
      return res.status(404).json("el id no esta correcto");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = { createMessage };
