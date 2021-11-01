const Cinema = require ('../models/cinema.models');

// GET------
const getCinema = async (req,res,next)=>{
    try{
            const cinema = await Cinema.find().populate('movies')
            return res.status(200).json(cinema)
    }catch(error){
        return next(error)
    }
};
const getCinemaById = async (req,res,next)=>{
    try{
        const {id} = req.params;
        const findCinema = await Cinema.findById(id);
        return res.status(200).json(findCinema)
    }catch(error){
        return next(error)
    }
}
// POST------
const postCinema = async (req,res,next)=>{
    try{
        const newCinema = new Cinema({
            name: req.body,
            location: req.body,
            movies: []
        })
        const newCinemaInBd= await newCinema.save()
        return res.status(201).json(newCinemaInBd)
    }catch(error){
        return next(error)
    }
};
// PUT------
const putCinema = async (req,res,next)=>{
    try{
        const {id} = req.params;
        const newCinema = new Cinema(req.body);
        newCinema._id = id;
        const cinemaUpdated = await Cinema.findByIdAndUpdate(id, newCinema);
        return res.status(200).json(cinemaUpdated)
    }catch(error){
        return next(error)
    }
};
// PATH------
const patchNewMovieCinema = async (req,res,next)=>{
    try{
        const {id} = req.params
        const idMovie = req.body.idMovie
        const updateCinemaWithMovie = await Cinema.findByIdAndUpdate(id,{$push:{movies:idMovie}})
        return res.status(200).json(updateCinemaWithMovie)
    }catch(error){
        return next(error)
    }
};
// DELETE------
const deleteCinema = async (req,res,next) =>{
    try{
        const {id} = req.params;
        const deletedCinema = await Cinema.findByIdAndDelete(id);
        return res.status(200).json(deletedCinema)
    }catch(error){
       return next(error) 
    }
};


module.exports = {
    getCinema,
    getCinemaById,
    postCinema,
    putCinema,
    patchNewMovieCinema,
    deleteCinema
}