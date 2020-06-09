const Genre = require("../models/genreSchema");

module.exports.addGenre = async function(req, res){
    try{
        let isGenrePresent = await Genre.findOne({genre: req.body.genre});
        if(isGenrePresent){
            return res.status(409).json({
                message: "Genre is already Present"
            });
        }else{
            let genre = await Genre.create(req.body);
            return res.status(200).json({
                message: "Genre added Successfully"
            });
        }
        

    }catch(err){
        
        return res.status(500).json({
            message: "Server Error"
        });
    }
}

module.exports.deleteGenre = async function(req, res){
    try{
        let genreID = req.params.id;
        let genre = await Genre.findOne({_id: genreID});
        if(genre){
            await Genre.findOneAndDelete({_id: genreID});
            return res.status(200).json({
                message: "Genre deleted successfully"
            });
        }else{
            return res.status(404).json({
                message: "Genre Not Found"
            });
        }
    }catch(err){
        return res.status(500).json({
            message: "Server Error"
        });
    }
}

module.exports.updateGenre = async function(req, res){
    try{
        let GnereID = req.params.id;
        let genre = await Genre.findOne({_id: GnereID});
        if(genre){
            genre.genre = req.body.genre;
            await genre.save();
            return res.status(200).json({
                message: "Genre Updated Sccessfully"
            });
        }else{
            return res.status(404).json({
                message: "Genre Not Found"
            });
        }
    }catch(err){
        return res.status(500).json({
            message: "Server Error"
        });
    }
}