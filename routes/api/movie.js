const express = require("express");

const router = express.Router();

const movieController = require("../../controllers/movie_controller");

router.get("/all", movieController.allList);
router.get("/details/:id", movieController.movieDetails);
router.post("/addmovie", movieController.addMovie);
router.put("/update/:id", movieController.updateDetails);
router.delete("/delete/:id", movieController.deleteMovie);

module.exports = router;