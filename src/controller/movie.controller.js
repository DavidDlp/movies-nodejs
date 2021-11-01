const Movie = require('../models/movies.model')

// GET------
const getAllMovies = async (req,res,next) => {
    try{
        const movies = await Movie.find()
        return res.status(200).json(movies)

    }catch(error){
        return next(error)
    }
};
const getMovieById = async (req,res, next) =>{
    try{
        const {id} = req.params;
        const findMovie = await Movie.findById(id);
        return res.status(200).json(findMovie)
    }catch(error){
        return next(error)
    }
};
const getMovieByTitle = async (req,res, next) =>{
    try{
        const {title} =req.params;
        const findTitle = await Movie.find({title});
        return res.status(200).json(findTitle)
    }catch(error){
        return next(error)
    }
};
const getMovieByGenre = async (req,res, next) =>{
    try{
        const {genre} =req.params;
        const findGenre = await Movie.find({genre});
        return res.status(200).json(findGenre)
    }catch(error){
        return next(error)
    }
};
const getMovieYears =async (req,res, next) =>{
    try{
        const{year} = req.params
        const findYears = await Movie.find({year: {$lt: year}})
        return res.status(200).json(findYears)
    }catch(error){
        return next(error)
    }
};

// POST------
const postMovie = async (req, res, next) =>{
    try{
        const newMovie = new Movie({
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            genre: req.body.genre
        })
        const newMovieInBd = await newMovie.save()
        return res.status(201).json(newMovieInBd)
    }catch(error){
        return next(error)
    }   
};
// PUT------
const putMovie = async (req, res, next) =>{
    try{
        const {id} = req.params;
        const newMovie = new Movie(req.body);
        newMovie._id = id;
        const movieUpdated = await Movie.findByIdAndUpdate(id, newMovie);
        return res.status(200).json(movieUpdated)

    }catch(error){
        return next(error)
    }
}
// DELETE------
const deleteMovie = async (req, res, next) =>{
    try{
        const {id} = req.params;
        const deletedMovie = await Movie.findByIdAndDelete(id);
        return res.status(200).json(deletedMovie)
    }catch(error){
        return next(error)
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    getMovieByTitle,
    getMovieByGenre,
    getMovieYears,
    postMovie,
    putMovie,
    deleteMovie
}