const express = require("express");

const router = express.Router();

const movieController = require("../../controllers/movie_controller");

router.get("/all", movieController.allList);

module.exports = router;