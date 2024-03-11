const {
  createMovie,
  toggleCharacter,
} = require("../controllers/Movie.controllers");

const MovieRoutes = require("express").Router();

MovieRoutes.post("/", createMovie);
MovieRoutes.patch("/add/:id", toggleCharacter);
module.exports = MovieRoutes;
