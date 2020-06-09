const express = require("express");

const router = express.Router();

const movieController = require("../../controllers/movie_controller");

router.get("/all", movieController.allList);
router.get("/details/:id", movieController.movieDetails);
router.post("/addmovie", movieController.addMovie);

module.exports = router;