const Movie = require("../models/movieSchema");


module.exports.allList = async function(req, res){
    try{
        let allMovie = await Movie.find({});
        if(allMovie){
            //show list
            return res.status(200).json({
                data: allMovie,
                message: "success"
            });
        }else{
            return res.status(404).json({
                message: "Movie List Not Present"
            });
        }
    }catch(err){

     console.log("AllList", err);
     return res.status(500).json({
         message: "Server Error"
     });

    }
}