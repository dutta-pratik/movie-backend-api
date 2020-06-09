/***************IMPORTING REQUIRED PACKAGE*****************************/

const express = require("express");

const router = express.Router();

/***************MAKING ROUTES*****************************/

router.use("/api", require("./api/index"));

/***************EXPORTING ROUTER*****************************/

module.exports = router;