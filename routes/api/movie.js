const express = require("express");

const router = express.Router();

const movieController = require("../../controllers/movie_controller");
const genreController = require("../../controllers/genre_controller");

router.get("/all", movieController.allList);
router.get("/details/:id", movieController.movieDetails);
router.post("/addmovie", movieController.addMovie);
router.put("/update/:id", movieController.updateDetails);
router.delete("/delete/:id", movieController.deleteMovie);
router.get("/specificgenre/:id", movieController.moviebyGenre);

router.post("/addgenre", genreController.addGenre);
router.delete("/deletegenre/:id", genreController.deleteGenre);
router.put("/updategenre/:id", genreController.updateGenre);

module.exports = router;