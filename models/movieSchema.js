/***************IMPORTING REQUIRED PACKAGE*****************************/
const mongoose = require("mongoose");

/***************MAKING SCHEMA*****************************/
const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    genre:[{
        type: mongoose.Schema.ObjectId,
        ref: "Genre"
    }]
  },{
      timestamps: true
  });

/***************MAKING MODEL*****************************/
const Movie = mongoose.model("Movie", movieSchema);

/***************EXPORTING MODULE*****************************/

module.exports = Movie;