/***************IMPORTING REQUIRED PACKAGE*****************************/

const express = require("express");

const router = express.Router();

/***************MAKING ROUTES*****************************/

router.use("/movie", require("./movie"));

/***************EXPORTING ROUTER*****************************/

module.exports = router;