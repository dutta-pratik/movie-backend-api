/***************IMPORTING REQUIRED PACKAGE*****************************/

const mongoose = require("mongoose");

/***************MAKING SCHEMA*****************************/

const genreSchema = new mongoose.Schema({
    genre:
    {
        type:String,
        required:true
    }
  },{
      timestamps: true
  });

/***************MAKING MODEL*****************************/

const Genre = mongoose.model("Genre", genreSchema);

/***************EXPORTING MODULE*****************************/

module.exports = Genre;