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

module.exports.movieDetails = async function(req, res){
    try{
        let movieID = await req.params.id;
        let movie = await Movie.findOne({_id: movieID});
        if(movie){
            return res.status(200).json({
                data: movie,
                message: "success in fetching Details"
            });
        }else{
            return res.status(404).json({
                message: "Movie Not Found"
            });
        }
    }catch(err){
        console.log("AllList", err);
        return res.status(500).json({
            message: "Server Error"
        });
    }
}

module.exports.addMovie = async function(req, res){
    try{
        let movie = await Movie.create(req.body);
        if(movie){
            return res.status(200).json({
                data: movie,
                message: "successfully Added"
            });
        }else{
            return res.status(406).json({
                message: "Failed, Not been able to add Movie"
            });
        }
    }catch(err){
        console.log("AllList", err);
        return res.status(500).json({
            message: "Server Error"
        });
    }
}